(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],[,,,,,,,,,,,function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,a,r){var t={"./dc-arrow.jpg":23,"./dc-batman.jpg":11,"./dc-black.jpg":24,"./dc-blue.jpg":25,"./dc-flash.jpg":26,"./dc-green.jpg":27,"./dc-martian.jpg":28,"./dc-robin.jpg":29,"./dc-superman.jpg":30,"./dc-wonder.jpg":31,"./marvel-captain.jpg":32,"./marvel-cyclops.jpg":33,"./marvel-daredevil.jpg":34,"./marvel-hawkeye.jpg":35,"./marvel-hulk.jpg":36,"./marvel-iron.jpg":37,"./marvel-silver.jpg":38,"./marvel-spider.jpg":39,"./marvel-thor.jpg":40,"./marvel-wolverine.jpg":41};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=12},,,,,,,,,function(e,a,r){},function(e,a,r){},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},,,,,,,,,,,,,,,function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(14),s=r.n(c),n=r(3),i=Object(t.createContext)(),l=r(6),o="[auth] Login",d="[auth] Logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},j=r(5),p=r(2),m=r(0),h=function(e){var a=e.children,r=Object(t.useContext)(i).user,c=Object(p.f)(),s=c.pathname,n=c.search;return localStorage.setItem("lastPath",s+n),r.logged?a:Object(m.jsx)(p.a,{to:"/login"})},b=function(e){var a=e.children;return Object(t.useContext)(i).user.logged?Object(m.jsx)(p.a,{to:"/"}):a},f=r(11),v=r(7),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1],i=function(){s(e)},o=function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(v.a)({},a.name,a.value)))};return[c,o,i]},g=(r(21),function(){var e=Object(p.g)(),a=Object(t.useContext)(i).dispatch,r=O({name:""}),c=Object(n.a)(r,2),s=c[0],l=c[1],d=s.name;return Object(m.jsx)("div",{className:"container mt-5 login animate__fadeIn animate__animated",children:Object(m.jsx)("div",{className:"card mb-3",children:Object(m.jsxs)("div",{className:"row g-0 d-flex align-items-center",children:[Object(m.jsx)("div",{className:"col-lg-4 d-none d-lg-flex",children:Object(m.jsx)("img",{src:f.default,alt:"Trendy Pants and Shoes",className:"w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 animate__delay-1s animate__slower animate__fadeIn animate__animated"})}),Object(m.jsx)("div",{className:"col-lg-8",children:Object(m.jsxs)("div",{className:"card-body py-5 px-md-5",children:[Object(m.jsx)("h1",{children:"Welcome to Heroes App"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{children:"Here you can find a lot of superheroes of dc comics and marvel"}),Object(m.jsx)("p",{children:"Thanks vor visiting, please write your name below :)"}),Object(m.jsxs)("form",{onSubmit:function(r){r.preventDefault(),a({type:o,payload:{name:d}});var t=localStorage.getItem("lastPath");e(t,{replace:!0})},children:[Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{autoComplete:"off",className:"form-control",name:"name",onChange:l,type:"text",value:d,autoFocus:!0})}),Object(m.jsx)("button",{className:"btn btn-outline-primary",children:"Login"})]})]})})]})})})}),x=function(){var e=Object(t.useContext)(i),a=e.user,r=e.dispatch,c=a.name,s=Object(p.g)();return Object(m.jsxs)("nav",{className:"px-4 pl-4 navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(m.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(m.jsx)("div",{className:"navbar-collapse",children:Object(m.jsxs)("div",{className:"navbar-nav",children:[Object(m.jsx)(j.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/marvel",children:"Marvel"}),Object(m.jsx)(j.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/dc",children:"DC"}),Object(m.jsx)(j.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/search",children:"Search"})]})}),Object(m.jsx)("div",{className:"order-3 navbar-collapse collapse w-100 dual-collapse2 d-flex justify-content-end",children:Object(m.jsxs)("ul",{className:"ml-auto navbar-nav",children:[Object(m.jsx)("span",{className:"nav-item nav-link text-info",children:c}),Object(m.jsx)("button",{onClick:function(){r({type:d}),s("/login",{replace:!0})},id:"logout",className:"nav-item nav-link btn",children:"Logout"})]})})]})},_=(r(22),r(12)),C=function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters,i=a.split("-")[0];return Object(m.jsxs)(j.b,{to:"/".concat(i,"/hero/").concat(a),className:"my-card",children:[Object(m.jsx)("img",{src:_("./".concat(a,".jpg")).default,className:"img img-responsive",alt:r}),Object(m.jsx)("div",{className:"profile-name",children:r}),Object(m.jsx)("div",{className:"profile-position",children:c}),Object(m.jsx)("div",{className:"profile-overview",children:Object(m.jsx)("div",{className:"profile-overview",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-ms-4",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(m.jsx)("br",{}),s]}),c!==n&&Object(m.jsx)("p",{children:n})]})})})})]})},N=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],y=function(e){var a=e.publisher,r=void 0===a?"marvel":a,c=Object(t.useMemo)((function(){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher"));return a.filter((function(a){return a.publisher===e}))}(r)}),[r]);return Object(m.jsx)("div",{className:"mt-4 row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn",children:c.map((function(e){return Object(m.jsx)(C,Object(l.a)({},e),e.id)}))})},w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Dc page"}),Object(m.jsx)(y,{publisher:"DC Comics"})]})},k=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Marvel page"}),Object(m.jsx)(y,{publisher:"Marvel Comics"})]})},S=r(15),D=r.n(S),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),N.filter((function(a){return a.superhero.toLowerCase().includes(e)})))},A=function(){var e=Object(p.g)(),a=Object(p.f)(),r=D.a.parse(a.search).q,c=void 0===r?"":r,s=O({searchText:c}),i=Object(n.a)(s,2),o=i[0],d=i[1],u=o.searchText,j=Object(t.useState)(M(u)),h=Object(n.a)(j,2),b=h[0],f=h[1];Object(t.useEffect)((function(){f(M(u))}),[u]),Object(t.useEffect)((function(){e("?q=".concat(u))}),[u,e]);var v=function(a){a.preventDefault(),e("?q=".concat(u))};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Search page"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsx)("h4",{children:"Buscar"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)("input",{type:"text",placeholder:"Search for a hero",className:"form-control",name:"searchText",autoComplete:"off",value:u,onChange:d}),Object(m.jsx)("button",{type:"submit",className:"btn brn-outline mt-1",onClick:v,children:"Search..."})]})]}),Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsx)("h4",{children:"Results"}),Object(m.jsx)("hr",{}),""===c?Object(m.jsx)("div",{className:"alert-info alert animate__fadeIn animate__animated",children:"Search for a superhero."}):0===b.length&&Object(m.jsxs)("div",{id:"error",className:"alert alert-danger animate__fadeIn animate__animated",children:['No results for "',c,'"']}),b.map((function(e){return Object(m.jsx)(C,Object(l.a)({},e),e.id)}))]})]})]})},B=r(12),T=function(){var e=Object(p.g)(),a=Object(p.h)(),r=a.heroId,c=a.pub,s=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return N.find((function(a){return a.id===e}))}(r)}),[r]);return s?Object(m.jsxs)("div",{className:"mt-5 row",children:[Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("img",{src:B("./".concat(s.id,".jpg")).default,alt:s.superhero,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(m.jsxs)("div",{className:"col-9 d-flex flex-column",children:[Object(m.jsx)("h1",{children:s.superhero}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"Alter ego: "}),s.alter_ego]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"Publisher: "}),s.publisher]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"First Appearance: "}),s.first_appearance]})]}),Object(m.jsx)("h5",{className:"mt-4",children:"Characters"}),Object(m.jsx)("p",{children:s.characters}),Object(m.jsx)("button",{className:"btn btn-outline-info align-self-end",onClick:function(){e("/".concat(c))},children:"Regresar"})]})]}):Object(m.jsx)(p.a,{to:"/"})},I=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"container mt-3",children:Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{path:"marvel",element:Object(m.jsx)(k,{})}),Object(m.jsx)(p.b,{path:"dc",element:Object(m.jsx)(w,{})}),Object(m.jsx)(p.b,{path:":pub/hero/:heroId",element:Object(m.jsx)(T,{})}),Object(m.jsx)(p.b,{path:"search",element:Object(m.jsx)(A,{})}),Object(m.jsx)(p.b,{path:"/",element:Object(m.jsx)(k,{})})]})})]})},J=function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{path:"/login",element:Object(m.jsx)(b,{children:Object(m.jsx)(g,{})})}),Object(m.jsx)(p.b,{path:"/*",element:Object(m.jsx)(h,{children:Object(m.jsx)(I,{})})})]})})},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},P=function(){var e=Object(t.useReducer)(u,{},F),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){r&&localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(m.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(m.jsx)(J,{})})};s.a.render(Object(m.jsx)(P,{}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.e5def91e.chunk.js.map