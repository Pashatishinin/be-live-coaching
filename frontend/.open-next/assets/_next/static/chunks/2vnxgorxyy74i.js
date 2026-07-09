(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	33525,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "warnOnce", { enumerable: !0, get: () => l });
		const l = (e) => {};
	},
	98183,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var l = {
			assign: () => o,
			searchParamsToUrlQuery: () => s,
			urlQueryToSearchParams: () => a,
		};
		for (var n in l) Object.defineProperty(r, n, { enumerable: !0, get: l[n] });
		function s(e) {
			const t = {};
			for (const [r, l] of e.entries()) {
				const e = t[r];
				void 0 === e
					? (t[r] = l)
					: Array.isArray(e)
						? e.push(l)
						: (t[r] = [e, l]);
			}
			return t;
		}
		function i(e) {
			return "string" == typeof e
				? e
				: ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
					? ""
					: String(e);
		}
		function a(e) {
			const t = new URLSearchParams();
			for (const [r, l] of Object.entries(e))
				if (Array.isArray(l)) for (const e of l) t.append(r, i(e));
				else t.set(r, i(l));
			return t;
		}
		function o(e, ...t) {
			for (const r of t) {
				for (const t of r.keys()) e.delete(t);
				for (const [t, l] of r.entries()) e.append(t, l);
			}
			return e;
		}
	},
	18967,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var l = {
			DecodeError: () => h,
			MiddlewareNotFoundError: () => y,
			MissingStaticPage: () => w,
			NormalizeError: () => j,
			PageNotFoundError: () => v,
			SP: () => p,
			ST: () => g,
			WEB_VITALS: () => s,
			execOnce: () => i,
			getDisplayName: () => d,
			getLocationOrigin: () => c,
			getURL: () => u,
			isAbsoluteUrl: () => o,
			isResSent: () => f,
			loadGetInitialProps: () => m,
			normalizeRepeatedSlashes: () => x,
			stringifyError: () => b,
		};
		for (var n in l) Object.defineProperty(r, n, { enumerable: !0, get: l[n] });
		const s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
		function i(e) {
			let t,
				r = !1;
			return (...l) => (r || ((r = !0), (t = e(...l))), t);
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
			const l = await e.getInitialProps(t);
			if (r && f(r)) return l;
			if (!l)
				throw Object.defineProperty(
					Error(
						`"${d(e)}.getInitialProps()" should resolve to an object. But found "${l}" instead.`,
					),
					"__NEXT_ERROR_CODE",
					{ value: "E1025", enumerable: !1, configurable: !0 },
				);
			return l;
		}
		const p = "u" > typeof performance,
			g =
				p &&
				["mark", "measure", "getEntriesByName"].every(
					(e) => "function" == typeof performance[e],
				);
		class h extends Error {}
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
		class y extends Error {
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
		const l = r(0, t.useTranslations);
		r(0, t.useFormatter), e.s(["useTranslations", 0, l]);
	},
	694,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"SectionTitle",
			0,
			({ title: e, subTitle: l, description: n, className: s }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${s}`,
					children: [
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-body  max-w-200",
								children: l,
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
								children: n,
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
			(e, l = 50, n = "top") => {
				(0, t.useGSAP)(
					() => {
						const t = e.current;
						t &&
							t.parentElement &&
							r.default.fromTo(
								t,
								{ yPercent: 0 },
								{
									yPercent: l,
									ease: "none",
									scrollTrigger: {
										trigger: t.parentElement,
										start: `top ${n}`,
										end: "bottom top",
										scrub: !0,
									},
								},
							);
					},
					{ dependencies: [l, n], scope: e },
				);
			},
		]);
	},
	41781,
	(e) => {
		e.s([
			"getLocalizedContent",
			0,
			(e, t, r, l = "ua") => {
				if (!e) return;
				const n = `${t}_${r}`,
					s = `${t}_${l}`;
				return e[n] ?? e[s];
			},
		]);
	},
	17433,
	(e) => {
		var t = e.i(43476),
			r = e.i(57688);
		const l = (0, e.i(71645).forwardRef)(
			(
				{
					image: e,
					alt: l = "",
					position: n = "",
					objectPosition: s,
					inset: i = "",
					rounded: a = "rounded-xl",
					className: o = "aspect-4/5 sm:h-[600px]",
				},
				c,
			) =>
				(0, t.jsx)("div", {
					className: `overflow-hidden w-full flex items-end ${a} ${n} relative sm:aspect-auto ${o}`,
					children: (0, t.jsx)("div", {
						ref: c,
						className: "relative w-full h-full ",
						children:
							e &&
							(0, t.jsx)(r.default, {
								src: e,
								alt: l,
								quality: 100,
								priority: !0,
								unoptimized: !0,
								fill: !0,
								className: `object-cover ${s} scale-130 w-full xl:w-auto ${i}`,
								sizes:
									"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
							}),
					}),
				}),
		);
		(l.displayName = "ImageContainer"),
			(l.displayName = "ImageContainer"),
			e.s(["ImageContainer", 0, l]);
	},
	36165,
	(e) => {
		var t = e.i(43476),
			r = e.i(38433);
		e.s([
			"SubTitle",
			0,
			({ title: e, subTitle: l, description: n, className: s }) =>
				(0, t.jsxs)("div", {
					className: `flex flex-col ${s}`,
					children: [
						(0, t.jsx)(r.default, {
							children: (0, t.jsx)("p", {
								className: "font-body  max-w-200",
								children: l,
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
								children: n,
							}),
						}),
					],
				}),
		]);
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
					children: e?.map((e, l) => {
						const n = `text-${l}-${e.slice(0, 10)}`;
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
							n,
						);
					}),
				}),
		]);
	},
	83456,
	(e) => {
		var t = e.i(43476),
			r = e.i(48148),
			l = e.i(71645),
			n = e.i(23506),
			s = e.i(61745),
			i = e.i(41781),
			a = e.i(38433);
		const o = ({ data: e }) => {
			const r = (0, s.useLocale)();
			return (0, t.jsx)("div", {
				className: " flex flex-col gap-8",
				children: e?.map((e, l) => {
					const n = `text-${l}-${e.text_en?.title.slice(0, 10)}`,
						s = (0, i.getLocalizedContent)(e, "text", r);
					return (0, t.jsxs)(
						"div",
						{
							children: [
								(0, t.jsx)(a.default, {
									children: (0, t.jsx)("p", {
										className:
											"text-center sm:text-left text-[16px] md:text-[18px] font-bold",
										children: s?.title,
									}),
								}),
								(0, t.jsx)(a.default, {
									children: (0, t.jsx)("p", {
										className:
											"text-center sm:text-left text-[16px] md:text-[18px]",
										children: s?.desc,
									}),
								}),
							],
						},
						n,
					);
				}),
			});
		};
		var c = e.i(36165);
		e.s(
			[
				"AboutICASection",
				0,
				({ data: e }) => {
					const s = (0, r.useTranslations)("aboutICA"),
						i = (0, l.useRef)(null);
					return (
						(0, n.default)(i, 15, "30%"),
						(0, t.jsx)("section", {
							id: "aboutICA",
							className:
								"relative h-full bg-white w-screen  py-16  px-4 md:p-16 text-[#242424] overflow-clip",
							children: (0, t.jsxs)("div", {
								className:
									" flex flex-col lg:flex-row gap-10 lg:gap-20 text-[#242424] justify-center",
								children: [
									(0, t.jsx)("div", {
										className: " w-full lg:w-1/3",
										children: (0, t.jsx)(c.SubTitle, {
											title: s("title"),
											className:
												"items-center text-center sm:text-left sm:items-start",
										}),
									}),
									(0, t.jsx)("div", {
										className: "w-full lg:w-2/3",
										children: (0, t.jsx)(o, { data: e }),
									}),
								],
							}),
						})
					);
				},
			],
			83456,
		);
	},
	17827,
	(e) => {
		var t = e.i(43476),
			r = e.i(61745),
			l = e.i(48148),
			n = e.i(71645),
			s = e.i(23506),
			i = e.i(41781),
			a = e.i(17433),
			o = e.i(39221),
			c = e.i(694);
		e.s([
			"HeroSection",
			0,
			({ data: e }) => {
				const u = (0, l.useTranslations)("aboutMe"),
					d = (0, r.useLocale)(),
					f = (0, n.useRef)(null);
				(0, s.default)(f, 15, "30%");
				const x = (0, i.getLocalizedContent)(e, "desc", d);
				return (0, t.jsx)("section", {
					id: "about",
					className:
						"relative h-full bg-[#E7EBFA] w-screen  p-4 md:px-16 pt-24 lg:py-24 text-[#242424] overflow-clip",
					children: (0, t.jsxs)("div", {
						className:
							"flex flex-col lg:flex-row gap-10 text-[#242424] justify-between ",
						children: [
							(0, t.jsxs)("div", {
								className: "w-full  flex flex-col gap-10",
								children: [
									(0, t.jsx)(c.SectionTitle, {
										title: u("title"),
										className:
											"items-center text-center sm:text-left sm:items-start",
									}),
									(0, t.jsx)(o.TextContent, { data: x }),
								],
							}),
							(0, t.jsx)("div", {
								className: "w-full flex justify-end",
								children: (0, t.jsx)("div", {
									className:
										"w-full lg:max-w-140  lg:sticky lg:top-16 hidden lg:block ",
									children:
										e?.imageUrl &&
										(0, t.jsx)(a.ImageContainer, {
											objectPosition: "object-right",
											rounded: "rounded-xl",
											ref: f,
											alt: "Benefits Picture",
											image: e.imageUrl,
										}),
								}),
							}),
						],
					}),
				});
			},
		]);
	},
	83061,
	(e) => {
		var t = e.i(43476),
			r = e.i(61745),
			l = e.i(48148),
			n = e.i(71645),
			s = e.i(23506),
			i = e.i(41781),
			a = e.i(17433),
			o = e.i(39221),
			c = e.i(694);
		e.s([
			"MyWhySection",
			0,
			({ data: e }) => {
				const u = (0, l.useTranslations)("myWhy"),
					d = (0, r.useLocale)(),
					f = (0, n.useRef)(null),
					x = (0, n.useRef)(null);
				(0, s.default)(f, 15, "30%"), (0, s.default)(x, 15, "30%");
				const m = (0, i.getLocalizedContent)(e, "desc", d);
				return (0, t.jsx)("section", {
					id: "myWhy",
					className:
						"relative h-full bg-white w-screen  p-4 md:px-16 lg:py-24 text-[#242424] overflow-clip",
					children: (0, t.jsxs)("div", {
						className:
							"flex flex-col-reverse lg:flex-row gap-10 text-[#242424] justify-between ",
						children: [
							(0, t.jsx)("div", {
								className: "w-full flex justify-end",
								children: (0, t.jsx)("div", {
									className:
										"w-full lg:max-w-140  lg:sticky lg:top-16 hidden lg:block ",
									children:
										e?.bigImageUrl &&
										(0, t.jsx)(a.ImageContainer, {
											objectPosition: "object-right",
											rounded: "rounded-xl",
											ref: f,
											alt: "Benefits Picture",
											image: e.bigImageUrl,
										}),
								}),
							}),
							(0, t.jsxs)("div", {
								className: "w-full  flex flex-col gap-10 ",
								children: [
									(0, t.jsx)(c.SectionTitle, {
										subTitle: u("subTitle"),
										title: u("title"),
										className:
											"items-center text-center sm:text-left sm:items-start",
									}),
									(0, t.jsx)(o.TextContent, { data: m }),
								],
							}),
							(0, t.jsx)("div", {
								className: " flex justify-end ",
								children: (0, t.jsx)("div", {
									className:
										"w-screen h-150 lg:w-64 lg:h-64 lg:sticky lg:top-16",
									children:
										e?.smallImageUrl &&
										(0, t.jsx)(a.ImageContainer, {
											objectPosition: "object-center",
											rounded: "rounded-xl",
											ref: x,
											alt: "Benefits Picture",
											image: e.smallImageUrl,
											className: "h-full w-full",
										}),
								}),
							}),
						],
					}),
				});
			},
		]);
	},
]);
