(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),i=e(1),a=(e(9),e(0)),u=function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(!1),d=Object(r.a)(c,2),l=d[0],b=d[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Dynamic list of Goods"}),Object(a.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){s().then(o).catch((function(){return b(!0)}))},children:"Load all goods"}),Object(a.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(o).catch((function(){return b(!0)}))},children:"Load 5 first goods"}),Object(a.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o).catch((function(){return b(!0)}))},children:"Load red goods"}),l?Object(a.jsx)("p",{children:"error"}):Object(a.jsx)(u,{goods:e})]})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.607b36b6.chunk.js.map