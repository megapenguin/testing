(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[2],{161:function(e,t,a){},224:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(0),c=a.n(s),r=a(23),i=a.n(r),l=(a(224),a.p,a(161),a(45)),o=a(31),j=a(37);var u=Object(o.g)((function(e){var t=e.component,a=e.Auth,s=(e.history,e.res);return Object(n.jsx)(o.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return a.state.isAuthenticated&&"admin"==a.state.userData.myStatus?Object(n.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}}):Object(n.jsx)(t,{})}}))}));Object(o.g)((function(e){var t=e.component,a=e.Auth,s=(e.history,e.res);return console.log(a),Object(n.jsx)(o.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return a.state.isAuthenticated&&"home"==a.state.userData.myStatus?Object(n.jsx)(t,{Auth:a}):Object(n.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}));var d=Object(o.g)((function(e){var t=e.layout,a=e.component,s=e.Auth,c=(e.history,e.res);return Object(n.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return s.state.isAuthenticated&&"admin"==s.state.userData.myStatus?Object(n.jsx)(t,{children:Object(n.jsx)(a,{})}):Object(n.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})),b=a(70),h=a.n(b),O=a(99),x=a(104),m=function(e,t){switch(t.type){case"LOAD_TOKEN":return Object(j.a)(Object(j.a)({},e),{},{secureToken:t.secureToken,userData:t.userData,isAuthenticated:!0,isLoading:!1});case"LOADING":return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1});case"LOAD_USER_DATA":default:return Object(j.a)({},e)}},p=a(91),f=a.n(p),g=Object(s.createContext)(),v={secureToken:"",isAuthenticated:!1,userData:{},isLoading:!0};function y(e){var t=e.children,a=Object(s.useReducer)(m,v),c=Object(x.a)(a,2),r=c[0],i=c[1],l=function(){var e=Object(O.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,f.a.post("/api/v1/auths/",{token:t},{headers:{Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e),localStorage.removeItem("token")}));case 3:a=e.sent,i(a?{type:"LOAD_TOKEN",secureToken:a.data.token,userData:a.data.userData}:{type:"LOADING"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){l()}),[]);var o=function(){var e=Object(O.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/v1/auths/auth_admin_login",Object(j.a)({},t)).catch((function(e){return e.response}));case 2:if(422!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",{success:!1,errorMassage:"Invalid email or password"});case 7:if(200!==a.status){e.next=11;break}return localStorage.setItem("token",a.data.token),i({type:"LOAD_TOKEN",secureToken:a.data.secureToken,userData:a.data.userData}),e.abrupt("return",{success:!0});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(g.Provider,{value:{state:r,authenticate:o},children:t})}a(130);var k=a(61),A=(a(132),a(43)),N=(a(153),a(105)),w=(a(92),a(49)),I=(a(151),a(51)),P=(a(133),a(62)),D=(a(213),a(131)),F=(a(152),a(106)),L=(a(215),a(156)),S=a.p+"static/media/logo.0d48cf5e.png";var T=function(){return Object(n.jsx)(L.a,{preview:!1,width:120,src:S,style:{borderColor:"white",border:"10px",borderRadius:"50%"}})},C=F.a.Title;var E=Object(o.g)((function(e){e.history;var t=Object(s.useContext)(g),a=function(){var e=Object(O.a)(h.a.mark((function e(a){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.authenticate(a);case 2:n=e.sent,s=n.success,n.errorMessage,s?D.a.success({content:"Successfully Log in!"}):D.a.error({content:"Email or Password is incorrect!"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"loginCard",children:Object(n.jsx)(k.a,{type:"flex",justify:"center",align:"middle",style:{minHeight:"80vh"},children:Object(n.jsx)(A.a,{children:Object(n.jsx)(N.a,{title:Object(n.jsx)(C,{level:2,children:"Retrack ADMIN"}),className:"loginCardStyle",children:Object(n.jsxs)("cardBody",{children:[Object(n.jsx)(T,{}),Object(n.jsxs)(I.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:a,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(I.a.Item,{label:"Email:",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your Email!"}],children:Object(n.jsx)(P.a,{placeholder:"Email"})}),Object(n.jsx)(I.a.Item,{label:"Password:",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(P.a.Password,{placeholder:"Password"})}),Object(n.jsx)(I.a.Item,{children:Object(n.jsx)("a",{style:{float:"right"},href:"/register",children:"Create an Account?"})}),Object(n.jsx)(w.a,{type:"primary",htmlType:"submit",shape:"round",className:"form-button",children:"LOGIN"})]})]})})})})})})),R=F.a.Title;var z=Object(o.g)((function(e){var t=e.history;return Object(n.jsx)("div",{className:"registerCard",children:Object(n.jsx)(k.a,{type:"flex",justify:"center",children:Object(n.jsx)(A.a,{children:Object(n.jsx)(N.a,{title:Object(n.jsx)(R,{level:2,children:"Retrack ADMIN"}),className:"registerCardStyle",children:Object(n.jsxs)(I.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(e){e.provider="ADMIN",console.log(e),console.log(e),f.a.post("/api/v1/admins/register_admin",e).then((function(e){t.push("/login")})).catch((function(e){return console.log(e)}))},onFinishFailed:function(e){console.log("fail"),console.log("Failed:",e)},children:[Object(n.jsx)("h3",{children:Object(n.jsx)("b",{children:"Admin Account Registration"})}),Object(n.jsx)(I.a.Item,{label:"First Name:",name:"firstName",rules:[{required:!0,message:"Please input your First Name!"}],children:Object(n.jsx)(P.a,{placeholder:"Firstname"})}),Object(n.jsx)(I.a.Item,{label:"Last Name:",name:"lastName",rules:[{required:!0,message:"Please input your Last Name!"}],children:Object(n.jsx)(P.a,{placeholder:"Lastname"})}),Object(n.jsx)(I.a.Item,{label:"Email:",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your email!"}],children:Object(n.jsx)(P.a,{placeholder:"Email"})}),Object(n.jsx)(I.a.Item,{name:"password",label:"Password:",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(n.jsx)(P.a.Password,{placeholder:"Password"})}),Object(n.jsx)(I.a.Item,{name:"confirm",label:"Confirm Password:",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}],children:Object(n.jsx)(P.a.Password,{placeholder:"Confirm Password"})}),Object(n.jsx)(I.a.Item,{children:Object(n.jsx)(w.a,{type:"primary",htmlType:"submit",shape:"round",className:"form-button",children:"REGISTER"})})]})})})})})})),_=(a(390),a(66)),q=(a(392),a(79)),B=a(400),M=a(401),U=a(402),G=a(403),J=a(404),K=a(405),H=a(212),V=a.n(H),W=q.a.Header,Q=q.a.Content,X=q.a.Footer,Y=q.a.Sider;var Z=function(e){var t=e.children;return Object(n.jsxs)(q.a,{children:[Object(n.jsxs)(Y,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)(T,{}),Object(n.jsxs)(_.a,{className:"sidebar",theme:"dark",mode:"inline",defaultSelectedKeys:[""],children:[Object(n.jsx)(_.a.Item,{icon:Object(n.jsx)(B.a,{}),children:Object(n.jsx)(l.b,{to:"/",children:"Dashboard"})},"1"),Object(n.jsx)(_.a.Item,{icon:Object(n.jsx)(M.a,{}),children:Object(n.jsx)(l.b,{to:"/driver-list",children:" Driver List"})},"2"),Object(n.jsxs)(V.a,{icon:Object(n.jsx)(U.a,{}),title:"Jeepneys",children:[Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(l.b,{to:"/jeepney-list",children:" Jeepney List"})},"3"),Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(l.b,{to:"/assigned-driver",children:"Assign Drivers"})},"4")]},"sub1"),Object(n.jsx)(_.a.Item,{icon:Object(n.jsx)(G.a,{}),children:Object(n.jsx)(l.b,{to:"/barangay-list",children:" Barangay List"})},"5"),Object(n.jsx)(_.a.Item,{icon:Object(n.jsx)(M.a,{}),children:Object(n.jsx)(l.b,{to:"/users-list",children:" Users List"})},"6"),Object(n.jsx)(_.a.Item,{icon:Object(n.jsx)(J.a,{}),children:Object(n.jsx)(l.b,{to:"/funfacts-list",children:" Fun Facts List"})},"7")]})]}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(W,{className:"site-layout-sub-header-background",style:{padding:0,textAlign:"center",backgroundColor:"rgb(2, 19, 46)"},children:Object(n.jsxs)("h1",{style:{color:"white",backgroundColor:"#001529"},children:["Retrack Admin",Object(n.jsx)(w.a,{onClick:function(){localStorage.clear()},href:"/login",type:"danger",icon:Object(n.jsx)(K.a,{}),style:{borderRadius:"10%",margin:"10px",float:"right",textAlign:"center"}})]})}),Object(n.jsx)(Q,{style:{margin:"24px 16px 0"},children:Object(n.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:500},children:t})}),Object(n.jsx)(X,{style:{textAlign:"center"},children:"Ant Design \ufffd2018 Created by Ant UED"})]})]})},$=a(406),ee=c.a.lazy((function(){return a.e(9).then(a.bind(null,502))}));var te=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(ee,{})})})},ae=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(6)]).then(a.bind(null,505))}));var ne=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(ae,{})})})},se=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,506))}));var ce=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(se,{})})})},re=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,507))}));var ie=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(re,{})})})},le=c.a.lazy((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,508))}));var oe=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(le,{})})})},je=c.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,504))}));var ue=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(je,{})})})},de=c.a.lazy((function(){return Promise.all([a.e(1),a.e(5),a.e(12)]).then(a.bind(null,509))}));var be=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{className:"icons-list",children:Object(n.jsx)($.a,{spin:!0})}),children:Object(n.jsx)(de,{})})})};var he=function(){var e=Object(s.useContext)(g);return Object(n.jsx)(c.a.Fragment,{children:!e.state.isLoading&&Object(n.jsx)(l.a,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(u,{Auth:e,path:"/login",component:E,exact:!0}),Object(n.jsx)(d,{Auth:e,path:"/",layout:Z,component:te,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/barangay-list",component:ne,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/driver-list",component:ce,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/jeepney-list",component:ie,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/assigned-driver",component:ue,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/users-list",component:oe,exact:!0}),Object(n.jsx)(d,{Auth:e,layout:Z,path:"/funfacts-list",component:be,exact:!0}),Object(n.jsx)(u,{Auth:e,path:"/register",component:z,exact:!0}),Object(n.jsx)(o.b,{component:function(){return Object(n.jsx)("h1",{children:"URL NOT FOUND"})}})]})})})},Oe=function(e){e&&e instanceof Function&&a.e(13).then(a.bind(null,503)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{children:Object(n.jsx)(he,{})})}),document.getElementById("root")),Oe()}},[[398,3,4]]]);
//# sourceMappingURL=main.520ae025.chunk.js.map