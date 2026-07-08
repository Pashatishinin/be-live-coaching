# frontend — architecture & rules

Next.js 16 (App Router) + Sanity CMS frontend, organized with **Feature-Sliced Design (FSD)**. Part of a monorepo that also contains `../studio` (Sanity Studio) at the repo root.

## Tech stack

- **Framework**: Next.js 16 (App Router), React 19
- **CMS**: Sanity (`next-sanity`, `@sanity/image-url`) — content fetched with GROQ
- **i18n**: `next-intl`, locales `en` (default), `ua`, `de`, `localePrefix: "always"` (see `src/shared/lib/i18n/routing.ts`)
- **Styling**: Tailwind CSS v4 (utility classes in JSX) + SCSS Modules for a few components (`*.module.scss`)
- **Animation**: GSAP (`@gsap/react`), custom hooks in `shared/hooks`
- **Email**: `resend` + `react-email` templates
- **Deploy**: Cloudflare via `@opennextjs/cloudflare` / `wrangler`
- **Lint/format**: Biome (tabs, double quotes, `organizeImports: on`) — run via `npm run lint:format` or root `npm run check-all`
- **Path alias**: `@/*` → `src/*`

## Repo layout (monorepo root)

```
be-live-coaching/
├── frontend/        # this app (Next.js)
├── studio/          # Sanity Studio (schemas, structure)
├── .husky/          # git hooks (pre-commit quality gate)
├── biome.json       # shared lint/format config for both apps
└── package.json     # root scripts: dev (runs both), check-all, prepare (husky)
```

Root `npm run dev` runs both `frontend` and `studio` concurrently.

### `.husky/`
Git hooks managed by Husky, installed via the root `prepare` script (`husky`). Only `.husky/pre-commit` is custom; `.husky/_/` is Husky's own bootstrap machinery — never edit it by hand.

`.husky/pre-commit` is the quality gate for every commit, run in order:
1. **Lint & format** — `npx lint-staged`, which runs `biome check --write --no-errors-on-unmatched` on staged `*.{js,ts,jsx,tsx,json,css}` files (see the root `lint-staged` config in `package.json`).
2. **Typecheck** — root `npm run check-all`, which runs `biome check --write .` then `tsc --noEmit` in both `frontend` and `studio`.
3. **Build** — `npm run build --prefix frontend && npm run build --prefix studio`. Both apps must build successfully.

Any step failing aborts the commit. Because step 3 does a full production build of both apps, commits are slower but a broken build can never land. Don't bypass this with `--no-verify` — fix the underlying lint/type/build error instead.

## FSD layers (`frontend/src`)

Layers, from lowest to highest. **Imports only flow downward** — a layer may only import from layers below it, never sideways or upward.

```
app  →  views  →  widgets  →  features  →  entities  →  shared
```

```
src/
├── app/            # Next.js App Router: routes, layouts, robots.ts, sitemap.ts
│   └── [locale]/   # all pages are locale-scoped
├── views/          # one "page composition" component per route, e.g. HomePageView
├── widgets/        # self-contained page sections (HeroSection, FAQSection, Footer, Header...)
├── features/       # user actions / use-cases: form submissions, emails, locale switcher
├── entities/       # domain data: Sanity fetch fns (api/), types (model/), mappers (model/)
└── shared/         # reusable, domain-agnostic building blocks: ui/, lib/, hooks/, data/
```

### `app/`
Route segments only (`page.tsx`, `layout.tsx`, `middleware.ts`, `not-found.tsx`, `robots.ts`, `sitemap.ts`). A page's only job is to render its matching `views/*` component. All routes live under `app/[locale]/...`.

### `views/`
One folder per route, one component per folder (e.g. `views/home/HomePageView.tsx`). A view:
- fetches page data via the matching `entities/*` fetch function,
- composes `widgets/*` sections in order,
- may use `features/*` (e.g. email templates) directly.
Views never contain markup logic beyond composition/ordering — layout/UI logic belongs in widgets.

### `widgets/`
Page sections, grouped by page in subfolders named after the route (`widgets/home/*`, `widgets/about-me/*`, plus page-agnostic ones like `widgets/header`, `widgets/footer`). Conventions:
- One folder per section: `SectionName/SectionName.tsx` (PascalCase component, kebab/PascalCase folder matches component name in singular sections, kebab-case for multi-word section folders, e.g. `hero-section/HeroSection.tsx`).
- Sub-components specific to a section go in a nested `ui/` folder (e.g. `plan-section/ui/PlanCard.tsx`).
- Multi-export widget groups (e.g. `widgets/home`) expose a barrel `index.ts` re-exporting each section — import the barrel from `views`, not deep paths.
- Widgets may import from `entities`, `features`, and `shared`. Widgets never import other widgets directly — composition happens in `views`.

