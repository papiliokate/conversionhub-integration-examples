import { SvelteComponent as k, init as x, safe_not_equal as K, noop as b, detach as _, insert as y, empty as C, attr as o, append as c, element as u, text as h, set_style as v, src_url_equal as I } from "svelte/internal";
import { createEventDispatcher as U, onMount as E, onDestroy as N } from "svelte";
const S = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(S);
function P(a) {
  let e, n, l;
  return {
    c() {
      e = u("iframe"), o(
        e,
        "class",
        /*className*/
        a[0]
      ), I(e.src, n = /*computedUrl*/
      a[3]) || o(e, "src", n), o(e, "style", l = "width: 100%; height: 400px; border: none; border-radius: 12px; " + /*style*/
      a[1]), o(e, "title", "Conversion.Business Validation");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*className*/
      1 && o(
        e,
        "class",
        /*className*/
        t[0]
      ), i & /*style*/
      2 && l !== (l = "width: 100%; height: 400px; border: none; border-radius: 12px; " + /*style*/
      t[1]) && o(e, "style", l);
    },
    d(t) {
      t && _(e);
    }
  };
}
function V(a) {
  let e, n, l, t, i, s;
  return {
    c() {
      e = u("div"), n = u("strong"), n.textContent = "Widget Error:", l = h(" Valid API Key Required. "), t = u("a"), t.textContent = "Get your free key here", i = h("."), o(t, "href", "https://conversion.business"), o(t, "target", "_blank"), o(t, "rel", "noopener noreferrer"), v(t, "color", "#d32f2f"), v(t, "text-decoration", "underline"), o(
        e,
        "class",
        /*className*/
        a[0]
      ), o(e, "style", s = "color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif; " + /*style*/
      a[1]);
    },
    m(d, f) {
      y(d, e, f), c(e, n), c(e, l), c(e, t), c(e, i);
    },
    p(d, f) {
      f & /*className*/
      1 && o(
        e,
        "class",
        /*className*/
        d[0]
      ), f & /*style*/
      2 && s !== (s = "color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif; " + /*style*/
      d[1]) && o(e, "style", s);
    },
    d(d) {
      d && _(e);
    }
  };
}
function q(a) {
  let e;
  function n(i, s) {
    return (
      /*isInvalidKey*/
      i[2] ? V : P
    );
  }
  let t = n(a)(a);
  return {
    c() {
      t.c(), e = C();
    },
    m(i, s) {
      t.m(i, s), y(i, e, s);
    },
    p(i, [s]) {
      t.p(i, s);
    },
    i: b,
    o: b,
    d(i) {
      i && _(e), t.d(i);
    }
  };
}
function B(a, e, n) {
  let { siteKey: l = "ch_pub_demo_testkey_12345" } = e, { gameUrl: t = "https://conversion.business/sunny-day-maze/" } = e, { className: i = "conversion-business-widget" } = e, { style: s = "" } = e;
  const d = U(), f = l, w = t, m = !f || f === "ch_pub_demo_testkey_12345", g = `${w}?mode=captcha&clientId=${f}`;
  function p(r) {
    r.data && r.data.type === "oops_captcha_solved" && r.data.payload && d("humanVerified", r.data.payload);
  }
  return E(() => {
    m && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key."), typeof window < "u" && window.addEventListener("message", p);
  }), N(() => {
    typeof window < "u" && window.removeEventListener("message", p);
  }), a.$$set = (r) => {
    "siteKey" in r && n(4, l = r.siteKey), "gameUrl" in r && n(5, t = r.gameUrl), "className" in r && n(0, i = r.className), "style" in r && n(1, s = r.style);
  }, [i, s, m, g, l, t];
}
class A extends k {
  constructor(e) {
    super(), x(this, e, B, q, K, {
      siteKey: 4,
      gameUrl: 5,
      className: 0,
      style: 1
    });
  }
}
export {
  A as GamifiedCaptcha
};
