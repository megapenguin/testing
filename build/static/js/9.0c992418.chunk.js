(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[9],{500:function(e,a,t){"use strict";t.r(a);t(413);var n=t(410),c=(t(406),t(407)),i=(t(123),t(56)),o=t(5),s=(t(124),t(44)),r=(t(399),t(402)),l=t(30),j=(t(122),t(59)),b=t(100),u=t(0),d=t(88),O=t.n(d),f=t(408),p=t.n(f),h=t(409),g=t.n(h),m=(t(145),t(101)),y=(t(207),t(146)),x=(t(99),t(63)),v=(t(400),t(401)),C=t(397);var S=function(e){var a=Object(u.useState)(!1),t=Object(b.a)(a,2),n=t[0],c=t[1],i=Object(u.useState)(""),s=Object(b.a)(i,2),l=(s[0],s[1],Object(u.useState)(!1)),j=Object(b.a)(l,2),d=j[0],f=j[1],p=Object(u.useState)(!1),h=Object(b.a)(p,2),g=h[0],S=h[1],I=Object(u.useState)([]),N=Object(b.a)(I,2),J=N[0],k=N[1],w=Object(u.useState)([]),P=Object(b.a)(w,2),_=P[0],F=P[1],A=Object(u.useState)([]),T=Object(b.a)(A,2),B=T[0],D=T[1];return Object(u.useEffect)((function(){O.a.get("/api/v1/images/").then((function(e){var a=e.data;F(a)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{children:Object(o.jsx)(x.a,{type:"primary",onClick:function(){c(!0),O.a.get("/api/v1/images/").then((function(a){var t=Object(C.a)(_);t=t.find((function(a){return a.imageOwnerId===e.info.id&&3===a.imageReferenceId})),D(t.imagePath)})).catch((function(e){return console.log(e)}))},children:"View"})}),Object(o.jsxs)(v.a,{title:"Jeepney Information",visible:n,confirmLoading:d,onOk:function(){e.passedData(e.info),f(!0),S(!1),setTimeout((function(){c(!1),f(!1)}),2e3)},onCancel:function(){S(!0),c(!1)},afterClose:function(){g||e.afterClosing()},footer:[Object(o.jsx)(x.a,{loading:d,onClick:function(){return a=e.info.id,f(!0),S(!1),setTimeout((function(){c(!1),f(!1)}),2e3),O.a.delete("/api/v1/images/delete_image",{params:{id:a,referenceId:3}}).then((function(e){var t=Object(C.a)(_);t=t.filter((function(e){return e.imageOwnerId!==a&&3===e.imageReferenceId})),F(t),console.log(t)})).catch((function(e){return console.log(e)})),void O.a.delete("/api/v1/jeepneys/delete_jeep",{params:{id:a}}).then((function(e){var t=Object(C.a)(J);t=t.filter((function(e){return e.id!==a})),k(t),console.log(t),v.a.success({content:"Jeepney has been Removed"})})).catch((function(e){return console.log(e)}));var a},danger:!0,children:"Remove"})],children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Barangay Id:"}),e.info.barangayId]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Plate Number:"}),e.info.plateNumber]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Jeep Capacity:"}),e.info.jeepCapacity]}),Object(o.jsx)("h3",{children:"Uploaded Images: "}),Object(o.jsx)(m.a,{className:"shadow-sm",children:Object(o.jsx)(y.a,{height:100,src:"/api/v1/images/".concat(B),style:{borderColor:"white",border:"10px"}})})]})]})},I=(t(405),t(404)),N=(t(144),t(49)),J=(t(424),t(411)),k=t(501);var w=function(e){var a=Object(u.useState)(!1),t=Object(b.a)(a,2),n=t[0],c=t[1],i=Object(u.useState)(""),s=Object(b.a)(i,2),r=(s[0],s[1],Object(u.useState)(!1)),l=Object(b.a)(r,2),d=l[0],f=l[1],p=Object(u.useState)(!1),h=Object(b.a)(p,2),g=h[0],m=h[1],y=Object(u.useState)([]),S=Object(b.a)(y,2),w=S[0],P=S[1],_=Object(u.useState)({}),F=Object(b.a)(_,2),A=F[0],T=(F[1],Object(u.useState)("Choose file")),B=Object(b.a)(T,2),D=(B[0],B[1]),R=Object(u.useState)(),q=Object(b.a)(R,2),E=q[0],L=(q[1],Object(u.useState)([])),V=Object(b.a)(L,2),U=V[0],M=V[1];Object(u.useEffect)((function(){O.a.get("/api/v1/barangays/search_all_barangays").then((function(e){console.log(e);var a=e.data;M(a)})).catch((function(e){return console.log(e)}))}),[]);var z=J.a.Option,G=function(){m(!0),c(!1)},H=function(a){console.log(a),e.passedData(e.info),f(!0),m(!1),setTimeout((function(){c(!1),f(!1)}),2e3),O.a.post("/api/v1/jeepneys/add_jeep",a).then((function(e){var a=Object(C.a)(w);a=[].concat(Object(C.a)(a),[e.data]),console.log(a),P(a),v.a.success({content:"Successfully Added New Jeepney"}),O.a.post("/api/v1/images/save_image",{imageOwnerId:e.data.id,imageReferenceId:3,imagePath:E})})).catch((function(e){return console.log(e)}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{type:"primary",onClick:function(){c(!0),console.log(e.info)},children:"Add Jeepney"}),Object(o.jsx)(v.a,{title:"Add Jeepney:",visible:n,confirmLoading:d,onOk:H,onCancel:G,afterClose:function(){g||e.afterClosing()},destroyOnClose:!0,footer:[Object(o.jsx)(x.a,{onClick:G,children:"Cancel"},"back"),Object(o.jsx)(x.a,{form:"myForm",htmlType:"submit",type:"primary",loading:d,onClick:H,children:"Add"},"submit")],children:Object(o.jsxs)(N.a,{name:"basic",initialValues:{remember:!0},onFinish:H,onFinishFailed:function(e){v.a.error({content:"Failure to Add New Jeepney"}),setTimeout((function(){c(!0),f(!1)}),2e3),console.log("fail"),console.log("Failed:",e)},id:"myForm",children:[Object(o.jsx)(N.a.Item,{label:"Barangay",name:"barangayId",rules:[{required:!0,message:"Please input the Barangay's ID!"}],children:Object(o.jsx)(J.a,{defaultValue:"-Select-",style:{width:120},onChange:function(e){console.log("selected ".concat(e))},children:U.map((function(e,a){return Object(o.jsx)(z,{value:e.id,children:e.barangayName})}))})}),Object(o.jsx)(N.a.Item,{label:"Plate Number",name:"plateNumber",rules:[{required:!0,message:"Please input the Plate Number!"}],children:Object(o.jsx)(j.a,{})}),Object(o.jsx)(N.a.Item,{label:"Jeep Capacity",name:"jeepCapacity",rules:[{required:!0,message:"Please input the Jeep Capacity!"}],children:Object(o.jsx)(j.a,{})}),Object(o.jsx)(I.a,{action:"/api/v1/images/add_image",listType:"picture",maxCount:1,file:A,onChange:function(e){D(e)},children:Object(o.jsx)(x.a,{icon:Object(o.jsx)(k.a,{}),children:"Upload Image (Max: 1)"})})]})})]})};a.default=function(){var e=Object(u.useState)([]),a=Object(b.a)(e,2),t=a[0],d=a[1],f=j.a.Search,h=Object(u.useState)(""),m=Object(b.a)(h,2),y=m[0],x=m[1];Object(u.useEffect)((function(){O.a.get("/api/v1/jeepneys/").then((function(e){console.log(e);var a=e.data;a=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{barangayName:e.barangay.barangayName})})),d(a)})).catch((function(e){return console.log(e)}))}),[]);var v=function(){console.log("Passed data from modal",y),O.a.get("/api/v1/jeepneys/search_all_jeepneys").then((function(e){console.log(e);var a=e.data;d(a)}))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)(i.a,{justify:"space-between",children:[Object(o.jsx)(s.a,{span:4,children:Object(o.jsx)(r.b,{direction:"vertical",children:Object(o.jsx)(f,{placeholder:"Search Jeepney",onSearch:function(e){O.a.post("/api/v1/jeepneys/search_jeepneys",{value:e}).then((function(e){console.log(e);var a=e.data;a=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{barangayName:e.barangay.barangayName})})),d(a),console.log("success")})),console.log(e)},allowClear:!0,enterButton:!0})})}),Object(o.jsx)(s.a,{span:4,children:Object(o.jsx)(w,{info:"",passedData:x,afterClosing:v})})]}),Object(o.jsx)(c.a,{orientation:"center",children:"List of Jeepneys"}),Object(o.jsx)(i.a,{children:Object(o.jsxs)(n.a,{dataSource:t,scroll:{x:1e3,y:500},sticky:!0,children:[Object(o.jsx)(p.a,{title:"Barangay",dataIndex:"barangayName"},"barangayId"),Object(o.jsx)(g.a,{title:"Plate Number",dataIndex:"plateNumber"},"plateNumber"),Object(o.jsx)(g.a,{title:"Jeep Capacity",dataIndex:"jeepCapacity"},"jeepCapacity"),Object(o.jsx)(g.a,{title:"Actions",fixed:"right",render:function(e){return Object(o.jsx)(r.b,{children:Object(o.jsx)(S,{info:e,passedData:x,afterClosing:v})})}},"actions")]})})]})}}}]);
//# sourceMappingURL=9.0c992418.chunk.js.map