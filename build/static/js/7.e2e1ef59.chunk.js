(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[7],{412:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){return null};t.default=c},413:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){return null};t.default=c},484:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},s=a(48),i=function(e,t){return c.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};i.displayName="UnorderedListOutlined";t.a=c.forwardRef(i)},493:function(e,t,a){"use strict";a.r(t);a(415);var c=a(414),n=a(4),s=(a(407),a(408)),i=(a(130),a(61)),r=(a(133),a(43)),o=(a(409),a(410)),l=(a(152),a(105)),j=(a(132),a(62)),d=a(104),u=a(0),b=a(92),f=a.n(b),O=a(412),h=a.n(O),m=a(413),v=a.n(m),x=(a(153),a(106)),p=(a(214),a(154)),g=(a(91),a(49)),w=(a(213),a(131)),S=a(484);var N=function(e){var t=Object(u.useState)(!1),a=Object(d.a)(t,2),c=a[0],s=a[1],o=Object(u.useState)(""),l=Object(d.a)(o,2),j=(l[0],l[1],Object(u.useState)(!1)),b=Object(d.a)(j,2),O=b[0],h=b[1],m=Object(u.useState)(!1),v=Object(d.a)(m,2),N=v[0],k=v[1],y=Object(u.useState)([]),I=Object(d.a)(y,2),C=(I[0],I[1],Object(u.useState)([])),z=Object(d.a)(C,2),P=z[0],_=z[1],E=Object(u.useState)([]),L=Object(d.a)(E,2);return L[0],L[1],Object(n.jsxs)("div",{children:[Object(n.jsxs)(g.a,{type:"primary",className:"modal-button-view",onClick:function(){s(!0),f.a.post("/api/v1/images/search_images",{imageOwnerId:e.info.id,imageReferenceId:4}).then((function(e){var t=e.data;_(t)})).catch((function(e){return console.log(e)}))},children:[Object(n.jsxs)("span",{className:"desktop-view",children:[Object(n.jsx)(S.a,{})," View"]}),Object(n.jsx)("span",{className:"mobile-view",children:Object(n.jsx)(S.a,{})})]}),Object(n.jsxs)(w.a,{title:"User Information",visible:c,confirmLoading:O,onOk:function(){e.passedData(e.info),h(!0),k(!1),setTimeout((function(){s(!1),h(!1)}),2e3)},onCancel:function(){k(!0),s(!1)},afterClose:function(){N||e.afterClosing()},footer:[Object(n.jsx)(g.a,{className:"modal-button",loading:O,onClick:function(){return e.info.id,h(!0),k(!1),setTimeout((function(){s(!1),h(!1)}),2e3),void w.a.success({content:"Still in development"})},danger:!0,children:"Remove"})],children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("h4",{children:"ID:"}),e.info.id]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h4",{children:"Name:"}),e.info.firstName," ",e.info.lastName]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h4",{children:"Email Address: "}),e.info.email]}),Object(n.jsx)("h4",{children:"User Images: "}),Object(n.jsx)(x.a,{className:"shadow-sm",children:Object(n.jsx)(i.a,{children:P.map((function(e,t){return Object(n.jsxs)(r.a,{md:{span:6},children:[Object(n.jsx)("br",{}),Object(n.jsx)(p.a,{height:100,width:100,src:"/api/v1/images/".concat(e.imagePath?e.imagePath:"logo.png")}),Object(n.jsx)(i.a,{children:Object(n.jsx)("br",{})})]},t)}))})})]})]})};t.default=function(){var e=Object(u.useState)([]),t=Object(d.a)(e,2),a=t[0],b=t[1],O=j.a.Search,m=Object(u.useState)(""),x=Object(d.a)(m,2),p=x[0],g=x[1],w=l.a.Title;Object(u.useEffect)((function(){f.a.get("/api/v1/users/").then((function(e){var t=e.data;b(t)})).catch((function(e){return console.log(e)}))}),[]);var S=function(){console.log("Passed data from modal",p),f.a.get("/api/v1/users/").then((function(e){var t=e.data;b(t)}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)(i.a,{justify:"space-between",children:Object(n.jsx)(r.a,{span:4,children:Object(n.jsx)(o.b,{direction:"vertical",children:Object(n.jsx)(O,{placeholder:"Search Barangay",onSearch:function(e){f.a.post("/api/v1/users/search_user",{value:e}).then((function(e){console.log(e);var t=e.data;b(t),console.log("success")}))},allowClear:!0,enterButton:!0})})})}),Object(n.jsx)(s.a,{children:Object(n.jsx)(w,{level:4,children:"List of Users"})}),Object(n.jsx)(i.a,{children:Object(n.jsxs)(c.a,{dataSource:a,scroll:{x:1e3,y:500},sticky:!0,children:[Object(n.jsx)(h.a,{title:"Provider",dataIndex:"provider"},"provider"),Object(n.jsx)(v.a,{title:"Email",dataIndex:"email"},"email"),Object(n.jsx)(h.a,{title:"Firstname",dataIndex:"firstName"},"firstName"),Object(n.jsx)(h.a,{title:"Lastname",dataIndex:"lastName"},"lastName"),Object(n.jsx)(v.a,{title:"Actions",fixed:"right",width:"35vh",render:function(e){return Object(n.jsx)(o.b,{children:Object(n.jsx)(N,{info:e,passedData:g,afterClosing:S})})}},"actions")]})})]})}}}]);
//# sourceMappingURL=7.e2e1ef59.chunk.js.map