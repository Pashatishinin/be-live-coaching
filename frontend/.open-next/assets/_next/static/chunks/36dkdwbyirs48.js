(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	36315,
	(e) => {
		var t = e.i(43476),
			l = e.i(65747),
			s = e.i(89970),
			r = e.i(83495),
			i = e.i(71645);
		s.default.registerPlugin(r.ScrollTrigger),
			e.s([
				"default",
				0,
				({
					children: e,
					animateOnScroll: r = !0,
					delay: n = 0,
					start: a = "top bottom",
					className: c = "",
					rotate: o = 0,
				}) => {
					const u = (0, i.useRef)(null);
					return (
						(0, l.useGSAP)(
							() => {
								u.current &&
									s.default.from(u.current, {
										y: 150,
										rotate: o,
										opacity: 0.4,
										duration: 1,
										delay: n,
										ease: "expo.out",
										scrollTrigger: r
											? { trigger: u.current, start: a, once: !0 }
											: null,
									});
							},
							{ scope: u, dependencies: [] },
						),
						(0, t.jsx)("div", { ref: u, className: c, children: e })
					);
				},
			]);
	},
	37727,
	(e) => {
		const t = (0, e.i(75254).default)("x", [
			["path", { d: "M18 6 6 18", key: "1bl5f8" }],
			["path", { d: "m6 6 12 12", key: "d8bk6v" }],
		]);
		e.s(["X", 0, t], 37727);
	},
	59214,
	(e) => {
		var t = e.i(43476),
			l = e.i(63059),
			s = e.i(61745),
			r = e.i(71645),
			i = e.i(23506),
			n = e.i(38601),
			a = e.i(41781),
			c = e.i(62859),
			o = e.i(36315),
			u = e.i(45084),
			d = e.i(17433),
			x = e.i(65747),
			f = e.i(89970),
			m = e.i(37727);
		const p = ({ data: e, isActive: l, onToggle: i }) => {
			const n = (0, r.useRef)(null),
				a = (0, r.useRef)(null),
				c = (0, r.useRef)(null),
				o = (0, s.useLocale)(),
				u = (0, r.useRef)(null);
			(0, x.useGSAP)(() => {
				l
					? (f.default.to(n.current, {
							backgroundColor: "#E7EBFA",
							duration: 0.4,
							ease: "power2.out",
						}),
						f.default.to(a.current, {
							height: "auto",
							opacity: 1,
							marginTop: 8,
							duration: 0.5,
							ease: "power2.out",
						}),
						f.default.to(c.current, {
							duration: 0.4,
							fontSize: "20",
							ease: "power2.out",
						}),
						f.default.to(u.current, {
							opacity: 0,
							duration: 0.4,
							ease: "power2.out",
						}))
					: (f.default.to(n.current, {
							backgroundColor: "#FFFFFF",
							duration: 0.4,
							ease: "power2.inOut",
						}),
						f.default.to(a.current, {
							height: 0,
							opacity: 0,
							marginTop: 0,
							duration: 0.4,
							ease: "power2.inOut",
						}),
						f.default.to(c.current, {
							duration: 0.4,
							fontSize: "18",
							ease: "power2.out",
						}),
						f.default.to(u.current, {
							opacity: 1,
							duration: 0.4,
							ease: "power2.out",
						}));
			}, [l]);
			const d = e?.[`benefit_content_${o}`];
			return (0, t.jsx)("button", {
				ref: n,
				type: "button",
				onClick: i,
				className:
					"w-full text-left p-4 text-[#242424] font-montserrat bg-[#FFFFFF] max-w-133 rounded-xl border-[0.3px] border-[#E7EBFA] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#D3C3E0] block",
				"aria-label": `${d?.title}`,
				children: (0, t.jsxs)("span", {
					className: "flex flex-col w-full",
					children: [
						(0, t.jsxs)("span", {
							className: "flex justify-between items-center gap-4 w-full",
							children: [
								(0, t.jsx)("h6", {
									ref: c,
									className: "font-semibold ",
									children: d?.title,
								}),
								(0, t.jsx)("span", {
									ref: u,
									className:
										"text-2xl flex items-center justify-center shrink-0 rotate-45",
									children: (0, t.jsx)(m.X, { size: 24 }),
								}),
							],
						}),
						(0, t.jsx)("span", {
							ref: a,
							className: "text-[18px] overflow-hidden block text-left",
							style: { height: 0, opacity: 0 },
							children: d?.desc,
						}),
					],
				}),
			});
		};
		e.s(
			[
				"BenefitsSection",
				0,
				({ data: e }) => {
					const x = (0, r.useRef)(null),
						f = (0, r.useRef)(null),
						m = (0, s.useLocale)();
					(0, i.default)(x, 15, "30%");
					const [h, b] = (0, r.useState)(0),
						{ setContainerRef: g } = (0, n.useSvgDraw)({
							url: "/assets/line-2.svg",
							scope: f,
						}),
						j = (0, a.getLocalizedContent)(e?.sharedLink, "title", m);
					return (0, t.jsxs)("section", {
						ref: f,
						id: "benefits",
						className:
							"relative min-h-screen  p-4 md:p-16 bg-white overflow-clip",
						children: [
							(0, t.jsx)("div", {
								ref: g,
								className:
									"absolute inset-0 flex  items-center justify-center min-w-360 h-screen w-screen opacity-20",
							}),
							(0, t.jsxs)("div", {
								className: "flex flex-col lg:flex-row items-start gap-10 z-1",
								children: [
									(0, t.jsx)("div", {
										className:
											"w-full lg:w-161 lg:sticky lg:top-16 hidden lg:block",
										children:
											e?.imageSelected.imageUrl &&
											(0, t.jsx)(d.ImageContainer, {
												objectPosition: "object-center",
												rounded: "rounded-xl",
												ref: x,
												alt: "Benefits Picture",
												image: e.imageSelected.imageUrl,
											}),
									}),
									(0, t.jsxs)("div", {
										className:
											" flex flex-col gap-8 justify-between items-center lg:items-start w-full lg:w-3/5 z-1 ",
										children: [
											(0, t.jsx)("div", {
												className: "flex flex-col gap-8 md:gap-6",
												children: e?.items?.map((e, l) =>
													(0, t.jsx)(
														o.default,
														{
															children: (0, t.jsx)(p, {
																data: e,
																isActive: h === l,
																onToggle: () => b(h === l ? null : l),
															}),
														},
														l,
													),
												),
											}),
											(0, t.jsx)(c.default, {
												children: (0, t.jsx)(u.Button, {
													title: j,
													secondary: !0,
													border: !0,
													width: "max-w-90",
													link: "/about-blc",
													children: (0, t.jsx)(l.ChevronRight, { size: 20 }),
												}),
											}),
										],
									}),
								],
							}),
						],
					});
				},
			],
			59214,
		);
	},
	38847,
	(e) => {
		var t = e.i(80902),
			l = e.i(22289),
			s = e.i(71645);
		function r(e, t, s) {
			try {
				return e(t);
			} catch (e) {
				return (
					(0, l.l)(
						"[nuqs] Error while parsing value `%s`: %O" +
							(s ? " (for key `%s`)" : ""),
						t,
						e,
						s,
					),
					null
				);
			}
		}
		function i(e) {
			function t(t) {
				if (void 0 === t) return null;
				let l = "";
				if (Array.isArray(t)) {
					if (void 0 === t[0]) return null;
					l = t[0];
				}
				return "string" == typeof t && (l = t), r(e.parse, l);
			}
			return {
				type: "single",
				eq: (e, t) => e === t,
				...e,
				parseServerSide: t,
				withDefault(e) {
					return {
						...this,
						defaultValue: e,
						parseServerSide: (l) => t(l) ?? e,
					};
				},
				withOptions(e) {
					return { ...this, ...e };
				},
			};
		}
		const n = i({ parse: (e) => e, serialize: String });
		function a(e, t) {
			return e.valueOf() === t.valueOf();
		}
		i({
			parse: (e) => {
				const t = parseInt(e);
				return t == t ? t : null;
			},
			serialize: (e) => "" + Math.round(e),
		}),
			i({
				parse: (e) => {
					const t = parseInt(e);
					return t == t ? t - 1 : null;
				},
				serialize: (e) => "" + Math.round(e + 1),
			}),
			i({
				parse: (e) => {
					const t = parseInt(e, 16);
					return t == t ? t : null;
				},
				serialize: (e) => {
					const t = Math.round(e).toString(16);
					return (1 & t.length ? "0" : "") + t;
				},
			}),
			i({
				parse: (e) => {
					const t = parseFloat(e);
					return t == t ? t : null;
				},
				serialize: String,
			}),
			i({ parse: (e) => "true" === e.toLowerCase(), serialize: String }),
			i({
				parse: (e) => {
					const t = parseInt(e);
					return t == t ? new Date(t) : null;
				},
				serialize: (e) => "" + e.valueOf(),
				eq: a,
			}),
			i({
				parse: (e) => {
					const t = new Date(e);
					return t.valueOf() == t.valueOf() ? t : null;
				},
				serialize: (e) => e.toISOString(),
				eq: a,
			}),
			i({
				parse: (e) => {
					const t = new Date(e.slice(0, 10));
					return t.valueOf() == t.valueOf() ? t : null;
				},
				serialize: (e) => e.toISOString().slice(0, 10),
				eq: a,
			});
		const c = (0, t.r)(),
			o = {};
		function u(e, r = {}) {
			const i = (0, s.useId)(),
				n = (0, l.i)(),
				a = (0, l.a)(),
				{
					history: f = "replace",
					scroll: m = n?.scroll ?? !1,
					shallow: p = n?.shallow ?? !0,
					throttleMs: h = t.s.timeMs,
					limitUrlUpdates: b = n?.limitUrlUpdates,
					clearOnDefault: g = n?.clearOnDefault ?? !0,
					startTransition: j,
					urlKeys: v = o,
				} = r,
				y = Object.keys(e).join(","),
				w = (0, s.useMemo)(
					() => Object.fromEntries(Object.keys(e).map((e) => [e, v[e] ?? e])),
					[y, JSON.stringify(v)],
				),
				N = (0, l.r)(Object.values(w)),
				k = N.searchParams,
				S = (0, s.useRef)({}),
				O = (0, s.useMemo)(
					() =>
						Object.fromEntries(
							Object.keys(e).map((t) => [t, e[t].defaultValue ?? null]),
						),
					[
						Object.values(e)
							.map(({ defaultValue: e }) => e)
							.join(","),
					],
				),
				C = t.t.useQueuedQueries(Object.values(w)),
				[E, T] = (0, s.useState)(
					() => d(e, v, k ?? new URLSearchParams(), C).state,
				),
				z = (0, s.useRef)(E);
			if (
				((0, l.c)("[nuq+ %s `%s`] render - state: %O, iSP: %s", i, y, E, k),
				Object.keys(S.current).join("&") !== Object.values(w).join("&"))
			) {
				const { state: t, hasChanged: s } = d(e, v, k, C, S.current, z.current);
				s &&
					((0, l.c)("[nuq+ %s `%s`] State changed: %O", i, y, {
						state: t,
						initialSearchParams: k,
						queuedQueries: C,
						queryRef: S.current,
						stateRef: z.current,
					}),
					(z.current = t),
					T(t)),
					(S.current = Object.fromEntries(
						Object.entries(w).map(([t, l]) => [
							l,
							e[t]?.type === "multi" ? k?.getAll(l) : (k?.get(l) ?? null),
						]),
					));
			}
			(0, s.useEffect)(() => {
				const { state: t, hasChanged: s } = d(e, v, k, C, S.current, z.current);
				s &&
					((0, l.c)("[nuq+ %s `%s`] State changed: %O", i, y, {
						state: t,
						initialSearchParams: k,
						queuedQueries: C,
						queryRef: S.current,
						stateRef: z.current,
					}),
					(z.current = t),
					T(t));
			}, [
				Object.values(w)
					.map((e) => `${e}=${k?.getAll(e)}`)
					.join("&"),
				JSON.stringify(C),
			]),
				(0, s.useEffect)(() => {
					const t = Object.keys(e).reduce(
						(t, s) => (
							(t[s] = ({ state: t, query: r }) => {
								T((n) => {
									const { defaultValue: a } = e[s],
										c = w[s],
										o = t ?? a ?? null;
									return Object.is(n[s] ?? a ?? null, o)
										? ((0, l.c)(
												"[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",
												i,
												y,
												c,
												t,
												a,
												z.current,
											),
											n)
										: ((z.current = { ...z.current, [s]: o }),
											(S.current[c] = r),
											(0, l.c)(
												"[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",
												i,
												y,
												c,
												t,
												a,
												z.current,
											),
											z.current);
								});
							}),
							t
						),
						{},
					);
					for (const s of Object.keys(e)) {
						const e = w[s];
						(0, l.c)("[nuq+ %s `%s`] Subscribing to sync for `%s`", i, e, y),
							c.on(e, t[s]);
					}
					return () => {
						for (const s of Object.keys(e)) {
							const e = w[s];
							(0, l.c)(
								"[nuq+ %s `%s`] Unsubscribing to sync for `%s`",
								i,
								e,
								y,
							),
								c.off(e, t[s]);
						}
					};
				}, [y, w]);
			const M = (0, s.useCallback)(
				(s, r = {}) => {
					let n,
						o = Object.fromEntries(Object.keys(e).map((e) => [e, null])),
						u = "function" == typeof s ? (s(x(z.current, O)) ?? o) : (s ?? o);
					(0, l.c)("[nuq+ %s `%s`] setState: %O", i, y, u);
					let d = 0,
						v = !1,
						k = [];
					for (let [s, i] of Object.entries(u)) {
						const o = e[s],
							u = w[s];
						if (!o || void 0 === i) continue;
						(r.clearOnDefault ?? o.clearOnDefault ?? g) &&
							null !== i &&
							void 0 !== o.defaultValue &&
							(o.eq ?? ((e, t) => e === t))(i, o.defaultValue) &&
							(i = null);
						const x = null === i ? null : (o.serialize ?? String)(i);
						c.emit(u, { state: i, query: x });
						const y = {
							key: u,
							query: x,
							options: {
								history: r.history ?? o.history ?? f,
								shallow: r.shallow ?? o.shallow ?? p,
								scroll: r.scroll ?? o.scroll ?? m,
								startTransition: r.startTransition ?? o.startTransition ?? j,
							},
						};
						if (
							r?.limitUrlUpdates?.method === "debounce" ||
							b?.method === "debounce" ||
							o.limitUrlUpdates?.method === "debounce"
						) {
							!0 === y.options.shallow && console.warn((0, l.s)(422));
							const e =
									r?.limitUrlUpdates?.timeMs ??
									b?.timeMs ??
									o.limitUrlUpdates?.timeMs ??
									t.s.timeMs,
								s = t.t.push(y, e, N, a);
							d < e && ((n = s), (d = e));
						} else {
							const e =
								r?.limitUrlUpdates?.timeMs ??
								o?.limitUrlUpdates?.timeMs ??
								b?.timeMs ??
								r.throttleMs ??
								o.throttleMs ??
								h;
							k.push(t.t.abort(u)), t.n.push(y, e), (v = !0);
						}
					}
					const S = k.reduce(
						(e, t) => t(e),
						v ? t.n.flush(N, a) : t.n.getPendingPromise(N),
					);
					return n ?? S;
				},
				[
					y,
					f,
					p,
					m,
					h,
					b?.method,
					b?.timeMs,
					j,
					w,
					N.updateUrl,
					N.getSearchParamsSnapshot,
					N.rateLimitFactor,
					a,
					O,
				],
			);
			return [(0, s.useMemo)(() => x(E, O), [E, O]), M];
		}
		function d(e, l, s, i, n, a) {
			let c = !1,
				o = Object.entries(e).reduce((e, [o, u]) => {
					var d;
					const x = l?.[o] ?? o,
						f = i[x],
						m = "multi" === u.type ? [] : null,
						p =
							void 0 === f
								? (("multi" === u.type ? s?.getAll(x) : s?.get(x)) ?? m)
								: f;
					return (
						n &&
						a &&
						((d = n[x] ?? m) === p ||
							(null !== d &&
								null !== p &&
								"string" != typeof d &&
								"string" != typeof p &&
								d.length === p.length &&
								d.every((e, t) => e === p[t])))
							? (e[o] = a[o] ?? null)
							: ((c = !0),
								(e[o] = ((0, t.i)(p) ? null : r(u.parse, p, x)) ?? null),
								n && (n[x] = p)),
						e
					);
				}, {});
			if (!c) {
				const t = Object.keys(e),
					l = Object.keys(a ?? {});
				c = t.length !== l.length || t.some((e) => !l.includes(e));
			}
			return { state: o, hasChanged: c };
		}
		function x(e, t) {
			return Object.fromEntries(
				Object.keys(e).map((l) => [l, e[l] ?? t[l] ?? null]),
			);
		}
		e.s(
			[
				"parseAsString",
				0,
				n,
				"useQueryState",
				0,
				(e, t = {}) => {
					const {
							parse: l,
							type: r,
							serialize: i,
							eq: n,
							defaultValue: a,
							...c
						} = t,
						[{ [e]: o }, d] = u(
							{
								[e]: {
									parse: l ?? ((e) => e),
									type: r,
									serialize: i,
									eq: n,
									defaultValue: a,
								},
							},
							c,
						);
					return [
						o,
						(0, s.useCallback)(
							(t, l = {}) =>
								d((l) => ({ [e]: "function" == typeof t ? t(l[e]) : t }), l),
							[e, d],
						),
					];
				},
				"useQueryStates",
				0,
				u,
			],
			38847,
		);
	},
	95187,
	(e, t, l) => {
		Object.defineProperty(l, "__esModule", { value: !0 });
		var s = {
			callServer: () => i.callServer,
			createServerReference: () => a.createServerReference,
			findSourceMapURL: () => n.findSourceMapURL,
		};
		for (var r in s) Object.defineProperty(l, r, { enumerable: !0, get: s[r] });
		const i = e.r(32120),
			n = e.r(92245),
			a = e.r(35326);
	},
	17243,
	(e) => {
		var t = e.i(43476),
			l = e.i(48148),
			s = e.i(71645),
			r = e.i(23506),
			i = e.i(38601),
			n = e.i(17433),
			a = e.i(694),
			c = e.i(38847),
			o = e.i(95187);
		const u = (0, o.createServerReference)(
			"6077168a6ae5a422d596341246598fa70bcfa52b17",
			o.callServer,
			void 0,
			o.findSourceMapURL,
			"SubmitCallbackForm",
		);
		var d = e.i(30182);
		const x = () => {
			const e = (0, l.useTranslations)("callbackModal"),
				[r, i] = (0, c.useQueryState)("contact", c.parseAsString),
				[n, a, o] = (0, s.useActionState)(u, null),
				x = "open" === r,
				f = (0, s.useCallback)(() => {
					i(null, { shallow: !0, history: "replace" });
				}, [i]);
			return ((0, s.useEffect)(() => {
				if (n?.success) {
					const e = setTimeout(() => {
						f();
					}, 2e3);
					return () => clearTimeout(e);
				}
			}, [n?.success, f]),
			(0, s.useEffect)(() => {
				const e = (e) => {
					"Escape" === e.key && f();
				};
				return (
					x &&
						((document.body.style.overflow = "hidden"),
						window.addEventListener("keydown", e)),
					() => {
						(document.body.style.overflow = "unset"),
							window.removeEventListener("keydown", e);
					}
				);
			}, [x, f]),
			x)
				? (0, t.jsxs)("div", {
						className:
							"fixed inset-0 z-[1000] flex items-center justify-center p-4",
						children: [
							(0, t.jsx)("button", {
								type: "button",
								className:
									"absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm cursor-default",
								onClick: f,
							}),
							(0, t.jsxs)("div", {
								className:
									"bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border-2 border-[#D3C3E0]",
								children: [
									(0, t.jsx)("button", {
										type: "button",
										className:
											"absolute top-2 right-5 text-5xl text-gray-400 hover:text-black transition-colors cursor-pointer",
										onClick: f,
										children: "×",
									}),
									n?.success
										? (0, t.jsxs)("div", {
												className: "text-center py-10",
												children: [
													(0, t.jsx)("div", {
														className: "text-5xl mb-4",
														children: "✅",
													}),
													(0, t.jsx)("h3", {
														className: "text-2xl font-bold text-[#242424]",
														children: e("success"),
													}),
													(0, t.jsx)("p", {
														className: "text-gray-500 mt-2",
														children: e("subSuccess"),
													}),
												],
											})
										: (0, t.jsxs)("div", {
												className: "text-center",
												children: [
													(0, t.jsx)("h3", {
														className: "text-xl font-bold text-[#242424] mb-2",
														children: e("title"),
													}),
													(0, t.jsx)("p", {
														className: "text-gray-500 mb-6",
														children: e("subTitle"),
													}),
													(0, t.jsxs)("form", {
														action: a,
														className: "space-y-4 flex flex-col items-center",
														children: [
															(0, t.jsx)("input", {
																name: "fullName",
																required: !0,
																placeholder: e("fullName"),
																className:
																	"w-full p-4 bg-gray-50 border rounded-xl",
															}),
															(0, t.jsx)("input", {
																name: "email",
																type: "email",
																required: !0,
																placeholder: e("email"),
																className:
																	"w-full p-4 bg-gray-50 border rounded-xl",
															}),
															(0, t.jsx)("textarea", {
																name: "message",
																required: !0,
																rows: 4,
																placeholder: e("message"),
																className:
																	"w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-primary resize-none",
															}),
															(0, t.jsx)("div", {
																children: (0, t.jsx)(d.MenuButton, {
																	title: e(o ? "pendingButton" : "button"),
																	type: "submit",
																	disabled: o,
																}),
															}),
														],
													}),
												],
											}),
								],
							}),
						],
					})
				: null;
		};
		var f = e.i(63059);
		const m = (0, e.i(75254).default)("mail", [
			["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
			[
				"rect",
				{ x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
			],
		]);
		var p = e.i(62859),
			h = e.i(45084);
		const b = ({ linkTitle: e, title: l }) => {
			const [s, r] = (0, c.useQueryState)("contact", c.parseAsString);
			return (0, t.jsxs)("div", {
				children: [
					(0, t.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							(0, t.jsx)(m, { size: 20 }),
							(0, t.jsx)("p", {
								className: "font-bold text-[16px] md:text-[20px]",
								children: l,
							}),
						],
					}),
					(0, t.jsx)(p.default, {
						children: (0, t.jsx)(h.Button, {
							title: e,
							secondary: !0,
							onClick: () => r("open"),
							children: (0, t.jsx)(f.ChevronRight, { size: 20 }),
						}),
					}),
				],
			});
		};
		e.s(
			[
				"ContactSection",
				0,
				({ data: e }) => {
					const c = (0, l.useTranslations)("contact"),
						o = (0, s.useRef)(null),
						u = (0, s.useRef)(null),
						{ setContainerRef: d } = (0, i.useSvgDraw)({
							url: "/assets/line-2.svg",
							scope: u,
						});
					return (
						(0, r.default)(o, 15, "30%"),
						(0, t.jsxs)("section", {
							ref: u,
							id: "contacts",
							className:
								"relative z-0 h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424]  overflow-clip",
							children: [
								(0, t.jsx)("div", {
									ref: d,
									className:
										"-z-1 absolute inset-0 flex items-center justify-center min-w-360 w-screen opacity-50",
								}),
								(0, t.jsxs)("div", {
									className: "flex justify-between flex-col md:flex-row gap-6 ",
									children: [
										(0, t.jsx)(a.SectionTitle, {
											title: c("title"),
											subTitle: c("subTitle"),
											description: c("description"),
											className: "items-left text-left",
										}),
										(0, t.jsx)("div", {
											className: "w-full md:w-1/2 flex flex-col",
											children: (0, t.jsx)(b, {
												linkTitle: c("button"),
												title: c("callback"),
											}),
										}),
									],
								}),
								(0, t.jsx)("div", {
									className: "w-full block mt-8 sm:mt-16",
									children:
										e?.imageSelected.imageUrl &&
										(0, t.jsx)(n.ImageContainer, {
											objectPosition: "object-top",
											rounded: "rounded-xl",
											ref: o,
											alt: "Benefits Picture",
											image: e.imageSelected.imageUrl,
										}),
								}),
								(0, t.jsx)(x, {}),
							],
						})
					);
				},
			],
			17243,
		);
	},
	69552,
	(e) => {
		var t = e.i(43476),
			l = e.i(48148),
			s = e.i(36315),
			r = e.i(38433);
		const i = ({ title: e, subTitle: l, description: s, className: i }) =>
			(0, t.jsxs)("div", {
				className: `flex flex-col ${i}`,
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
								"font-body text-[24px]  xl:text-[36px] font-bold leading-[110%]",
							children: e,
						}),
					}),
					(0, t.jsx)(r.default, {
						children: (0, t.jsx)("p", {
							className: "font-montserrat text-center max-w-200",
							children: s,
						}),
					}),
				],
			});
		var n = e.i(694),
			a = e.i(37727),
			c = e.i(61745),
			o = e.i(71645),
			u = e.i(41781);
		const d = ({ data: e }) => {
			const l = (0, c.useLocale)(),
				{
					isOpen: s,
					toggle: r,
					contentRef: i,
					height: n,
				} = (() => {
					const [e, t] = (0, o.useState)(!1),
						[l, s] = (0, o.useState)(0),
						r = (0, o.useRef)(null);
					return (
						(0, o.useEffect)(() => {
							e && r.current ? s(r.current.scrollHeight) : s(0);
						}, [e]),
						{ isOpen: e, toggle: () => t((e) => !e), contentRef: r, height: l }
					);
				})(),
				d = (0, u.getLocalizedContent)(e, "question", l);
			return d
				? (0, t.jsxs)("div", {
						className:
							"flex flex-col max-x-200 items-center border-[0.5px] py-2 sm:p-4 mx-auto rounded-xl border-[#938FAC]",
						children: [
							(0, t.jsx)("button", {
								type: "button",
								className:
									"px-4 md:px-0 w-full cursor-pointer bg-transparent border-none text-left focus:outline-none",
								onClick: r,
								"aria-expanded": s,
								children: (0, t.jsxs)("div", {
									className: "flex justify-between items-center w-full",
									children: [
										(0, t.jsx)("h3", {
											className:
												"font-body block text-[16px] font-semibold w-full",
											children: d?.question,
										}),
										(0, t.jsx)("div", {
											className: `open-cursor text-4xl transform transition-transform duration-300  ${s ? "rotate-0" : "rotate-45"}`,
											children: (0, t.jsx)(a.X, {}),
										}),
									],
								}),
							}),
							(0, t.jsx)("div", {
								ref: i,
								style: { maxHeight: s ? `${n}px` : "0px" },
								className:
									"overflow-hidden transition-max-height duration-500 ease-in-out  px-[16px] md:px-0 w-full",
								children: (0, t.jsx)("p", {
									className: "font-montserrat block my-2 text-[16px] w-full",
									children: d?.answer,
								}),
							}),
						],
					})
				: null;
		};
		var x = e.i(63059),
			f = e.i(38847),
			m = e.i(62859),
			p = e.i(45084);
		const h = ({ linkTitle: e }) => {
			const [l, s] = (0, f.useQueryState)("question", f.parseAsString);
			return (0, t.jsx)(m.default, {
				children: (0, t.jsx)(p.Button, {
					title: e,
					secondary: !0,
					onClick: () => s("open"),
					children: (0, t.jsx)(x.ChevronRight, { size: 20 }),
				}),
			});
		};
		var b = e.i(95187);
		const g = (0, b.createServerReference)(
			"605474233cc26cc533e3268d895fb8dd51eaec7ad9",
			b.callServer,
			void 0,
			b.findSourceMapURL,
			"SubmitQuestionForm",
		);
		var j = e.i(30182);
		const v = () => {
			const e = (0, l.useTranslations)("questionModal"),
				[s, r] = (0, f.useQueryState)("question", f.parseAsString),
				[i, n, a] = (0, o.useActionState)(g, null),
				c = "open" === s,
				u = (0, o.useCallback)(() => {
					r(null, { shallow: !0, history: "replace" });
				}, [r]);
			return ((0, o.useEffect)(() => {
				if (i?.success) {
					const e = setTimeout(() => {
						u();
					}, 2e3);
					return () => clearTimeout(e);
				}
			}, [i?.success, u]),
			(0, o.useEffect)(() => {
				const e = (e) => {
					"Escape" === e.key && u();
				};
				return (
					c &&
						((document.body.style.overflow = "hidden"),
						window.addEventListener("keydown", e)),
					() => {
						(document.body.style.overflow = "unset"),
							window.removeEventListener("keydown", e);
					}
				);
			}, [c, u]),
			c)
				? (0, t.jsxs)("div", {
						className:
							"fixed inset-0 z-[1000] flex items-center justify-center p-4",
						children: [
							(0, t.jsx)("button", {
								type: "button",
								className:
									"absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm cursor-default",
								onClick: u,
							}),
							(0, t.jsxs)("div", {
								className:
									"bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border-2 border-[#D3C3E0]",
								children: [
									(0, t.jsx)("button", {
										type: "button",
										className:
											"absolute top-2 right-5 text-5xl text-gray-400 hover:text-black transition-colors cursor-pointer",
										onClick: u,
										children: "×",
									}),
									i?.success
										? (0, t.jsxs)("div", {
												className: "text-center py-10",
												children: [
													(0, t.jsx)("div", {
														className: "text-5xl mb-4",
														children: "✅",
													}),
													(0, t.jsx)("h3", {
														className: "text-2xl font-bold text-[#242424]",
														children: e("success"),
													}),
													(0, t.jsxs)("p", {
														className: "text-gray-500 mt-2",
														children: [e("subSuccess"), " "],
													}),
												],
											})
										: (0, t.jsxs)("div", {
												className: "text-center",
												children: [
													(0, t.jsx)("h3", {
														className: "text-xl font-bold text-[#242424] mb-2",
														children: e("title"),
													}),
													(0, t.jsx)("p", {
														className: "text-gray-500 mb-6",
														children: e("subTitle"),
													}),
													(0, t.jsxs)("form", {
														action: n,
														className: "space-y-4 flex flex-col items-center",
														children: [
															(0, t.jsx)("textarea", {
																name: "message",
																required: !0,
																rows: 4,
																placeholder: e("message"),
																className:
																	"w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-primary resize-none",
															}),
															(0, t.jsx)("div", {
																children: (0, t.jsx)(j.MenuButton, {
																	title: e(a ? "pendingButton" : "button"),
																	type: "submit",
																	disabled: a,
																}),
															}),
														],
													}),
												],
											}),
								],
							}),
						],
					})
				: null;
		};
		e.s(
			[
				"FAQSection",
				0,
				({ data: e }) => {
					const r = (0, l.useTranslations)("faq");
					return (0, t.jsxs)("section", {
						id: "faq",
						className:
							"text-[#242424] min-h-screen gap-8 p-4 md:p-16 bg-[#E7EBFA] flex flex-col items-center",
						children: [
							(0, t.jsx)(n.SectionTitle, {
								title: r("title"),
								description: r("subTitle"),
								className: "items-center text-center",
							}),
							(0, t.jsx)("div", {
								className: "w-full sm:w-[80%] gap-6 flex flex-col",
								children: e.map((e, l) =>
									(0, t.jsx)(
										"div",
										{
											children: (0, t.jsx)(s.default, {
												children: (0, t.jsx)("div", {
													children: (0, t.jsx)(d, { data: e }),
												}),
											}),
										},
										l,
									),
								),
							}),
							(0, t.jsxs)("div", {
								className: "flex flex-col justify-center items-center",
								children: [
									(0, t.jsx)(i, {
										title: r("bottomTitle"),
										description: r("bottomSubTitle"),
										className: "items-center text-center",
									}),
									(0, t.jsx)(h, { linkTitle: r("link") }),
								],
							}),
							(0, t.jsx)(v, {}),
						],
					});
				},
			],
			69552,
		);
	},
	14243,
	(e) => {
		var t = e.i(43476),
			l = e.i(65747),
			s = e.i(89970),
			r = e.i(85486),
			i = e.i(75254);
		const n = (0, i.default)("circle-arrow-left", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
				["path", { d: "M16 12H8", key: "1fr5h0" }],
			]),
			a = (0, i.default)("circle-arrow-right", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
				["path", { d: "M8 12h8", key: "1wcyev" }],
			]);
		var c = e.i(71645);
		const o = (0, i.default)("star", [
			[
				"path",
				{
					d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
					key: "r04s7s",
				},
			],
		]);
		var u = e.i(57688),
			d = e.i(61745),
			x = e.i(38433);
		const f = (0, c.memo)(({ data: e }) => {
			const l = (0, d.useLocale)(),
				s = e?.[`feedback_${l}`];
			return (0, t.jsx)("div", {
				className:
					"min-w-full flex justify-center text-[#242424] cursor-pointer items-center w-screen",
				children: (0, t.jsxs)("div", {
					className: "max-w-[800px] flex-col flex items-center gap-8 px-2",
					children: [
						(0, t.jsx)("div", {
							className: "flex",
							children: [void 0, void 0, void 0, void 0, void 0].map((e, l) =>
								(0, t.jsx)(o, { fill: "#242424", color: "#242424" }, l),
							),
						}),
						(0, t.jsx)(x.default, {
							children: (0, t.jsx)("p", {
								className:
									"font-montserrat font-bold text-[16px] md:text-[24px] text-center max-w-[90vw]",
								children: s?.text,
							}),
						}),
						(0, t.jsxs)("div", {
							className: "flex gap-5 items-center",
							children: [
								(0, t.jsx)("div", {
									className:
										"relative w-16 h-16 overflow-hidden rounded-full border border-gray-100",
									children:
										e.imageUrl &&
										s &&
										(0, t.jsx)(u.default, {
											src: e.imageUrl,
											alt: s?.name || "User feedback",
											fill: !0,
											className: "object-cover",
										}),
								}),
								(0, t.jsxs)("div", {
									children: [
										(0, t.jsx)("h4", {
											className: "font-semibold leading-[90%]",
											children: s?.name,
										}),
										(0, t.jsx)("h4", { children: s?.job }),
									],
								}),
							],
						}),
					],
				}),
			});
		});
		s.default.registerPlugin(r.Observer),
			e.s(
				[
					"FeedbacksSection",
					0,
					({ data: e = [] }) => {
						const [i, o] = (0, c.useState)(0),
							u = (0, c.useRef)(null),
							d = (0, c.useRef)(null),
							x = e?.length;
						(0, l.useGSAP)(() => {
							0 !== x &&
								s.default.to(u.current, {
									xPercent: -100 * i,
									duration: 0.8,
									ease: "power3.inOut",
									overwrite: "auto",
								});
						}, [i]);
						const m = (0, c.useCallback)(() => {
								s.default.isTweening(u.current) ||
									o((t) => Math.min(t + 1, e.length - 1));
							}, [e.length]),
							p = (0, c.useCallback)(() => {
								s.default.isTweening(u.current) || o((e) => Math.max(e - 1, 0));
							}, []);
						return (
							(0, l.useGSAP)(() => {
								const t = r.Observer.create({
									target: d.current,
									type: "wheel,touch,pointer",
									onLeft: () => {
										i < e.length - 1 && !s.default.isTweening(u.current) && m();
									},
									onRight: () => {
										i > 0 && !s.default.isTweening(u.current) && p();
									},
									tolerance: 50,
									preventDefault: !1,
								});
								return () => t.kill();
							}, [i, m, p]),
							(0, t.jsxs)("section", {
								id: "feedbacks",
								ref: d,
								className:
									"h-full bg-[#ffffff] py-20 px-0 relative overflow-hidden ",
								children: [
									(0, t.jsx)("div", {
										ref: u,
										className: "slider-inner",
										style: { display: "flex", width: "100%" },
										children: e.map((e, l) =>
											(0, t.jsx)(
												"div",
												{
													className: " shrink-0",
													children: (0, t.jsx)(f, { data: e }),
												},
												l,
											),
										),
									}),
									(0, t.jsxs)("div", {
										className:
											" pointer-events-none absolute top-10 inset-0 flex items-start justify-between px-4 md:px-10 w-screen ",
										children: [
											(0, t.jsx)("div", {
												className: "w-12 h-12",
												children:
													i > 0 &&
													(0, t.jsx)("button", {
														type: "button",
														onClick: p,
														className:
															"px-0 py-2 text-[#D3C3E0] cursor-pointer pointer-events-auto",
														"aria-label": "arrow",
														children: (0, t.jsx)(n, { size: 36 }),
													}),
											}),
											(0, t.jsx)("div", {
												className: "w-12 h-12",
												children:
													i < e.length - 1 &&
													(0, t.jsx)("button", {
														type: "button",
														onClick: m,
														className:
															"px-4 py-2 text-[#D3C3E0] cursor-pointer pointer-events-auto",
														"aria-label": "line",
														children: (0, t.jsx)(a, { size: 36 }),
													}),
											}),
										],
									}),
									(0, t.jsx)("div", {
										className: "flex w-[60vw] gap-10 my-16 mx-auto max-w-100",
										children: e.map((e, l) =>
											(0, t.jsx)(
												"div",
												{
													className: `
        w-full h-1 transition-colors duration-300 rounded-2xl
        ${l === i ? "bg-[#D3C3E0]" : "bg-[#E7EBFA]"}
      `,
												},
												l,
											),
										),
									}),
								],
							})
						);
					},
				],
				14243,
			);
	},
	46071,
	(e) => {
		var t = e.i(43476),
			l = e.i(63059),
			s = e.i(61745),
			r = e.i(48148),
			i = e.i(71645),
			n = e.i(23506),
			a = e.i(41781),
			c = e.i(62859),
			o = e.i(38433),
			u = e.i(45084),
			d = e.i(76484);
		const x = ({ children: e }) =>
			(0, t.jsx)("h1", {
				className:
					"tracking-tighter font-header font-bold leading-[80%]  text-center text-[54px] sm:text-[80px]  md:text-[100px] lg:text-left    text-background ",
				children: e,
			});
		e.s(
			[
				"HeroSection",
				0,
				({ data: e }) => {
					const f = (0, s.useLocale)(),
						m = (0, r.useTranslations)("hero"),
						p = (0, i.useRef)(null);
					(0, n.default)(p, 15, "30%");
					const h = (0, a.getLocalizedContent)(e, "title", f);
					return e?.imageUrl
						? e
							? (0, t.jsxs)("section", {
									id: "hero",
									className:
										"relative h-screen w-full overflow-x-clip max-h-225  ",
									children: [
										(0, t.jsx)("div", {
											className:
												"w-full h-screen max-h-225 flex flex-col justify-end max-w-[1440px] m-auto px-4 py-29  sm:px-10 lg:px-16 ",
											children: (0, t.jsxs)("div", {
												className:
													"flex flex-col gap-8  w-full items-center  lg:w-4/7 lg:items-start ",
												children: [
													(0, t.jsx)(o.default, {
														children: (0, t.jsx)(x, { children: h }),
													}),
													(0, t.jsx)("div", {
														children: (0, t.jsx)(c.default, {
															children: (0, t.jsx)(u.Button, {
																title: m("button"),
																primary: !0,
																link: "#plans",
																children: (0, t.jsx)("div", {
																	className: "rotate-90",
																	children: (0, t.jsx)(l.ChevronRight, {
																		size: 20,
																	}),
																}),
															}),
														}),
													}),
												],
											}),
										}),
										(0, t.jsx)(d.ImageBackground, {
											objectPosition:
												"[object-position:80%_center] sm:object-right",
											ref: p,
											image: e.imageUrl,
											alt: "Hero Background",
											position: "absolute",
										}),
									],
								})
							: null
						: (0, t.jsx)("section", {
								className:
									"h-screen bg-slate-900 flex items-center justify-center text-white  ",
								children: "Loading...",
							});
				},
			],
			46071,
		);
	},
	24722,
	(e) => {
		var t = e.i(43476),
			l = e.i(61745),
			s = e.i(38847),
			r = e.i(41781),
			i = e.i(36315),
			n = e.i(48148),
			a = e.i(71645),
			c = e.i(95187);
		const o = (0, c.createServerReference)(
			"60596a9dee5da3178147c64201b383344d824a5085",
			c.callServer,
			void 0,
			c.findSourceMapURL,
			"SubmitApplication",
		);
		var u = e.i(30182);
		const d = () => {
				const e = (0, n.useTranslations)("planModal"),
					[{ plan: l, modal: r }, i] = (0, s.useQueryStates)({
						plan: s.parseAsString,
						modal: s.parseAsString,
					}),
					[c, d, x] = (0, a.useActionState)(o, null),
					f = (0, a.useCallback)(() => {
						i({ plan: null, modal: null });
					}, [i]);
				return ((0, a.useEffect)(() => {
					if (c?.success) {
						const e = setTimeout(() => {
							f();
						}, 2e3);
						return () => clearTimeout(e);
					}
				}, [c, f]),
				(0, a.useEffect)(() => {
					const e = (e) => {
						"Escape" === e.key && f();
					};
					return (
						l &&
							((document.body.style.overflow = "hidden"),
							window.addEventListener("keydown", e)),
						() => {
							(document.body.style.overflow = "unset"),
								window.removeEventListener("keydown", e);
						}
					);
				}, [l, f]),
				"open" !== r)
					? null
					: (0, t.jsxs)("div", {
							className:
								"fixed inset-0 z-[1000] flex items-center justify-center p-4",
							children: [
								(0, t.jsx)("button", {
									type: "button",
									className:
										"absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm cursor-default",
									onClick: f,
									"aria-label": "Close modal",
								}),
								(0, t.jsxs)("div", {
									className:
										"bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border-2 border-[#D3C3E0]",
									onClick: (e) => e.stopPropagation(),
									onKeyDown: (e) => e.stopPropagation(),
									role: "document",
									children: [
										(0, t.jsx)("button", {
											type: "button",
											className:
												"absolute top-2 right-5 text-5xl text-gray-400 hover:text-black transition-colors cursor-pointer",
											onClick: f,
											"aria-label": "Close modal",
											children: "×",
										}),
										c?.success
											? (0, t.jsxs)("div", {
													className: "text-center py-10",
													children: [
														(0, t.jsx)("div", {
															className: "text-5xl mb-4",
															children: "✅",
														}),
														(0, t.jsx)("h3", {
															className: "text-2xl font-bold text-[#242424]",
															children: e("success"),
														}),
														(0, t.jsx)("p", {
															className: "text-gray-500 mt-2",
															children: e("subSuccess"),
														}),
													],
												})
											: (0, t.jsxs)("div", {
													className: "text-center",
													children: [
														(0, t.jsx)("h3", {
															className:
																"text-xl font-medium text-gray-500 uppercase tracking-wide",
															children: e("title"),
														}),
														(0, t.jsxs)("div", {
															className:
																"mt-2 mb-8 flex flex-col items-center gap-4",
															children: [
																(0, t.jsx)("div", {
																	className:
																		"text-4xl font-bold text-[#242424]",
																	children: l,
																}),
																(0, t.jsx)("p", {
																	className: "max-w-60 text-center text-[14px]",
																	children: e("subTitle"),
																}),
															],
														}),
														(0, t.jsxs)("form", {
															action: d,
															className: "space-y-4 flex flex-col items-center",
															children: [
																(0, t.jsx)("input", {
																	type: "hidden",
																	name: "planId",
																	defaultValue: l || "",
																}),
																(0, t.jsx)("input", {
																	name: "fullName",
																	required: !0,
																	placeholder: e("fullName"),
																	className:
																		"w-full p-4 bg-gray-50 border rounded-xl",
																}),
																(0, t.jsx)("input", {
																	name: "email",
																	type: "email",
																	required: !0,
																	placeholder: e("email"),
																	className:
																		"w-full p-4 bg-gray-50 border rounded-xl",
																}),
																(0, t.jsx)("div", {
																	children: (0, t.jsx)(u.MenuButton, {
																		title: e(x ? "pendingButton" : "button"),
																		type: "submit",
																		disabled: x,
																	}),
																}),
															],
														}),
													],
												}),
									],
								}),
							],
						});
			},
			x = ({
				title: e,
				onSubscribe: l,
				description: r,
				isMostPopular: i = !1,
			}) => {
				const [n, a] = (0, s.useQueryStates)({
					plan: s.parseAsString,
					modal: s.parseAsString,
				});
				return (0, t.jsxs)("div", {
					className: `relative text-[#242424] rounded-xl w-full min-h-70 h-full flex flex-col 
            ${i ? "bg-[#D3C3E0]" : "bg-[#f7f8fe] overflow-clip"} 
            `,
					children: [
						i &&
							(0, t.jsx)("div", {
								className:
									"absolute -top-10 right-5 bg-[#D3C3E0] px-4 py-3 rounded-2xl border-[1.5px] border-white",
								children: (0, t.jsx)("p", {
									className: "text-[18px] font-semibold",
									children: "Most popular",
								}),
							}),
						!i &&
							(0, t.jsx)("div", {
								className: "absolut top-0 left-0 scale-150 opacity-10 ",
								children: (0, t.jsx)("img", {
									src: "/assets/line-card.svg",
									alt: "decoration",
									className: "absolute top-0 right-0 ",
								}),
							}),
						(0, t.jsx)("div", {
							className: "p-4 min-h-20",
							children: (0, t.jsx)("h5", {
								className: "font-bold text-[24px] md:text-[28px]",
								children: e,
							}),
						}),
						(0, t.jsxs)("div", {
							className:
								"border-2  border-white  rounded-xl p-4 h-full flex flex-col justify-between",
							children: [
								(0, t.jsx)("div", {
									children: r?.map((e, l) =>
										(0, t.jsxs)(
											"p",
											{
												className: "text-[16px] md:text-[18px] font-medium",
												children: ["- ", e],
											},
											l,
										),
									),
								}),
								(0, t.jsx)("div", {
									className: "flex justify-center w-full",
									children: (0, t.jsx)(u.MenuButton, {
										title: "Choose this plan",
										onClick: () => {
											a({ plan: e, modal: "open" });
										},
									}),
								}),
							],
						}),
					],
				});
			};
		e.s(
			[
				"PlanList",
				0,
				({ data: e }) => {
					const [n, a] = (0, s.useQueryState)("plan", s.parseAsString),
						c = (0, l.useLocale)();
					return (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)("div", {
								className:
									"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
								children: e.map((e, l) => {
									if (e.isNonActive) return null;
									const s = (0, r.getLocalizedContent)(e, "content", c);
									return (0, t.jsx)(
										i.default,
										{
											rotate: ((13 * l) % 21) - 10,
											children: (0, t.jsx)(x, {
												isMostPopular: e.isMostPopular,
												title: e.title,
												description: s?.description,
												onSubscribe: () => a(e.title ?? null),
											}),
										},
										e.title || l,
									);
								}),
							}),
							(0, t.jsx)(d, {}, n || "closed"),
						],
					});
				},
			],
			24722,
		);
	},
	15096,
	(e) => {
		var t = e.i(43476),
			l = e.i(63059),
			s = e.i(61745),
			r = e.i(48148),
			i = e.i(41781),
			n = e.i(62859),
			a = e.i(45084),
			c = e.i(694),
			o = e.i(57688),
			u = e.i(71645);
		const d = [
			"M162.77.13c56.49,24.66,96.17,62.28,120.83,90.44,38.61,44.09,77.21,88.17,76.03,147.63-1,50.44-30.12,85.82-57.02,118.51-14.03,17.05-61.03,72.49-128.97,73.31-26.78.33-45.68-8.49-83.49-26.11-49.3-22.98-77.57-36.83-86.89-74.32-6.79-27.29-2.01-61.01,10.18-82.35,27.44-48.06,87.69-25.05,115.4-7.03,51.2,33.29,72.01,102.03,77.38,120.51,15.55,53.53,13.47,101.86,12.22,126.54-2.14,42.23-9.95,72.87-19.01,108.46-11.85,46.56-25.54,82.8-35.98,107.41q-15.04-22.42-45.13-67.26,30.08,44.84,45.13,67.26c23.43-9.32,46.87-18.63,70.3-27.95",
			"M.16.06c26.93,69.39,53.09,126.48,73.58,168.55,35.71,73.31,57.69,109.5,92.09,144.85,46.99,48.3,79.05,56.45,97.38,58.64,11.08,1.33,53.57,6.42,77.18-20.54,29.04-33.15,17.12-101.53-20.91-122.21-29.88-16.24-66.25-5.35-99.34,4.56-12.49,3.74-151.38,47.5-181.26,162.49-10.7,41.2-3.86,77.86.01,93.7,6.19,25.35,16.47,45.42,31.26,68.98,21.38,34.06,58.43,85.39,120.69,143.97,3.7-8.5,7.41-17,11.11-25.51,4.85-11.13,15.93-36.55,15.93-36.55,0,0-.67,1.53-15.93,36.55l-11.11,25.51c-29.03-6.55-58.06-13.09-87.09-19.64",
			"M356.78.16c-76.2,32.95-141.88,64.78-196.03,92.62-58.16,29.9-109.07,58.32-141.57,112.38C5.39,228.08.05,247.08.17,265.9c.29,45.93,32.99,77.46,42.34,85.76,32.68,29.01,71.84,33.24,108.9,37.25,11.27,1.22,30.01,3.13,54.45.2,37.8-4.54,64.4-17.68,80.9-26.01,24.61-12.44,38.87-19.64,51.34-36.45,13.38-18.03,17.05-36.79,18.67-45.56,2.88-15.59,4.73-25.62,0-34.93-11.62-22.84-53.53-22.79-63.79-22.78-60.02.07-103.36,40.47-108.67,45.56-55.06,52.81-54.83,129.1-54.68,177.68.36,118.18,53.31,209,87.12,256.54q14-18.78,42-56.35-28,37.57-42,56.35c-24.48-7.75-48.97-15.5-73.45-23.25",
		];
		var x = e.i(65747),
			f = e.i(89970),
			m = e.i(83495);
		f.default.registerPlugin(m.ScrollTrigger);
		var p = e.i(38433);
		const h = ({ title: e, description: l, animation: s = !1 }) =>
				(0, t.jsxs)("div", {
					className: "flex flex-col gap-2 ",
					children: [
						(0, t.jsx)(p.default, {
							active: s,
							children: (0, t.jsx)("h6", {
								className: "font-bold",
								children: e,
							}),
						}),
						(0, t.jsx)(p.default, {
							active: s,
							children: (0, t.jsx)("p", {
								className: "whitespace-pre-line",
								children: l,
							}),
						}),
					],
				}),
			b = ({ data: e, index: l }) => {
				const r = (0, u.useRef)(null),
					n = (0, s.useLocale)(),
					a = d[l % d.length],
					c = (0, i.getLocalizedContent)(e, "problem_content", n),
					m = (0, i.getLocalizedContent)(e, "solution_content", n);
				return (
					(({
						scope: e,
						animateOnScroll: t = !0,
						delay: l = 0,
						start: s = "top 80%",
						selector: r = "path, circle, rect, polyline",
						duration: i = 2,
						direction: n = "start",
					}) => {
						(0, x.useGSAP)(
							() => {
								if (!e.current || !t) return;
								const a = e.current.querySelectorAll(r);
								a.length > 0 &&
									(a.forEach((e) => {
										if ("function" != typeof e.getTotalLength) return;
										const t = e.getTotalLength(),
											l = "start" === n ? t : -t;
										f.default.set(e, {
											strokeDasharray: t,
											strokeDashoffset: l,
											opacity: 1,
										});
									}),
									f.default.to(a, {
										strokeDashoffset: 0,
										duration: i,
										ease: "power2.inOut",
										delay: l,
										stagger: 0.2,
										scrollTrigger: { trigger: e.current, start: s, once: !0 },
									}));
							},
							{ scope: e, dependencies: [] },
						);
					})({ scope: r, selector: "path", duration: 1.5, start: "top 85%" }),
					(0, t.jsxs)("div", {
						className:
							"p-2 flex flex-col w-full max-w-125 rounded-lg gap-4 justify-between h-full  mx-auto bg-[#F5F7FF]",
						children: [
							(0, t.jsxs)("div", {
								className:
									"font-montserrat gap-5 flex flex-col items-center  text-center",
								children: [
									(0, t.jsx)("div", {
										className:
											"relative flex items-center overflow-clip rounded-sm w-full h-64",
										children:
											e?.imageUrl &&
											(0, t.jsx)(o.default, {
												src: e?.imageUrl,
												alt: "",
												unoptimized: !0,
												fill: !0,
												className: "object-cover ",
												sizes:
													"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
											}),
									}),
									(0, t.jsx)(h, {
										title: c?.title,
										description: c?.desc,
										animation: !0,
									}),
								],
							}),
							(0, t.jsxs)("div", {
								ref: r,
								className:
									"font-montserrat gap-6 flex flex-col items-center  text-center min-h-60 ",
								children: [
									(0, t.jsxs)("svg", {
										role: "img",
										viewBox: "0 0 399.05 733.13",
										xmlns: "http://www.w3.org/2000/svg",
										className:
											"h-20 w-full fill-none stroke-[#D3C3E0] stroke-[40px] ",
										children: [
											(0, t.jsx)("title", { children: "Arrow decoration" }),
											(0, t.jsx)("path", { d: a }),
										],
									}),
									(0, t.jsx)(h, {
										title: m?.title,
										description: m?.desc,
										animation: !0,
									}),
								],
							}),
						],
					})
				);
			};
		e.s(
			[
				"ProblemsSection",
				0,
				({ data: e }) => {
					const o = (0, r.useTranslations)("problems"),
						u = (0, s.useLocale)(),
						d = (0, i.getLocalizedContent)(e?.sharedLink, "title", u);
					return (0, t.jsxs)("section", {
						id: "problems",
						className:
							"z-1 h-full w-full  p-4 sm:px-16 sm:py-16  bg-[#E7EBFA] text-[#242424] flex flex-col items-center",
						children: [
							(0, t.jsx)(c.SectionTitle, {
								title: o("title"),
								description: o("subTitle"),
								className: "items-center text-center",
							}),
							(0, t.jsx)("div", {
								className:
									"grid grid-cols-1 lg:grid-cols-3  gap-8 w-full mb-12 mt-16",
								children: e?.items?.map((e, l) =>
									(0, t.jsx)(b, { data: e, index: l }, l),
								),
							}),
							(0, t.jsx)(n.default, {
								children: (0, t.jsx)(a.Button, {
									title: d,
									secondary: !0,
									width: "max-w-90",
									link: "/about-blc",
									children: (0, t.jsx)(l.ChevronRight, { size: 20 }),
								}),
							}),
						],
					});
				},
			],
			15096,
		);
	},
]);
