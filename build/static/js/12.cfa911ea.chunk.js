(this["webpackJsonplazurko-movies"]=this["webpackJsonplazurko-movies"]||[]).push([[12],{121:function(t,r,e){t.exports=e(123)},122:function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void e(f)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.d(r,"a",(function(){return o}))},123:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(M){c=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=j(a,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=v;var c=s(t,r,e);if("normal"===c.type){if(n=e.done?p:h,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(M){return{type:"throw",arg:M}}}t.wrap=f;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function y(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(F([])));L&&L!==e&&n.call(L,i)&&(w=L);var x=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function e(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new O(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),c(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},126:function(t,r,e){"use strict";e.d(r,"a",(function(){return s}));var n=e(2),o=function(t,r,e,n,o){if(t.exists){var i=t.data(r);return o&&(i=o(i)),e&&(i[e]=t.id),n&&(i[n]=t.ref),i}},i=function(){return(i=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},a=function(t){return{loading:void 0===t||null===t,value:t}},u=function(t){var r=t?t():void 0,e=Object(n.useReducer)((function(t,r){switch(r.type){case"error":return i({},t,{error:r.error,loading:!1,value:void 0});case"reset":return a(r.defaultValue);case"value":return i({},t,{error:void 0,loading:!1,value:r.value});default:return t}}),a(r)),o=e[0],u=e[1],c=function(){var r=t?t():void 0;u({type:"reset",defaultValue:r})},f=function(t){u({type:"error",error:t})},s=function(t){u({type:"value",value:t})};return Object(n.useMemo)((function(){return{error:o.error,loading:o.loading,reset:c,setError:f,setValue:s,value:o.value}}),[o.error,o.loading,c,f,s,o.value])},c=function(t,r){var e=!t&&!r,n=!!t&&!!r&&t.isEqual(r);return e||n},f=function(t,r){return function(t,r,e){var o=Object(n.useRef)(t);return Object(n.useEffect)((function(){r(t,o.current)||(o.current=t,e&&e())})),o}(t,c,r)},s=function(t,r){return h(!0,t,r)},l=function(t,r,e){var o=u(),i=o.error,a=o.loading,c=o.reset,s=o.setError,l=o.setValue,h=o.value,v=f(r,c);Object(n.useEffect)((function(){if(v.current){if(t){var r=e&&e.snapshotListenOptions?v.current.onSnapshot(e.snapshotListenOptions,l,s):v.current.onSnapshot(l,s);return function(){r()}}v.current.get(e?e.getOptions:void 0).then(l).catch(s)}else l(void 0)}),[v.current]);var p=[h,a,i];return Object(n.useMemo)((function(){return p}),p)},h=function(t,r,e){var i=e?e.idField:void 0,a=e?e.refField:void 0,u=e?e.snapshotOptions:void 0,c=e?e.transform:void 0,f=l(t,r,e),s=f[0],h=f[1],v=f[2],p=[Object(n.useMemo)((function(){return s?s.docs.map((function(t){return o(t,u,i,a,c)})):void 0}),[s,u,i,a,c]),h,v];return Object(n.useMemo)((function(){return p}),p)}},134:function(t,r,e){"use strict";var n=e(45),o=e(46);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=o(e(2)),a=(0,n(e(47)).default)(i.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");r.default=a},135:function(t,r,e){"use strict";var n=e(45),o=e(46);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=o(e(2)),a=(0,n(e(47)).default)(i.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}),"AddToPhotos");r.default=a}}]);
//# sourceMappingURL=12.cfa911ea.chunk.js.map