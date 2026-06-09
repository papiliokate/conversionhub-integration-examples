import { ref as i, computed as s, onMounted as g, onUnmounted as b, openBlock as d, createElementBlock as l, mergeProps as c, createElementVNode as f, createTextVNode as p } from "vue";
const _ = ["src"], w = {
  __name: "GamifiedCaptcha",
  props: {
    siteKey: {
      type: String,
      default: "ch_pub_demo_testkey_12345"
    },
    gameUrl: {
      type: String,
      default: "https://conversion.business/sunny-day-maze/"
    }
  },
  emits: ["humanVerified"],
  setup(u, { emit: m }) {
    const t = u, y = m, o = i(t.siteKey), v = i(t.gameUrl), r = s(() => !o.value), h = s(() => `${v.value}?mode=captcha&clientId=${o.value}`), n = (e) => {
      e.data && e.data.type === "oops_captcha_solved" && e.data.payload && y("humanVerified", e.data.payload);
    };
    return g(() => {
      r.value && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key."), typeof window < "u" && window.addEventListener("message", n);
    }), b(() => {
      typeof window < "u" && window.removeEventListener("message", n);
    }), (e, a) => r.value ? (d(), l("div", c({ key: 0 }, e.$attrs, { style: { color: "#d32f2f", border: "1px solid #d32f2f", padding: "12px", "border-radius": "4px", "background-color": "#fff", "font-family": "sans-serif" } }), [...a[0] || (a[0] = [
      f("strong", null, "Widget Error:", -1),
      p(" Valid API Key Required. ", -1),
      f("a", {
        href: "https://conversion.business",
        target: "_blank",
        rel: "noopener noreferrer",
        style: { color: "#d32f2f", "text-decoration": "underline" }
      }, "Get your free key here", -1),
      p(". ", -1)
    ])], 16)) : (d(), l("iframe", c({ key: 1 }, e.$attrs, {
      src: h.value,
      style: { width: "100%", height: "400px", border: "none", "border-radius": "12px" },
      title: "Conversion.Business Validation"
    }), null, 16, _));
  }
};
export {
  w as GamifiedCaptcha
};
