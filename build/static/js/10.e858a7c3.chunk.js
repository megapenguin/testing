(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[10],{486:function(e,a,t){"use strict";t.r(a);t(411);var n=t(410),c=(t(406),t(407)),s=(t(130),t(61)),i=t(4),o=(t(133),t(43)),r=(t(404),t(405)),l=t(38),j=(t(132),t(62)),b=t(104),d=t(0),u=t(92),O=t.n(u),m=t(408),f=t.n(m),p=t(409),h=t.n(p),g=(t(152),t(105)),y=(t(212),t(153)),x=(t(91),t(48)),v=(t(211),t(131)),C=t(414),N=t(480);var I=function(e){var a=Object(d.useState)(!1),t=Object(b.a)(a,2),n=t[0],c=t[1],l=Object(d.useState)(!1),j=Object(b.a)(l,2),u=j[0],m=j[1],f=Object(d.useState)(!1),p=Object(b.a)(f,2),h=p[0],I=p[1],S=Object(d.useState)([]),w=Object(b.a)(S,2),k=w[0],J=w[1],P=Object(d.useState)([]),F=Object(b.a)(P,2),_=F[0],T=F[1],B=Object(d.useState)([]),R=Object(b.a)(B,2);return R[0],R[1],Object(i.jsxs)("div",{children:[Object(i.jsx)(r.b,{children:Object(i.jsxs)(x.a,{type:"primary",className:"modal-button",onClick:function(){c(!0),O.a.post("/api/v1/images/search_images",{imageOwnerId:e.info.id,imageReferenceId:3}).then((function(e){var a=e.data;T(a)})).catch((function(e){return console.log(e)}))},children:[Object(i.jsxs)("span",{className:"desktop-view",children:[Object(i.jsx)(N.a,{})," View"]}),Object(i.jsx)("span",{className:"mobile-view",children:Object(i.jsx)(N.a,{})})]})}),Object(i.jsxs)(v.a,{title:"Jeepney Information",visible:n,confirmLoading:u,onOk:function(){e.passedData(e.info),m(!0),I(!1),setTimeout((function(){c(!1),m(!1)}),2e3)},onCancel:function(){I(!0),c(!1)},afterClose:function(){h||e.afterClosing()},footer:[Object(i.jsx)(x.a,{className:"modal-button",loading:u,onClick:function(){return a=e.info.id,m(!0),I(!1),setTimeout((function(){c(!1),m(!1)}),2e3),O.a.delete("/api/v1/images/delete_image",{params:{id:a,referenceId:3}}).then((function(e){var t=Object(C.a)(_);t=t.filter((function(e){return e.imageOwnerId!==a&&3===e.imageReferenceId})),T(t),console.log(t)})).catch((function(e){return console.log(e)})),void O.a.delete("/api/v1/jeepneys/delete_jeep",{params:{id:a}}).then((function(e){var t=Object(C.a)(k);t=t.filter((function(e){return e.id!==a})),J(t),console.log(t),v.a.success({content:"Jeepney has been Removed"})})).catch((function(e){return console.log(e)}));var a},danger:!0,children:"Remove"})],children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("h4",{children:"Barangay Id:"}),e.info.barangayId]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h4",{children:"Plate Number:"}),e.info.plateNumber]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("h4",{children:"Jeep Capacity:"}),e.info.jeepCapacity]}),Object(i.jsx)("h4",{children:"Uploaded Images: "}),Object(i.jsx)(g.a,{className:"shadow-sm",children:Object(i.jsx)(s.a,{children:_.map((function(e,a){return Object(i.jsxs)(o.a,{md:{span:6},children:[Object(i.jsx)("br",{}),Object(i.jsx)(y.a,{height:100,width:100,src:"/api/v1/images/".concat(e.imagePath?e.imagePath:"logo.png")}),Object(i.jsxs)(s.a,{children:[Object(i.jsx)("br",{}),Object(i.jsx)(x.a,{onClick:function(){return a=e.id,void O.a.delete("/api/v1/images/delete_image",{params:{id:a,referenceId:1}}).then((function(e){var t=Object(C.a)(_);t=t.filter((function(e){return e.id!==a})),T(t),v.a.success({content:"Barangay image has been removed"})})).catch((function(e){return console.log(e)}));var a},danger:!0,children:"Delete"})]})]},a)}))})})]})]})},S=(t(151),t(50)),w=(t(416),t(413)),k=t(488);var J=function(e){var a=Object(d.useState)(!1),t=Object(b.a)(a,2),n=t[0],c=t[1],s=Object(d.useState)(!1),o=Object(b.a)(s,2),r=o[0],l=o[1],u=Object(d.useState)(!1),m=Object(b.a)(u,2),f=m[0],p=m[1],h=Object(d.useState)([]),g=Object(b.a)(h,2),y=g[0],N=g[1],I=Object(d.useState)({}),J=Object(b.a)(I,2),P=(J[0],J[1],Object(d.useState)("Choose file")),F=Object(b.a)(P,2),_=(F[0],F[1],Object(d.useState)()),T=Object(b.a)(_,2),B=T[0],R=(T[1],Object(d.useState)([])),D=Object(b.a)(R,2),U=D[0],L=D[1];Object(d.useEffect)((function(){O.a.get("/api/v1/barangays/search_all_barangays").then((function(e){var a=e.data;L(a)})).catch((function(e){return console.log(e)}))}),[]);var q=w.a.Option,A=function(){p(!0),c(!1)},V=function(a){console.log(a),e.passedData(e.info),l(!0),p(!1),setTimeout((function(){c(!1),l(!1)}),2e3),O.a.post("/api/v1/jeepneys/add_jeep",a).then((function(e){var a=Object(C.a)(y);a=[].concat(Object(C.a)(a),[e.data]),console.log(a),N(a),v.a.success({content:"Successfully Added New Jeepney"}),O.a.post("/api/v1/images/save_image",{imageOwnerId:e.data.id,imageReferenceId:3,imagePath:B})})).catch((function(e){return console.log(e)}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)(x.a,{type:"primary",className:"modal-button-add",onClick:function(){c(!0),console.log(e.info)},children:[Object(i.jsxs)("span",{className:"desktop-view",children:[Object(i.jsx)(k.a,{})," Add Jeepney"]}),Object(i.jsx)("span",{className:"mobile-view",children:Object(i.jsx)(k.a,{})})]}),Object(i.jsx)(v.a,{title:"Add Jeepney:",visible:n,confirmLoading:r,onOk:V,onCancel:A,afterClose:function(){f||e.afterClosing()},destroyOnClose:!0,footer:[Object(i.jsx)(x.a,{className:"modal-button",onClick:A,children:"Cancel"},"back"),Object(i.jsx)(x.a,{form:"myForm",className:"modal-button",htmlType:"submit",type:"primary",loading:r,onClick:V,children:"Add"},"submit")],children:Object(i.jsxs)(S.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:V,onFinishFailed:function(e){v.a.error({content:"Failure to Add New Jeepney"}),setTimeout((function(){c(!0),l(!1)}),2e3),console.log("fail"),console.log("Failed:",e)},id:"myForm",children:[Object(i.jsx)(S.a.Item,{label:"Barangay:",name:"barangayId",rules:[{required:!0,message:"Please input the Barangay's ID!"}],children:Object(i.jsx)(w.a,{placeholder:"Select Barangay",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e))},children:U.map((function(e,a){return Object(i.jsx)(q,{value:e.id,children:e.barangayName})}))})}),Object(i.jsx)(S.a.Item,{label:"Plate Number:",name:"plateNumber",rules:[{required:!0,message:"Please input the Plate Number!"}],children:Object(i.jsx)(j.a,{})}),Object(i.jsx)(S.a.Item,{label:"Jeep Capacity:",name:"jeepCapacity",rules:[{required:!0,message:"Please input the Jeep Capacity!"}],children:Object(i.jsx)(j.a,{})})]})})]})},P=t(489);var F=function(e){var a=Object(d.useState)(!1),t=Object(b.a)(a,2),n=t[0],c=t[1],s=S.a.useForm(),o=Object(b.a)(s,1)[0],r=Object(d.useState)(!1),l=Object(b.a)(r,2),u=l[0],m=l[1],f=Object(d.useState)(!1),p=Object(b.a)(f,2),h=p[0],g=p[1],y=Object(d.useState)(),C=Object(b.a)(y,2),N=C[0],I=C[1],k=Object(d.useState)([]),J=Object(b.a)(k,2),F=J[0],_=J[1];Object(d.useEffect)((function(){O.a.get("/api/v1/barangays/search_all_barangays").then((function(e){var a=e.data;_(a)})).catch((function(e){return console.log(e)}))}),[]);var T=w.a.Option,B=function(){g(!0),c(!1)},R=function(a){m(!0),g(!1),e.passedData(e.info),O.a.post("/api/v1/jeepneys/update_jeepney",{id:e.info.id,barangayId:a.barangayId,plateNumber:a.plateNumber,jeepCapacity:a.jeepCapacity}).then((function(e){setTimeout((function(){c(!1),m(!1)}),2e3),N?v.a.success({content:"Successfully Updated Jeepney"}):v.a.success({content:"Jeepney Info is up to date"})})).catch((function(e){return console.log(e)}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)(x.a,{type:"primary",className:"modal-button",onClick:function(){o.setFieldsValue({id:e.info.id,barangayId:e.info.barangayId,plateNumber:e.info.plateNumber,jeepCapacity:e.info.jeepCapacity}),c(!0),I(!1)},children:[Object(i.jsxs)("span",{className:"desktop-view",children:[Object(i.jsx)(P.a,{})," Edit"]}),Object(i.jsx)("span",{className:"mobile-view",children:Object(i.jsx)(P.a,{})})]}),Object(i.jsx)(v.a,{title:"Update Jeepney Info",confirmLoading:u,visible:n,onOk:R,onCancel:B,afterClose:function(){h||e.afterClosing()},destroyOnClose:!0,footer:[Object(i.jsx)(x.a,{className:"modal-button",onClick:B,children:"Cancel"},"back"),Object(i.jsx)(x.a,{form:"myForm",className:"modal-button",htmlType:"submit",type:"primary",children:"Update"})],children:Object(i.jsxs)(S.a,{layout:"vertical",name:"basic",form:o,initialValues:{remember:!0},onFinish:R,onFinishFailed:function(e){v.a.error({content:"Failure to Update Jeepney Info"}),setTimeout((function(){c(!0),m(!1)}),2e3)},onValuesChange:function(e,a){console.log("Changed",a,e),I(!0)},id:"myForm",children:[Object(i.jsx)(S.a.Item,{label:"Barangay:",name:"barangayId",rules:[{required:!0,message:"Please input the Barangay's ID!"}],children:Object(i.jsx)(w.a,{placeholder:"Select Barangay",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e))},children:F.map((function(e,a){return Object(i.jsx)(T,{value:e.id,children:e.barangayName})}))})}),Object(i.jsx)(S.a.Item,{label:"Plate Number:",name:"plateNumber",rules:[{required:!0,message:"Please input the Plate Number!"}],children:Object(i.jsx)(j.a,{})}),Object(i.jsx)(S.a.Item,{label:"Jeep Capacity:",name:"jeepCapacity",rules:[{required:!0,message:"Please input Jeep Capacity!"}],children:Object(i.jsx)(j.a,{})})]})})]})},_=(t(421),t(420)),T=(t(417),t(422)),B=(t(418),t(155)),R=t(401);var D=function(e){var a=Object(d.useState)({}),t=Object(b.a)(a,2),n=(t[0],t[1],Object(d.useState)(!1)),c=Object(b.a)(n,2),o=(c[0],c[1],Object(d.useState)("Choose file")),j=Object(b.a)(o,2),u=(j[0],j[1]),m=Object(d.useState)(""),f=Object(b.a)(m,2),p=f[0],h=f[1],g=Object(d.useState)("none"),y=Object(b.a)(g,2),C=y[0],N=y[1],I=Object(d.useState)(""),w=Object(b.a)(I,2),k=(w[0],w[1],Object(d.useState)([])),J=Object(b.a)(k,2),P=(J[0],J[1],Object(d.useState)([])),F=Object(b.a)(P,2),D=(F[0],F[1],Object(d.useState)(!1)),U=Object(b.a)(D,2),L=(U[0],U[1]),q=Object(d.useState)(!1),A=Object(b.a)(q,2),V=A[0],E=A[1],z=S.a.useForm(),G=Object(b.a)(z,1)[0],H=Object(d.useState)(!1),K=Object(b.a)(H,2),M=K[0],Q=K[1],W=function(){L(!0),setTimeout((function(){E(!1),Q(!1)}),500)},X={name:"file",action:"/api/v1/images/add_image",headers:{authorization:"authorization-text"},data:{imageOwnerId:e.info.id,imageReferenceId:3},onChange:function(e){"uploading"!==e.file.status&&console.log("uploading",e.file,e.fileList),"done"===e.file.status?B.b.success("".concat(e.file.name," file uploaded Successfully.")):"error"===e.file.status&&B.b.error("".concat(e.file.name," file upload Failed.")),N(e.file.status),u(e)}};return Object(i.jsxs)("div",{children:[Object(i.jsxs)(x.a,{type:"primary",className:"modal-button",onClick:function(){G.setFieldsValue({imageOwnerId:e.info.id,imageReferenceId:3}),h(),N("removed"),u("Choose file"),E(!0),console.log(e.info)},children:[Object(i.jsxs)("span",{className:"desktop-view",children:[Object(i.jsx)(R.a,{})," Upload"]}),Object(i.jsx)("span",{className:"mobile-view",children:Object(i.jsx)(R.a,{})})]}),Object(i.jsxs)(v.a,{title:"Jeepney Image Upload",confirmLoading:M,visible:V,onOk:function(a){"done"==C?O.a.post("/api/v1/images/save_image",{imageOwnerId:e.info.id,imageReferenceId:3,imagePath:p}).then((function(e){B.b.success("Successfully Saved"),setTimeout((function(){E(!1),Q(!1)}),500),h("")})).catch((function(e){return console.log(e)})):B.b.error("Image Saving Error")},onCancel:W,afterClose:function(){Q(!0),L(!1)},destroyOnClose:!0,footer:[Object(i.jsx)(x.a,{className:"modal-button",type:"danger",onClick:W,children:"Close"},"back")],children:[Object(i.jsxs)(T.b,{itemLayout:"vertical",children:[Object(i.jsxs)(T.b.Item,{children:[Object(i.jsx)("h4",{children:"Plate Number: "}),e.info.plateNumber]}),Object(i.jsxs)(T.b.Item,{children:[Object(i.jsx)("h4",{children:"Image Reference Name: "}),"Jeepney"]})]}),Object(i.jsx)(s.a,{children:Object(i.jsx)(r.b,{style:{width:"100%"},size:"large",children:Object(i.jsx)(_.a,Object(l.a)(Object(l.a)({},X),{},{onRemove:function(e){O.a.delete("/api/v1/images/delete_folder_image",{params:{fileName:e.response.imagePath,fileId:e.response.id}}).then((function(e){N("removed")})).catch((function(e){return console.log(e)})),h(),B.b.error("File removed Successfully.")},listType:"picture-card",showUploadList:{showPreviewIcon:!1},maxCount:5,children:Object(i.jsxs)(r.b,{children:[Object(i.jsx)(R.a,{}),"Upload"]})}))})})]})]})};a.default=function(){var e=Object(d.useState)([]),a=Object(b.a)(e,2),t=a[0],u=a[1],m=j.a.Search,p=Object(d.useState)(""),g=Object(b.a)(p,2),y=g[0],x=g[1];Object(d.useEffect)((function(){O.a.get("/api/v1/jeepneys/").then((function(e){var a=e.data;a=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{barangayName:e.barangay.barangayName})})),u(a)})).catch((function(e){return console.log(e)}))}),[]);var v=function(){console.log("Passed data from modal",y),O.a.get("/api/v1/jeepneys/").then((function(e){var a=e.data;a=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{barangayName:e.barangay.barangayName})})),u(a)}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)(s.a,{justify:"space-between",children:[Object(i.jsx)(o.a,{span:4,children:Object(i.jsx)(r.b,{direction:"vertical",children:Object(i.jsx)(m,{placeholder:"Search Jeepney",onSearch:function(e){O.a.post("/api/v1/jeepneys/search_jeepneys",{value:e}).then((function(e){console.log(e);var a=e.data;a=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{barangayName:e.barangay.barangayName})})),u(a),console.log("success")})),console.log(e)},allowClear:!0,enterButton:!0})})}),Object(i.jsx)(o.a,{span:4,children:Object(i.jsx)(J,{info:"",passedData:x,afterClosing:v})})]}),Object(i.jsx)(c.a,{orientation:"center",children:"List of Jeepneys"}),Object(i.jsx)(s.a,{children:Object(i.jsxs)(n.a,{dataSource:t,scroll:{x:1e3,y:500},sticky:!0,children:[Object(i.jsx)(f.a,{title:"Barangay",dataIndex:"barangayName"},"barangayId"),Object(i.jsx)(h.a,{title:"Plate Number",dataIndex:"plateNumber"},"plateNumber"),Object(i.jsx)(h.a,{title:"Jeep Capacity",dataIndex:"jeepCapacity"},"jeepCapacity"),Object(i.jsx)(h.a,{title:"Actions",fixed:"right",width:"35vh",render:function(e){return Object(i.jsxs)(r.b,{children:[Object(i.jsx)(I,{info:e,passedData:x,afterClosing:v}),Object(i.jsx)(F,{info:e,passedData:x,afterClosing:v}),Object(i.jsx)(D,{info:e})]})}},"actions")]})})]})}}}]);
//# sourceMappingURL=10.e858a7c3.chunk.js.map