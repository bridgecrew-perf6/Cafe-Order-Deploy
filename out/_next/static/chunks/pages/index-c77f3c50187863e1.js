(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7118)}])},7153:function(e,n,t){"use strict";var r=t(5893),a=t(5675),i=t.n(a),s=t(2741),c=t.n(s),o=t(1664),l=t.n(o);n.Z=function(e){var n=e.cafe;return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)(l(),{href:"/product/".concat(n._id),passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(i(),{src:n.img,alt:"",width:"500",height:"500"})})}),(0,r.jsx)("h1",{className:c().title,children:n.title}),(0,r.jsxs)("span",{className:c().price,children:["$",n.prices[0]]}),(0,r.jsx)("p",{className:c().desc,children:n.desc})]})}},7118:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return F},default:function(){return L}});var r=t(5893),a=t(9008),i=t(5675),s=t.n(i),c=t(7294),o=t(4051),l=t.n(o),u=t(551),d=t.n(u),p=t(9669),m=t.n(p),f=(t(1163),t(5434));function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,a)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(e){var n=e.setClose,t=(0,c.useState)(null),a=t[0],i=t[1],s=(0,c.useState)(null),o=s[0],u=s[1],p=(0,c.useState)(null),_=p[0],v=p[1],N=(0,c.useState)([]),g=N[0],C=N[1],b=(0,c.useState)([]),y=b[0],w=b[1],S=(0,c.useState)(null),A=S[0],k=S[1],E=function(e,n){var t=g;t[n]=e.target.value,C(t)},O=function(e){k(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}({},A,x({},e.target.name,e.target.value)))},P=function(){var e,t=(e=l().mark((function e(){var t,r,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","uploads"),e.prev=3,e.next=6,m().post("https://api.cloudinary.com/v1_1/dz47zx0rk/image/upload",t);case 6:return r=e.sent,i=r.data.url,s={title:o,desc:_,prices:g,extraOptions:y,img:i},e.next=11,m().post("http://localhost:3000/api/products",s);case 11:n(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){h(i,r,a,s,c,"next",e)}function c(e){h(i,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:d().container,children:(0,r.jsxs)("div",{className:d().wrapper,children:[(0,r.jsx)("span",{onClick:function(){return n(!0)},className:d().close,children:(0,r.jsx)(f.B4e,{fontSize:"27px"})}),(0,r.jsx)("h1",{children:"Add a new Drink"}),(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("label",{className:d().label,children:"Choose an image"}),(0,r.jsx)("input",{type:"file",onChange:function(e){return i(e.target.files[0])}})]}),(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("label",{className:d().label,children:"Title"}),(0,r.jsx)("input",{className:d().input,type:"text",onChange:function(e){return u(e.target.value)}})]}),(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("label",{className:d().label,children:"Desc"}),(0,r.jsx)("textarea",{rows:4,type:"text",onChange:function(e){return v(e.target.value)}})]}),(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("label",{className:d().label,children:"Prices"}),(0,r.jsxs)("div",{className:d().priceContainer,children:[(0,r.jsx)("input",{className:"".concat(d().input," ").concat(d().inputSm),type:"number",placeholder:"Small",onChange:function(e){return E(e,0)}}),(0,r.jsx)("input",{className:"".concat(d().input," ").concat(d().inputSm),type:"number",placeholder:"Medium",onChange:function(e){return E(e,1)}}),(0,r.jsx)("input",{className:"".concat(d().input," ").concat(d().inputSm),type:"number",placeholder:"Large",onChange:function(e){return E(e,2)}})]})]}),(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("label",{className:d().label,children:"Extra"}),(0,r.jsxs)("div",{className:d().extra,children:[(0,r.jsx)("input",{className:"".concat(d().input," ").concat(d().inputSm),type:"text",placeholder:"Item",name:"text",onChange:O}),(0,r.jsx)("input",{className:"".concat(d().input," ").concat(d().inputSm),type:"number",placeholder:"Price",name:"price",onChange:O}),(0,r.jsx)("button",{className:d().extraButton,onClick:function(e){w((function(e){return j(e).concat([A])}))},children:"Add"})]}),(0,r.jsx)("div",{className:d().extraItems,children:y.map((function(e){return(0,r.jsx)("span",{className:d().extraItem,children:e.text},e.text)}))})]}),(0,r.jsx)("button",{className:d().addButton,onClick:P,children:"Create"})]})})},N=function(e){var n=e.setClose;return(0,r.jsx)("div",{onClick:function(){return n(!1)},className:d().mainAddButton,children:"Add New Drink"})},g=t(3916),C=t.n(g),b=t(7153),y=function(e){var n=e.cafeList;return(0,r.jsxs)("div",{className:C().container,children:[(0,r.jsx)("h1",{className:C().title,children:"THE BEST COFFEE IN TOWN"}),(0,r.jsx)("p",{className:C().desc,children:"Coffee is our soul. Focusing on the minute; being meticulous over every detail. Everything we do is considered to give an unparalleled experience of simplicity with substance."}),(0,r.jsx)("div",{className:C().wrapper,children:n.map((function(e){return(0,r.jsx)(b.Z,{cafe:e},e._id)}))})]})},w=t(9840),S=t.n(w),A=t(3750),k=function(){var e=(0,c.useState)(0),n=e[0],t=e[1],a=function(e){"l"===e&&t(0!==n?n-1:2),"r"===e&&t(2!==n?n+1:0)};return(0,r.jsxs)("div",{className:S().container,children:[(0,r.jsx)("div",{className:S().arrowContainer,style:{left:"30px"},onClick:function(){return a("l")},children:(0,r.jsx)(A.RVs,{fontSize:"50px",color:"white"})}),(0,r.jsx)("div",{className:S().wrapper,style:{transform:"translateX(".concat(-100*n,"vw)")},children:[{id:1,image:"/img/slide1.jpg",desc:"Enjoy our coffee!"},{id:2,image:"/img/slide2.jpg",desc:"Latte Lovers"},{id:3,image:"/img/slide3.jpg",desc:"Fair Trade Beans"}].map((function(e){return(0,r.jsxs)("div",{className:S().imgContainer,children:[(0,r.jsx)("div",{className:S().desc,children:e.desc}),(0,r.jsx)(s(),{src:e.image,alt:"",layout:"fill",objectFit:"cover"})]},e.id)}))}),(0,r.jsx)("div",{className:S().arrowContainer,style:{right:0},onClick:function(){return a("r")},children:(0,r.jsx)(A.PxJ,{fontSize:"50px",color:"white",onClick:function(){return a("r")}})})]})},E=t(5205),O=t.n(E),P=function(){return(0,r.jsx)("div",{className:O().container,children:(0,r.jsxs)("div",{className:O().slide,children:[(0,r.jsxs)("div",{className:O().item,children:[(0,r.jsxs)("h1",{className:O().h1,children:["Welcome to",(0,r.jsx)("br",{}),"our cafe"]}),(0,r.jsx)("h2",{className:O().desc,children:"Life is short, stay awake for it."})]}),(0,r.jsxs)("div",{className:O().item,children:[(0,r.jsx)("h2",{className:O().desc,children:"WE ARE OPEN"}),(0,r.jsx)("h2",{className:O().h2,children:"8AM - 9PM"})]})]})})},T=t(7160),I=t.n(T),F=!0;function L(e){var n=e.cafeList,t=e.admin,i=(0,c.useState)(!0),s=i[0],o=i[1];return(0,r.jsxs)("div",{className:I().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Cafe Lynx in NY"}),(0,r.jsx)("meta",{name:"description",content:"Good coffee makes your day"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(P,{}),(0,r.jsx)(k,{}),t&&(0,r.jsx)(N,{setClose:o}),(0,r.jsx)(y,{cafeList:n}),!s&&(0,r.jsx)(v,{setClose:o})]})}},551:function(e){e.exports={mainAddButton:"Add_mainAddButton__jwM2b",container:"Add_container__nehfK",wrapper:"Add_wrapper__JHSck",close:"Add_close__1Bqhj",item:"Add_item__pgcYA",label:"Add_label__jItnq",input:"Add_input__EuiD8",priceContainer:"Add_priceContainer__WuGaE",inputSm:"Add_inputSm__dPDFU",extra:"Add_extra__3fi1Q",extraItems:"Add_extraItems__GWk48",extraItem:"Add_extraItem__9Z9sH",addButton:"Add_addButton__6OqWh"}},2741:function(e){e.exports={container:"CafeCard_container__lTPvH",title:"CafeCard_title__I6nEl",price:"CafeCard_price__qMbZl",desc:"CafeCard_desc__WZomh"}},3916:function(e){e.exports={container:"CafeList_container__eHsjY",title:"CafeList_title__kITXF",desc:"CafeList_desc__QgTEh",wrapper:"CafeList_wrapper___WbAf"}},9840:function(e){e.exports={container:"Featured_container__djdhp",arrowContainer:"Featured_arrowContainer__eRP7q",wrapper:"Featured_wrapper__Up3ZO",imgContainer:"Featured_imgContainer__bP_Gp",desc:"Featured_desc__uCNWO"}},7160:function(){},5205:function(e){e.exports={container:"Top_container__IPNNi",slide:"Top_slide__coSOq",item:"Top_item__y5UNH",h1:"Top_h1__rdqaX",desc:"Top_desc__c5vMP",h2:"Top_h2__ILcEg"}},9008:function(e,n,t){e.exports=t(3121)},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[228,669,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);