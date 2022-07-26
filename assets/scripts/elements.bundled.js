/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  i = Symbol(),
  s = new WeakMap();
class e {
  constructor(t, s, e) {
    if (((this._$cssResult$ = !0), e !== i))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = s);
  }
  get styleSheet() {
    let i = this.o;
    const e = this.t;
    if (t && void 0 === i) {
      const t = void 0 !== e && 1 === e.length;
      t && (i = s.get(e)),
        void 0 === i &&
          ((this.o = i = new CSSStyleSheet()).replaceSync(this.cssText),
          t && s.set(e, i));
    }
    return i;
  }
  toString() {
    return this.cssText;
  }
}
const n = (t, ...s) => {
    const n =
      1 === t.length
        ? t[0]
        : s.reduce(
            (i, s, e) =>
              i +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(s) +
              t[e + 1],
            t[0]
          );
    return new e(n, t, i);
  },
  o = t
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let s = '';
              for (const i of t.cssRules) s += i.cssText;
              return ((t) =>
                new e('string' == typeof t ? t : t + '', void 0, i))(s);
            })(t)
          : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var h;
const r = window.trustedTypes,
  l = r ? r.emptyScript : '',
  a = window.reactiveElementPolyfillSupport,
  d = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? l : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    },
  },
  u = (t, i) => i !== t && (i == i || t == t),
  c = {attribute: !0, type: String, converter: d, reflect: !1, hasChanged: u};
