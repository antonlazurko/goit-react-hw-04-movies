(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{33:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},34:function(t,e,r){"use strict";r.d(e,"e",(function(){return f})),r.d(e,"d",(function(){return l})),r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return v}));var n=r(36),o=r.n(n),i=r(38),a="https://api.themoviedb.org/3",c="d66f8875c56322c0e6582f80570eea14";function u(){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(o.a.mark((function t(){var e,r,n=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t.next=3,fetch(e);case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return u("".concat(a,"/trending/all/day?api_key=").concat(c))}function l(t){return u("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(t))}function h(t){return u("".concat(a,"/movie/").concat(t,"?api_key=").concat(c))}function p(t){return u("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(c))}function v(t){return u("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(c))}},35:function(t,e,r){"use strict";e.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},36:function(t,e,r){t.exports=r(37)},37:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return D()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var b={};b[i]=function(){return this};var j=Object.getPrototypeOf,w=j&&j(j(S([])));w&&w!==r&&n.call(w,i)&&(b=w);var x=g.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},38:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},44:function(t,e,r){t.exports={goBackBtn:"MovieDetailsPage_goBackBtn__q58K2",image:"MovieDetailsPage_image__HbfjX",Cast:"MovieDetailsPage_Cast__yEAmy",Reviews:"MovieDetailsPage_Reviews__27jRe"}},54:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r(1),o=r(33),i=r(0),a=r(2),c=r(8),u=r(34),s=r(35),f=r(44),l=r.n(f),h=Object(i.lazy)((function(){return r.e(4).then(r.bind(null,45))})),p=Object(i.lazy)((function(){return r.e(0).then(r.bind(null,46))})),v=Object(i.lazy)((function(){return r.e(5).then(r.bind(null,48))}));function d(){var t=Object(i.useState)(null),e=Object(o.a)(t,2),r=e[0],f=e[1],d=Object(i.useState)(s.a.IDLE),y=Object(o.a)(d,2),m=y[0],g=y[1],b=Object(i.useState)(""),j=Object(o.a)(b,2),w=j[0],x=j[1],O=Object(a.h)().movieId,E=Object(a.i)(),_=E.url,L=E.path,k=Object(a.f)(),N=Object(a.g)();return Object(i.useEffect)((function(){g(s.a.PENDING),u.b(O).then((function(t){f(t),g(s.a.RESOLVED)})).catch((function(t){x(t),g(s.a.REJECTED)}))}),[O]),Object(n.jsxs)(n.Fragment,{children:[m===s.a.PENDING&&Object(n.jsx)("p",{children:"Download movie"}),m===s.a.REJECTED&&Object(n.jsx)(h,{error:w}),m===s.a.RESOLVED&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){N.state&&N.state.from?k.push(N.state.from):k.push(N.state="/movies")},className:l.a.goBackBtn,children:"Go back"}),Object(n.jsx)("h1",{children:r.title}),r.poster_path&&Object(n.jsx)("img",{className:l.a.image,src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.title}),Object(n.jsxs)(c.c,{to:"".concat(_,"/Cast"),className:l.a.Cast,children:['Cast of "',r.title,'" movie']}),Object(n.jsxs)(c.c,{to:"".concat(_,"/Reviews"),className:l.a.Reviews,children:['Reviews of "',r.title,'" movie']}),Object(n.jsx)("hr",{}),Object(n.jsxs)(i.Suspense,{fallback:Object(n.jsx)("div",{children:"Downloading..."}),children:[Object(n.jsx)(a.a,{path:"".concat(L,"/Cast"),children:Object(n.jsx)(p,{movieId:O})}),Object(n.jsx)(a.a,{path:"".concat(L,"/Reviews"),children:Object(n.jsx)(v,{movieId:O})})]})]})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.5a356064.chunk.js.map