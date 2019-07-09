(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d4f8c3c"],{2186:function(t,e,a){"use strict";var s=a("6e56"),i=a.n(s);i.a},"336d":function(t,e,a){},3536:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{vertical:"vertical"==t.layout},attrs:{id:"carbon-wrapper"}})},i=[],n={mounted:function(){var t=document.createElement("script");t.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CK7IT5Q7&placement=twitchbotio"),t.setAttribute("id","_carbonads_js"),document.querySelector("#carbon-wrapper").appendChild(t)},props:["layout"]},r=n,o=(a("f38f"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},"36ad":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"header-container"},[t._t("default")],2),a("div",{staticClass:"wave-svg"},[a("svg",{attrs:{viewBox:"0 0 500 150",preserveAspectRatio:"none"}},[a("path",{staticStyle:{stroke:"none",fill:"#17242d"},attrs:{d:"M0.00,49.98 C249.27,143.87 252.91,2.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"}})])])])},i=[],n=(a("f37d"),a("2877")),r={},o=Object(n["a"])(r,s,i,!1,null,"7a6bd11e",null);e["a"]=o.exports},"6e56":function(t,e,a){},af8b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PageHeader",{staticStyle:{"text-align":"center"}},[a("h1",[t._v("Commands")]),a("h2",[t._v("View a list of TwitchBot's available commands.")])]),a("CarbonSidebar",[a("p",{staticClass:"big"},[t._v("\n      New to TwitchBot? Get a\n      "),a("a",{attrs:{href:"https://support.twitchbot.io/articles/d1b179de-dc32-4066-845f-7dd66aa02493"}},[t._v("quick guide")]),t._v("\n      on how to get started.\n      "),a("br"),t._v("\n      If you're feeling lost, you can join our\n      "),a("a",{attrs:{href:"https://discord.gg/UNYzJqV"}},[t._v("Discord server")]),t._v("\n      to get help.\n    ")]),a("p",{staticClass:"big"},[t._v("\n      Type "),a("code",[t._v("!twitch help")]),t._v(" in Discord to see more detailed help.\n      To view a list of commands from Discord, type "),a("code",[t._v("!twitch commands")]),t._v(".\n    ")]),a("p",{staticClass:"big"},[t._v("\n      Click on a section to view more details and a list of commands.\n    ")]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("General")]),a("span",{staticClass:"desc"},[t._v("\n            Information about TwitchBot such as ping and credits\n          ")])]),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("help")]),a("td",[t._v("Shows bot help")])]),a("tr",[a("td",[t._v("info")]),a("td",[t._v("Shows bot information")])]),a("tr",[a("td",[t._v("lang")]),a("td",[t._v("Sets the bot language")])]),a("tr",[a("td",[t._v("invite")]),a("td",[t._v("Displays a link to add TwitchBot to your server")])]),a("tr",[a("td",[t._v("status")]),a("td",[t._v("Shows Twitch API status")])]),a("tr",[a("td",[t._v("ping")]),a("td",[t._v("Pong!")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Stream Notifications")]),a("span",{staticClass:"desc"},[t._v("\n          Set up and control messages that let you know when a streamer goes live\n        ")])]),a("div",{staticClass:"quote info"},[a("InfoIcon"),a("span",[t._v("\n          Want an easier way to manage notifications?\n          Try out the "),a("a",{attrs:{href:"https://dash.twitchbot.io/servers",target:"_blank"}},[t._v("dashboard")]),t._v("!\n        ")])],1),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("notif add")]),a("td",[t._v("Adds a streamer notification for a streamer to the specified channel")])]),a("tr",[a("td",[t._v("notif remove")]),a("td",[t._v("Removes a streamer notification")])]),a("tr",[a("td",[t._v("notif list")]),a("td",[t._v("Lists active notifications for the specified channel")])]),a("tr",[a("td",[t._v("notif preview")]),a("td",[t._v("Preview a notification message")])]),a("tr",[a("td",[t._v("notif formatting")]),a("td",[t._v("\n            Shows variables that you can insert into notification messages.\n            You can also read the "),a("a",{attrs:{href:"/formatting",target:"_blank"}},[t._v("\n              formatting guide\n            ")]),t._v("\n            to learn more about customizing notifications.\n          ")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Live Role")]),a("span",{staticClass:"desc"},[t._v("\n          Set up and configure a role to give to users when they start streaming\n        ")])]),a("div",{staticClass:"quote info"},[a("InfoIcon"),a("span",[t._v("\n          Want an easier way to manage live role?\n          Try out the "),a("a",{attrs:{href:"https://dash.twitchbot.io/servers",target:"_blank"}},[t._v("dashboard")]),t._v("!\n        ")])],1),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("live_role set")]),a("td",[t._v("Sets the Live Role for the current server")])]),a("tr",[a("td",[t._v("live_role filter")]),a("td",[t._v("Restricts Live Role to users with a specific role")])]),a("tr",[a("td",[t._v("live_role delete")]),a("td",[t._v("Removes the Live Role configuration")])]),a("tr",[a("td",[t._v("live_role view")]),a("td",[t._v("Tells you which role is currently set up")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Audio")]),a("span",{staticClass:"desc"},[t._v("\n          Listen to a Twitch stream from any voice channel\n        ")])]),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("listen")]),a("td",[t._v("Listen to a Twitch stream in the current voice channel")])]),a("tr",[a("td",[t._v("nowplaying")]),a("td",[t._v("Shows the stream that is currently playing, if any")])]),a("tr",[a("td",[t._v("leave")]),a("td",[t._v("Leave the voice channel")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Users, Streams, and Games")]),a("span",{staticClass:"desc"},[t._v("\n          View generic profile info on various aspects of Twitch\n        ")])]),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("user")]),a("td",[t._v("Gets info on a Twitch channel")])]),a("tr",[a("td",[t._v("stream user")]),a("td",[t._v("Gets info on a channel's stream")])]),a("tr",[a("td",[t._v("stream watch")]),a("td",[t._v("Shows a link to watch a Twitch stream in Discord")])]),a("tr",[a("td",[t._v("stream game")]),a("td",[t._v("Fetches a random stream of someone playing the specified game.")])]),a("tr",[a("td",[t._v("stream top")]),a("td",[t._v("Fetches a random stream that is popular right now")])]),a("tr",[a("td",[t._v("game")]),a("td",[t._v("Gets info on a Twitch game")])]),a("tr",[a("td",[t._v("top")]),a("td",[t._v("Gets the top ten most popular games on Twitch")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Clips")]),a("span",{staticClass:"desc"},[t._v("\n          Get clips from your favorite streamers and games\n        ")])]),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("clips from")]),a("td",[t._v("Gets a random clip from the specified Twitch user")])]),a("tr",[a("td",[t._v("clips game")]),a("td",[t._v("Gets a random clip from the specified game")])]),a("tr",[a("td",[t._v("clips trending")]),a("td",[t._v("Gets a trending clip")])]),a("tr",[a("td",[t._v("clips uservoted")]),a("td",[t._v("Gets one of the most popular clips voted by TwitchBot users")])])])]),a("details",[a("summary",[a("span",{staticClass:"title"},[t._v("Player Stats")]),a("span",{staticClass:"desc"},[t._v("\n          Check your game statistics and rankings\n        ")])]),a("table",[a("tr",[a("th",[t._v("Command")]),a("th",[t._v("Description")])]),a("tr",[a("td",[t._v("overwatch")]),a("td",[t._v("Shows Overwatch player stats")])]),a("tr",[a("td",[t._v("fortnite")]),a("td",[t._v("Shows Fortnite player stats")])])])])])],1)},i=[],n=a("d0ab"),r=a("36ad"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"material-design-icon information-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"}},[a("title",[t._v(t._s(t.title))])])])])},c=[],l=(a("c5f6"),{name:"InformationIcon",props:{title:{type:String,default:"Information icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),d=l,v=a("2877"),_=Object(v["a"])(d,o,c,!1,null,null,null),h=_.exports,m={components:{CarbonSidebar:n["a"],InfoIcon:h,PageHeader:r["a"]}},u=m,f=(a("2186"),Object(v["a"])(u,s,i,!1,null,null,null));e["default"]=f.exports},d0ab:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section sidebar-incl"},[a("aside",[a("CarbonAd",{attrs:{layout:"vertical"}})],1),a("div",{staticClass:"content"},[t._t("default")],2),a("div",{staticClass:"after-spacer"})])},i=[],n=a("3536"),r={components:{CarbonAd:n["a"]}},o=r,c=(a("dd1a"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,"9c2b1e9e",null);e["a"]=l.exports},dd1a:function(t,e,a){"use strict";var s=a("336d"),i=a.n(s);i.a},f37d:function(t,e,a){"use strict";var s=a("f99e"),i=a.n(s);i.a},f38f:function(t,e,a){"use strict";var s=a("ffb1"),i=a.n(s);i.a},f99e:function(t,e,a){},ffb1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-9d4f8c3c.4e263be6.js.map