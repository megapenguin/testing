(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[7],{448:function(e,t,a){},500:function(e,t,a){"use strict";a.r(t);var n=a(5),c=(a(422),a(413)),i=(a(144),a(48)),l=(a(122),a(58)),s=(a(208),a(145)),o=(a(123),a(56)),r=(a(124),a(44)),j=(a(402),a(403)),d=(a(405),a(404)),h=(a(99),a(63)),u=a(100),b=a(0),g=a.n(b),m=(a(448),a.p,a(503)),O=g.a.lazy((function(){return Promise.all([a.e(2),a.e(11)]).then(a.bind(null,498))}));var f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("h1",{children:"LOADING"}),children:Object(n.jsx)(O,{})})})},x=a(87),p=a.n(x);t.default=function(e){var t=Object(b.useState)({}),a=Object(u.a)(t,2),g=a[0],O=(a[1],Object(b.useState)("Choose file")),x=Object(u.a)(O,2),v=x[0],I=x[1],w=Object(b.useState)(""),y=Object(u.a)(w,2),C=y[0],k=y[1],P=Object(b.useState)(""),S=Object(u.a)(P,2);S[0],S[1],Object(b.useEffect)((function(){p.a.get("/api/v1/images/").then((function(e){console.log(e);var t=e.data;D(t)})).catch((function(e){return console.log(e)}))}),[]);var R=Object(b.useState)([]),B=Object(u.a)(R,2),D=(B[0],B[1]),F=function(e){console.log(e),p.a.post("/api/v1/images/save_image",{imageOwnerId:e.imageOwnerId,imageReferenceId:e.imageReferenceId,imagePath:C}).then((function(e){})).catch((function(e){return console.log(e)}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{gutter:[16,16],children:Object(n.jsx)(r.a,{children:Object(n.jsx)(j.b,{style:{width:"100%"},size:"large",children:Object(n.jsx)(d.a,{action:"/api/v1/images/add_image",listType:"picture",onRemove:function(e){console.log("Remove image",e),p.a.delete("/api/v1/images/delete_folder_image",{params:{filePath:e.response.filePath}}).then((function(e){console.log("image remove from folder")})).catch((function(e){return console.log(e)})),console.log(g)},maxCount:1,file:g,onChange:function(e){I(e)},children:Object(n.jsx)(h.a,{icon:Object(n.jsx)(m.a,{}),children:"Upload Image (Max: 1)"})})})})}),Object(n.jsx)(o.a,{gutter:[16,16],children:Object(n.jsx)(h.a,{onClick:function(){"Choose file"==v?console.log("No image selected"):(k(v.file.response.filePath),console.log(v.file.response))},children:"Check Uploaded Image"})}),Object(n.jsx)(o.a,{gutter:[16,16],children:Object(n.jsx)(s.a,{width:250,height:250,src:"/api/v1/images/".concat(C||"logo.png"),style:{borderColor:"white",border:"10px"}})}),Object(n.jsx)(o.a,{gutter:[16,16],children:Object(n.jsxs)(i.a,{name:"basic",initialValues:{remember:!0},onFinish:F,onFinishFailed:function(e){console.log("fail"),console.log("Failed:",e)},children:[Object(n.jsx)(i.a.Item,{label:"Image Owner ID",name:"imageOwnerId",rules:[{required:!0,message:"Please input the Image owner Id!"}],children:Object(n.jsx)(l.a,{})}),Object(n.jsx)(i.a.Item,{label:"Image Reference ID",name:"imageReferenceId",rules:[{required:!0,message:"Please select image owner!"}],children:Object(n.jsxs)(c.a.Group,{children:[Object(n.jsx)(c.a.Button,{value:"1",children:"Driver"}),Object(n.jsx)(c.a.Button,{value:"2",children:"Jeepney"}),Object(n.jsx)(c.a.Button,{value:"3",children:"Barangay"})]})}),Object(n.jsx)(i.a.Item,{children:Object(n.jsx)(h.a,{disabled:0===C.length,onClick:F,type:"primary",htmlType:"submit",children:C?"Save Image":"Choose an image"})})]})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(f,{})})})]})}}}]);
//# sourceMappingURL=7.02059cb0.chunk.js.map