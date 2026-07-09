(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	38433,
	(e) => {
		var t = e.i(43476),
			r = e.i(65747),
			n = e.i(89970);
		let i,
			l,
			o = "function" == typeof Symbol ? Symbol() : "_split",
			a,
			s = "u" > typeof Intl && "Segmenter" in Intl ? new Intl.Segmenter() : 0,
			u = (e) =>
				"string" == typeof e
					? u(document.querySelectorAll(e))
					: "length" in e
						? Array.from(e).reduce(
								(e, t) => (
									"string" == typeof t ? e.push(...u(t)) : e.push(t), e
								),
								[],
							)
						: [e],
			c = (e) => u(e).filter((e) => e instanceof HTMLElement),
			f = [],
			d = () => {},
			h = { add: (e) => e() },
			p = /\s+/g,
			m =
				/\p{RI}\p{RI}|\p{Emoji}(\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u{200D}\p{Emoji}(\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*|./gu,
			g = { left: 0, top: 0, width: 0, height: 0 },
			y = (e, t) => {
				for (; ++t < e.length && e[t] === g; );
				return e[t] || g;
			},
			b = ({ element: e, html: t, ariaL: r, ariaH: n }) => {
				(e.innerHTML = t),
					r ? e.setAttribute("aria-label", r) : e.removeAttribute("aria-label"),
					n
						? e.setAttribute("aria-hidden", n)
						: e.removeAttribute("aria-hidden");
			},
			v = (e, t) => {
				if (t) {
					let r = new Set(e.join("").match(t) || f),
						n = e.length,
						i,
						l,
						o,
						a;
					if (r.size) {
						for (; --n > -1; )
							for (o of ((l = e[n]), r))
								if (o.startsWith(l) && o.length > l.length) {
									for (
										i = 0, a = l;
										o.startsWith((a += e[n + ++i])) && a.length < o.length;
									);
									if (i && a.length === o.length) {
										(e[n] = o), e.splice(n + 1, i);
										break;
									}
								}
					}
				}
				return e;
			},
			x = (e) =>
				"inline" === window.getComputedStyle(e).display &&
				(e.style.display = "inline-block"),
			j = (e, t, r) =>
				t.insertBefore(
					"string" == typeof e ? document.createTextNode(e) : e,
					r,
				),
			w = (e, t, r) => {
				let n = t[e + "sClass"] || "",
					{ tag: i = "div", aria: l = "auto", propIndex: o = !1 } = t,
					a = "line" === e ? "block" : "inline-block",
					s = n.indexOf("++") > -1,
					u = (t) => {
						const u = document.createElement(i),
							c = r.length + 1;
						return (
							n && (u.className = n + (s ? " " + n + c : "")),
							o && u.style.setProperty("--" + e, c + ""),
							"none" !== l && u.setAttribute("aria-hidden", "true"),
							"span" !== i &&
								((u.style.position = "relative"), (u.style.display = a)),
							(u.textContent = t),
							r.push(u),
							u
						);
					};
				return s && (n = n.replace("++", "")), (u.collection = r), u;
			},
			C = (e, t, r, n, i, l, o, a, u, c) => {
				var d;
				let h = Array.from(e.childNodes),
					m = 0,
					{ wordDelimiter: g, reduceWhiteSpace: y = !0, prepareText: b } = t,
					w = e.getBoundingClientRect(),
					_ = w,
					S =
						!y &&
						"pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
					E = 0,
					P = r.collection,
					O,
					R,
					N,
					k,
					A,
					M,
					L,
					T,
					z,
					B,
					I,
					$,
					D,
					U,
					F,
					W,
					H,
					q;
				for (
					"object" == typeof g
						? ((N = g.delimiter || g), (R = g.replaceWith || ""))
						: (R = "" === g ? "" : g || " "),
						O = " " !== R;
					m < h.length;
					m++
				)
					if (3 === (k = h[m]).nodeType) {
						for (
							F = k.textContent || "",
								y
									? (F = F.replace(p, " "))
									: S && (F = F.replace(/\n/g, R + "\n")),
								b && (F = b(F, e)),
								k.textContent = F,
								H = (A = R || N ? F.split(N || R) : F.match(a) || f)[
									A.length - 1
								],
								T = O ? " " === H.slice(-1) : !H,
								H || A.pop(),
								_ = w,
								(L = O ? " " === A[0].charAt(0) : !A[0]) && j(" ", e, k),
								A[0] || A.shift(),
								v(A, u),
								(l && c) || (k.textContent = ""),
								z = 1;
							z <= A.length;
							z++
						)
							if (
								((W = A[z - 1]),
								!y &&
									S &&
									"\n" === W.charAt(0) &&
									(null == (d = k.previousSibling) || d.remove(),
									j(document.createElement("br"), e, k),
									(W = W.slice(1))),
								y || "" !== W)
							)
								if (" " === W) e.insertBefore(document.createTextNode(" "), k);
								else {
									if (
										(O && " " === W.charAt(0) && j(" ", e, k),
										E && 1 === z && !L && P.indexOf(E.parentNode) > -1
											? (M = P[P.length - 1]).appendChild(
													document.createTextNode(n ? "" : W),
												)
											: (j((M = r(n ? "" : W)), e, k),
												E && 1 === z && !L && M.insertBefore(E, M.firstChild)),
										n)
									)
										for (
											q = 0,
												I = s
													? v(
															[...s.segment(W)].map((e) => e.segment),
															u,
														)
													: W.match(a) || f;
											q < I.length;
											q++
										)
											M.appendChild(
												" " === I[q] ? document.createTextNode(" ") : n(I[q]),
											);
									if (l && c) {
										if (
											((F = k.textContent =
												F.substring(W.length + 1, F.length)),
											(B = M.getBoundingClientRect()).top > _.top &&
												B.left <= _.left)
										) {
											for (
												$ = e.cloneNode(), D = e.childNodes[0];
												D && D !== M;
											)
												(U = D), (D = D.nextSibling), $.appendChild(U);
											e.parentNode.insertBefore($, e), i && x($);
										}
										_ = B;
									}
									(z < A.length || T) &&
										j(
											z >= A.length
												? " "
												: O && " " === W.slice(-1)
													? " " + R
													: R,
											e,
											k,
										);
								}
							else j(R, e, k);
						e.removeChild(k), (E = 0);
					} else
						1 === k.nodeType &&
							(o && o.indexOf(k) > -1
								? (P.indexOf(k.previousSibling) > -1 &&
										P[P.length - 1].appendChild(k),
									(E = k))
								: (C(k, t, r, n, i, l, o, a, u, !0), (E = 0)),
							i && x(k));
			},
			_ = class e {
				constructor(e, t) {
					(this.isSplit = !1),
						a || S.register(window.gsap),
						(this.elements = c(e)),
						(this.chars = []),
						(this.words = []),
						(this.lines = []),
						(this.masks = []),
						(this.vars = t),
						this.elements.forEach((e) => {
							var r;
							!1 !== t.overwrite &&
								(null == (r = e[o]) ||
									r._data.orig.filter(({ element: t }) => t === e).forEach(b)),
								(e[o] = this);
						}),
						(this._split = () => this.isSplit && this.split(this.vars));
					let r = [],
						n,
						i = () => {
							let e = r.length,
								t;
							for (; e--; ) {
								const n = (t = r[e]).element.offsetWidth;
								if (n !== t.width) {
									(t.width = n), this._split();
									return;
								}
							}
						};
					(this._data = {
						orig: r,
						obs:
							"u" > typeof ResizeObserver &&
							new ResizeObserver(() => {
								clearTimeout(n), (n = setTimeout(i, 200));
							}),
					}),
						d(this),
						this.split(t);
				}
				split(e) {
					return (
						(this._ctx || h).add(() => {
							this.isSplit && this.revert(),
								(this.vars = e = e || this.vars || {});
							let {
									type: t = "chars,words,lines",
									aria: r = "auto",
									deepSlice: n = !0,
									smartWrap: i,
									onSplit: o,
									autoSplit: a = !1,
									specialChars: s,
									mask: f,
								} = this.vars,
								d = t.indexOf("lines") > -1,
								h = t.indexOf("chars") > -1,
								p = t.indexOf("words") > -1,
								b = h && !p && !d,
								v =
									s &&
									("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s),
								x = v ? RegExp(v.source + "|" + m.source, "gu") : m,
								j = !!e.ignore && c(e.ignore),
								{ orig: _, animTime: S, obs: E } = this._data,
								P;
							(h || p || d) &&
								(this.elements.forEach((t, l) => {
									(_[l] = {
										element: t,
										html: t.innerHTML,
										ariaL: t.getAttribute("aria-label"),
										ariaH: t.getAttribute("aria-hidden"),
									}),
										"auto" === r
											? t.setAttribute(
													"aria-label",
													(t.textContent || "").trim(),
												)
											: "hidden" === r && t.setAttribute("aria-hidden", "true");
									let o = [],
										a = [],
										s = [],
										c = h ? w("char", e, o) : null,
										f = w("word", e, a),
										m,
										S,
										E,
										P;
									if ((C(t, e, f, c, b, n && (d || b), j, x, v, !1), d)) {
										let r,
											n,
											i = u(t.childNodes),
											l =
												((r = w("line", e, s)),
												(n = window.getComputedStyle(t).textAlign || "left"),
												(e, l) => {
													const o = r("");
													for (
														o.style.textAlign = n, t.insertBefore(o, i[e]);
														e < l;
														e++
													)
														o.appendChild(i[e]);
													o.normalize();
												}),
											o,
											a = [],
											c = 0,
											f = i.map((e) =>
												1 === e.nodeType ? e.getBoundingClientRect() : g,
											),
											d = g,
											h;
										for (m = 0; m < i.length; m++)
											1 === (o = i[m]).nodeType &&
												("BR" === o.nodeName
													? ((m && "BR" === i[m - 1].nodeName) ||
															(a.push(o), l(c, m + 1)),
														(c = m + 1),
														(d = y(f, m)))
													: ((h = f[m]),
														m &&
															h.top > d.top &&
															h.left < d.left + d.width - 1 &&
															(l(c, m), (c = m)),
														(d = h)));
										c < m && l(c, m),
											a.forEach((e) => {
												var t;
												return null == (t = e.parentNode)
													? void 0
													: t.removeChild(e);
											});
									}
									if (!p) {
										for (m = 0; m < a.length; m++)
											if (
												((S = a[m]),
												h || !S.nextSibling || 3 !== S.nextSibling.nodeType)
											)
												if (i && !d) {
													for (
														(E =
															document.createElement("span")).style.whiteSpace =
															"nowrap";
														S.firstChild;
													)
														E.appendChild(S.firstChild);
													S.replaceWith(E);
												} else S.replaceWith(...S.childNodes);
											else
												(P = S.nextSibling) &&
													3 === P.nodeType &&
													((P.textContent =
														(S.textContent || "") + (P.textContent || "")),
													S.remove());
										(a.length = 0), t.normalize();
									}
									this.lines.push(...s),
										this.words.push(...a),
										this.chars.push(...o);
								}),
								f &&
									this[f] &&
									this.masks.push(
										...this[f].map((e) => {
											const t = e.cloneNode();
											return (
												e.replaceWith(t),
												t.appendChild(e),
												e.className &&
													(t.className = e.className.trim() + "-mask"),
												(t.style.overflow = "clip"),
												t
											);
										}),
									)),
								(this.isSplit = !0),
								l &&
									d &&
									(a
										? l.addEventListener("loadingdone", this._split)
										: "loading" === l.status &&
											console.warn("SplitText called before fonts loaded")),
								(P = o && o(this)) &&
									P.totalTime &&
									(this._data.anim = S ? P.totalTime(S) : P),
								d &&
									a &&
									this.elements.forEach((e, t) => {
										(_[t].width = e.offsetWidth), E && E.observe(e);
									});
						}),
						this
					);
				}
				kill() {
					const { obs: e } = this._data;
					e && e.disconnect(),
						null == l || l.removeEventListener("loadingdone", this._split);
				}
				revert() {
					var e, t;
					if (this.isSplit) {
						const { orig: r, anim: n } = this._data;
						this.kill(),
							r.forEach(b),
							(this.chars.length =
								this.words.length =
								this.lines.length =
								r.length =
								this.masks.length =
									0),
							(this.isSplit = !1),
							n && ((this._data.animTime = n.totalTime()), n.revert()),
							null == (t = (e = this.vars).onRevert) || t.call(e, this);
					}
					return this;
				}
				static create(t, r) {
					return new e(t, r);
				}
				static register(e) {
					(i = i || e || window.gsap) &&
						((u = i.utils.toArray), (d = i.core.context || d)),
						!a && window.innerWidth > 0 && ((l = document.fonts), (a = !0));
				}
			};
		_.version = "3.14.2";
		const S = _;
		var E = e.i(83495),
			P = e.i(71645);
		n.default.registerPlugin(E.ScrollTrigger, S),
			e.s(
				[
					"default",
					0,
					({
						children: e,
						animateOnScroll: i = !0,
						delay: l = 0,
						start: o = "top 80%",
						className: a = "",
						active: s = !0,
					}) => {
						const u = (0, P.useRef)(null),
							c = (0, P.useRef)(null),
							f = (0, P.useRef)(null),
							{ contextSafe: d } = (0, r.useGSAP)({ scope: u }),
							h = d(() => {
								if (!u.current || !u.current.textContent?.trim()) return;
								const e = u.current,
									t = e.querySelector("h1, h2, h3, p, span") || e;
								c.current && c.current.revert(),
									f.current && f.current.revert();
								try {
									if (
										((f.current = new S(t, {
											type: "lines",
											linesClass: "line-mask",
										})),
										!f.current.lines?.length)
									)
										return;
									(c.current = new S(f.current.lines, { type: "lines" })),
										i &&
											c.current.lines &&
											n.default.from(c.current.lines, {
												yPercent: 100,
												autoAlpha: 0,
												stagger: 0.08,
												duration: 0.8,
												ease: "power3.out",
												delay: l,
												scrollTrigger: { trigger: t, start: o, once: !0 },
											});
								} catch (e) {
									console.warn("GSAP TextEffect Error:", e);
								}
							});
						return ((0, r.useGSAP)(
							() => {
								if (!s || !e) return;
								document.fonts.ready.then(() => {
									h();
								});
								const t = () => h();
								return (
									window.addEventListener("resize", t),
									() => window.removeEventListener("resize", t)
								);
							},
							{ scope: u, dependencies: [e] },
						),
						s)
							? (0, t.jsx)("div", {
									ref: u,
									className: a,
									style: { visibility: "visible", position: "relative" },
									"aria-hidden": "true",
									children: e,
								})
							: (0, t.jsx)(t.Fragment, { children: e });
					},
				],
				38433,
			);
	},
	95057,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = {
			formatUrl: () => a,
			formatWithValidation: () => u,
			urlObjectKeys: () => s,
		};
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const l = e.r(90809)._(e.r(98183)),
			o = /https?|ftp|gopher|file/;
		function a(e) {
			let { auth: t, hostname: r } = e,
				n = e.protocol || "",
				i = e.pathname || "",
				a = e.hash || "",
				s = e.query || "",
				u = !1;
			(t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
				e.host
					? (u = t + e.host)
					: r &&
						((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
						e.port && (u += ":" + e.port)),
				s && "object" == typeof s && (s = String(l.urlQueryToSearchParams(s)));
			let c = e.search || (s && `?${s}`) || "";
			return (
				n && !n.endsWith(":") && (n += ":"),
				e.slashes || ((!n || o.test(n)) && !1 !== u)
					? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
					: u || (u = ""),
				a && "#" !== a[0] && (a = "#" + a),
				c && "?" !== c[0] && (c = "?" + c),
				(i = i.replace(/[?#]/g, encodeURIComponent)),
				(c = c.replace("#", "%23")),
				`${n}${u}${i}${c}${a}`
			);
		}
		const s = [
			"auth",
			"hash",
			"host",
			"hostname",
			"href",
			"path",
			"pathname",
			"port",
			"protocol",
			"query",
			"search",
			"slashes",
		];
		function u(e) {
			return a(e);
		}
	},
	18581,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "useMergedRef", {
				enumerable: !0,
				get: () => i,
			});
		const n = e.r(71645);
		function i(e, t) {
			const r = (0, n.useRef)(null),
				i = (0, n.useRef)(null);
			return (0, n.useCallback)(
				(n) => {
					if (null === n) {
						const e = r.current;
						e && ((r.current = null), e());
						const t = i.current;
						t && ((i.current = null), t());
					} else e && (r.current = l(e, n)), t && (i.current = l(t, n));
				},
				[e, t],
			);
		}
		function l(e, t) {
			if ("function" != typeof e)
				return (
					(e.current = t),
					() => {
						e.current = null;
					}
				);
			{
				const r = e(t);
				return "function" == typeof r ? r : () => e(null);
			}
		}
		("function" == typeof r.default ||
			("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	73668,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "isLocalURL", { enumerable: !0, get: () => l });
		const n = e.r(18967),
			i = e.r(52817);
		function l(e) {
			if (!(0, n.isAbsoluteUrl)(e)) return !0;
			try {
				const t = (0, n.getLocationOrigin)(),
					r = new URL(e, t);
				return r.origin === t && (0, i.hasBasePath)(r.pathname);
			} catch (e) {
				return !1;
			}
		}
	},
	84508,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "errorOnce", { enumerable: !0, get: () => n });
		const n = (e) => {};
	},
	22016,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = { default: () => y, useLinkStatus: () => v };
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const l = e.r(90809),
			o = e.r(43476),
			a = l._(e.r(71645)),
			s = e.r(95057),
			u = e.r(8372),
			c = e.r(18581),
			f = e.r(18967),
			d = e.r(5550);
		e.r(33525);
		const h = e.r(88540),
			p = e.r(91949),
			m = e.r(73668),
			g = e.r(9396);
		function y(t) {
			var r, n;
			let i,
				l,
				y,
				[v, x] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
				j = (0, a.useRef)(null),
				{
					href: w,
					as: C,
					children: _,
					prefetch: S = null,
					passHref: E,
					replace: P,
					shallow: O,
					scroll: R,
					onClick: N,
					onMouseEnter: k,
					onTouchStart: A,
					legacyBehavior: M = !1,
					onNavigate: L,
					transitionTypes: T,
					ref: z,
					unstable_dynamicOnHover: B,
					...I
				} = t;
			(i = _),
				M &&
					("string" == typeof i || "number" == typeof i) &&
					(i = (0, o.jsx)("a", { children: i }));
			const $ = a.default.useContext(u.AppRouterContext),
				D = !1 !== S,
				U =
					!1 !== S
						? null === (n = S) || "auto" === n
							? g.FetchStrategy.PPR
							: g.FetchStrategy.Full
						: g.FetchStrategy.PPR,
				F = "string" == typeof (r = C || w) ? r : (0, s.formatUrl)(r);
			if (M) {
				if (i?.$$typeof === Symbol.for("react.lazy"))
					throw Object.defineProperty(
						Error(
							"`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
						),
						"__NEXT_ERROR_CODE",
						{ value: "E863", enumerable: !1, configurable: !0 },
					);
				l = a.default.Children.only(i);
			}
			const W = M ? l && "object" == typeof l && l.ref : z,
				H = a.default.useCallback(
					(e) => (
						null !== $ &&
							(j.current = (0, p.mountLinkInstance)(e, F, $, U, D, x)),
						() => {
							j.current &&
								((0, p.unmountLinkForCurrentNavigation)(j.current),
								(j.current = null)),
								(0, p.unmountPrefetchableInstance)(e);
						}
					),
					[D, F, $, U, x],
				),
				q = {
					ref: (0, c.useMergedRef)(H, W),
					onClick(t) {
						M || "function" != typeof N || N(t),
							M &&
								l.props &&
								"function" == typeof l.props.onClick &&
								l.props.onClick(t),
							!$ ||
								t.defaultPrevented ||
								((t, r, n, i, l, o, s) => {
									if ("u" > typeof window) {
										let u,
											{ nodeName: c } = t.currentTarget;
										if (
											("A" === c.toUpperCase() &&
												(((u = t.currentTarget.getAttribute("target")) &&
													"_self" !== u) ||
													t.metaKey ||
													t.ctrlKey ||
													t.shiftKey ||
													t.altKey ||
													(t.nativeEvent && 2 === t.nativeEvent.which))) ||
											t.currentTarget.hasAttribute("download")
										)
											return;
										if (!(0, m.isLocalURL)(r)) {
											i && (t.preventDefault(), location.replace(r));
											return;
										}
										if ((t.preventDefault(), o)) {
											let e = !1;
											if (
												(o({
													preventDefault: () => {
														e = !0;
													},
												}),
												e)
											)
												return;
										}
										const { dispatchNavigateAction: f } = e.r(99781);
										a.default.startTransition(() => {
											f(
												r,
												i ? "replace" : "push",
												!1 === l
													? h.ScrollBehavior.NoScroll
													: h.ScrollBehavior.Default,
												n.current,
												s,
											);
										});
									}
								})(t, F, j, P, R, L, T);
					},
					onMouseEnter(e) {
						M || "function" != typeof k || k(e),
							M &&
								l.props &&
								"function" == typeof l.props.onMouseEnter &&
								l.props.onMouseEnter(e),
							$ && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === B);
					},
					onTouchStart: (e) => {
						M || "function" != typeof A || A(e),
							M &&
								l.props &&
								"function" == typeof l.props.onTouchStart &&
								l.props.onTouchStart(e),
							$ && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === B);
					},
				};
			return (
				(0, f.isAbsoluteUrl)(F)
					? (q.href = F)
					: (M && !E && ("a" !== l.type || "href" in l.props)) ||
						(q.href = (0, d.addBasePath)(F)),
				(y = M
					? a.default.cloneElement(l, q)
					: (0, o.jsx)("a", { ...I, ...q, children: i })),
				(0, o.jsx)(b.Provider, { value: v, children: y })
			);
		}
		e.r(84508);
		const b = (0, a.createContext)(p.IDLE_LINK_STATUS),
			v = () => (0, a.useContext)(b);
		("function" == typeof r.default ||
			("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	69270,
	(e) => {
		var t = e.i(43476),
			r = e.i(65747),
			n = e.i(89970),
			i = e.i(22016),
			l = e.i(71645);
		const o = ({ title: e, fontSize: r }) =>
			(0, t.jsxs)("div", {
				className: "relative h-full w-full flex items-center justify-center",
				children: [
					(0, t.jsx)("div", {
						className: "invisible h-full px-2 font-montserrat font-regular",
						style: { fontSize: r },
						children: e,
					}),
					(0, t.jsxs)("div", {
						className:
							"layer-top absolute top-0 left-0 h-[200%] w-full flex flex-col pointer-events-none",
						children: [
							(0, t.jsx)("span", {
								style: { fontSize: r },
								className:
									"flex h-1/2 w-full items-center justify-center font-montserrat font-regular",
								children: e,
							}),
							(0, t.jsx)("span", {
								style: { fontSize: r },
								className:
									"flex h-1/2 w-full items-center justify-center font-montserrat font-regular  text-black",
								children: e,
							}),
						],
					}),
				],
			});
		e.s([
			"LinkButton",
			0,
			({
				title: e,
				onClick: a,
				href: s,
				fontSize: u = "14px",
				type: c = "button",
				disabled: f = !1,
			}) => {
				const d = (0, l.useRef)(null),
					h = (0, l.useRef)(null),
					{ contextSafe: p } = (0, r.useGSAP)(
						() => {
							h.current = n.default
								.timeline({ paused: !0 })
								.to(".layer-top", {
									yPercent: -50,
									duration: 0.3,
									ease: "power2.inOut",
								});
						},
						{ scope: d },
					),
					m = p((e) => {
						e ? h.current?.play() : h.current?.reverse();
					}),
					g = {
						onMouseEnter: () => m(!0),
						onMouseLeave: () => m(!1),
						onFocus: () => m(!0),
						onBlur: () => m(!1),
						onClick: a,
						className:
							" text-black h-10 relative overflow-hidden cursor-pointer flex items-center justify-center  border-none outline-none rounded-lg z-60 ",
					};
				return s
					? (0, t.jsx)(i.default, {
							href: s,
							ref: d,
							...g,
							children: (0, t.jsx)(o, { title: e, fontSize: u }),
						})
					: (0, t.jsx)("button", {
							type: c,
							ref: d,
							disabled: f,
							...g,
							"aria-label": e,
							children: (0, t.jsx)(o, { title: e, fontSize: u }),
						});
			},
		]);
	},
	30182,
	(e) => {
		var t = e.i(43476),
			r = e.i(65747),
			n = e.i(89970),
			i = e.i(22016),
			l = e.i(71645);
		const o = ({ title: e, fontSize: r }) =>
			(0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)("span", {
						style: { fontSize: r },
						className:
							"relative z-10 flex h-full items-center justify-center  font-montserrat font-semibold",
						children: e,
					}),
					(0, t.jsx)("div", {
						className:
							"layer-top absolute inset-0 py-1 px-1 h-full w-full flex items-center justify-center z-20 pointer-events-none",
						children: (0, t.jsx)("div", {
							className: "bg-primary h-full w-full rounded-lg",
						}),
					}),
					(0, t.jsx)("div", {
						className:
							"layer-bottom absolute inset-0 py-1 px-1 h-full w-full z-30 pointer-events-none",
						children: (0, t.jsx)("span", {
							style: { fontSize: r },
							className:
								"h-full w-full bg-secondary  font-montserrat font-semibold rounded-lg flex items-center justify-center ",
							children: e,
						}),
					}),
				],
			});
		e.s([
			"MenuButton",
			0,
			({
				title: e,
				onClick: a,
				href: s,
				fontSize: u = "16px",
				type: c = "button",
				disabled: f = !1,
			}) => {
				const d = (0, l.useRef)(null),
					h = (0, l.useRef)(null);
				(0, r.useGSAP)(
					() => {
						h.current = n.default
							.timeline({ paused: !0 })
							.from(".layer-top", {
								yPercent: 200,
								duration: 0.3,
								ease: "power2.inOut",
								rotateZ: "20deg",
							})
							.from(
								".layer-bottom",
								{
									yPercent: 250,
									duration: 0.3,
									ease: "power2.inOut",
									rotateZ: "20deg",
									delay: 0.05,
								},
								"<",
							);
					},
					{ scope: d },
				);
				const p = (e) => {
						e ? h.current?.play() : h.current?.reverse();
					},
					m =
						"bg-white text-black h-10 relative overflow-hidden cursor-pointer flex items-center justify-center p-4 rounded-lg border-none outline-none";
				return s
					? (0, t.jsx)(i.default, {
							href: s,
							ref: d,
							onMouseEnter: () => p(!0),
							onMouseLeave: () => p(!1),
							onFocus: () => p(!0),
							onBlur: () => p(!1),
							onClick: a,
							className: m,
							children: (0, t.jsx)(o, { title: e, fontSize: u }),
						})
					: (0, t.jsx)("button", {
							type: c,
							ref: d,
							onMouseEnter: () => p(!0),
							onMouseLeave: () => p(!1),
							onFocus: () => p(!0),
							onBlur: () => p(!1),
							onClick: a,
							className: m,
							disabled: f,
							"aria-label": e,
							children: (0, t.jsx)(o, { title: e, fontSize: u }),
						});
			},
		]);
	},
	89633,
	(e) => {
		var t = e.i(43476),
			r = e.i(71645),
			n = e.i(38601);
		e.s([
			"FooterAnimation",
			0,
			() => {
				const e = (0, r.useRef)(null),
					{ setContainerRef: i } = (0, n.useSvgDraw)({
						url: "/assets/footer-2.svg",
						scope: e,
						strokeWidth: 70,
					});
				return (0, t.jsx)("div", {
					ref: e,
					className:
						"relative inset-0 z-0 overflow-hidden pointer-events-none h-screen w-screen",
					children: (0, t.jsx)("div", {
						ref: i,
						className:
							"absolute inset-0 z-0 flex -left-60 -bottom-50 items-center justify-center p-10 [&>svg]:max-w-full [&>svg]:max-h-2/3 [&>svg]:w-auto [&>svg]:h-auto opacity-20",
					}),
				});
			},
		]);
	},
	88143,
	(e, t, r) => {
		function n({
			widthInt: e,
			heightInt: t,
			blurWidth: r,
			blurHeight: i,
			blurDataURL: l,
			objectFit: o,
		}) {
			const a = r ? 40 * r : e,
				s = i ? 40 * i : t,
				u = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
			return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`;
		}
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "getImageBlurSvg", {
				enumerable: !0,
				get: () => n,
			});
	},
	87690,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = { VALID_LOADERS: () => l, imageConfigDefault: () => o };
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const l = ["default", "imgix", "cloudinary", "akamai", "custom"],
			o = {
				deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
				imageSizes: [32, 48, 64, 96, 128, 256, 384],
				path: "/_next/image",
				loader: "default",
				loaderFile: "",
				domains: [],
				disableStaticImages: !1,
				minimumCacheTTL: 14400,
				formats: ["image/webp"],
				maximumDiskCacheSize: void 0,
				maximumRedirects: 3,
				maximumResponseBody: 5e7,
				dangerouslyAllowLocalIP: !1,
				dangerouslyAllowSVG: !1,
				contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
				contentDispositionType: "attachment",
				localPatterns: void 0,
				remotePatterns: [],
				qualities: [75],
				unoptimized: !1,
				customCacheHandler: !1,
			};
	},
	8927,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "getImgProps", { enumerable: !0, get: () => u }),
			e.r(33525);
		const n = e.r(43369),
			i = e.r(88143),
			l = e.r(87690),
			o = ["-moz-initial", "fill", "none", "scale-down", void 0];
		function a(e) {
			return void 0 !== e.default;
		}
		function s(e) {
			return void 0 === e
				? e
				: "number" == typeof e
					? Number.isFinite(e)
						? e
						: NaN
					: "string" == typeof e && /^[0-9]+$/.test(e)
						? parseInt(e, 10)
						: NaN;
		}
		function u(
			{
				src: e,
				sizes: t,
				unoptimized: r = !1,
				priority: c = !1,
				preload: f = !1,
				loading: d,
				className: h,
				quality: p,
				width: m,
				height: g,
				fill: y = !1,
				style: b,
				overrideSrc: v,
				onLoad: x,
				onLoadingComplete: j,
				placeholder: w = "empty",
				blurDataURL: C,
				fetchPriority: _,
				decoding: S = "async",
				layout: E,
				objectFit: P,
				objectPosition: O,
				lazyBoundary: R,
				lazyRoot: N,
				...k
			},
			A,
		) {
			var M;
			let L,
				T,
				z,
				{ imgConf: B, showAltText: I, blurComplete: $, defaultLoader: D } = A,
				U = B || l.imageConfigDefault;
			if ("allSizes" in U) L = U;
			else {
				const e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
					t = U.deviceSizes.sort((e, t) => e - t),
					r = U.qualities?.sort((e, t) => e - t);
				L = { ...U, allSizes: e, deviceSizes: t, qualities: r };
			}
			if (void 0 === D)
				throw Object.defineProperty(
					Error(
						"images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
					),
					"__NEXT_ERROR_CODE",
					{ value: "E163", enumerable: !1, configurable: !0 },
				);
			let F = k.loader || D;
			delete k.loader, delete k.srcSet;
			const W = "__next_img_default" in F;
			if (W) {
				if ("custom" === L.loader)
					throw Object.defineProperty(
						Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
						"__NEXT_ERROR_CODE",
						{ value: "E252", enumerable: !1, configurable: !0 },
					);
			} else {
				const e = F;
				F = (t) => {
					const { config: r, ...n } = t;
					return e(n);
				};
			}
			if (E) {
				"fill" === E && (y = !0);
				const e = {
					intrinsic: { maxWidth: "100%", height: "auto" },
					responsive: { width: "100%", height: "auto" },
				}[E];
				e && (b = { ...b, ...e });
				const r = { responsive: "100vw", fill: "100vw" }[E];
				r && !t && (t = r);
			}
			let H = "",
				q = s(m),
				G = s(g);
			if ((M = e) && "object" == typeof M && (a(M) || void 0 !== M.src)) {
				const t = a(e) ? e.default : e;
				if (!t.src)
					throw Object.defineProperty(
						Error(
							`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
						),
						"__NEXT_ERROR_CODE",
						{ value: "E460", enumerable: !1, configurable: !0 },
					);
				if (!t.height || !t.width)
					throw Object.defineProperty(
						Error(
							`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
						),
						"__NEXT_ERROR_CODE",
						{ value: "E48", enumerable: !1, configurable: !0 },
					);
				if (
					((T = t.blurWidth),
					(z = t.blurHeight),
					(C = C || t.blurDataURL),
					(H = t.src),
					!y)
				)
					if (q || G) {
						if (q && !G) {
							const e = q / t.width;
							G = Math.round(t.height * e);
						} else if (!q && G) {
							const e = G / t.height;
							q = Math.round(t.width * e);
						}
					} else (q = t.width), (G = t.height);
			}
			let K = !c && !f && ("lazy" === d || void 0 === d);
			(!(e = "string" == typeof e ? e : H) ||
				e.startsWith("data:") ||
				e.startsWith("blob:")) &&
				((r = !0), (K = !1)),
				L.unoptimized && (r = !0),
				W &&
					!L.dangerouslyAllowSVG &&
					e.split("?", 1)[0].endsWith(".svg") &&
					(r = !0);
			const X = s(p),
				V = Object.assign(
					y
						? {
								position: "absolute",
								height: "100%",
								width: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								objectFit: P,
								objectPosition: O,
							}
						: {},
					I ? {} : { color: "transparent" },
					b,
				),
				Q =
					$ || "empty" === w
						? null
						: "blur" === w
							? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: q, heightInt: G, blurWidth: T, blurHeight: z, blurDataURL: C || "", objectFit: V.objectFit })}")`
							: `url("${w}")`,
				J = o.includes(V.objectFit)
					? "fill" === V.objectFit
						? "100% 100%"
						: "cover"
					: V.objectFit,
				Y = Q
					? {
							backgroundSize: J,
							backgroundPosition: V.objectPosition || "50% 50%",
							backgroundRepeat: "no-repeat",
							backgroundImage: Q,
						}
					: {},
				Z = (({
					config: e,
					src: t,
					unoptimized: r,
					width: i,
					quality: l,
					sizes: o,
					loader: a,
				}) => {
					if (r) {
						if (t.startsWith("/") && !t.startsWith("//")) {
							const e = (0, n.getDeploymentId)();
							if (e) {
								const r = t.indexOf("?");
								if (-1 !== r) {
									const n = new URLSearchParams(t.slice(r + 1));
									n.get("dpl") ||
										(n.append("dpl", e),
										(t = t.slice(0, r) + "?" + n.toString()));
								} else t += `?dpl=${e}`;
							}
						}
						return { src: t, srcSet: void 0, sizes: void 0 };
					}
					const { widths: s, kind: u } = ((
							{ deviceSizes: e, allSizes: t },
							r,
							n,
						) => {
							if (n) {
								const r = /(^|\s)(1?\d?\d)vw/g,
									i = [];
								for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
								if (i.length) {
									const r = 0.01 * Math.min(...i);
									return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
								}
								return { widths: t, kind: "w" };
							}
							return "number" != typeof r
								? { widths: e, kind: "w" }
								: {
										widths: [
											...new Set(
												[r, 2 * r].map(
													(e) => t.find((t) => t >= e) || t[t.length - 1],
												),
											),
										],
										kind: "x",
									};
						})(e, i, o),
						c = s.length - 1;
					return {
						sizes: o || "w" !== u ? o : "100vw",
						srcSet: s
							.map(
								(r, n) =>
									`${a({ config: e, src: t, quality: l, width: r })} ${"w" === u ? r : n + 1}${u}`,
							)
							.join(", "),
						src: a({ config: e, src: t, quality: l, width: s[c] }),
					};
				})({
					config: L,
					src: e,
					unoptimized: r,
					width: q,
					quality: X,
					sizes: t,
					loader: F,
				}),
				ee = K ? "lazy" : d;
			return {
				props: {
					...k,
					loading: ee,
					fetchPriority: _,
					width: q,
					height: G,
					decoding: S,
					className: h,
					style: { ...V, ...Y },
					sizes: Z.sizes,
					srcSet: Z.srcSet,
					src: v || Z.src,
				},
				meta: { unoptimized: r, preload: f || c, placeholder: w, fill: y },
			};
		}
	},
	98879,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "default", { enumerable: !0, get: () => a });
		const n = e.r(71645),
			i = "u" < typeof window,
			l = i ? () => {} : n.useLayoutEffect,
			o = i ? () => {} : n.useEffect;
		function a(e) {
			const { headManager: t, reduceComponentsToState: r } = e;
			function a() {
				if (t && t.mountedInstances) {
					const e = n.Children.toArray(
						Array.from(t.mountedInstances).filter(Boolean),
					);
					t.updateHead(r(e));
				}
			}
			return (
				i && (t?.mountedInstances?.add(e.children), a()),
				l(
					() => (
						t?.mountedInstances?.add(e.children),
						() => {
							t?.mountedInstances?.delete(e.children);
						}
					),
				),
				l(
					() => (
						t && (t._pendingUpdate = a),
						() => {
							t && (t._pendingUpdate = a);
						}
					),
				),
				o(
					() => (
						t &&
							t._pendingUpdate &&
							(t._pendingUpdate(), (t._pendingUpdate = null)),
						() => {
							t &&
								t._pendingUpdate &&
								(t._pendingUpdate(), (t._pendingUpdate = null));
						}
					),
				),
				null
			);
		}
	},
	25633,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = { default: () => m, defaultHead: () => f };
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const l = e.r(55682),
			o = e.r(90809),
			a = e.r(43476),
			s = o._(e.r(71645)),
			u = l._(e.r(98879)),
			c = e.r(42732);
		function f() {
			return [
				(0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
				(0, a.jsx)(
					"meta",
					{ name: "viewport", content: "width=device-width" },
					"viewport",
				),
			];
		}
		function d(e, t) {
			return "string" == typeof t || "number" == typeof t
				? e
				: t.type === s.default.Fragment
					? e.concat(
							s.default.Children.toArray(t.props.children).reduce(
								(e, t) =>
									"string" == typeof t || "number" == typeof t
										? e
										: e.concat(t),
								[],
							),
						)
					: e.concat(t);
		}
		e.r(33525);
		const h = ["name", "httpEquiv", "charSet", "itemProp"];
		function p(e) {
			let t, r, n, i;
			return e
				.reduce(d, [])
				.reverse()
				.concat(f().reverse())
				.filter(
					((t = new Set()),
					(r = new Set()),
					(n = new Set()),
					(i = {}),
					(e) => {
						let l = !0,
							o = !1;
						if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
							o = !0;
							const r = e.key.slice(e.key.indexOf("$") + 1);
							t.has(r) ? (l = !1) : t.add(r);
						}
						switch (e.type) {
							case "title":
							case "base":
								r.has(e.type) ? (l = !1) : r.add(e.type);
								break;
							case "meta":
								for (let t = 0, r = h.length; t < r; t++) {
									const r = h[t];
									if (Object.hasOwn(e.props, r))
										if ("charSet" === r) n.has(r) ? (l = !1) : n.add(r);
										else {
											const t = e.props[r],
												n = i[r] || new Set();
											("name" !== r || !o) && n.has(t)
												? (l = !1)
												: (n.add(t), (i[r] = n));
										}
								}
						}
						return l;
					}),
				)
				.reverse()
				.map((e, t) => {
					const r = e.key || t;
					return s.default.cloneElement(e, { key: r });
				});
		}
		const m = ({ children: e }) => {
			const t = (0, s.useContext)(c.HeadManagerContext);
			return (0, a.jsx)(u.default, {
				reduceComponentsToState: p,
				headManager: t,
				children: e,
			});
		};
		("function" == typeof r.default ||
			("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	18556,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "ImageConfigContext", {
				enumerable: !0,
				get: () => l,
			});
		const n = e.r(55682)._(e.r(71645)),
			i = e.r(87690),
			l = n.default.createContext(i.imageConfigDefault);
	},
	70965,
	(e, t, r) => {
		function n(e, t) {
			const r = e || 75;
			return t?.qualities?.length
				? t.qualities.reduce(
						(e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
						t.qualities[0],
					)
				: r;
		}
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "findClosestQuality", {
				enumerable: !0,
				get: () => n,
			});
	},
	1948,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "default", { enumerable: !0, get: () => o });
		const n = e.r(70965),
			i = e.r(43369);
		function l({ config: e, src: t, width: r, quality: o }) {
			let a = (0, i.getDeploymentId)();
			if (t.startsWith("/") && !t.startsWith("//")) {
				const e = t.indexOf("?");
				if (-1 !== e) {
					const r = new URLSearchParams(t.slice(e + 1)),
						n = r.get("dpl");
					if (n) {
						(a = n), r.delete("dpl");
						const i = r.toString();
						t = t.slice(0, e) + (i ? "?" + i : "");
					}
				}
			}
			if (
				t.startsWith("/") &&
				t.includes("?") &&
				e.localPatterns?.length === 1 &&
				"**" === e.localPatterns[0].pathname &&
				"" === e.localPatterns[0].search
			)
				throw Object.defineProperty(
					Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
					"__NEXT_ERROR_CODE",
					{ value: "E871", enumerable: !1, configurable: !0 },
				);
			const s = (0, n.findClosestQuality)(o, e);
			return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && a ? `&dpl=${a}` : ""}`;
		}
		l.__next_img_default = !0;
		const o = l;
	},
	5500,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "Image", { enumerable: !0, get: () => x });
		const n = e.r(55682),
			i = e.r(90809),
			l = e.r(43476),
			o = i._(e.r(71645)),
			a = n._(e.r(74080)),
			s = n._(e.r(25633)),
			u = e.r(8927),
			c = e.r(87690),
			f = e.r(18556);
		e.r(33525);
		const d = e.r(65856),
			h = n._(e.r(1948)),
			p = e.r(18581),
			m = {
				deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
				imageSizes: [32, 48, 64, 96, 128, 256, 384],
				qualities: [75],
				path: "/_next/image",
				loader: "default",
				dangerouslyAllowSVG: !1,
				unoptimized: !1,
			};
		function g(e, t, r, n, i, l, o) {
			const a = e?.src;
			e &&
				e["data-loaded-src"] !== a &&
				((e["data-loaded-src"] = a),
				("decode" in e ? e.decode() : Promise.resolve())
					.catch(() => {})
					.then(() => {
						if (e.parentElement && e.isConnected) {
							if (("empty" !== t && i(!0), r?.current)) {
								const t = new Event("load");
								Object.defineProperty(t, "target", { writable: !1, value: e });
								let n = !1,
									i = !1;
								r.current({
									...t,
									nativeEvent: t,
									currentTarget: e,
									target: e,
									isDefaultPrevented: () => n,
									isPropagationStopped: () => i,
									persist: () => {},
									preventDefault: () => {
										(n = !0), t.preventDefault();
									},
									stopPropagation: () => {
										(i = !0), t.stopPropagation();
									},
								});
							}
							n?.current && n.current(e);
						}
					}));
		}
		function y(e) {
			return o.use ? { fetchPriority: e } : { fetchpriority: e };
		}
		"u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
		const b = (0, o.forwardRef)(
			(
				{
					src: e,
					srcSet: t,
					sizes: r,
					height: n,
					width: i,
					decoding: a,
					className: s,
					style: u,
					fetchPriority: c,
					placeholder: f,
					loading: d,
					unoptimized: h,
					fill: m,
					onLoadRef: b,
					onLoadingCompleteRef: v,
					setBlurComplete: x,
					setShowAltText: j,
					sizesInput: w,
					onLoad: C,
					onError: _,
					...S
				},
				E,
			) => {
				const P = (0, o.useCallback)(
						(e) => {
							e && (_ && (e.src = e.src), e.complete && g(e, f, b, v, x, h, w));
						},
						[e, f, b, v, x, _, h, w],
					),
					O = (0, p.useMergedRef)(E, P);
				return (0, l.jsx)("img", {
					...S,
					...y(c),
					loading: d,
					width: i,
					height: n,
					decoding: a,
					"data-nimg": m ? "fill" : "1",
					className: s,
					style: u,
					sizes: r,
					srcSet: t,
					src: e,
					ref: O,
					onLoad: (e) => {
						g(e.currentTarget, f, b, v, x, h, w);
					},
					onError: (e) => {
						j(!0), "empty" !== f && x(!0), _ && _(e);
					},
				});
			},
		);
		function v({ isAppRouter: e, imgAttributes: t }) {
			const r = {
				as: "image",
				imageSrcSet: t.srcSet,
				imageSizes: t.sizes,
				crossOrigin: t.crossOrigin,
				referrerPolicy: t.referrerPolicy,
				...y(t.fetchPriority),
			};
			return e && a.default.preload
				? (a.default.preload(t.src, r), null)
				: (0, l.jsx)(s.default, {
						children: (0, l.jsx)(
							"link",
							{ rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
							"__nimg-" + t.src + t.srcSet + t.sizes,
						),
					});
		}
		const x = (0, o.forwardRef)((e, t) => {
			const r = (0, o.useContext)(d.RouterContext),
				n = (0, o.useContext)(f.ImageConfigContext),
				i = (0, o.useMemo)(() => {
					const e = m || n || c.imageConfigDefault,
						t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
						r = e.deviceSizes.sort((e, t) => e - t),
						i = e.qualities?.sort((e, t) => e - t);
					return {
						...e,
						allSizes: t,
						deviceSizes: r,
						qualities: i,
						localPatterns:
							"u" < typeof window ? n?.localPatterns : e.localPatterns,
					};
				}, [n]),
				{ onLoad: a, onLoadingComplete: s } = e,
				p = (0, o.useRef)(a);
			(0, o.useEffect)(() => {
				p.current = a;
			}, [a]);
			const g = (0, o.useRef)(s);
			(0, o.useEffect)(() => {
				g.current = s;
			}, [s]);
			const [y, x] = (0, o.useState)(!1),
				[j, w] = (0, o.useState)(!1),
				{ props: C, meta: _ } = (0, u.getImgProps)(e, {
					defaultLoader: h.default,
					imgConf: i,
					blurComplete: y,
					showAltText: j,
				});
			return (0, l.jsxs)(l.Fragment, {
				children: [
					(0, l.jsx)(b, {
						...C,
						unoptimized: _.unoptimized,
						placeholder: _.placeholder,
						fill: _.fill,
						onLoadRef: p,
						onLoadingCompleteRef: g,
						setBlurComplete: x,
						setShowAltText: w,
						sizesInput: e.sizes,
						ref: t,
					}),
					_.preload
						? (0, l.jsx)(v, { isAppRouter: !r, imgAttributes: C })
						: null,
				],
			});
		});
		("function" == typeof r.default ||
			("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	94909,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 });
		var n = { default: () => c, getImageProps: () => u };
		for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
		const l = e.r(55682),
			o = e.r(8927),
			a = e.r(5500),
			s = l._(e.r(1948));
		function u(e) {
			const { props: t } = (0, o.getImgProps)(e, {
				defaultLoader: s.default,
				imgConf: {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [32, 48, 64, 96, 128, 256, 384],
					qualities: [75],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1,
					unoptimized: !1,
				},
			});
			for (const [e, r] of Object.entries(t)) void 0 === r && delete t[e];
			return { props: t };
		}
		const c = a.Image;
	},
	57688,
	(e, t, r) => {
		t.exports = e.r(94909);
	},
	95133,
	(e) => {
		var t = e.i(43476);
		const r = (0, e.i(75254).default)("messages-square", [
			[
				"path",
				{
					d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
					key: "1n2ejm",
				},
			],
			[
				"path",
				{
					d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
					key: "1qfcsi",
				},
			],
		]);
		var n = e.i(57688),
			i = e.i(71645),
			l = e.i(61745),
			o = e.i(18566),
			a = i["use".trim()],
			s = e.i(47167);
		function u(e) {
			let t;
			return (
				("object" == typeof e
					? null == e.host && null == e.hostname
					: !/^[a-z]+:/i.test(e)) &&
				(null == (t = "object" == typeof e ? e.pathname : e) ||
					!!t.startsWith("/"))
			);
		}
		function c(e, t) {
			return e.replace(RegExp(`^${t}`), "") || "/";
		}
		function f(e, t) {
			return t === e || t.startsWith(`${e}/`);
		}
		function d(e, t, r) {
			return "string" == typeof e ? e : e[t] || r;
		}
		function h(e) {
			let t = (() => {
					try {
						return "true" === s.default.env._next_intl_trailing_slash;
					} catch {
						return !1;
					}
				})(),
				[r, ...n] = e.split("#"),
				i = n.join("#"),
				l = r;
			if ("/" !== l) {
				const e = l.endsWith("/");
				t && !e ? (l += "/") : !t && e && (l = l.slice(0, -1));
			}
			return i && (l += "#" + i), l;
		}
		function p(e, t) {
			let r,
				n = h(e),
				i = h(t);
			return ((r = n
				.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
				.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
				.replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
				.replace(/\[([^\]]+)\]/g, "([^/]+)")),
			RegExp(`^${r}$`)).test(i);
		}
		function m(e, t) {
			return ("never" !== t.mode && t.prefixes?.[e]) || "/" + e;
		}
		function g(e) {
			return e.includes("[[...");
		}
		function y(e) {
			return e.includes("[...");
		}
		function b(e) {
			return e.includes("[");
		}
		function v(e, t) {
			const r = e.split("/"),
				n = t.split("/"),
				i = Math.max(r.length, n.length);
			for (let e = 0; e < i; e++) {
				const t = r[e],
					i = n[e];
				if (!t && i) return -1;
				if (t && !i) return 1;
				if (t || i) {
					if (!b(t) && b(i)) return -1;
					if (b(t) && !b(i)) return 1;
					if (!y(t) && y(i)) return -1;
					if (y(t) && !y(i)) return 1;
					if (!g(t) && g(i)) return -1;
					if (g(t) && !g(i)) return 1;
				}
			}
			return 0;
		}
		var x = e.i(22016);
		function j(e) {
			const t = new URLSearchParams();
			for (const [r, n] of Object.entries(e))
				Array.isArray(n)
					? n.forEach((e) => {
							t.append(r, String(e));
						})
					: t.set(r, String(n));
			return "?" + t.toString();
		}
		function w(e, t, r, n) {
			if (!e || n === r || null == n || !t) return;
			const i = ((e, t = window.location.pathname) =>
					"/" === e ? t : t.replace(e, ""))(t),
				{ name: l, ...o } = e;
			o.path || (o.path = "" !== i ? i : "/");
			let a = `${l}=${n};`;
			for (const [e, t] of Object.entries(o))
				(a += `${"maxAge" === e ? "max-age" : e}`),
					"boolean" != typeof t && (a += "=" + t),
					(a += ";");
			document.cookie = a;
		}
		var C = (0, i.forwardRef)(
			(
				{ href: e, locale: r, localeCookie: n, onClick: i, prefetch: a, ...s },
				u,
			) => {
				const c = (0, l.useLocale)(),
					f = null != r && r !== c,
					d = (0, o.usePathname)();
				return (
					f && (a = !1),
					(0, t.jsx)(x.default, {
						ref: u,
						href: e,
						hrefLang: f ? r : void 0,
						onClick: (e) => {
							w(n, d, c, r), i && i(e);
						},
						prefetch: a,
						...s,
					})
				);
			},
		);
		const {
			Link: _,
			redirect: S,
			usePathname: E,
			useRouter: P,
			getPathname: O,
		} = ((e) => {
			const {
				Link: r,
				config: n,
				getPathname: s,
				...g
			} = ((e, r) => {
				var n, l, s;
				const c = {
						...(n = r || {}),
						localePrefix:
							"object" == typeof (s = n.localePrefix)
								? s
								: { mode: s || "always" },
						localeCookie: !!((l = n.localeCookie) ?? 1) && {
							name: "NEXT_LOCALE",
							sameSite: "lax",
							...("object" == typeof l && l),
						},
						localeDetection: n.localeDetection ?? !0,
						alternateLinks: n.alternateLinks ?? !0,
					},
					f = c.pathnames,
					p = (0, i.forwardRef)(({ href: r, locale: n, ...i }, l) => {
						let o, s;
						"object" == typeof r ? ((o = r.pathname), (s = r.params)) : (o = r);
						const d = u(r),
							h = e(),
							p = "function" == typeof h.then ? a(h) : h,
							m = d
								? g({
										locale: n || p,
										href: null == f ? o : { pathname: o, params: s },
										forcePrefix: null != n || void 0,
									})
								: o;
						return (0, t.jsx)(C, {
							ref: l,
							href: "object" == typeof r ? { ...r, pathname: m } : m,
							locale: n,
							localeCookie: c.localeCookie,
							...i,
						});
					});
				function g(e) {
					let t,
						{ forcePrefix: r, href: n, locale: i } = e;
					return (
						null == f
							? "object" == typeof n
								? ((t = n.pathname), n.query && (t += j(n.query)))
								: (t = n)
							: (t = (({
									pathname: e,
									locale: t,
									params: r,
									pathnames: n,
									query: i,
								}) => {
									function l(e) {
										let l,
											o = n[e];
										return (
											o
												? ((l = d(o, t, e)),
													r &&
														Object.entries(r).forEach(([e, t]) => {
															let r, n;
															Array.isArray(t)
																? ((r = `(\\[)?\\[...${e}\\](\\])?`),
																	(n = t.map((e) => String(e)).join("/")))
																: ((r = `\\[${e}\\]`), (n = String(t))),
																(l = l.replace(RegExp(r, "g"), n));
														}),
													(l = new URL(
														(l = l.replace(/\[\[\.\.\..+\]\]/g, "")),
														"http://l",
													).pathname))
												: (l = e),
											(l = h(l)),
											i && (l += j(i)),
											l
										);
									}
									if ("string" == typeof e) return l(e);
									{
										const { pathname: t, ...r } = e;
										return { ...r, pathname: l(t) };
									}
								})({
									locale: i,
									...("string" == typeof n ? { pathname: n } : n),
									pathnames: c.pathnames,
								})),
						((e, t, r, n) => {
							var i, l;
							let o,
								a,
								{ mode: s } = r.localePrefix;
							return (
								void 0 !== n
									? (o = n)
									: u(e) &&
										("always" === s
											? (o = !0)
											: "as-needed" === s &&
												(o = r.domains
													? !r.domains.some((e) => e.defaultLocale === t)
													: t !== r.defaultLocale)),
								o
									? ((i = m(t, r.localePrefix)),
										(l = e),
										(a = i),
										/^\/(\?.*)?$/.test(l) && (l = l.slice(1)),
										(a += l))
									: e
							);
						})(t, i, c, r)
					);
				}
				function y(e) {
					return (t, ...r) => e(g(t), ...r);
				}
				return {
					config: c,
					Link: p,
					redirect: y(o.redirect),
					permanentRedirect: y(o.permanentRedirect),
					getPathname: g,
				};
			})(l.useLocale, e);
			return {
				...g,
				Link: r,
				usePathname: () => {
					let e,
						t,
						r =
							((e = (0, o.usePathname)()),
							(t = (0, l.useLocale)()),
							(0, i.useMemo)(() => {
								if (!e) return e;
								let r = e,
									i = m(t, n.localePrefix);
								if (f(i, e)) r = c(e, i);
								else if (
									"never" !== n.localePrefix.mode &&
									n.localePrefix.prefixes
								) {
									const n = "/" + t;
									f(n, e) && (r = c(e, n));
								}
								return r;
							}, [n.localePrefix, t, e])),
						a = (0, l.useLocale)();
					return (0, i.useMemo)(
						() =>
							r && n.pathnames
								? ((e, t, r) => {
										const n = Object.keys(r).sort(v),
											i = decodeURI(t);
										for (const t of n) {
											const n = r[t];
											if ("string" == typeof n) {
												if (p(n, i)) return t;
											} else if (p(d(n, e, t), i)) return t;
										}
										return t;
									})(a, r, n.pathnames)
								: r,
						[a, r],
					);
				},
				useRouter: () => {
					const e = (0, o.useRouter)(),
						t = (0, l.useLocale)(),
						r = (0, o.usePathname)();
					return (0, i.useMemo)(() => {
						function i(e) {
							return (i, l) => {
								const { locale: o, ...a } = l || {},
									u = [
										s({
											href: i,
											locale: o || t,
											forcePrefix: null != o || void 0,
										}),
									];
								Object.keys(a).length > 0 && u.push(a),
									w(n.localeCookie, r, t, o),
									e(...u);
							};
						}
						return {
							...e,
							push: i(e.push),
							replace: i(e.replace),
							prefetch: i(e.prefetch),
						};
					}, [t, r, e]);
				},
				getPathname: s,
			};
		})({
			locales: ["en", "ua", "de"],
			defaultLocale: "en",
			localePrefix: "always",
		});
		function R({ color: e }) {
			const r = (0, l.useLocale)(),
				n = P(),
				i = E();
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)("label", {
						htmlFor: "locale-switcher",
						className: "sr-only",
						children: "Select language",
					}),
					(0, t.jsxs)("select", {
						id: "locale-switcher",
						style: { color: `${e}` },
						className: "open-cursor cursor-pointer",
						value: r,
						onChange: (e) => {
							var t;
							(t = e.target.value) !== r &&
								(n.replace(i, { locale: t }), n.refresh());
						},
						children: [
							(0, t.jsx)("option", { value: "en", children: "EN" }),
							(0, t.jsx)("option", { value: "ua", children: "UA" }),
							(0, t.jsx)("option", { value: "de", children: "DE" }),
						],
					}),
				],
			});
		}
		var N = e.i(45084),
			k = e.i(30182),
			A = e.i(65747),
			M = e.i(89970);
		const L = {
				home: {
					title: "HOME PAGE",
					pageLinks: [
						{ title: "Home", href: "#hero" },
						{ title: "Problems", href: "#problems" },
						{ title: "Benefits", href: "#benefits" },
						{ title: "Feedbacks", href: "#feedbacks" },
						{ title: "FAQ", href: "#faq" },
						{ title: "Contacts", href: "#contacts" },
					],
					siteMap: [
						{ title: "About", href: "/about-me" },
						{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
						{ title: "BLive Coaching", href: "/about-blc" },
					],
				},
				howToChooseCoach: {
					title: "HOW TO CHOOSE COACH PAGE",
					pageLinks: [{ title: "Guide", href: "#guide" }],
					siteMap: [
						{ title: "Home", href: "/" },
						{ title: "About", href: "/about-me" },
						{ title: "BLive Coaching", href: "/about-blc" },
					],
				},
				aboutBLC: {
					title: "ABOUT BE LIVE COACHING PAGE",
					pageLinks: [
						{ title: "About", href: "#about" },
						{ title: "How It Works", href: "#howItWorks" },
					],
					siteMap: [
						{ title: "Home", href: "/" },
						{ title: "About", href: "/about-me" },
						{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
					],
				},
				aboutMe: {
					title: "ABOUT ME PAGE",
					pageLinks: [
						{ title: "About", href: "#about" },
						{ title: "My Why", href: "#myWhy" },
						{ title: "Certificate", href: "#certificate" },
						{ title: "About ICA", href: "#aboutICA" },
					],
					siteMap: [
						{ title: "Home", href: "/" },
						{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
						{ title: "BLive Coaching", href: "/about-blc" },
					],
				},
				policy: {
					title: "",
					pageLinks: [],
					siteMap: [
						{ title: "Home", href: "/" },
						{ title: "About", href: "/about-me" },
						{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
						{ title: "BLive Coaching", href: "/about-blc" },
					],
				},
			},
			T = ({ isOpen: e, onClose: n, type: l = "home" }) => {
				const o = (0, i.useRef)(null),
					a = (0, i.useRef)(null),
					{ siteMap: s, pageLinks: u } = L[l] || L.home;
				return (
					(0, A.useGSAP)(
						() => {
							a.current = M.default
								.timeline({ paused: !0 })
								.fromTo(
									o.current,
									{
										scale: 0,
										opacity: 0,
										display: "hidden",
										transformOrigin: "top right",
									},
									{
										scale: 1,
										opacity: 1,
										display: "flex",
										duration: 0.5,
										ease: "power3.out",
									},
								);
						},
						{ scope: o },
					),
					(0, A.useGSAP)(() => {
						e ? a.current?.play() : a.current?.reverse();
					}, [e]),
					(0, t.jsxs)("div", {
						ref: o,
						className:
							"fixed overflow-clip justify-between items-center h-screen max-h-150 w-9/10 max-w-125 opacity-0 scale-0 flex bg-white flex-col right-0 rounded-2xl m-2 border-2",
						children: [
							(0, t.jsxs)("div", {
								className: "relative bg-secondary p-4 overflow-clip w-full",
								children: [
									(0, t.jsx)("div", {
										className:
											"absolut top-0 right-0 scale-150 opacity-30 z-10 rotate-45",
										children: (0, t.jsx)("img", {
											src: "/assets/line-menu.svg",
											alt: "decoration",
											className: "absolute -top-20 right-0 ",
										}),
									}),
									(0, t.jsx)("div", {
										className: "flex justify-end w-full",
										children: (0, t.jsx)(k.MenuButton, {
											title: "CLOSE",
											onClick: n,
											fontSize: "12px",
										}),
									}),
									(0, t.jsx)("div", {
										className: "pt-12",
										children: (0, t.jsx)("div", {
											className: " pb-4 ",
											children: (0, t.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: u?.map((e) =>
													(0, t.jsx)(
														k.MenuButton,
														{ title: e.title, onClick: n, href: e.href },
														e.title,
													),
												),
											}),
										}),
									}),
								],
							}),
							(0, t.jsxs)("div", {
								className:
									"flex  justify-center h-full flex-col w-full gap-4 p-4",
								children: [
									s?.map((e) =>
										(0, t.jsx)(
											"div",
											{
												className: "border-b border-[#D3C3E0]/30 pb-4",
												children: (0, t.jsx)("div", {
													className: "flex justify-start",
													children: (0, t.jsx)(k.MenuButton, {
														title: e.title,
														href: e.href,
														onClick: n,
													}),
												}),
											},
											e.title,
										),
									),
									(0, t.jsx)("div", {
										className: "block sm:hidden",
										children: (0, t.jsx)(N.Button, {
											title: "Connect",
											primary: !0,
											link: "mailto:juliasolodiuk@gmail.com",
											children: (0, t.jsx)(r, { size: 20 }),
										}),
									}),
								],
							}),
						],
					})
				);
			};
		e.s(
			[
				"Header",
				0,
				({ type: e }) => {
					const [l, o] = (0, i.useState)(!1);
					return (0, t.jsxs)("section", {
						className: "relative z-9999",
						children: [
							(0, t.jsxs)("div", {
								className:
									"p-4 md:py-4 md:px-29 fixed w-screen top-0 h-20   flex justify-between max-w-[1920px]",
								children: [
									(0, t.jsxs)("div", {
										className: "flex gap-2",
										children: [
											(0, t.jsx)("div", {
												className:
													"relative w-12 h-12 overflow-hidden rounded-xl ",
												children: (0, t.jsx)(n.default, {
													src: "/logo.jpg",
													alt: "Logo",
													fill: !0,
													priority: !0,
													className: "object-cover",
													sizes: "48px",
												}),
											}),
											(0, t.jsxs)("div", {
												className:
													"px-1 items-center rounded-xl overflow-hidden bg-white h-full hidden lg:flex",
												children: [
													(0, t.jsx)(k.MenuButton, {
														title: "Home",
														href: "/",
													}),
													(0, t.jsx)(k.MenuButton, {
														title: "About",
														href: "/about-me",
													}),
													(0, t.jsx)(k.MenuButton, {
														title: "How To Choose Coach?",
														href: "/how-to-choose-coach",
													}),
													(0, t.jsx)(k.MenuButton, {
														title: "BLive Coaching",
														href: "/about-blc",
													}),
												],
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											(0, t.jsxs)("div", {
												className:
													"flex items-center justify-center overflow-clip h-12 py-2 rounded-xl bg-white ",
												children: [
													(0, t.jsx)("div", {
														className:
															"  bg-white text-[#242424] font-montserrat font-semibold flex items-center px-2",
														children: (0, t.jsx)(R, {}),
													}),
													(0, t.jsx)("div", {
														className:
															" bg-white text-[#242424] font-montserrat font-semibold lg:hidden",
														children: (0, t.jsx)(k.MenuButton, {
															title: "Menu",
															onClick: () => o((e) => !e),
														}),
													}),
												],
											}),
											(0, t.jsx)("div", {
												className: "hidden sm:block",
												children: (0, t.jsx)(N.Button, {
													title: "Connect",
													primary: !0,
													link: "mailto:juliasolodiuk@gmail.com",
													children: (0, t.jsx)(r, { size: 20 }),
												}),
											}),
										],
									}),
								],
							}),
							(0, t.jsx)(T, { type: e, isOpen: l, onClose: () => o(!1) }),
						],
					});
				},
			],
			95133,
		);
	},
]);
