webpackJsonp([1],{128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(92),a=n(369),i=n.n(a),r=n(338),s=(n.n(r),n(351)),c=n.n(s),u=n(352),l=n.n(u),d=n(350),v=n(353),m=n.n(v),f=n(93);if(o.a.use(i.a),o.a.config.productionTip=!1,o.a.use(c.a),o.a.use(l.a),o.a.use(d.a),"file:"===window.location.protocol||"3000"===window.location.port){var p=document.createElement("script");p.setAttribute("type","text/javascript"),p.setAttribute("src","cordova.js"),document.body.appendChild(p)}new o.a({el:"#app",router:f.a.router,template:"<App/>",components:{App:m.a},head:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]}})},130:function(t,e){t.exports={title:"Vuetify Cordova",shortTitle:"Vuetify",description:"Vuetify PWA Application Template for Cordova Application Projects",url:"https://fraigo.github.io/vuetify-cordova/www/",icon:"img/icons/icon.png",iconSize:256,androidAppId:"io.github.fraigo.vuecordova",author:"Francisco Igor",email:"franciscoigor@gmail.com"}},131:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(92),a=n(93),i=n(356),r=n.n(i),s=n(354),c=n.n(s);e.default={components:{menuList:r.a,buttonList:c.a},data:function(){return{cordova:o.a.cordova,drawer:!1,toolbar:a.a.menu.toolbar,menuItems:a.a.menu.items,menuButtons:a.a.menu.buttons,miniVariant:a.a.menu.miniVariant,darkMode:a.a.menu.darkMode,config:a.a,isCordovaReady:!1}},created:function(){var t=this;this.cordova.on("deviceready",function(){t.onDeviceReady(),t.isCordovaReady=!0})},methods:{onDeviceReady:function(){this.cordova.on("pause",this.onPause,!1),this.cordova.on("resume",this.onResume,!1),"Android"===this.cordova.device.platform&&document.addEventListener("backbutton",this.onBackButton,!1)},onPause:function(){console.log("pause")},onResume:function(){setTimeout(function(){console.log("resume")},0)},onBackButton:function(){},exitApp:function(){navigator.app.exitApp()},menuClick:function(t){a.a.menu.controller(t)}}}},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{items:Array,cordovaReady:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},methods:{buttonClick:function(t){this.$emit("click",t)}}}},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{item:Object,iconOnly:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},methods:{iconClick:function(t){this.$emit("iconClick")}}}},134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(355),a=n.n(o);e.default={components:{menuItem:a.a},props:{items:Array,cordovaReady:{type:Boolean,default:!1},miniVariant:{type:Boolean,default:!0}},data:function(){return{}},created:function(){},methods:{menuClick:function(t){this.$emit("click",t)}}}},135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},data:function(){return{contact:{}}},created:function(){},methods:{}}},136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{props:{}}},created:function(){var t={transform:"transform WebkitTransform MozTransform OTransform msTransform".split(" "),transition:"transition WebkitTransition MozTransition OTransition msTransition".split(" ")};for(var e in t){var n=t[e];this.props[e]=[];for(var o=0;o<n.length;o++)void 0!==document.createElement("div").style[n[o]]&&this.props[e].push(n[o])}},methods:{}}},338:function(t,e){},339:function(t,e){},340:function(t,e){},341:function(t,e){},342:function(t,e){},343:function(t,e){},344:function(t,e){},345:function(t,e){},349:function(t,e,n){t.exports=n.p+"img/icon.2320d21.png"},353:function(t,e,n){function o(t){n(345)}var a=n(42)(n(131),n(366),o,null,null);t.exports=a.exports},354:function(t,e,n){function o(t){n(340)}var a=n(42)(n(132),n(361),o,"data-v-1968db4e",null);t.exports=a.exports},355:function(t,e,n){function o(t){n(341)}var a=n(42)(n(133),n(362),o,"data-v-37ae8df0",null);t.exports=a.exports},356:function(t,e,n){function o(t){n(343)}var a=n(42)(n(134),n(364),o,"data-v-41b405fb",null);t.exports=a.exports},357:function(t,e,n){function o(t){n(342)}var a=n(42)(n(135),n(363),o,null,null);t.exports=a.exports},358:function(t,e,n){function o(t){n(339)}var a=n(42)(n(136),n(360),o,"data-v-06b97179",null);t.exports=a.exports},359:function(t,e,n){function o(t){n(344)}var a=n(42)(null,n(365),o,"data-v-42bfdb2b",null);t.exports=a.exports},360:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[t._v("CSS Compatibility")])]),t._v(" "),t._l(t.props,function(e,o){return n("v-flex",{key:o,attrs:{xs12:""}},[n("h2",[t._v(t._s(o))]),t._v(" "),n("h4",[t._v(t._s(e))])])}),t._v(" "),n("v-flex",{attrs:{xs12:"","my-3":""}},[n("router-link",{attrs:{to:{name:"Home",params:{}}}},[t._v("Home")])],1)],2)],1)},staticRenderFns:[]}},361:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._l(t.items,function(e,o){return n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.cordova||t.cordovaReady,expression:"!item.cordova || cordovaReady"}],key:o,class:e.classes,attrs:{icon:"",title:e.title},on:{click:function(n){t.buttonClick(e)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))},staticRenderFns:[]}},362:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"menu-icon",attrs:{title:t.item.title},on:{click:function(e){t.iconClick(t.item)}}},[n("v-icon",[t._v(t._s(t.item.icon))])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.iconOnly,expression:"!iconOnly"}],staticClass:"menu-label"},[t._v(t._s(t.item.title))])])},staticRenderFns:[]}},363:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs10:""}},[n("h1",[t._v("Contact form")])]),t._v(" "),n("v-flex",{attrs:{xs2:"","align-center":""}},[n("router-link",{attrs:{to:{name:"Home",params:{}}}},[t._v("Home")])],1),t._v(" "),n("v-flex",{attrs:{xs12:"","px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{label:"Name","error-messages":t.errors.collect("name"),"data-vv-name":"name",required:""},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{label:"E-mail",placeholder:"Enter your email","error-messages":t.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/[0-9]+/},expression:"{ required: true, regex: /[0-9]+/ }"}],attrs:{label:"Phone",placeholder:"+1 111 111 1111","error-messages":t.errors.collect("phone"),"data-vv-name":"phone",required:""},model:{value:t.contact.phone,callback:function(e){t.$set(t.contact,"phone",e)},expression:"contact.phone"}})],1),t._v("\n      \n      "+t._s(t.contact)+"\n    ")],1)],1)},staticRenderFns:[]}},364:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",t._l(t.items,function(e,o){return n("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:!e.cordova||t.cordovaReady,expression:"!item.cordova || cordovaReady"}],key:o,class:e.classes,on:{click:function(n){t.menuClick(e)}}},[n("menu-item",{attrs:{item:e,"icon-only":t.miniVariant}})],1)}))},staticRenderFns:[]}},365:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[o("v-flex",{attrs:{xs12:""}},[o("img",{staticClass:"mb-5",attrs:{src:n(349),alt:"Vuetify1"}})]),t._v(" "),o("v-flex",{attrs:{xs12:""}},[t._v("\n        Vuetify Template for Cordova Projects\n      ")]),t._v(" "),o("v-flex",{attrs:{xs12:"","my-3":""}},[o("router-link",{attrs:{to:{name:"Form",params:{}}}},[t._v("Form example")])],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("a",{attrs:{href:"https://github.com/fraigo/vuetify-cordova"}},[o("v-icon",[t._v("fab fa-github")]),t._v(" GitHub Project")],1)])],1)],1)},staticRenderFns:[]}},366:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.darkMode}},[n("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("menu-list",{attrs:{items:t.menuItems,"cordova-ready":t.isCordovaReady,"mini-variant":t.miniVariant},on:{click:t.menuClick}})],1),t._v(" "),t.toolbar?n("v-toolbar",{attrs:{fixed:"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.config.app.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("button-list",{attrs:{items:t.menuButtons,"cordova-ready":t.isCordovaReady},on:{click:t.menuClick}})],1):t._e(),t._v(" "),n("v-content",[n("router-view")],1)],1)},staticRenderFns:[]}},370:function(t,e,n){n(129),t.exports=n(128)},93:function(t,e,n){"use strict";var o=n(92),a=n(367),i=n(359),r=n.n(i),s=n(357),c=n.n(s),u=n(358),l=n.n(u),d=n(130),v=n.n(d);o.a.use(a.a);var m={exit:function(){navigator.app.exitApp()},ghPage:function(){window.open("https://fraigo.github.io/vuetify-cordova/www/","_blank")},ghProject:function(){window.open("https://github.com/fraigo/vuetify-cordova","_blank")}},f=new a.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/form",name:"Form",component:c.a},{path:"/css",name:"Css",component:l.a}]}),p={items:[{icon:"fas fa-home",title:"Home",route:"Home",id:"home"},{icon:"fab fa-wpforms",title:"Form Example",route:"Form",id:"form"},{icon:"fab fa-css3-alt",title:"Css Compatibility",route:"Css",id:"css"},{icon:"fab fa-github",title:"GitHub Project",id:"ghProject"},{icon:"fab fa-github",title:"GitHub Demo Page",id:"ghPage"},{classes:["menu-separator"],cordova:!0},{icon:"fas fa-sign-out-alt",title:"Exit",id:"exit",separator:!0,cordova:!0}],buttons:[{icon:"fas fa-sign-out-alt",title:"Exit",id:"exit",cordova:!0}],controller:function(t,e){return t.route?void f.push({name:t.route,params:t.params}):m[t.id]?void m[t.id]():void alert("Clicked "+t.title)},miniVariant:!1,toolbar:!0,darkMode:!1};e.a={app:v.a,router:f,menu:p}}},[370]);
//# sourceMappingURL=app.5e415b857e1717febdaf.js.map