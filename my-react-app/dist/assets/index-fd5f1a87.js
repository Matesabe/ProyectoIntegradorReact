var gp=Object.defineProperty;var vp=(e,n,t)=>n in e?gp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Vi=(e,n,t)=>(vp(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yc={exports:{}},bi={},xc={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),xp=Symbol.for("react.portal"),bp=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Ep=Symbol.for("react.memo"),_p=Symbol.for("react.lazy"),zs=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wc=Object.assign,kc={};function Yt(e,n,t){this.props=e,this.context=n,this.refs=kc,this.updater=t||bc}Yt.prototype.isReactComponent={};Yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sc(){}Sc.prototype=Yt.prototype;function Nl(e,n,t){this.props=e,this.context=n,this.refs=kc,this.updater=t||bc}var Ol=Nl.prototype=new Sc;Ol.constructor=Nl;wc(Ol,Yt.prototype);Ol.isPureReactComponent=!0;var Ms=Array.isArray,jc=Object.prototype.hasOwnProperty,Tl={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)jc.call(n,r)&&!Pc.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Xr,type:e,key:i,ref:a,props:o,_owner:Tl.current}}function Op(e,n){return{$$typeof:Xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Tp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Is=/\/+/g;function Qi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):n.toString(36)}function Eo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xr:case xp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Qi(a,0):r,Ms(o)?(t="",e!=null&&(t=e.replace(Is,"$&/")+"/"),Eo(o,n,t,"",function(c){return c})):o!=null&&(Rl(o)&&(o=Op(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Is,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",Ms(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Qi(i,u);a+=Eo(i,n,t,s,o)}else if(s=Np(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Qi(i,u++),a+=Eo(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(e,n,t){if(e==null)return e;var r=[],o=0;return Eo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Rp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},_o={transition:null},Dp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Tl};function Ec(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ro,forEach:function(e,n,t){ro(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ro(e,function(){n++}),n},toArray:function(e){return ro(e,function(n){return n})||[]},only:function(e){if(!Rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Yt;z.Fragment=bp;z.Profiler=kp;z.PureComponent=Nl;z.StrictMode=wp;z.Suspense=Cp;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;z.act=Ec;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wc({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Tl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)jc.call(n,s)&&!Pc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Xr,type:e.type,key:o,ref:i,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sp,_context:e},e.Consumer=e};z.createElement=Cc;z.createFactory=function(e){var n=Cc.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Pp,render:e}};z.isValidElement=Rl;z.lazy=function(e){return{$$typeof:_p,_payload:{_status:-1,_result:e},_init:Rp}};z.memo=function(e,n){return{$$typeof:Ep,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=_o.transition;_o.transition={};try{e()}finally{_o.transition=n}};z.unstable_act=Ec;z.useCallback=function(e,n){return ge.current.useCallback(e,n)};z.useContext=function(e){return ge.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};z.useEffect=function(e,n){return ge.current.useEffect(e,n)};z.useId=function(){return ge.current.useId()};z.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return ge.current.useMemo(e,n)};z.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};z.useRef=function(e){return ge.current.useRef(e)};z.useState=function(e){return ge.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return ge.current.useTransition()};z.version="18.3.1";xc.exports=z;var y=xc.exports;const tn=yp(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=y,Lp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Ip=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Mp.call(n,r)&&!Fp.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Lp,type:e,key:i,ref:a,props:o,_owner:Ip.current}}bi.Fragment=zp;bi.jsx=_c;bi.jsxs=_c;yc.exports=bi;var l=yc.exports,Ea={},Nc={exports:{}},Re={},Oc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,T){var A=S.length;S.push(T);e:for(;0<A;){var M=A-1>>>1,G=S[M];if(0<o(G,T))S[M]=T,S[A]=G,A=M;else break e}}function t(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var T=S[0],A=S.pop();if(A!==T){S[0]=A;e:for(var M=0,G=S.length,no=G>>>1;M<no;){var Gn=2*(M+1)-1,Wi=S[Gn],Jn=Gn+1,to=S[Jn];if(0>o(Wi,A))Jn<G&&0>o(to,Wi)?(S[M]=to,S[Jn]=A,M=Jn):(S[M]=Wi,S[Gn]=A,M=Gn);else if(Jn<G&&0>o(to,A))S[M]=to,S[Jn]=A,M=Jn;else break e}}return T}function o(S,T){var A=S.sortIndex-T.sortIndex;return A!==0?A:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var s=[],c=[],d=1,m=null,h=3,b=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(S){for(var T=t(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=S)r(c),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(c)}}function w(S){if(v=!1,g(S),!x)if(t(s)!==null)x=!0,_n(P);else{var T=t(c);T!==null&&L(w,T.startTime-S)}}function P(S,T){x=!1,v&&(v=!1,p(N),N=-1),b=!0;var A=h;try{for(g(T),m=t(s);m!==null&&(!(m.expirationTime>T)||S&&!U());){var M=m.callback;if(typeof M=="function"){m.callback=null,h=m.priorityLevel;var G=M(m.expirationTime<=T);T=e.unstable_now(),typeof G=="function"?m.callback=G:m===t(s)&&r(s),g(T)}else r(s);m=t(s)}if(m!==null)var no=!0;else{var Gn=t(c);Gn!==null&&L(w,Gn.startTime-T),no=!1}return no}finally{m=null,h=A,b=!1}}var j=!1,C=null,N=-1,E=5,O=-1;function U(){return!(e.unstable_now()-O<E)}function ye(){if(C!==null){var S=e.unstable_now();O=S;var T=!0;try{T=C(!0,S)}finally{T?xe():(j=!1,C=null)}}else j=!1}var xe;if(typeof f=="function")xe=function(){f(ye)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,xt=yt.port2;yt.port1.onmessage=ye,xe=function(){xt.postMessage(null)}}else xe=function(){k(ye,0)};function _n(S){C=S,j||(j=!0,xe())}function L(S,T){N=k(function(){S(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,_n(P))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var A=h;h=T;try{return S()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var A=h;h=S;try{return T()}finally{h=A}},e.unstable_scheduleCallback=function(S,T,A){var M=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?M+A:M):A=M,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,S={id:d++,callback:T,priorityLevel:S,startTime:A,expirationTime:G,sortIndex:-1},A>M?(S.sortIndex=A,n(c,S),t(s)===null&&S===t(c)&&(v?(p(N),N=-1):v=!0,L(w,A-M))):(S.sortIndex=G,n(s,S),x||b||(x=!0,_n(P))),S},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(S){var T=h;return function(){var A=h;h=T;try{return S.apply(this,arguments)}finally{h=A}}}})(Tc);Oc.exports=Tc;var $p=Oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=y,Ne=$p;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,Er={};function ht(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Er[e]=n,e=0;e<n.length;e++)Rc.add(n[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_a=Object.prototype.hasOwnProperty,Hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fs={},$s={};function Bp(e){return _a.call($s,e)?!0:_a.call(Fs,e)?!1:Hp.test(e)?$s[e]=!0:(Fs[e]=!0,!1)}function Wp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,n,t,r){if(n===null||typeof n>"u"||Wp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dl=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Dl,Al);ue[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Dl,Al);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Dl,Al);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,n,t,r){var o=ue.hasOwnProperty(n)?ue[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Vp(n,t,o,r)&&(t=null),r||o===null?Bp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Sn=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),wt=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Ml=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),Lc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Xi;function dr(e){if(Xi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Xi=n&&n[1]||""}return`
`+Xi+e}var qi=!1;function Ki(e,n){if(!e||qi)return"";qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,u=i.length-1;1<=a&&0<=u&&o[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||o[a]!==i[u]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=u);break}}}finally{qi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?dr(e):""}function Qp(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kt:return"Fragment";case wt:return"Portal";case Na:return"Profiler";case zl:return"StrictMode";case Oa:return"Suspense";case Ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case Ml:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Ra(e.type)||"Memo";case Tn:n=e._payload,e=e._init;try{return Ra(e(n))}catch{}}return null}function Xp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(n);case 8:return n===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qp(e){var n=zc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function io(e){e._valueTracker||(e._valueTracker=qp(e))}function Mc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=zc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ic(e,n){n=n.checked,n!=null&&Ll(e,"checked",n,!1)}function Aa(e,n){Ic(e,n);var t=Vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?La(e,n.type,t):n.hasOwnProperty("defaultValue")&&La(e,n.type,Vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Bs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function La(e,n,t){(n!=="number"||Bo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var fr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Vn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function za(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ws(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(fr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Vn(t)}}function Fc(e,n){var t=Vn(n.value),r=Vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Kp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function Hc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function Bc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Hc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Yp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(e,n){if(n){if(Yp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Fa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $a=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,At=null,Lt=null;function Qs(e){if(e=Yr(e)){if(typeof Ua!="function")throw Error(_(280));var n=e.stateNode;n&&(n=Pi(n),Ua(e.stateNode,e.type,n))}}function Wc(e){At?Lt?Lt.push(e):Lt=[e]:At=e}function Vc(){if(At){var e=At,n=Lt;if(Lt=At=null,Qs(e),n)for(e=0;e<n.length;e++)Qs(n[e])}}function Qc(e,n){return e(n)}function Xc(){}var Yi=!1;function qc(e,n,t){if(Yi)return e(n,t);Yi=!0;try{return Qc(e,n,t)}finally{Yi=!1,(At!==null||Lt!==null)&&(Xc(),Vc())}}function Nr(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Ha=!1;if(vn)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Ha=!1}function Gp(e,n,t,r,o,i,a,u,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var yr=!1,Wo=null,Vo=!1,Ba=null,Jp={onError:function(e){yr=!0,Wo=e}};function Zp(e,n,t,r,o,i,a,u,s){yr=!1,Wo=null,Gp.apply(Jp,arguments)}function eh(e,n,t,r,o,i,a,u,s){if(Zp.apply(this,arguments),yr){if(yr){var c=Wo;yr=!1,Wo=null}else throw Error(_(198));Vo||(Vo=!0,Ba=c)}}function mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Kc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Xs(e){if(mt(e)!==e)throw Error(_(188))}function nh(e){var n=e.alternate;if(!n){if(n=mt(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Xs(o),e;if(i===r)return Xs(o),n;i=i.sibling}throw Error(_(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,u=o.child;u;){if(u===t){a=!0,t=o,r=i;break}if(u===r){a=!0,r=o,t=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===t){a=!0,t=i,r=o;break}if(u===r){a=!0,r=i,t=o;break}u=u.sibling}if(!a)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function Yc(e){return e=nh(e),e!==null?Gc(e):null}function Gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Gc(e);if(n!==null)return n;e=e.sibling}return null}var Jc=Ne.unstable_scheduleCallback,qs=Ne.unstable_cancelCallback,th=Ne.unstable_shouldYield,rh=Ne.unstable_requestPaint,J=Ne.unstable_now,oh=Ne.unstable_getCurrentPriorityLevel,$l=Ne.unstable_ImmediatePriority,Zc=Ne.unstable_UserBlockingPriority,Qo=Ne.unstable_NormalPriority,ih=Ne.unstable_LowPriority,ed=Ne.unstable_IdlePriority,wi=null,ln=null;function ah(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:uh,lh=Math.log,sh=Math.LN2;function uh(e){return e>>>=0,e===0?32:31-(lh(e)/sh|0)|0}var lo=64,so=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~o;u!==0?r=pr(u):(i&=a,i!==0&&(r=pr(i)))}else a=t&~o,a!==0?r=pr(a):i!==0&&(r=pr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ke(n),o=1<<t,r|=e[t],n&=~o;return r}function ch(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ke(i),u=1<<a,s=o[a];s===-1?(!(u&t)||u&r)&&(o[a]=ch(u,n)):s<=n&&(e.expiredLanes|=u),i&=~u}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nd(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function Gi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function qr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ke(n),e[n]=t}function fh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ke(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Ul(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ke(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var F=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rd,Hl,od,id,ad,Va=!1,uo=[],Mn=null,In=null,Fn=null,Or=new Map,Tr=new Map,Dn=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ks(e,n){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Or.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(n.pointerId)}}function or(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Yr(n),n!==null&&Hl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function hh(e,n,t,r,o){switch(n){case"focusin":return Mn=or(Mn,e,n,t,r,o),!0;case"dragenter":return In=or(In,e,n,t,r,o),!0;case"mouseover":return Fn=or(Fn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Or.set(i,or(Or.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Tr.set(i,or(Tr.get(i)||null,e,n,t,r,o)),!0}return!1}function ld(e){var n=tt(e.target);if(n!==null){var t=mt(n);if(t!==null){if(n=t.tag,n===13){if(n=Kc(t),n!==null){e.blockedOn=n,ad(e.priority,function(){od(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Qa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$a=r,t.target.dispatchEvent(r),$a=null}else return n=Yr(t),n!==null&&Hl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ys(e,n,t){No(e)&&t.delete(n)}function mh(){Va=!1,Mn!==null&&No(Mn)&&(Mn=null),In!==null&&No(In)&&(In=null),Fn!==null&&No(Fn)&&(Fn=null),Or.forEach(Ys),Tr.forEach(Ys)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,Va||(Va=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,mh)))}function Rr(e){function n(o){return ir(o,e)}if(0<uo.length){ir(uo[0],e);for(var t=1;t<uo.length;t++){var r=uo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&ir(Mn,e),In!==null&&ir(In,e),Fn!==null&&ir(Fn,e),Or.forEach(n),Tr.forEach(n),t=0;t<Dn.length;t++)r=Dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)ld(t),t.blockedOn===null&&Dn.shift()}var zt=Sn.ReactCurrentBatchConfig,qo=!0;function gh(e,n,t,r){var o=F,i=zt.transition;zt.transition=null;try{F=1,Bl(e,n,t,r)}finally{F=o,zt.transition=i}}function vh(e,n,t,r){var o=F,i=zt.transition;zt.transition=null;try{F=4,Bl(e,n,t,r)}finally{F=o,zt.transition=i}}function Bl(e,n,t,r){if(qo){var o=Qa(e,n,t,r);if(o===null)la(e,n,r,Ko,t),Ks(e,r);else if(hh(o,e,n,t,r))r.stopPropagation();else if(Ks(e,r),n&4&&-1<ph.indexOf(e)){for(;o!==null;){var i=Yr(o);if(i!==null&&rd(i),i=Qa(e,n,t,r),i===null&&la(e,n,r,Ko,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else la(e,n,r,null,t)}}var Ko=null;function Qa(e,n,t,r){if(Ko=null,e=Fl(r),e=tt(e),e!==null)if(n=mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Kc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ko=e,null}function sd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case $l:return 1;case Zc:return 4;case Qo:case ih:return 16;case ed:return 536870912;default:return 16}default:return 16}}var Ln=null,Wl=null,Oo=null;function ud(){if(Oo)return Oo;var e,n=Wl,t=n.length,r,o="value"in Ln?Ln.value:Ln.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function To(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function Gs(){return!1}function De(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?co:Gs,this.isPropagationStopped=Gs,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=De(Gt),Kr=K({},Gt,{view:0,detail:0}),yh=De(Kr),Ji,Zi,ar,ki=K({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Ji=e.screenX-ar.screenX,Zi=e.screenY-ar.screenY):Zi=Ji=0,ar=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Js=De(ki),xh=K({},ki,{dataTransfer:0}),bh=De(xh),wh=K({},Kr,{relatedTarget:0}),ea=De(wh),kh=K({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=De(kh),jh=K({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=De(jh),Ch=K({},Gt,{data:0}),Zs=De(Ch),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nh[e])?!!n[e]:!1}function Ql(){return Oh}var Th=K({},Kr,{key:function(e){if(e.key){var n=Eh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=De(Th),Dh=K({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=De(Dh),Ah=K({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Lh=De(Ah),zh=K({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mh=De(zh),Ih=K({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=De(Ih),$h=[9,13,27,32],Xl=vn&&"CompositionEvent"in window,xr=null;vn&&"documentMode"in document&&(xr=document.documentMode);var Uh=vn&&"TextEvent"in window&&!xr,cd=vn&&(!Xl||xr&&8<xr&&11>=xr),nu=String.fromCharCode(32),tu=!1;function dd(e,n){switch(e){case"keyup":return $h.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function Hh(e,n){switch(e){case"compositionend":return fd(n);case"keypress":return n.which!==32?null:(tu=!0,nu);case"textInput":return e=n.data,e===nu&&tu?null:e;default:return null}}function Bh(e,n){if(St)return e==="compositionend"||!Xl&&dd(e,n)?(e=ud(),Oo=Wl=Ln=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cd&&n.locale!=="ko"?null:n.data;default:return null}}var Wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wh[e.type]:n==="textarea"}function pd(e,n,t,r){Wc(r),n=Yo(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var br=null,Dr=null;function Vh(e){jd(e,0)}function Si(e){var n=Ct(e);if(Mc(n))return e}function Qh(e,n){if(e==="change")return n}var hd=!1;if(vn){var na;if(vn){var ta="oninput"in document;if(!ta){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),ta=typeof ou.oninput=="function"}na=ta}else na=!1;hd=na&&(!document.documentMode||9<document.documentMode)}function iu(){br&&(br.detachEvent("onpropertychange",md),Dr=br=null)}function md(e){if(e.propertyName==="value"&&Si(Dr)){var n=[];pd(n,Dr,e,Fl(e)),qc(Vh,n)}}function Xh(e,n,t){e==="focusin"?(iu(),br=n,Dr=t,br.attachEvent("onpropertychange",md)):e==="focusout"&&iu()}function qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Dr)}function Kh(e,n){if(e==="click")return Si(n)}function Yh(e,n){if(e==="input"||e==="change")return Si(n)}function Gh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:Gh;function Ar(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!_a.call(n,o)||!Ge(e[o],n[o]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,n){var t=au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=au(t)}}function gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vd(){for(var e=window,n=Bo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Bo(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Jh(e){var n=vd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gd(t.ownerDocument.documentElement,t)){if(r!==null&&ql(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=lu(t,i);var a=lu(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zh=vn&&"documentMode"in document&&11>=document.documentMode,jt=null,Xa=null,wr=null,qa=!1;function su(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qa||jt==null||jt!==Bo(r)||(r=jt,"selectionStart"in r&&ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Ar(wr,r)||(wr=r,r=Yo(Xa,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=jt)))}function fo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ra={},yd={};vn&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function ji(e){if(ra[e])return ra[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yd)return ra[e]=n[t];return e}var xd=ji("animationend"),bd=ji("animationiteration"),wd=ji("animationstart"),kd=ji("transitionend"),Sd=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,n){Sd.set(e,n),ht(n,[e])}for(var oa=0;oa<uu.length;oa++){var ia=uu[oa],em=ia.toLowerCase(),nm=ia[0].toUpperCase()+ia.slice(1);qn(em,"on"+nm)}qn(xd,"onAnimationEnd");qn(bd,"onAnimationIteration");qn(wd,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(kd,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function cu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,eh(r,n,void 0,e),e.currentTarget=null}function jd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&o.isPropagationStopped())break e;cu(o,u,c),i=s}else for(a=0;a<r.length;a++){if(u=r[a],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&o.isPropagationStopped())break e;cu(o,u,c),i=s}}}if(Vo)throw e=Ba,Vo=!1,Ba=null,e}function H(e,n){var t=n[Za];t===void 0&&(t=n[Za]=new Set);var r=e+"__bubble";t.has(r)||(Pd(n,e,2,!1),t.add(r))}function aa(e,n,t){var r=0;n&&(r|=4),Pd(t,e,r,n)}var po="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[po]){e[po]=!0,Rc.forEach(function(t){t!=="selectionchange"&&(tm.has(t)||aa(t,!1,e),aa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[po]||(n[po]=!0,aa("selectionchange",!1,n))}}function Pd(e,n,t,r){switch(sd(n)){case 1:var o=gh;break;case 4:o=vh;break;default:o=Bl}t=o.bind(null,n,t,e),o=void 0,!Ha||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function la(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;u!==null;){if(a=tt(u),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}u=u.parentNode}}r=r.return}qc(function(){var c=i,d=Fl(t),m=[];e:{var h=Sd.get(e);if(h!==void 0){var b=Vl,x=e;switch(e){case"keypress":if(To(t)===0)break e;case"keydown":case"keyup":b=Rh;break;case"focusin":x="focus",b=ea;break;case"focusout":x="blur",b=ea;break;case"beforeblur":case"afterblur":b=ea;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Lh;break;case xd:case bd:case wd:b=Sh;break;case kd:b=Mh;break;case"scroll":b=yh;break;case"wheel":b=Fh;break;case"copy":case"cut":case"paste":b=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=eu}var v=(n&4)!==0,k=!v&&e==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=c,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Nr(f,p),w!=null&&v.push(zr(f,w,g)))),k)break;f=f.return}0<v.length&&(h=new b(h,x,null,t,d),m.push({event:h,listeners:v}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&t!==$a&&(x=t.relatedTarget||t.fromElement)&&(tt(x)||x[yn]))break e;if((b||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,b?(x=t.relatedTarget||t.toElement,b=c,x=x?tt(x):null,x!==null&&(k=mt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=c),b!==x)){if(v=Js,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=eu,w="onPointerLeave",p="onPointerEnter",f="pointer"),k=b==null?h:Ct(b),g=x==null?h:Ct(x),h=new v(w,f+"leave",b,t,d),h.target=k,h.relatedTarget=g,w=null,tt(d)===c&&(v=new v(p,f+"enter",x,t,d),v.target=g,v.relatedTarget=k,w=v),k=w,b&&x)n:{for(v=b,p=x,f=0,g=v;g;g=bt(g))f++;for(g=0,w=p;w;w=bt(w))g++;for(;0<f-g;)v=bt(v),f--;for(;0<g-f;)p=bt(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break n;v=bt(v),p=bt(p)}v=null}else v=null;b!==null&&du(m,h,b,v,!1),x!==null&&k!==null&&du(m,k,x,v,!0)}}e:{if(h=c?Ct(c):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var P=Qh;else if(ru(h))if(hd)P=Yh;else{P=qh;var j=Xh}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Kh);if(P&&(P=P(e,c))){pd(m,P,t,d);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&La(h,"number",h.value)}switch(j=c?Ct(c):window,e){case"focusin":(ru(j)||j.contentEditable==="true")&&(jt=j,Xa=c,wr=null);break;case"focusout":wr=Xa=jt=null;break;case"mousedown":qa=!0;break;case"contextmenu":case"mouseup":case"dragend":qa=!1,su(m,t,d);break;case"selectionchange":if(Zh)break;case"keydown":case"keyup":su(m,t,d)}var C;if(Xl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else St?dd(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(cd&&t.locale!=="ko"&&(St||N!=="onCompositionStart"?N==="onCompositionEnd"&&St&&(C=ud()):(Ln=d,Wl="value"in Ln?Ln.value:Ln.textContent,St=!0)),j=Yo(c,N),0<j.length&&(N=new Zs(N,e,null,t,d),m.push({event:N,listeners:j}),C?N.data=C:(C=fd(t),C!==null&&(N.data=C)))),(C=Uh?Hh(e,t):Bh(e,t))&&(c=Yo(c,"onBeforeInput"),0<c.length&&(d=new Zs("onBeforeInput","beforeinput",null,t,d),m.push({event:d,listeners:c}),d.data=C))}jd(m,n)})}function zr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Nr(e,t),i!=null&&r.unshift(zr(e,i,o)),i=Nr(e,n),i!=null&&r.push(zr(e,i,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var u=t,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,o?(s=Nr(t,i),s!=null&&a.unshift(zr(t,s,u))):o||(s=Nr(t,i),s!=null&&a.push(zr(t,s,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var rm=/\r\n?/g,om=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(rm,`
`).replace(om,"")}function ho(e,n,t){if(n=fu(n),fu(e)!==n&&t)throw Error(_(425))}function Go(){}var Ka=null,Ya=null;function Ga(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,im=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(lm)}:Ja;function lm(e){setTimeout(function(){throw e})}function sa(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Rr(n)}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Jt=Math.random().toString(36).slice(2),on="__reactFiber$"+Jt,Mr="__reactProps$"+Jt,yn="__reactContainer$"+Jt,Za="__reactEvents$"+Jt,sm="__reactListeners$"+Jt,um="__reactHandles$"+Jt;function tt(e){var n=e[on];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yn]||t[on]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hu(e);e!==null;){if(t=e[on])return t;e=hu(e)}return n}e=t,t=e.parentNode}return null}function Yr(e){return e=e[on]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ct(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Pi(e){return e[Mr]||null}var el=[],Et=-1;function Kn(e){return{current:e}}function B(e){0>Et||(e.current=el[Et],el[Et]=null,Et--)}function $(e,n){Et++,el[Et]=e.current,e.current=n}var Qn={},pe=Kn(Qn),ke=Kn(!1),lt=Qn;function Ut(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function Jo(){B(ke),B(pe)}function mu(e,n,t){if(pe.current!==Qn)throw Error(_(168));$(pe,n),$(ke,t)}function Cd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(_(108,Xp(e)||"Unknown",o));return K({},t,r)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,lt=pe.current,$(pe,e),$(ke,ke.current),!0}function gu(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=Cd(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,B(ke),B(pe),$(pe,e)):B(ke),$(ke,t)}var dn=null,Ci=!1,ua=!1;function Ed(e){dn===null?dn=[e]:dn.push(e)}function cm(e){Ci=!0,Ed(e)}function Yn(){if(!ua&&dn!==null){ua=!0;var e=0,n=F;try{var t=dn;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}dn=null,Ci=!1}catch(o){throw dn!==null&&(dn=dn.slice(e+1)),Jc($l,Yn),o}finally{F=n,ua=!1}}return null}var _t=[],Nt=0,ei=null,ni=0,Ae=[],Le=0,st=null,fn=1,pn="";function Zn(e,n){_t[Nt++]=ni,_t[Nt++]=ei,ei=e,ni=n}function _d(e,n,t){Ae[Le++]=fn,Ae[Le++]=pn,Ae[Le++]=st,st=e;var r=fn;e=pn;var o=32-Ke(r)-1;r&=~(1<<o),t+=1;var i=32-Ke(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,fn=1<<32-Ke(n)+o|t<<o|r,pn=i+e}else fn=1<<i|t<<o|r,pn=e}function Kl(e){e.return!==null&&(Zn(e,1),_d(e,1,0))}function Yl(e){for(;e===ei;)ei=_t[--Nt],_t[Nt]=null,ni=_t[--Nt],_t[Nt]=null;for(;e===st;)st=Ae[--Le],Ae[Le]=null,pn=Ae[--Le],Ae[Le]=null,fn=Ae[--Le],Ae[Le]=null}var _e=null,Ee=null,V=!1,Qe=null;function Nd(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function vu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Ee=$n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=st!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Ee=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(V){var n=Ee;if(n){var t=n;if(!vu(e,n)){if(nl(e))throw Error(_(418));n=$n(t.nextSibling);var r=_e;n&&vu(e,n)?Nd(r,t):(e.flags=e.flags&-4097|2,V=!1,_e=e)}}else{if(nl(e))throw Error(_(418));e.flags=e.flags&-4097|2,V=!1,_e=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function mo(e){if(e!==_e)return!1;if(!V)return yu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ga(e.type,e.memoizedProps)),n&&(n=Ee)){if(nl(e))throw Od(),Error(_(418));for(;n;)Nd(e,n),n=$n(n.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=$n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=_e?$n(e.stateNode.nextSibling):null;return!0}function Od(){for(var e=Ee;e;)e=$n(e.nextSibling)}function Ht(){Ee=_e=null,V=!1}function Gl(e){Qe===null?Qe=[e]:Qe.push(e)}var dm=Sn.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=o.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function go(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xu(e){var n=e._init;return n(e._payload)}function Td(e){function n(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)n(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function i(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,f,g,w){return f===null||f.tag!==6?(f=ga(g,p.mode,w),f.return=p,f):(f=o(f,g),f.return=p,f)}function s(p,f,g,w){var P=g.type;return P===kt?d(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tn&&xu(P)===f.type)?(w=o(f,g.props),w.ref=lr(p,f,g),w.return=p,w):(w=Io(g.type,g.key,g.props,null,p.mode,w),w.ref=lr(p,f,g),w.return=p,w)}function c(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=va(g,p.mode,w),f.return=p,f):(f=o(f,g.children||[]),f.return=p,f)}function d(p,f,g,w,P){return f===null||f.tag!==7?(f=at(g,p.mode,w,P),f.return=p,f):(f=o(f,g),f.return=p,f)}function m(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ga(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oo:return g=Io(f.type,f.key,f.props,null,p.mode,g),g.ref=lr(p,null,f),g.return=p,g;case wt:return f=va(f,p.mode,g),f.return=p,f;case Tn:var w=f._init;return m(p,w(f._payload),g)}if(fr(f)||tr(f))return f=at(f,p.mode,g,null),f.return=p,f;go(p,f)}return null}function h(p,f,g,w){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:u(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return g.key===P?s(p,f,g,w):null;case wt:return g.key===P?c(p,f,g,w):null;case Tn:return P=g._init,h(p,f,P(g._payload),w)}if(fr(g)||tr(g))return P!==null?null:d(p,f,g,w,null);go(p,g)}return null}function b(p,f,g,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,u(f,p,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return p=p.get(w.key===null?g:w.key)||null,s(f,p,w,P);case wt:return p=p.get(w.key===null?g:w.key)||null,c(f,p,w,P);case Tn:var j=w._init;return b(p,f,g,j(w._payload),P)}if(fr(w)||tr(w))return p=p.get(g)||null,d(f,p,w,P,null);go(f,w)}return null}function x(p,f,g,w){for(var P=null,j=null,C=f,N=f=0,E=null;C!==null&&N<g.length;N++){C.index>N?(E=C,C=null):E=C.sibling;var O=h(p,C,g[N],w);if(O===null){C===null&&(C=E);break}e&&C&&O.alternate===null&&n(p,C),f=i(O,f,N),j===null?P=O:j.sibling=O,j=O,C=E}if(N===g.length)return t(p,C),V&&Zn(p,N),P;if(C===null){for(;N<g.length;N++)C=m(p,g[N],w),C!==null&&(f=i(C,f,N),j===null?P=C:j.sibling=C,j=C);return V&&Zn(p,N),P}for(C=r(p,C);N<g.length;N++)E=b(C,p,N,g[N],w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?N:E.key),f=i(E,f,N),j===null?P=E:j.sibling=E,j=E);return e&&C.forEach(function(U){return n(p,U)}),V&&Zn(p,N),P}function v(p,f,g,w){var P=tr(g);if(typeof P!="function")throw Error(_(150));if(g=P.call(g),g==null)throw Error(_(151));for(var j=P=null,C=f,N=f=0,E=null,O=g.next();C!==null&&!O.done;N++,O=g.next()){C.index>N?(E=C,C=null):E=C.sibling;var U=h(p,C,O.value,w);if(U===null){C===null&&(C=E);break}e&&C&&U.alternate===null&&n(p,C),f=i(U,f,N),j===null?P=U:j.sibling=U,j=U,C=E}if(O.done)return t(p,C),V&&Zn(p,N),P;if(C===null){for(;!O.done;N++,O=g.next())O=m(p,O.value,w),O!==null&&(f=i(O,f,N),j===null?P=O:j.sibling=O,j=O);return V&&Zn(p,N),P}for(C=r(p,C);!O.done;N++,O=g.next())O=b(C,p,N,O.value,w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?N:O.key),f=i(O,f,N),j===null?P=O:j.sibling=O,j=O);return e&&C.forEach(function(ye){return n(p,ye)}),V&&Zn(p,N),P}function k(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===kt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:e:{for(var P=g.key,j=f;j!==null;){if(j.key===P){if(P=g.type,P===kt){if(j.tag===7){t(p,j.sibling),f=o(j,g.props.children),f.return=p,p=f;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tn&&xu(P)===j.type){t(p,j.sibling),f=o(j,g.props),f.ref=lr(p,j,g),f.return=p,p=f;break e}t(p,j);break}else n(p,j);j=j.sibling}g.type===kt?(f=at(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=Io(g.type,g.key,g.props,null,p.mode,w),w.ref=lr(p,f,g),w.return=p,p=w)}return a(p);case wt:e:{for(j=g.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(p,f.sibling),f=o(f,g.children||[]),f.return=p,p=f;break e}else{t(p,f);break}else n(p,f);f=f.sibling}f=va(g,p.mode,w),f.return=p,p=f}return a(p);case Tn:return j=g._init,k(p,f,j(g._payload),w)}if(fr(g))return x(p,f,g,w);if(tr(g))return v(p,f,g,w);go(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(p,f.sibling),f=o(f,g),f.return=p,p=f):(t(p,f),f=ga(g,p.mode,w),f.return=p,p=f),a(p)):t(p,f)}return k}var Bt=Td(!0),Rd=Td(!1),ti=Kn(null),ri=null,Ot=null,Jl=null;function Zl(){Jl=Ot=ri=null}function es(e){var n=ti.current;B(ti),e._currentValue=n}function rl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mt(e,n){ri=e,Jl=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:n,next:null},Ot===null){if(ri===null)throw Error(_(308));Ot=e,ri.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return n}var rt=null;function ns(e){rt===null?rt=[e]:rt.push(e)}function Dd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ns(n)):(t.next=o.next,o.next=t),n.interleaved=t,xn(e,r)}function xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Rn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ad(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,xn(e,t)}return o=r.interleaved,o===null?(n.next=n,ns(r)):(n.next=o.next,o.next=n),r.interleaved=n,xn(e,t)}function Ro(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ul(e,t)}}function bu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oi(e,n,t,r){var o=e.updateQueue;Rn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==a&&(u===null?d.firstBaseUpdate=c:u.next=c,d.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;a=0,d=c=s=null,u=i;do{var h=u.lane,b=u.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,v=u;switch(h=n,b=t,v.tag){case 1:if(x=v.payload,typeof x=="function"){m=x.call(b,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(b,m,h):x,h==null)break e;m=K({},m,h);break e;case 2:Rn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[u]:h.push(u))}else b={eventTime:b,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(c=d=b,s=m):d=d.next=b,a|=h;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;h=u,u=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);ct|=a,e.lanes=a,e.memoizedState=m}}function wu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Gr={},sn=Kn(Gr),Ir=Kn(Gr),Fr=Kn(Gr);function ot(e){if(e===Gr)throw Error(_(174));return e}function rs(e,n){switch($(Fr,n),$(Ir,e),$(sn,Gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ma(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ma(n,e)}B(sn),$(sn,n)}function Wt(){B(sn),B(Ir),B(Fr)}function Ld(e){ot(Fr.current);var n=ot(sn.current),t=Ma(n,e.type);n!==t&&($(Ir,e),$(sn,t))}function os(e){Ir.current===e&&(B(sn),B(Ir))}var X=Kn(0);function ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=[];function is(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var Do=Sn.ReactCurrentDispatcher,da=Sn.ReactCurrentBatchConfig,ut=0,q=null,ee=null,re=null,ai=!1,kr=!1,$r=0,fm=0;function ce(){throw Error(_(321))}function as(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function ls(e,n,t,r,o,i){if(ut=i,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Do.current=e===null||e.memoizedState===null?gm:vm,e=t(r,o),kr){i=0;do{if(kr=!1,$r=0,25<=i)throw Error(_(301));i+=1,re=ee=null,n.updateQueue=null,Do.current=ym,e=t(r,o)}while(kr)}if(Do.current=li,n=ee!==null&&ee.next!==null,ut=0,re=ee=q=null,ai=!1,n)throw Error(_(300));return e}function ss(){var e=$r!==0;return $r=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?q.memoizedState=re=e:re=re.next=e,re}function Fe(){if(ee===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=re===null?q.memoizedState:re.next;if(n!==null)re=n,ee=e;else{if(e===null)throw Error(_(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?q.memoizedState=re=e:re=re.next=e}return re}function Ur(e,n){return typeof n=="function"?n(e):n}function fa(e){var n=Fe(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=a=null,s=null,c=i;do{var d=c.lane;if((ut&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,a=r):s=s.next=m,q.lanes|=d,ct|=d}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=u,Ge(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,ct|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pa(e){var n=Fe(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ge(i,n.memoizedState)||(we=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function zd(){}function Md(e,n){var t=q,r=Fe(),o=n(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,we=!0),r=r.queue,us($d.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Hr(9,Fd.bind(null,t,r,o,n),void 0,null),oe===null)throw Error(_(349));ut&30||Id(t,n,o)}return o}function Id(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fd(e,n,t,r){n.value=t,n.getSnapshot=r,Ud(n)&&Hd(e)}function $d(e,n,t){return t(function(){Ud(n)&&Hd(e)})}function Ud(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function Hd(e){var n=xn(e,1);n!==null&&Ye(n,e,1,-1)}function ku(e){var n=rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},n.queue=e,e=e.dispatch=mm.bind(null,q,e),[n.memoizedState,e]}function Hr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Bd(){return Fe().memoizedState}function Ao(e,n,t,r){var o=rn();q.flags|=e,o.memoizedState=Hr(1|n,t,void 0,r===void 0?null:r)}function Ei(e,n,t,r){var o=Fe();r=r===void 0?null:r;var i=void 0;if(ee!==null){var a=ee.memoizedState;if(i=a.destroy,r!==null&&as(r,a.deps)){o.memoizedState=Hr(n,t,i,r);return}}q.flags|=e,o.memoizedState=Hr(1|n,t,i,r)}function Su(e,n){return Ao(8390656,8,e,n)}function us(e,n){return Ei(2048,8,e,n)}function Wd(e,n){return Ei(4,2,e,n)}function Vd(e,n){return Ei(4,4,e,n)}function Qd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xd(e,n,t){return t=t!=null?t.concat([e]):null,Ei(4,4,Qd.bind(null,n,e),t)}function cs(){}function qd(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&as(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Kd(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&as(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Yd(e,n,t){return ut&21?(Ge(t,n)||(t=nd(),q.lanes|=t,ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function pm(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=da.transition;da.transition={};try{e(!1),n()}finally{F=t,da.transition=r}}function Gd(){return Fe().memoizedState}function hm(e,n,t){var r=Bn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Jd(e))Zd(n,t);else if(t=Dd(e,n,t,r),t!==null){var o=me();Ye(t,e,r,o),ef(t,n,r)}}function mm(e,n,t){var r=Bn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jd(e))Zd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,t);if(o.hasEagerState=!0,o.eagerState=u,Ge(u,a)){var s=n.interleaved;s===null?(o.next=o,ns(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Dd(e,n,o,r),t!==null&&(o=me(),Ye(t,e,r,o),ef(t,n,r))}}function Jd(e){var n=e.alternate;return e===q||n!==null&&n===q}function Zd(e,n){kr=ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ef(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ul(e,t)}}var li={readContext:Ie,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},gm={readContext:Ie,useCallback:function(e,n){return rn().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:Su,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4194308,4,Qd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ao(4,2,e,n)},useMemo:function(e,n){var t=rn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=rn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=hm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var n=rn();return e={current:e},n.memoizedState=e},useState:ku,useDebugValue:cs,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=ku(!1),n=e[0];return e=pm.bind(null,e[1]),rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=q,o=rn();if(V){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),oe===null)throw Error(_(349));ut&30||Id(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Su($d.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,Fd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=rn(),n=oe.identifierPrefix;if(V){var t=pn,r=fn;t=(r&~(1<<32-Ke(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$r++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=fm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vm={readContext:Ie,useCallback:qd,useContext:Ie,useEffect:us,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Vd,useMemo:Kd,useReducer:fa,useRef:Bd,useState:function(){return fa(Ur)},useDebugValue:cs,useDeferredValue:function(e){var n=Fe();return Yd(n,ee.memoizedState,e)},useTransition:function(){var e=fa(Ur)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:zd,useSyncExternalStore:Md,useId:Gd,unstable_isNewReconciler:!1},ym={readContext:Ie,useCallback:qd,useContext:Ie,useEffect:us,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Vd,useMemo:Kd,useReducer:pa,useRef:Bd,useState:function(){return pa(Ur)},useDebugValue:cs,useDeferredValue:function(e){var n=Fe();return ee===null?n.memoizedState=e:Yd(n,ee.memoizedState,e)},useTransition:function(){var e=pa(Ur)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:zd,useSyncExternalStore:Md,useId:Gd,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _i={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),o=Bn(e),i=hn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,o),n!==null&&(Ye(n,e,o,r),Ro(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),o=Bn(e),i=hn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,o),n!==null&&(Ye(n,e,o,r),Ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=Bn(e),o=hn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Un(e,o,r),n!==null&&(Ye(n,e,r,t),Ro(n,e,r))}};function ju(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Ar(t,r)||!Ar(o,i):!0}function nf(e,n,t){var r=!1,o=Qn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(o=Se(n)?lt:pe.current,r=n.contextTypes,i=(r=r!=null)?Ut(e,o):Qn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_i,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Pu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_i.enqueueReplaceState(n,n.state,null)}function il(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ts(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ie(i):(i=Se(n)?lt:pe.current,o.context=Ut(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(ol(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&_i.enqueueReplaceState(o,o.state,null),oi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vt(e,n){try{var t="",r=n;do t+=Qp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function ha(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function al(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xm=typeof WeakMap=="function"?WeakMap:Map;function tf(e,n,t){t=hn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ui||(ui=!0,gl=r),al(e,n)},t}function rf(e,n,t){t=hn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){al(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){al(e,n),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xm;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Dm.bind(null,e,n,t),n.then(e,e))}function Eu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function _u(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=hn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var bm=Sn.ReactCurrentOwner,we=!1;function he(e,n,t,r){n.child=e===null?Rd(n,null,t,r):Bt(n,e.child,t,r)}function Nu(e,n,t,r,o){t=t.render;var i=n.ref;return Mt(n,o),r=ls(e,n,t,r,i,o),t=ss(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,bn(e,n,o)):(V&&t&&Kl(n),n.flags|=1,he(e,n,r,o),n.child)}function Ou(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,of(e,n,i,r,o)):(e=Io(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ar,t(a,r)&&e.ref===n.ref)return bn(e,n,o)}return n.flags|=1,e=Wn(i,r),e.ref=n.ref,e.return=n,n.child=e}function of(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,bn(e,n,o)}return ll(e,n,t,r,o)}function af(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Rt,Ce),Ce|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(Rt,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,$(Rt,Ce),Ce|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,$(Rt,Ce),Ce|=r;return he(e,n,o,t),n.child}function lf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ll(e,n,t,r,o){var i=Se(t)?lt:pe.current;return i=Ut(n,i),Mt(n,o),t=ls(e,n,t,r,i,o),r=ss(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,bn(e,n,o)):(V&&r&&Kl(n),n.flags|=1,he(e,n,t,o),n.child)}function Tu(e,n,t,r,o){if(Se(t)){var i=!0;Zo(n)}else i=!1;if(Mt(n,o),n.stateNode===null)Lo(e,n),nf(n,t,r),il(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=Se(t)?lt:pe.current,c=Ut(n,c));var d=t.getDerivedStateFromProps,m=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Pu(n,a,r,c),Rn=!1;var h=n.memoizedState;a.state=h,oi(n,r,a,o),s=n.memoizedState,u!==r||h!==s||ke.current||Rn?(typeof d=="function"&&(ol(n,t,d,r),s=n.memoizedState),(u=Rn||ju(n,t,u,r,h,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Ad(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:We(n.type,u),a.props=c,m=n.pendingProps,h=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=Se(t)?lt:pe.current,s=Ut(n,s));var b=t.getDerivedStateFromProps;(d=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==m||h!==s)&&Pu(n,a,r,s),Rn=!1,h=n.memoizedState,a.state=h,oi(n,r,a,o);var x=n.memoizedState;u!==m||h!==x||ke.current||Rn?(typeof b=="function"&&(ol(n,t,b,r),x=n.memoizedState),(c=Rn||ju(n,t,c,r,h,x,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),a.props=r,a.state=x,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return sl(e,n,t,r,i,o)}function sl(e,n,t,r,o,i){lf(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&gu(n,t,!1),bn(e,n,i);r=n.stateNode,bm.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Bt(n,e.child,null,i),n.child=Bt(n,null,u,i)):he(e,n,u,i),n.memoizedState=r.state,o&&gu(n,t,!0),n.child}function sf(e){var n=e.stateNode;n.pendingContext?mu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&mu(e,n.context,!1),rs(e,n.containerInfo)}function Ru(e,n,t,r,o){return Ht(),Gl(o),n.flags|=256,he(e,n,t,r),n.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function uf(e,n,t){var r=n.pendingProps,o=X.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(X,o&1),e===null)return tl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ti(a,r,0,null),e=at(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=cl(t),n.memoizedState=ul,e):ds(n,a));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return wm(e,n,a,r,u,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Wn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Wn(u,i):(i=at(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?cl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=ul,r}return i=e.child,e=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ds(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vo(e,n,t,r){return r!==null&&Gl(r),Bt(n,e.child,null,t),e=ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wm(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=ha(Error(_(422))),vo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Ti({mode:"visible",children:r.children},o,0,null),i=at(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Bt(n,e.child,null,a),n.child.memoizedState=cl(a),n.memoizedState=ul,i);if(!(n.mode&1))return vo(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(_(419)),r=ha(i,r,void 0),vo(e,n,a,r)}if(u=(a&e.childLanes)!==0,we||u){if(r=oe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xn(e,o),Ye(r,e,o,-1))}return vs(),r=ha(Error(_(421))),vo(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Am.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ee=$n(o.nextSibling),_e=n,V=!0,Qe=null,e!==null&&(Ae[Le++]=fn,Ae[Le++]=pn,Ae[Le++]=st,fn=e.id,pn=e.overflow,st=n),n=ds(n,r.children),n.flags|=4096,n)}function Du(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),rl(e.return,n,t)}function ma(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function cf(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(he(e,n,r.children,t),r=X.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,t,n);else if(e.tag===19)Du(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(X,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ii(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ma(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ii(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ma(n,!0,t,null,i);break;case"together":ma(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function km(e,n,t){switch(n.tag){case 3:sf(n),Ht();break;case 5:Ld(n);break;case 1:Se(n.type)&&Zo(n);break;case 4:rs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;$(ti,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?uf(e,n,t):($(X,X.current&1),e=bn(e,n,t),e!==null?e.sibling:null);$(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return cf(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(X,X.current),r)break;return null;case 22:case 23:return n.lanes=0,af(e,n,t)}return bn(e,n,t)}var df,dl,ff,pf;df=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};dl=function(){};ff=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ot(sn.current);var i=null;switch(t){case"input":o=Da(e,o),r=Da(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=za(e,o),r=za(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Ia(t,r);var a;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&u[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};pf=function(e,n,t,r){t!==r&&(n.flags|=4)};function sr(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Sm(e,n,t){var r=n.pendingProps;switch(Yl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Se(n.type)&&Jo(),de(n),null;case 3:return r=n.stateNode,Wt(),B(ke),B(pe),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(xl(Qe),Qe=null))),dl(e,n),de(n),null;case 5:os(n);var o=ot(Fr.current);if(t=n.type,e!==null&&n.stateNode!=null)ff(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return de(n),null}if(e=ot(sn.current),mo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[on]=n,r[Mr]=i,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)H(hr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Hs(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Ws(r,i),H("invalid",r)}Ia(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&ho(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&ho(r.textContent,u,e),o=["children",""+u]):Er.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&H("scroll",r)}switch(t){case"input":io(r),Bs(r,i,!0);break;case"textarea":io(r),Vs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Go)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[on]=n,e[Mr]=r,df(e,n,!1,!1),n.stateNode=e;e:{switch(a=Fa(t,r),t){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)H(hr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Hs(e,r),o=Da(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ws(e,r),o=za(e,r),H("invalid",e);break;default:o=r}Ia(t,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Bc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&_r(e,s):typeof s=="number"&&_r(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Ll(e,i,s,a))}switch(t){case"input":io(e),Bs(e,r,!1);break;case"textarea":io(e),Vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)pf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=ot(Fr.current),ot(sn.current),mo(n)){if(r=n.stateNode,t=n.memoizedProps,r[on]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:ho(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[on]=n,n.stateNode=r}return de(n),null;case 13:if(B(X),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ee!==null&&n.mode&1&&!(n.flags&128))Od(),Ht(),n.flags|=98560,i=!1;else if(i=mo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[on]=n}else Ht(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else Qe!==null&&(xl(Qe),Qe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?ne===0&&(ne=3):vs())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Wt(),dl(e,n),e===null&&Lr(n.stateNode.containerInfo),de(n),null;case 10:return es(n.type._context),de(n),null;case 17:return Se(n.type)&&Jo(),de(n),null;case 19:if(B(X),i=n.memoizedState,i===null)return de(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)sr(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ii(e),a!==null){for(n.flags|=128,sr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(X,X.current&1|2),n.child}e=e.sibling}i.tail!==null&&J()>Qt&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ii(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!V)return de(n),null}else 2*J()-i.renderingStartTime>Qt&&t!==1073741824&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,t=X.current,$(X,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return gs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ce&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function jm(e,n){switch(Yl(n),n.tag){case 1:return Se(n.type)&&Jo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),B(ke),B(pe),is(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return os(n),null;case 13:if(B(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(X),null;case 4:return Wt(),null;case 10:return es(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var yo=!1,fe=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,R=null;function Tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function fl(e,n,t){try{t()}catch(r){Y(e,n,r)}}var Au=!1;function Cm(e,n){if(Ka=qo,e=vd(),ql(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,u=-1,s=-1,c=0,d=0,m=e,h=null;n:for(;;){for(var b;m!==t||o!==0&&m.nodeType!==3||(u=a+o),m!==i||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(b=m.firstChild)!==null;)h=m,m=b;for(;;){if(m===e)break n;if(h===t&&++c===o&&(u=a),h===i&&++d===r&&(s=a),(b=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=b}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ya={focusedElem:e,selectionRange:t},qo=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,p=n.stateNode,f=p.getSnapshotBeforeUpdate(n.elementType===n.type?v:We(n.type,v),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){Y(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return x=Au,Au=!1,x}function Sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&fl(n,t,i)}o=o.next}while(o!==r)}}function Ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function pl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hf(e){var n=e.alternate;n!==null&&(e.alternate=null,hf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[on],delete n[Mr],delete n[Za],delete n[sm],delete n[um])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}function ml(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ml(e,n,t),e=e.sibling;e!==null;)ml(e,n,t),e=e.sibling}var le=null,Ve=!1;function Nn(e,n,t){for(t=t.child;t!==null;)gf(e,n,t),t=t.sibling}function gf(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:fe||Tt(t,n);case 6:var r=le,o=Ve;le=null,Nn(e,n,t),le=r,Ve=o,le!==null&&(Ve?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ve?(e=le,t=t.stateNode,e.nodeType===8?sa(e.parentNode,t):e.nodeType===1&&sa(e,t),Rr(e)):sa(le,t.stateNode));break;case 4:r=le,o=Ve,le=t.stateNode.containerInfo,Ve=!0,Nn(e,n,t),le=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&fl(t,n,a),o=o.next}while(o!==r)}Nn(e,n,t);break;case 1:if(!fe&&(Tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Y(t,n,u)}Nn(e,n,t);break;case 21:Nn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,Nn(e,n,t),fe=r):Nn(e,n,t);break;default:Nn(e,n,t)}}function zu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Pm),n.forEach(function(r){var o=Lm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,Ve=!1;break e;case 3:le=u.stateNode.containerInfo,Ve=!0;break e;case 4:le=u.stateNode.containerInfo,Ve=!0;break e}u=u.return}if(le===null)throw Error(_(160));gf(i,a,o),le=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Y(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vf(n,e),n=n.sibling}function vf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),nn(e),r&4){try{Sr(3,e,e.return),Ni(3,e)}catch(v){Y(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Ue(n,e),nn(e),r&512&&t!==null&&Tt(t,t.return);break;case 5:if(Ue(n,e),nn(e),r&512&&t!==null&&Tt(t,t.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Ic(o,i),Fa(u,a);var c=Fa(u,i);for(a=0;a<s.length;a+=2){var d=s[a],m=s[a+1];d==="style"?Bc(o,m):d==="dangerouslySetInnerHTML"?Uc(o,m):d==="children"?_r(o,m):Ll(o,d,m,c)}switch(u){case"input":Aa(o,i);break;case"textarea":Fc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Dt(o,!!i.multiple,b,!1):h!==!!i.multiple&&(i.defaultValue!=null?Dt(o,!!i.multiple,i.defaultValue,!0):Dt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Mr]=i}catch(v){Y(e,e.return,v)}}break;case 6:if(Ue(n,e),nn(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Y(e,e.return,v)}}break;case 3:if(Ue(n,e),nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Ue(n,e),nn(e);break;case 13:Ue(n,e),nn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hs=J())),r&4&&zu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(c=fe)||d,Ue(n,e),fe=c):Ue(n,e),nn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(m=R=d;R!==null;){switch(h=R,b=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Tt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(v){Y(r,t,v)}}break;case 5:Tt(h,h.return);break;case 22:if(h.memoizedState!==null){Iu(m);continue}}b!==null?(b.return=h,R=b):Iu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Hc("display",a))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(n,e),nn(e),r&4&&zu(e);break;case 21:break;default:Ue(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mf(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_r(o,""),r.flags&=-33);var i=Lu(e);ml(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,u=Lu(e);hl(e,u,a);break;default:throw Error(_(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Em(e,n,t){R=e,yf(e)}function yf(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||yo;if(!a){var u=o.alternate,s=u!==null&&u.memoizedState!==null||fe;u=yo;var c=fe;if(yo=a,(fe=s)&&!c)for(R=o;R!==null;)a=R,s=a.child,a.tag===22&&a.memoizedState!==null?Fu(o):s!==null?(s.return=a,R=s):Fu(o);for(;i!==null;)R=i,yf(i),i=i.sibling;R=o,yo=u,fe=c}Mu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Mu(e)}}function Mu(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&wu(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wu(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}fe||n.flags&512&&pl(n)}catch(h){Y(n,n.return,h)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function Iu(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function Fu(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ni(4,n)}catch(s){Y(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Y(n,o,s)}}var i=n.return;try{pl(n)}catch(s){Y(n,i,s)}break;case 5:var a=n.return;try{pl(n)}catch(s){Y(n,a,s)}}}catch(s){Y(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var _m=Math.ceil,si=Sn.ReactCurrentDispatcher,fs=Sn.ReactCurrentOwner,Me=Sn.ReactCurrentBatchConfig,I=0,oe=null,Z=null,se=0,Ce=0,Rt=Kn(0),ne=0,Br=null,ct=0,Oi=0,ps=0,jr=null,be=null,hs=0,Qt=1/0,cn=null,ui=!1,gl=null,Hn=null,xo=!1,zn=null,ci=0,Pr=0,vl=null,zo=-1,Mo=0;function me(){return I&6?J():zo!==-1?zo:zo=J()}function Bn(e){return e.mode&1?I&2&&se!==0?se&-se:dm.transition!==null?(Mo===0&&(Mo=nd()),Mo):(e=F,e!==0||(e=window.event,e=e===void 0?16:sd(e.type)),e):1}function Ye(e,n,t,r){if(50<Pr)throw Pr=0,vl=null,Error(_(185));qr(e,t,r),(!(I&2)||e!==oe)&&(e===oe&&(!(I&2)&&(Oi|=t),ne===4&&An(e,se)),je(e,r),t===1&&I===0&&!(n.mode&1)&&(Qt=J()+500,Ci&&Yn()))}function je(e,n){var t=e.callbackNode;dh(e,n);var r=Xo(e,e===oe?se:0);if(r===0)t!==null&&qs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qs(t),n===1)e.tag===0?cm($u.bind(null,e)):Ed($u.bind(null,e)),am(function(){!(I&6)&&Yn()}),t=null;else{switch(td(r)){case 1:t=$l;break;case 4:t=Zc;break;case 16:t=Qo;break;case 536870912:t=ed;break;default:t=Qo}t=Cf(t,xf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xf(e,n){if(zo=-1,Mo=0,I&6)throw Error(_(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Xo(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=di(e,r);else{n=r;var o=I;I|=2;var i=wf();(oe!==e||se!==n)&&(cn=null,Qt=J()+500,it(e,n));do try{Tm();break}catch(u){bf(e,u)}while(1);Zl(),si.current=i,I=o,Z!==null?n=0:(oe=null,se=0,n=ne)}if(n!==0){if(n===2&&(o=Wa(e),o!==0&&(r=o,n=yl(e,o))),n===1)throw t=Br,it(e,0),An(e,r),je(e,J()),t;if(n===6)An(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nm(o)&&(n=di(e,r),n===2&&(i=Wa(e),i!==0&&(r=i,n=yl(e,i))),n===1))throw t=Br,it(e,0),An(e,r),je(e,J()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:et(e,be,cn);break;case 3:if(An(e,r),(r&130023424)===r&&(n=hs+500-J(),10<n)){if(Xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ja(et.bind(null,e,be,cn),n);break}et(e,be,cn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Ke(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_m(r/1960))-r,10<r){e.timeoutHandle=Ja(et.bind(null,e,be,cn),r);break}et(e,be,cn);break;case 5:et(e,be,cn);break;default:throw Error(_(329))}}}return je(e,J()),e.callbackNode===t?xf.bind(null,e):null}function yl(e,n){var t=jr;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=di(e,n),e!==2&&(n=be,be=t,n!==null&&xl(n)),e}function xl(e){be===null?be=e:be.push.apply(be,e)}function Nm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~ps,n&=~Oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ke(n),r=1<<t;e[t]=-1,n&=~r}}function $u(e){if(I&6)throw Error(_(327));It();var n=Xo(e,0);if(!(n&1))return je(e,J()),null;var t=di(e,n);if(e.tag!==0&&t===2){var r=Wa(e);r!==0&&(n=r,t=yl(e,r))}if(t===1)throw t=Br,it(e,0),An(e,n),je(e,J()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,be,cn),je(e,J()),null}function ms(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(Qt=J()+500,Ci&&Yn())}}function dt(e){zn!==null&&zn.tag===0&&!(I&6)&&It();var n=I;I|=1;var t=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=t,I=n,!(I&6)&&Yn()}}function gs(){Ce=Rt.current,B(Rt)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,im(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Wt(),B(ke),B(pe),is();break;case 5:os(r);break;case 4:Wt();break;case 13:B(X);break;case 19:B(X);break;case 10:es(r.type._context);break;case 22:case 23:gs()}t=t.return}if(oe=e,Z=e=Wn(e.current,null),se=Ce=n,ne=0,Br=null,ps=Oi=ct=0,be=jr=null,rt!==null){for(n=0;n<rt.length;n++)if(t=rt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}rt=null}return e}function bf(e,n){do{var t=Z;try{if(Zl(),Do.current=li,ai){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ai=!1}if(ut=0,re=ee=q=null,kr=!1,$r=0,fs.current=null,t===null||t.return===null){ne=1,Br=n,Z=null;break}e:{var i=e,a=t.return,u=t,s=n;if(n=se,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=u,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=Eu(a);if(b!==null){b.flags&=-257,_u(b,a,u,i,n),b.mode&1&&Cu(i,c,n),n=b,s=c;var x=n.updateQueue;if(x===null){var v=new Set;v.add(s),n.updateQueue=v}else x.add(s);break e}else{if(!(n&1)){Cu(i,c,n),vs();break e}s=Error(_(426))}}else if(V&&u.mode&1){var k=Eu(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),_u(k,a,u,i,n),Gl(Vt(s,u));break e}}i=s=Vt(s,u),ne!==4&&(ne=2),jr===null?jr=[i]:jr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=tf(i,s,n);bu(i,p);break e;case 1:u=s;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=rf(i,u,n);bu(i,w);break e}}i=i.return}while(i!==null)}Sf(t)}catch(P){n=P,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(1)}function wf(){var e=si.current;return si.current=li,e===null?li:e}function vs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(ct&268435455)&&!(Oi&268435455)||An(oe,se)}function di(e,n){var t=I;I|=2;var r=wf();(oe!==e||se!==n)&&(cn=null,it(e,n));do try{Om();break}catch(o){bf(e,o)}while(1);if(Zl(),I=t,si.current=r,Z!==null)throw Error(_(261));return oe=null,se=0,ne}function Om(){for(;Z!==null;)kf(Z)}function Tm(){for(;Z!==null&&!th();)kf(Z)}function kf(e){var n=Pf(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?Sf(e):Z=n,fs.current=null}function Sf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jm(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(t=Sm(t,n,Ce),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ne===0&&(ne=5)}function et(e,n,t){var r=F,o=Me.transition;try{Me.transition=null,F=1,Rm(e,n,t,r)}finally{Me.transition=o,F=r}return null}function Rm(e,n,t,r){do It();while(zn!==null);if(I&6)throw Error(_(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(fh(e,i),e===oe&&(Z=oe=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||xo||(xo=!0,Cf(Qo,function(){return It(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var a=F;F=1;var u=I;I|=4,fs.current=null,Cm(e,t),vf(t,e),Jh(Ya),qo=!!Ka,Ya=Ka=null,e.current=t,Em(t),rh(),I=u,F=a,Me.transition=i}else e.current=t;if(xo&&(xo=!1,zn=e,ci=o),i=e.pendingLanes,i===0&&(Hn=null),ah(t.stateNode),je(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ui)throw ui=!1,e=gl,gl=null,e;return ci&1&&e.tag!==0&&It(),i=e.pendingLanes,i&1?e===vl?Pr++:(Pr=0,vl=e):Pr=0,Yn(),null}function It(){if(zn!==null){var e=td(ci),n=Me.transition,t=F;try{if(Me.transition=null,F=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,ci=0,I&6)throw Error(_(331));var o=I;for(I|=4,R=e.current;R!==null;){var i=R,a=i.child;if(R.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Sr(8,d,i)}var m=d.child;if(m!==null)m.return=d,R=m;else for(;R!==null;){d=R;var h=d.sibling,b=d.return;if(hf(d),d===c){R=null;break}if(h!==null){h.return=b,R=h;break}R=b}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}R=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,R=p;break e}R=i.return}}var f=e.current;for(R=f;R!==null;){a=R;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,R=g;else e:for(a=f;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ni(9,u)}}catch(P){Y(u,u.return,P)}if(u===a){R=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,R=w;break e}R=u.return}}if(I=o,Yn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{F=t,Me.transition=n}}return!1}function Uu(e,n,t){n=Vt(t,n),n=tf(e,n,1),e=Un(e,n,1),n=me(),e!==null&&(qr(e,1,n),je(e,n))}function Y(e,n,t){if(e.tag===3)Uu(e,e,t);else for(;n!==null;){if(n.tag===3){Uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=Vt(t,e),e=rf(n,e,1),n=Un(n,e,1),e=me(),n!==null&&(qr(n,1,e),je(n,e));break}}n=n.return}}function Dm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(se&t)===t&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-hs?it(e,0):ps|=t),je(e,n)}function jf(e,n){n===0&&(e.mode&1?(n=so,so<<=1,!(so&130023424)&&(so=4194304)):n=1);var t=me();e=xn(e,n),e!==null&&(qr(e,n,t),je(e,t))}function Am(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jf(e,t)}function Lm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),jf(e,t)}var Pf;Pf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,km(e,n,t);we=!!(e.flags&131072)}else we=!1,V&&n.flags&1048576&&_d(n,ni,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Lo(e,n),e=n.pendingProps;var o=Ut(n,pe.current);Mt(n,t),o=ls(null,n,r,e,o,t);var i=ss();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(i=!0,Zo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ts(n),o.updater=_i,n.stateNode=o,o._reactInternals=n,il(n,r,e,t),n=sl(null,n,r,!0,i,t)):(n.tag=0,V&&i&&Kl(n),he(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Lo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Mm(r),e=We(r,e),o){case 0:n=ll(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Nu(null,n,r,e,t);break e;case 14:n=Ou(null,n,r,We(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),ll(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),Tu(e,n,r,o,t);case 3:e:{if(sf(n),e===null)throw Error(_(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Ad(e,n),oi(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Vt(Error(_(423)),n),n=Ru(e,n,r,t,o);break e}else if(r!==o){o=Vt(Error(_(424)),n),n=Ru(e,n,r,t,o);break e}else for(Ee=$n(n.stateNode.containerInfo.firstChild),_e=n,V=!0,Qe=null,t=Rd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),r===o){n=bn(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return Ld(n),e===null&&tl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ga(r,o)?a=null:i!==null&&Ga(r,i)&&(n.flags|=32),lf(e,n),he(e,n,a,t),n.child;case 6:return e===null&&tl(n),null;case 13:return uf(e,n,t);case 4:return rs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Bt(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),Nu(e,n,r,o,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,$(ti,r._currentValue),r._currentValue=a,i!==null)if(Ge(i.value,a)){if(i.children===o.children&&!ke.current){n=bn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=hn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),rl(i.return,t,n),u.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),rl(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}he(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Mt(n,t),o=Ie(o),r=r(o),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,o=We(r,n.pendingProps),o=We(r.type,o),Ou(e,n,r,o,t);case 15:return of(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),Lo(e,n),n.tag=1,Se(r)?(e=!0,Zo(n)):e=!1,Mt(n,t),nf(n,r,o),il(n,r,o,t),sl(null,n,r,!0,e,t);case 19:return cf(e,n,t);case 22:return af(e,n,t)}throw Error(_(156,n.tag))};function Cf(e,n){return Jc(e,n)}function zm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new zm(e,n,t,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mm(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ml)return 11;if(e===Il)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Io(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")ys(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kt:return at(t.children,o,i,n);case zl:a=8,o|=8;break;case Na:return e=ze(12,t,n,o|2),e.elementType=Na,e.lanes=i,e;case Oa:return e=ze(13,t,n,o),e.elementType=Oa,e.lanes=i,e;case Ta:return e=ze(19,t,n,o),e.elementType=Ta,e.lanes=i,e;case Lc:return Ti(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:a=10;break e;case Ac:a=9;break e;case Ml:a=11;break e;case Il:a=14;break e;case Tn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=ze(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function at(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=ze(22,e,r,n),e.elementType=Lc,e.lanes=t,e.stateNode={isHidden:!1},e}function ga(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function va(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Im(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xs(e,n,t,r,o,i,a,u,s){return e=new Im(e,n,t,u,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(i),e}function Fm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ef(e){if(!e)return Qn;e=e._reactInternals;e:{if(mt(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(Se(t))return Cd(e,t,n)}return n}function _f(e,n,t,r,o,i,a,u,s){return e=xs(t,r,!0,e,o,i,a,u,s),e.context=Ef(null),t=e.current,r=me(),o=Bn(t),i=hn(r,o),i.callback=n??null,Un(t,i,o),e.current.lanes=o,qr(e,o,r),je(e,r),e}function Ri(e,n,t,r){var o=n.current,i=me(),a=Bn(o);return t=Ef(t),n.context===null?n.context=t:n.pendingContext=t,n=hn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(o,n,a),e!==null&&(Ye(e,o,a,i),Ro(e,o,a)),a}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bs(e,n){Hu(e,n),(e=e.alternate)&&Hu(e,n)}function $m(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Di.prototype.render=ws.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));Ri(e,n,null,null)};Di.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dt(function(){Ri(null,e,null,null)}),n[yn]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var n=id();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&ld(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Um(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=fi(a);i.call(c)}}var a=_f(n,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=a,e[yn]=a.current,Lr(e.nodeType===8?e.parentNode:e),dt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=fi(s);u.call(c)}}var s=xs(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=s,e[yn]=s.current,Lr(e.nodeType===8?e.parentNode:e),dt(function(){Ri(n,s,t,r)}),s}function Li(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var u=o;o=function(){var s=fi(a);u.call(s)}}Ri(n,a,e,o)}else a=Um(t,n,e,o,r);return fi(a)}rd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=pr(n.pendingLanes);t!==0&&(Ul(n,t|1),je(n,J()),!(I&6)&&(Qt=J()+500,Yn()))}break;case 13:dt(function(){var r=xn(e,1);if(r!==null){var o=me();Ye(r,e,1,o)}}),bs(e,1)}};Hl=function(e){if(e.tag===13){var n=xn(e,134217728);if(n!==null){var t=me();Ye(n,e,134217728,t)}bs(e,134217728)}};od=function(e){if(e.tag===13){var n=Bn(e),t=xn(e,n);if(t!==null){var r=me();Ye(t,e,n,r)}bs(e,n)}};id=function(){return F};ad=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Ua=function(e,n,t){switch(n){case"input":if(Aa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Pi(r);if(!o)throw Error(_(90));Mc(r),Aa(r,o)}}}break;case"textarea":Fc(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};Qc=ms;Xc=dt;var Hm={usingClientEntryPoint:!1,Events:[Yr,Ct,Pi,Wc,Vc,ms]},ur={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{wi=bo.inject(Bm),ln=bo}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(n))throw Error(_(200));return Fm(e,n,null,t)};Re.createRoot=function(e,n){if(!ks(e))throw Error(_(299));var t=!1,r="",o=Nf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=xs(e,1,!1,null,null,t,!1,r,o),e[yn]=n.current,Lr(e.nodeType===8?e.parentNode:e),new ws(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Yc(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return dt(e)};Re.hydrate=function(e,n,t){if(!Ai(n))throw Error(_(200));return Li(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!ks(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Nf;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=_f(n,null,e,1,t??null,o,!1,i,a),e[yn]=n.current,Lr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Di(n)};Re.render=function(e,n,t){if(!Ai(n))throw Error(_(200));return Li(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(_(40));return e._reactRootContainer?(dt(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};Re.unstable_batchedUpdates=ms;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ai(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Li(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(e){console.error(e)}}Of(),Nc.exports=Re;var Wm=Nc.exports,Wu=Wm;Ea.createRoot=Wu.createRoot,Ea.hydrateRoot=Wu.hydrateRoot;var Tf={exports:{}},Rf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=y;function Vm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qm=typeof Object.is=="function"?Object.is:Vm,Xm=Jr.useSyncExternalStore,qm=Jr.useRef,Km=Jr.useEffect,Ym=Jr.useMemo,Gm=Jr.useDebugValue;Rf.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var i=qm(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Ym(function(){function s(b){if(!c){if(c=!0,d=b,b=r(b),o!==void 0&&a.hasValue){var x=a.value;if(o(x,b))return m=x}return m=b}if(x=m,Qm(d,b))return x;var v=r(b);return o!==void 0&&o(x,v)?(d=b,x):(d=b,m=v)}var c=!1,d,m,h=t===void 0?null:t;return[function(){return s(n())},h===null?void 0:function(){return s(h())}]},[n,t,r,o]);var u=Xm(e,i[0],i[1]);return Km(function(){a.hasValue=!0,a.value=u},[u]),Gm(u),u};Tf.exports=Rf;var Jm=Tf.exports;function Zm(e){e()}function eg(){let e=null,n=null;return{clear(){e=null,n=null},notify(){Zm(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const o=n={callback:t,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Vu={notify(){},get:()=>[]};function ng(e,n){let t,r=Vu,o=0,i=!1;function a(v){d();const k=r.subscribe(v);let p=!1;return()=>{p||(p=!0,k(),m())}}function u(){r.notify()}function s(){x.onStateChange&&x.onStateChange()}function c(){return i}function d(){o++,t||(t=n?n.addNestedSub(s):e.subscribe(s),r=eg())}function m(){o--,t&&o===0&&(t(),t=void 0,r.clear(),r=Vu)}function h(){i||(i=!0,d())}function b(){i&&(i=!1,m())}const x={addNestedSub:a,notifyNestedSubs:u,handleChangeWrapper:s,isSubscribed:c,trySubscribe:h,tryUnsubscribe:b,getListeners:()=>r};return x}var tg=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rg=tg(),og=()=>typeof navigator<"u"&&navigator.product==="ReactNative",ig=og(),ag=()=>rg||ig?y.useLayoutEffect:y.useEffect,lg=ag(),ya=Symbol.for("react-redux-context"),xa=typeof globalThis<"u"?globalThis:{};function sg(){if(!y.createContext)return{};const e=xa[ya]??(xa[ya]=new Map);let n=e.get(y.createContext);return n||(n=y.createContext(null),e.set(y.createContext,n)),n}var Xn=sg();function ug(e){const{children:n,context:t,serverState:r,store:o}=e,i=y.useMemo(()=>{const s=ng(o);return{store:o,subscription:s,getServerState:r?()=>r:void 0}},[o,r]),a=y.useMemo(()=>o.getState(),[o]);lg(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==o.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,a]);const u=t||Xn;return y.createElement(u.Provider,{value:i},n)}var cg=ug;function Ss(e=Xn){return function(){return y.useContext(e)}}var Df=Ss();function Af(e=Xn){const n=e===Xn?Df:Ss(e),t=()=>{const{store:r}=n();return r};return Object.assign(t,{withTypes:()=>t}),t}var dg=Af();function fg(e=Xn){const n=e===Xn?dg:Af(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var jn=fg(),pg=(e,n)=>e===n;function hg(e=Xn){const n=e===Xn?Df:Ss(e),t=(r,o={})=>{const{equalityFn:i=pg}=typeof o=="function"?{equalityFn:o}:o,a=n(),{store:u,subscription:s,getServerState:c}=a;y.useRef(!0);const d=y.useCallback({[r.name](h){return r(h)}}[r.name],[r]),m=Jm.useSyncExternalStoreWithSelector(s.addNestedSub,u.getState,c||u.getState,d,i);return y.useDebugValue(m),m};return Object.assign(t,{withTypes:()=>t}),t}var ie=hg();const mg="modulepreload",gg=function(e){return"/"+e},Qu={},vg=function(n,t,r){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=gg(i),i in Qu)return;Qu[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const m=o[d];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":mg,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};var js={};Object.defineProperty(js,"__esModule",{value:!0});js.parse=jg;js.serialize=Pg;const yg=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,xg=/^[\u0021-\u003A\u003C-\u007E]*$/,bg=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,wg=/^[\u0020-\u003A\u003D-\u007E]*$/,kg=Object.prototype.toString,Sg=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function jg(e,n){const t=new Sg,r=e.length;if(r<2)return t;const o=(n==null?void 0:n.decode)||Cg;let i=0;do{const a=e.indexOf("=",i);if(a===-1)break;const u=e.indexOf(";",i),s=u===-1?r:u;if(a>s){i=e.lastIndexOf(";",a-1)+1;continue}const c=Xu(e,i,a),d=qu(e,a,c),m=e.slice(c,d);if(t[m]===void 0){let h=Xu(e,a+1,s),b=qu(e,s,h);const x=o(e.slice(h,b));t[m]=x}i=s+1}while(i<r);return t}function Xu(e,n,t){do{const r=e.charCodeAt(n);if(r!==32&&r!==9)return n}while(++n<t);return t}function qu(e,n,t){for(;n>t;){const r=e.charCodeAt(--n);if(r!==32&&r!==9)return n+1}return t}function Pg(e,n,t){const r=(t==null?void 0:t.encode)||encodeURIComponent;if(!yg.test(e))throw new TypeError(`argument name is invalid: ${e}`);const o=r(n);if(!xg.test(o))throw new TypeError(`argument val is invalid: ${n}`);let i=e+"="+o;if(!t)return i;if(t.maxAge!==void 0){if(!Number.isInteger(t.maxAge))throw new TypeError(`option maxAge is invalid: ${t.maxAge}`);i+="; Max-Age="+t.maxAge}if(t.domain){if(!bg.test(t.domain))throw new TypeError(`option domain is invalid: ${t.domain}`);i+="; Domain="+t.domain}if(t.path){if(!wg.test(t.path))throw new TypeError(`option path is invalid: ${t.path}`);i+="; Path="+t.path}if(t.expires){if(!Eg(t.expires)||!Number.isFinite(t.expires.valueOf()))throw new TypeError(`option expires is invalid: ${t.expires}`);i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.partitioned&&(i+="; Partitioned"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${t.priority}`)}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${t.sameSite}`)}return i}function Cg(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function Eg(e){return kg.call(e)==="[object Date]"}var Ku="popstate";function _g(e={}){function n(r,o){let{pathname:i,search:a,hash:u}=r.location;return bl("",{pathname:i,search:a,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Wr(o)}return Og(n,t,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Je(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ng(){return Math.random().toString(36).substring(2,10)}function Yu(e,n){return{usr:e.state,key:e.key,idx:n}}function bl(e,n,t=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?Zt(n):n,state:t,key:n&&n.key||r||Ng()}}function Wr({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function Zt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substring(r),e=e.substring(0,r)),e&&(n.pathname=e)}return n}function Og(e,n,t,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,u="POP",s=null,c=d();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function d(){return(a.state||{idx:null}).idx}function m(){u="POP";let k=d(),p=k==null?null:k-c;c=k,s&&s({action:u,location:v.location,delta:p})}function h(k,p){u="PUSH";let f=bl(v.location,k,p);t&&t(f,k),c=d()+1;let g=Yu(f,c),w=v.createHref(f);try{a.pushState(g,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(w)}i&&s&&s({action:u,location:v.location,delta:1})}function b(k,p){u="REPLACE";let f=bl(v.location,k,p);t&&t(f,k),c=d();let g=Yu(f,c),w=v.createHref(f);a.replaceState(g,"",w),i&&s&&s({action:u,location:v.location,delta:0})}function x(k){return Tg(k)}let v={get action(){return u},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ku,m),s=k,()=>{o.removeEventListener(Ku,m),s=null}},createHref(k){return n(o,k)},createURL:x,encodeLocation(k){let p=x(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:b,go(k){return a.go(k)}};return v}function Tg(e,n=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Q(t,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Wr(e);return r=r.replace(/ $/,"%20"),!n&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Lf(e,n,t="/"){return Rg(e,n,t,!1)}function Rg(e,n,t,r){let o=typeof n=="string"?Zt(n):n,i=wn(o.pathname||"/",t);if(i==null)return null;let a=zf(e);Dg(a);let u=null;for(let s=0;u==null&&s<a.length;++s){let c=Wg(i);u=Hg(a[s],c,r)}return u}function zf(e,n=[],t=[],r=""){let o=(i,a,u)=>{let s={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let c=mn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(Q(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),zf(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:$g(c,i.index),routesMeta:d})};return e.forEach((i,a)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))o(i,a);else for(let s of Mf(i.path))o(i,a,s)}),n}function Mf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Mf(r.join("/")),u=[];return u.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&u.push(...a),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function Dg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Ug(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Ag=/^:[\w-]+$/,Lg=3,zg=2,Mg=1,Ig=10,Fg=-2,Gu=e=>e==="*";function $g(e,n){let t=e.split("/"),r=t.length;return t.some(Gu)&&(r+=Fg),n&&(r+=zg),t.filter(o=>!Gu(o)).reduce((o,i)=>o+(Ag.test(i)?Lg:i===""?Mg:Ig),r)}function Ug(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Hg(e,n,t=!1){let{routesMeta:r}=e,o={},i="/",a=[];for(let u=0;u<r.length;++u){let s=r[u],c=u===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",m=pi({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),h=s.route;if(!m&&c&&t&&!r[r.length-1].route.index&&(m=pi({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!m)return null;Object.assign(o,m.params),a.push({params:o,pathname:mn([i,m.pathname]),pathnameBase:qg(mn([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=mn([i,m.pathnameBase]))}return a}function pi(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Bg(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:m},h)=>{if(d==="*"){let x=u[h]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const b=u[h];return m&&!b?c[d]=void 0:c[d]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Bg(e,n=!1,t=!0){Je(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,s)=>(r.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Wg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Je(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function wn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Vg(e,n="/"){let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Zt(e):e;return{pathname:t?t.startsWith("/")?t:Qg(t,n):n,search:Kg(r),hash:Yg(o)}}function Qg(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ba(e,n,t,r){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Ps(e){let n=Xg(e);return n.map((t,r)=>r===n.length-1?t.pathname:t.pathnameBase)}function Cs(e,n,t,r=!1){let o;typeof e=="string"?o=Zt(e):(o={...e},Q(!o.pathname||!o.pathname.includes("?"),ba("?","pathname","search",o)),Q(!o.pathname||!o.pathname.includes("#"),ba("#","pathname","hash",o)),Q(!o.search||!o.search.includes("#"),ba("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,u;if(a==null)u=t;else{let m=n.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}u=m>=0?n[m]:"/"}let s=Vg(o,u),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}var mn=e=>e.join("/").replace(/\/\/+/g,"/"),qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var If=["POST","PUT","PATCH","DELETE"];new Set(If);var Jg=["GET",...If];new Set(Jg);var er=y.createContext(null);er.displayName="DataRouter";var zi=y.createContext(null);zi.displayName="DataRouterState";var Ff=y.createContext({isTransitioning:!1});Ff.displayName="ViewTransition";var Zg=y.createContext(new Map);Zg.displayName="Fetchers";var e0=y.createContext(null);e0.displayName="Await";var Ze=y.createContext(null);Ze.displayName="Navigation";var Zr=y.createContext(null);Zr.displayName="Location";var en=y.createContext({outlet:null,matches:[],isDataRoute:!1});en.displayName="Route";var Es=y.createContext(null);Es.displayName="RouteError";function n0(e,{relative:n}={}){Q(nr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=y.useContext(Ze),{hash:o,pathname:i,search:a}=eo(e,{relative:n}),u=i;return t!=="/"&&(u=i==="/"?t:mn([t,i])),r.createHref({pathname:u,search:a,hash:o})}function nr(){return y.useContext(Zr)!=null}function Pn(){return Q(nr(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Zr).location}var $f="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uf(e){y.useContext(Ze).static||y.useLayoutEffect(e)}function $e(){let{isDataRoute:e}=y.useContext(en);return e?h0():t0()}function t0(){Q(nr(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(er),{basename:n,navigator:t}=y.useContext(Ze),{matches:r}=y.useContext(en),{pathname:o}=Pn(),i=JSON.stringify(Ps(r)),a=y.useRef(!1);return Uf(()=>{a.current=!0}),y.useCallback((s,c={})=>{if(Je(a.current,$f),!a.current)return;if(typeof s=="number"){t.go(s);return}let d=Cs(s,JSON.parse(i),o,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:mn([n,d.pathname])),(c.replace?t.replace:t.push)(d,c.state,c)},[n,t,i,o,e])}y.createContext(null);function Hf(){let{matches:e}=y.useContext(en),n=e[e.length-1];return n?n.params:{}}function eo(e,{relative:n}={}){let{matches:t}=y.useContext(en),{pathname:r}=Pn(),o=JSON.stringify(Ps(t));return y.useMemo(()=>Cs(e,JSON.parse(o),r,n==="path"),[e,o,r,n])}function r0(e,n){return Bf(e,n)}function Bf(e,n,t,r){var p;Q(nr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=y.useContext(Ze),{matches:i}=y.useContext(en),a=i[i.length-1],u=a?a.params:{},s=a?a.pathname:"/",c=a?a.pathnameBase:"/",d=a&&a.route;{let f=d&&d.path||"";Wf(s,!d||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let m=Pn(),h;if(n){let f=typeof n=="string"?Zt(n):n;Q(c==="/"||((p=f.pathname)==null?void 0:p.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${f.pathname}" was given in the \`location\` prop.`),h=f}else h=m;let b=h.pathname||"/",x=b;if(c!=="/"){let f=c.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(f.length).join("/")}let v=Lf(e,{pathname:x});Je(d||v!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Je(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=s0(v&&v.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:mn([c,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:mn([c,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,t,r);return n&&k?y.createElement(Zr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},k):k}function o0(){let e=p0(),n=Gg(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:i},"ErrorBoundary")," or"," ",y.createElement("code",{style:i},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:o},t):null,a)}var i0=y.createElement(o0,null),a0=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?y.createElement(en.Provider,{value:this.props.routeContext},y.createElement(Es.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function l0({routeContext:e,match:n,children:t}){let r=y.useContext(er);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(en.Provider,{value:e},t)}function s0(e,n=[],t=null,r=null){if(e==null){if(!t)return null;if(t.errors)e=t.matches;else if(n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,i=t==null?void 0:t.errors;if(i!=null){let s=o.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);Q(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,s+1))}let a=!1,u=-1;if(t)for(let s=0;s<o.length;s++){let c=o[s];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=s),c.route.id){let{loaderData:d,errors:m}=t,h=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!m||m[c.route.id]===void 0);if(c.route.lazy||h){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((s,c,d)=>{let m,h=!1,b=null,x=null;t&&(m=i&&c.route.id?i[c.route.id]:void 0,b=c.route.errorElement||i0,a&&(u<0&&d===0?(Wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):u===d&&(h=!0,x=c.route.hydrateFallbackElement||null)));let v=n.concat(o.slice(0,d+1)),k=()=>{let p;return m?p=b:h?p=x:c.route.Component?p=y.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=s,y.createElement(l0,{match:c,routeContext:{outlet:s,matches:v,isDataRoute:t!=null},children:p})};return t&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?y.createElement(a0,{location:t.location,revalidation:t.revalidation,component:b,error:m,children:k(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):k()},null)}function _s(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u0(e){let n=y.useContext(er);return Q(n,_s(e)),n}function c0(e){let n=y.useContext(zi);return Q(n,_s(e)),n}function d0(e){let n=y.useContext(en);return Q(n,_s(e)),n}function Ns(e){let n=d0(e),t=n.matches[n.matches.length-1];return Q(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function f0(){return Ns("useRouteId")}function p0(){var r;let e=y.useContext(Es),n=c0("useRouteError"),t=Ns("useRouteError");return e!==void 0?e:(r=n.errors)==null?void 0:r[t]}function h0(){let{router:e}=u0("useNavigate"),n=Ns("useNavigate"),t=y.useRef(!1);return Uf(()=>{t.current=!0}),y.useCallback(async(o,i={})=>{Je(t.current,$f),t.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:n,...i}))},[e,n])}var Ju={};function Wf(e,n,t){!n&&!Ju[e]&&(Ju[e]=!0,Je(!1,t))}y.memo(m0);function m0({routes:e,future:n,state:t}){return Bf(e,void 0,t,n)}function Xt({to:e,replace:n,state:t,relative:r}){Q(nr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=y.useContext(Ze);Je(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=y.useContext(en),{pathname:a}=Pn(),u=$e(),s=Cs(e,Ps(i),a,r==="path"),c=JSON.stringify(s);return y.useEffect(()=>{u(JSON.parse(c),{replace:n,state:t,relative:r})},[u,c,r,n,t]),null}function He(e){Q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function g0({basename:e="/",children:n=null,location:t,navigationType:r="POP",navigator:o,static:i=!1}){Q(!nr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:o,static:i,future:{}}),[a,o,i]);typeof t=="string"&&(t=Zt(t));let{pathname:s="/",search:c="",hash:d="",state:m=null,key:h="default"}=t,b=y.useMemo(()=>{let x=wn(s,a);return x==null?null:{location:{pathname:x,search:c,hash:d,state:m,key:h},navigationType:r}},[a,s,c,d,m,h,r]);return Je(b!=null,`<Router basename="${a}"> is not able to match the URL "${s}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:y.createElement(Ze.Provider,{value:u},y.createElement(Zr.Provider,{children:n,value:b}))}function v0({children:e,location:n}){return r0(wl(e),n)}function wl(e,n=[]){let t=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...n,o];if(r.type===y.Fragment){t.push.apply(t,wl(r.props.children,i));return}Q(r.type===He,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Q(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=wl(r.props.children,i)),t.push(a)}),t}var Fo="get",$o="application/x-www-form-urlencoded";function Mi(e){return e!=null&&typeof e.tagName=="string"}function y0(e){return Mi(e)&&e.tagName.toLowerCase()==="button"}function x0(e){return Mi(e)&&e.tagName.toLowerCase()==="form"}function b0(e){return Mi(e)&&e.tagName.toLowerCase()==="input"}function w0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k0(e,n){return e.button===0&&(!n||n==="_self")&&!w0(e)}var wo=null;function S0(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch{wo=!0}return wo}var j0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wa(e){return e!=null&&!j0.has(e)?(Je(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$o}"`),null):e}function P0(e,n){let t,r,o,i,a;if(x0(e)){let u=e.getAttribute("action");r=u?wn(u,n):null,t=e.getAttribute("method")||Fo,o=wa(e.getAttribute("enctype"))||$o,i=new FormData(e)}else if(y0(e)||b0(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||u.getAttribute("action");if(r=s?wn(s,n):null,t=e.getAttribute("formmethod")||u.getAttribute("method")||Fo,o=wa(e.getAttribute("formenctype"))||wa(u.getAttribute("enctype"))||$o,i=new FormData(u,e),!S0()){let{name:c,type:d,value:m}=e;if(d==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,m)}}else{if(Mi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Fo,r=null,o=$o,a=e}return i&&o==="text/plain"&&(a=i,i=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:i,body:a}}function Os(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function C0(e,n){if(e.id in n)return n[e.id];try{let t=await vg(()=>import(e.module),[]);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function E0(e){return e!=null&&typeof e.page=="string"}function _0(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function N0(e,n,t){let r=await Promise.all(e.map(async o=>{let i=n.routes[o.route.id];if(i){let a=await C0(i,t);return a.links?a.links():[]}return[]}));return D0(r.flat(1).filter(_0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Zu(e,n,t,r,o,i){let a=(s,c)=>t[c]?s.route.id!==t[c].route.id:!0,u=(s,c)=>{var d;return t[c].pathname!==s.pathname||((d=t[c].route.path)==null?void 0:d.endsWith("*"))&&t[c].params["*"]!==s.params["*"]};return i==="assets"?n.filter((s,c)=>a(s,c)||u(s,c)):i==="data"?n.filter((s,c)=>{var m;let d=r.routes[s.route.id];if(!d||!d.hasLoader)return!1;if(a(s,c)||u(s,c))return!0;if(s.route.shouldRevalidate){let h=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function O0(e,n,{includeHydrateFallback:t}={}){return T0(e.map(r=>{let o=n.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function T0(e){return[...new Set(e)]}function R0(e){let n={},t=Object.keys(e).sort();for(let r of t)n[r]=e[r];return n}function D0(e,n){let t=new Set,r=new Set(n);return e.reduce((o,i)=>{if(n&&!E0(i)&&i.as==="script"&&i.href&&r.has(i.href))return o;let u=JSON.stringify(R0(i));return t.has(u)||(t.add(u),o.push({key:u,link:i})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var A0=new Set([100,101,204,205]);function L0(e,n){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":n&&wn(t.pathname,n)==="/"?t.pathname=`${n.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Vf(){let e=y.useContext(er);return Os(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function z0(){let e=y.useContext(zi);return Os(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ts=y.createContext(void 0);Ts.displayName="FrameworkContext";function Qf(){let e=y.useContext(Ts);return Os(e,"You must render this element inside a <HydratedRouter> element"),e}function M0(e,n){let t=y.useContext(Ts),[r,o]=y.useState(!1),[i,a]=y.useState(!1),{onFocus:u,onBlur:s,onMouseEnter:c,onMouseLeave:d,onTouchStart:m}=n,h=y.useRef(null);y.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=p=>{p.forEach(f=>{a(f.isIntersecting)})},k=new IntersectionObserver(v,{threshold:.5});return h.current&&k.observe(h.current),()=>{k.disconnect()}}},[e]),y.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let b=()=>{o(!0)},x=()=>{o(!1),a(!1)};return t?e!=="intent"?[i,h,{}]:[i,h,{onFocus:cr(u,b),onBlur:cr(s,x),onMouseEnter:cr(c,b),onMouseLeave:cr(d,x),onTouchStart:cr(m,b)}]:[!1,h,{}]}function cr(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function I0({page:e,...n}){let{router:t}=Vf(),r=y.useMemo(()=>Lf(t.routes,e,t.basename),[t.routes,e,t.basename]);return r?y.createElement($0,{page:e,matches:r,...n}):null}function F0(e){let{manifest:n,routeModules:t}=Qf(),[r,o]=y.useState([]);return y.useEffect(()=>{let i=!1;return N0(e,n,t).then(a=>{i||o(a)}),()=>{i=!0}},[e,n,t]),r}function $0({page:e,matches:n,...t}){let r=Pn(),{manifest:o,routeModules:i}=Qf(),{basename:a}=Vf(),{loaderData:u,matches:s}=z0(),c=y.useMemo(()=>Zu(e,n,s,o,r,"data"),[e,n,s,o,r]),d=y.useMemo(()=>Zu(e,n,s,o,r,"assets"),[e,n,s,o,r]),m=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let x=new Set,v=!1;if(n.forEach(p=>{var g;let f=o.routes[p.route.id];!f||!f.hasLoader||(!c.some(w=>w.route.id===p.route.id)&&p.route.id in u&&((g=i[p.route.id])!=null&&g.shouldRevalidate)||f.hasClientLoader?v=!0:x.add(p.route.id))}),x.size===0)return[];let k=L0(e,a);return v&&x.size>0&&k.searchParams.set("_routes",n.filter(p=>x.has(p.route.id)).map(p=>p.route.id).join(",")),[k.pathname+k.search]},[a,u,r,o,c,n,e,i]),h=y.useMemo(()=>O0(d,o),[d,o]),b=F0(d);return y.createElement(y.Fragment,null,m.map(x=>y.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),h.map(x=>y.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),b.map(({key:x,link:v})=>y.createElement("link",{key:x,...v})))}function U0(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var Xf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xf&&(window.__reactRouterVersion="7.6.1")}catch{}function H0({basename:e,children:n,window:t}){let r=y.useRef();r.current==null&&(r.current=_g({window:t,v5Compat:!0}));let o=r.current,[i,a]=y.useState({action:o.action,location:o.location}),u=y.useCallback(s=>{y.startTransition(()=>a(s))},[a]);return y.useLayoutEffect(()=>o.listen(u),[o,u]),y.createElement(g0,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:o})}var qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=y.forwardRef(function({onClick:n,discover:t="render",prefetch:r="none",relative:o,reloadDocument:i,replace:a,state:u,target:s,to:c,preventScrollReset:d,viewTransition:m,...h},b){let{basename:x}=y.useContext(Ze),v=typeof c=="string"&&qf.test(c),k,p=!1;if(typeof c=="string"&&v&&(k=c,Xf))try{let E=new URL(window.location.href),O=c.startsWith("//")?new URL(E.protocol+c):new URL(c),U=wn(O.pathname,x);O.origin===E.origin&&U!=null?c=U+O.search+O.hash:p=!0}catch{Je(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let f=n0(c,{relative:o}),[g,w,P]=M0(r,h),j=Q0(c,{replace:a,state:u,target:s,preventScrollReset:d,relative:o,viewTransition:m});function C(E){n&&n(E),E.defaultPrevented||j(E)}let N=y.createElement("a",{...h,...P,href:k||f,onClick:p||i?n:C,ref:U0(b,w),target:s,"data-discover":!v&&t==="render"?"true":void 0});return g&&!v?y.createElement(y.Fragment,null,N,y.createElement(I0,{page:f})):N});qt.displayName="Link";var B0=y.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:r="",end:o=!1,style:i,to:a,viewTransition:u,children:s,...c},d){let m=eo(a,{relative:c.relative}),h=Pn(),b=y.useContext(zi),{navigator:x,basename:v}=y.useContext(Ze),k=b!=null&&G0(m)&&u===!0,p=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,f=h.pathname,g=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(f=f.toLowerCase(),g=g?g.toLowerCase():null,p=p.toLowerCase()),g&&v&&(g=wn(g,v)||g);const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let P=f===p||!o&&f.startsWith(p)&&f.charAt(w)==="/",j=g!=null&&(g===p||!o&&g.startsWith(p)&&g.charAt(p.length)==="/"),C={isActive:P,isPending:j,isTransitioning:k},N=P?n:void 0,E;typeof r=="function"?E=r(C):E=[r,P?"active":null,j?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(C):i;return y.createElement(qt,{...c,"aria-current":N,className:E,ref:d,style:O,to:a,viewTransition:u},typeof s=="function"?s(C):s)});B0.displayName="NavLink";var W0=y.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:r,replace:o,state:i,method:a=Fo,action:u,onSubmit:s,relative:c,preventScrollReset:d,viewTransition:m,...h},b)=>{let x=K0(),v=Y0(u,{relative:c}),k=a.toLowerCase()==="get"?"get":"post",p=typeof u=="string"&&qf.test(u),f=g=>{if(s&&s(g),g.defaultPrevented)return;g.preventDefault();let w=g.nativeEvent.submitter,P=(w==null?void 0:w.getAttribute("formmethod"))||a;x(w||g.currentTarget,{fetcherKey:n,method:P,navigate:t,replace:o,state:i,relative:c,preventScrollReset:d,viewTransition:m})};return y.createElement("form",{ref:b,method:k,action:v,onSubmit:r?s:f,...h,"data-discover":!p&&e==="render"?"true":void 0})});W0.displayName="Form";function V0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kf(e){let n=y.useContext(er);return Q(n,V0(e)),n}function Q0(e,{target:n,replace:t,state:r,preventScrollReset:o,relative:i,viewTransition:a}={}){let u=$e(),s=Pn(),c=eo(e,{relative:i});return y.useCallback(d=>{if(k0(d,n)){d.preventDefault();let m=t!==void 0?t:Wr(s)===Wr(c);u(e,{replace:m,state:r,preventScrollReset:o,relative:i,viewTransition:a})}},[s,u,c,t,r,n,e,o,i,a])}var X0=0,q0=()=>`__${String(++X0)}__`;function K0(){let{router:e}=Kf("useSubmit"),{basename:n}=y.useContext(Ze),t=f0();return y.useCallback(async(r,o={})=>{let{action:i,method:a,encType:u,formData:s,body:c}=P0(r,n);if(o.navigate===!1){let d=o.fetcherKey||q0();await e.fetch(d,t,o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||a,formEncType:o.encType||u,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||a,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,n,t])}function Y0(e,{relative:n}={}){let{basename:t}=y.useContext(Ze),r=y.useContext(en);Q(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...eo(e||".",{relative:n})},a=Pn();if(e==null){i.search=a.search;let u=new URLSearchParams(i.search),s=u.getAll("index");if(s.some(d=>d==="")){u.delete("index"),s.filter(m=>m).forEach(m=>u.append("index",m));let d=u.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:mn([t,i.pathname])),Wr(i)}function G0(e,n={}){let t=y.useContext(Ff);Q(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kf("useViewTransitionState"),o=eo(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=wn(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=wn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return pi(o.pathname,a)!=null||pi(o.pathname,i)!=null}[...A0];const Cn="/img/sargaLogo.png",gt="/img/Home/user_icon.png";function ae(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var J0=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),ec=J0,ka=()=>Math.random().toString(36).substring(7).split("").join("."),Z0={INIT:`@@redux/INIT${ka()}`,REPLACE:`@@redux/REPLACE${ka()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ka()}`},hi=Z0;function Rs(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Yf(e,n,t){if(typeof e!="function")throw new Error(ae(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ae(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ae(1));return t(Yf)(e,n)}let r=e,o=n,i=new Map,a=i,u=0,s=!1;function c(){a===i&&(a=new Map,i.forEach((k,p)=>{a.set(p,k)}))}function d(){if(s)throw new Error(ae(3));return o}function m(k){if(typeof k!="function")throw new Error(ae(4));if(s)throw new Error(ae(5));let p=!0;c();const f=u++;return a.set(f,k),function(){if(p){if(s)throw new Error(ae(6));p=!1,c(),a.delete(f),i=null}}}function h(k){if(!Rs(k))throw new Error(ae(7));if(typeof k.type>"u")throw new Error(ae(8));if(typeof k.type!="string")throw new Error(ae(17));if(s)throw new Error(ae(9));try{s=!0,o=r(o,k)}finally{s=!1}return(i=a).forEach(f=>{f()}),k}function b(k){if(typeof k!="function")throw new Error(ae(10));r=k,h({type:hi.REPLACE})}function x(){const k=m;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ae(11));function f(){const w=p;w.next&&w.next(d())}return f(),{unsubscribe:k(f)}},[ec](){return this}}}return h({type:hi.INIT}),{dispatch:h,subscribe:m,getState:d,replaceReducer:b,[ec]:x}}function ev(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:hi.INIT})>"u")throw new Error(ae(12));if(typeof t(void 0,{type:hi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ae(13))})}function nv(e){const n=Object.keys(e),t={};for(let i=0;i<n.length;i++){const a=n[i];typeof e[a]=="function"&&(t[a]=e[a])}const r=Object.keys(t);let o;try{ev(t)}catch(i){o=i}return function(a={},u){if(o)throw o;let s=!1;const c={};for(let d=0;d<r.length;d++){const m=r[d],h=t[m],b=a[m],x=h(b,u);if(typeof x>"u")throw u&&u.type,new Error(ae(14));c[m]=x,s=s||x!==b}return s=s||r.length!==Object.keys(a).length,s?c:a}}function mi(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...r)=>n(t(...r)))}function tv(...e){return n=>(t,r)=>{const o=n(t,r);let i=()=>{throw new Error(ae(15))};const a={getState:o.getState,dispatch:(s,...c)=>i(s,...c)},u=e.map(s=>s(a));return i=mi(...u)(o.dispatch),{...o,dispatch:i}}}function rv(e){return Rs(e)&&"type"in e&&typeof e.type=="string"}var Gf=Symbol.for("immer-nothing"),nc=Symbol.for("immer-draftable"),Oe=Symbol.for("immer-state");function Xe(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Kt=Object.getPrototypeOf;function ft(e){return!!e&&!!e[Oe]}function kn(e){var n;return e?Jf(e)||Array.isArray(e)||!!e[nc]||!!((n=e.constructor)!=null&&n[nc])||Fi(e)||$i(e):!1}var ov=Object.prototype.constructor.toString();function Jf(e){if(!e||typeof e!="object")return!1;const n=Kt(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===ov}function gi(e,n){Ii(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Ii(e){const n=e[Oe];return n?n.type_:Array.isArray(e)?1:Fi(e)?2:$i(e)?3:0}function kl(e,n){return Ii(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Zf(e,n,t){const r=Ii(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function iv(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Fi(e){return e instanceof Map}function $i(e){return e instanceof Set}function nt(e){return e.copy_||e.base_}function Sl(e,n){if(Fi(e))return new Map(e);if($i(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Jf(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[Oe];let o=Reflect.ownKeys(r);for(let i=0;i<o.length;i++){const a=o[i],u=r[a];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(r[a]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[a]})}return Object.create(Kt(e),r)}else{const r=Kt(e);if(r!==null&&t)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function Ds(e,n=!1){return Ui(e)||ft(e)||!kn(e)||(Ii(e)>1&&(e.set=e.add=e.clear=e.delete=av),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Ds(r,!0))),e}function av(){Xe(2)}function Ui(e){return Object.isFrozen(e)}var lv={};function pt(e){const n=lv[e];return n||Xe(0,e),n}var Vr;function ep(){return Vr}function sv(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function tc(e,n){n&&(pt("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function jl(e){Pl(e),e.drafts_.forEach(uv),e.drafts_=null}function Pl(e){e===Vr&&(Vr=e.parent_)}function rc(e){return Vr=sv(Vr,e)}function uv(e){const n=e[Oe];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function oc(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Oe].modified_&&(jl(n),Xe(4)),kn(e)&&(e=vi(n,e),n.parent_||yi(n,e)),n.patches_&&pt("Patches").generateReplacementPatches_(t[Oe].base_,e,n.patches_,n.inversePatches_)):e=vi(n,t,[]),jl(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Gf?e:void 0}function vi(e,n,t){if(Ui(n))return n;const r=n[Oe];if(!r)return gi(n,(o,i)=>ic(e,r,n,o,i,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return yi(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,a=!1;r.type_===3&&(i=new Set(o),o.clear(),a=!0),gi(i,(u,s)=>ic(e,r,o,u,s,t,a)),yi(e,o,!1),t&&e.patches_&&pt("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function ic(e,n,t,r,o,i,a){if(ft(o)){const u=i&&n&&n.type_!==3&&!kl(n.assigned_,r)?i.concat(r):void 0,s=vi(e,o,u);if(Zf(t,r,s),ft(s))e.canAutoFreeze_=!1;else return}else a&&t.add(o);if(kn(o)&&!Ui(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;vi(e,o),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&yi(e,o)}}function yi(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ds(n,t)}function cv(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:ep(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=As;t&&(o=[r],i=Qr);const{revoke:a,proxy:u}=Proxy.revocable(o,i);return r.draft_=u,r.revoke_=a,u}var As={get(e,n){if(n===Oe)return e;const t=nt(e);if(!kl(t,n))return dv(e,t,n);const r=t[n];return e.finalized_||!kn(r)?r:r===Sa(e.base_,n)?(ja(e),e.copy_[n]=El(r,e)):r},has(e,n){return n in nt(e)},ownKeys(e){return Reflect.ownKeys(nt(e))},set(e,n,t){const r=np(nt(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const o=Sa(nt(e),n),i=o==null?void 0:o[Oe];if(i&&i.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(iv(t,o)&&(t!==void 0||kl(e.base_,n)))return!0;ja(e),Cl(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Sa(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,ja(e),Cl(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=nt(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){Xe(11)},getPrototypeOf(e){return Kt(e.base_)},setPrototypeOf(){Xe(12)}},Qr={};gi(As,(e,n)=>{Qr[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Qr.deleteProperty=function(e,n){return Qr.set.call(this,e,n,void 0)};Qr.set=function(e,n,t){return As.set.call(this,e[0],n,t,e[0])};function Sa(e,n){const t=e[Oe];return(t?nt(t):e)[n]}function dv(e,n,t){var o;const r=np(n,t);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function np(e,n){if(!(n in e))return;let t=Kt(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=Kt(t)}}function Cl(e){e.modified_||(e.modified_=!0,e.parent_&&Cl(e.parent_))}function ja(e){e.copy_||(e.copy_=Sl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var fv=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const i=t;t=n;const a=this;return function(s=i,...c){return a.produce(s,d=>t.call(this,d,...c))}}typeof t!="function"&&Xe(6),r!==void 0&&typeof r!="function"&&Xe(7);let o;if(kn(n)){const i=rc(this),a=El(n,void 0);let u=!0;try{o=t(a),u=!1}finally{u?jl(i):Pl(i)}return tc(i,r),oc(o,i)}else if(!n||typeof n!="object"){if(o=t(n),o===void 0&&(o=n),o===Gf&&(o=void 0),this.autoFreeze_&&Ds(o,!0),r){const i=[],a=[];pt("Patches").generateReplacementPatches_(n,o,i,a),r(i,a)}return o}else Xe(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(a,...u)=>this.produceWithPatches(a,s=>n(s,...u));let r,o;return[this.produce(n,t,(a,u)=>{r=a,o=u}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){kn(e)||Xe(8),ft(e)&&(e=pv(e));const n=rc(this),t=El(e,void 0);return t[Oe].isManual_=!0,Pl(n),t}finishDraft(e,n){const t=e&&e[Oe];(!t||!t.isManual_)&&Xe(9);const{scope_:r}=t;return tc(r,n),oc(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const o=n[t];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}t>-1&&(n=n.slice(t+1));const r=pt("Patches").applyPatches_;return ft(e)?r(e,n):this.produce(e,o=>r(o,n))}};function El(e,n){const t=Fi(e)?pt("MapSet").proxyMap_(e,n):$i(e)?pt("MapSet").proxySet_(e,n):cv(e,n);return(n?n.scope_:ep()).drafts_.push(t),t}function pv(e){return ft(e)||Xe(10,e),tp(e)}function tp(e){if(!kn(e)||Ui(e))return e;const n=e[Oe];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Sl(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Sl(e,!0);return gi(t,(r,o)=>{Zf(t,r,tp(o))}),n&&(n.finalized_=!1),t}var Te=new fv,rp=Te.produce;Te.produceWithPatches.bind(Te);Te.setAutoFreeze.bind(Te);Te.setUseStrictShallowCopy.bind(Te);Te.applyPatches.bind(Te);Te.createDraft.bind(Te);Te.finishDraft.bind(Te);function op(e){return({dispatch:t,getState:r})=>o=>i=>typeof i=="function"?i(t,r,e):o(i)}var hv=op(),mv=op,gv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?mi:mi.apply(null,arguments)},vv=e=>e&&typeof e.match=="function";function Cr(e,n){function t(...r){if(n){let o=n(...r);if(!o)throw new Error(gn(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=r=>rv(r)&&r.type===e,t}var ip=class mr extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,mr.prototype)}static get[Symbol.species](){return mr}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new mr(...n[0].concat(this)):new mr(...n.concat(this))}};function ac(e){return kn(e)?rp(e,()=>{}):e}function ko(e,n,t){return e.has(n)?e.get(n):e.set(n,t(n)).get(n)}function yv(e){return typeof e=="boolean"}var xv=()=>function(n){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=n??{};let a=new ip;return t&&(yv(t)?a.push(hv):a.push(mv(t.extraArgument))),a},bv="RTK_autoBatch",lc=e=>n=>{setTimeout(n,e)},wv=(e={type:"raf"})=>n=>(...t)=>{const r=n(...t);let o=!0,i=!1,a=!1;const u=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lc(10):e.type==="callback"?e.queueNotification:lc(e.timeout),c=()=>{a=!1,i&&(i=!1,u.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const m=()=>o&&d(),h=r.subscribe(m);return u.add(d),()=>{h(),u.delete(d)}},dispatch(d){var m;try{return o=!((m=d==null?void 0:d.meta)!=null&&m[bv]),i=!o,i&&(a||(a=!0,s(c))),r.dispatch(d)}finally{o=!0}}})},kv=e=>function(t){const{autoBatch:r=!0}=t??{};let o=new ip(e);return r&&o.push(wv(typeof r=="object"?r:void 0)),o};function Sv(e){const n=xv(),{reducer:t=void 0,middleware:r,devTools:o=!0,duplicateMiddlewareCheck:i=!0,preloadedState:a=void 0,enhancers:u=void 0}=e||{};let s;if(typeof t=="function")s=t;else if(Rs(t))s=nv(t);else throw new Error(gn(1));let c;typeof r=="function"?c=r(n):c=n();let d=mi;o&&(d=gv({trace:!1,...typeof o=="object"&&o}));const m=tv(...c),h=kv(m);let b=typeof u=="function"?u(h):h();const x=d(...b);return Yf(s,a,x)}function ap(e){const n={},t=[];let r;const o={addCase(i,a){const u=typeof i=="string"?i:i.type;if(!u)throw new Error(gn(28));if(u in n)throw new Error(gn(29));return n[u]=a,o},addMatcher(i,a){return t.push({matcher:i,reducer:a}),o},addDefaultCase(i){return r=i,o}};return e(o),[n,t,r]}function jv(e){return typeof e=="function"}function Pv(e,n){let[t,r,o]=ap(n),i;if(jv(e))i=()=>ac(e());else{const u=ac(e);i=()=>u}function a(u=i(),s){let c=[t[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[o]),c.reduce((d,m)=>{if(m)if(ft(d)){const b=m(d,s);return b===void 0?d:b}else{if(kn(d))return rp(d,h=>m(h,s));{const h=m(d,s);if(h===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return d},u)}return a.getInitialState=i,a}var Cv=(e,n)=>vv(e)?e.match(n):e(n);function Ev(...e){return n=>e.some(t=>Cv(t,n))}var _v="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Nv=(e=21)=>{let n="",t=e;for(;t--;)n+=_v[Math.random()*64|0];return n},Ov=["name","message","stack","code"],Pa=class{constructor(e,n){Vi(this,"_type");this.payload=e,this.meta=n}},sc=class{constructor(e,n){Vi(this,"_type");this.payload=e,this.meta=n}},Tv=e=>{if(typeof e=="object"&&e!==null){const n={};for(const t of Ov)typeof e[t]=="string"&&(n[t]=e[t]);return n}return{message:String(e)}},uc="External signal was aborted",Ls=(()=>{function e(n,t,r){const o=Cr(n+"/fulfilled",(s,c,d,m)=>({payload:s,meta:{...m||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),i=Cr(n+"/pending",(s,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:s,requestStatus:"pending"}})),a=Cr(n+"/rejected",(s,c,d,m,h)=>({payload:m,error:(r&&r.serializeError||Tv)(s||"Rejected"),meta:{...h||{},arg:d,requestId:c,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(s==null?void 0:s.name)==="AbortError",condition:(s==null?void 0:s.name)==="ConditionError"}}));function u(s,{signal:c}={}){return(d,m,h)=>{const b=r!=null&&r.idGenerator?r.idGenerator(s):Nv(),x=new AbortController;let v,k;function p(g){k=g,x.abort()}c&&(c.aborted?p(uc):c.addEventListener("abort",()=>p(uc),{once:!0}));const f=async function(){var P,j;let g;try{let C=(P=r==null?void 0:r.condition)==null?void 0:P.call(r,s,{getState:m,extra:h});if(Dv(C)&&(C=await C),C===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const N=new Promise((E,O)=>{v=()=>{O({name:"AbortError",message:k||"Aborted"})},x.signal.addEventListener("abort",v)});d(i(b,s,(j=r==null?void 0:r.getPendingMeta)==null?void 0:j.call(r,{requestId:b,arg:s},{getState:m,extra:h}))),g=await Promise.race([N,Promise.resolve(t(s,{dispatch:d,getState:m,extra:h,requestId:b,signal:x.signal,abort:p,rejectWithValue:(E,O)=>new Pa(E,O),fulfillWithValue:(E,O)=>new sc(E,O)})).then(E=>{if(E instanceof Pa)throw E;return E instanceof sc?o(E.payload,b,s,E.meta):o(E,b,s)})])}catch(C){g=C instanceof Pa?a(null,b,s,C.payload,C.meta):a(C,b,s)}finally{v&&x.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&a.match(g)&&g.meta.condition||d(g),g}();return Object.assign(f,{abort:p,requestId:b,arg:s,unwrap(){return f.then(Rv)}})}}return Object.assign(u,{pending:i,rejected:a,fulfilled:o,settled:Ev(a,o),typePrefix:n})}return e.withTypes=()=>e,e})();function Rv(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Dv(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Av=Symbol.for("rtk-slice-createasyncthunk");function Lv(e,n){return`${e}/${n}`}function zv({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Av];return function(o){const{name:i,reducerPath:a=i}=o;if(!i)throw new Error(gn(11));typeof process<"u";const u=(typeof o.reducers=="function"?o.reducers(Iv()):o.reducers)||{},s=Object.keys(u),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(w,P){const j=typeof w=="string"?w:w.type;if(!j)throw new Error(gn(12));if(j in c.sliceCaseReducersByType)throw new Error(gn(13));return c.sliceCaseReducersByType[j]=P,d},addMatcher(w,P){return c.sliceMatchers.push({matcher:w,reducer:P}),d},exposeAction(w,P){return c.actionCreators[w]=P,d},exposeCaseReducer(w,P){return c.sliceCaseReducersByName[w]=P,d}};s.forEach(w=>{const P=u[w],j={reducerName:w,type:Lv(i,w),createNotation:typeof o.reducers=="function"};$v(P)?Hv(j,P,d,n):Fv(j,P,d)});function m(){const[w={},P=[],j=void 0]=typeof o.extraReducers=="function"?ap(o.extraReducers):[o.extraReducers],C={...w,...c.sliceCaseReducersByType};return Pv(o.initialState,N=>{for(let E in C)N.addCase(E,C[E]);for(let E of c.sliceMatchers)N.addMatcher(E.matcher,E.reducer);for(let E of P)N.addMatcher(E.matcher,E.reducer);j&&N.addDefaultCase(j)})}const h=w=>w,b=new Map,x=new WeakMap;let v;function k(w,P){return v||(v=m()),v(w,P)}function p(){return v||(v=m()),v.getInitialState()}function f(w,P=!1){function j(N){let E=N[w];return typeof E>"u"&&P&&(E=ko(x,j,p)),E}function C(N=h){const E=ko(b,P,()=>new WeakMap);return ko(E,N,()=>{const O={};for(const[U,ye]of Object.entries(o.selectors??{}))O[U]=Mv(ye,N,()=>ko(x,N,p),P);return O})}return{reducerPath:w,getSelectors:C,get selectors(){return C(j)},selectSlice:j}}const g={name:i,reducer:k,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...f(a),injectInto(w,{reducerPath:P,...j}={}){const C=P??a;return w.inject({reducerPath:C,reducer:k},j),{...g,...f(C,!0)}}};return g}}function Mv(e,n,t,r){function o(i,...a){let u=n(i);return typeof u>"u"&&r&&(u=t()),e(u,...a)}return o.unwrapped=e,o}var Hi=zv();function Iv(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function Fv({type:e,reducerName:n,createNotation:t},r,o){let i,a;if("reducer"in r){if(t&&!Uv(r))throw new Error(gn(17));i=r.reducer,a=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(n,i).exposeAction(n,a?Cr(e,a):Cr(e))}function $v(e){return e._reducerDefinitionType==="asyncThunk"}function Uv(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Hv({type:e,reducerName:n},t,r,o){if(!o)throw new Error(gn(18));const{payloadCreator:i,fulfilled:a,pending:u,rejected:s,settled:c,options:d}=t,m=o(e,i,d);r.exposeAction(n,m),a&&r.addCase(m.fulfilled,a),u&&r.addCase(m.pending,u),s&&r.addCase(m.rejected,s),c&&r.addMatcher(m.settled,c),r.exposeCaseReducer(n,{fulfilled:a||So,pending:u||So,rejected:s||So,settled:c||So})}function So(){}function gn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Bv=()=>{try{const e=localStorage.getItem("userData");return e?JSON.parse(e):null}catch(e){return console.error("Error loading user data from localStorage:",e),null}},lp=Hi({name:"user",initialState:{userData:Bv()},reducers:{onLogin:(e,n)=>{const{payload:t}=n;e.userData=t,localStorage.setItem("userData",JSON.stringify(t))},onLogout:e=>{e.userData=null,localStorage.removeItem("userData")}}}),{onLogin:sp,onLogout:vt}=lp.actions,Wv=lp.reducer,cc="/img/Home/MISTRAL_AGUS_2_12857.jpg",Vv="/img/Home/mistral.jpg",Qv="/img/Home/mistral2.jpg",Xv="/img/Home/mistral3.jpg",qv="/img/Home/Instagram_icon.png",Kv=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(!1),o=ie(b=>b.userSlice.userData),i=$e(),a=jn(),u=o&&o.token,s=o?o.userData.rol:null,c=()=>u?l.jsxs(l.Fragment,{children:[s==="Administrator"||s==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,s==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:m,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:o.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${t?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:h,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),d=()=>{n(!e)},m=b=>{console.log("Toggle user dropdown"),b.preventDefault(),r(!t)},h=b=>{b.preventDefault(),a(vt()),r(!1),i("/")};return y.useEffect(()=>{const b=x=>{t&&!x.target.closest(".user-icon")&&r(!1)};return document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}},[t]),l.jsxs("div",{className:"home-container",children:[l.jsxs("header",{className:`home-header ${e?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:d,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/catalog",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),c()]})})]}),l.jsxs("div",{className:"home-content",children:[l.jsx("h1",{className:"home-title",children:"Bienvenido a Sarga"}),l.jsx("p",{className:"home-description",children:"Combinamos las mejores marcas con las últimas tendencias para que armes ese outfit que te haga sentir vos!"}),l.jsx("p",{className:"home-description",children:"Te esperamos en Sarga #sargadrop."})]}),l.jsxs("div",{id:"catalogo",className:"catalogo-section",children:[l.jsxs("div",{className:"catalogo-text",children:[l.jsx("h2",{children:"Conocé las últimas novedades."}),l.jsx("a",{id:"ver-catalogo",href:"/catalog",children:"Ver Catálogo"})]}),l.jsx("div",{className:"catalogo-image",children:l.jsx("img",{src:cc,alt:"Catálogo"})})]}),l.jsxs("div",{className:"productos-section",children:[l.jsx("div",{className:"productos-image","data-label":"Remeras Hombre",id:"remeras-hombre",children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Vv,alt:"Remeras Hombre"})})}),l.jsx("div",{className:"productos-image","data-label":"Remeras Mujer",id:"remeras-mujer",children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Qv,alt:"Remeras Mujer"})})}),l.jsx("div",{className:"productos-image","data-label":"Jeans Hombre",id:"jeans-hombre",children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Xv,alt:"Jeans Hombre"})})})]}),l.jsxs("div",{className:"puntos-section",children:[l.jsxs("div",{className:"puntos-text",children:[l.jsx("h2",{children:"Puntos Sarga."}),l.jsx("p",{children:"Sumá puntos con tus compras y canjealos por productos en los locales Sarga."})]}),l.jsx("div",{className:"puntos-image",children:l.jsx("img",{src:cc,alt:"Puntos"})})]}),l.jsxs("div",{className:"footer",children:[l.jsx("div",{className:"footer-text",children:l.jsx("p",{children:"Contacto: info@sarga.com"})}),l.jsxs("div",{className:"footer-links",children:[l.jsx("p",{children:"¡Seguinos en Instagram!"}),l.jsx("a",{href:"https://www.instagram.com/sarga_uy",target:"_blank",rel:"noopener noreferrer",children:l.jsx("img",{src:qv,alt:"Instagram",id:"instagram-icon"})})]})]}),l.jsx("div",{className:"footer-copyright",children:l.jsx("p",{children:"© 2024 Sarga. Todos los derechos reservados."})})]})},En="https://sargaapi-fjhdczeyhegge3fp.eastus2-01.azurewebsites.net",up=async(e,n)=>{try{console.log("Intentando iniciar sesión con:",e,n);const t=await fetch(`${En}/api/auth`,{method:"POST",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600"},body:JSON.stringify({email:e,password:n})});return t.status==200?t.json():t.status==401?Promise.reject("Usuario y/o contraseña incorrecto"):Promise.reject("Ha ocurrido un error")}catch{return Promise.reject("Ha ocurrido un error")}},Yv=async(e,n,t,r,o)=>{try{const i=await fetch(`${En}/api/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:0,ci:r,name:e,email:t,password:n,phone:o,rol:"Client"})});if(i.ok)return console.log("Registro exitoso"),await i.json();if(i.status===400){const a=await i.text();return Promise.reject(`Error en los datos enviados: ${a}`)}else return Promise.reject(`Error inesperado: ${i.status}`)}catch{return Promise.reject("Ha ocurrido un error en la conexión")}},Gv=async(e,n)=>{try{const t=await fetch(`${En}/api/purchases/client/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}});if(t.ok)return console.log("Compras obtenidas exitosamente"),await t.json();if(t.status===400){const r=await t.text();return Promise.reject(`Error en los datos enviados: ${r}`)}else return Promise.reject(`Error inesperado: ${t.status}`)}catch{return Promise.reject("Ha ocurrido un error en la conexión")}},Jv=async()=>{try{const e=await fetch(`${En}/api/products/brand/mistral`,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600"}});return e.ok?await e.json():Promise.reject("Error al obtener los productos")}catch{return Promise.reject("Ha ocurrido un error al obtener los productos")}},Zv=async e=>{try{const n=await fetch(`${En}/api/subproducts/by-productCode/${e}`,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600"}});return n.ok?await n.json():Promise.reject("Error al obtener los subproductos")}catch{return Promise.reject("Ha ocurrido un error al obtener los subproductos")}},ey=async()=>{try{const e=await fetch(`${En}/api/warehouses`,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600"}});return e.ok?await e.json():Promise.reject("Error al obtener los almacenes")}catch{return Promise.reject("Ha ocurrido un error al obtener los almacenes")}},ny=async(e,n)=>{try{const t=await fetch(`${En}/api/users/getByCi/${e}`,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600",Authorization:`Bearer ${n}`}});return t.ok?await t.json():Promise.reject("Error al obtener el usuario")}catch{return Promise.reject("Ha ocurrido un error al obtener el usuario")}},ty=async(e,n)=>{try{const t=await fetch(`${En}/api/redemptions`,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600",Authorization:`Bearer ${n}`},body:JSON.stringify({Id:0,ClientId:e.clientId,PointsUsed:e.points})});return t.ok?await t.json():Promise.reject("Error al crear el canje")}catch{return Promise.reject("Ha ocurrido un error al crear el canje")}},ry=async e=>{try{const n=await fetch(`${En}/api/promotions`,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Credentials":"true","Access-Control-Max-Age":"3600",Authorization:`Bearer ${e}`}});return n.ok?await n.json():Promise.reject("Error al obtener las promociones")}catch{return Promise.reject("Ha ocurrido un error al obtener las promociones")}};function te(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}te(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var an=function(){return an=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},an.apply(this,arguments)};function xi(e){return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xi(e)}var oy=/^\s+/,iy=/\s+$/;function D(e,n){if(n=n||{},(e=e||"")instanceof D)return e;if(!(this instanceof D))return new D(e,n);var t=function(r){var o={r:0,g:0,b:0},i=1,a=null,u=null,s=null,c=!1,d=!1;typeof r=="string"&&(r=function(x){x=x.replace(oy,"").replace(iy,"").toLowerCase();var v,k=!1;if(_l[x])x=_l[x],k=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(v=Be.rgb.exec(x))?{r:v[1],g:v[2],b:v[3]}:(v=Be.rgba.exec(x))?{r:v[1],g:v[2],b:v[3],a:v[4]}:(v=Be.hsl.exec(x))?{h:v[1],s:v[2],l:v[3]}:(v=Be.hsla.exec(x))?{h:v[1],s:v[2],l:v[3],a:v[4]}:(v=Be.hsv.exec(x))?{h:v[1],s:v[2],v:v[3]}:(v=Be.hsva.exec(x))?{h:v[1],s:v[2],v:v[3],a:v[4]}:(v=Be.hex8.exec(x))?{r:Pe(v[1]),g:Pe(v[2]),b:Pe(v[3]),a:gc(v[4]),format:k?"name":"hex8"}:(v=Be.hex6.exec(x))?{r:Pe(v[1]),g:Pe(v[2]),b:Pe(v[3]),format:k?"name":"hex"}:(v=Be.hex4.exec(x))?{r:Pe(v[1]+""+v[1]),g:Pe(v[2]+""+v[2]),b:Pe(v[3]+""+v[3]),a:gc(v[4]+""+v[4]),format:k?"name":"hex8"}:(v=Be.hex3.exec(x))?{r:Pe(v[1]+""+v[1]),g:Pe(v[2]+""+v[2]),b:Pe(v[3]+""+v[3]),format:k?"name":"hex"}:!1}(r)),xi(r)=="object"&&(un(r.r)&&un(r.g)&&un(r.b)?(m=r.r,h=r.g,b=r.b,o={r:255*W(m,255),g:255*W(h,255),b:255*W(b,255)},c=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):un(r.h)&&un(r.s)&&un(r.v)?(a=gr(r.s),u=gr(r.v),o=function(x,v,k){x=6*W(x,360),v=W(v,100),k=W(k,100);var p=Math.floor(x),f=x-p,g=k*(1-v),w=k*(1-f*v),P=k*(1-(1-f)*v),j=p%6,C=[k,w,g,g,P,k][j],N=[P,k,k,w,g,g][j],E=[g,g,P,k,k,w][j];return{r:255*C,g:255*N,b:255*E}}(r.h,a,u),c=!0,d="hsv"):un(r.h)&&un(r.s)&&un(r.l)&&(a=gr(r.s),s=gr(r.l),o=function(x,v,k){var p,f,g;function w(C,N,E){return E<0&&(E+=1),E>1&&(E-=1),E<1/6?C+6*(N-C)*E:E<.5?N:E<2/3?C+(N-C)*(2/3-E)*6:C}if(x=W(x,360),v=W(v,100),k=W(k,100),v===0)p=f=g=k;else{var P=k<.5?k*(1+v):k+v-k*v,j=2*k-P;p=w(j,P,x+1/3),f=w(j,P,x),g=w(j,P,x-1/3)}return{r:255*p,g:255*f,b:255*g}}(r.h,a,s),c=!0,d="hsl"),r.hasOwnProperty("a")&&(i=r.a));var m,h,b;return i=cp(i),{ok:c,format:r.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function dc(e,n,t){e=W(e,255),n=W(n,255),t=W(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),u=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=u>.5?s/(2-i-a):s/(i+a),i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l:u}}function fc(e,n,t){e=W(e,255),n=W(n,255),t=W(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),u=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:u}}function pc(e,n,t,r){var o=[qe(Math.round(e).toString(16)),qe(Math.round(n).toString(16)),qe(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function hc(e,n,t,r){return[qe(dp(r)),qe(Math.round(e).toString(16)),qe(Math.round(n).toString(16)),qe(Math.round(t).toString(16))].join("")}function ay(e,n){n=n===0?0:n||10;var t=D(e).toHsl();return t.s-=n/100,t.s=Bi(t.s),D(t)}function ly(e,n){n=n===0?0:n||10;var t=D(e).toHsl();return t.s+=n/100,t.s=Bi(t.s),D(t)}function sy(e){return D(e).desaturate(100)}function uy(e,n){n=n===0?0:n||10;var t=D(e).toHsl();return t.l+=n/100,t.l=Bi(t.l),D(t)}function cy(e,n){n=n===0?0:n||10;var t=D(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),D(t)}function dy(e,n){n=n===0?0:n||10;var t=D(e).toHsl();return t.l-=n/100,t.l=Bi(t.l),D(t)}function fy(e,n){var t=D(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,D(t)}function py(e){var n=D(e).toHsl();return n.h=(n.h+180)%360,D(n)}function mc(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=D(e).toHsl(),r=[D(e)],o=360/n,i=1;i<n;i++)r.push(D({h:(t.h+i*o)%360,s:t.s,l:t.l}));return r}function hy(e){var n=D(e).toHsl(),t=n.h;return[D(e),D({h:(t+72)%360,s:n.s,l:n.l}),D({h:(t+216)%360,s:n.s,l:n.l})]}function my(e,n,t){n=n||6,t=t||30;var r=D(e).toHsl(),o=360/t,i=[D(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(D(r));return i}function gy(e,n){n=n||6;for(var t=D(e).toHsv(),r=t.h,o=t.s,i=t.v,a=[],u=1/n;n--;)a.push(D({h:r,s:o,v:i})),i=(i+u)%1;return a}D.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=cp(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=fc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=fc(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=dc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=dc(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return pc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,i){var a=[qe(Math.round(n).toString(16)),qe(Math.round(t).toString(16)),qe(Math.round(r).toString(16)),qe(dp(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*W(this._r,255))+"%",g:Math.round(100*W(this._g,255))+"%",b:Math.round(100*W(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*W(this._r,255))+"%, "+Math.round(100*W(this._g,255))+"%, "+Math.round(100*W(this._b,255))+"%)":"rgba("+Math.round(100*W(this._r,255))+"%, "+Math.round(100*W(this._g,255))+"%, "+Math.round(100*W(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(vy[pc(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+hc(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=D(e);t="#"+hc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return D(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(uy,arguments)},brighten:function(){return this._applyModification(cy,arguments)},darken:function(){return this._applyModification(dy,arguments)},desaturate:function(){return this._applyModification(ay,arguments)},saturate:function(){return this._applyModification(ly,arguments)},greyscale:function(){return this._applyModification(sy,arguments)},spin:function(){return this._applyModification(fy,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(my,arguments)},complement:function(){return this._applyCombination(py,arguments)},monochromatic:function(){return this._applyCombination(gy,arguments)},splitcomplement:function(){return this._applyCombination(hy,arguments)},triad:function(){return this._applyCombination(mc,[3])},tetrad:function(){return this._applyCombination(mc,[4])}},D.fromRatio=function(e,n){if(xi(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:gr(e[r]));e=t}return D(e,n)},D.equals=function(e,n){return!(!e||!n)&&D(e).toRgbString()==D(n).toRgbString()},D.random=function(){return D.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},D.mix=function(e,n,t){t=t===0?0:t||50;var r=D(e).toRgb(),o=D(n).toRgb(),i=t/100;return D({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},D.readability=function(e,n){var t=D(e),r=D(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},D.isReadable=function(e,n,t){var r,o,i=D.readability(e,n);switch(o=!1,(r=function(a){var u,s;return u=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),u!=="AA"&&u!=="AAA"&&(u="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:u,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},D.mostReadable=function(e,n,t){var r,o,i,a,u=null,s=0;o=(t=t||{}).includeFallbackColors,i=t.level,a=t.size;for(var c=0;c<n.length;c++)(r=D.readability(e,n[c]))>s&&(s=r,u=D(n[c]));return D.isReadable(e,u,{level:i,size:a})||!o?u:(t.includeFallbackColors=!1,D.mostReadable(e,["#fff","#000"],t))};var _l=D.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},vy=D.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(_l);function cp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function W(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function Bi(e){return Math.min(1,Math.max(0,e))}function Pe(e){return parseInt(e,16)}function qe(e){return e.length==1?"0"+e:""+e}function gr(e){return e<=1&&(e=100*e+"%"),e}function dp(e){return Math.round(255*parseFloat(e)).toString(16)}function gc(e){return Pe(e)/255}var On,jo,Po,Be=(jo="[\\s|\\(]+("+(On="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+On+")[,|\\s]+("+On+")\\s*\\)?",Po="[\\s|\\(]+("+On+")[,|\\s]+("+On+")[,|\\s]+("+On+")[,|\\s]+("+On+")\\s*\\)?",{CSS_UNIT:new RegExp(On),rgb:new RegExp("rgb"+jo),rgba:new RegExp("rgba"+Po),hsl:new RegExp("hsl"+jo),hsla:new RegExp("hsla"+Po),hsv:new RegExp("hsv"+jo),hsva:new RegExp("hsva"+Po),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function un(e){return!!Be.CSS_UNIT.exec(e)}var yy=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},xy=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var i=t.fontSize;o=function(a,u){var s={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&u.indexOf(c)<0&&(s[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(c=Object.getOwnPropertySymbols(a);d<c.length;d++)u.indexOf(c[d])<0&&Object.prototype.propertyIsEnumerable.call(a,c[d])&&(s[c[d]]=a[c[d]])}return s}(t,["fontSize"]),r=i}return{fontSize:r,styles:o}},by={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},wy=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,i=e.style;return t?tn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:an(an(an({},o&&by),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},fp="rgb(50, 205, 50)";function ky(e,n){if(n===void 0&&(n=0),e.length===0)throw new Error("Input array cannot be empty!");var t=[];return function r(o,i){return i===void 0&&(i=0),t.push.apply(t,o),t.length<i&&r(t,i),t.slice(0,i)}(e,n)}te(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);D(fp).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});te(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});te(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")});function Ca(e){return e&&e.Math===Math&&e}te(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ca(typeof window=="object"&&window)||Ca(typeof self=="object"&&self)||Ca(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")});te(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")});te(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});te(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});te(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});te(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});te(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});te(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});te(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});te(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});te(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});te(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);var Co=Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")}),pp=function(e){var n,t=xy(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=yy(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,u=function(s){var c={},d=Co.length;if(Array.isArray(s)&&s.length>0){for(var m=ky(s,d),h=0;h<m.length&&!(h>d-1);h++){var b=m[h];c[Co[h]]=b}return c}try{if(typeof s!="string")throw new Error("Color String expected");for(h=0;h<d;h++)c[Co[h]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),h=0;h<d;h++)c[Co[h]]=fp}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return tn.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:an(an(an(an(an({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),u),r),role:"status","aria-live":"polite","aria-label":"Loading"},tn.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},tn.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),tn.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),tn.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),tn.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),tn.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),tn.createElement(wy,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"0.8em"}}))};te(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});te(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});te(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});const Sy=()=>{const e=ie(b=>b.userSlice.userData),n=$e(),t=jn(),r=y.useRef(),o=y.useRef(),[i,a]=y.useState(!1),[u,s]=y.useState(null),[c,d]=y.useState(!1);y.useEffect(()=>{const b=document.querySelector(".loading-container");c?b.style.display="flex":b.style.display="none"},[c]),y.useEffect(()=>{e&&e.token&&n("/")},[e,n]);const m=async b=>{b.preventDefault();const x=r.current.value,v=o.current.value;try{if(a(!0),!x||!v){s("Por favor, complete todos los campos."),a(!1);return}d(!0),s(null),a(!0);const k=await up(x,v);t(sp(k)),d(!1),a(!1),n("/")}catch(k){s(k.message||"Error al iniciar sesión"),d(!1),a(!1)}},h=()=>{r.current.value.length>0&&o.current.value.length>0?a(!1):a(!0)};return l.jsxs("div",{className:"login-container",children:[l.jsx(qt,{to:"/",children:l.jsx("img",{src:Cn,alt:"Logo",className:"register-logo",style:{display:"block",margin:"0 auto 20px",width:"80px",height:"80px"}})}),l.jsx("h1",{className:"text-center",children:"Login"}),l.jsx("p",{className:"text-center",children:"Ingresá con tu mail y contraseña."}),l.jsxs("form",{className:"login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",className:"login-label",children:"Email"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-envelope"})})}),l.jsx("input",{type:"email",className:"form-control login-input",id:"email",placeholder:"email@address.com",ref:r,onChange:h})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"password",className:"login-label",children:"Contraseña"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-lock"})})}),l.jsx("input",{type:"password",className:"form-control login-input",id:"password",placeholder:"Password",ref:o,onChange:h}),l.jsx("div",{className:"input-group-append",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-eye"})})})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary btn-block login-button",onClick:m,disabled:i,children:"Login"}),l.jsx("div",{className:"loading-container",children:l.jsx(pp,{className:"loading",color:["#1f3a66","#2a508e","#3666b5","#5280cc"],size:"small",text:"Iniciando Sesión",textColor:""})}),l.jsx("p",{className:"alert alert-warning",children:u})]}),l.jsxs("p",{className:"text-center mt-4",children:["¿No tenés cuenta? ",l.jsx(qt,{to:"/register",className:"login-link",children:"¡Registrate!"})]}),l.jsx("div",{className:"text-center mt-3"})]})};const jy=()=>{const e=ie(k=>k.userSlice.userData),n=jn(),t=y.useRef(),r=y.useRef(),o=y.useRef(),i=y.useRef(),a=y.useRef(),[u,s]=y.useState(!1),[c,d]=y.useState(null),m=$e(),[h,b]=y.useState(!1);y.useEffect(()=>{const k=document.querySelector(".loading-container");h?k.style.display="flex":k.style.display="none"},[h]),y.useEffect(()=>{e&&m("/")},[e]);const x=async k=>{k.preventDefault();try{s(!0),b(!0),d(null);const p=await Yv(t.current.value,o.current.value,r.current.value,i.current.value,a.current.value),f=await up(r.current.value,o.current.value);b(!1),s(!1),n(sp(f)),alert("Login exitoso"),m("/")}catch(p){d(p),b(!1),s(!1)}},v=()=>{t.current.value.length>0&&r.current.value.length>0&&o.current.value.length>0&&i.current.value.length>0&&a.current.value.length>0?s(!1):s(!0)};return l.jsxs("div",{className:"register-container",children:[l.jsx(qt,{to:"/",children:l.jsx("img",{src:Cn,alt:"Logo",className:"register-logo",style:{display:"block",margin:"0 auto 20px",width:"80px",height:"80px"}})}),l.jsx("h1",{className:"text-center register-title",children:"Registro de Usuario"}),l.jsx("p",{className:"text-center register-description",children:"¡Registrate para obtener beneficios exclusivos!"}),l.jsxs("form",{className:"register-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"usuario",className:"register-label",children:"Nombre de usuario"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-envelope"})})}),l.jsx("input",{type:"text",className:"form-control register-input",id:"usuario",placeholder:"fulanito123",ref:t,onChange:v})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"usuario",className:"register-label",children:"Cédula de identidad"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-envelope"})})}),l.jsx("input",{type:"text",className:"form-control register-input",id:"ci",placeholder:"12345678",ref:i,onChange:v})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"usuario",className:"register-label",children:"Email"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-envelope"})})}),l.jsx("input",{type:"text",className:"form-control register-input",id:"email",placeholder:"fulanito@mail.com",ref:r,onChange:v})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"password",className:"register-label",children:"Password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-lock"})})}),l.jsx("input",{type:"password",className:"form-control register-input",id:"password",placeholder:"Password",ref:o,onChange:v}),l.jsx("div",{className:"input-group-append",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-eye"})})})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",className:"register-label",children:"Teléfono"}),l.jsxs("div",{className:"input-group",children:[l.jsx("div",{className:"input-group-prepend",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-lock"})})}),l.jsx("input",{type:"text",className:"form-control register-input",id:"phone",placeholder:"09XXXXXXXX",ref:a,onChange:v}),l.jsx("div",{className:"input-group-append",children:l.jsx("span",{className:"input-group-text",children:l.jsx("i",{className:"fas fa-eye"})})})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary btn-block register-button",onClick:x,disabled:u,children:"Registrarse"}),l.jsx("div",{className:"loading-container",children:l.jsx(pp,{className:"loading",color:["#1f3a66","#2a508e","#3666b5","#5280cc"],size:"small",text:"Registrando...",textColor:""})}),c?l.jsx("p",{className:"alert alert-warning",children:c}):l.jsx("p",{})]}),l.jsxs("p",{className:"text-center mt-4",children:["¿Ya tenés cuenta? ",l.jsx(qt,{to:"/login",className:"login-link",children:"¡Iniciá sesión!"})]})]})};const Py=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(!1),o=ie(p=>p.userSlice.userData),i=$e(),a=jn(),u=o&&o.token,s=o?o.token:null;o&&o.userData&&o.userData.Role;const[c,d]=y.useState([]);y.useEffect(()=>{u&&Gv(o.userData.id,s).then(p=>{d(p),m(p)}).catch(p=>{console.error("Error al obtener las compras:",p)})},[u,o.userData.id]);const m=p=>{const f=document.querySelector(".purchase-history-list");if(!p||p.length===0){f.innerHTML="<p>No tienes compras registradas.</p>";return}f.innerHTML="",p.forEach(g=>{const w=document.createElement("div");w.className="compra-item",w.innerHTML=`
        <p>ID: ${g.id}</p>
        <p>Fecha: ${new Date(g.fecha).toLocaleDateString()}</p>
        <p>Total: $${g.total}</p>
      `,f.appendChild(w)})},h=o?o.userData.rol:null,b=()=>u?l.jsxs(l.Fragment,{children:[h==="Administrator"||h==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,h==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:v,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:o.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${t?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:k,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),x=()=>{n(!e)},v=p=>{console.log("Toggle user dropdown"),p.preventDefault(),r(!t)},k=p=>{p.preventDefault(),a(vt()),r(!1),alert("Logout exitoso"),i("/")};return y.useEffect(()=>{const p=f=>{t&&!f.target.closest(".user-icon")&&r(!1)};return document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}},[t]),l.jsxs("div",{className:"profile-page",children:[l.jsxs("header",{className:`home-header ${e?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{id:"sarga-logo",href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:x,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),b()]})})]}),l.jsxs("div",{className:"profile-info",children:[l.jsx("h1",{children:o.userData.name}),l.jsxs("p",{children:["Puntos Sarga: ",o.userData.points]}),l.jsxs("p",{children:["Email: ",o.userData.email]}),l.jsxs("p",{children:["Teléfono: ",o.userData.phone]})]}),l.jsxs("div",{className:"purchase-history",children:[l.jsxs("div",{className:"purchase-history-content",children:[l.jsx("h2",{children:"Mis Compras"}),l.jsx("p",{children:"Aquí puedes ver tus compras recientes."})]}),l.jsx("div",{className:"purchase-history-list"})]})]})};const Uo=Ls("products/fetchMistralProducts",async(e,{rejectWithValue:n})=>{try{return await Jv()}catch(t){return n(t)}}),hp=Hi({name:"products",initialState:{mistralProducts:[],loading:!1,error:null,lastFetch:null},reducers:{clearProducts:e=>{e.mistralProducts=[]},clearError:e=>{e.error=null}},extraReducers:e=>{e.addCase(Uo.pending,n=>{n.loading=!0,n.error=null}).addCase(Uo.fulfilled,(n,t)=>{n.loading=!1,n.mistralProducts=t.payload,n.lastFetch=Date.now()}).addCase(Uo.rejected,(n,t)=>{n.loading=!1,n.error=t.payload})}});hp.actions;const Cy=hp.reducer,Ey=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(!1),o=ie(S=>S.userSlice.userData),{mistralProducts:i,loading:a,error:u,lastFetch:s}=ie(S=>S.productsSlice),c=$e(),d=jn(),[m,h]=y.useState(""),[b,x]=y.useState(""),[v,k]=y.useState(""),[p,f]=y.useState(""),[g,w]=y.useState(i);y.useEffect(()=>{const S=i.filter(T=>{var A,M,G;return T.name.toLowerCase().includes(m.toLowerCase())&&(b?(A=T.type)==null?void 0:A.toLowerCase().includes(b.toLowerCase()):!0)&&(v?(M=T.genre)==null?void 0:M.toLowerCase().includes(v.toLowerCase()):!0)&&(p?(G=T.brand)==null?void 0:G.toLowerCase().includes(p.toLowerCase()):!0)});w(S)},[m,i,b,v,p]);const P=Array.from(new Set(i.map(S=>{var T,A;return(A=(T=S.type)==null?void 0:T.split(" ")[0])==null?void 0:A.toLowerCase()}).filter(Boolean))),j=()=>P.map((S,T)=>l.jsx("option",{value:S,children:E(S)},T)),C=Array.from(new Set(i.map(S=>{var T;return(T=S.brand)==null?void 0:T.toLowerCase()}).filter(Boolean))),N=()=>C.map((S,T)=>l.jsx("option",{value:S,children:E(S)},T)),E=S=>S.charAt(0).toUpperCase()+S.slice(1),O=S=>{c(`/product/${S}`)},U=()=>g.map(S=>{var T,A;return l.jsxs("div",{className:"product-card",onClick:()=>O(S.id),style:{cursor:"pointer"},children:[l.jsx("img",{src:`/img/Catalog/${S.genre}/${(A=(T=S.type)==null?void 0:T.split(" ")[0])==null?void 0:A.toLowerCase()}/${S.productCode}.webp`,alt:S.name,onError:M=>{console.warn(`Imagen no encontrada: ${M.target.src}`),M.target.src="/img/Catalog/placeholder.jpg"},onLoad:()=>{console.log(`Imagen cargada correctamente para: ${S.name}`)}}),l.jsx("h3",{children:S.name}),l.jsxs("span",{children:["$",S.price]})]},S.id)}),ye=o&&o.token,xe=o?o.userData.rol:null,yt=()=>ye?l.jsxs(l.Fragment,{children:[xe==="Administrator"||xe==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,xe==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:_n,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:o.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${t?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:L,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),xt=()=>{n(!e)},_n=S=>{console.log("Toggle user dropdown"),S.preventDefault(),r(!t)},L=S=>{S.preventDefault(),d(vt()),r(!1),c("/")};return y.useEffect(()=>{const S=T=>{t&&!T.target.closest(".user-icon")&&r(!1)};return document.addEventListener("click",S),()=>{document.removeEventListener("click",S)}},[t]),y.useEffect(()=>{(!i.length||Date.now()-s>6e5)&&d(Uo())},[d,i.length,s]),a?l.jsx("div",{children:"Cargando productos..."}):u?l.jsxs("div",{children:["Error: ",u]}):l.jsxs("div",{className:"catalog-container",children:[l.jsxs("header",{className:`home-header ${e?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:xt,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),yt()]})})]}),l.jsxs("div",{children:[l.jsx("div",{className:"catalog-filter",children:l.jsxs("div",{className:"filter-container",children:[l.jsxs("div",{className:"filter",children:[l.jsx("label",{htmlFor:"buscar",children:"Buscar:"}),l.jsx("input",{type:"text",id:"buscar",value:m,onChange:S=>h(S.target.value),placeholder:"Buscar productos..."})]}),l.jsxs("div",{className:"filter",children:[l.jsx("label",{htmlFor:"genero",children:"Género:"}),l.jsxs("select",{value:v,id:"genero",onChange:S=>k(S.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),l.jsx("option",{value:"hombre",children:"Masculino"}),l.jsx("option",{value:"dama",children:"Femenino"})]})]}),l.jsxs("div",{className:"filter",children:[l.jsx("label",{htmlFor:"categoria",children:"Categoría:"}),l.jsxs("select",{value:b,id:"categoria",onChange:S=>x(S.target.value),children:[l.jsx("option",{value:"",children:"Todas"}),j()]})]}),l.jsxs("div",{className:"filter",children:[l.jsx("label",{htmlFor:"marca",children:"Marca:"}),l.jsxs("select",{value:p,id:"marca",onChange:S=>f(S.target.value),children:[l.jsx("option",{value:"",children:"Todas"}),N()]})]})]})}),l.jsx("div",{className:"product-grid",children:U()})]})]})},Ho=Ls("warehouses/fetchWarehouses",async(e,{rejectWithValue:n})=>{try{return await ey()}catch(t){return n(t)}}),_y=Hi({name:"warehouses",initialState:{warehouses:[],loading:!1,error:null,lastFetch:Date.now()},reducers:{},extraReducers:e=>{e.addCase(Ho.pending,n=>{n.loading=!0,n.error=null}).addCase(Ho.fulfilled,(n,t)=>{n.loading=!1,n.warehouses=t.payload}).addCase(Ho.rejected,(n,t)=>{n.loading=!1,n.error=t.payload})}}),Ny=_y.reducer;const Oy=()=>{var xt,_n;const{id:e}=Hf(),n=$e(),{mistralProducts:t}=ie(L=>L.productsSlice),[r,o]=y.useState(null),[i,a]=y.useState([]),[u,s]=y.useState([]),[c,d]=y.useState([]),[m,h]=y.useState([]),{warehouses:b,loading:x,error:v,lastFetch:k}=ie(L=>L.warehousesSlice),p=jn(),f=ie(L=>L.userSlice.userData),[g,w]=y.useState(!1),[P,j]=y.useState(!1),C=f&&f.token;y.useEffect(()=>{const L=t.find(S=>S.id===parseInt(e));L?o(L):n("/catalog")},[e,t,n]);const N=async L=>{try{return await Zv(L)}catch(S){return console.error("Error al obtener subproductos:",S),Promise.reject("Error al obtener subproductos")}};y.useEffect(()=>{r&&r.productCode&&N(r.productCode).then(L=>{a(L),s(L)}).catch(L=>{console.error("Error al obtener subproductos:",L)})},[r]),y.useEffect(()=>{if(i.length>0){const L=new Set,S=new Set;(u.length>0?u:i).forEach(A=>{A.color&&L.add(A.color),A.size&&S.add(A.size)}),d(Array.from(L)),h(Array.from(S))}},[i,u]),y.useEffect(()=>{(!b.length||Date.now()-k>6e5)&&p(Ho())},[p,b.length,k]);const E=L=>{if(L){const S=b.find(T=>T.id===parseInt(L));if(S&&S.stocks){const T=S.stocks.filter(M=>M.quantity>0).map(M=>M.subProductId),A=i.filter(M=>T.includes(M.id));s(A)}else s([])}else s(i)};if(!r)return l.jsx("div",{children:"Cargando producto..."});const O=f?f.userData.rol:null,U=()=>C?l.jsxs(l.Fragment,{children:[O==="Administrator"||O==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,O==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:xe,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:f.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${P?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:yt,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),ye=()=>{w(!g)},xe=L=>{console.log("Toggle user dropdown"),L.preventDefault(),j(!P)},yt=L=>{L.preventDefault(),p(vt()),j(!1),navigateTo("/")};return l.jsxs("div",{className:"product-page",children:[l.jsxs("header",{className:`home-header ${g?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:ye,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/catalog",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),U()]})})]}),l.jsxs("div",{className:"product-header",children:[l.jsx("button",{onClick:()=>n("/catalog"),className:"back-button",children:"←"}),l.jsxs("div",{className:"store-filters",children:[l.jsx("span",{className:"store-filter-text",children:"Tienda:"}),l.jsxs("select",{onChange:L=>{const S=L.target.value;E(S)},defaultValue:"",children:[l.jsx("option",{value:"",children:"Todas las Tiendas"}),b.map(L=>l.jsx("option",{value:L.id,children:L.name},L.id))]})]})]}),l.jsxs("div",{className:"product-details",children:[l.jsx("div",{className:"product-image",children:l.jsx("img",{src:`/img/Catalog/${r.genre}/${(_n=(xt=r.type)==null?void 0:xt.split(" ")[0])==null?void 0:_n.toLowerCase()}/${r.productCode}.webp`,alt:r.name})}),l.jsxs("div",{className:"product-info",children:[l.jsxs("div",{className:"product-info-main",children:[l.jsx("h1",{children:r.name}),l.jsxs("p",{className:"product-price",children:["$",r.price]}),l.jsxs("p",{className:"product-brand",children:["Marca: ",r.brand]}),l.jsxs("p",{className:"product-category",children:["Categoría: ",r.type]}),l.jsxs("p",{className:"product-gender",children:["Género: ",r.genre]}),l.jsxs("p",{className:"product-code",children:["Código: ",r.productCode]}),r.description&&l.jsxs("div",{className:"product-description",children:[l.jsx("h3",{children:"Descripción"}),l.jsx("p",{children:r.description})]})]}),l.jsxs("div",{className:"product-info-additional",children:[l.jsxs("div",{className:"product-colors",children:[l.jsx("h4",{children:"Colores Disponibles:"}),l.jsx("ul",{children:c.length>0?c.map((L,S)=>l.jsx("li",{children:L},S)):l.jsx("li",{children:"No hay colores disponibles"})})]}),l.jsxs("div",{className:"product-sizes",children:[l.jsx("h4",{children:"Talles Disponibles:"}),l.jsx("ul",{children:m.length>0?m.map((L,S)=>l.jsx("li",{children:L},S)):l.jsx("li",{children:"No hay talles disponibles"})})]})]})]})]})]})};const Ty=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(!1),o=ie(E=>E.userSlice.userData),i=$e(),a=jn(),u=o&&o.token,s=o?o.userData.rol:null,c=o?o.token:null,[d,m]=y.useState(""),[h,b]=y.useState(""),[x,v]=y.useState(""),[k,p]=y.useState(0),f=()=>u?l.jsxs(l.Fragment,{children:[s==="Administrator"||s==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,s==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:w,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:o.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${t?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:P,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),g=()=>{n(!e)},w=E=>{console.log("Toggle user dropdown"),E.preventDefault(),r(!t)},P=E=>{E.preventDefault(),a(vt()),r(!1),i("/")};y.useEffect(()=>{const E=O=>{t&&!O.target.closest(".user-icon")&&r(!1)};return document.addEventListener("click",E),()=>{document.removeEventListener("click",E)}},[t]);const j=async()=>{const E=document.getElementById("cliente-buscar").value;if(E)try{const O=await ny(E,c);if(O.ci){m(O.id);const U=ye=>{const xe=ye.match(/Value\s*=\s*(.+?)\s*}/);return xe?xe[1]:ye};b(U(O.name)),v(U(O.email)),p(O.points)}else alert("Cliente no encontrado")}catch(O){console.error("Error al buscar cliente:",O),alert("Error al buscar cliente")}else alert("Por favor, ingresa una Cédula válida.")},C=async()=>{const E=document.getElementById("puntos-canjear").value;if(window.confirm(`¿Confirmas el canje por ${E} puntos?`))if(E)try{const O=await ty({clientId:d,points:E},c);O.id?(document.getElementById("mensaje-canjeo").innerText="Canjeo realizado con éxito",p(U=>U-E),N(O)):document.getElementById("mensaje-canjeo").innerText="Error en el canjeo"}catch(O){console.error("Error al canjear puntos:",O),document.getElementById("mensaje-canjeo").innerText="Error al canjear puntos"}else document.getElementById("mensaje-canjeo").innerText="Por favor, ingresa una cantidad válida de puntos."},N=E=>l.jsxs("div",{className:"mensaje-exito",children:[l.jsx("p",{children:"Canje realizado con éxito:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["ID: ",E.id]}),l.jsxs("li",{children:["Cliente: ",E.clientId]}),l.jsxs("li",{children:["Puntos Canjeados: ",E.pointsUsed]})]})]});return l.jsxs("div",{className:"canje-container",children:[l.jsxs("header",{className:`home-header ${e?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:g,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/catalog",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),f()]})})]}),l.jsxs("div",{className:"canje-titulo",children:[l.jsx("h1",{children:"Canje de Puntos"}),l.jsx("p",{children:"Bienvenido a la página de Canje de Puntos. Aquí podrás realizar canjes para clientes."})]}),l.jsxs("div",{className:"canje-contenido",children:[l.jsxs("div",{className:"buscar-cliente",children:[l.jsx("label",{htmlFor:"cliente-buscar",children:"Buscar Cliente por Cédula:"}),l.jsx("input",{type:"text",id:"cliente-buscar",placeholder:"Ingresa la CI del cliente, sin puntos ni guiones"})]}),l.jsx("button",{onClick:j,children:"Buscar Cliente"}),l.jsx("p",{id:"mensaje-cliente"})]}),l.jsxs("div",{className:"ficha-cliente",children:[l.jsx("h2",{children:"Ficha del Cliente"}),l.jsxs("p",{children:["ID: ",d]}),l.jsxs("p",{children:["Nombre: ",h]}),l.jsxs("p",{children:["Correo: ",x]}),l.jsxs("p",{children:["Puntos Disponibles: ",k]})]}),l.jsxs("div",{className:"canje-acciones",children:[l.jsxs("div",{className:"cantidad-puntos",children:[l.jsx("label",{htmlFor:"puntos-canjear",children:"Cantidad de Puntos a Canjear:"}),l.jsx("input",{type:"number",id:"puntos-canjear",min:"1"})]}),l.jsx("button",{onClick:C,children:"Canjear Puntos"}),l.jsx("p",{id:"mensaje-canjeo"})]})]})};const Ft=Ls("promotions/fetchPromotions",async(e,{rejectWithValue:n})=>{try{return await ry(e)}catch(t){return n(t)}}),mp=Hi({name:"promotions",initialState:{promotions:[],loading:!1,error:null,lastFetch:null},reducers:{setPromotions:(e,n)=>{e.promotions=n.payload,e.lastFetch=Date.now()},clearPromotions:e=>{e.promotions=[],e.lastFetch=null},clearError:e=>{e.error=null}},extraReducers:e=>{e.addCase(Ft.pending,n=>{n.loading=!0,n.error=null}).addCase(Ft.fulfilled,(n,t)=>{n.loading=!1,n.promotions=t.payload,n.lastFetch=Date.now()}).addCase(Ft.rejected,(n,t)=>{n.loading=!1,n.error=t.payload})}});mp.actions;const Ry=mp.reducer,Dy=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(!1),o=ie(w=>w.userSlice.userData),{promotions:i,loading:a,error:u}=ie(w=>w.promotionsSlice),s=$e(),c=jn(),d=o&&o.token,m=o?o.userData.rol:null,h=o?o.token:null;y.useEffect(()=>{h&&c(Ft(h))},[h,c]);const b=()=>a?l.jsx("p",{children:"Cargando promociones..."}):u?l.jsxs("p",{children:["Error al cargar promociones: ",u]}):i.length>0?l.jsx("ul",{children:i.map(w=>l.jsxs("div",{className:"promotion-item",onClick:()=>x(w.id),children:[l.jsx("h4",{children:w.description}),l.jsx("p",{children:w.type}),l.jsxs("p",{children:["ID: ",w.id]})]},w.id))}):l.jsx("p",{children:"No hay promociones disponibles."}),x=w=>{s(`/admin/promotions/update/${w}`)},v=()=>{h&&c(Ft(h))},k=()=>d?l.jsxs(l.Fragment,{children:[m==="Administrator"||m==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,m==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:f,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:o.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${t?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:g,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),p=()=>{n(!e)},f=w=>{console.log("Toggle user dropdown"),w.preventDefault(),r(!t)},g=w=>{w.preventDefault(),c(vt()),r(!1),s("/")};return y.useEffect(()=>{const w=P=>{t&&!P.target.closest(".user-icon")&&r(!1)};return document.addEventListener("click",w),()=>{document.removeEventListener("click",w)}},[t]),l.jsxs("div",{className:"admin-container",children:[l.jsxs("header",{className:`home-header ${e?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:p,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/catalog",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),k()]})})]}),l.jsxs("div",{className:"acciones-admin",children:[l.jsxs("div",{className:"promociones",children:[l.jsx("h2",{children:"Promociones"}),l.jsxs("div",{className:"crear-promociones",children:[l.jsx("h3",{children:"Crear Nueva Promoción"}),l.jsx("p",{children:"Acceder para crear una nueva promoción de puntos Sarga"}),l.jsx("button",{children:l.jsx("a",{href:"/crear-promocion",children:"Crear Promoción"})})]}),l.jsxs("div",{className:"gestionar-promociones",children:[l.jsx("h3",{children:"Gestionar Promociones"}),l.jsx("p",{children:"Acceder para ver y gestionar las promociones existentes"}),l.jsx("button",{className:"actualizar-promos-btn",onClick:v,type:"button",children:"Actualizar Lista"}),b()]})]}),l.jsxs("div",{className:"reportes",children:[l.jsx("h2",{children:"Reportes"}),l.jsxs("div",{className:"reportes-ventas",children:[l.jsx("h3",{children:"Reportes Importación Compras"}),l.jsx("button",{children:"Ver Reportes"})]}),l.jsxs("div",{className:"reportes-productos",children:[l.jsx("h3",{children:"Reportes Importación Productos"}),l.jsx("button",{children:"Ver Reportes"})]}),l.jsxs("div",{className:"reporte-canjes",children:[l.jsx("h3",{children:"Reporte Canjes"}),l.jsx("button",{children:"Ver Reporte"})]})]})]})]})};const Ay=()=>{const{id:e}=Hf(),[n,t]=y.useState(!1),[r,o]=y.useState(!1),[i,a]=y.useState(null),u=ie(j=>j.userSlice.userData),s=$e(),c=jn(),d=u&&u.token,m=u?u.userData.rol:null,h=u?u.token:null,b=ie(j=>j.promotionsSlice.promotions);y.useEffect(()=>{const j=b.find(C=>C.id===parseInt(e));j&&a(j)},[b,e]),y.useEffect(()=>{h&&b.length===0&&c(Ft(h))},[h,b.length,c]);const x=j=>{j.preventDefault(),console.log("Actualizando promoción:",i)},v=()=>d?l.jsxs(l.Fragment,{children:[m==="Administrator"||m==="Seller"?l.jsx("li",{children:l.jsx("a",{href:"/canje",children:"Canje de Puntos"})}):null,m==="Administrator"?l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"Administración"})}):null,l.jsxs("li",{className:"user-icon",children:[l.jsxs("div",{onClick:p,className:"user-icon-container",children:[l.jsx("img",{src:gt,alt:"Usuario",style:{width:32,height:32,borderRadius:"50%"}}),l.jsx("span",{className:"user-name",children:u.userData.name})]}),l.jsxs("ul",{className:`user-dropdown ${r?"show":""}`,children:[l.jsx("li",{children:l.jsx("a",{href:"/profile",children:"Perfil"})}),l.jsx("li",{children:l.jsx("a",{onClick:f,href:"/",children:"Cerrar Sesión"})})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx("a",{href:"/register",children:"Registrarse"})}),l.jsx("li",{children:l.jsx("a",{href:"/login",children:"Iniciar Sesión"})})]}),k=()=>{t(!n)},p=j=>{console.log("Toggle user dropdown"),j.preventDefault(),o(!r)},f=j=>{j.preventDefault(),c(vt()),o(!1),s("/")};y.useEffect(()=>{const j=C=>{r&&!C.target.closest(".user-icon")&&o(!1)};return document.addEventListener("click",j),()=>{document.removeEventListener("click",j)}},[r]);const g=()=>{if(!i)return null;switch(i.type){case"Amount":return w();case"Date":return P()}},w=()=>l.jsxs("form",{onSubmit:x,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"description",children:"Descripción:"}),l.jsx("input",{type:"text",id:"description",value:i.description||"",onChange:j=>a({...i,description:j.target.value})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"amount",children:"Monto por punto:"}),l.jsx("input",{type:"number",id:"amount",value:i.amountPerPoint||"",onChange:j=>a({...i,amountPerPoint:j.target.value})})]})]}),P=()=>l.jsxs("form",{onSubmit:x,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"description",children:"Descripción:"}),l.jsx("input",{type:"text",id:"description",value:i.description||"",onChange:j=>a({...i,description:j.target.value})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"startDate",children:"Fecha de Inicio:"}),l.jsx("input",{type:"date",id:"startDate",value:i.promotionDateStart||"",onChange:j=>a({...i,promotionDateStart:j.target.value})}),l.jsx("label",{htmlFor:"endDate",children:"Fecha de Fin:"}),l.jsx("input",{type:"date",id:"endDate",value:i.promotionDateEnd||"",onChange:j=>a({...i,promotionDateEnd:j.target.value})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"points",children:"Puntos:"}),l.jsx("input",{type:"number",id:"points",value:i.pointsPerDate||"",onChange:j=>a({...i,pointsPerDate:j.target.value})})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"isActive",children:"Habilitada:"}),l.jsx("input",{type:"checkbox",id:"isActive",checked:i.isActive||!1,onChange:j=>a({...i,isActive:j.target.checked})})]}),l.jsx("button",{type:"submit",children:"Actualizar Promoción"})]});return l.jsxs("div",{className:"promo-container",children:[l.jsxs("header",{className:`home-header ${n?"nav-open":""}`,children:[l.jsx("figure",{children:l.jsx("a",{href:"/",children:l.jsx("img",{src:Cn,alt:"Sarga Logo"})})}),l.jsxs("button",{className:"mobile-menu-btn",onClick:k,"aria-label":"Toggle menu",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("nav",{children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"/catalog",children:"Catálogo"})}),l.jsx("li",{children:l.jsx("a",{href:"/",children:"Puntos Sarga"})}),v()]})})]}),l.jsxs("div",{className:"promo-content",children:[l.jsx("button",{onClick:()=>s("/admin"),className:"back-button",children:"← Volver a Administración"}),l.jsx("h2",{children:"Actualizar Promoción"}),i?g():l.jsx("p",{children:"Cargando promoción..."})]})]})},Ly=({children:e})=>{const n=ie(t=>t.userSlice.userData);return!n||!n.token?l.jsx(Xt,{to:"/",replace:!0}):e},vc=({children:e})=>{const n=ie(o=>o.userSlice.userData),t=n&&n.token,r=n?n.userData.rol:null;return t?r!=="Administrator"?l.jsx(Xt,{to:"/",replace:!0}):e:l.jsx(Xt,{to:"/login",replace:!0})},zy=({children:e})=>{const n=ie(o=>o.userSlice.userData),t=n&&n.token,r=n?n.userData.rol:null;return t?r!=="Administrator"&&r!=="Seller"?l.jsx(Xt,{to:"/",replace:!0}):e:l.jsx(Xt,{to:"/login",replace:!0})};function My(){const e=ie(r=>r.userSlice.userData),n=$e(),t=Pn();return y.useEffect(()=>{e&&e.token&&(t.pathname==="/login"||t.pathname==="/register")&&n("/")},[e,t,n]),l.jsx("div",{className:"App",children:l.jsxs(v0,{children:[l.jsx(He,{path:"/",element:l.jsx(Kv,{})}),l.jsx(He,{path:"/login",element:l.jsx(Sy,{})}),l.jsx(He,{path:"/register",element:l.jsx(jy,{})}),l.jsx(He,{path:"/catalog",element:l.jsx(Ey,{})}),l.jsx(He,{path:"/product/:id",element:l.jsx(Oy,{})}),l.jsx(He,{path:"/profile",element:l.jsx(Ly,{children:l.jsx(Py,{})})}),l.jsx(He,{path:"/canje",element:l.jsx(zy,{children:l.jsx(Ty,{})})}),l.jsx(He,{path:"/admin",element:l.jsx(vc,{children:l.jsx(Dy,{})})}),l.jsx(He,{path:"/admin/promotions/update/:id",element:l.jsx(vc,{children:l.jsx(Ay,{})})}),l.jsx(He,{path:"*",element:l.jsx(Xt,{to:"/",replace:!0})})]})})}const Iy=Sv({reducer:{userSlice:Wv,productsSlice:Cy,warehousesSlice:Ny,promotionsSlice:Ry}});Ea.createRoot(document.getElementById("root")).render(l.jsx(tn.StrictMode,{children:l.jsx(H0,{children:l.jsx(cg,{store:Iy,children:l.jsx(My,{})})})}));
