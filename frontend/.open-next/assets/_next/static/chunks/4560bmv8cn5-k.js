(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	98183,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = {
			assign: () => l,
			searchParamsToUrlQuery: () => i,
			urlQueryToSearchParams: () => a,
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		function i(e) {
			const t = {};
			for (const [r, n] of e.entries()) {
				const e = t[r];
				void 0 === e
					? (t[r] = n)
					: Array.isArray(e)
						? e.push(n)
						: (t[r] = [e, n]);
			}
			return t;
		}
		function s(e) {
			return "string" == typeof e
				? e
				: ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
					? ""
					: String(e);
		}
		function a(e) {
			const t = new URLSearchParams();
			for (const [r, n] of Object.entries(e))
				if (Array.isArray(n)) for (const e of n) t.append(r, s(e));
				else t.set(r, s(n));
			return t;
		}
		function l(e, ...t) {
			for (const r of t) {
				for (const t of r.keys()) e.delete(t);
				for (const [t, n] of r.entries()) e.append(t, n);
			}
			return e;
		}
	},
	18967,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = {
			DecodeError: () => x,
			MiddlewareNotFoundError: () => N,
			MissingStaticPage: () => w,
			NormalizeError: () => y,
			PageNotFoundError: () => v,
			SP: () => g,
			ST: () => h,
			WEB_VITALS: () => i,
			execOnce: () => s,
			getDisplayName: () => f,
			getLocationOrigin: () => u,
			getURL: () => c,
			isAbsoluteUrl: () => l,
			isResSent: () => d,
			loadGetInitialProps: () => m,
			normalizeRepeatedSlashes: () => p,
			stringifyError: () => b,
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		const i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
		function s(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		const a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			l = (e) => a.test(e);
		function u() {
			const { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ":" + r : ""}`;
		}
		function c() {
			const { href: e } = window.location,
				t = u();
			return e.substring(t.length);
		}
		function f(e) {
			return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
		}
		function d(e) {
			return e.finished || e.headersSent;
		}
		function p(e) {
			const t = e.split("?");
			return (
				t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
				(t[1] ? `?${t.slice(1).join("?")}` : "")
			);
		}
		async function m(e, t) {
			const r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await m(t.Component, t.ctx) }
					: {};
			const n = await e.getInitialProps(t);
			if (r && d(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					"__NEXT_ERROR_CODE",
					{ value: "E1025", enumerable: !1, configurable: !0 },
				);
			return n;
		}
		const g = "u" > typeof performance,
			h =
				g &&
				["mark", "measure", "getEntriesByName"].every(
					(e) => "function" == typeof performance[e],
				);
		class x extends Error {}
		class y extends Error {}
		class v extends Error {
			constructor(e) {
				super(),
					(this.code = "ENOENT"),
					(this.name = "PageNotFoundError"),
					(this.message = `Cannot find module for page: ${e}`);
			}
		}
		class w extends Error {
			constructor(e, t) {
				super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`);
			}
		}
		class N extends Error {
			constructor() {
				super(),
					(this.code = "ENOENT"),
					(this.message = "Cannot find the middleware module");
			}
		}
		function b(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	33525,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "warnOnce", { enumerable: !0, get: () => n });
		const n = (e) => {};
	},
	63059,
	(e) => {
		const t = (0, e.i(75254).default)("chevron-right", [
			["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
		]);
		e.s(["ChevronRight", 0, t], 63059);
	},
	48148,
	(e) => {
		var t = e.i(61745);
		function r(e, t) {
			return (...e) => {
				try {
					return t(...e);
				} catch {
					throw Error(void 0);
				}
			};
		}
		const n = r(0, t.useTranslations);
		r(0, t.useFormatter), e.s(["useTranslations", 0, n]);
	},
	694,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"SectionTitle",
			0,
			({ title: e, subTitle: n, description: o, className: i }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${i}`,
					children: [
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-body  max-w-200",
								children: n,
							}),
						}),
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("h2", {
								className:
									"tracking-tight text-[36px]  xl:text-[54px] font-header font-bold  leading-[110%]",
								children: e,
							}),
						}),
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-body  font-normal max-w-200",
								children: o,
							}),
						}),
					],
				}),
		]);
	},
	23506,
	(e) => {
		var t = e.i(65747),
			r = e.i(89970);
		e.s([
			"default",
			0,
			(e, n = 50, o = "top") => {
				(0, t.useGSAP)(
					() => {
						const t = e.current;
						t &&
							t.parentElement &&
							r.default.fromTo(
								t,
								{ yPercent: 0 },
								{
									yPercent: n,
									ease: "none",
									scrollTrigger: {
										trigger: t.parentElement,
										start: `top ${o}`,
										end: "bottom top",
										scrub: !0,
									},
								},
							);
					},
					{ dependencies: [n, o], scope: e },
				);
			},
		]);
	},
	41781,
	(e) => {
		e.s([
			"getLocalizedContent",
			0,
			(e, t, r, n = "ua") => {
				if (!e) return;
				const o = `${t}_${r}`,
					i = `${t}_${n}`;
				return e[o] ?? e[i];
			},
		]);
	},
	17433,
	(e) => {
		var t = e.i(43476),
			r = e.i(57688);
		const n = (0, e.i(71645).forwardRef)(
			(
				{
					image: e,
					alt: n = "",
					position: o = "",
					objectPosition: i,
					inset: s = "",
					rounded: a = "rounded-xl",
					className: l = "aspect-4/5 sm:h-[600px]",
				},
				u,
			) =>
				(0, t.jsx)("div", {
					className: `overflow-hidden w-full flex items-end ${a} ${o} relative sm:aspect-auto ${l}`,
					children: (0, t.jsx)("div", {
						ref: u,
						className: "relative w-full h-full ",
						children:
							e &&
							(0, t.jsx)(r.default, {
								src: e,
								alt: n,
								quality: 100,
								priority: !0,
								unoptimized: !0,
								fill: !0,
								className: `object-cover ${i} scale-130 w-full xl:w-auto ${s}`,
								sizes:
									"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
							}),
					}),
				}),
		);
		(n.displayName = "ImageContainer"),
			(n.displayName = "ImageContainer"),
			e.s(["ImageContainer", 0, n]);
	},
	76484,
	(e) => {
		var t = e.i(43476),
			r = e.i(57688);
		const n = (0, e.i(71645).forwardRef)(
			(
				{ image: e, alt: n = "", position: o, objectPosition: i, rounded: s },
				a,
			) =>
				(0, t.jsx)("div", {
					className: `${o} top-0 -z-1 overflow-hidden aspect-[4/5] sm:aspect-auto w-full h-full sm:flex ${s}`,
					children: (0, t.jsx)("div", {
						ref: a,
						className: "relative w-full h-full",
						children:
							e &&
							(0, t.jsx)(r.default, {
								src: e,
								alt: n,
								quality: 95,
								priority: !0,
								unoptimized: !0,
								fill: !0,
								className: `object-cover ${i} scale-110`,
								sizes:
									"(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw",
							}),
					}),
				}),
		);
		(n.displayName = "ImageBackground"), e.s(["ImageBackground", 0, n]);
	},
]);
