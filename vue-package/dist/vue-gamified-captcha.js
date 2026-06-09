import { ref as l, computed as a, onMounted as k, onUnmounted as w, openBlock as d, createElementBlock as c, normalizeStyle as u, normalizeClass as f, createElementVNode as m, createTextVNode as y } from "vue";
const x = ["src"], C = {
  __name: "GamifiedCaptcha",
  props: {
    siteKey: {
      type: String,
      default: "ch_pub_demo_testkey_12345"
    },
    gameUrl: {
      type: String,
      default: "https://conversion.business/sunny-day-maze/"
    },
    className: {
      type: String,
      default: "conversion-business-widget"
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["humanVerified"],
  setup(s, { emit: p }) {
    const t = s, v = p, o = l(t.siteKey), h = l(t.gameUrl), n = a(() => !o.value || o.value === "ch_pub_demo_testkey_12345"), b = a(() => `${h.value}?mode=captcha&clientId=${o.value}`), g = a(() => ({
      color: "#d32f2f",
      border: "1px solid #d32f2f",
      padding: "12px",
      borderRadius: "4px",
      backgroundColor: "#fff",
      fontFamily: "sans-serif",
      ...t.style
    })), _ = a(() => ({
      width: "100%",
      height: "400px",
      border: "none",
      borderRadius: "12px",
      ...t.style
    })), i = (e) => {
      e.data && e.data.type === "oops_captcha_solved" && e.data.payload && v("humanVerified", e.data.payload);
    };
    return k(() => {
      n.value && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key."), typeof window < "u" && window.addEventListener("message", i);
    }), w(() => {
      typeof window < "u" && window.removeEventListener("message", i);
    }), (e, r) => n.value ? (d(), c("div", {
      key: 0,
      class: f(s.className),
      style: u(g.value)
    }, [...r[0] || (r[0] = [
      m("strong", null, "Widget Error:", -1),
      y(" Valid API Key Required. ", -1),
      m("a", {
        href: "https://conversion.business",
        target: "_blank",
        rel: "noopener noreferrer",
        style: { color: "#d32f2f", "text-decoration": "underline" }
      }, "Get your free key here", -1),
      y(". ", -1)
    ])], 6)) : (d(), c("iframe", {
      key: 1,
      class: f(s.className),
      src: b.value,
      style: u(_.value),
      title: "Conversion.Business Validation"
    }, null, 14, x));
  }
};
export {
  C as GamifiedCaptcha
};
