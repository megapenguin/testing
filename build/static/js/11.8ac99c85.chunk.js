(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[11],{498:function(e,t,n){"use strict";n.r(t);n(123);var a=n(56),c=(n(124),n(44)),r=(n(146),n(101)),i=(n(99),n(63)),s=n(5),o=(n(208),n(145)),d=n(398),u=n(100),l=(n(209),n(138)),h=n(0),j=n(87),b=n.n(j),f=n(391),g=l.a.Title;l.a.Text;t.default=function(){var e=Object(h.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(h.useEffect)((function(){b.a.get("/api/v1/images/").then((function(e){var t=e.data;l(t)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)(a.a,{gutter:[16,16],children:[Object(s.jsx)("h1",{children:"List Of Saved Images: "}),n.map((function(e,t){return Object(s.jsx)(c.a,{md:{span:6},children:Object(s.jsxs)(r.a,{className:"shadow-sm",children:[Object(s.jsx)(g,{children:Object(s.jsx)(o.a,{height:100,src:"/api/v1/images/".concat(e.imagePath),style:{borderColor:"white",border:"10px"}})}),Object(s.jsxs)(f.Content,{children:["Owner ID : ",e.imageOwnerId]}),Object(s.jsx)(f.Content,{children:function(){switch(e.imageReferenceId){case 1:return console.log("case 1"),"Driver";case 2:return"Jeepney";case 3:return"Barangay"}}()}),Object(s.jsx)(i.a,{onClick:function(){return t=e.id,void b.a.delete("/api/v1/images/delete_image",{params:{id:t}}).then((function(e){var a=Object(d.a)(n);a=a.filter((function(e){return e.id!==t})),l(a)})).catch((function(e){return console.log(e)}));var t},danger:!0,children:"Delete"})]})},t)}))]})}}}]);
//# sourceMappingURL=11.8ac99c85.chunk.js.map