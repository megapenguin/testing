(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[6],{482:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);a(130);var n=a(61),c=(a(151),a(50)),r=(a(133),a(43)),i=(a(152),a(105)),l=(a(413),a(412)),o=(a(408),a(409)),s=(a(213),a(131)),d=(a(406),a(407)),u=(a(91),a(48)),j=a(4),b=(a(46),a(482),a(3)),p=a.n(b),m=a(1),f=a.n(m),O=a(8),y=a.n(O),v=a(0),h=a(5),g=a.n(h),x=a(28),N=a(66),C=a.n(N),k=a(52),S=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},I=function(e){var t,a=e.prefixCls,n=e.className,c=e.checked,r=e.onChange,i=e.onClick,l=S(e,["prefixCls","className","checked","onChange","onClick"]),o=(0,v.useContext(k.b).getPrefixCls)("tag",a),s=g()(o,(t={},p()(t,"".concat(o,"-checkable"),!0),p()(t,"".concat(o,"-checkable-checked"),c),t),n);return v.createElement("span",f()({},l,{className:s,onClick:function(e){r&&r(!c),i&&i(e)}}))},w=a(179),E=a(181),P=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},A=new RegExp("^(".concat(w.a.join("|"),")(-inverse)?$")),D=new RegExp("^(".concat(w.b.join("|"),")$")),J=function(e,t){var a,n=e.prefixCls,c=e.className,r=e.style,i=e.children,l=e.icon,o=e.color,s=e.onClose,d=e.closeIcon,u=e.closable,j=void 0!==u&&u,b=P(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),m=v.useContext(k.b),O=m.getPrefixCls,h=m.direction,N=v.useState(!0),S=y()(N,2),I=S[0],w=S[1];v.useEffect((function(){"visible"in b&&w(b.visible)}),[b.visible]);var J=function(){return!!o&&(A.test(o)||D.test(o))},R=f()({backgroundColor:o&&!J()?o:void 0},r),L=J(),T=O("tag",n),_=g()(T,(a={},p()(a,"".concat(T,"-").concat(o),L),p()(a,"".concat(T,"-has-color"),o&&!L),p()(a,"".concat(T,"-hidden"),!I),p()(a,"".concat(T,"-rtl"),"rtl"===h),a),c),z=function(e){e.stopPropagation(),s&&s(e),e.defaultPrevented||"visible"in b||w(!1)},B="onClick"in b||i&&"a"===i.type,F=Object(x.default)(b,["visible"]),M=l||null,H=M?v.createElement(v.Fragment,null,M,v.createElement("span",null,i)):i,$=v.createElement("span",f()({},F,{ref:t,className:_,style:R}),H,j?d?v.createElement("span",{className:"".concat(T,"-close-icon"),onClick:z},d):v.createElement(C.a,{className:"".concat(T,"-close-icon"),onClick:z}):null);return B?v.createElement(E.a,null,$):$},R=v.forwardRef(J);R.displayName="Tag",R.CheckableTag=I;var L=R,T=a(38),_=(a(156),a(117)),z=(a(132),a(62)),B=a(104),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},M=a(56),H=function(e,t){return v.createElement(M.a,Object.assign({},e,{ref:t,icon:F}))};H.displayName="CheckOutlined";var $=v.forwardRef(H),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},G=function(e,t){return v.createElement(M.a,Object.assign({},e,{ref:t,icon:q}))};G.displayName="CloseOutlined";var K=v.forwardRef(G),Q=a(92),U=a.n(Q);t.default=function(){var e=Object(v.useState)([]),t=Object(B.a)(e,2),a=t[0],b=t[1],p=Object(v.useState)([]),m=Object(B.a)(p,2),f=m[0],O=m[1],y=Object(v.useState)(0),h=Object(B.a)(y,2),g=(h[0],h[1],Object(v.useState)([])),x=Object(B.a)(g,2),N=x[0],C=x[1],k=Object(v.useState)([]),S=Object(B.a)(k,2),I=(S[0],S[1],Object(v.useState)([])),w=Object(B.a)(I,2),E=w[0],P=w[1],A=Object(v.useState)([]),D=Object(B.a)(A,2),J=(D[0],D[1],Object(v.useState)()),R=Object(B.a)(J,2),F=(R[0],R[1]),M=Object(v.useState)(),H=Object(B.a)(M,2),q=H[0],G=H[1],Q=(z.a.Search,_.a.Text),V=_.a.Title;Object(v.useEffect)((function(){U.a.get("/api/v1/jeepneys/").then((function(e){var t=e.data;t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{barangayName:e.barangay.barangayName})})),b(t)})),U.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=(t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId}))})}))).map((function(e){return Object(T.a)(Object(T.a)({},e),{},{plateNumber:e.jeepneydrivers.map((function(e){return e.jeepney.plateNumber}))})})),P(t)})).catch((function(e){return console.log(e)}))}),[]);var W=[{title:"Plate Number",dataIndex:"plateNumber"},{title:"Status",render:function(e,t){return Object(j.jsx)(j.Fragment,{children:0!==e.jeepneyDriver.length?Object(j.jsx)(L,{color:"volcano",children:"Not Available"}):Object(j.jsx)(L,{color:"blue",children:"Available"})})}}],X=[{title:"Firstname",dataIndex:"firstName"},{title:"Middlename",dataIndex:"middleName"},{title:"Lastname",dataIndex:"lastName"},{title:"Jeep",dataIndex:"plateNumber"},{title:"Actions",key:"action",render:function(e,t){return Object(j.jsx)(d.b,{size:"middle",children:0===t.jeepId.length?Object(j.jsxs)(u.a,{onClick:function(){return ee(N,t.id)},type:"primary",className:"modal-button",children:[Object(j.jsx)($,{}),"Assign Driver"]}):Object(j.jsxs)(u.a,{onClick:function(){return te(t.id)},type:"danger",className:"modal-button",children:[Object(j.jsx)(K,{}),"Remove Driver"]})})}}],Y=a.map((function(e,t){return{key:t,id:e.id,plateNumber:e.plateNumber,jeepCapacity:e.jeepCapacity,jeepneyDriver:e.jeepneydrivers,barangayName:e.barangayName}})),Z=E.map((function(e,t){return{key:t,id:e.id,jeepId:e.jeepId,firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,email:e.email,address:e.address,contactNumber:e.contactNumber,plateNumber:e.plateNumber}})),ee=function(e,t){!0===q?U.a.post("/api/v1/jeepneydrivers/add_jeepney_driver",{driverId:t,jeepneyId:e}).then((function(e){U.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=(t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId}))})}))).map((function(e){return Object(T.a)(Object(T.a)({},e),{},{plateNumber:e.jeepneydrivers.map((function(e){return e.jeepney.plateNumber}))})})),G(!1),P(t),s.a.success({content:"Successfully Assigned Driver"})})),U.a.get("/api/v1/jeepneys/").then((function(e){var t=e.data;t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{barangayName:e.barangay.barangayName})})),b(t)}))})).catch((function(e){return console.log(e)})):s.a.error({content:"Select from available jeepneys"})},te=function(e){U.a.delete("/api/v1/jeepneydrivers/delete_jeepney_driver",{params:{driverId:e}}).then((function(e){U.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=(t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId}))})}))).map((function(e){return Object(T.a)(Object(T.a)({},e),{},{plateNumber:e.jeepneydrivers.map((function(e){return e.jeepney.plateNumber}))})})),G(!0),P(t),s.a.success({content:"Successfully Removed Driver from Assigned Jeepney"})})),U.a.get("/api/v1/jeepneys/").then((function(e){var t=e.data;t=t.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{barangayName:e.barangay.barangayName})})),b(t)}))})).catch((function(e){return console.log(e)}))},ae={onChange:function(e,t){},hideSelectAll:!0,onSelect:function(e,t,a){F(e.key),G(t),C(e.id),O(e)},getCheckboxProps:function(e){return{disabled:0!==e.jeepneyDriver.length}}};return Object(j.jsxs)("div",{children:[Object(j.jsxs)(n.a,{align:"top",gutter:32,children:[Object(j.jsx)(o.a,{children:Object(j.jsx)(V,{level:2,children:"Assign Drivers"})}),Object(j.jsx)(r.a,{flex:"300px",children:Object(j.jsxs)(i.a,{bordered:!1,children:[Object(j.jsx)(V,{level:5,children:"Availabe Jeepneys"}),Object(j.jsx)(l.a,{bordered:!0,rowSelection:Object(T.a)({type:"radio"},ae),columns:W,dataSource:Y,scroll:{x:300,y:500}})]})}),Object(j.jsx)(r.a,{flex:"auto",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(V,{level:5,children:"Jeepney Info"}),Object(j.jsx)(o.a,{}),Object(j.jsxs)(c.a,{layout:"vertical",children:[Object(j.jsx)(Q,{strong:!0,children:"ID:"}),Object(j.jsx)("p",{children:f.id}),Object(j.jsx)(Q,{strong:!0,children:"Barangay:"}),Object(j.jsx)("p",{children:f.barangayName}),Object(j.jsx)(Q,{strong:!0,children:"Plate Number:"}),Object(j.jsx)("p",{children:f.plateNumber}),Object(j.jsx)(Q,{strong:!0,children:"Jeep Capacity:"}),Object(j.jsx)("p",{children:f.jeepCapacity})]})]})})]}),Object(j.jsx)(o.a,{children:"Drivers"}),Object(j.jsx)(n.a,{gutter:16,children:Object(j.jsx)(r.a,{children:Object(j.jsx)(i.a,{bordered:!1,children:Object(j.jsx)(l.a,{bordered:!0,columns:X,dataSource:Z,scroll:{y:500}})})})})]})}}}]);
//# sourceMappingURL=6.51ac1f20.chunk.js.map