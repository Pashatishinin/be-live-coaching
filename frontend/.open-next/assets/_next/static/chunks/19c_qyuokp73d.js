(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	63059,
	(e) => {
		const t = (0, e.i(75254).default)("chevron-right", [
			["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
		]);
		e.s(["ChevronRight", 0, t], 63059);
	},
	43416,
	(e) => {
		var t = e.i(43476),
			s = e.i(63059),
			l = e.i(71645),
			i = e.i(38601),
			r = e.i(62859),
			a = e.i(45084);
		e.s([
			"NotFoundPage",
			0,
			() => {
				const e = (0, l.useRef)(null),
					{ setContainerRef: c } = (0, i.useSvgDraw)({
						url: "/assets/line-2.svg",
						scope: e,
					});
				return (0, t.jsxs)("section", {
					ref: e,
					className:
						"relative flex min-h-screen h-full w-full flex-col items-center justify-center bg-[#E7EBFA] px-4 text-center overflow-clip",
					children: [
						(0, t.jsx)("div", {
							ref: c,
							className:
								"absolute  rotate-170 inset-0 flex items-center justify-center min-w-360 w-screen opacity-20",
						}),
						(0, t.jsxs)("div", {
							className: "relative z-10",
							children: [
								(0, t.jsx)("h1", {
									className:
										"text-[130px] font-bold text-[#D3C3E0]  sm:text-[300px] tracking-tighter",
									children: "404",
								}),
								(0, t.jsxs)("div", {
									className:
										"absolute inset-0 flex flex-col items-center justify-center mt-10",
									children: [
										(0, t.jsx)("h2", {
											className: "text-2xl font-bold text-black sm:text-4xl",
											children: "Page Not Found",
										}),
										(0, t.jsx)("p", {
											className:
												"mt-2 text-gray-600 max-w-[300px] sm:max-w-none",
											children:
												"Sorry, the page you are looking for doesn't exist or has been moved.",
										}),
									],
								}),
							],
						}),
						(0, t.jsx)("div", {
							className: "mt-12",
							children: (0, t.jsx)(r.default, {
								children: (0, t.jsx)(a.Button, {
									title: "Back Home Page",
									secondary: !0,
									width: "max-w-90",
									link: "/",
									children: (0, t.jsx)("div", {
										className: "rotate-180",
										children: (0, t.jsx)(s.ChevronRight, { size: 20 }),
									}),
								}),
							}),
						}),
					],
				});
			},
		]);
	},
]);
