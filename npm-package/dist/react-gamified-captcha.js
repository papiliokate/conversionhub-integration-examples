import { useEffect as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region CaptchaWidget.jsx
var r = ({ siteKey: r = "ch_pub_demo_testkey_12345", onHumanVerified: i, gameUrl: a = "https://conversion.business/sunny-day-maze/", className: o = "conversion-business-widget", style: s = {}, ...c }) => {
	let l = !r;
	return e(() => {
		if (typeof window > "u") return;
		l && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key.");
		let e = (e) => {
			e.data && e.data.type === "oops_captcha_solved" && i && e.data.payload && i(e.data.payload);
		};
		return window.addEventListener("message", e), () => {
			window.removeEventListener("message", e);
		};
	}, [
		r,
		i,
		l
	]), l ? /* @__PURE__ */ n("div", {
		...c,
		style: {
			color: "#d32f2f",
			border: "1px solid #d32f2f",
			padding: "12px",
			borderRadius: "4px",
			backgroundColor: "#fff",
			fontFamily: "sans-serif",
			...s
		},
		className: o,
		children: [
			/* @__PURE__ */ t("strong", { children: "Widget Error:" }),
			" Valid API Key Required. ",
			/* @__PURE__ */ t("a", {
				href: "https://conversion.business",
				target: "_blank",
				rel: "noopener noreferrer",
				style: {
					color: "#d32f2f",
					textDecoration: "underline"
				},
				children: "Get your free key here"
			}),
			"."
		]
	}) : /* @__PURE__ */ t("iframe", {
		...c,
		className: o,
		src: `${a}?mode=captcha&clientId=${r}`,
		style: {
			width: "100%",
			height: "400px",
			border: "none",
			borderRadius: "12px",
			...s
		},
		title: "Conversion.Business Validation"
	});
};
//#endregion
export { r as GamifiedCaptcha };
