(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[10],{493:function(e,t,n){"use strict";n.r(t);n(408);var a=n(407),c=(n(403),n(404)),i=(n(123),n(57)),s=n(5),o=(n(124),n(44)),r=(n(400),n(402)),l=(n(122),n(56)),j=n(99),d=n(0),b=n(88),u=n.n(b),p=n(405),O=n.n(p),f=n(406),h=n.n(f),m=(n(121),n(75)),x=(n(398),n(399)),y=n(396);var v=function(e){var t=Object(d.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],i=Object(d.useState)(""),o=Object(j.a)(i,2),r=(o[0],o[1],Object(d.useState)(!1)),l=Object(j.a)(r,2),b=l[0],p=l[1],O=Object(d.useState)(!1),f=Object(j.a)(O,2),h=f[0],v=f[1],g=Object(d.useState)([]),C=Object(j.a)(g,2),S=C[0],I=C[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{type:"primary",onClick:function(){c(!0),console.log(e.info)},children:"View"}),Object(s.jsxs)(x.a,{title:"Jeepney Information",visible:a,confirmLoading:b,onOk:function(){e.passedData(e.info),p(!0),v(!1),setTimeout((function(){c(!1),p(!1)}),2e3)},onCancel:function(){v(!0),c(!1)},afterClose:function(){h||e.afterClosing()},footer:[Object(s.jsx)(m.a,{loading:b,onClick:function(){return t=e.info.id,p(!0),v(!1),setTimeout((function(){c(!1),p(!1)}),2e3),void u.a.delete("/api/v1/jeepneys/delete_jeep",{params:{id:t}}).then((function(e){var n=Object(y.a)(S);n=n.filter((function(e){return e.id!==t})),I(n),console.log(n),x.a.success({content:"Jeepney has been Removed"})})).catch((function(e){return console.log(e)}));var t},danger:!0,children:"Remove"})],children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("h3",{children:"Driver ID:"}),e.info.driverId]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("h3",{children:"Plate Number:"}),e.info.plateNumber]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("h3",{children:"Jeep Capacity:"}),e.info.jeepCapacity]})]})]})},g=(n(144),n(46));var C=function(e){var t=Object(d.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],i=Object(d.useState)(""),o=Object(j.a)(i,2),r=(o[0],o[1],Object(d.useState)(!1)),b=Object(j.a)(r,2),p=b[0],O=b[1],f=Object(d.useState)(!1),h=Object(j.a)(f,2),v=h[0],C=h[1],S=Object(d.useState)([]),I=Object(j.a)(S,2),J=I[0],k=I[1],D=function(){C(!0),c(!1)},N=function(t){console.log(t),e.passedData(e.info),O(!0),C(!1),setTimeout((function(){c(!1),O(!1)}),2e3),u.a.post("/api/v1/jeepneys/add_jeep",t).then((function(e){var t=Object(y.a)(J);t=[].concat(Object(y.a)(t),[e.data]),console.log(t),k(t),x.a.success({content:"Successfully Added New Jeepney"})})).catch((function(e){return console.log(e)}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{type:"primary",onClick:function(){c(!0),console.log(e.info)},children:"Add Jeepney"}),Object(s.jsx)(x.a,{title:"Add Jeepney:",visible:a,confirmLoading:p,onOk:N,onCancel:D,afterClose:function(){v||e.afterClosing()},destroyOnClose:!0,footer:[Object(s.jsx)(m.a,{onClick:D,children:"Cancel"},"back"),Object(s.jsx)(m.a,{form:"myForm",htmlType:"submit",type:"primary",loading:p,onClick:N,children:"Add"},"submit")],children:Object(s.jsxs)(g.a,{name:"basic",initialValues:{remember:!0},onFinish:N,onFinishFailed:function(e){x.a.error({content:"Failure to Add New Jeepney"}),setTimeout((function(){c(!0),O(!1)}),2e3),console.log("fail"),console.log("Failed:",e)},id:"myForm",children:[Object(s.jsx)(g.a.Item,{label:"Driver ID",name:"driverId",rules:[{required:!0,message:"Please input the Driver's ID!"}],children:Object(s.jsx)(l.a,{})}),Object(s.jsx)(g.a.Item,{label:"Plate Number",name:"plateNumber",rules:[{required:!0,message:"Please input the Plate Number!"}],children:Object(s.jsx)(l.a,{})}),Object(s.jsx)(g.a.Item,{label:"Jeep Capacity",name:"jeepCapacity",rules:[{required:!0,message:"Please input the Jeep Capacity!"}],children:Object(s.jsx)(l.a,{})})]})})]})};t.default=function(){var e=Object(d.useState)([]),t=Object(j.a)(e,2),n=t[0],b=t[1],p=l.a.Search,f=Object(d.useState)(""),m=Object(j.a)(f,2),x=m[0],y=m[1];Object(d.useEffect)((function(){u.a.get("/api/v1/jeepneys/search_all_jeepneys").then((function(e){console.log(e);var t=e.data;b(t)})).catch((function(e){return console.log(e)}))}),[]);var g=function(){console.log("Passed data from modal",x),u.a.get("/api/v1/jeepneys/search_all_jeepneys").then((function(e){console.log(e);var t=e.data;b(t)}))};return Object(s.jsxs)("div",{children:[Object(s.jsxs)(i.a,{justify:"space-between",children:[Object(s.jsx)(o.a,{span:4,children:Object(s.jsx)(r.b,{direction:"vertical",children:Object(s.jsx)(p,{placeholder:"Search Jeepney",onSearch:function(e){u.a.post("/api/v1/jeepneys/search_jeepneys",{value:e}).then((function(e){console.log(e);var t=e.data;b(t),console.log("success")})),console.log(e)},allowClear:!0,enterButton:!0})})}),Object(s.jsx)(o.a,{span:4,children:Object(s.jsx)(C,{info:"",passedData:y,afterClosing:g})})]}),Object(s.jsx)(c.a,{orientation:"center",children:"List of Jeepneys"}),Object(s.jsx)(i.a,{children:Object(s.jsxs)(a.a,{dataSource:n,scroll:{x:1e3,y:500},sticky:!0,children:[Object(s.jsx)(O.a,{title:"Driver ID",dataIndex:"driverId"},"driverId"),Object(s.jsx)(h.a,{title:"Plate Number",dataIndex:"plateNumber"},"plateNumber"),Object(s.jsx)(h.a,{title:"Jeep Capacity",dataIndex:"jeepCapacity"},"jeepCapacity"),Object(s.jsx)(h.a,{title:"Actions",fixed:"right",render:function(e){return Object(s.jsx)(r.b,{children:Object(s.jsx)(v,{info:e,passedData:y,afterClosing:g})})}},"actions")]})})]})}}}]);
//# sourceMappingURL=10.c49bdcdb.chunk.js.map