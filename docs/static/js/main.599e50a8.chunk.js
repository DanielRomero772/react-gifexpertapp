(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(10),o=n(8),d=n.n(o),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2?(t((function(e){return[i].concat(Object(u.a)(e))})),o("")):d.a.fire({title:"Error",icon:"error",text:i.trim().length>0?"Longitud incorrecta, deben ser minimo 3 caracteres":"Debes ingresar un texto",allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1})},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})},l=n(11),b=n(6),f=n.n(b),p=n(9),m=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=dbPE7JDPZSL03MA1R0u2kEgPD7T5CbJn"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){m(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:" animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{children:"Loading"}),Object(a.jsx)("div",{className:"card-grid  animate__animated animate__fadeIn",children:c.map((function(e){return Object(a.jsx)(O,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(r.useState)(["Goku"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(18),n(19);i.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.599e50a8.chunk.js.map