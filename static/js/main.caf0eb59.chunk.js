(this["webpackJsonpatar13.github.io"]=this["webpackJsonpatar13.github.io"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"name":"Vaon","hidden":false,"bundle":"com.atar13.vaon","description":"Bluetooth battery information in the app switcher. Also displays the last known battery status of disconnected devices.","supported-versions":["13.0","14.7`","uncomfirmed"],"features":["Provides Bluetooth device battery information in the iOS app switcher.","Shows the last known battery status of disconnected devices.","Displays AirPods, Apple Watch, iPhone/iPad, and any other bluetooth device.","iPad Style grid app switcher.","Custom sizing and placement.","Animates the color of charging device\'s battery cell outline."],"changelog":{"1.0.8":["Added option to customize battery percentage text color"],"1.0.7":["Added option to customize Vaon\'s background blur effect","Added option to customize device glyph background blur effect"],"1.0.6":["Color Customization"],"1.0.5":["Fixed an issue where duplicate devices would appear"],"1.0.4":["Fixed an issue where Vaon would not fade away when entering an app"],"1.0.3":["Added an option to completely hide the battery percentage label","Allowed glyph/label padding to be negative"],"1.0.2":["Added option to customize horizontal offset","Added option for padding between glyphs and labels","Added option to show Vaon when the all apps are closed"],"1.0.1":["Added option to resize device glyphs."],"1.0":["Initial Release"]},"screenshots":["vaon.gif","Vaon_animation.gif","vaon.png"],"thumbnail":"vaon.gif"},{"name":"Houdini","hidden":false,"bundle":"com.atar13.houdini","description":"Ever felt like your lockscreen UI was blocking your breathtaking wallpaper? Houdini allows you to hide lockscreen elements with a simple tap or long press.","supported-versions":["13.0","14.3","uncomfirmed"],"features":["Hide date/time and clock","Hide FaceID lock","Hide unlock text","Hide quick action shortcuts","Customizable gestures","Supports tweaks like: Jellyfish, Kalm, Axon, Complications, Dualclock.","Not Compatible with SimpleLS2 and partly compatible with ColorFlow 5\'s full scren mode."],"changelog":{"1.4":["Added an option to hide elements after a respring"],"1.3":["Fixed a bug where the quick act    ion toggles wouldn\'t hide on iPhone X+","Fixed a bug where the unlock text wouldn\'t be hidden"],"1.2":["Added long press toggle mode"],"1.1":["Now can hide: Notifications, Quick Action Toggles, FaceID Lock, Unlock Text and tweaks like Axon Kalm Jellyfish Complications Dualclock.","Added an option to hide lockscreen elements upon screen lock "],"1.0":["Initial Release"]},"screenshots":["Houdini.gif","HoudiniBA.png"],"thumbnail":"houdiniThumbnail.gif"}]')},15:function(e){e.exports=JSON.parse('[{"title":"Houdini","language":"Objective-C","description":"iOS Jailbreak tweak that allows users to hide elements of their lockscreen dynamically based on custom multi-touch gestures.","id":1,"source":"https://github.com/atar13/houdini","alt":"http://atar13.github.io/repo/com.atar13.houdini","thumbnail":"/assets/com.atar13.houdini/houdiniThumbnail.gif"},{"title":"Vaon","language":"Objective-C","description":"iOS Jailbreak tweak that displays bluetooth device battery information in the iOS app switcher.","id":2,"source":"https://github.com/atar13/vaon","alt":"http://atar13.github.io/repo/com.atar13.vaon","thumbnail":"/assets/com.atar13.vaon/vaon.gif"},{"title":"Christmas Countdown Twitter Bot","language":"Javascript (NodeJS, Express, Twitter API)","description":"A Twitter bot that uses the Twitter API to tweet every day with the number of days remaining until Christmas.","id":3,"source":"https://github.com/atar13/twitter-christmas-counter-bot","thumbnail":"/assets/thumbnails/christmasCountdown.png"},{"title":"Museeks Discord Playback Status","language":"Javascript (NodeJS, Discord API)","description":"A Discord extension that displays a user\'s music playback information as their Discord status.","id":4,"source":"https://github.com/atar13/museeks-discord-rpc","thumbnail":"/assets/thumbnails/museeksDiscord.png"},{"title":"go-dwm-statusbar","language":"Go","description":"System status bar for the dwm window manager on Linux written in Go. Includes date, time, CPU temperature, memory usage, battery, volume, and display brightness.","id":5,"source":"https://github.com/atar13/go-dwm-statusbar","thumbnail":"/assets/thumbnails/go-dwm-statusbar.png"},{"title":"Hackintosh EFI","language":"","description":"Custom EFI Bootloader that allowed my Lenovo IdeaPad laptop to natively run macOS Catalina.","id":6,"source":"https://github.com/atar13/Lenovo-IdeapadFlex14-OpenCore-Hackintosh-EFI"},{"title":"atar13.github.io","language":"JavaScript (React)","description":"My personal website (this one!) and iOS jailbreak tweak package repository","id":7,"source":"https://github.com/atar13/atar13.github.io"}]')},16:function(e,t,s){},17:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},36:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(18),n=s.n(a),c=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))},o=s(7),r=s(2),l=(s(25),s(0));var d=function(){return Object(l.jsxs)("div",{class:"footer-container",children:[Object(l.jsx)("a",{href:"https://github.com/atar13/atar13.github.io",children:Object(l.jsx)("label",{children:"Source Code"})}),Object(l.jsx)("a",{href:"https://github.com/atar13",children:Object(l.jsx)("label",{children:"Github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/anthony-tarbinian-82446b13b/",children:Object(l.jsx)("label",{children:"Linkedin"})})]})},h=(s(27)," active");var u=function(){var e,t,s;switch(e=t=s="navbar-item-wrapper",Object(r.f)().location.pathname){case"/":e+=h;break;case"/repo":case"/repo/":t+=h;break;case"/projects":s+=h}return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{class:"navbar-container",children:[Object(l.jsx)("div",{class:e,style:{float:"left"},children:Object(l.jsx)(o.b,{to:"/",onClick:function(){var e;null===(e=document.getElementById("top"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},class:"navbar-item",children:"Home"})}),Object(l.jsx)("div",{class:t,style:{float:"left"},children:Object(l.jsx)(o.b,{to:"/repo",class:"navbar-item",children:"Repo"})}),Object(l.jsx)("div",{class:s,style:{float:"left"},children:Object(l.jsx)(o.b,{to:"/projects",class:"navbar-item",children:"Projects"})}),Object(l.jsx)("a",{href:"https://github.com/atar13",children:Object(l.jsx)("div",{class:"navbar-item-wrapper",style:{float:"right"},children:Object(l.jsx)("div",{class:"navbar-item",children:Object(l.jsx)("img",{class:"navbar-icons",alt:"Github",src:"/assets/icons/github-240.png"})})})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/anthony-tarbinian-82446b13b/",children:Object(l.jsx)("div",{class:"navbar-item-wrapper",style:{float:"right"},children:Object(l.jsx)("div",{class:"navbar-item",children:Object(l.jsx)("img",{class:"navbar-icons",alt:"Linkedin",src:"/assets/icons/linkedin-240.png"})})})})]})})},j=s(20),b=s.n(j);s(36),s(37);var p=function(e){var t=e.title,s=e.language,a=e.description,n=e.id,c=e.source,o=e.alt,r=e.thumbnail;Object(i.useEffect)((function(){b.a.init({duration:0})}),[]);var d="fade-right";n%2===0&&(d="fade-left");var h="";void 0!==o&&""!==o||(h="none");var u="";return void 0!==r&&""!==r||(u="none"),Object(l.jsxs)("div",{"data-aos":d,"data-aos-delay":"150","data-aos-duration":"1000","data-aos-easing":"ease-out",class:"project-container",children:[Object(l.jsx)("h2",{class:"project-title",children:t}),Object(l.jsx)("img",{alt:t,className:"project-thumbnail",style:{display:u},src:r}),Object(l.jsx)("p",{class:"project-description",children:a}),s&&Object(l.jsxs)("h4",{class:"project-language",children:["Written in ",s]}),Object(l.jsxs)("a",{className:"link-wrapper",href:c,children:[Object(l.jsx)("img",{className:"github-icon",src:"/assets/icons/github-240.png"}),Object(l.jsx)("label",{children:"Source Code"})]}),Object(l.jsx)("a",{className:"link-wrapper",style:{display:h},href:o,children:Object(l.jsx)("label",{children:"Details"})})]})},m=s(15);var g=function(){function e(e){return Object(l.jsx)(p,{title:e.title,language:e.language,description:e.description,id:e.id,source:e.source,alt:e.alt,thumbnail:e.thumbnail})}return"/projects"===Object(r.f)().location.pathname?Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{style:{paddingTop:"5%"}}),Object(l.jsx)("h1",{class:"projects-title",children:"Projects"}),Object(l.jsx)("div",{class:"projects-container",children:m.map((function(t){return e(t)}))}),Object(l.jsx)("div",{style:{paddingTop:"5%"}}),Object(l.jsx)(d,{})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"projects-header",children:[Object(l.jsx)("img",{alt:"projects-chevron",style:{height:"2rem",paddingTop:"1rem"},src:"/assets/icons/icons8-chevron-down-100(1).png"}),Object(l.jsx)("h1",{className:"projects-title",children:"Projects"})]}),Object(l.jsx)("div",{className:"projects-background",children:Object(l.jsx)("div",{className:"projects-container",children:m.map((function(t){return e(t)}))})})]})};s(38);var x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{class:"parallax",children:Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("label",{class:"name",children:"Anthony Tarbinian"}),Object(l.jsxs)("div",{class:"description",children:[Object(l.jsx)("h3",{className:"welcome",children:"Welcome!"}),Object(l.jsx)("p",{children:"I'm a second year undergraduate student studying Computer Science at UC San Diego and an aspiring software developer."}),Object(l.jsx)("p",{children:"On this website you can view my personal projects and access my repository of iOS jailbreak tweaks."})]})]})}),Object(l.jsx)("div",{style:{paddingTop:"0%"}}),Object(l.jsx)("div",{children:Object(l.jsx)(g,{})}),Object(l.jsx)(d,{})]})};s(16);var O=function(e){var t,s=e.tweak;return s.hidden&&(t="none"),Object(l.jsxs)("div",{style:{display:t},className:"pkg-wrapper",children:[Object(l.jsx)("div",{className:"pkg-name",children:s.name}),Object(l.jsx)("div",{className:"pkg-summary",children:s.description}),Object(l.jsx)("img",{className:"pkg-thumbnail",src:"/assets/".concat(s.bundle,"/").concat(s.thumbnail),alt:s.name}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(o.b,{class:"pkg-button-wrapper",to:"/repo/".concat(s.bundle),children:Object(l.jsx)("button",{class:"pkg-button",children:"Details"})})})]})},f=s(10);function v(e){var t=e.name,s=e.link;return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"3%"},children:Object(l.jsx)("a",{class:"add-to-pkg-button-wrapper",href:s,children:Object(l.jsxs)("button",{class:"add-to-pkg-button",children:["Add To ",t]})})})}var y=function(){var e="https://atar13.github.io/repo";return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("h1",{style:{display:"flex",justifyContent:"center",paddingBottom:"2%"},children:"iOS tweak repository"}),Object(l.jsx)(v,{name:"Cyida",link:"cydia://url/https://cydia.saurik.com/api/share#?source=".concat(e)}),Object(l.jsx)(v,{name:"Sileo",link:"sileo://source/".concat(e)}),Object(l.jsx)(v,{name:"Zebra",link:"zbra://sources/add/".concat(e)}),Object(l.jsx)(v,{name:"Installer",link:"installer://".concat(e)}),Object(l.jsxs)("div",{style:{display:"grid",placeContent:"center"},children:[Object(l.jsx)("h1",{style:{display:"grid",placeContent:"center",paddingBottom:"5%"},children:"Packages:"}),f.map((function(e){return Object(l.jsx)(O,{tweak:e})}))]}),Object(l.jsx)(d,{})]})};s(39);var w=function(){return Object(l.jsxs)("div",{class:"depiction-footer",children:[Object(l.jsx)("a",{href:"https://twitter.com/atar137h",children:Object(l.jsxs)("div",{className:"depiction-footer-item",children:[Object(l.jsx)("img",{style:{height:"2rem"},alt:"twitter",src:"/assets/icons/twitter.png"}),Object(l.jsx)("label",{children:"Twitter"})]})}),Object(l.jsx)("a",{href:"https://github.com/atar13",children:Object(l.jsxs)("div",{className:"depiction-footer-item",children:[Object(l.jsx)("img",{style:{height:"2rem"},alt:"github",src:"/assets/icons/github-240.png"}),Object(l.jsx)("label",{children:"Github"})]})}),Object(l.jsx)("a",{href:"mailto:atar13dev@gmail.com",children:Object(l.jsxs)("div",{className:"depiction-footer-item",children:[Object(l.jsx)("img",{style:{height:"2rem"},alt:"email",src:"/assets/icons/emailIcon@3x.png"}),Object(l.jsx)("label",{children:"Email"})]})}),Object(l.jsx)("a",{href:"https://reddit.com/user/atar13",children:Object(l.jsxs)("div",{className:"depiction-footer-item",children:[Object(l.jsx)("img",{style:{height:"2rem"},alt:"reddit",src:"/assets/icons/redditIcon@3x.png"}),Object(l.jsx)("label",{children:"Reddit"})]})})]})};s(17);function k(e,t,s){var i=function(e,t,s,i){function a(e){var t=e.split(".");return[parseInt(t[0],10),parseInt(t[1]?t[1]:0,10),parseInt(t[2]?t[2]:0,10)]}function n(e,t){for(var s=0;s<e.length;++s){if(t.length===s)return 1;if(e[s]!==t[s])return e[s]>t[s]?1:-1}return e.length!==t.length?-1:0}var c=navigator.appVersion.match(/CPU( iPhone)? OS (\d+)_(\d+)(_(\d+))? like/i);if(!c)return 0;var o=[parseInt(c[2],10),parseInt(c[3],10),parseInt(c[4]?c[5]:0,10)],r=o[0]+"."+o[1]+(o[2]&&0!==o[2]?"."+o[2]:""),l=e,d=t,h=a(l),u=d?a(d):null,j="Your iOS version is supported! &#x1f60a;",b=!1;return 1===n(h,o)?(j="Requires at least iOS %s &#x1f615;".replace("%s",l),b=!0):u&&-1===n(u,o)&&(j="unsupported"===s?"Only compatible with iOS %s to %s &#x1f61e;".replace("%s",l).replace("%s",d):"Not yet tested on iOS %s &#x1f601;".replace("%s",r),b=!0),i(j,b),b?-1:1}(e,t,s,(function(){return console.log("Callback")}));return console.log(i),i}var S=function(e){var t=e.name,s=e.bundle,a=e.description,n=e.supportedVersions,c=e.features,r=e.changelog,d=e.screenshots,h="";h=1!==k(n[0],n[1],n[2])?t+" is supported from iOS ".concat(n[0]," to ").concat(n[1]):"\u2705 Your iOS Version is Supported";var u,j=r[u=Object.keys(r)[0]],b="";return 0===d.length&&(b="hidden"),Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.jsxs)("div",{style:{color:"white"},children:[Object(l.jsx)("h1",{class:"tweak-name",children:t}),Object(l.jsx)("h1",{class:"tweak-description",style:{paddingBottom:"2%"},children:h}),Object(l.jsx)("div",{style:{fontSize:"1.2rem",paddingBottom:"5%"},class:"tweak-description",children:a}),Object(l.jsx)("div",{style:{fontSize:"1.5rem"},class:"tweak-description "+b,children:"Screenshots:"}),Object(l.jsx)("div",{id:"carousel",class:b,children:d.map((function(e){return Object(l.jsx)("div",{class:"slide",children:Object(l.jsx)("img",{className:"tweak-img",alt:e,src:"/assets/"+s+"/"+e})})}))}),Object(l.jsx)("div",{style:{fontSize:"1.5rem"},class:"tweak-description",children:"Feature List:"}),Object(l.jsx)("ul",{class:"tweak-description",children:c.map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)("div",{style:{fontSize:"1.5rem",paddingBottom:"2%"},class:"tweak-description",children:"Most Recent Change:"}),Object(l.jsxs)("div",{class:"tweak-description",children:["Version ",u]}),Object(l.jsx)("ul",{class:"tweak-description",children:j.map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)(o.b,{to:"/repo/".concat(s,"/changelog"),class:"tweak-description",style:{fontSize:"1.5rem",color:"gray"},children:"Full Changelog"}),Object(l.jsx)(w,{})]})};var C=function(e){var t=e.changelog,s=[],a=[];return Object.keys(t).forEach((function(e){s.push(e),a.push(t[e])})),Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.jsxs)("div",{class:"tweak-description",children:[Object(l.jsx)("h1",{children:"Changelog"}),Object(l.jsx)("ul",{style:{listStyleType:"none"},children:s.map((function(e){return Object(l.jsxs)("li",{children:[e,Object(l.jsx)("ul",{children:t[e].map((function(e){return Object(l.jsx)("li",{children:e})}))})]})}))})]})};n.a.render(Object(l.jsx)(o.a,{basename:"/",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(r.a,{exact:!0,path:"/repo",component:y}),Object(l.jsx)(r.a,{exact:!0,path:"/projects",component:g}),f.map((function(e){return Object(l.jsx)(r.a,{exact:!0,path:"/repo/"+e.bundle,children:Object(l.jsx)(S,{name:e.name,bundle:e.bundle,description:e.description,supportedVersions:e["supported-versions"],features:e.features,changelog:e.changelog,screenshots:e.screenshots})})})),f.map((function(e){return Object(l.jsx)(r.a,{exact:!0,path:"/repo/"+e.bundle+"/changelog",children:Object(l.jsx)(C,{changelog:e.changelog})})}))]})}),document.getElementById("root")),c()}},[[40,1,2]]]);
//# sourceMappingURL=main.caf0eb59.chunk.js.map