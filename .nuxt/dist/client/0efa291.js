(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(o,t,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(37).default)("a24bca70",content,!0,{sourceMap:!1})},292:function(o,t,n){"use strict";n(290)},293:function(o,t,n){var e=n(36)((function(i){return i[1]}));e.push([o.i,".hooper-next,.hooper-prev{\n  background-color:#bf8be4;\n  border:none;\n  padding:1em;\n  position:absolute;\n  top:50%;\n  transform:translateY(-50%);\n  cursor:pointer\n}",""]),e.locals={},o.exports=e},297:function(o,t,n){"use strict";n.r(t);n(294);var e=n(295),r={props:["images"],components:{Hooper:e.a,Slide:e.c,HooperNavigation:e.b},data:function(){return{url:"http://103.226.138.95:1337"}},mounted:function(){console.log("Thumbnail",this.images)}},l=(n(292),n(8)),component=Object(l.a)(r,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("hooper",{staticStyle:{"max-width":"400px",margin:"auto"},attrs:{autoPlay:!0,playSpeed:2e3}},[o._l(o.images,(function(t){return n("slide",{key:t.id,staticClass:"bg-contain bg-center bg-no-repeat",staticStyle:{"background-size":"100% 100%"},style:{backgroundImage:"url("+o.url+t.formats.medium.url+")"}})})),o._v(" "),n("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)}),[],!1,null,null,null);t.default=component.exports}}]);