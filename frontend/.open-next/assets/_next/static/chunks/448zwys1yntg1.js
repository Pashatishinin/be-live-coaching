(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	33525,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "warnOnce", { enumerable: !0, get: () => n });
		const n = (e) => {};
	},
	98183,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = {
			assign: () => o,
			searchParamsToUrlQuery: () => s,
			urlQueryToSearchParams: () => a,
		};
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		function s(e) {
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
		function l(e) {
			return "string" == typeof e
				? e
				: ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
					? ""
					: String(e);
		}
		function a(e) {
			const t = new URLSearchParams();
			for (const [r, n] of Object.entries(e))
				if (Array.isArray(n)) for (const e of n) t.append(r, l(e));
				else t.set(r, l(n));
			return t;
		}
		function o(e, ...t) {
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
			DecodeError: () => g,
			MiddlewareNotFoundError: () => N,
			MissingStaticPage: () => w,
			NormalizeError: () => j,
			PageNotFoundError: () => v,
			SP: () => p,
			ST: () => h,
			WEB_VITALS: () => s,
			execOnce: () => l,
			getDisplayName: () => d,
			getLocationOrigin: () => c,
			getURL: () => u,
			isAbsoluteUrl: () => o,
			isResSent: () => f,
			loadGetInitialProps: () => m,
			normalizeRepeatedSlashes: () => x,
			stringifyError: () => y,
		};
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
		function l(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		const a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			o = (e) => a.test(e);
		function c() {
			const { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ":" + r : ""}`;
		}
		function u() {
			const { href: e } = window.location,
				t = c();
			return e.substring(t.length);
		}
		function d(e) {
			return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
		}
		function f(e) {
			return e.finished || e.headersSent;
		}
		function x(e) {
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
			if (r && f(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					"__NEXT_ERROR_CODE",
					{ value: "E1025", enumerable: !1, configurable: !0 },
				);
			return n;
		}
		const p = "u" > typeof performance,
			h =
				p &&
				["mark", "measure", "getEntriesByName"].every(
					(e) => "function" == typeof performance[e],
				);
		class g extends Error {}
		class j extends Error {}
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
		function y(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	63059,
	(e) => {
		const t = (0, e.i(75254).default)("chevron-right", [
			["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
		]);
		e.s(["ChevronRight", 0, t], 63059);
	},
	39221,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"TextContent",
			0,
			({ data: e }) =>
				(0, t.jsx)("div", {
					className: " flex flex-col gap-8",
					children: e?.map((e, n) => {
						const i = `text-${n}-${e.slice(0, 10)}`;
						return (0, t.jsx)(
							"div",
							{
								children: (0, t.jsx)(r.default, {
									children: (0, t.jsx)("p", {
										className:
											"text-center sm:text-left text-[16px] md:text-[18px]",
										children: e,
									}),
								}),
							},
							i,
						);
					}),
				}),
		]);
	},
	36165,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"SubTitle",
			0,
			({ title: e, subTitle: n, description: i, className: s }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${s}`,
					children: [
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-body  max-w-200",
								children: n,
							}),
						}),
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("h3", {
								className:
									"font-header text-[24px]  xl:text-[40px] font-bold leading-[110%]",
								children: e,
							}),
						}),
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-montserrat text-center max-w-200",
								children: i,
							}),
						}),
					],
				}),
		]);
	},
	694,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"SectionTitle",
			0,
			({ title: e, subTitle: n, description: i, className: s }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${s}`,
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
	23506,
	(e) => {
		var t = e.i(65747),
			r = e.i(89970);
		e.s([
			"default",
			0,
			(e, n = 50, i = "top") => {
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
										start: `top ${i}`,
										end: "bottom top",
										scrub: !0,
									},
								},
							);
					},
					{ dependencies: [n, i], scope: e },
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
				const i = `${t}_${r}`,
					s = `${t}_${n}`;
				return e[i] ?? e[s];
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
					position: i = "",
					objectPosition: s,
					inset: l = "",
					rounded: a = "rounded-xl",
					className: o = "aspect-4/5 sm:h-[600px]",
				},
				c,
			) =>
				(0, t.jsx)("div", {
					className: `overflow-hidden w-full flex items-end ${a} ${i} relative sm:aspect-auto ${o}`,
					children: (0, t.jsx)("div", {
						ref: c,
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
								className: `object-cover ${s} scale-130 w-full xl:w-auto ${l}`,
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
				{ image: e, alt: n = "", position: i, objectPosition: s, rounded: l },
				a,
			) =>
				(0, t.jsx)("div", {
					className: `${i} top-0 -z-1 overflow-hidden aspect-[4/5] sm:aspect-auto w-full h-full sm:flex ${l}`,
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
								className: `object-cover ${s} scale-110`,
								sizes:
									"(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw",
							}),
					}),
				}),
		);
		(n.displayName = "ImageBackground"), e.s(["ImageBackground", 0, n]);
	},
	42401,
	(e) => {
		var t = e.i(43476),
			r = e.i(61745),
			n = e.i(71645),
			i = e.i(23506),
			s = e.i(41781),
			l = e.i(17433),
			a = e.i(39221),
			o = e.i(36165);
		e.s([
			"AboutSection",
			0,
			({ data: e }) => {
				const c = (0, r.useLocale)(),
					u = (0, n.useRef)(null);
				(0, i.default)(u, 15, "30%");
				const d = (0, s.getLocalizedContent)(e?.items, "content", c);
				return (0, t.jsx)("section", {
					id: "about",
					className:
						"relative h-full bg-white w-screen  p-4 md:p-16 text-[#242424] overflow-clip",
					children: (0, t.jsxs)("div", {
						className:
							"flex flex-col lg:flex-row gap-10 sm:gap-20 text-[#242424] justify-center",
						children: [
							(0, t.jsx)("div", {
								className: "w-1/2",
								children: (0, t.jsx)("div", {
									className:
										"w-full lg:max-w-161  lg:sticky lg:top-16 hidden lg:block",
									children:
										e?.imageUrl &&
										(0, t.jsx)(l.ImageContainer, {
											objectPosition: "object-right",
											rounded: "rounded-xl",
											ref: u,
											alt: "Benefits Picture",
											image: e.imageUrl,
										}),
								}),
							}),
							(0, t.jsxs)("div", {
								className: "w-full lg:w-1/2 flex flex-col gap-10",
								children: [
									(0, t.jsx)(o.SubTitle, {
										title: d?.title,
										className:
											"items-center text-center sm:text-left sm:items-start",
									}),
									(0, t.jsx)(a.TextContent, { data: d?.desc }),
								],
							}),
						],
					}),
				});
			},
		]);
	},
	46196,
	(e) => {
		var t = e.i(43476),
			r = e.i(63059),
			n = e.i(61745),
			i = e.i(71645),
			s = e.i(38601),
			l = e.i(41781),
			a = e.i(62859),
			o = e.i(45084),
			c = e.i(694);
		e.s([
			"HeroSection",
			0,
			({ data: e }) => {
				const u = (0, i.useRef)(null),
					{ setContainerRef: d } = (0, s.useSvgDraw)({
						url: "/assets/line-2.svg",
						scope: u,
					}),
					f = (0, n.useLocale)(),
					x = (0, l.getLocalizedContent)(e, "content", f);
				return (0, t.jsxs)("section", {
					ref: u,
					id: "how",
					className:
						"relative h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424] overflow-clip",
					children: [
						(0, t.jsx)("div", {
							ref: d,
							className:
								"absolute inset-0 flex items-center justify-center min-w-360 w-screen opacity-50",
						}),
						(0, t.jsxs)("div", {
							className:
								"flex gap-8 text-[#242424] flex-col justify-center  pt-37 pb-28 max-w-150",
							children: [
								(0, t.jsx)(c.SectionTitle, { title: x?.title }),
								(0, t.jsx)(a.default, {
									children: (0, t.jsx)(o.Button, {
										title: x?.link,
										secondary: !0,
										width: "max-w-90",
										link: "#about",
										children: (0, t.jsx)("div", {
											className: "rotate-90",
											children: (0, t.jsx)(r.ChevronRight, { size: 20 }),
										}),
									}),
								}),
							],
						}),
					],
				});
			},
		]);
	},
	3,
	(e) => {
		var t = e.i(43476),
			r = e.i(61745),
			n = e.i(48148),
			i = e.i(71645),
			s = e.i(23506),
			l = e.i(41781),
			a = e.i(39221),
			o = e.i(36165);
		e.s([
			"HowItWorksSection",
			0,
			({ data: e }) => {
				const c = (0, n.useTranslations)("howItWorks"),
					u = (0, r.useLocale)(),
					d = (0, i.useRef)(null);
				(0, s.default)(d, 15, "30%");
				const f = (0, l.getLocalizedContent)(e, "content", u);
				return (0, t.jsx)("section", {
					id: "howItWorks",
					className:
						"relative h-full bg-[#E7EBFA] w-screen  py-16  px-4 md:p-16 text-[#242424] overflow-clip",
					children: (0, t.jsxs)("div", {
						className:
							" flex flex-col lg:flex-row gap-10 lg:gap-20 text-[#242424] justify-center",
						children: [
							(0, t.jsx)("div", {
								className: " w-full lg:w-1/3",
								children: (0, t.jsx)(o.SubTitle, {
									title: c("title"),
									className:
										"items-center text-center sm:text-left sm:items-start",
								}),
							}),
							(0, t.jsx)("div", {
								className: "w-full lg:w-2/3",
								children: (0, t.jsx)(a.TextContent, { data: f }),
							}),
						],
					}),
				});
			},
		]);
	},
	36158,
	(e) => {
		var t = e.i(43476),
			r = e.i(71645),
			n = e.i(23506),
			i = e.i(76484);
		e.s([
			"PhotoSection",
			0,
			({ data: e }) => {
				const s = (0, r.useRef)(null);
				return (
					(0, n.default)(s, 15, "30%"),
					(0, t.jsx)("section", {
						className: "relative h-screen w-full overflow-x-clip",
						children:
							e.imageUrl &&
							(0, t.jsx)(i.ImageBackground, {
								objectPosition: "object-right",
								ref: s,
								image: e?.imageUrl,
								alt: "Hero Background",
								position: "absolute",
							}),
					})
				);
			},
		]);
	},
]);
