/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class s{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let i=this.o;const s=this.t;if(t&&void 0===i){const t=void 0!==s&&1===s.length;t&&(i=e.get(s)),void 0===i&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&e.set(s,i))}return i}toString(){return this.cssText}}const o=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new s(o,t,i)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const l=window.trustedTypes,a=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},d=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{t?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=t.cssText,i.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=u){var s,o;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const r=(null!==(o=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:c.toAttribute)(i,e.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var e,s;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r=t.converter,l=null!==(s=null!==(e=null==r?void 0:r.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==s?s:c.fromAttribute;this._$El=n,this[n]=l(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:v}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.4");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,w=`<${b}>`,_=document,y=(t="")=>_.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,k=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),A=/'/g,E=/"/g,N=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),j=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),O=new WeakMap,L=_.createTreeWalker(_,129,null,!1),R=(t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=S;for(let i=0;i<e;i++){const e=t[i];let l,a,h=-1,c=0;for(;c<e.length&&(r.lastIndex=c,a=r.exec(e),null!==a);)c=r.lastIndex,r===S?"!--"===a[1]?r=x:void 0!==a[1]?r=k:void 0!==a[2]?(N.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=T):void 0!==a[3]&&(r=T):r===T?">"===a[0]?(r=null!=o?o:S,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?T:'"'===a[3]?E:A):r===E||r===A?r=T:r===x||r===k?r=S:(r=T,o=void 0);const d=r===T&&t[i+1].startsWith("/>")?" ":"";n+=r===S?e+w:h>=0?(s.push(l),e.slice(0,h)+"$lit$"+e.slice(h)+g+d):e+g+(-2===h?(s.push(void 0),i):d)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(l):l,s]};class U{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=R(t,i);if(this.el=U.createElement(a,e),L.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=L.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(g)){const e=h[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(g),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?H:"@"===i[1]?G:z})}else l.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(N.test(s.tagName)){const t=s.textContent.split(g),i=t.length-1;if(i>0){s.textContent=f?f.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],y()),L.nextNode(),l.push({type:2,index:++o});s.append(t[i],y())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(g,t+1));)l.push({type:7,index:o}),t+=g.length-1}o++}}static createElement(t,i){const e=_.createElement("template");return e.innerHTML=t,e}}function B(t,i,e=t,s){var o,n,r,l;if(i===j)return i;let a=void 0!==s?null===(o=e._$Cl)||void 0===o?void 0:o[s]:e._$Cu;const h=C(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:e._$Cu=a),void 0!==a&&(i=B(t,a._$AS(t,i.values),a,s)),i}class P{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(e,!0);L.currentNode=o;let n=L.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let i;2===a.type?i=new J(n,n.nextSibling,this,t):1===a.type?i=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(i=new W(n,this,t)),this.v.push(i),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=L.nextNode(),r++)}return o}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class J{constructor(t,i,e,s){var o;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),C(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==j&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):(t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.S(t):this.T(t)}j(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==M&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=U.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(e);else{const t=new P(o,this),i=t.p(this.options);t.m(e),this.k(i),this._$AH=t}}_$AC(t){let i=O.get(t.strings);return void 0===i&&O.set(t.strings,i=new U(t)),i}S(t){$(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new J(this.j(y()),this.j(y()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class z{constructor(t,i,e,s,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,i,0),n=!C(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=B(this,s[e+r],i,r),l===j&&(l=this._$AH[r]),n||(n=!C(l)||l!==this._$AH[r]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.P(t)}P(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends z{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===M?void 0:t}}const F=f?f.emptyScript:"";class H extends z{constructor(){super(...arguments),this.type=4}P(t){t&&t!==M?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class G extends z{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=B(this,t,i,0))&&void 0!==e?e:M)===j)return;const s=this._$AH,o=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==M&&(s===M||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Z;null==q||q(U,J),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.7");class V extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,o;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new J(i.insertBefore(y(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}V.finalized=!0,V._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:V});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:V}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Y=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function tt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):Y(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const it=({finisher:t,descriptor:i})=>(e,s)=>{var o;if(void 0===s){const s=null!==(o=e.originalKey)&&void 0!==o?o:e.key,n=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(n.finisher=function(i){t(i,s)}),n}{const o=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(o,s)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var et;const st=null!=(null===(et=window.HTMLSlotElement)||void 0===et?void 0:et.prototype.assignedElements)?(t,i)=>t.assignedElements(i):(t,i)=>t.assignedNodes(i).filter((t=>t.nodeType===Node.ELEMENT_NODE));
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>null!=t?t:M;var nt,rt,lt;!function(t){t.Neutral="Neutral",t.Law="Law",t.Primal="Primal",t.Shadow="Shadow"}(nt||(nt={})),function(t){t.Common="Common",t.Uncommon="Uncommon",t.Rare="Rare",t.Epic="Epic"}(rt||(rt={})),function(t){t.Mortal="Mortal",t.Infernal="Infernal",t.Abyssal="Abyssal",t.Prismatic="Prismatic",t.Construct="Construct"}(lt||(lt={}));const at="https://storage.googleapis.com/spelldawn-assets/";function ht(){return at+"LittleSweetDaemon/TCG_Card_Design/"+"Custom/Title/BlackWhiteFaceTape.png"}function ct(t){return at+"LittleSweetDaemon/TCG_Card_Fantasy_Design/"+t}function dt(t){return at+"LittleSweetDaemon/TCG_Card_Elemental_Design/"+t}var ut=function(t,i,e,s){for(var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let vt=class extends V{constructor(){super(...arguments),this.curveText=!1}factionClass(){switch(this.faction){case lt.Abyssal:return"abyssal";case lt.Infernal:return"infernal";case lt.Mortal:return"mortal";case lt.Prismatic:return"prismatic";case lt.Construct:return"construct";default:return"noFaction"}}render(){let t=null;return t=this.curveText?I`
        <svg id="svg">
          <path
            id="curve"
            d="M -50 50 C 100 25, 100 25, 250 50"
            fill="transparent"
          />
          <text
            id="text"
            class=${this.factionClass()}
          >
            <textPath
              alignment-baseline="top"
              xlink:href="#curve"
              startOffset="50%"
              text-anchor="middle"
            >
              ${this.name}
            </textPath>
          </text>
        </svg>
      `:I`<span id="text" class=${this.factionClass()}>${this.name}</span>`,I`
      <img id="titleBackground" src=${ht()} />
      ${t}
    `}};vt.styles=o`
    :host {
      position: absolute;
      margin-top: -1rem;
    }

    #titleBackground {
      position: absolute;
      width: 10rem;
    }

    #text {
      position: absolute;
      width: 10rem;
      text-align: center;
      font-family: 'Bona Nova';
      padding-top: 0.35rem;
      font-weight: bold;
      font-size: 0.85rem;
    }

    #svg {
      position: absolute;
      width: 10rem;
      height: 2rem;
      top: -0.25rem;
    }

    .abyssal {
      color: #388e3c;
    }

    .infernal {
      color: #e53935;
    }

    .mortal {
      color: #1976d2;
    }

    .prismatic {
      color: #e65100;
    }

    .construct {
      color: #c2185b;
    }

    .noFaction {
      color: #000000;
    }
  `,ut([tt()],vt.prototype,"name",void 0),ut([tt()],vt.prototype,"faction",void 0),ut([tt({type:Boolean})],vt.prototype,"curveText",void 0),vt=ut([Q("spelldawn-card-title")],vt);var pt=function(t,i,e,s){for(var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let ft=class extends V{constructor(){super(...arguments),this.curveTitleText=!1}rarityJewel(){switch(this.rarity){case rt.Uncommon:return ct("Jewels/Jewel_Steampunk_Color_01.png");case rt.Rare:return ct("Jewels/Jewel_Elf_Color_02.png");case rt.Epic:return ct("Jewels/Jewel_Steampunk_Color_02.png");default:return ct("Jewels/Jewel_Elf_Color_01.png")}}cardIcon(t,i,e){return void 0!==e?I`
        <div class="cardIcon" id=${t}>
          <img class="iconBackground" src=${i} />
          <span class="iconText">${e}</span>
        </div>
      `:I``}processSlot(){for(let t of this._children)if(t instanceof Element){let i=t;i.innerHTML=i.innerHTML.replace("{#}",'<i class="fas fa-bolt"></i>'),i.innerHTML=i.innerHTML.replace("{M}",'<i class="fas fa-fire"></i>'),i.innerHTML=i.innerHTML.replace("{A}",'<i class="fas fa-hourglass"></i>')}}updated(){this.processSlot()}render(){let t=null;var i;return void 0!==this.image&&(t=I`<img id="image" src=${i=this.image,at+i} />`),I`
      <div id="container">
        ${t}
        <img id="frame" src=${function(t){switch(t){case nt.Law:return ct("Cards/Card_Steampunk_Style_Color_1.png");case nt.Primal:return ct("Cards/Card_Elf_Style_Color_1.png");case nt.Shadow:return ct("Cards/Card_Daemon_Style_Color_1.png");default:return ct("Cards/Card_Lovecraft_Style_Color_1.png")}}(this.school)} />
        <spelldawn-card-title
          faction=${ot(this.faction)}
          name=${ot(this.name)}
          ?curvetext=${this.curveTitleText}
        >
        </spelldawn-card-title>
        <img id="rarity" src=${this.rarityJewel()} />
        ${this.cardIcon("topLeft",ct("Icons/Icon_Mana_Color_01.png"),this.manaCost)}
        ${this.cardIcon("topLeft",ct("Number_Back/Number_Back_Color_3"),this.levelRequirement)}
        ${this.cardIcon("bottomRight",dt("Heart_Icons/Heart_Icons_Color_5.png"),this.health)}
        ${this.cardIcon("bottomRight",dt("Attack_Icons/Attack_Icons_Color_4"),this.baseAttack)}
        ${this.cardIcon("bottomRight",dt("Card_Color_07/Back_Card_Color_07/Back_Card_Color_07_Logo_Crystal"),this.schemePoints)}
        ${this.cardIcon("bottomLeft",dt("Number_Icons/Number_Icons_Color_6.png"),this.shield)}
        <div id="cardText">
          <span id="cardTextSpan"><slot></slot></span>
        </div>
      </div>
    `}};ft.styles=o`
    :host {
      display: block;
      width: 10rem;
      height: 15rem;
      display: inline-block;
      margin: 0.5rem 1rem;
    }

    ::slotted(*) {
      margin: 0 !important;
      padding: 0 !important;
    }

    #container {
      position: absolute;
    }

    #image {
      position: absolute;
      width: 9rem;
      margin-top: 0.6rem;
      margin-left: 0.3rem;
      transform: scaleX(-1);
    }

    #frame {
      width: 10rem;
      height: 15rem;
      position: absolute;
    }

    #rarity {
      position: absolute;
      left: 4.5rem;
      top: 9.5rem;
      width: 1rem;
    }

    #topLeft {
      top: 0;
      left: 0;
    }

    #bottomLeft {
      top: 12.5rem;
      left: -0.5rem;
    }

    #bottomRight {
      top: 12.5rem;
      left: 8rem;
    }

    #cardText {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      text-align: center;
      font-size: 0.6rem;
      line-height: 0.7rem;
      width: 6.5rem;
      height: 3.4rem;
      top: 10.9rem;
      left: 1.75rem;
    }

    .cardIcon {
      position: absolute;
    }

    .iconBackground {
      position: absolute;
      width: 2.5rem;
      margin-top: 0.8rem;
    }

    .iconText {
      position: absolute;
      font-family: 'Impact';
      color: white;
      top: 0.8rem;
      left: 0.25rem;
      text-shadow: black 0px 0px 3px, black 0px 0px 3px, black 0px 0px 3px,
        black 0px 0px 3px;
      text-align: center;
      font-size: 1.7rem;
      width: 2rem;
    }
  `,pt([tt()],ft.prototype,"name",void 0),pt([tt()],ft.prototype,"image",void 0),pt([tt({type:Number})],ft.prototype,"manaCost",void 0),pt([tt()],ft.prototype,"school",void 0),pt([tt()],ft.prototype,"rarity",void 0),pt([tt()],ft.prototype,"faction",void 0),pt([tt({type:Number})],ft.prototype,"health",void 0),pt([tt({type:Number})],ft.prototype,"shield",void 0),pt([tt({type:Number})],ft.prototype,"baseAttack",void 0),pt([tt({type:Number})],ft.prototype,"levelRequirement",void 0),pt([tt({type:Number})],ft.prototype,"schemePoints",void 0),pt([tt({type:Boolean})],ft.prototype,"curveTitleText",void 0),pt([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i,e){let s,o=t;return"object"==typeof t?(o=t.slot,s=t):s={flatten:i},e?function(t){const{slot:i,selector:e}=null!=t?t:{};return it({descriptor:s=>({get(){var s;const o="slot"+(i?`[name=${i}]`:":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(o),r=null!=n?st(n,t):[];return e?r.filter((t=>t.matches(e))):r},enumerable:!0,configurable:!0})})}({slot:o,flatten:i,selector:e}):it({descriptor:t=>({get(){var t,i;const e="slot"+(o?`[name=${o}]`:":not([name])"),n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e);return null!==(i=null==n?void 0:n.assignedNodes(s))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}()],ft.prototype,"_children",void 0),ft=pt([Q("spelldawn-card")],ft);export{ft as SpelldawnCard};
