webpackJsonp([1],{127:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(91),n=i(348),o=i.n(n),r=i(333),s=(i.n(r),i(340)),c=i.n(s),u=i(341),l=i.n(u),v=i(342),d=i.n(v),f=i(130);if(a.a.use(o.a),a.a.config.productionTip=!1,a.a.use(c.a),a.a.use(l.a),"file:"===window.location.protocol||"3000"===window.location.port){var p=document.createElement("script");p.setAttribute("type","text/javascript"),p.setAttribute("src","cordova.js"),document.body.appendChild(p)}new a.a({el:"#app",router:f.a,template:"<App/>",components:{App:d.a},head:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]}})},129:function(t,e,i){"use strict";var a={exit:function(){navigator.app.exitApp()}};e.a={items:[{icon:"fas fa-home",title:"Home",id:"home"},{icon:"fab fa-facebook-square",title:"Facebook Page",id:"fb"},{icon:"fab fa-pinterest-square",title:"Pinterest Page",id:"pt"},{classes:["menu-separator"],cordova:!0},{icon:"fas fa-sign-out-alt",title:"Exit",id:"exit",separator:!0,cordova:!0}],buttons:[{icon:"fas fa-sign-out-alt",title:"Exit",id:"exit",cordova:!0}],controller:function(t,e){if(a[t.id])return void a[t.id]();alert("Clicked "+t.title)},miniVariant:!1}},130:function(t,e,i){"use strict";var a=i(91),n=i(346),o=i(343),r=i.n(o);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:r.a}]})},131:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(91),n=i(129);e.default={data:function(){return{cordova:a.a.cordova,drawer:!1,menuItems:n.a.items,menuButtons:n.a.buttons,miniVariant:n.a.miniVariant,title:"Vuetify",isCordovaReady:!1}},created:function(){var t=this;this.cordova.on("deviceready",function(){t.onDeviceReady(),t.isCordovaReady=!0})},methods:{onDeviceReady:function(){this.cordova.on("pause",this.onPause,!1),this.cordova.on("resume",this.onResume,!1),"Android"===this.cordova.device.platform&&document.addEventListener("backbutton",this.onBackButton,!1)},onPause:function(){console.log("pause")},onResume:function(){setTimeout(function(){console.log("resume")},0)},onBackButton:function(){},exitApp:function(){navigator.app.exitApp()},menuClick:function(t){n.a.controller(t)}}}},333:function(t,e){},334:function(t,e){},335:function(t,e){},339:function(t,e,i){t.exports=i.p+"img/icon.2320d21.png"},342:function(t,e,i){function a(t){i(334)}var n=i(126)(i(131),i(344),a,null,null);t.exports=n.exports},343:function(t,e,i){function a(t){i(335)}var n=i(126)(null,i(345),a,"data-v-b29dab86",null);t.exports=n.exports},344:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{light:""}},[i("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",t._l(t.menuItems,function(e,a){return i("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:!e.cordova||t.isCordovaReady,expression:"!item.cordova || isCordovaReady"}],key:a,class:e.classes,on:{click:function(i){t.menuClick(e)}}},[i("v-layout",{attrs:{row:""}},[i("div",{staticClass:"menu-icon",attrs:{title:e.title}},[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.miniVariant,expression:"!miniVariant"}],staticClass:"menu-label"},[t._v(t._s(e.title))])])],1)}))],1),t._v(" "),i("v-toolbar",{attrs:{fixed:"",app:""}},[i("v-toolbar-side-icon",{attrs:{light:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),i("v-spacer"),t._v(" "),t._l(t.menuButtons,function(e,a){return i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.cordova||t.isCordovaReady,expression:"!item.cordova || isCordovaReady"}],key:a,class:e.classes,attrs:{icon:"",light:"",title:e.title},on:{click:function(i){t.menuClick(e,!0)}}},[i("v-icon",[t._v(t._s(e.icon))])],1)})],2),t._v(" "),i("v-content",[i("router-view")],1)],1)},staticRenderFns:[]}},345:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("div",[a("img",{staticClass:"mb-5",attrs:{src:i(339),alt:"Vuetify1"}})]),t._v(" "),a("div",{staticClass:"align-center"},[t._v("\n        Vuetify Template for Cordova Projects\n      ")]),t._v(" "),a("div",{staticClass:"align-center"},[a("a",{attrs:{href:"https://github.com/fraigo/vuetify-cordova"}},[a("v-icon",[t._v("fab fa-github")]),t._v(" GitHub Project")],1)])])],1)},staticRenderFns:[]}},349:function(t,e,i){i(128),t.exports=i(127)}},[349]);
//# sourceMappingURL=app.5c799ceaccb1af4785fe.js.map