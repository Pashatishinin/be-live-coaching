(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	98183,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = {
			assign: () => c,
			searchParamsToUrlQuery: () => o,
			urlQueryToSearchParams: () => a,
		};
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		function o(e) {
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
		function c(e, ...t) {
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
			MiddlewareNotFoundError: () => b,
			MissingStaticPage: () => v,
			NormalizeError: () => y,
			PageNotFoundError: () => j,
			SP: () => m,
			ST: () => g,
			WEB_VITALS: () => o,
			execOnce: () => s,
			getDisplayName: () => f,
			getLocationOrigin: () => u,
			getURL: () => l,
			isAbsoluteUrl: () => c,
			isResSent: () => d,
			loadGetInitialProps: () => h,
			normalizeRepeatedSlashes: () => p,
			stringifyError: () => w,
		};
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
		function s(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		const a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			c = (e) => a.test(e);
		function u() {
			const { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ":" + r : ""}`;
		}
		function l() {
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
		async function h(e, t) {
			const r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await h(t.Component, t.ctx) }
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
		const m = "u" > typeof performance,
			g =
				m &&
				["mark", "measure", "getEntriesByName"].every(
					(e) => "function" == typeof performance[e],
				);
		class x extends Error {}
		class y extends Error {}
		class j extends Error {
			constructor(e) {
				super(),
					(this.code = "ENOENT"),
					(this.name = "PageNotFoundError"),
					(this.message = `Cannot find module for page: ${e}`);
			}
		}
		class v extends Error {
			constructor(e, t) {
				super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`);
			}
		}
		class b extends Error {
			constructor() {
				super(),
					(this.code = "ENOENT"),
					(this.message = "Cannot find the middleware module");
			}
		}
		function w(e) {
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
			({ title: e, subTitle: n, description: i, className: o }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${o}`,
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
								children: i,
							}),
						}),
					],
				}),
		]);
	},
	54580,
	(e) => {
		var t = e.i(43476),
			r = e.i(63059),
			n = e.i(61745),
			i = e.i(48148),
			o = e.i(71645),
			s = e.i(38601),
			a = e.i(62859),
			c = e.i(45084),
			u = e.i(694);
		e.s([
			"HeroSection",
			0,
			() => {
				const e = (0, o.useRef)(null),
					{ setContainerRef: l } = (0, s.useSvgDraw)({
						url: "/assets/line-2.svg",
						scope: e,
					}),
					f = (0, i.useTranslations)("howToChooseCoach");
				return (
					(0, n.useLocale)(),
					(0, t.jsxs)("section", {
						ref: e,
						id: "how",
						className:
							"relative h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424] overflow-clip",
						children: [
							(0, t.jsx)("div", {
								ref: l,
								className:
									"absolute rotate-160 inset-0 flex items-center justify-center min-w-360 w-screen opacity-50",
							}),
							(0, t.jsxs)("div", {
								className:
									"flex gap-8 text-[#242424] flex-col justify-center items-center py-47",
								children: [
									(0, t.jsx)(u.SectionTitle, {
										title: f("title"),
										className: "items-center text-center",
									}),
									(0, t.jsx)(a.default, {
										children: (0, t.jsx)(c.Button, {
											title: f("link"),
											secondary: !0,
											width: "max-w-90",
											link: "#guide",
											children: (0, t.jsx)("div", {
												className: "rotate-90",
												children: (0, t.jsx)(r.ChevronRight, { size: 20 }),
											}),
										}),
									}),
								],
							}),
						],
					})
				);
			},
		]);
	},
]);
