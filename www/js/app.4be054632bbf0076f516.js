webpackJsonp([1],{127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(91),o=n(346),r=n.n(o),a=n(332),c=(n.n(a),n(338)),s=n.n(c),l=n(339),u=n.n(l),v=n(340),p=n.n(v),d=n(129);if(i.a.use(r.a),i.a.config.productionTip=!1,i.a.use(s.a),i.a.use(u.a),"file:"===window.location.protocol||"3000"===window.location.port){var m=document.createElement("script");m.setAttribute("type","text/javascript"),m.setAttribute("src","cordova.js"),document.body.appendChild(m)}new i.a({el:"#app",router:d.a,template:"<App/>",components:{App:p.a},head:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]}})},129:function(t,e,n){"use strict";var i=n(91),o=n(344),r=n(341),a=n.n(r);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:a.a}]})},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(91);e.default={data:function(){return{cordova:i.a.cordova,clipped:!1,drawer:!0,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},created:function(){var t=this;this.cordova.on("deviceready",function(){t.onDeviceReady()})},methods:{onDeviceReady:function(){this.cordova.on("pause",this.onPause,!1),this.cordova.on("resume",this.onResume,!1),"Android"===this.cordova.device.platform&&document.addEventListener("backbutton",this.onBackKeyDown,!1)},onPause:function(){console.log("pause")},onResume:function(){setTimeout(function(){console.log("resume")},0)},onBackKeyDown:function(){navigator.app.exitApp()}}}},332:function(t,e){},333:function(t,e){},337:function(t,e,n){t.exports=n.p+"img/icon.2320d21.png"},340:function(t,e,n){function i(t){n(333)}var o=n(126)(n(130),n(343),i,null,null);t.exports=o.exports},341:function(t,e,n){var i=n(126)(null,n(342),null,null,null);t.exports=i.exports},342:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-slide-y-transition",{attrs:{mode:"out-in"}},[i("v-layout",{attrs:{column:"","align-center":""}},[i("img",{staticClass:"mb-5",attrs:{src:n(337),alt:"Vuetify"}}),t._v(" "),i("blockquote",[t._v("\n        “First, solve the problem. Then, write the code.”\n        "),i("footer",[i("small",[i("em",[t._v("—John Johnson")])])])])])],1)],1)},staticRenderFns:[]}},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,clipped:t.clipped,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{value:"true",exact:""}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),n("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{attrs:{light:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),t._v(" "),n("v-content",[n("router-view")],1),t._v(" "),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),t._v(" "),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1)],1)},staticRenderFns:[]}},347:function(t,e,n){n(128),t.exports=n(127)}},[347]);
//# sourceMappingURL=app.4be054632bbf0076f516.js.map