class v extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(t) {
    var i;
    (null !== (i = this.h) && void 0 !== i) || (this.h = []), this.h.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((i, s) => {
        const e = this._$Ep(s, i);
        void 0 !== e && (this._$Ev.set(e, s), t.push(e));
      }),
      t
    );
  }
  static createProperty(t, i = c) {
    if (
      (i.state && (i.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, i),
      !i.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const s = 'symbol' == typeof t ? Symbol() : '__' + t,
        e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const n = this[t];
        (this[i] = e), this.requestUpdate(t, n, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || c;
  }
  static finalize() {
    if (this.hasOwnProperty('finalized')) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const t = this.properties,
        i = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const s of i) this.createProperty(s, t[s]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const t of s) i.unshift(o(t));
    } else void 0 !== t && i.push(o(t));
    return i;
  }
  static _$Ep(t, i) {
    const s = i.attribute;
    return !1 === s
      ? void 0
      : 'string' == typeof s
      ? s
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  u() {
    var t;
    (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (t = this.constructor.h) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this._$ES) && void 0 !== i ? i : (this._$ES = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$ES) ||
      void 0 === i ||
      i.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var i;
    const s =
      null !== (i = this.shadowRoot) && void 0 !== i
        ? i
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((i, s) => {
        t
          ? (i.adoptedStyleSheets = s.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : s.forEach((t) => {
              const s = document.createElement('style'),
                e = window.litNonce;
              void 0 !== e && s.setAttribute('nonce', e),
                (s.textContent = t.cssText),
                i.appendChild(s);
            });
      })(s, this.constructor.elementStyles),
      s
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var i;
          return null === (i = t.hostConnected) || void 0 === i
            ? void 0
            : i.call(t);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((t) => {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i
          ? void 0
          : i.call(t);
      });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i, s = c) {
    var e, n;
    const o = this.constructor._$Ep(t, s);
    if (void 0 !== o && !0 === s.reflect) {
      const h = (
        null !==
          (n =
            null === (e = s.converter) || void 0 === e
              ? void 0
              : e.toAttribute) && void 0 !== n
          ? n
          : d.toAttribute
      )(i, s.type);
      (this._$El = t),
        null == h ? this.removeAttribute(o) : this.setAttribute(o, h),
        (this._$El = null);
    }
  }
  _$AK(t, i) {
    var s, e;
    const n = this.constructor,
      o = n._$Ev.get(t);
    if (void 0 !== o && this._$El !== o) {
      const t = n.getPropertyOptions(o),
        h = t.converter,
        r =
          null !==
            (e =
              null !== (s = null == h ? void 0 : h.fromAttribute) &&
              void 0 !== s
                ? s
                : 'function' == typeof h
                ? h
                : null) && void 0 !== e
            ? e
            : d.fromAttribute;
      (this._$El = o), (this[o] = r(i, t.type)), (this._$El = null);
    }
  }
  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t &&
      (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || u)(
        this[t],
        i
      )
        ? (this._$AL.has(t) || this._$AL.set(t, i),
          !0 === s.reflect &&
            this._$El !== t &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(t, s)))
        : (e = !1)),
      !this.isUpdatePending && e && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((t, i) => (this[i] = t)), (this._$Ei = void 0));
    let i = !1;
    const s = this._$AL;
    try {
      (i = this.shouldUpdate(s)),
        i
          ? (this.willUpdate(s),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i
                  ? void 0
                  : i.call(t);
              }),
            this.update(s))
          : this._$Ek();
    } catch (t) {
      throw ((i = !1), this._$Ek(), t);
    }
    i && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$ES) ||
      void 0 === i ||
      i.forEach((t) => {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i
          ? void 0
          : i.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((t, i) => this._$EO(i, this[i], t)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;
(v.finalized = !0),
  (v.elementProperties = new Map()),
  (v.elementStyles = []),
  (v.shadowRootOptions = {mode: 'open'}),
  null == a || a({ReactiveElement: v}),
  (null !== (h = globalThis.reactiveElementVersions) && void 0 !== h
    ? h
    : (globalThis.reactiveElementVersions = [])
  ).push('1.3.4');
const p = globalThis.trustedTypes,
  y = p ? p.createPolicy('lit-html', {createHTML: (t) => t}) : void 0,
  b = `lit$${(Math.random() + '').slice(9)}$`,
  g = '?' + b,
  w = `<${g}>`,
  m = document,
  $ = (t = '') => m.createComment(t),
  S = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  A = Array.isArray,
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  k = />/g,
  x = RegExp(
    '>|[ \t\n\f\r](?:([^\\s"\'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"\'`<>=]|("|\')|))|$)',
    'g'
  ),
  E = /'/g,
  T = /"/g,
  N = /^(?:script|style|textarea|title)$/i,
  O = (
    (t) =>
    (i, ...s) => ({_$litType$: t, strings: i, values: s})
  )(1),
  U = Symbol.for('lit-noChange'),
  j = Symbol.for('lit-nothing'),
  M = new WeakMap(),
  R = m.createTreeWalker(m, 129, null, !1),
  P = (t, i) => {
    const s = t.length - 1,
      e = [];
    let n,
      o = 2 === i ? '<svg>' : '',
      h = C;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let r,
        l,
        a = -1,
        d = 0;
      for (; d < s.length && ((h.lastIndex = d), (l = h.exec(s)), null !== l); )
        (d = h.lastIndex),
          h === C
            ? '!--' === l[1]
              ? (h = _)
              : void 0 !== l[1]
              ? (h = k)
              : void 0 !== l[2]
              ? (N.test(l[2]) && (n = RegExp('</' + l[2], 'g')), (h = x))
              : void 0 !== l[3] && (h = x)
            : h === x
            ? '>' === l[0]
              ? ((h = null != n ? n : C), (a = -1))
              : void 0 === l[1]
              ? (a = -2)
              : ((a = h.lastIndex - l[2].length),
                (r = l[1]),
                (h = void 0 === l[3] ? x : '"' === l[3] ? T : E))
            : h === T || h === E
            ? (h = x)
            : h === _ || h === k
            ? (h = C)
            : ((h = x), (n = void 0));
      const u = h === x && t[i + 1].startsWith('/>') ? ' ' : '';
      o +=
        h === C
          ? s + w
          : a >= 0
          ? (e.push(r), s.slice(0, a) + '$lit$' + s.slice(a) + b + u)
          : s + b + (-2 === a ? (e.push(void 0), i) : u);
    }
    const r = o + (t[s] || '<?>') + (2 === i ? '</svg>' : '');
    if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
      throw Error('invalid template strings array');
    return [void 0 !== y ? y.createHTML(r) : r, e];
  };
class z {
  constructor({strings: t, _$litType$: i}, s) {
    let e;
    this.parts = [];
    let n = 0,
      o = 0;
    const h = t.length - 1,
      r = this.parts,
      [l, a] = P(t, i);
    if (
      ((this.el = z.createElement(l, s)),
      (R.currentNode = this.el.content),
      2 === i)
    ) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (e = R.nextNode()) && r.length < h; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];
          for (const i of e.getAttributeNames())
            if (i.endsWith('$lit$') || i.startsWith(b)) {
              const s = a[o++];
              if ((t.push(i), void 0 !== s)) {
                const t = e.getAttribute(s.toLowerCase() + '$lit$').split(b),
                  i = /([.?@])?(.*)/.exec(s);
                r.push({
                  type: 1,
                  index: n,
                  name: i[2],
                  strings: t,
                  ctor:
                    '.' === i[1] ? D : '?' === i[1] ? J : '@' === i[1] ? K : B,
                });
              } else r.push({type: 6, index: n});
            }
          for (const i of t) e.removeAttribute(i);
        }
        if (N.test(e.tagName)) {
          const t = e.textContent.split(b),
            i = t.length - 1;
          if (i > 0) {
            e.textContent = p ? p.emptyScript : '';
            for (let s = 0; s < i; s++)
              e.append(t[s], $()), R.nextNode(), r.push({type: 2, index: ++n});
            e.append(t[i], $());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === g) r.push({type: 2, index: n});
        else {
          let t = -1;
          for (; -1 !== (t = e.data.indexOf(b, t + 1)); )
            r.push({type: 7, index: n}), (t += b.length - 1);
        }
      n++;
    }
  }
  static createElement(t, i) {
    const s = m.createElement('template');
    return (s.innerHTML = t), s;
  }
}
function I(t, i, s = t, e) {
  var n, o, h, r;
  if (i === U) return i;
  let l =
    void 0 !== e
      ? null === (n = s._$Cl) || void 0 === n
        ? void 0
        : n[e]
      : s._$Cu;
  const a = S(i) ? void 0 : i._$litDirective$;
  return (
    (null == l ? void 0 : l.constructor) !== a &&
      (null === (o = null == l ? void 0 : l._$AO) ||
        void 0 === o ||
        o.call(l, !1),
      void 0 === a ? (l = void 0) : ((l = new a(t)), l._$AT(t, s, e)),
      void 0 !== e
        ? ((null !== (h = (r = s)._$Cl) && void 0 !== h ? h : (r._$Cl = []))[
            e
          ] = l)
        : (s._$Cu = l)),
    void 0 !== l && (i = I(t, l._$AS(t, i.values), l, e)),
    i
  );
}
class L {
  constructor(t, i) {
    (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var i;
    const {
        el: {content: s},
        parts: e,
      } = this._$AD,
      n = (
        null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i
          ? i
          : m
      ).importNode(s, !0);
    R.currentNode = n;
    let o = R.nextNode(),
      h = 0,
      r = 0,
      l = e[0];
    for (; void 0 !== l; ) {
      if (h === l.index) {
        let i;
        2 === l.type
          ? (i = new q(o, o.nextSibling, this, t))
          : 1 === l.type
          ? (i = new l.ctor(o, l.name, l.strings, this, t))
          : 6 === l.type && (i = new W(o, this, t)),
          this.v.push(i),
          (l = e[++r]);
      }
      h !== (null == l ? void 0 : l.index) && ((o = R.nextNode()), h++);
    }
    return n;
  }
  m(t) {
    let i = 0;
    for (const s of this.v)
      void 0 !== s &&
        (void 0 !== s.strings
          ? (s._$AI(t, s, i), (i += s.strings.length - 2))
          : s._$AI(t[i])),
        i++;
  }
}
class q {
  constructor(t, i, s, e) {
    var n;
    (this.type = 2),
      (this._$AH = j),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = i),
      (this._$AM = s),
      (this.options = e),
      (this._$C_ =
        null === (n = null == e ? void 0 : e.isConnected) || void 0 === n || n);
  }
  get _$AU() {
    var t, i;
    return null !==
      (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== i
      ? i
      : this._$C_;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    (t = I(this, t, i)),
      S(t)
        ? t === j || null == t || '' === t
          ? (this._$AH !== j && this._$AR(), (this._$AH = j))
          : t !== this._$AH && t !== U && this.T(t)
        : void 0 !== t._$litType$
        ? this.$(t)
        : void 0 !== t.nodeType
        ? this.k(t)
        : ((t) =>
            A(t) ||
            'function' == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
        ? this.S(t)
        : this.T(t);
  }
  j(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }
  k(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.j(t)));
  }
  T(t) {
    this._$AH !== j && S(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.k(m.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var i;
    const {values: s, _$litType$: e} = t,
      n =
        'number' == typeof e
          ? this._$AC(t)
          : (void 0 === e.el && (e.el = z.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === n)
      this._$AH.m(s);
    else {
      const t = new L(n, this),
        i = t.p(this.options);
      t.m(s), this.k(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let i = M.get(t.strings);
    return void 0 === i && M.set(t.strings, (i = new z(t))), i;
  }
  S(t) {
    A(this._$AH) || ((this._$AH = []), this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const n of t)
      e === i.length
        ? i.push((s = new q(this.j($()), this.j($()), this, this.options)))
        : (s = i[e]),
        s._$AI(n),
        e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for (
      null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var i;
    void 0 === this._$AM &&
      ((this._$C_ = t),
      null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
class B {
  constructor(t, i, s, e, n) {
    (this.type = 1),
      (this._$AH = j),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = i),
      (this._$AM = e),
      (this.options = n),
      s.length > 2 || '' !== s[0] || '' !== s[1]
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = j);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, e) {
    const n = this.strings;
    let o = !1;
    if (void 0 === n)
      (t = I(this, t, i, 0)),
        (o = !S(t) || (t !== this._$AH && t !== U)),
        o && (this._$AH = t);
    else {
      const e = t;
      let h, r;
      for (t = n[0], h = 0; h < n.length - 1; h++)
        (r = I(this, e[s + h], i, h)),
          r === U && (r = this._$AH[h]),
          o || (o = !S(r) || r !== this._$AH[h]),
          r === j ? (t = j) : t !== j && (t += (null != r ? r : '') + n[h + 1]),
          (this._$AH[h] = r);
    }
    o && !e && this.P(t);
  }
  P(t) {
    t === j
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class D extends B {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  P(t) {
    this.element[this.name] = t === j ? void 0 : t;
  }
}
const H = p ? p.emptyScript : '';
class J extends B {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  P(t) {
    t && t !== j
      ? this.element.setAttribute(this.name, H)
      : this.element.removeAttribute(this.name);
  }
}
class K extends B {
  constructor(t, i, s, e, n) {
    super(t, i, s, e, n), (this.type = 5);
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = I(this, t, i, 0)) && void 0 !== s ? s : j) === U)
      return;
    const e = this._$AH,
      n =
        (t === j && e !== j) ||
        t.capture !== e.capture ||
        t.once !== e.once ||
        t.passive !== e.passive,
      o = t !== j && (e === j || n);
    n && this.element.removeEventListener(this.name, this, e),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var i, s;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (s =
              null === (i = this.options) || void 0 === i ? void 0 : i.host) &&
            void 0 !== s
            ? s
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class W {
  constructor(t, i, s) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i),
      (this.options = s);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    I(this, t);
  }
}
const Z = window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V, F;
null == Z || Z(z, q),
  (null !== (f = globalThis.litHtmlVersions) && void 0 !== f
    ? f
    : (globalThis.litHtmlVersions = [])
  ).push('2.2.7');
class G extends v {
  constructor() {
    super(...arguments),
      (this.renderOptions = {host: this}),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, i;
    const s = super.createRenderRoot();
    return (
      (null !== (t = (i = this.renderOptions).renderBefore) && void 0 !== t) ||
        (i.renderBefore = s.firstChild),
      s
    );
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = ((t, i, s) => {
        var e, n;
        const o =
          null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e
            ? e
            : i;
        let h = o._$litPart$;
        if (void 0 === h) {
          const t =
            null !== (n = null == s ? void 0 : s.renderBefore) && void 0 !== n
              ? n
              : null;
          o._$litPart$ = h = new q(
            i.insertBefore($(), t),
            t,
            void 0,
            null != s ? s : {}
          );
        }
        return h._$AI(t), h;
      })(i, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return U;
  }
}
(G.finalized = !0),
  (G._$litElement$ = !0),
  null === (V = globalThis.litElementHydrateSupport) ||
    void 0 === V ||
    V.call(globalThis, {LitElement: G});
const Q = globalThis.litElementPolyfillSupport;
null == Q || Q({LitElement: G}),
  (null !== (F = globalThis.litElementVersions) && void 0 !== F
    ? F
    : (globalThis.litElementVersions = [])
  ).push('3.2.2');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = (t) => (i) =>
    'function' == typeof i
      ? ((t, i) => (window.customElements.define(t, i), i))(t, i)
      : ((t, i) => {
          const {kind: s, elements: e} = i;
          return {
            kind: s,
            elements: e,
            finisher(i) {
              window.customElements.define(t, i);
            },
          };
        })(t, i),
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ Y = (t, i) =>
    'method' === i.kind && i.descriptor && !('value' in i.descriptor)
      ? {
          ...i,
          finisher(s) {
            s.createProperty(i.key, t);
          },
        }
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          originalKey: i.key,
          initializer() {
            'function' == typeof i.initializer &&
              (this[i.key] = i.initializer.call(this));
          },
          finisher(s) {
            s.createProperty(i.key, t);
          },
        };
function tt(t) {
  return (i, s) =>
    void 0 !== s
      ? ((t, i, s) => {
          i.constructor.createProperty(s, t);
        })(t, i, s)
      : Y(t, i);
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
var it;
null === (it = window.HTMLSlotElement) ||
  void 0 === it ||
  it.prototype.assignedElements;
var st = function (t, i, s, e) {
  for (
    var n,
      o = arguments.length,
      h =
        o < 3
          ? i
          : null === e
          ? (e = Object.getOwnPropertyDescriptor(i, s))
          : e,
      r = t.length - 1;
    r >= 0;
    r--
  )
    (n = t[r]) && (h = (o < 3 ? n(h) : o > 3 ? n(i, s, h) : n(i, s)) || h);
  return o > 3 && h && Object.defineProperty(i, s, h), h;
};
let et = class extends G {
  render() {
    return O`
      <span>faction is ${this.faction} name is <slot></slot></span>
    `;
  }
};
(et.styles = n`
    :host {
      background-color: 'gray';
      width: 10rem;
      height: 2rem;
    }
  `),
  st([tt()], et.prototype, 'faction', void 0),
  (et = st([X('spelldawn-card-title')], et));
var nt = function (t, i, s, e) {
  for (
    var n,
      o = arguments.length,
      h =
        o < 3
          ? i
          : null === e
          ? (e = Object.getOwnPropertyDescriptor(i, s))
          : e,
      r = t.length - 1;
    r >= 0;
    r--
  )
    (n = t[r]) && (h = (o < 3 ? n(h) : o > 3 ? n(i, s, h) : n(i, s)) || h);
  return o > 3 && h && Object.defineProperty(i, s, h), h;
};
let ot = class extends G {
  render() {
    return O`
      <spelldawn-card-title faction=${((t) => (null != t ? t : j))(
        this.faction
      )}>${this.name}</spelldawn-card-title>
      <p>hello ${this.name} in faction ${this.faction} and base attack ${
      this.baseAttack
    }</p>
      <slot></slot>
    `;
  }
};
(ot.styles = n`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `),
  nt([tt()], ot.prototype, 'name', void 0),
  nt([tt()], ot.prototype, 'image', void 0),
  nt([tt({type: Number})], ot.prototype, 'manaCost', void 0),
  nt([tt()], ot.prototype, 'school', void 0),
  nt([tt()], ot.prototype, 'rarity', void 0),
  nt([tt()], ot.prototype, 'faction', void 0),
  nt([tt({type: Number})], ot.prototype, 'health', void 0),
  nt([tt({type: Number})], ot.prototype, 'shield', void 0),
  nt([tt({type: Number})], ot.prototype, 'baseAttack', void 0),
  nt([tt({type: Number})], ot.prototype, 'levelRequirement', void 0),
  nt([tt({type: Number})], ot.prototype, 'schemePoints', void 0),
  (ot = nt([X('spelldawn-card')], ot));
export {ot as SpelldawnCard};