### `features/`
Independent user actions/use-cases, not tied to a specific page: `submit-application`, `submit-callback`, `submit-question`, `locale-switcher`, `emails` (Resend send functions + React Email templates). Server actions use `"use server"`. Features may only import `shared` (they don't reach into `entities` or `widgets`).

### `entities/`
Domain/content models sourced from Sanity, named after the CMS/page domain they back (`home`, `about-me`, `about-blc`, `how-to-choose-coach`, `policy`, `seo`, `footer`). Each entity follows the same internal shape:
```
entities/<name>/
├── api/
│   ├── <name>.api.ts     # groq queries + client.fetch calls, one fn per data slice
│   └── <name>.fetch.ts   # orchestrates the api fns into one payload for the view
├── model/
│   ├── <name>.types.ts   # raw Sanity types + "*WithUrls" derived types
│   └── <name>.mappers.ts # raw Sanity doc -> view-ready shape (e.g. image URL resolution)
└── constant/             # optional static data co-located with the entity
```
Entities may only import `shared` (types, the Sanity client, `urlForImage`, etc.) — never `widgets`, `features`, or other entities' internals except shared base types.

### `shared/`
Domain-agnostic, reusable across everything above it:
```
shared/
├── ui/
│   ├── components/   # buttons/, images/, text/, titles/ — dumb, prop-driven components
│   └── animations/   # ButtonShow, ParallaxWrapper, TextEffect(+.css), DivEffects
├── lib/              # client.ts (Sanity read client), sanity.write.ts, env.ts,
│                     # getLocalizedContent.ts, urlForImage.ts, i18n/ (routing, request, navigation),
│                     # messages/{en,ua,de}.json, types/base.types.ts
├── hooks/            # useAccordian, useButtonShow, useParallax, useDrawArrow, useSvgDraw
└── data/             # static long-form content per locale: cookie/, privacy/, terms/
```
`shared` must never import from `entities`, `features`, `widgets`, or `views` — it's the foundation every other layer depends on, not the reverse.

> **Known violation to not repeat**: `shared/ui/components/text/TextWithTitleContent.tsx` imports a type from `entities/about-me`. This breaks the shared→entities rule above. Don't copy this pattern — if a shared component needs entity-specific typing, make it generic (as `getLocalizedContent<T, R>` already does) or move the component up to the entity/widget that needs it.

## Sanity Studio (`../studio`)

The content backend the frontend reads from. Separate `package.json`/`tsconfig.json` from `frontend`, own dev server (`npm run dev` inside `studio`, or via the root concurrent script), own lint/format config (Prettier + `@sanity/eslint-config-studio`, **not** Biome — semicolon-free, single quotes, 100 print width, per the `prettier` block in `studio/package.json`).

```
studio/
├── sanity.config.ts   # defineConfig: projectId, dataset, plugins, schema, document actions
├── sanity.cli.ts       # Sanity CLI project binding
├── structure.ts        # custom desk structure (S.list()/.listItem() tree, Ukrainian labels + icons)
├── schemaTypes/
│   ├── index.ts         # single schemaTypes[] array imported by sanity.config.ts — every new schema must be added here
│   ├── <name>.ts         # top-level/shared document types: hero.ts, banner.ts, blog.ts, img.ts, link.ts, seo.ts
│   └── <page>/           # page-scoped schemas grouped in folders: home/, about-me/, about-blc/, how-to-choose-coach/, plans/
│       └── <name>.ts
├── static/              # Studio static assets (favicon etc.)
└── dist/                # build output of `sanity build` — generated, don't edit
```

Conventions to follow when adding/editing a schema:
- Every localized document uses three field groups — `{ name: "ua", title: "Українська" }`, `en`/`English`, `de`/`Deutsch` — and one field per locale suffix (`title_ua`, `title_en`, `title_de`, matching the `_ua`/`_en`/`_de` convention the frontend's `getLocalizedContent` expects). Never model a locale as a nested object.
- `defineType`/`defineField` from `sanity` — no bare object schemas.
- Give every document type a `preview.select` + `prepare()` so it's identifiable in the desk list (see `hero.ts`, `benefits.ts`, `img.ts`, `link.ts` as templates); fall back to a placeholder title like `"Нова Перевага (пусто)"` when the field is empty.
- Shared/reusable document types — `img` (a single image as its own document), `link` (localized title + URL) — are referenced from other schemas rather than duplicating image/link fields inline.
- Singleton content (one row of content per concept: `hero`, `seo`, `aboutMe`, `myWhy`, `guide`, `howItWorks`, `heroTitleScroll`) is pinned to a fixed `documentId` in `structure.ts` (`S.document().schemaType(...).documentId(...)`) so editors can't create duplicates; repeatable content (`feedback`, `faq`, `plan`, `blog`, `application`, `callbackRequest`, `faqRequest`) uses `S.documentTypeList(...)` instead.
- `structure.ts` also fixes specific IDs for a bounded set of repeatable-looking items (e.g. `problem_one_id`/`problem_two_id`/`problem_three_id`, `benefit_one_id`…`benefit_four_id`) via `S.documentListItem().id(...)` — these correspond to fixed sections on the page, not a free list, so don't change their IDs without updating the matching GROQ query in `frontend/src/entities/*/api/*.api.ts`.
- `sanity.config.ts`'s `document.actions` protects a hardcoded list of singleton IDs (`hero`, `seo`, `problem_one_id`, …) from `delete`/`duplicate` actions — extend this list when adding new fixed-ID singletons.
- New schema files must be imported into and added to the `schemaTypes` array in `schemaTypes/index.ts`, or Studio won't register them.
- After adding/changing a schema, the frontend's matching `entities/<name>/api/*.api.ts` GROQ query and `model/*.types.ts` types need to be updated to match — the two are not type-checked against each other automatically.

## Cross-cutting conventions

- **Localization**: Sanity documents store one field per locale suffix (`title_ua`, `title_en`, `title_de`), never a nested locale object. Resolve the active locale's field with `getLocalizedContent<T, R>(data, "fieldPrefix", locale)` from `shared/lib/getLocalizedContent.ts`, which falls back to `ua` if the current locale is missing.
- **Data fetching**: All Sanity reads go through `shared/lib/client.ts`; writes (server actions) go through `shared/lib/sanity.write.ts`. Every query lives in an entity's `api/*.api.ts`, never inline in a widget/view.
- **Images**: Resolve Sanity image refs to URLs via `shared/lib/urlForImage.ts` inside entity mappers (`model/*.mappers.ts`) — components should receive a ready `imageUrl: string | null`, not a raw Sanity asset.
- **Types**: Raw Sanity-shaped types and their `*WithUrls` (post-mapper) counterparts both live in `model/*.types.ts`. Base cross-entity types (`ImageAsset`, `Content`, `SVGContent`, `SharedLink`, etc.) live in `shared/lib/types/base.types.ts`.
- **Barrels**: A folder gets an `index.ts` barrel only when something outside it needs to import multiple siblings (e.g. `widgets/home/index.ts`, `widgets/header/index.ts`). Single-export folders (most entities, most features) are imported by their direct file path instead.
- **Styling**: Prefer Tailwind utility classes directly in JSX. Reach for a co-located `Component.module.scss` only when Tailwind can't express it (currently just `Button`).
- **Formatting**: Tabs, double quotes, imports auto-organized — enforced by Biome (`biome.json` at repo root) and the pre-commit hook. Run `npm run lint:format` before committing; don't hand-format against these rules.
- **Server actions**: Files under `features/*` that mutate data start with `"use server"` and take `(prevState, formData)` — follow `SubmitApplication.ts` as the template for new form-submit features.

## Adding new content

- **New page**: add `app/[locale]/<route>/page.tsx` → new `views/<route>/<Route>PageView.tsx` → new `entities/<route>/` (api/model) → compose `widgets/<route>/*` sections, add a Sanity schema in `../studio/schemaTypes/<route>/`.
- **New page section**: add `widgets/<page>/<section>-section/<Section>Section.tsx`, put section-only sub-components in a nested `ui/` folder, export it from `widgets/<page>/index.ts` if that barrel exists, wire the fetch into the entity's `.fetch.ts` and call it from the view.
- **New reusable UI primitive**: goes in `shared/ui/components/<category>/<Name>/<Name>.tsx` — must stay domain-agnostic (no entity imports, no page-specific copy).
