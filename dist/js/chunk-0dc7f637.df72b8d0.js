(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dc7f637"],{"0295":function(t,e,a){"use strict";var n=a("c9bc"),i=a.n(n);i.a},"2c80":function(t,e,a){"use strict";var n=a("fdec"),i=a.n(n);i.a},3226:function(t,e,a){"use strict";var n=a("6be3"),i=a.n(n);i.a},3536:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{vertical:"vertical"==t.layout},attrs:{id:"carbon-wrapper"}})},i=[],r={mounted:function(){var t=document.createElement("script");t.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CK7IT5Q7&placement=twitchbotio"),t.setAttribute("id","_carbonads_js"),document.querySelector("#carbon-wrapper").appendChild(t)},props:["layout"]},o=r,s=(a("f38f"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},"36ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"header-container"},[t._t("default")],2),a("div",{staticClass:"wave-svg"},[a("svg",{attrs:{viewBox:"0 0 500 150",preserveAspectRatio:"none"}},[a("path",{staticStyle:{stroke:"none",fill:"var(--background)"},attrs:{d:"M0.00,49.98 C249.27,143.87 252.91,2.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"}})])])])},i=[],r=(a("0295"),a("7cba"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"58b3efae",null);e["a"]=s.exports},"63f2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PageHeader",[a("h1",[t._v("Notification formatting guide")]),a("h2",[t._v("Use this guide for reference on how to improve your notifications with rich content.")])]),a("CarbonSidebar",[a("h2",[t._v("Variables")]),a("p",[t._v("Include stream information into the message of your notifications.")]),a("div",{staticClass:"quote warn"},[a("AlertIcon"),a("span",[t._v("\n        Refer to this\n        "),a("a",{attrs:{href:"https://support.twitchbot.io/articles/45967f45-fafb-48f9-80a3-b8c6c3c627f7",target:"_blank"}},[t._v("\n          support article")]),t._v("\n        if you are using webhook notifications, as the variable names have changed.\n      ")])],1),a("ul",[a("li",[a("code",[t._v("$title$")]),t._v(" - The stream's title")]),a("li",[a("code",[t._v("$viewers$")]),t._v(" - The number of people currently watching the stream")]),a("li",[a("code",[t._v("$game$")]),t._v(" - The game that the streamer is currently playing")]),a("li",[a("code",[t._v("$url$")]),t._v(" - The channel's URL")]),a("li",[a("code",[t._v("$name$")]),t._v(" - The channel's name")]),a("li",[a("code",[t._v("$everyone$")]),t._v(" - Inserts an @everyone mention")]),a("li",[a("code",[t._v("$here$")]),t._v(" - Inserts an @here mention")])]),a("h2",[t._v("Markdown")]),a("p",[t._v("\n      Notifications support all of Discord's\n      "),a("a",{attrs:{href:"https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-",target:"_blank"}},[t._v("\n        text formatting")]),t._v("\n      which means that you can make your announcements stand out\n      however you want.\n    ")]),a("h2",[t._v("Embed Customization")]),a("p",[t._v("\n      The "),a("a",{attrs:{href:"https://dash.twitchbot.io",target:"_blank"}},[t._v("dashboard")]),t._v('\n      allows you to customize notifications on a whole different level.\n      You can choose the option to use a small embed (no stream preview)\n      or no embed at all.\n      Embed color is also customizable, so if you don\'t like the standard\n      "Twitch purple," it can be changed to whatever fits best.\n    ')])])],1)},i=[],r=a("d0ab"),o=a("36ad"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"material-design-icon alert-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}},[a("title",[t._v(t._s(t.title))])])])])},c=[],l=(a("c5f6"),{name:"AlertIcon",props:{title:{type:String,default:"Alert icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),u=l,d=a("2877"),f=Object(d["a"])(u,s,c,!1,null,null,null),v=f.exports,h={components:{AlertIcon:v,CarbonSidebar:r["a"],PageHeader:o["a"]}},p=h,b=(a("3226"),Object(d["a"])(p,n,i,!1,null,null,null));e["default"]=b.exports},"6be3":function(t,e,a){},"7cba":function(t,e,a){"use strict";var n=a("7d36"),i=a.n(n);i.a},"7d36":function(t,e,a){},c9bc:function(t,e,a){},d0ab:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section sidebar-incl"},[a("aside",[a("CarbonAd",{attrs:{layout:"vertical"}})],1),a("div",{staticClass:"content"},[t._t("default")],2),a("div",{staticClass:"after-spacer"})])},i=[],r=a("3536"),o={components:{CarbonAd:r["a"]}},s=o,c=(a("2c80"),a("2877")),l=Object(c["a"])(s,n,i,!1,null,"125220dc",null);e["a"]=l.exports},f38f:function(t,e,a){"use strict";var n=a("ffb1"),i=a.n(n);i.a},fdec:function(t,e,a){},ffb1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0dc7f637.df72b8d0.js.map