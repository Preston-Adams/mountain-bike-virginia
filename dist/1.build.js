webpackJsonp([1],{360:function(t,e,r){"use strict";function a(t){r(387)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(389),s=r.n(i),n=r(391),o=r(90),l=a,u=o(s.a,n.a,l,null,null);e.default=u.exports},364:function(t,e,r){"use strict";function a(t){r(365)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(367),s=r.n(i),n=r(368),o=r(90),l=a,u=o(s.a,n.a,l,null,null);e.default=u.exports},365:function(t,e,r){var a=r(366);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(359)("7ac197a4",a,!0)},366:function(t,e,r){e=t.exports=r(125)(void 0),e.push([t.i,".toolbar{background-color:transparent!important;margin-bottom:32rem}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:12rem}.mtbva{width:8rem}.xxcva-link{margin-left:1rem}.fb{width:2.5rem}.nav-text{margin-top:4.5rem!important;color:#fff!important;margin-left:1rem;margin-right:1rem;text-decoration:none;font-size:1.5rem}.nav-link{margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},367:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"]}},368:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:t.image,height:t.headerHeight}},[a("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:""}},[a("router-link",{staticClass:"nav-link",attrs:{to:"home"}},[a("img",{staticClass:"mtbva",attrs:{src:r(369)}})]),a("router-link",{staticClass:"xxcva-link nav-link",attrs:{to:"home"}},[a("img",{staticClass:"xxcva",attrs:{src:r(370),alt:"XXCVA"}})]),a("v-spacer"),a("router-link",{staticClass:"nav-text",attrs:{to:"/results"}},[t._v("\n        Results\n    ")]),a("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[a("img",{staticClass:"fb",attrs:{src:r(371)}})])],1),a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("h3",{staticClass:"white--text mtbva-title"},[t._v(t._s(t.title))]),a("h5",{staticClass:"white--text mtbva-title"},[t._v(t._s(t.subtitle))]),t.buttonLink?a("v-btn",{staticClass:"header-button",attrs:{raised:"",href:t.buttonLink}},[t._v("\n      "+t._s(t.button)+"\n    ")]):t._e()],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},369:function(t,e,r){t.exports=r.p+"mtbva.png"},370:function(t,e,r){t.exports=r.p+"XXCVA.jpg"},371:function(t,e,r){t.exports=r.p+"589924bbb44fa4e84071f87517704017.svg"},372:function(t,e,r){"use strict";function a(t){r(373)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(375),s=r.n(i),n=r(376),o=r(90),l=a,u=o(s.a,n.a,l,null,null);e.default=u.exports},373:function(t,e,r){var a=r(374);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(359)("56993d6c",a,!0)},374:function(t,e,r){e=t.exports=r(125)(void 0),e.push([t.i,".yt-wrapper{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.yt-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""])},375:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"youtube",props:["src"]}},376:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"yt-wrapper"},[r("iframe",{attrs:{width:"100%",src:t.src,frameborder:"0",allowfullscreen:""}})])},i=[],s={render:a,staticRenderFns:i};e.a=s},377:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(378),i=r.n(a),s=r(379),n=r(90),o=n(i.a,s.a,null,null,null);e.default=o.exports},378:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"paragraph-with-links",props:["paragraph"]}},379:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"paragraph-with-links"},t._l(t.paragraph,function(e){return r("span",[e.url?r("a",{attrs:{href:e.url}},[t._v("\n      "+t._s(e.words)+"\n    ")]):r("span",[t._v("\n      "+t._s(e.words)+"\n    ")])])}))},i=[],s={render:a,staticRenderFns:i};e.a=s},380:function(t,e,r){"use strict";function a(t){r(381)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(383),s=r.n(i),n=r(384),o=r(90),l=a,u=o(s.a,n.a,l,null,null);e.default=u.exports},381:function(t,e,r){var a=r(382);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(359)("54f0067b",a,!0)},382:function(t,e,r){e=t.exports=r(125)(void 0),e.push([t.i,"@media screen and (max-width:600px){.social-button{margin:0!important;width:2rem!important}.icon{font-size:1.5rem!important}}.social-right{margin-top:-1rem;float:right}",""])},383:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"social-actions",props:["post"],data:function(){return{baseUrl:"http://bikeva.com"}},methods:{facebookLink:function(t){return"http://www.facebook.com/share.php?u="+this.baseUrl+t.href},redditLink:function(t){return"http://www.reddit.com/submit?url="+this.baseUrl+t.href},twitterLink:function(t){return"http://twitter.com/home?status="+t.title+" "+this.baseUrl+t.href}}}},384:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"social-right"},[r("v-btn",{staticClass:"blue--text text--darken-4 social-button",attrs:{icon:"",href:t.facebookLink(t.post)}},[r("v-icon",{attrs:{medium:""}},[t._v("fa-facebook")])],1),r("v-btn",{staticClass:"red--text social-button",attrs:{icon:"",href:t.redditLink(t.post)}},[r("v-icon",{attrs:{medium:""}},[t._v("fa-reddit")])],1),r("v-btn",{staticClass:"light-blue--text social-button",attrs:{icon:"",href:t.twitterLink(t.post)}},[r("v-icon",{attrs:{medium:""}},[t._v("fa-twitter")])],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},385:function(t,e,r){"use strict";var a=r(386);t.exports=[{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 1st, 2017",promoParagraph:[{words:"Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive."}],altUrl:"/results",altText:"View the Results.",resultsIdx:0,youtubeSrc:"https://www.youtube.com/embed/uO44Tt0woT8",href:"/creature2017recap"},{title:"Full Site Relaunch!",subtitle:"The same pirates are still at it.",img:a,href:"/relaunch"},{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 2nd, 2016",promoParagraph:[{words:"The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were even graced by the presence of the fantastic Mr. "},{words:"Jeremiah Bishop",url:"https://en.wikipedia.org/wiki/Jeremiah_Bishop"},{words:"who still managed to take first despite starting 3 minutes late."}],altUrl:"/results",altText:"View the Results.",resultsIdx:1,youtubeSrc:"https://www.youtube.com/embed/656HZ2mYpc0",href:"/creature2016"}].reverse()},386:function(t,e,r){t.exports=r.p+"rockymthi8.jpg"},387:function(t,e,r){var a=r(388);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(359)("14d7b8ae",a,!0)},388:function(t,e,r){e=t.exports=r(125)(void 0),e.push([t.i,".post-card{width:100%}.post{margin-top:1.5rem;margin-bottom:1.5rem}.post-img{width:100%}",""])},389:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(390),s=a(i),n=r(364),o=a(n),l=r(372),u=a(l),c=r(377),p=a(c),d=r(380),f=a(d),h=r(385),m=a(h);e.default={name:"blog",components:{ParagraphWithLinks:p.default,MTBVAHeader:o.default,Youtube:u.default,SocialActions:f.default},data:function(){return{posts:m.default.reverse()}},computed:{image:function(){return s.default}}}},390:function(t,e,r){t.exports=r.p+"foliage.png"},391:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"blog"}},[r("m-t-b-v-a-header",{attrs:{"header-height":"800",image:t.image,title:"Mountain Bike Virginia",subtitle:"Exposing the trove of trails in The Old Dominion",button:"Ride or Race with us",buttonLink:"https://www.facebook.com/pg/xxcva/events/"}}),r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(t.posts,function(e){return r("div",{staticClass:"post-card"},[r("v-card",{staticClass:"post",attrs:{hover:"",ripple:"",href:e.href}},[r("v-card-text",[r("h4",[t._v(t._s(e.title))]),r("social-actions",{attrs:{post:e}}),r("h6",[t._v(t._s(e.subtitle))]),r("paragraph-with-links",{attrs:{paragraph:e.promoParagraph}}),e.altUrl?r("div",[r("router-link",{attrs:{to:e.altUrl}},[t._v("\n                "+t._s(e.altText)+"\n              ")])],1):t._e()],1),e.youtubeSrc?r("youtube",{attrs:{src:e.youtubeSrc}}):t._e(),e.img?r("img",{staticClass:"post-img",attrs:{src:e.img}}):t._e()],1)],1)}))],1)],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s}});