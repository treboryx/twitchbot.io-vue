(function(t){function e(e){for(var n,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-14295088":"a18273a9","chunk-2d22d746":"cd825613"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-14295088":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-14295088":"44221839","chunk-2d22d746":"31d6cfe0"}[t]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"4d9d":function(t,e,r){"use strict";var n=r("c67a"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("span",[r("router-link",{staticClass:"main",attrs:{to:"/"}},[t._v("TwitchBot")])],1),r("span",{staticClass:"links"},[r("a",{attrs:{href:"/#features","no-mobile":""}},[t._v("Features")]),r("router-link",{staticClass:"premium",attrs:{to:"/pro","no-mobile":""}},[t._v("Pro")]),r("a",{attrs:{href:"https://support.twitchbot.io","no-mobile":""}},[t._v("Support")]),r("a",{attrs:{href:"https://dash.twitchbot.io","no-mobile":""}},[t._v("Dashboard")])],1),r("div",{staticClass:"flex-spacer"}),r("span",{staticClass:"right"},[r("a",{attrs:{href:"https://twitter.com/twitchbot_io",target:"_blank",title:"Twitter account"}},[r("FontAwesomeIcon",{attrs:{icon:["fab","twitter"]}})],1),r("a",{attrs:{href:"https://discord.gg/UNYzJqV",target:"_blank",title:"Discord server"}},[r("FontAwesomeIcon",{attrs:{icon:["fab","discord"]}})],1),r("div",{staticClass:"nav-sep"}),r("a",{attrs:{id:"more",href:"javascript:toggleNavOpts()",title:"More links"}},[r("FontAwesomeIcon",{attrs:{icon:"caret-down"}})],1)])])},c=[],s=r("ecee"),u=r("c074"),l=r("f2d1"),d=r("ad3d");s["c"].add(u["a"],l["e"],l["a"]);var f={components:{FontAwesomeIcon:d["a"]}},p=f,h=(r("4d9d"),r("2877")),m=Object(h["a"])(p,i,c,!1,null,"d5ea13c8",null),v=m.exports,g={name:"app",components:{NavBar:v}},b=g,w=(r("034f"),Object(h["a"])(b,a,o,!1,null,null,null)),y=w.exports,k=(r("456d"),r("ac6a"),r("5df3"),r("1c4c"),r("7514"),r("8c4f"));n["a"].use(k["a"]);var _=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return r.e("chunk-14295088").then(r.bind(null,"bb51"))},meta:{title:"TwitchBot - The best Twitch bot for Discord",metaTags:[{name:"description",content:"Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users."},{name:"og:description",content:"Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users."}]}},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}}]});_.beforeEach(function(t,e,r){var n=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),a=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!a)return r();a.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),r()});var T=_,j=r("2f62");n["a"].use(j["a"]);var A=new j["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:T,store:A,render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,r){},c67a:function(t,e,r){}});
//# sourceMappingURL=app.5efe2d20.js.map