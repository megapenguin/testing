(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[8],{501:function(e,t,a){"use strict";a.r(t);a(414);var n=a(411),c=(a(407),a(408)),s=(a(123),a(56)),i=a(5),r=(a(124),a(44)),o=(a(402),a(403)),l=(a(122),a(58)),d=a(100),j=a(0),u=a(87),b=a.n(u),m=a(409),O=a.n(m),f=a(410),h=a.n(f),x=(a(146),a(101)),g=(a(208),a(145)),p=(a(99),a(63)),v=(a(399),a(400)),C=a(398);var N=function(e){var t=Object(j.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],s=Object(j.useState)(""),r=Object(d.a)(s,2),o=(r[0],r[1],Object(j.useState)(!1)),l=Object(d.a)(o,2),u=l[0],m=l[1],O=Object(j.useState)(!1),f=Object(d.a)(O,2),h=f[0],N=f[1],y=Object(j.useState)([]),I=Object(d.a)(y,2),S=I[0],w=I[1],k=Object(j.useState)([]),P=Object(d.a)(k,2),D=P[0],A=P[1],F=Object(j.useState)([]),q=Object(d.a)(F,2),E=q[0],L=q[1];return Object(j.useEffect)((function(){b.a.get("/api/v1/images/").then((function(e){var t=e.data;A(t)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{type:"primary",onClick:function(){c(!0),b.a.get("/api/v1/images/").then((function(t){var a=Object(C.a)(D);a=a.find((function(t){return t.imageOwnerId===e.info.id&&1===t.imageReferenceId})),L(a.imagePath)})).catch((function(e){return console.log(e)}))},children:"View"}),Object(i.jsxs)(v.a,{title:"Driver Information",visible:n,confirmLoading:u,onOk:function(){e.passedData(e.info),m(!0),N(!1),setTimeout((function(){c(!1),m(!1)}),2e3)},onCancel:function(){N(!0),c(!1)},afterClose:function(){h||e.afterClosing()},footer:[Object(i.jsx)(p.a,{loading:u,onClick:function(){return t=e.info.id,m(!0),N(!1),setTimeout((function(){c(!1),m(!1)}),2e3),console.log(t),b.a.delete("/api/v1/images/delete_image",{params:{id:t,referenceId:1}}).then((function(e){var a=Object(C.a)(D);a=a.filter((function(e){return e.imageOwnerId!==t&&1===e.imageReferenceId})),A(a),console.log(a)})).catch((function(e){return console.log(e)})),void b.a.delete("/api/v1/drivers/delete_driver",{params:{id:t}}).then((function(e){var a=Object(C.a)(S);a=a.filter((function(e){return e.id!==t})),w(a),console.log(a),v.a.success({content:"Driver has been Removed"})})).catch((function(e){return console.log(e)}));var t},danger:!0,children:"Remove"})],children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("h3",{children:"ID:"}),e.info.id]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h3",{children:"Name:"}),e.info.firstName," ",e.info.middleName," ",e.info.lastName]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h3",{children:"Contact Number:"}),e.info.contactNumber]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h3",{children:"Address: "}),e.info.address]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h3",{children:"Email Address: "}),e.info.email]}),Object(i.jsx)("h3",{children:"Uploaded Images: "}),Object(i.jsx)(x.a,{className:"shadow-sm",children:Object(i.jsx)(g.a,{height:100,src:"/api/v1/images/".concat(E),style:{borderColor:"white",border:"10px"}})})]})]})},y=(a(405),a(404)),I=(a(144),a(48)),S=a(503);var w=function(e){var t=Object(j.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],s=Object(j.useState)(""),r=Object(d.a)(s,2),u=(r[0],r[1],Object(j.useState)(!1)),m=Object(d.a)(u,2),O=m[0],f=m[1],h=Object(j.useState)(!1),x=Object(d.a)(h,2),g=x[0],N=x[1],w=Object(j.useState)([]),k=Object(d.a)(w,2),P=k[0],D=k[1],A=Object(j.useState)({}),F=Object(d.a)(A,2),q=F[0],E=(F[1],Object(j.useState)("Choose file")),L=Object(d.a)(E,2),R=L[0],T=L[1],_=Object(j.useState)(),M=Object(d.a)(_,2),J=M[0],U=M[1],V=function(){N(!0),c(!1)},B=function(t){console.log(t),e.passedData(e.info),f(!0),N(!1),setTimeout((function(){c(!1),f(!1)}),2e3),b.a.post("/api/v1/drivers/add_driver",t).then((function(e){var t=Object(C.a)(P);t=[].concat(Object(C.a)(t),[e.data]),console.log(t),D(t),T(q),v.a.success({content:"Successfully Added New Driver"}),U(R.file.response.filePath),console.log(J),b.a.post("/api/v1/images/save_image",{imageOwnerId:e.data.id,imageReferenceId:1,imagePath:J})})).catch((function(e){return console.log(e)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{type:"primary",onClick:function(){c(!0),console.log(e.info)},children:"Add Driver"}),Object(i.jsx)(v.a,{title:"Add Driver:",visible:n,confirmLoading:O,onOk:B,onCancel:V,afterClose:function(){g||e.afterClosing()},destroyOnClose:!0,footer:[Object(i.jsx)(p.a,{onClick:V,children:"Cancel"},"back"),Object(i.jsx)(p.a,{form:"myForm",htmlType:"submit",type:"primary",loading:O,onClick:B,children:"Add"},"submit")],children:Object(i.jsxs)(I.a,{name:"basic",initialValues:{remember:!0},onFinish:B,onFinishFailed:function(e){v.a.error({content:"Failure to Add New Driver"}),setTimeout((function(){c(!0),f(!1)}),2e3),console.log("Failed:",e)},id:"myForm",children:[Object(i.jsx)(I.a.Item,{label:"First Name",name:"firstName",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Middle Name",name:"middleName",rules:[{required:!0,message:"Please input your Middlename!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Last Name",name:"lastName",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please input your Address!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Contact Number",name:"contactNumber",rules:[{required:!0,message:"Please input your Contact Number!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Generate Password",name:"generatePassword",rules:[{required:!0,message:"Please input your password!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(I.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please input your Email!"}],children:Object(i.jsx)(l.a,{})}),Object(i.jsx)(y.a,{action:"/api/v1/images/add_image",listType:"picture",maxCount:1,file:q,onChange:function(e){T(e),console.log(R)},onRemove:function(){T("Choose file"),console.log(R)},children:Object(i.jsx)(p.a,{children:"Choose Image (Max: 1)"})}),Object(i.jsx)(o.b,{children:Object(i.jsx)(p.a,{onClick:function(){"Choose file"==R?console.log("No image selected"):(U(R.file.response.filePath),console.log(R.file.response))},icon:Object(i.jsx)(S.a,{}),children:"Upload"})})]})})]})};t.default=function(){var e=Object(j.useState)([]),t=Object(d.a)(e,2),a=t[0],u=t[1],m=l.a.Search,f=Object(j.useState)(""),x=Object(d.a)(f,2),g=x[0],p=x[1];Object(j.useEffect)((function(){b.a.get("/api/v1/drivers/").then((function(e){console.log(e);var t=e.data;u(t)})).catch((function(e){return console.log(e)}))}),[]);var v=function(){console.log("Passed data from modal",g),b.a.get("/api/v1/drivers/").then((function(e){console.log(e);var t=e.data;u(t)}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)(s.a,{justify:"space-between",children:[Object(i.jsx)(r.a,{span:4,children:Object(i.jsx)(o.b,{direction:"vertical",children:Object(i.jsx)(m,{placeholder:"Search Drivers",onSearch:function(e){b.a.post("/api/v1/drivers/search_drivers",{value:e}).then((function(e){console.log(e);var t=e.data;u(t),console.log("success")})),console.log(e)},allowClear:!0,enterButton:!0})})}),Object(i.jsx)(r.a,{span:4,children:Object(i.jsx)(w,{info:"",passedData:p,afterClosing:v})})]}),Object(i.jsx)(c.a,{orientation:"center",children:"List of Drivers"}),Object(i.jsx)(s.a,{children:Object(i.jsxs)(n.a,{dataSource:a,scroll:{x:1e3,y:500},sticky:!0,children:[Object(i.jsx)(O.a,{title:"Firstname",dataIndex:"firstName"},"firstName"),Object(i.jsx)(O.a,{title:"Middlename",dataIndex:"middleName"},"middleName"),Object(i.jsx)(O.a,{title:"Lastname",dataIndex:"lastName"},"lastName"),Object(i.jsx)(h.a,{title:"Contact",dataIndex:"contactNumber"},"contactNumber"),Object(i.jsx)(h.a,{title:"Address",dataIndex:"address"},"address"),Object(i.jsx)(h.a,{title:"Email",dataIndex:"email"},"email"),Object(i.jsx)(h.a,{title:"Actions",fixed:"right",render:function(e){return Object(i.jsx)(o.b,{children:Object(i.jsx)(N,{info:e,passedData:p,afterClosing:v})})}},"actions")]})})]})}}}]);
//# sourceMappingURL=8.bbb16d85.chunk.js.map