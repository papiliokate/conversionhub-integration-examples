import { SvelteComponent as E, init as P, safe_not_equal as S, compute_rest_props as k, assign as m, exclude_internal_props as V, noop as w, detach as b, insert as v, empty as B, set_attributes as y, get_spread_update as U, append as u, element as _, text as K, attr as p, set_style as C } from "svelte/internal";
import { createEventDispatcher as G, onMount as L, onDestroy as q } from "svelte";
const A = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(A);
function D(n) {
  let e, r, d, i = [
    /*$$restProps*/
    n[4],
    { class: (
      /*className*/
      n[0]
    ) },
    {
      src: r = /*computedUrl*/
      n[3]
    },
    {
      style: d = "width: 100%; height: 400px; border: none; border-radius: 12px; " + /*style*/
      n[1]
    },
    { title: "Conversion.Business Validation" }
  ], s = {};
  for (let t = 0; t < i.length; t += 1)
    s = m(s, i[t]);
  return {
    c() {
      e = _("iframe"), y(e, s);
    },
    m(t, a) {
      v(t, e, a);
    },
    p(t, a) {
      y(e, s = U(i, [
        a & /*$$restProps*/
        16 && /*$$restProps*/
        t[4],
        a & /*className*/
        1 && { class: (
          /*className*/
          t[0]
        ) },
        { src: r },
        a & /*style*/
        2 && d !== (d = "width: 100%; height: 400px; border: none; border-radius: 12px; " + /*style*/
        t[1]) && { style: d },
        { title: "Conversion.Business Validation" }
      ]));
    },
    d(t) {
      t && b(e);
    }
  };
}
function N(n) {
  let e, r, d, i, s, t, a = [
    /*$$restProps*/
    n[4],
    { class: (
      /*className*/
      n[0]
    ) },
    {
      style: t = "color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif; " + /*style*/
      n[1]
    }
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = m(c, a[l]);
  return {
    c() {
      e = _("div"), r = _("strong"), r.textContent = "Widget Error:", d = K(" Valid API Key Required. "), i = _("a"), i.textContent = "Get your free key here", s = K("."), p(i, "href", "https://conversion.business"), p(i, "target", "_blank"), p(i, "rel", "noopener noreferrer"), C(i, "color", "#d32f2f"), C(i, "text-decoration", "underline"), y(e, c);
    },
    m(l, f) {
      v(l, e, f), u(e, r), u(e, d), u(e, i), u(e, s);
    },
    p(l, f) {
      y(e, c = U(a, [
        f & /*$$restProps*/
        16 && /*$$restProps*/
        l[4],
        f & /*className*/
        1 && { class: (
          /*className*/
          l[0]
        ) },
        f & /*style*/
        2 && t !== (t = "color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif; " + /*style*/
        l[1]) && { style: t }
      ]));
    },
    d(l) {
      l && b(e);
    }
  };
}
function R(n) {
  let e;
  function r(s, t) {
    return (
      /*isInvalidKey*/
      s[2] ? N : D
    );
  }
  let i = r(n)(n);
  return {
    c() {
      i.c(), e = B();
    },
    m(s, t) {
      i.m(s, t), v(s, e, t);
    },
    p(s, [t]) {
      i.p(s, t);
    },
    i: w,
    o: w,
    d(s) {
      s && b(e), i.d(s);
    }
  };
}
function z(n, e, r) {
  const d = ["siteKey", "gameUrl", "class", "style"];
  let i = k(e, d), { siteKey: s = "ch_pub_demo_testkey_12345" } = e, { gameUrl: t = "https://conversion.business/sunny-day-maze/" } = e, { class: a = "conversion-business-widget" } = e, { style: c = "" } = e;
  const l = G(), f = s, x = t, g = !f, I = `${x}?mode=captcha&clientId=${f}`;
  function h(o) {
    o.data && o.data.type === "oops_captcha_solved" && o.data.payload && l("humanVerified", o.data.payload);
  }
  return L(() => {
    g && console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key."), typeof window < "u" && window.addEventListener("message", h);
  }), q(() => {
    typeof window < "u" && window.removeEventListener("message", h);
  }), n.$$set = (o) => {
    e = m(m({}, e), V(o)), r(4, i = k(e, d)), "siteKey" in o && r(5, s = o.siteKey), "gameUrl" in o && r(6, t = o.gameUrl), "class" in o && r(0, a = o.class), "style" in o && r(1, c = o.style);
  }, [a, c, g, I, i, s, t];
}
class O extends E {
  constructor(e) {
    super(), P(this, e, z, R, S, {
      siteKey: 5,
      gameUrl: 6,
      class: 0,
      style: 1
    });
  }
}
export {
  O as GamifiedCaptcha
};
