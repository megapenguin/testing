(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[7],{498:function(e,a,t){"use strict";t.r(a);t(413);var n=t(410),c=(t(406),t(407)),i=(t(123),t(56)),o=t(5),s=(t(124),t(44)),r=(t(401),t(402)),l=(t(122),t(58)),j=t(100),b=t(0),d=t(88),u=t.n(d),g=t(408),O=t.n(g),f=t(409),m=t.n(f),h=(t(145),t(101)),y=(t(207),t(146)),p=(t(99),t(63)),x=(t(399),t(400)),v=t(397);var C=function(e){var a=Object(b.useState)(!1),t=Object(j.a)(a,2),n=t[0],c=t[1],i=Object(b.useState)(""),s=Object(j.a)(i,2),r=(s[0],s[1],Object(b.useState)(!1)),l=Object(j.a)(r,2),d=l[0],g=l[1],O=Object(b.useState)(!1),f=Object(j.a)(O,2),m=f[0],C=f[1],B=Object(b.useState)([]),S=Object(j.a)(B,2),I=S[0],D=S[1],N=Object(b.useState)([]),k=Object(j.a)(N,2),F=k[0],w=k[1],_=Object(b.useState)([]),L=Object(j.a)(_,2),T=L[0],P=L[1];return Object(b.useEffect)((function(){u.a.get("/api/v1/images/").then((function(e){var a=e.data;w(a)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{type:"primary",onClick:function(){c(!0),u.a.get("/api/v1/images/").then((function(a){var t=Object(v.a)(F);t=t.find((function(a){return a.imageOwnerId===e.info.id&&2===a.imageReferenceId})),P(t.imagePath)})).catch((function(e){return console.log(e)}))},children:"View"}),Object(o.jsxs)(x.a,{title:"Barangay Information",visible:n,confirmLoading:d,onOk:function(){e.passedData(e.info),g(!0),C(!1),setTimeout((function(){c(!1),g(!1)}),2e3)},onCancel:function(){C(!0),c(!1)},afterClose:function(){m||e.afterClosing()},footer:[Object(o.jsx)(p.a,{loading:d,onClick:function(){return a=e.info.id,g(!0),C(!1),setTimeout((function(){c(!1),g(!1)}),2e3),u.a.delete("/api/v1/images/delete_image",{params:{id:a,referenceId:2}}).then((function(e){var t=Object(v.a)(F);t=t.filter((function(e){return e.imageOwnerId!==a&&2===e.imageReferenceId})),w(t),console.log(t)})).catch((function(e){return console.log(e)})),void u.a.delete("/api/v1/barangays/delete_barangay",{params:{id:a}}).then((function(e){var t=Object(v.a)(I);t=t.filter((function(e){return e.id!==a})),D(t),console.log(t),x.a.success({content:"Barangay has been Removed"})})).catch((function(e){return console.log(e)}));var a},danger:!0,children:"Remove"})],children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Bargangay ID:"}),e.info.id]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Barangay Name:"}),e.info.barangayName]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Location:"}),e.info.location]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("h3",{children:"Barangay Description: "}),e.info.barangayDescription]}),Object(o.jsx)("h3",{children:"Uploaded Images: "}),Object(o.jsx)(h.a,{className:"shadow-sm",children:Object(o.jsx)(y.a,{height:100,src:"/api/v1/images/".concat(T),style:{borderColor:"white",border:"10px"}})})]})]})},B=(t(405),t(404)),S=(t(144),t(48)),I=t(501);var D=function(e){var a=Object(b.useState)(!1),t=Object(j.a)(a,2),n=t[0],c=t[1],i=Object(b.useState)(""),s=Object(j.a)(i,2),r=(s[0],s[1],Object(b.useState)(!1)),d=Object(j.a)(r,2),g=d[0],O=d[1],f=Object(b.useState)(!1),m=Object(j.a)(f,2),h=m[0],y=m[1],C=Object(b.useState)([]),D=Object(j.a)(C,2),N=D[0],k=D[1],F=Object(b.useState)({}),w=Object(j.a)(F,2),_=w[0],L=(w[1],Object(b.useState)("Choose file")),T=Object(j.a)(L,2),P=(T[0],T[1]),A=Object(b.useState)(),q=Object(j.a)(A,2),U=q[0],R=(q[1],function(){y(!0),c(!1)}),V=function(a){console.log(a),e.passedData(e.info),O(!0),y(!1),setTimeout((function(){c(!1),O(!1)}),2e3),u.a.post("/api/v1/barangays/add_barangay",a).then((function(e){var a=Object(v.a)(N);a=[].concat(Object(v.a)(a),[e.data]),console.log(a),k(a),x.a.success({content:"Successfully Added New Barangay"}),u.a.post("/api/v1/images/save_image",{imageOwnerId:e.data.id,imageReferenceId:2,imagePath:U})})).catch((function(e){return console.log(e)}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{type:"primary",onClick:function(){c(!0),console.log(e.info)},children:"Add Barangay"}),Object(o.jsx)(x.a,{title:"Add Barangay:",visible:n,confirmLoading:g,onOk:V,onCancel:R,afterClose:function(){h||e.afterClosing()},destroyOnClose:!0,footer:[Object(o.jsx)(p.a,{onClick:R,children:"Cancel"},"back"),Object(o.jsx)(p.a,{form:"myForm",htmlType:"submit",type:"primary",loading:g,onClick:V,children:"Add"},"submit")],children:Object(o.jsxs)(S.a,{name:"basic",initialValues:{remember:!0},onFinish:V,onFinishFailed:function(e){x.a.error({content:"Failure to Add New Barangay"}),setTimeout((function(){c(!0),O(!1)}),2e3),console.log("fail"),console.log("Failed:",e)},id:"myForm",children:[Object(o.jsx)(S.a.Item,{label:"Barangay Name",name:"barangayName",rules:[{required:!0,message:"Please input the Barangay's Name!"}],children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(S.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please input Barangay's Location!"}],children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(S.a.Item,{label:"Barangay Description",name:"barangayDescription",rules:[{required:!0,message:"Please input the Barangay's Description!"}],children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(B.a,{action:"/api/v1/images/add_image",listType:"picture",maxCount:1,file:_,onChange:function(e){P(e)},children:Object(o.jsx)(p.a,{icon:Object(o.jsx)(I.a,{}),children:"Upload Image (Max: 1)"})})]})})]})};var N=function(e){var a=Object(b.useState)(!1),t=Object(j.a)(a,2),n=t[0],c=t[1],i=S.a.useForm(),s=Object(j.a)(i,1)[0],r=Object(b.useState)(!1),d=Object(j.a)(r,2),g=d[0],O=d[1],f=Object(b.useState)(!1),m=Object(j.a)(f,2),h=m[0],y=m[1],v=Object(b.useState)(),C=Object(j.a)(v,2),B=C[0],I=C[1],D=Object(b.useState)([]),N=Object(j.a)(D,2),k=(N[0],N[1],function(){y(!0),c(!1)}),F=function(a){console.log(B),O(!0),y(!1),e.passedData(e.info),u.a.post("/api/v1/barangays/update_barangay",{id:a.id,barangayName:a.barangayName,location:a.location,barangayDescription:a.barangayDescription}).then((function(e){setTimeout((function(){c(!1),O(!1)}),2e3),B?x.a.success({content:"Successfully Updated Barangay"}):x.a.success({content:"Barangay Info is up to date"})})).catch((function(e){return console.log(e)})),console.log(B)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{type:"primary",onClick:function(){s.setFieldsValue({id:e.info.id,barangayName:e.info.barangayName,location:e.info.location,barangayDescription:e.info.barangayDescription}),c(!0),I(!1)},children:"Edit"}),Object(o.jsx)(x.a,{title:"Update Barangay Info",confirmLoading:g,visible:n,onOk:F,onCancel:k,afterClose:function(){h||e.afterClosing()},destroyOnClose:!0,footer:[Object(o.jsx)(p.a,{onClick:k,children:"Cancel"},"back"),Object(o.jsx)(p.a,{form:"myForm",htmlType:"submit",type:"primary",children:"Update"})],children:Object(o.jsxs)(S.a,{name:"basic",form:s,initialValues:{remember:!0},onFinish:F,onFinishFailed:function(e){x.a.error({content:"Failure to Update Barangay Info"}),setTimeout((function(){c(!0),O(!1)}),2e3),console.log("Failed:",e)},onValuesChange:function(e,a){console.log("Changed",a,e),I(!0)},id:"myForm",children:[Object(o.jsx)(S.a.Item,{label:"Barangay Id",name:"id",children:Object(o.jsx)(l.a,{disabled:!0,bordered:!1})}),Object(o.jsx)(S.a.Item,{label:"Barangay Name",name:"barangayName",rules:[{required:!0,message:"Please input the Barangay's Name!"}],children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(S.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please input Barangay's Location!"}],children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(S.a.Item,{label:"Barangay Description",name:"barangayDescription",rules:[{required:!0,message:"Please input the Barangay's Description!"}],children:Object(o.jsx)(l.a.TextArea,{})})]})})]})};a.default=function(){var e=Object(b.useState)([]),a=Object(j.a)(e,2),t=a[0],d=a[1],g=l.a.Search,f=Object(b.useState)(""),h=Object(j.a)(f,2),y=h[0],p=h[1];Object(b.useEffect)((function(){u.a.get("/api/v1/barangays/search_all_barangays").then((function(e){console.log(e);var a=e.data;d(a)})).catch((function(e){return console.log(e)}))}),[]);var x=function(){console.log("Passed data from modal",y),u.a.get("/api/v1/barangays/search_all_barangays").then((function(e){console.log(e);var a=e.data;d(a)}))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)(i.a,{justify:"space-between",children:[Object(o.jsx)(s.a,{span:4,children:Object(o.jsx)(r.b,{direction:"vertical",children:Object(o.jsx)(g,{placeholder:"Search Barangay",onSearch:function(e){u.a.post("/api/v1/barangays/search_barangays",{value:e}).then((function(e){console.log(e);var a=e.data;d(a),console.log("success")})),console.log(e)},allowClear:!0,enterButton:!0})})}),Object(o.jsx)(s.a,{span:4,children:Object(o.jsx)(D,{info:"",passedData:p,afterClosing:x})})]}),Object(o.jsx)(c.a,{orientation:"center",children:"List of Barangays"}),Object(o.jsx)(i.a,{children:Object(o.jsxs)(n.a,{dataSource:t,scroll:{x:1e3,y:500},sticky:!0,children:[Object(o.jsx)(O.a,{title:"Barangay Name",dataIndex:"barangayName"},"barangayName"),Object(o.jsx)(m.a,{title:"Location",dataIndex:"location"},"location"),Object(o.jsx)(m.a,{title:"Barangay Description",dataIndex:"barangayDescription"},"barangayDescription"),Object(o.jsx)(m.a,{title:"Actions",fixed:"right",render:function(e){return Object(o.jsxs)(r.b,{children:[Object(o.jsx)(C,{info:e,passedData:p,afterClosing:x}),Object(o.jsx)(N,{info:e,passedData:p,afterClosing:x})]})}},"actions")]})})]})}}}]);
//# sourceMappingURL=7.01cfbfbc.chunk.js.map