(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0c2d1c84":"11a00d4a","chunk-3dd9efa1":"f0e488fb","chunk-58fdab17":"f815679d","chunk-75bc2dcc":"c2baf0b2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-0c2d1c84":1,"chunk-3dd9efa1":1,"chunk-58fdab17":1,"chunk-75bc2dcc":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-0c2d1c84":"c14e08b6","chunk-3dd9efa1":"8e6596b8","chunk-58fdab17":"b5439321","chunk-75bc2dcc":"0b0e8d4f"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],h.parentNode.removeChild(h),r(i)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0230":function(t,e,r){},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"04f2":function(t,e,r){"use strict";var n=r("b3c7"),a=r.n(n);a.a},1623:function(t,e,r){"use strict";var n=r("7c10"),a=r.n(n);a.a},3673:function(t,e,r){"use strict";var n=r("0230"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("f13c"),o=r.n(a),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view"),r("PageFooter")],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",[r("span",[r("router-link",{staticClass:"main",attrs:{to:"/"}},[t._v("TwitchBot")])],1),r("span",{staticClass:"links"},[r("router-link",{staticClass:"premium",attrs:{to:"/pro","no-mobile":""}},[t._v("Pro")]),r("a",{attrs:{href:"https://support.twitchbot.io","no-mobile":""}},[t._v("Support")]),r("a",{attrs:{href:"https://dash.twitchbot.io","no-mobile":""}},[t._v("Dashboard")])],1),r("div",{staticClass:"flex-spacer"}),r("span",{staticClass:"right"},[r("a",{attrs:{href:"https://twitter.com/twitchbot_io",target:"_blank",title:"Twitter account"}},[r("FontAwesomeIcon",{attrs:{icon:["fab","twitter"]}})],1),r("a",{attrs:{href:"https://discord.gg/UNYzJqV",target:"_blank",title:"Discord server"}},[r("FontAwesomeIcon",{attrs:{icon:["fab","discord"]}})],1),r("div",{staticClass:"nav-sep"}),r("a",{attrs:{title:"More links",id:"more-links"},on:{click:function(e){return t.toggleMenu()}}},[r("FontAwesomeIcon",{attrs:{icon:"caret-down"}})],1)])]),r("LinksMenu",{attrs:{"is-visible":t.menuIsVisible}})],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"logged-in-ctx"},[r("a",{attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=375805687529209857&permissions=842452032&scope=bot&response_type=code&redirect_uri=https://twitchbot.io/?invited"}},[t._v("Invite")]),r("a",{attrs:{href:"https://support.twitchbot.io","only-mobile":""}},[t._v("Support")]),r("a",{attrs:{href:"https://discordbots.org/bot/twitch/vote"}},[t._v("Upvote")]),r("a",{attrs:{href:"https://dash.twitchbot.io","only-mobile":""}},[t._v("Dashboard")]),r("router-link",{attrs:{to:"/commands"}},[t._v("Commands")]),r("div",{staticClass:"sep"}),r("router-link",{attrs:{to:"/pro","only-mobile":""}},[t._v("TwitchBot Pro")]),r("router-link",{attrs:{to:"/partners"}},[t._v("Partners")]),r("router-link",{attrs:{to:"/translators"}},[t._v("Translators")]),r("router-link",{attrs:{to:"/languages"}},[t._v("Languages")]),r("div",{staticClass:"sep"}),r("a",{attrs:{href:"https://overlay.twitchbot.io"}},[t._v("Overlay")]),r("a",{attrs:{href:"https://medium.com/twitchbot"}},[t._v("Blog")]),r("a",{attrs:{href:"https://twitch.tv/twitchbot_discord"}},[t._v("Twitch")]),r("a",{attrs:{href:"https://github.com/twitchbot-discord"}},[t._v("GitHub")]),r("div",{staticClass:"sep"}),r("router-link",{attrs:{to:"/bot-lists"}},[t._v("Bot lists")])],1)])},d=[],h={props:["isVisible"]},f=h,p=(r("04f2"),r("2877")),m=Object(p["a"])(f,l,d,!1,null,"426fbd7b",null),b=m.exports,v=r("ecee"),g=r("c074"),w=r("f2d1"),_=r("ad3d");v["c"].add(g["b"],w["e"],w["a"]);var y={components:{FontAwesomeIcon:_["a"],LinksMenu:b},data:function(){return{menuIsVisible:!1,target:null}},methods:{toggleMenu:function(){this.menuIsVisible=!this.menuIsVisible,document.querySelector("#more-links").style.transform="rotate: ".concat(this.menuIsVisible?180:0,"deg")}}},k=y,T=(r("f02c"),Object(p["a"])(k,c,u,!1,null,"0e3b3e8a",null)),I=T.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"content"},[r("h3",[t._v("TwitchBot")]),r("span",{staticStyle:{"margin-top":"5px"}},[r("BrandIcon",{attrs:{brand:"discord",title:"Discord server",href:"https://discord.gg/UNYzJqV"}}),r("BrandIcon",{attrs:{brand:"twitch",title:"Twitch channel",href:"https://twitch.tv/twitchbot_discord"}}),r("BrandIcon",{attrs:{brand:"patreon",title:"Patreon page",href:"https://patreon.com/devakira"}}),r("BrandIcon",{attrs:{brand:"github",title:"GitHub organization",href:"https://github.com/twitchbot-discord"}}),r("BrandIcon",{attrs:{brand:"twitter",title:"Twitter page",href:"https://twitter.com/twitchbot_io"}})],1),t._m(0)])])},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"disclaimer"},[t._v("\n      Copyright © "),r("a",{attrs:{href:"https://akira.arraycord.dev",target:"_blank"}},[t._v("Akira")]),t._v(", 2017-2019.\n      TwitchBot is not affiliated with Twitch Interactive, Inc.\n      "),r("br"),t._v("\n      Icons provided by icons8.com.\n      "),r("br"),r("br"),r("a",{attrs:{href:"/privacy"}},[t._v("Privacy Policy")]),t._v("\n       · \n      "),r("a",{attrs:{href:"/terms"}},[t._v("Terms of Service")]),r("br"),t._v("\n      Questions, comments, or business inquiries? Contact us at "),r("a",{attrs:{href:"mailto:pr@twitchbot.io"}},[t._v("pr@twitchbot.io")]),t._v(".\n    ")])}],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{class:"brand "+t.brand,attrs:{title:t.title,href:t.href}},[r("FontAwesomeIcon",{attrs:{icon:["fab",t.brand]}})],1)},x=[];v["c"].add(w["e"],w["a"],w["c"],w["b"],w["d"]);var A={components:{FontAwesomeIcon:_["a"]},props:["brand","title","href"]},O=A,P=(r("3673"),Object(p["a"])(O,E,x,!1,null,"0b72b343",null)),j=P.exports,S={components:{BrandIcon:j}},N=S,V=(r("1623"),Object(p["a"])(N,C,B,!1,null,null,null)),D=V.exports,F={name:"app",components:{NavBar:I,PageFooter:D}},M=F,q=(r("034f"),Object(p["a"])(M,i,s,!1,null,null,null)),L=q.exports,$=(r("456d"),r("ac6a"),r("5df3"),r("1c4c"),r("7514"),r("8c4f"));n["a"].use($["a"]);var z=new $["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return r.e("chunk-75bc2dcc").then(r.bind(null,"bb51"))},meta:{title:"TwitchBot - The best Twitch bot for Discord",metaTags:[{name:"description",content:"Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users."},{name:"og:description",content:"Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users."}]}},{path:"/commands",name:"commands",component:function(){return r.e("chunk-58fdab17").then(r.bind(null,"af8b"))}},{path:"/partners",name:"partners",component:function(){return r.e("chunk-3dd9efa1").then(r.bind(null,"1a8c"))}},{path:"/pro",name:"pro",component:function(){return r.e("chunk-0c2d1c84").then(r.bind(null,"aae5"))}}],scrollBehavior:function(t,e,r){return t.hash?{selector:t.hash}:r||{x:0,y:0}}});z.beforeEach(function(t,e,r){var n=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),a=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!a)return r();a.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),r()});var J=z,U=r("2f62");n["a"].use(U["a"]);var H=new U["a"].Store({state:{},mutations:{},actions:{}});n["a"].use(o.a),n["a"].config.productionTip=!1,new n["a"]({router:J,store:H,render:function(t){return t(L)}}).$mount("#app")},"64a9":function(t,e,r){},"7c10":function(t,e,r){},b3c7:function(t,e,r){},e6b4:function(t,e,r){},f02c:function(t,e,r){"use strict";var n=r("e6b4"),a=r.n(n);a.a}});
//# sourceMappingURL=app.151aef9d.js.map