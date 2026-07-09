(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	80902,
	22289,
	(e) => {
		var t = e.i(47167),
			r = e.i(71645);
		const s = (() => {
			if ("u" < typeof window)
				return (t.default.env.DEBUG || "").includes("nuqs");
			try {
				const e = "nuqs-localStorage-test";
				if ("u" < typeof localStorage) return !1;
				localStorage.setItem(e, e);
				const t = localStorage.getItem(e) === e;
				return (
					localStorage.removeItem(e),
					t && (localStorage.getItem("debug") || "").includes("nuqs")
				);
			} catch {
				return !1;
			}
		})();
		function u(e, ...t) {
			if (!s) return;
			const r = ((e, ...t) =>
				e.replace(/%[sfdO]/g, (e) => {
					const r = t.shift();
					return "%O" === e && r
						? JSON.stringify(r).replace(/"([^"]+)":/g, "$1:")
						: String(r);
				}))(e, ...t);
			performance.mark(r);
			try {
				console.log(e, ...t);
			} catch {
				console.log(r);
			}
		}
		const n = {
			303: "Multiple adapter contexts detected. This might happen in monorepos.",
			404: "nuqs requires an adapter to work with your framework.",
			409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
			414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
			422: "Invalid options combination: `limitUrlUpdates: debounce` should be used in SSR scenarios, with `shallow: false`",
			429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
			500: "Empty search params cache. Search params can't be accessed in Layouts.",
			501: "Search params cache already populated. Have you called `parse` twice?",
		};
		function o(e) {
			return `[nuqs] ${n[e]}
  See https://nuqs.dev/NUQS-${e}`;
		}
		const l = (0, r.createContext)({
			useAdapter() {
				throw Error(o(404));
			},
		});
		function i(e) {
			return { method: "throttle", timeMs: e };
		}
		(l.displayName = "NuqsAdapterContext"),
			s &&
				"u" > typeof window &&
				(window.__NuqsAdapterContext &&
					window.__NuqsAdapterContext !== l &&
					console.error(o(303)),
				(window.__NuqsAdapterContext = l)),
			e.s(
				[
					"a",
					0,
					() => (0, r.useContext)(l).processUrlSearchParams,
					"c",
					0,
					u,
					"i",
					0,
					() => (0, r.useContext)(l).defaultOptions,
					"l",
					0,
					(e, ...t) => {
						s && console.warn(e, ...t);
					},
					"n",
					0,
					(e) =>
						({
							children: t,
							defaultOptions: s,
							processUrlSearchParams: u,
							...n
						}) =>
							(0, r.createElement)(
								l.Provider,
								{
									...n,
									value: {
										useAdapter: e,
										defaultOptions: s,
										processUrlSearchParams: u,
									},
								},
								t,
							),
					"o",
					0,
					(e) => {
						if (0 === e.size) return "";
						const t = [];
						for (const [r, s] of e.entries()) {
							const e = r
								.replace(/#/g, "%23")
								.replace(/&/g, "%26")
								.replace(/\+/g, "%2B")
								.replace(/=/g, "%3D")
								.replace(/\?/g, "%3F");
							t.push(
								`${e}=${s
									.replace(/%/g, "%25")
									.replace(/\+/g, "%2B")
									.replace(/ /g, "+")
									.replace(/#/g, "%23")
									.replace(/&/g, "%26")
									.replace(/"/g, "%22")
									.replace(/'/g, "%27")
									.replace(/`/g, "%60")
									.replace(/</g, "%3C")
									.replace(/>/g, "%3E")
									.replace(/[\x00-\x1F]/g, (e) => encodeURIComponent(e))}`,
							);
						}
						return "?" + t.join("&");
					},
					"r",
					0,
					(e) => {
						const t = (0, r.useContext)(l);
						if (!("useAdapter" in t)) throw Error(o(404));
						return t.useAdapter(e);
					},
					"s",
					0,
					o,
				],
				22289,
			);
		const a = i(
			(() => {
				if ("u" < typeof window || !window.GestureEvent) return 50;
				try {
					const e = navigator.userAgent?.match(/version\/([\d.]+) safari/i);
					return parseFloat(e[1]) >= 17 ? 120 : 320;
				} catch {
					return 320;
				}
			})(),
		);
		function c(e, t, r) {
			if ("string" == typeof e) r.set(t, e);
			else {
				for (const s of (r.delete(t), e)) r.append(t, s);
				r.has(t) || r.set(t, "");
			}
			return r;
		}
		function h() {
			const e = new Map();
			return {
				on(t, r) {
					const s = e.get(t) || [];
					return s.push(r), e.set(t, s), () => this.off(t, r);
				},
				off(t, r) {
					const s = e.get(t);
					s &&
						e.set(
							t,
							s.filter((e) => e !== r),
						);
				},
				emit(t, r) {
					e.get(t)?.forEach((e) => e(r));
				},
			};
		}
		function p(e, t, r) {
			const s = setTimeout(() => {
				e(), r.removeEventListener("abort", u);
			}, t);
			function u() {
				clearTimeout(s), r.removeEventListener("abort", u);
			}
			r.addEventListener("abort", u);
		}
		function d() {
			const e = Promise;
			if (Object.hasOwn(Promise, "withResolvers"))
				return Promise.withResolvers();
			let t = () => {},
				r = () => {};
			return {
				promise: new e((e, s) => {
					(t = e), (r = s);
				}),
				resolve: t,
				reject: r,
			};
		}
		function f() {
			return new URLSearchParams(location.search);
		}
		var g = class {
			updateMap = new Map();
			options = { history: "replace", scroll: !1, shallow: !0 };
			timeMs = a.timeMs;
			transitions = new Set();
			resolvers = null;
			controller = null;
			lastFlushedAt = 0;
			resetQueueOnNextPush = !1;
			push({ key: e, query: t, options: r }, s = a.timeMs) {
				this.resetQueueOnNextPush &&
					(this.reset(), (this.resetQueueOnNextPush = !1)),
					u("[nuqs gtq] Enqueueing %s=%s %O", e, t, r),
					this.updateMap.set(e, t),
					"push" === r.history && (this.options.history = "push"),
					r.scroll && (this.options.scroll = !0),
					!1 === r.shallow && (this.options.shallow = !1),
					r.startTransition && this.transitions.add(r.startTransition),
					(!Number.isFinite(this.timeMs) || s > this.timeMs) &&
						(this.timeMs = s);
			}
			getQueuedQuery(e) {
				return this.updateMap.get(e);
			}
			getPendingPromise({ getSearchParamsSnapshot: e = f }) {
				return this.resolvers?.promise ?? Promise.resolve(e());
			}
			flush(
				{ getSearchParamsSnapshot: e = f, rateLimitFactor: t = 1, ...r },
				s,
			) {
				if (
					((this.controller ??= new AbortController()),
					!Number.isFinite(this.timeMs))
				)
					return (
						u("[nuqs gtq] Skipping flush due to throttleMs=Infinity"),
						Promise.resolve(e())
					);
				if (this.resolvers) return this.resolvers.promise;
				this.resolvers = d();
				const n = () => {
						this.lastFlushedAt = performance.now();
						const [t, u] = this.applyPendingUpdates(
							{
								...r,
								autoResetQueueOnUpdate: r.autoResetQueueOnUpdate ?? !0,
								getSearchParamsSnapshot: e,
							},
							s,
						);
						null === u
							? (this.resolvers.resolve(t), (this.resetQueueOnNextPush = !0))
							: this.resolvers.reject(t),
							(this.resolvers = null);
					},
					o = () => {
						const e = performance.now() - this.lastFlushedAt,
							r = this.timeMs,
							s = t * Math.max(0, r - e);
						u(
							"[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)",
							s,
							r,
							t,
						),
							0 === s ? n() : p(n, s, this.controller.signal);
					};
				return p(o, 0, this.controller.signal), this.resolvers.promise;
			}
			abort() {
				return (
					this.controller?.abort(),
					(this.controller = new AbortController()),
					this.resolvers?.resolve(new URLSearchParams()),
					(this.resolvers = null),
					this.reset()
				);
			}
			reset() {
				const e = Array.from(this.updateMap.keys());
				return (
					u(
						"[nuqs gtq] Resetting queue %s",
						JSON.stringify(Object.fromEntries(this.updateMap)),
					),
					this.updateMap.clear(),
					this.transitions.clear(),
					(this.options = { history: "replace", scroll: !1, shallow: !0 }),
					(this.timeMs = a.timeMs),
					e
				);
			}
			applyPendingUpdates(e, t) {
				let { updateUrl: r, getSearchParamsSnapshot: s } = e,
					n = s();
				if (
					(u(
						"[nuqs gtq] Applying %d pending update(s) on top of %s",
						this.updateMap.size,
						n.toString(),
					),
					0 === this.updateMap.size)
				)
					return [n, null];
				const l = Array.from(this.updateMap.entries()),
					i = { ...this.options },
					a = Array.from(this.transitions);
				for (const [t, r] of (e.autoResetQueueOnUpdate && this.reset(),
				u("[nuqs gtq] Flushing queue %O with options %O", l, i),
				l))
					null === r ? n.delete(t) : (n = c(r, t, n));
				t && (n = t(n));
				try {
					return (
						!((e, t) => {
							let r = t;
							for (let t = e.length - 1; t >= 0; t--) {
								const s = e[t];
								if (!s) continue;
								const u = r;
								r = () => s(u);
							}
							r();
						})(a, () => {
							r(n, i);
						}),
						[n, null]
					);
				} catch (e) {
					return console.error(o(429), l.map(([e]) => e).join(), e), [n, e];
				}
			}
		};
		const m = new g();
		var y = class {
			callback;
			resolvers = d();
			controller = new AbortController();
			queuedValue = void 0;
			constructor(e) {
				this.callback = e;
			}
			abort() {
				this.controller.abort(), (this.queuedValue = void 0);
			}
			push(e, t) {
				return (
					(this.queuedValue = e),
					this.controller.abort(),
					(this.controller = new AbortController()),
					p(
						() => {
							const t = this.resolvers;
							try {
								u("[nuqs dq] Flushing debounce queue", e);
								const r = this.callback(e);
								u("[nuqs dq] Reset debounce queue %O", this.queuedValue),
									(this.queuedValue = void 0),
									(this.resolvers = d()),
									r.then((e) => t.resolve(e)).catch((e) => t.reject(e));
							} catch (e) {
								(this.queuedValue = void 0), t.reject(e);
							}
						},
						t,
						this.controller.signal,
					),
					this.resolvers.promise
				);
			}
		};
		const q = new (class {
			throttleQueue;
			queues = new Map();
			queuedQuerySync = h();
			constructor(e = new g()) {
				this.throttleQueue = e;
			}
			useQueuedQueries(e) {
				var t, s;
				let u, n;
				return (
					(t = (e, t) => this.queuedQuerySync.on(e, t)),
					(s = (e) => this.getQueuedQuery(e)),
					(u = (0, r.useCallback)(() => {
						const t = Object.fromEntries(e.map((e) => [e, s(e)]));
						return [JSON.stringify(t), t];
					}, [e.join(","), s])),
					null === (n = (0, r.useRef)(null)).current && (n.current = u()),
					(0, r.useSyncExternalStore)(
						(0, r.useCallback)(
							(r) => {
								const s = e.map((e) => t(e, r));
								return () => s.forEach((e) => e());
							},
							[e.join(","), t],
						),
						() => {
							const [e, t] = u();
							return n.current[0] === e
								? n.current[1]
								: ((n.current = [e, t]), t);
						},
						() => n.current[1],
					)
				);
			}
			push(e, t, r, s) {
				if (!Number.isFinite(t))
					return Promise.resolve((r.getSearchParamsSnapshot ?? f)());
				const n = e.key;
				if (!this.queues.has(n)) {
					u("[nuqs dqc] Creating debounce queue for `%s`", n);
					const e = new y(
						(e) => (
							this.throttleQueue.push(e),
							this.throttleQueue.flush(r, s).finally(() => {
								this.queues.get(e.key)?.queuedValue === void 0 &&
									(u("[nuqs dqc] Cleaning up empty queue for `%s`", e.key),
									this.queues.delete(e.key)),
									this.queuedQuerySync.emit(e.key);
							})
						),
					);
					this.queues.set(n, e);
				}
				u("[nuqs dqc] Enqueueing debounce update %O", e);
				const o = this.queues.get(n).push(e, t);
				return this.queuedQuerySync.emit(n), o;
			}
			abort(e) {
				const t = this.queues.get(e);
				return t
					? (u(
							"[nuqs dqc] Aborting debounce queue %s=%s",
							e,
							t.queuedValue?.query,
						),
						this.queues.delete(e),
						t.abort(),
						this.queuedQuerySync.emit(e),
						(e) => (e.then(t.resolvers.resolve, t.resolvers.reject), e))
					: (e) => e;
			}
			abortAll() {
				for (const [e, t] of this.queues.entries())
					u(
						"[nuqs dqc] Aborting debounce queue %s=%s",
						e,
						t.queuedValue?.query,
					),
						t.abort(),
						t.resolvers.resolve(new URLSearchParams()),
						this.queuedQuerySync.emit(e);
				this.queues.clear();
			}
			getQueuedQuery(e) {
				const t = this.queues.get(e)?.queuedValue?.query;
				return void 0 !== t ? t : this.throttleQueue.getQueuedQuery(e);
			}
		})(m);
		e.s(
			[
				"a",
				0,
				c,
				"c",
				0,
				i,
				"i",
				0,
				(e) => null === e || (Array.isArray(e) && 0 === e.length),
				"n",
				0,
				m,
				"o",
				0,
				(e) => ({ method: "debounce", timeMs: e }),
				"r",
				0,
				h,
				"s",
				0,
				a,
				"t",
				0,
				q,
			],
			80902,
		);
	},
	75696,
	(e) => {
		var t = e.i(61745),
			r = e.i(43476);
		e.s([
			"default",
			0,
			({ locale: e, ...s }) => {
				if (!e) throw Error(void 0);
				return (0, r.jsx)(t.IntlProvider, { locale: e, ...s });
			},
		]);
	},
	45061,
	(e, t, r) => {
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "useRouter", { enumerable: !0, get: () => n });
		const s = e.r(71645),
			u = e.r(65856);
		function n() {
			return (0, s.useContext)(u.RouterContext);
		}
		("function" == typeof r.default ||
			("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	74041,
	(e, t, r) => {
		t.exports = e.r(45061);
	},
	8200,
	(e) => {
		var t = e.i(22289),
			r = e.i(80902),
			s = e.i(71645),
			u = e.i(18566),
			n = e.i(74041);
		let o = !1;
		function l() {
			o ||
				((0, t.c)("[nuqs] Aborting queues"),
				r.t.abortAll(),
				r.n.abort().forEach((e) => r.t.queuedQuerySync.emit(e)));
		}
		const i = (0, t.n)(() => {
			let e,
				r =
					((e = (0, n.useRouter)()),
					(0, s.useEffect)(
						() => (
							e?.events.on("routeChangeStart", l),
							e?.events.on("beforeHistoryChange", l),
							() => {
								e?.events.off("routeChangeStart", l),
									e?.events.off("beforeHistoryChange", l);
							}
						),
						[],
					),
					{
						searchParams: (0, s.useMemo)(() => {
							const t = new URLSearchParams();
							if (null === e) return t;
							for (const [r, s] of Object.entries(e.query))
								if ("string" == typeof s) t.set(r, s);
								else if (Array.isArray(s)) for (const e of s) t.append(r, e);
							return t;
						}, [JSON.stringify(e?.query)]),
						updateUrl: (0, s.useCallback)((e, r) => {
							const s = window.next?.router,
								u = ((e, t) => {
									let r,
										s = new Set(),
										u = /\[([^\]]+)\]/g;
									for (; null !== (r = u.exec(e)); ) {
										const e = r[1];
										e && s.add(e);
									}
									const n = Object.fromEntries(
											Object.entries(t).filter(([e]) => s.has(e)),
										),
										o = /\[\.{3}([^\]]+)\]$/.exec(e);
									if (o && o[1]) {
										const e = o[1];
										n[e] = t[e] ?? [];
									}
									const l = /\[\[\.{3}([^\]]+)\]\]$/.exec(e);
									if (l && l[1]) {
										const e = l[1];
										n[e] = t[e] ?? [];
									}
									return n;
								})(s.pathname, s.query),
								n =
									s.asPath.replace(/#.*$/, "").replace(/\?.*$/, "") +
									(0, t.o)(e) +
									location.hash;
							(0, t.c)("[nuqs next/pages] Updating url: %s", n);
							const l = "push" === r.history ? s.push : s.replace;
							(o = !0),
								l
									.call(
										s,
										{
											pathname: s.pathname,
											query: {
												...((e) => {
													const t = {};
													for (const r of e.keys()) {
														const s = e.getAll(r);
														1 === s.length
															? (t[r] = s[0])
															: s.length > 1 && (t[r] = s);
													}
													return t;
												})(e),
												...u,
											},
										},
										n,
										{ scroll: r.scroll, shallow: r.shallow },
									)
									.finally(() => {
										o = !1;
									});
						}, []),
						autoResetQueueOnUpdate: !1,
					}),
				i = (() => {
					const e = (0, u.useRouter)(),
						[r, n] = (0, s.useOptimistic)((0, u.useSearchParams)());
					return {
						searchParams: r,
						updateUrl: (0, s.useCallback)((r, u) => {
							(0, s.startTransition)(() => {
								u.shallow || n(r);
								const s = ((e) => {
									const { origin: r, pathname: s, hash: u } = location;
									return r + s + (0, t.o)(e) + u;
								})(r);
								(0, t.c)("[nuqs next/app] Updating url: %s", s);
								const o =
									"push" === u.history
										? history.pushState
										: history.replaceState;
								!((e = 1) => {})(3),
									o.call(history, null, "", s),
									u.scroll && window.scrollTo(0, 0),
									u.shallow || e.replace(s, { scroll: !1 });
							});
						}, []),
						rateLimitFactor: 3,
						autoResetQueueOnUpdate: !0,
					};
				})();
			return {
				searchParams: i.searchParams,
				updateUrl: (e, t) =>
					"string" == typeof window.next?.router?.state?.asPath
						? r.updateUrl(e, t)
						: i.updateUrl(e, t),
				autoResetQueueOnUpdate: !1,
			};
		});
		e.s(["NuqsAdapter", 0, i], 8200);
	},
]);
