(this["webpackJsonpretrack-admin"]=this["webpackJsonpretrack-admin"]||[]).push([[2],{159:function(e,t,n){},224:function(e,t,n){},398:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(0),c=n.n(s),r=n(23),i=n.n(r),l=(n(224),n.p,n(159),n(47)),o=n(31),j=n(38);var u=Object(o.g)((function(e){var t=e.component,n=e.Auth,s=(e.history,e.res);return Object(a.jsx)(o.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return n.state.isAuthenticated&&"admin"==n.state.userData.myStatus?Object(a.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}}):Object(a.jsx)(t,{})}}))}));Object(o.g)((function(e){var t=e.component,n=e.Auth,s=(e.history,e.res);return console.log(n),Object(a.jsx)(o.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return n.state.isAuthenticated&&"home"==n.state.userData.myStatus?Object(a.jsx)(t,{Auth:n}):Object(a.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}));var d=Object(o.g)((function(e){var t=e.layout,n=e.component,s=e.Auth,c=(e.history,e.res);return Object(a.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return s.state.isAuthenticated&&"admin"==s.state.userData.myStatus?Object(a.jsx)(t,{children:Object(a.jsx)(n,{})}):Object(a.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})),b=n(70),h=n.n(b),O=n(99),x=n(104),m=function(e,t){switch(t.type){case"LOAD_TOKEN":return Object(j.a)(Object(j.a)({},e),{},{secureToken:t.secureToken,userData:t.userData,isAuthenticated:!0,isLoading:!1});case"LOADING":return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1});case"LOAD_USER_DATA":default:return Object(j.a)({},e)}},p=n(92),f=n.n(p),g=Object(s.createContext)(),y={secureToken:"",isAuthenticated:!1,userData:{},isLoading:!0};function v(e){var t=e.children,n=Object(s.useReducer)(m,y),c=Object(x.a)(n,2),r=c[0],i=c[1],l=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,f.a.post("/api/v1/auths/",{token:t},{headers:{Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e),localStorage.removeItem("token")}));case 3:n=e.sent,i(n?{type:"LOAD_TOKEN",secureToken:n.data.token,userData:n.data.userData}:{type:"LOADING"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){l()}),[]);var o=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/v1/auths/auth_admin_login",Object(j.a)({},t)).catch((function(e){return e.response}));case 2:if(422!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",{success:!1,errorMassage:"Invalid email or password"});case 7:if(200!==n.status){e.next=11;break}return localStorage.setItem("token",n.data.token),i({type:"LOAD_TOKEN",secureToken:n.data.secureToken,userData:n.data.userData}),e.abrupt("return",{success:!0});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(g.Provider,{value:{state:r,authenticate:o},children:t})}n(130);var A=n(61),k=(n(133),n(43)),N=(n(152),n(105)),w=(n(91),n(48)),I=(n(151),n(50)),D=(n(132),n(62)),P=(n(213),n(131)),S=(n(156),n(117)),L=(n(214),n(153)),T=n.p+"static/media/logo.0d48cf5e.png";var F=function(){return Object(a.jsx)(L.a,{preview:!1,height:100,src:T,style:{borderColor:"white",border:"10px",borderRadius:"50%"}})},C=S.a.Title;var E=Object(o.g)((function(e){e.history;var t=Object(s.useContext)(g),n=function(){var e=Object(O.a)(h.a.mark((function e(n){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.authenticate(n);case 2:a=e.sent,s=a.success,a.errorMessage,s?P.a.success({content:"Successfully Log in!"}):P.a.error({content:"Email or Password is incorrect!"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"loginCard",children:Object(a.jsx)(A.a,{type:"flex",justify:"center",align:"middle",style:{minHeight:"80vh"},children:Object(a.jsx)(k.a,{children:Object(a.jsx)(N.a,{title:Object(a.jsx)(C,{level:2,children:"Retrack ADMIN"}),className:"loginCardStyle",children:Object(a.jsxs)("cardBody",{children:[Object(a.jsx)(F,{}),Object(a.jsxs)(I.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:n,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(I.a.Item,{label:"Email:",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your Email!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(I.a.Item,{label:"Password:",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(a.jsx)(D.a.Password,{})}),Object(a.jsx)(I.a.Item,{children:Object(a.jsx)("a",{style:{float:"right"},href:"/register",children:"Create an Account?"})}),Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",shape:"round",className:"form-button",children:"LOGIN"})]})]})})})})})})),R=S.a.Title;var _=Object(o.g)((function(e){var t=e.history;return Object(a.jsx)("div",{className:"registerCard",children:Object(a.jsx)(A.a,{type:"flex",justify:"center",children:Object(a.jsx)(k.a,{children:Object(a.jsx)(N.a,{title:Object(a.jsx)(R,{level:2,children:"Retrack ADMIN"}),className:"registerCardStyle",children:Object(a.jsxs)(I.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(e){e.provider="ADMIN",console.log(e),console.log(e),f.a.post("/api/v1/admins/register_admin",e).then((function(e){t.push("/login")})).catch((function(e){return console.log(e)}))},onFinishFailed:function(e){console.log("fail"),console.log("Failed:",e)},children:[Object(a.jsx)("h3",{children:Object(a.jsx)("b",{children:"Admin Account Registration"})}),Object(a.jsx)(I.a.Item,{label:"First Name:",name:"firstName",rules:[{required:!0,message:"Please input your First Name!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(I.a.Item,{label:"Last Name:",name:"lastName",rules:[{required:!0,message:"Please input your Last Name!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(I.a.Item,{label:"Email:",name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your email!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(I.a.Item,{name:"password",label:"Password:",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(a.jsx)(D.a.Password,{})}),Object(a.jsx)(I.a.Item,{name:"confirm",label:"Confirm Password:",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}],children:Object(a.jsx)(D.a.Password,{})}),Object(a.jsx)(I.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",shape:"round",className:"form-button",children:"REGISTER"})})]})})})})})})),q=(n(390),n(69)),z=(n(392),n(78)),B=n(400),M=n(401),U=n(402),G=n(403),J=n(404),K=n(212),H=n.n(K),V=z.a.Header,W=z.a.Content,Q=z.a.Footer,X=z.a.Sider;var Y=function(e){var t=e.children;return Object(a.jsxs)(z.a,{children:[Object(a.jsxs)(X,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(q.a,{className:"sidebar",theme:"dark",mode:"inline",defaultSelectedKeys:[""],children:[Object(a.jsx)(F,{}),Object(a.jsx)(q.a.Item,{icon:Object(a.jsx)(B.a,{}),children:Object(a.jsx)(l.b,{to:"/",children:"Dashboard"})},"1"),Object(a.jsx)(q.a.Item,{icon:Object(a.jsx)(M.a,{}),children:Object(a.jsx)(l.b,{to:"/driver-list",children:" Driver List"})},"2"),Object(a.jsxs)(H.a,{icon:Object(a.jsx)(U.a,{}),title:"Jeepneys",children:[Object(a.jsx)(q.a.Item,{children:Object(a.jsx)(l.b,{to:"/jeepney-list",children:" Jeepney List"})},"3"),Object(a.jsx)(q.a.Item,{children:Object(a.jsx)(l.b,{to:"/assigned-driver",children:"Assign Drivers"})},"4")]},"sub1"),Object(a.jsx)(q.a.Item,{icon:Object(a.jsx)(G.a,{}),children:Object(a.jsx)(l.b,{to:"/barangay-list",children:" Barangay List"})},"5"),Object(a.jsx)(q.a.Item,{icon:Object(a.jsx)(M.a,{}),children:Object(a.jsx)(l.b,{to:"/users-list",children:" Users List"})},"6")]})]}),Object(a.jsxs)(z.a,{children:[Object(a.jsx)(V,{className:"site-layout-sub-header-background",style:{padding:0,textAlign:"center"},children:Object(a.jsxs)("h1",{style:{color:"white"},children:["Retrack Admin",Object(a.jsx)(w.a,{onClick:function(){localStorage.clear()},href:"/login",type:"danger",icon:Object(a.jsx)(J.a,{}),style:{borderRadius:"10%",margin:"10px",float:"right",textAlign:"center"}})]})}),Object(a.jsx)(W,{style:{margin:"24px 16px 0"},children:Object(a.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:500},children:t})}),Object(a.jsx)(Q,{style:{textAlign:"center"},children:"Ant Design \ufffd2018 Created by Ant UED"})]})]})},Z=n(405),$=c.a.lazy((function(){return n.e(8).then(n.bind(null,485))}));var ee=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)($,{})})})},te=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,488))}));var ne=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)(te,{})})})},ae=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,489))}));var se=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)(ae,{})})})},ce=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,490))}));var re=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)(ce,{})})})},ie=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,491))}));var le=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)(ie,{})})})},oe=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,487))}));var je=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)("div",{className:"icons-list",children:Object(a.jsx)(Z.a,{spin:!0})}),children:Object(a.jsx)(oe,{})})})};var ue=function(){var e=Object(s.useContext)(g);return Object(a.jsx)(c.a.Fragment,{children:!e.state.isLoading&&Object(a.jsx)(l.a,{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(u,{Auth:e,path:"/login",component:E,exact:!0}),Object(a.jsx)(d,{Auth:e,path:"/",layout:Y,component:ee,exact:!0}),Object(a.jsx)(d,{Auth:e,layout:Y,path:"/barangay-list",component:ne,exact:!0}),Object(a.jsx)(d,{Auth:e,layout:Y,path:"/driver-list",component:se,exact:!0}),Object(a.jsx)(d,{Auth:e,layout:Y,path:"/jeepney-list",component:re,exact:!0}),Object(a.jsx)(d,{Auth:e,layout:Y,path:"/assigned-driver",component:je,exact:!0}),Object(a.jsx)(d,{Auth:e,layout:Y,path:"/users-list",component:le,exact:!0}),Object(a.jsx)(u,{Auth:e,path:"/register",component:_,exact:!0}),Object(a.jsx)(o.b,{component:function(){return Object(a.jsx)("h1",{children:"URL NOT FOUND"})}})]})})})},de=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,486)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{children:Object(a.jsx)(ue,{})})}),document.getElementById("root")),de()}},[[398,3,4]]]);
//# sourceMappingURL=main.32cc9d8b.chunk.js.map