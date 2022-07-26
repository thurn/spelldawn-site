/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class e{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let i=this.o;const e=this.t;if(t&&void 0===i){const t=void 0!==e&&1===e.length;t&&(i=s.get(e)),void 0===i&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(e,i))}return i}toString(){return this.cssText}}const o=(t,...s)=>{const o=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(o,t,i)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const l=window.trustedTypes,h=l?l.emptyScript:"",a=window.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=u){var e,o;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:c.toAttribute)(i,s.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var s,e;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r=t.converter,l=null!==(e=null!==(s=null==r?void 0:r.fromAttribute)&&void 0!==s?s:"function"==typeof r?r:null)&&void 0!==e?e:c.fromAttribute;this._$El=n,this[n]=l(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:v}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.4");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,w="?"+g,b=`<${w}>`,y=document,_=(t="")=>y.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,k=/>/g,A=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,N=/"/g,E=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),R=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),j=new WeakMap,M=y.createTreeWalker(y,129,null,!1),O=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=S;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===S?"!--"===h[1]?r=x:void 0!==h[1]?r=k:void 0!==h[2]?(E.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=A):void 0!==h[3]&&(r=A):r===A?">"===h[0]?(r=null!=o?o:S,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?A:'"'===h[3]?N:T):r===N||r===T?r=A:r===x||r===k?r=S:(r=A,o=void 0);const d=r===A&&t[i+1].startsWith("/>")?" ":"";n+=r===S?s+b:a>=0?(e.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+g+d):s+g+(-2===a?(e.push(void 0),i):d)}const l=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(l):l,e]};class L{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=O(t,i);if(this.el=L.createElement(h,s),M.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=M.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(g)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(g),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?G:"@"===i[1]?W:z})}else l.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(E.test(e.tagName)){const t=e.textContent.split(g),i=t.length-1;if(i>0){e.textContent=f?f.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],_()),M.nextNode(),l.push({type:2,index:++o});e.append(t[i],_())}}}else if(8===e.nodeType)if(e.data===w)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(g,t+1));)l.push({type:7,index:o}),t+=g.length-1}o++}}static createElement(t,i){const s=y.createElement("template");return s.innerHTML=t,s}}function B(t,i,s=t,e){var o,n,r,l;if(i===R)return i;let h=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=$(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=B(t,h._$AS(t,i.values),h,e)),i}class J{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:y).importNode(s,!0);M.currentNode=o;let n=M.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new P(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new q(n,this,t)),this.v.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=M.nextNode(),r++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class P{constructor(t,i,s,e){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),$(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==R&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.S(t):this.T(t)}j(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==U&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=L.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new J(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=j.get(t.strings);return void 0===i&&j.set(t.strings,i=new L(t)),i}S(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new P(this.j(_()),this.j(_()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class z{constructor(t,i,s,e,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,i,0),n=!$(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=B(this,e[s+r],i,r),l===R&&(l=this._$AH[r]),n||(n=!$(l)||l!==this._$AH[r]),l===U?t=U:t!==U&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!e&&this.P(t)}P(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends z{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===U?void 0:t}}const H=f?f.emptyScript:"";class G extends z{constructor(){super(...arguments),this.type=4}P(t){t&&t!==U?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class W extends z{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=B(this,t,i,0))&&void 0!==s?s:U)===R)return;const e=this._$AH,o=t===U&&e!==U||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==U&&(e===U||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Z;null==F||F(L,P),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.7");class V extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new P(i.insertBefore(_(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}V.finalized=!0,V._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:V});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:V}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Y=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function tt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):Y(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var it,st,et,ot;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements,function(t){t.Neutral="Neutral",t.Shadow="Shadow",t.Nature="Nature",t.Time="Time"}(st||(st={})),function(t){t.Common="Common",t.Uncommon="Uncommon",t.Rare="Rare",t.Epic="Epic"}(et||(et={})),function(t){t.Mortal="Mortal",t.Infernal="Inferna",t.Abyssal="Abyssal",t.Prismatic="Prismatic",t.Construct="Construct"}(ot||(ot={}));const nt="https://storage.googleapis.com/spelldawn-assets/";function rt(){return nt+"LittleSweetDaemon/TCG_Card_Design/"+"Custom/Title/BlackWhiteFaceTape.png"}function lt(t){return nt+"LittleSweetDaemon/TCG_Card_Fantasy_Design/"+t}function ht(t){return nt+"LittleSweetDaemon/TCG_Card_Elemental_Design/"+t}var at=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ct=class extends V{render(){return I`
      <img id="titleBackground" src=${rt()} />
      <span id="text"><slot></slot></span>
    `}};ct.styles=o`
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
      padding-top: 0.15rem;
      font-weight: bold;
    }
  `,at([tt()],ct.prototype,"faction",void 0),ct=at([Q("spelldawn-card-title")],ct);var dt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ut=class extends V{rarityJewel(){switch(this.rarity){case et.Uncommon:return lt("Jewels/Jewel_Steampunk_Color_01.png");case et.Rare:return lt("Jewels/Jewel_Elf_Color_02.png");case et.Epic:return lt("Jewels/Jewel_Steampunk_Color_02.png");default:return lt("Jewels/Jewel_Elf_Color_01.png")}}cardIcon(t,i,s){return void 0!==s?I`
        <div class="cardIcon" id=${t}>
          <img class="iconBackground" src=${i} />
          <span class="iconText">${s}</span>
        </div>
      `:I``}render(){let t=null;var i;return void 0!==this.image&&(t=I`<img id="image" src=${i=this.image,nt+i} />`),I`
      <div id="container">
        ${t}
        <img id="frame" src=${this.school,lt("Cards/Card_Steampunk_Style_Color_1.png")} />
        <spelldawn-card-title>${this.name}</spelldawn-card-title>
        <img id="rarity" src=${this.rarityJewel()} />
        ${this.cardIcon("topLeft",lt("Icons/Icon_Mana_Color_01.png"),this.manaCost)}
        ${this.cardIcon("topLeft",lt("Number_Back/Number_Back_Color_3"),this.levelRequirement)}
        ${this.cardIcon("bottomRight",ht("Heart_Icons/Heart_Icons_Color_5.png"),this.health)}
        ${this.cardIcon("bottomRight",ht("Attack_Icons/Attack_Icons_Color_4"),this.baseAttack)}
        ${this.cardIcon("bottomRight",ht("Card_Color_07/Back_Card_Color_07/Back_Card_Color_07_Logo_Crystal"),this.schemePoints)}
        ${this.cardIcon("bottomLeft",ht("Number_Icons/Number_Icons_Color_6.png"),this.shield)}
        <div id="cardText">
          <span id="cardTextSpan"><slot></slot></span>
        </div>
      </div>
    `}};ut.styles=o`
    :host {
      display: block;
      width: 10rem;
      height: 15rem;
      display: inline-block;
      margin: 0.5rem 1rem;
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
  `,dt([tt()],ut.prototype,"name",void 0),dt([tt()],ut.prototype,"image",void 0),dt([tt({type:Number})],ut.prototype,"manaCost",void 0),dt([tt()],ut.prototype,"school",void 0),dt([tt()],ut.prototype,"rarity",void 0),dt([tt()],ut.prototype,"faction",void 0),dt([tt({type:Number})],ut.prototype,"health",void 0),dt([tt({type:Number})],ut.prototype,"shield",void 0),dt([tt({type:Number})],ut.prototype,"baseAttack",void 0),dt([tt({type:Number})],ut.prototype,"levelRequirement",void 0),dt([tt({type:Number})],ut.prototype,"schemePoints",void 0),ut=dt([Q("spelldawn-card")],ut);export{ut as SpelldawnCard};
