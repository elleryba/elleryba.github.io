(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},2734:function(e,t,n){"use strict";n("c093")},"85ec":function(e,t,n){},c093:function(e,t,n){},c7bd:function(e,t,n){e.exports=n.p+"img/profile_pic.03d986b6.png"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background}},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-icon",{attrs:{size:"28",color:"background"}},[e._v("mdi-newspaper-variant-outline")]),n("span",{staticClass:"name",style:{color:e.$vuetify.theme.themes[e.theme].background}},[e._v(" ELLE RYBA ")])],1),n("v-spacer"),n("v-toolbar-items",[n("PhoneInfo")],1),n("v-toolbar-items",[n("EmailInfo")],1),n("v-toolbar-items",[n("LinkedInInfo")],1),n("v-toolbar-items",[n("GitHubInfo")],1),n("v-toolbar-items",[n("ThemeChanger")],1)],1),n("v-main",[n("v-container",{staticClass:"d-flex justify-center"},[n("AboutMe")],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticStyle:{height:"150px"},attrs:{"no-gutters":""}},[e.isLoading?n("div",[n("SkeletonLoader")],1):n("v-card",{staticClass:"my-4 mx-4",attrs:{"max-width":"500",height:"650",elevation:"5"}},[n("v-img",{attrs:{"max-height":"350",src:e.profilePic}}),n("v-card-title",[e._v("Elle Ryba")]),n("v-card-text",[n("v-row",{staticClass:"mx-0 my-0",attrs:{align:"center"}},[n("div",{staticClass:"text-subtitle-1"},[e._v(" Front-end only resume ")])]),n("v-row",{staticClass:"my-2 mx-0"},[n("div",{staticClass:"text-subtitle-3",attrs:{align:"left"}},[e._v(" This project started as front-end only resume app to help refine my skills. I have now built out a full stack project with data being served up to the client from Sql Server via a RESTful api. The code for that version of this project can be found "),n("a",{attrs:{target:"blank",href:"https://github.com/elleryba/vuetify-resume"}},[e._v("here")]),e._v(". I am now researching how I can deploy the full stack version. While I learn, I have created this front-end only version to deploy via Github Pages. ")])])],1),n("v-divider",{staticClass:"mx-4"}),n("Resume")],1),n("v-row",{staticStyle:{height:"150px"},attrs:{"no-gutters":""}},[e.isLoading?n("div",[n("SkeletonLoader")],1):n("v-card",{staticClass:"my-4 mx-4",attrs:{color:"primary","max-width":"500",height:"650",elevation:"5"}},[n("TechnicalExperience"),n("PersonalInfo")],1)],1)],1)],1)},o=[],c=n("1da1"),l=(n("96cf"),n("2ef0")),u=n("ed09"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("v-card",{staticClass:"my-4 mx-4",attrs:{"max-width":"500",elevation:"5"}},[n("v-card-title",[e._v("Personal")]),n("v-card-text",[n("v-row",{staticClass:"mx-0 my-0",attrs:{align:"center"}},[n("div",{staticClass:"text-subtitle-1"},[e._v("A Day in the Life...")])]),n("v-row",{staticClass:"my-2 mx-0"},[n("div",{staticClass:"text-subtitle-3",attrs:{align:"left"}},[n("p",[e._v("In my personal time I am playing through the "),n("a",{attrs:{href:"https://www.ea.com/games/mass-effect/mass-effect-legendary-edition",target:"_blank"}},[e._v(" Mass Effect")]),e._v(" trilogy via "),n("a",{attrs:{href:"https://www.xbox.com/en-US/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0",target:"_blank"}},[e._v(" Xbox Game Pass")]),e._v(". Happy to report I have finished the first game, and I am nearing the end of the second.")]),n("p",[e._v("I am also working on this resume project, which I hope is obvious.")])])])],1)],1)],1)],1)},m=[],v={},p=v,f=n("2877"),h=n("6544"),b=n.n(h),g=n("b0af"),y=n("99d9"),k=n("62ad"),w=n("0fd9"),S=Object(f["a"])(p,d,m,!1,null,null,null),x=S.exports;b()(S,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:k["a"],VRow:w["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"warning"},on:{click:e.flipResumeDisplay}},[e._v(" Resume ")])],1),n("v-expand-transition",[e.isResumeShowing?n("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal scroll",staticStyle:{height:"100%"},attrs:{color:"primary",elevation:"5"}},[e._l(e.resumeData,(function(t){return n("v-card",{key:t.id,staticClass:"my-4 mx-4",attrs:{elevation:"5"}},[n("v-card-title",[e._v(e._s(t.companyName))]),n("v-card-text",[n("v-row",{staticClass:"mx-0 my-0",attrs:{align:"center"}},[n("div",{staticClass:"text-subtitle-1"},[e._v(" Title: "+e._s(t.title)),n("br"),e._v(" Start Date: "+e._s(e.useJsDateFormatter(t.startDate))),n("br"),e._v(" End Date: "+e._s(e.useJsDateFormatter(t.endDate))),n("br"),e._v(" Worked Remote: "+e._s(t.wasRemotePosition?"Yes":"No")+" ")])]),n("v-row",{staticClass:"mx-0 my-0",attrs:{align:"center"}},[n("div",[n("ul",e._l(t.jobDuties,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)])])],1)],1)})),n("v-card-actions",{staticClass:"pt-0"},[n("v-btn",{attrs:{text:"",color:"warning"},on:{click:e.flipResumeDisplay}},[e._v(" Close ")])],1)],2):e._e()],1)],1)},E=[];n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("99af");function T(e){if(void 0==e)return"";var t=e.toString(),n=t.split(" "),a="".concat(n[1]," ").concat(n[2]," ").concat(n[3]);return a}var C=n("2f62"),j=n("bee2"),O=n("d4ec"),V=(n("d9e2"),n("bc3a")),D=n.n(V),I=Object(j["a"])((function e(){Object(O["a"])(this,e)}));I.SET_RESUME="SET_RESUME";var L={SET_RESUME:function(e,t){e.resume=t.resume}},R=L,A=Object(j["a"])((function e(){Object(O["a"])(this,e)}));A.GetResume="resume/getResume",A.SetResume="resume/setResume";var P={getResume:function(e){var t=e.commit;D.a.get("http://localhost:41368/api/resume").then((function(e){if(Object(l["isEmpty"])(null===e||void 0===e?void 0:e.data))throw new Error("response is empty");var n=e.data.resume;return t(I.SET_RESUME,{resume:n}),n})).catch((function(e){return console.error("resume/getResume :: failed",e)}))},setResume:function(e){var t=e.commit,n={resume:[{companyName:"AmpliFund",endDate:void 0,id:4,jobDuties:[],startDate:new Date("2022-02-15T00:00:00"),title:"Developer II",wasRemotePosition:!0},{companyName:"National General Insurance Company",endDate:new Date("2022-02-08T00:00:00"),id:1,jobDuties:["Agile team with project-focused delivery","Full stack project creating a new website for internal and external agents to write quotes and bind policies","MVC pattern","Domain driven design","Microservice architecture","SOLID principles","Create RESTful Api services using C# and .NET 3.1","Interact with SQL storage via EF Core and SQL Server Management Studio","Interact with NoSQL storage via MongoDB Driver NuGet","Code defensively via early returns based on null/conditional checks prior to accessing or modifying data","Test locally by consuming endpoints via Postman","Write unit tests using AAA pattern","Use HTML, CSS, JavaScript, and TypeScript to build out Vue components","Interact with the back-end services by consuming endpoints via Axios library","Create composables for code reusability without violating DRY principles","Ensure a positive, consistent user experience throughout each page","Locally test all code changes","Debug via Console, Network, and Vue.js devtools","Complete integration testing across domain apis, and full-stack testing from the front-end to back-end","Make revisions to eliminate errors prior to QA review","Work with the business to obtain approval for changes made to the project","Submit and review pull requests via Azure DevOps","Track sprint work and open bugs via Azure DevOps","Score effort for tasks using Fibonacci scale"],startDate:new Date("2020-09-01T00:00:00"),title:"Enterprise Software Developer Senior Consultant I",wasRemotePosition:!0},{companyName:"Homesite Insurance",endDate:new Date("2020-05-01T00:00:00"),id:2,jobDuties:["During first contact with a customer, assessed needs and formulated a plan for resolution in real-time","Negotiate settlements that were favorable for both the customer and the company","Recognized and escalated potential fraud and recovery opportunities to prevent monetary and reputational loss","Utilized time management skills to lower overall cycle time and pending claims volume below expected standard"],startDate:new Date("2019-08-01T00:00:00"),title:"Claims Adjuster",wasRemotePosition:!0},{companyName:"Safeguard Properties",endDate:new Date("2019-08-01"),id:3,jobDuties:["Directly responsible for managing assignments, tracking quality & production, and providing regular performance feedback and coaching to a staff of 14","Implemented production tracking to streamline processing and lessen time needed to track daily data","Created Excel pivot with processor reported indirect time and average production per month. This helped to identify trends and areas of opportunity at processor level","Developed new workflow distribution to increase proficiency for processors by 29.31% in three months","Created weekly reconciliation reporting and analyzed trends to isolate opportunities to mitigate revenue loss"],startDate:new Date("2012-10-01"),title:"Order Entry Team Lead",wasRemotePosition:!1}]};t(I.SET_RESUME,{resume:n.resume})}},M=P,N=Object(j["a"])((function e(){Object(O["a"])(this,e)}));N.All="resume/getResume";var $={getResume:function(e){return e.resume}},z=$,B={resume:{}},F=B,X={namespaced:!0,state:F,actions:M,mutations:R,getters:z},G=X,H=Object(j["a"])((function e(){Object(O["a"])(this,e)}));H.SET_SKILLS="SET_EXPERIENCE";var J={SET_EXPERIENCE:function(e,t){e.items=t.items}},K=J,U=Object(j["a"])((function e(){Object(O["a"])(this,e)}));U.GetTechnicalExperience="technicalExperience/getTechnicalExperience",U.SetTechnicalExperience="technicalExperience/setTechnicalExperience";var Q={getTechnicalExperience:function(e){var t=e.commit;D.a.get("http://localhost:41368/api/technical_experience").then((function(e){if(Object(l["isEmpty"])(null===e||void 0===e?void 0:e.data))throw new Error("response is empty");var n=e.data;return t(H.SET_SKILLS,{items:n}),n})).catch((function(e){return console.error("technicalExperience/getTechnicalExperience :: failed",e)}))},setTechnicalExperience:function(e){var t=e.commit,n={items:["Engineered a back-end microservice framework within multiple domain driven apis. Full-stack project. Involved in all aspects of development. Responsible for maintaining and refining code as well as interpreting user stories to build out new features. Worked closely with testers to resolve bugs as they were reported."]};t(H.SET_SKILLS,{items:n.items})}},q=Q,W=Object(j["a"])((function e(){Object(O["a"])(this,e)}));W.All="technicalExperience/getTechnicalExperience";var Y={getTechnicalExperience:function(e){return e.items}},Z=Y,ee={items:[]},te=ee,ne={namespaced:!0,state:te,actions:q,mutations:K,getters:Z},ae=ne,ie=Object(j["a"])((function e(){Object(O["a"])(this,e)}));ie.SET_SKILLS="SET_SKILLS";var re={SET_SKILLS:function(e,t){e.skills=t.skills}},se=re,oe=Object(j["a"])((function e(){Object(O["a"])(this,e)}));oe.GetTechnicalSkills="technicalSkills/getTechnicalSkills",oe.SetTechnicalSkills="technicalSkills/setTechnicalSkills";var ce={getTechnicalSkills:function(e){var t=e.commit;D.a.get("http://localhost:41368/api/technical_skills").then((function(e){if(Object(l["isEmpty"])(null===e||void 0===e?void 0:e.data))throw new Error("response is empty");var n=e.data;return t(ie.SET_SKILLS,{skills:n}),n})).catch((function(e){return console.error("technicalSkills/getTechnicalSkills :: failed",e)}))},setTechnicalSkills:function(e){var t=e.commit,n={skills:["JavaScript","HTML","CSS","Vue.js","Visual Studio Code","TypeScript","C#",".NET","SQL","NoSQL","SQL Server Management Studio","MongoDB","Visual Studio","Azure DevOps","Postman"]};t(ie.SET_SKILLS,{skills:n.skills})}},le=ce,ue=Object(j["a"])((function e(){Object(O["a"])(this,e)}));ue.All="technicalSkills/getAllSkills";var de={getAllSkills:function(e){return e.skills}},me=de,ve={skills:[]},pe=ve,fe={namespaced:!0,state:pe,actions:le,mutations:se,getters:me},he=fe;a["default"].use(C["a"]);var be=new C["a"].Store({modules:{resume:G,technicalExperience:ae,technicalSkills:he}}),ge=Object(u["c"])({name:"Resume",setup:function(){var e=Object(u["d"])(!1),t=Object(u["a"])((function(){return be.getters[N.All]}));function n(){e.value=!e.value}return be.dispatch(A.SetResume),{flipResumeDisplay:n,isResumeShowing:e,resumeData:t,useJsDateFormatter:T}}}),ye=ge,ke=(n("2734"),n("8336")),we=n("0789"),Se=Object(f["a"])(ye,_,E,!1,null,"71ec64a4",null),xe=Se.exports;b()(Se,{VBtn:ke["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VExpandTransition:we["a"],VRow:w["a"]});var _e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-skeleton-loader",{staticClass:"my-4 mx-4",attrs:{width:"500",height:"350",elevation:"5",type:"card-heading, list-item-three-line, list-item-two-line, list-item-two-line"}})},Ee=[],Te=Object(u["c"])({name:"SkeletonLoader"}),Ce=Te,je=n("3129"),Oe=Object(f["a"])(Ce,_e,Ee,!1,null,null,null),Ve=Oe.exports;b()(Oe,{VSkeletonLoader:je["a"]});var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("v-card",{staticClass:"my-4 mx-4",attrs:{"max-width":"500",elevation:"5"}},[n("v-card-title",[e._v("Technical Experience")]),n("v-card-text",[n("v-row",{staticClass:"mx-0 my-0",attrs:{align:"center"}},[n("div",{staticClass:"text-subtitle-1"},[e._v("On the Job...")])]),n("v-row",{staticClass:"my-2 mx-0"},[n("div",{staticClass:"text-subtitle-3",attrs:{align:"left"}},e._l(e.experienceData,(function(t){return n("p",{key:t},[e._v(e._s(t))])})),0)])],1),n("v-divider",{staticClass:"mx-4"}),n("TechnicalSkills")],1)],1)],1)},Ie=[],Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"warning"},on:{click:e.flipTechStackDisplay}},[e._v(" Tech Skills ")])],1),n("v-expand-transition",[e.isTechStackDisplayed?n("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal scroll",staticStyle:{height:"100%"}},[n("v-card-text",{staticClass:"pb-0"},e._l(e.skills,(function(t){return n("p",{key:t},[e._v(e._s(t))])})),0),n("v-card-actions",{staticClass:"pt-0"},[n("v-btn",{attrs:{text:"",color:"warning"},on:{click:e.flipTechStackDisplay}},[e._v(" Close ")])],1)],1):e._e()],1)],1)},Re=[],Ae=Object(u["c"])({name:"TechSkills",setup:function(){var e=Object(u["d"])(!1),t=Object(u["a"])((function(){return be.getters[ue.All]}));function n(){e.value=!e.value}return be.dispatch(oe.SetTechnicalSkills),{isTechStackDisplayed:e,flipTechStackDisplay:n,skills:t}}}),Pe=Ae,Me=(n("d910"),Object(f["a"])(Pe,Le,Re,!1,null,"9e0b9320",null)),Ne=Me.exports;b()(Me,{VBtn:ke["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VExpandTransition:we["a"]});var $e=Object(u["c"])({name:"TechnicalExperience",components:{TechnicalSkills:Ne},setup:function(){var e=Object(u["a"])((function(){return be.getters[W.All]}));return be.dispatch(U.SetTechnicalExperience),{experienceData:e}}}),ze=$e,Be=n("ce7e"),Fe=Object(f["a"])(ze,De,Ie,!1,null,null,null),Xe=Fe.exports;b()(Fe,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:k["a"],VDivider:Be["a"],VRow:w["a"]});var Ge=Object(u["c"])({name:"AboutMe",components:{PersonalInfo:x,Resume:xe,SkeletonLoader:Ve,TechnicalExperience:Xe},setup:function(){var e=["start","center","end"],t=Object(u["d"])(!0),n=Object(u["a"])((function(){return be.getters[N.All]})),a=Object(u["a"])((function(){return be.getters[W.All]})),i=Object(u["a"])((function(){return be.getters[ue.All]}));function r(){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:while(Object(l["isEmpty"])(n)||Object(l["isEmpty"])(a)||Object(l["isEmpty"])(i))t.value=!0;setTimeout((function(){return t.value=!1}),2e3);case 2:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}return r(),{alignments:e,isLoading:t}},data:function(){return{profilePic:n("c7bd")}}}),He=Ge,Je=n("adda"),Ke=Object(f["a"])(He,s,o,!1,null,null,null),Ue=Ke.exports;b()(Ke,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VDivider:Be["a"],VImg:Je["a"],VRow:w["a"]});var Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{text:"",color:"background"},on:{click:function(t){return e.sendEmail()}}},[n("v-icon",{attrs:{size:"27"}},[e._v("mdi-email-fast")])],1)},qe=[],We=a["default"].extend({name:"EmailInfo",data:function(){return{}},methods:{sendEmail:function(){window.location.href="mailto:elleryba@icloud.com"}}}),Ye=We,Ze=n("132d"),et=Object(f["a"])(Ye,Qe,qe,!1,null,null,null),tt=et.exports;b()(et,{VBtn:ke["a"],VIcon:Ze["a"]});var nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{href:e.route,target:"_blank",text:"",color:"background"}},[n("v-icon",{attrs:{size:"26"}},[e._v("mdi-github")])],1)},at=[],it=a["default"].extend({name:"GitHubInfo",data:function(){return{route:"https://github.com/elleryba"}},methods:{}}),rt=it,st=Object(f["a"])(rt,nt,at,!1,null,null,null),ot=st.exports;b()(st,{VBtn:ke["a"],VIcon:Ze["a"]});var ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{href:e.route,target:"_blank",text:"",color:"background"}},[n("v-icon",{attrs:{size:"26"}},[e._v("mdi-linkedin")])],1)},lt=[],ut=a["default"].extend({name:"LinkedInInfo",data:function(){return{route:"https://www.linkedin.com/in/elle-ryba/"}},methods:{}}),dt=ut,mt=Object(f["a"])(dt,ct,lt,!1,null,null,null),vt=mt.exports;b()(mt,{VBtn:ke["a"],VIcon:Ze["a"]});var pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!0,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{large:"",icon:""}},a),[n("v-icon",{attrs:{size:"26",color:"background"}},[e._v("mdi-cellphone")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-card",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[e._v(e._s(e.phoneNumber))])],1),n("v-list-item-action",[n("v-btn",{on:{click:function(t){return e.copyPhoneNumber()}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}},[n("v-icon",{attrs:{size:"20",color:"accent"}},[e._v("mdi-content-copy")])],1)],1)],1),n("v-divider")],1)],1)},ft=[],ht={name:"PhoneInfo",data:function(){return{menu:!1,phoneNumber:"XXX-XXX-XXXX"}},methods:{copyPhoneNumber:function(){navigator.clipboard.writeText("216-379-9501")}}},bt=ht,gt=n("da13"),yt=n("1800"),kt=n("5d23"),wt=n("e449"),St=Object(f["a"])(bt,pt,ft,!1,null,null,null),xt=St.exports;b()(St,{VBtn:ke["a"],VCard:g["a"],VDivider:Be["a"],VIcon:Ze["a"],VListItem:gt["a"],VListItemAction:yt["a"],VListItemContent:kt["a"],VListItemTitle:kt["b"],VMenu:wt["a"]});var _t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!0,"nudge-width":100,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{large:"",icon:""}},a),[n("v-icon",{attrs:{size:"30",color:"background"}},[e._v("mdi-brightness-6")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-card",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[e._v(e._s(e.isDark?"Light Mode":"Dark Mode"))])],1),n("v-list-item-action",[n("v-switch",{on:{click:function(t){return e.setSwitchText()}},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),n("v-divider")],1)],1)},Et=[],Tt=a["default"].extend({name:"ThemeChanger",data:function(){return{isDark:!1,menu:!1}},methods:{setSwitchText:function(){this.isDark=!this.isDark}}}),Ct=Tt,jt=n("b73d"),Ot=Object(f["a"])(Ct,_t,Et,!1,null,null,null),Vt=Ot.exports;b()(Ot,{VBtn:ke["a"],VCard:g["a"],VDivider:Be["a"],VIcon:Ze["a"],VListItem:gt["a"],VListItemAction:yt["a"],VListItemContent:kt["a"],VListItemTitle:kt["b"],VMenu:wt["a"],VSwitch:jt["a"]});var Dt=a["default"].extend({name:"App",components:{AboutMe:Ue,EmailInfo:tt,GitHubInfo:ot,LinkedInInfo:vt,PhoneInfo:xt,ThemeChanger:Vt},data:function(){return{}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}}),It=Dt,Lt=(n("034f"),n("7496")),Rt=n("40dc"),At=n("a523"),Pt=n("f6c4"),Mt=n("2fa4"),Nt=n("2a7f"),$t=Object(f["a"])(It,i,r,!1,null,null,null),zt=$t.exports;b()($t,{VApp:Lt["a"],VAppBar:Rt["a"],VContainer:At["a"],VIcon:Ze["a"],VMain:Pt["a"],VSpacer:Mt["a"],VToolbarItems:Nt["a"]});var Bt=n("8c4f"),Ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AboutMe")],1)},Xt=[],Gt=Object(u["c"])({name:"Home",components:{AboutMe:Ue}}),Ht=Gt,Jt=Object(f["a"])(Ht,Ft,Xt,!1,null,null,null),Kt=Jt.exports;a["default"].use(Bt["a"]);var Ut=[{path:"/",name:"Home",component:Kt}],Qt=new Bt["a"]({base:"/",routes:Ut}),qt=Qt,Wt=(n("5363"),n("f309"));a["default"].use(Wt["a"]);var Yt=new Wt["a"]({theme:{options:{customProperties:!0},themes:{light:{background:"#E1E1E1",primary:"#048FA3",secondary:"#81989C",accent:"#8c9eff",error:"#b71c1c",warning:"#F3B650"},dark:{background:"#414242",primary:"#878E8F",secondary:"#3f51b5",accent:"#C6D8DB",error:"#ff5722",warning:"#85C3F7",info:"#673ab7",success:"#009688"}}},icons:{iconfont:"mdi"}});a["default"].config.productionTip=!1,a["default"].use(u["b"]),new a["default"]({router:qt,store:be,vuetify:Yt,render:function(e){return e(zt)}}).$mount("#app")},d910:function(e,t,n){"use strict";n("f55c")},f55c:function(e,t,n){}});
//# sourceMappingURL=app.4b93b663.js.map