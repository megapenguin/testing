(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[6],{483:function(e,t,n){"use strict";n.r(t);n(130);var a=n(61),c=(n(151),n(50)),r=(n(133),n(43)),i=(n(152),n(105)),d=n(4),s=(n(411),n(410)),j=(n(406),n(407)),l=(n(211),n(131)),u=(n(404),n(405)),o=(n(91),n(48)),b=n(38),p=(n(156),n(117)),O=(n(132),n(62)),m=n(104),f=n(0),h=n(92),v=n.n(h);t.default=function(){var e=Object(f.useState)([]),t=Object(m.a)(e,2),n=t[0],h=t[1],x=Object(f.useState)([]),y=Object(m.a)(x,2),g=y[0],I=y[1],N=Object(f.useState)(0),S=Object(m.a)(N,2),k=(S[0],S[1],Object(f.useState)([])),C=Object(m.a)(k,2),A=C[0],J=C[1],D=Object(f.useState)([]),_=Object(m.a)(D,2),w=(_[0],_[1],Object(f.useState)([])),P=Object(m.a)(w,2),R=P[0],T=P[1],z=Object(f.useState)([]),E=Object(m.a)(z,2),F=(E[0],E[1],Object(f.useState)()),L=Object(m.a)(F,2),M=L[0],q=L[1],B=Object(f.useState)(),G=Object(m.a)(B,2),H=G[0],K=G[1],Q=(O.a.Search,p.a.Text),U=p.a.Title;Object(f.useEffect)((function(){v.a.get("/api/v1/jeepneys/").then((function(e){var t=e.data;h(t)})),v.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId?e.jeepneyId:"none"}))})})),T(t)})).catch((function(e){return console.log(e)}))}),[]);var V=[{title:"Firstname",dataIndex:"firstName"},{title:"Middlename",dataIndex:"middleName"},{title:"Lastname",dataIndex:"lastName"},{title:"Actions",key:"action",render:function(e,t){return Object(d.jsx)(u.b,{size:"middle",children:0===t.jeepId.length?Object(d.jsx)(o.a,{onClick:function(){return Z(A,t.id)},type:"primary",className:"modal-button",children:"Assign"}):Object(d.jsx)(o.a,{onClick:function(){return $(t.id)},type:"danger",className:"modal-button",children:"Remove"})})}}],W=n.map((function(e,t){return{key:t,id:e.id,plateNumber:e.plateNumber,jeepCapacity:e.jeepCapacity}})),X=R.map((function(e,t){return{key:t,id:e.id,jeepId:e.jeepId,firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,email:e.email,address:e.address,contactNumber:e.contactNumber}})),Y={onChange:function(e,t){},hideSelectAll:!0,onSelect:function(e,t,n){q(e.key),K(t),J(e.id),I(e)},getCheckboxProps:function(e){return{disabled:e.key!==M&&!0===H}}},Z=function(e,t){!0===H?v.a.post("/api/v1/jeepneydrivers/add_jeepney_driver",{driverId:t,jeepneyId:e}).then((function(e){v.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId}))})})),T(t),l.a.success({content:"Successfully Assigned Driver"})}))})).catch((function(e){return console.log(e)})):l.a.error({content:"Select a jeepney"})},$=function(e){v.a.delete("/api/v1/jeepneydrivers/delete_jeepney_driver",{params:{driverId:e}}).then((function(e){v.a.get("/api/v1/drivers/").then((function(e){var t=e.data;t=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{jeepId:e.jeepneydrivers.map((function(e){return e.jeepneyId}))})})),T(t),l.a.success({content:"Successfully Removed Driver from Assigned Jeepney"})}))})).catch((function(e){return console.log(e)}))};return Object(d.jsxs)("div",{children:[Object(d.jsxs)(a.a,{align:"top",gutter:32,children:[Object(d.jsx)(j.a,{children:Object(d.jsx)(U,{level:2,children:"Assign Drivers"})}),Object(d.jsx)(r.a,{flex:"300px",children:Object(d.jsxs)(i.a,{bordered:!1,children:[Object(d.jsx)(U,{level:5,children:"Select Jeepney"}),Object(d.jsx)(s.a,{rowSelection:Y,columns:[{title:"Plate Number",dataIndex:"plateNumber"}],dataSource:W,scroll:{x:300,y:500}})]})}),Object(d.jsx)(r.a,{flex:"auto",children:Object(d.jsx)(i.a,{title:"Jeepney Info",bordered:!1,children:Object(d.jsxs)(c.a,{layout:"vertical",children:[Object(d.jsx)(Q,{strong:!0,children:"ID:"}),Object(d.jsx)("p",{children:g.id}),Object(d.jsx)(Q,{strong:!0,children:"Plate Number:"}),Object(d.jsx)("p",{children:g.plateNumber}),Object(d.jsx)(Q,{strong:!0,children:"Jeep Capacity:"}),Object(d.jsx)("p",{children:g.jeepCapacity})]})})})]}),Object(d.jsx)(j.a,{children:"Drivers"}),Object(d.jsx)(a.a,{gutter:16,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{bordered:!1,children:Object(d.jsx)(s.a,{columns:V,dataSource:X,scroll:{y:500}})})})})]})}}}]);
//# sourceMappingURL=6.abceb9a4.chunk.js.map