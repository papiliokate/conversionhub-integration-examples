import { ref as i, computed as s, onMounted as h, onUnmounted as b, openBlock as d, createElementBlock as l, mergeProps as c, createElementVNode as u, createTextVNode as f } from "vue";
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
  setup(p, { emit: m }) {
    const t = p, y = m, o = i(t.siteKey), g = i(t.gameUrl), r = s(() => !o.value), v = s(() => `${g.value}?mode=captcha&clientId=${o.value}`), a = (e) => {
      e.data && e.data.type === "oops_captcha_solved" && e.data.payload && y("humanVerified", { payload: e.data.payload, signature: e.data.signature });
    };
    return h(() => {
      r.value && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key."), typeof window < "u" && window.addEventListener("message", a);
    }), b(() => {
      typeof window < "u" && window.removeEventListener("message", a);
    }), (e, n) => r.value ? (d(), l("div", c({ key: 0 }, e.$attrs, { style: { color: "#d32f2f", border: "1px solid #d32f2f", padding: "12px", "border-radius": "4px", "background-color": "#fff", "font-family": "sans-serif" } }), [...n[0] || (n[0] = [
      u("strong", null, "Widget Error:", -1),
      f(" Valid API Key Required. ", -1),
      u("a", {
        href: "https://conversion.business",
        target: "_blank",
        rel: "noopener noreferrer",
        style: { color: "#d32f2f", "text-decoration": "underline" }
      }, "Get your free key here", -1),
      f(". ", -1)
    ])], 16)) : (d(), l("iframe", c({ key: 1 }, e.$attrs, {
      src: v.value,
      style: { width: "100%", height: "400px", border: "none", "border-radius": "12px" },
      title: "Conversion.Business Validation"
    }), null, 16, _));
  }
};
export {
  w as GamifiedCaptcha
};
