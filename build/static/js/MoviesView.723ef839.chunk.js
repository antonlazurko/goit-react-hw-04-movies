(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{34:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return b})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return h})),a.d(t,"c",(function(){return j}));var c=a(36),n=a.n(c),r=a(38),o="https://api.themoviedb.org/3",i="d66f8875c56322c0e6582f80570eea14";function s(){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(n.a.mark((function e(){var t,a,c=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch(t);case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return s("".concat(o,"/trending/all/day?api_key=").concat(i))}function b(e){return s("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e))}function m(e){return s("".concat(o,"/movie/").concat(e,"?api_key=").concat(i))}function h(e){return s("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i))}function j(e){return s("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i))}},35:function(e,t,a){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},42:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__28z4-",ImageGallery:"Searchbar_ImageGallery__2Ieky",ImageGalleryItem:"Searchbar_ImageGalleryItem__35Tqm",ImageGalleryItem_Image:"Searchbar_ImageGalleryItem_Image__2cM2l"}},43:function(e,t,a){e.exports={list:"MoviesView_list__1qEQb",item:"MoviesView_item__3O6Sj",title:"MoviesView_title__2hfYe"}},55:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var c=a(1),n=a(50),r=a(33),o=a(0),i=a(8),s=a(39),u=a(2),l=a(34),b=(a(41),a(42)),m=a.n(b);function h(e){var t=e.onSearchbarSubmit,a=Object(o.useState)(""),n=Object(r.a)(a,2),i=n[0],u=n[1];return Object(c.jsx)("header",{className:m.a.Searchbar,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.trim()?(t(i.toLowerCase()),u("")):Object(s.b)("Type something to find.")},className:m.a.SearchForm,children:[Object(c.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(c.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(c.jsx)("input",{className:m.a.SearchFormInput,value:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){u(e.currentTarget.value)}})]})})}var j=a(35),f=a(43),p=a.n(f);function d(){var e,t=Object(u.f)(),a=Object(u.g)(),b=Object(o.useState)(null!==(e=new URLSearchParams(a.search).get("query"))&&void 0!==e?e:""),m=Object(r.a)(b,2),f=m[0],d=m[1],O=Object(o.useState)([]),v=Object(r.a)(O,2),S=v[0],_=v[1],E=Object(o.useState)(j.a.IDLE),x=Object(r.a)(E,2),y=x[0],g=x[1],I=Object(o.useState)(""),N=Object(r.a)(I,2),w=N[0],D=N[1];return Object(o.useEffect)((function(){""!==f&&(g(j.a.PENDING),l.d(f).then((function(e){var t=e.results;_(t),g(j.a.RESOLVED)})).catch((function(e){D(e),g(j.a.REJECTED)})))}),[f]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{onSearchbarSubmit:function(e){t.push(Object(n.a)(Object(n.a)({},a),{},{search:"query=".concat(e)})),d(e)}}),Object(c.jsx)(s.a,{autoClose:3e3,position:"top-center"}),y===j.a.PENDING&&Object(c.jsx)("p",{children:"Download movie collection"}),y===j.a.REJECTED&&Object(c.jsx)("p",{children:w}),y===j.a.RESOLVED&&Object(c.jsx)("ul",{className:p.a.list,children:S.map((function(e){return Object(c.jsx)("li",{className:p.a.item,children:Object(c.jsx)(i.b,{className:p.a.title,to:{pathname:"/movies/".concat(e.id),state:{from:a}},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=MoviesView.723ef839.chunk.js.map