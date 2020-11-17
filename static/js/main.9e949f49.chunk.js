(this["webpackJsonptestspa-react"]=this["webpackJsonptestspa-react"]||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(3),a=n.n(r),i=n(18),s=n.n(i),u=n(19),l=n(25),j=n(64),o=n(53),d=n.n(o),b=n(65),p="SET_USERS",O="ADD_USER",h="SET_PAGE";var f=n(15),x=n(54),v=n.n(x),m=(n(82),n(70));function g(e){var t=/^(\d{1,2})\.(\d{1,2})\.(\d{1,4})$/.exec(e);if(!t)return null;var n=Object(f.a)(t,4),c=n[1],r=n[2],a=n[3];return new Date(a,r-1,c)}function y(e){return Object(c.jsx)(v.a,{dateFormat:"dd.MM.yyyy",locale:"ru",selected:g(e.value),onChange:function(t){return e.onInput(function(e){if(!e)return"";var t=(""+e.getFullYear()).padStart(4,"0"),n=(""+(e.getMonth()+1)).padStart(2,"0"),c=(""+e.getDate()).padStart(2,"0");return"".concat(c,".").concat(n,".").concat(t)}(t))}})}function I(e){return Object(c.jsx)("input",{type:"email",value:e.value,onInput:function(t){return e.onInput(t.target.value)}})}Object(x.registerLocale)("ru",m.a);var N=n(69);function S(e){return Object(c.jsx)(N.a,{mask:"+{7}(000)000-00-00",value:(e.value||"").replace(/^\+/,""),unmask:!0,onAccept:function(t){return e.onInput("+"+t)}})}n(143);function w(e){var t=Object(r.useState)(""),n=Object(f.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(""),u=Object(f.a)(s,2),l=u[0],j=u[1],o=Object(r.useState)(""),d=Object(f.a)(o,2),b=d[0],p=d[1],O=Object(r.useState)(""),h=Object(f.a)(O,2),x=h[0],v=h[1],m=Object(r.useState)(""),g=Object(f.a)(m,2),N=g[0],w=g[1],_=Object(r.useState)(""),k=Object(f.a)(_,2),E=k[0],C=k[1];function D(){i(""),j(""),p(""),v(""),w(""),C("")}var F={name:!!a,date:!!l,email:!!b&&/^.+@.+\..+$/.test(b),phone:!!x&&12===x.length,distance:!!N,payment:!!E&&/^\d+$/.test(E)},G=[F.name,F.date,F.email,F.phone,F.distance,F.payment].every((function(e){return e}));return Object(c.jsxs)("form",{className:"user-form",onSubmit:function(t){return function(t){t.preventDefault(),e.onDone({clear:function(){return D()},user:{name:a,date:l,email:b,phone:x,distance:N,payment:E}})}(t)},children:[Object(c.jsxs)("div",{className:"field"+(F.name?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"\u0424\u0418\u041e"}),Object(c.jsx)("input",{type:"text",value:a,onInput:function(e){return i(e.target.value)}})]}),Object(c.jsxs)("div",{className:"field"+(F.date?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(c.jsx)(y,{value:l,onInput:function(e){return j(e)}})]}),Object(c.jsxs)("div",{className:"field"+(F.email?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)(I,{value:b,onInput:function(e){return p(e)}})]}),Object(c.jsxs)("div",{className:"field"+(F.phone?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(c.jsx)(S,{value:x,onInput:function(e){return v(e)}})]}),Object(c.jsxs)("div",{className:"field"+(F.distance?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"}),Object(c.jsxs)("select",{value:N,onInput:function(e){return w(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"---"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"5"}),Object(c.jsx)("option",{children:"10"})]})]}),Object(c.jsxs)("div",{className:"field"+(F.payment?"":" field_invalid"),children:[Object(c.jsx)("label",{children:"\u0421\u0443\u043c\u043c\u0430 \u0432\u0437\u043d\u043e\u0441\u0430"}),Object(c.jsx)("input",{type:"number",value:E,onInput:function(e){return C(e.target.value)}})]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{type:"submit",disabled:!G,children:"OK"}),Object(c.jsx)("button",{type:"button",onClick:function(){return D()},children:"Reset"})]})]})}n(144);function _(e){for(var t=new Array(Math.ceil(e.total/e.step)),n=0;n<t.length;n++)t[n]=n+1;return Object(c.jsxs)("div",{className:"pagination",children:[e.page>1&&Object(c.jsx)("span",{onClick:function(){return e.onGo(e.page-1)},children:"prev"}),t.map((function(t){return Object(c.jsx)("span",{onClick:function(){return e.onGo(t)},className:t===e.page?"active":"",children:t},t)})),e.total>e.page*e.step&&Object(c.jsx)("span",{onClick:function(){return e.onGo(e.page+1)},children:"next"})]})}n(145);function k(e){return Object(c.jsxs)("table",{className:"users-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"\u0424\u0418\u041e"}),Object(c.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(c.jsx)("th",{children:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"}),Object(c.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u0432\u0437\u043d\u043e\u0441\u0430"})]})}),Object(c.jsx)("tbody",{children:e.users.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.distance}),Object(c.jsx)("td",{children:e.payment})]},e.id)}))})]})}function E(e,t){return e.list.slice((t.page-1)*t.step,t.page*t.step).map((function(t){return e.index[t]}))}var C=Object(l.b)((function(e){return{pagedUsers:E(e.users,e.pagination),page:e.pagination.page,step:e.pagination.step,total:e.users.list.length}}),(function(e){return{onGo:function(t){e(function(e){return{type:h,page:e}}(t))}}}))((function(e){return Object(c.jsxs)("div",{className:e.className+" users-overview",children:[Object(c.jsx)(k,{className:"users-overview__users-table",users:e.pagedUsers}),Object(c.jsx)(_,{page:e.page,total:e.total,step:e.step,onGo:function(t){return e.onGo(t)}})]})}));n(146);var D=Object(l.b)((function(e){return{}}),(function(e){return{onNewUser:function(t){e(function(e){return{type:O,user:e}}(t))}}}))((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{onDone:function(t){return function(t){e.onNewUser(t.user),t.clear()}(t)}}),Object(c.jsx)(C,{className:"app__users-overview"})]})})),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},G=n(71),M=n(68),U=n(17),A={index:{},list:[],nextId:1};var T={page:1,step:5};var L,P=Object(u.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=Object(U.a)(Object(U.a)({},t.user),{},{id:e.nextId});return{index:Object(U.a)(Object(U.a)({},e.index),{},Object(M.a)({},n.id,n)),list:[].concat(Object(G.a)(e.list),[n.id]),nextId:e.nextId+1};case p:var c={},r=new Array(t.users.length);return t.users.forEach((function(e,t){c[e.id]=Object(U.a)({},e),r[t]=e.id})),{list:r,index:c,nextId:t.users.reduce((function(e,t){return Math.max(e,t.id)}),0)+1};default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(U.a)(Object(U.a)({},e),{},{page:t.page});default:return e}}}),R=(n(147),Object(u.d)(P,Object(u.a)(j.a)));R.dispatch((L="/users.json",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(L);case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t((c=n.users,{type:p,users:c}));case 6:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())),s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{store:R,children:Object(c.jsx)(D,{})})}),document.getElementById("app")),F()}},[[148,1,2]]]);
//# sourceMappingURL=main.9e949f49.chunk.js.map