!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=e.parcelRequirebcdd;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return a[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequirebcdd=i),i.register("1UHsN",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,a){if(!e.has(t))throw new TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}})),i.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),i.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=a}}})),i("8tk4c"),i("4P4j1");var r=i("bpxeT"),s=i("2TvXO"),c=i("4P4j1");document.querySelector(".header__search-form"),document.querySelector(".search-form__input"),document.querySelector(".search-form__button"),document.querySelector(".list-news-card"),document.querySelector(".bad-request"),document.querySelector(".weather"),document.querySelector(".list-news-card");i("4At6I");var l=[{name:"January",days:31},{name:"February",days:28},{name:"March",days:31},{name:"April",days:30},{name:"May",days:31},{name:"June",days:30},{name:"July",days:31},{name:"August",days:31},{name:"September",days:30},{name:"October",days:31},{name:"November",days:30},{name:"December",days:31}],o=new Date,u=o.getFullYear(),h=l[o.getMonth()],d=o.getDate(),p=o.getMonth(),f=u,v=new Event("setdate",{bubbles:!0}),g={calendarFild:document.querySelector(".calendar__fild"),calendarInput:document.querySelector(".calendar__input"),calendarDays:document.querySelector(".calendar__days"),calendarIconUp:document.querySelector(".calendar__icon--up"),calendarIconDown:document.querySelector(".calendar__icon--down"),calendarMonthSpan:document.getElementById("month-span"),calendarYearSpan:document.getElementById("year-span"),calendarPrevButtonMonth:document.getElementById("prev-button-month"),calendarNextButtonMonth:document.getElementById("next-button-month"),calendarPrevButtonYear:document.getElementById("prev-button-year"),calendarNextButtonYear:document.getElementById("next-button-year")};function w(){g.calendarMonthSpan.textContent=h.name,g.calendarYearSpan.textContent=u,g.calendarDays.innerHTML=m(u,h.days),document.getElementById("currentmonth-day-".concat(d)).classList.add("calendar__current-date")}function m(t,e){o.setFullYear(f,p,1);var a=o.getDay(),n="",i="";t%4==0&&28===e&&(e+=1),0===a&&(a+=7);for(var r=1;r<=e;r+=1)i+='<li class="calendar__day" id="currentmonth-day-'.concat(r,'">').concat(r,"</li>");for(var s=0;s<a-1;s+=1)n+='<li class="calendar__day calendar__day--empty"></li>';return n+i}function b(t){return String(t).padStart(2,"0")}g.calendarInput.addEventListener("focus",(function(){g.calendarFild.classList.add("focus"),g.calendarInput.classList.add("focus"),g.calendarIconUp.classList.remove("calendar-is-hidden"),g.calendarIconDown.classList.add("calendar-is-hidden")})),g.calendarDays.addEventListener("click",(function(t){if("LI"!==t.target.nodeName)return;var e=document.querySelector(".calendar__current-date");null==e||e.classList.remove("calendar__current-date"),t.target.classList.add("calendar__current-date"),g.calendarFild.classList.remove("focus"),g.calendarInput.classList.remove("focus"),g.calendarIconUp.classList.add("calendar-is-hidden"),g.calendarIconDown.classList.remove("calendar-is-hidden"),g.calendarInput.value="".concat(b(t.target.textContent),"-").concat(b(p+1),"-").concat(f),o.setFullYear(f,p,Number(t.target.textContent)),g.calendarInput.dispatchEvent(v)})),g.calendarIconUp.addEventListener("click",(function(){g.calendarFild.classList.remove("focus"),g.calendarInput.classList.remove("focus"),g.calendarIconUp.classList.add("calendar-is-hidden"),g.calendarIconDown.classList.remove("calendar-is-hidden")})),g.calendarPrevButtonMonth.addEventListener("click",(function(){p-=1,g.calendarMonthSpan.textContent=l[p].name,0===p&&(g.calendarPrevButtonMonth.disabled=!0);p<11&&(g.calendarNextButtonMonth.disabled=!1);g.calendarDays.innerHTML=m(f,l[p].days)})),g.calendarNextButtonMonth.addEventListener("click",(function(){p+=1,g.calendarMonthSpan.textContent=l[p].name,11===p&&(g.calendarNextButtonMonth.disabled=!0);p>0&&(g.calendarPrevButtonMonth.disabled=!1);g.calendarDays.innerHTML=m(f,l[p].days)})),g.calendarPrevButtonYear.addEventListener("click",(function(){f-=1,g.calendarYearSpan.textContent=f,g.calendarDays.innerHTML=m(f,l[p].days)})),g.calendarNextButtonYear.addEventListener("click",(function(){f+=1,g.calendarYearSpan.textContent=f,g.calendarDays.innerHTML=m(f,l[p].days)})),g.calendarInput.addEventListener("keyup",(function(t){"Enter"===t.key&&(g.calendarFild.classList.remove("focus"),g.calendarInput.classList.remove("focus"),g.calendarIconUp.classList.add("calendar-is-hidden"),g.calendarIconDown.classList.remove("calendar-is-hidden"),g.calendarInput.dispatchEvent(v),g.calendarInput.blur(),w())})),w();var y=i("iB7CT");i("abKF4"),i("dOFS2");c=i("4P4j1");i("dOFS2");var k=i("1RLhk"),_=(0,k.getMedia)(),M=[];(0,c.categoryOfNews)().then((function(t){M.length=0,t.forEach((function(t){M.push({section:encodeURIComponent(t.section),display_name:t.display_name})})),T=M.map((function(t){return'<li> <button type = "button" class ="categories_button display_button " data-section='.concat(t.section,">").concat(t.display_name,"</button> </li>")})),B=M.map((function(t){return'<li class = "inside_li"> <button type = "button" class ="other_but" data-section='.concat(t.section,">").concat(t.display_name,"</button> </li>")})),C()}));document.querySelectorAll("button");var S=document.querySelector(".categories_ul"),x=document.querySelector(".special"),L=document.querySelector(".special_but"),P=(document.querySelectorAll(".categories_button"),document.querySelector(".icon")),W=document.querySelector(".display_buttons");L.addEventListener("click",(function(){return}));var T="",B="";function C(){var t=(0,k.getMedia)(),e=[];2===t?e=T.slice(1,5):3===t&&(e=T.slice(1,7)),W.innerHTML="",W.insertAdjacentHTML("afterbegin",e.join(""));var a=B.slice(7,19);x.insertAdjacentHTML("afterbegin",a.join(""))}W.addEventListener("click",(function(t){return})),S.addEventListener("click",(function(t){t.preventDefault();var e=t.target,a=e.closest("button");a&&"BUTTON"===a.nodeName&&(e=a);if("BUTTON"!==e.nodeName)return;if("section"in e.dataset){e.dataset.section;if(e.classList.contains("categories_button")){var n=document.querySelector(".click-chang-bac");n&&n.classList.remove("click-chang-bac"),e.classList.toggle("click-chang-bac"),L.classList.contains("bek-for-other")&&(x.classList.toggle("is-hidden"),P.classList.toggle("icon-click"),L.classList.toggle("bek-for-other"))}if(e.classList.contains("other_but")){x.classList.toggle("is-hidden"),P.classList.toggle("icon-click"),L.classList.toggle("bek-for-other");var i=document.querySelector(".click-chang-bac");i&&i.classList.remove("click-chang-bac")}}e.classList.contains("special_but")&&(x.classList.toggle("is-hidden"),P.classList.toggle("icon-click"),L.classList.toggle("bek-for-other"))})),window.addEventListener("resize",(function(t){var e=(0,k.getMedia)();_!==e&&(C(),_=e)})),window.addEventListener("click",(function(t){null===t.target.closest(".categories_ul")&&L.classList.contains("bek-for-other")&&(x.classList.toggle("is-hidden"),P.classList.toggle("icon-click"),L.classList.toggle("bek-for-other"))}));r=i("bpxeT");var N=i("8MBJY"),I={};Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(t,e){var a=E.default(t,e,"get");return O.default(t,a)};var E=q(i("1UHsN")),O=q(i("ffZzF"));function q(t){return t&&t.__esModule?t:{default:t}}var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(t,e,a){F.default(t,e),e.set(t,a)};var j,F=(j=i("5k7tO"))&&j.__esModule?j:{default:j};var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.default=function(t,e,a){var n=U.default(t,e,"set");return Y.default(t,n,a),a};var U=A(i("1UHsN")),Y=A(i("jdVyQ"));function A(t){return t&&t.__esModule?t:{default:t}}var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=function(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(t,e){K.default(t,e),e.add(t)};var K=function(t){return t&&t.__esModule?t:{default:t}}(i("5k7tO"));s=i("2TvXO"),N=i("8MBJY");var z=i("a2hTj"),X=i("hKHmD"),Q=i("8nrFW"),V=[4,7,8],Z=".paginator",G=[{maxCenterButtonsCount:3,buttonWidth:28,scrollCount:1,margin:4},{maxCenterButtonsCount:5,buttonWidth:33,scrollCount:1,margin:8},{maxCenterButtonsCount:5,buttonWidth:33,scrollCount:1,margin:8}],$=(k=i("1RLhk"),new WeakMap),tt=new WeakMap,et=new WeakMap,at=new WeakMap,nt=new WeakMap,it=new WeakMap,rt=new WeakMap,st=new WeakMap,ct=new WeakMap,lt=new WeakMap,ot=new WeakMap,ut=new WeakMap,ht=new WeakMap,dt=new WeakMap,pt=new WeakMap,ft=new WeakMap,vt=new WeakMap,gt=new WeakMap,wt=new WeakSet,mt=new WeakSet,bt=new WeakSet,yt=new WeakSet,kt=new WeakSet,_t=new WeakSet,Mt=new WeakSet,St=new WeakSet,xt=new WeakSet,Lt=new WeakSet,Pt=new WeakSet,Wt=function(){"use strict";function e(a){var n=a.itemsPerPage,i=a.totalItems,r=a.currentPage,s=void 0===r?1:r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t(N)(this,e),t(J)(this,wt),t(J)(this,mt),t(J)(this,bt),t(J)(this,yt),t(J)(this,kt),t(J)(this,_t),t(J)(this,Mt),t(J)(this,St),t(J)(this,xt),t(J)(this,Lt),t(J)(this,Pt),t(D)(this,$,{writable:!0,value:5}),t(D)(this,tt,{writable:!0,value:0}),t(D)(this,et,{writable:!0,value:7}),t(D)(this,at,{writable:!0,value:1}),t(D)(this,nt,{writable:!0,value:2}),t(D)(this,it,{writable:!0,value:Z}),t(D)(this,rt,{writable:!0,value:"".concat(t(I)(this,it),"__carousel-wrapper")}),t(D)(this,st,{writable:!0,value:"".concat(t(I)(this,it),"__carousel")}),t(D)(this,ct,{writable:!0,value:null}),t(D)(this,lt,{writable:!0,value:null}),t(D)(this,ot,{writable:!0,value:null}),t(D)(this,ut,{writable:!0,value:0}),t(D)(this,ht,{writable:!0,value:0}),t(D)(this,dt,{writable:!0,value:0}),t(D)(this,pt,{writable:!0,value:33}),t(D)(this,ft,{writable:!0,value:0}),t(D)(this,vt,{writable:!0,value:8}),t(D)(this,gt,{writable:!0,value:t(Q)(G)}),t(X)(this,"onClick",null),t(H)(this,ct,document.querySelector(t(I)(this,it))),t(I)(this,ct)?(t(I)(this,ct).addEventListener("click",this.handlerOnClick.bind(this)),c&&(t(H)(this,gt,[]),t(H)(this,gt,c),t(R)(this,Pt,Ft).call(this)),this.reCreate({itemsPerPage:n,totalItems:i,currentPage:s},c)):console.error("Selector ".concat(t(I)(this,it)," not found"))}return t(z)(e,[{key:"render",value:function(){var e=this;if(t(I)(this,ut)<2)return t(I)(this,ct).style.display="none","";t(I)(this,ct).style.display=null;var a="";t(I)(this,ct).innerHTML="";for(var n=0;n<t(I)(this,ut);n+=1)this.buttons[n]=n+1;var i=(a=this.buttons.map((function(a,n,i){return'<li><button  class="paginator__button '.concat(n+1===e.currentPage?"paginator__button--current":"",'" type="button" data-page=').concat(a,' title= "Page ').concat(a,'">').concat(t(R)(e,_t,Et).call(e,a)?"...":a,"</button></li>")})))[0],r=a[a.length-1],s=t(I)(this,ut)>2?'<li class="paginator__carousel-wrapper"><ul class="paginator__carousel">'.concat(a.slice(1,a.length-1).join(""),"</ul></li>"):"";a='<li><button  class="paginator__button paginator__button--prev" data-page="prev" type="button" title="Previous page">Prev</button></li>'+"".concat(i)+s+"".concat(r)+'<li><button class="paginator__button paginator__button--next" data-page="next" type="button" title="Next page">Next</button></li>',t(I)(this,ct).insertAdjacentHTML("afterbegin",a)}},{key:"handlerOnClick",value:function(e){var a=e.target;"BUTTON"===a.nodeName&&"page"in a.dataset&&t(R)(this,wt,Tt).call(this,a.dataset.page)}},{key:"reCreate",value:function(e){var a=e.itemsPerPage,n=e.totalItems,i=e.currentPage,r=void 0===i?1:i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];s&&(t(H)(this,gt,[]),t(H)(this,gt,t(Q)(s)),t(R)(this,Pt,Ft).call(this)),t(H)(this,ft,0),t(H)(this,nt,2),t(H)(this,ht,a),t(H)(this,dt,n),t(H)(this,ut,Math.ceil(t(I)(this,dt)/t(I)(this,ht))),this.currentPage=r>t(I)(this,ut)?t(I)(this,ut):r,t(I)(this,ut)>2&&t(H)(this,tt,t(I)(this,ut)-2>=t(I)(this,$)?t(I)(this,$):t(I)(this,ut)-2),this.buttons=[],this.render(),t(R)(this,Lt,jt).call(this)}}]),e}();function Tt(e){switch(e){case"prev":if(1===this.currentPage)return;t(R)(this,mt,Bt).call(this,this.currentPage).classList.toggle("paginator__button--current"),2===this.currentPage&&t(R)(this,St,qt).call(this,"prev"),t(R)(this,xt,Dt).call(this,"next"),this.currentPage-=1;var a=t(R)(this,mt,Bt).call(this,this.currentPage);if(a.classList.toggle("paginator__button--current"),t(R)(this,kt,It).call(this,a))break;Ht(a,t(I)(this,lt))||t(R)(this,yt,Nt).call(this,1,t(I)(this,at));break;case"next":if(this.currentPage===t(I)(this,ut))return void t(R)(this,St,qt).call(this,"next");t(R)(this,mt,Bt).call(this,this.currentPage).classList.toggle("paginator__button--current"),this.currentPage===t(I)(this,ut)-1&&t(R)(this,St,qt).call(this,"next"),t(R)(this,xt,Dt).call(this,"prev"),this.currentPage+=1;var n=t(R)(this,mt,Bt).call(this,this.currentPage);if(n.classList.toggle("paginator__button--current"),t(R)(this,kt,It).call(this,n))break;Ht(n,t(I)(this,lt))||t(R)(this,yt,Nt).call(this,-1,t(I)(this,at));break;default:if(this.currentPage===e)return;t(R)(this,mt,Bt).call(this,this.currentPage).classList.toggle("paginator__button--current"),this.currentPage=+e,t(R)(this,mt,Bt).call(this,this.currentPage).classList.toggle("paginator__button--current"),1===this.currentPage?(t(R)(this,St,qt).call(this,"prev"),t(R)(this,xt,Dt).call(this,"next")):this.currentPage===t(I)(this,ut)?(t(R)(this,St,qt).call(this,"next"),t(R)(this,xt,Dt).call(this,"prev")):(t(R)(this,xt,Dt).call(this,"next"),t(R)(this,xt,Dt).call(this,"prev")),1===this.currentPage&&0!==t(I)(this,nt)&&t(R)(this,yt,Nt).call(this,1,t(I)(this,nt)-2),this.currentPage===t(I)(this,ut)&&0!==t(I)(this,nt)&&t(R)(this,yt,Nt).call(this,-1,t(I)(this,ut)-t(I)(this,tt)-t(I)(this,nt)),t(R)(this,_t,Et).call(this,this.currentPage)&&(this.currentPage===t(I)(this,nt)?t(R)(this,yt,Nt).call(this,1,2):t(R)(this,yt,Nt).call(this,-1,2))}this.onClick&&this.onClick(this.currentPage)}function Bt(e){return t(I)(this,ct).querySelector("[data-page='".concat(e,"']"))}function Ct(){var e=t(I)(this,ut)>2?t(I)(this,tt)*t(I)(this,pt)+(t(I)(this,tt)-1)*t(I)(this,vt):0;t(I)(this,lt).style.width="".concat(e,"px")}function Nt(e,a){a=e<0?t(I)(this,nt)+a+t(I)(this,tt)>t(I)(this,ut)?t(I)(this,ut)-(t(I)(this,nt)+a+t(I)(this,tt)):a:t(I)(this,nt)-a<2?1:a,t(H)(this,ft,t(I)(this,ft)+e*(t(I)(this,pt)*a+t(I)(this,vt)*a)),t(I)(this,ot).style.left="".concat(t(I)(this,ft),"px"),t(R)(this,Mt,Ot).call(this,e,a)}function It(e){var a=e.dataset.page;return!(["prev","1","".concat(t(I)(this,ut)),"next"].indexOf(a)<0)}function Et(e){return 2!==e&&e!==t(I)(this,ut)-1&&(e===t(I)(this,nt)||e===t(I)(this,nt)+t(I)(this,tt)-1||void 0)}function Ot(e,a){var n=t(I)(this,nt),i=t(R)(this,mt,Bt).call(this,n);i.innerHTML=i.dataset.page,(i=t(R)(this,mt,Bt).call(this,n+t(I)(this,tt)-1)).innerHTML=i.dataset.page,t(H)(this,nt,t(I)(this,nt)+a*-e),t(R)(this,_t,Et).call(this,t(I)(this,nt))&&((i=t(R)(this,mt,Bt).call(this,t(I)(this,nt))).innerHTML="..."),t(R)(this,_t,Et).call(this,t(I)(this,nt)+t(I)(this,tt)-1)&&((i=t(R)(this,mt,Bt).call(this,t(I)(this,nt)+t(I)(this,tt)-1)).innerHTML="...")}function qt(e){var a=t(R)(this,mt,Bt).call(this,e);a&&(a.disabled=!0)}function Dt(e){var a=t(R)(this,mt,Bt).call(this,e);a&&(a.disabled=!1)}function jt(){if(t(I)(this,ut)>2){if(t(H)(this,lt,document.querySelector(t(I)(this,rt))),t(H)(this,ot,document.querySelector(t(I)(this,st))),!t(I)(this,lt))return void console.error("Selector ".concat(t(I)(this,rt)," not found"));t(R)(this,bt,Ct).call(this),this.currentPage>this.buttons[t(I)(this,tt)]&&this.currentPage<t(I)(this,ut)&&t(R)(this,yt,Nt).call(this,-t(I)(this,at),this.currentPage-this.buttons[t(I)(this,tt)]+t(I)(this,at)-1)}1===this.currentPage&&t(R)(this,St,qt).call(this,"prev"),this.currentPage===t(I)(this,ut)&&t(R)(this,St,qt).call(this,"next")}function Ft(){var e=t(I)(this,gt);if(e){var a=e[(0,k.getMedia)()-1];for(var n in a)switch(n){case"maxCenterButtonsCount":t(H)(this,$,a[n]);break;case"buttonWidth":t(H)(this,pt,a[n]);break;case"scrollCount":t(H)(this,at,a[n]);break;case"margin":t(H)(this,vt,a[n])}}}function Ht(t,e){var a=t.getBoundingClientRect(),n=e.getBoundingClientRect();return!(Math.floor(a.right)>Math.floor(n.right)||Math.floor(a.left)<Math.floor(n.left))}r=i("bpxeT"),N=i("8MBJY"),z=i("a2hTj"),Q=i("8nrFW"),s=i("2TvXO"),c=i("4P4j1"),k=i("1RLhk");var Ut=new WeakMap,Yt=new WeakMap,At=new WeakMap,Rt=new WeakMap,Jt=new WeakMap,Kt=new WeakMap,zt=new WeakMap,Xt=function(){"use strict";function e(){t(N)(this,e),t(D)(this,Ut,{writable:!0,value:[]}),t(D)(this,Yt,{writable:!0,value:0}),t(D)(this,At,{writable:!0,value:1}),t(D)(this,Rt,{writable:!0,value:""}),t(D)(this,Jt,{writable:!0,value:""}),t(D)(this,Kt,{writable:!0,value:""}),t(D)(this,zt,{writable:!0,value:0})}return t(z)(e,[{key:"getMostPopularNews",value:function(){var e=this;return t(r)(t(s).mark((function a(){var n,i,r;return t(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,c.mostPopularNews2)();case 2:"OK"===(n=a.sent).status?(t(H)(e,Ut,[]),r=n.results.map((function(t,e){var a=t.uri,n=t.url,i=t.section,r=t.nytdsection,s=t.published_date,c=t.updated,l=t.abstract,o=t.title,u=t.media,h=(t.multimedia,{uri:a,url:n,sectionname:i,section:r,newsdate:(0,k.formatDate)(c||s),snippet:l,title:o,isfavorite:!1,isread:!1});return null===u||0===u.length?h.image="":h.image=u[0]["media-metadata"][2].url,h})),(i=t(I)(e,Ut)).push.apply(i,t(Q)(r)),t(H)(e,Yt,n.num_results)):console.error("Failed to get popular news (статус-".concat(n.status,")")),t(H)(e,At,1);case 5:case"end":return a.stop()}}),a)})))()}},{key:"getNewsByCategory",value:function(e,a,n){var i=this;return t(r)(t(s).mark((function r(){var l,o,u;return t(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,c.getArticleByCategory2)(e,a,n);case 3:"OK"===(l=r.sent).status&&(u=l.results.map((function(t,a){var n=t.uri,i=t.url,r=t.section,s=t.published_date,c=t.updated_date,l=t.abstract,o=t.title,u=t.multimedia,h={uri:n,url:i,sectionname:r,section:e,newsdate:(0,k.formatDate)(s||c),snippet:l,title:o,isfavorite:!1,isread:!1};if(null===u||0===u.length)h.image="";else{["mediumThreeByTwo440","mediumThreeByTwo210","Normal"].forEach((function(t){var e=u.find((function(e){return e.format===t}));void 0===h.image&&void 0!==e&&(h.image=e.url)}))}return h})),0===a&&t(H)(i,Ut,[]),(o=t(I)(i,Ut)).push.apply(o,t(Q)(u)),t(H)(i,Yt,t(I)(i,Ut).length),t(H)(i,At,2),t(H)(i,Rt,e)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Failed to get news by category ".concat(e," offset=").concat(a," limit=").concat(n," with ").concat(r.t0));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},{key:"getNewsBySearch",value:function(e,a,n){var i=this;return t(r)(t(s).mark((function r(){var l,o,u;return t(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,c.getSearchArticles2)(e,a,n);case 3:"OK"===(l=r.sent).status&&(u=l.results.map((function(t,e){var a,n=t.uri,i=t.web_url,r=t.section_name,s=t.pub_date,c=t.abstract,l=t.headline,o=t.multimedia,u={uri:n,url:i,sectionname:r,section:r,newsdate:(0,k.formatDate)(s),snippet:c,title:null!==(a=l.main)&&void 0!==a?a:"",isfavorite:!1,isread:!1};return null===o||0===o.length?u.image="":u.image="https://www.nytimes.com/"+o[0].url,u})),0===a&&t(H)(i,Ut,[]),(o=t(I)(i,Ut)).push.apply(o,t(Q)(u)),t(H)(i,Yt,l.num_results),t(H)(i,At,3),t(H)(i,Kt,e),t(H)(i,Rt,""),t(H)(i,zt,a),t(H)(i,Jt,"")),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Failed to get news by query ".concat(e," page=").concat(a," date=").concat(n," with ").concat(r.t0));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},{key:"getData",value:function(e,a){var n=this;return t(r)(t(s).mark((function i(){var r,c,l,o;return t(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=[],!(e+a<=t(I)(n,Ut).length||e+a>t(I)(n,Ut).length&&t(I)(n,Ut).length===n.getTotalNews())){i.next=5;break}c=""!==t(I)(n,Jt)?t(I)(n,Ut).filter((function(e){return e.newsdate===t(I)(n,Jt)})):t(I)(n,Ut),r=c.slice(e,e+a),i.next=17;break;case 5:if(2!==t(I)(n,At)){i.next=13;break}return l=n.getDataLength(),o=(0,k.calculateLimit)(e,l),i.next=10,n.getNewsByCategory(t(I)(n,Rt),l,o);case 10:r=t(I)(n,Ut).slice(e,e+a),i.next=17;break;case 13:if(3!==t(I)(n,At)){i.next=17;break}return i.next=16,n.getNewsBySearch(t(I)(n,Kt),t(I)(n,zt)+1,t(I)(n,Jt));case 16:r=t(I)(n,Ut).slice(e,e+a);case 17:return i.abrupt("return",r);case 18:case"end":return i.stop()}}),i)})))()}},{key:"getTotalNews",value:function(){var e=0;switch(t(I)(this,At)){case 1:var a=this;e=""!==t(I)(this,Jt)?t(I)(this,Ut).filter((function(e){return e.newsdate===t(I)(a,Jt)})).length:t(I)(this,Ut).length;break;case 2:var n=this;e=""!==t(I)(this,Jt)?t(I)(this,Ut).filter((function(e){return e.newsdate===t(I)(n,Jt)})).length:t(I)(this,Ut).length;break;case 3:var i=this;e=""!==t(I)(this,Jt)?t(I)(this,Ut).filter((function(e){return e.newsdate===t(I)(i,Jt)})).length:10}return e}},{key:"getDataLength",value:function(){return t(I)(this,Ut).length}},{key:"setFilter",value:function(e){t(H)(this,Jt,e)}}]),e}(),Qt=(r=i("bpxeT"),N=i("8MBJY"),z=i("a2hTj"),s=i("2TvXO"),i("dOFS2")),Vt=(k=i("1RLhk"),i("abKF4")),Zt=new WeakMap,Gt=new WeakMap,$t=new WeakSet,te=new WeakSet,ee=function(){"use strict";function e(){t(N)(this,e),t(J)(this,$t),t(J)(this,te),t(D)(this,Zt,{writable:!0,value:null}),t(D)(this,Gt,{writable:!0,value:[1,2,3]}),t(H)(this,Zt,document.querySelector(".list-news-card"))}return t(z)(e,[{key:"showPage",value:function(e,a,n){var i=this;return t(r)(t(s).mark((function r(){var c,l;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=(0,k.getPageStartIndex)(e,a),t.next=3,n.getData(c,a);case 3:return l=t.sent,t.next=6,i.render(l);case 6:case"end":return t.stop()}}),r)})))()}},{key:"render",value:function(e){var a=this;return t(r)(t(s).mark((function n(){var i,r;return t(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{i=e.map((function(t,e){return(0,Qt.createMarkup2)(t)})),i=t(R)(a,te,ne).call(a,i),r=i.join(""),t(R)(a,$t,ae).call(a,r),(0,Vt.geolocateUpdate)()}catch(t){console.error(t)}case 1:case"end":return n.stop()}}),n)})))()}}]),e}();function ae(e){null!==t(I)(this,Zt)&&(t(I)(this,Zt).innerHTML=e)}function ne(e){var a=t(I)(this,Gt)[(0,k.getMedia)()-1]-1;return e.splice(a,0,'<li class="list-news-card__item weather"></li>'),e}N=i("8MBJY"),z=i("a2hTj");var ie=new WeakMap,re=function(){"use strict";function e(){t(N)(this,e),t(D)(this,ie,{writable:!0,value:void 0}),t(H)(this,ie,document.createElement("div")),t(I)(this,ie).classList.add("spinner-wrap"),t(I)(this,ie).classList.add("spinner-invisible"),t(I)(this,ie).insertAdjacentHTML("afterbegin",'<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'),document.body.append(t(I)(this,ie))}return t(z)(e,[{key:"showSpinner",value:function(){t(I)(this,ie).classList.remove("spinner-invisible")}},{key:"hideSpinner",value:function(){t(I)(this,ie).classList.add("spinner-invisible")}}]),e}(),se=(k=i("1RLhk"),new WeakMap),ce=new WeakMap,le=new WeakMap,oe=new WeakMap,ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap,fe=new WeakMap,ve=new WeakMap,ge=new WeakMap,we=new WeakMap,me=new WeakSet,be=new WeakSet,ye=new WeakSet,ke=new WeakSet,_e=new WeakSet,Me=new WeakSet,Se=new WeakSet;function xe(e){var a=e.categorySelector,n=e.searchSelector,i=e.calendarSelector;t(H)(this,ce,a),t(H)(this,le,document.querySelector(a)),t(I)(this,le)?(t(I)(this,le).addEventListener("click",t(R)(this,be,Le).bind(this)),t(H)(this,oe,n),t(H)(this,ue,document.querySelector(n)),t(I)(this,ue)?(t(I)(this,ue).addEventListener("submit",t(R)(this,ye,We).bind(this)),t(H)(this,pe,i),t(H)(this,fe,document.querySelector(i)),t(I)(this,fe)?t(I)(this,fe).addEventListener("setdate",t(R)(this,ke,Be).bind(this)):console.error("Calendar element ".concat(i," not found"))):console.error("Search element ".concat(n," not found"))):console.error("Category element ".concat(a," not found"))}function Le(t){return Pe.apply(this,arguments)}function Pe(){return(Pe=t(r)(t(s).mark((function e(a){var n,i,r,c;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=V[(0,k.getMedia)()-1],t(H)(this,we,1),i=a.target,(r=i.closest("button"))&&"BUTTON"===r.nodeName&&(i=r),"BUTTON"===i.nodeName){e.next=8;break}return e.abrupt("return");case 8:if(!("section"in i.dataset)){e.next=17;break}return c=i.dataset.section,t(I)(this,ve).showSpinner(),e.next=13,t(I)(this,se).getNewsByCategory(c,0,500);case 13:return t(I)(this,he).reCreate({itemsPerPage:n,totalItems:t(I)(this,se).getDataLength(),currentPage:t(I)(this,we)},G),e.next=16,t(I)(this,de).showPage(1,n,t(I)(this,se));case 16:t(I)(this,ve).hideSpinner();case 17:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function We(t){return Te.apply(this,arguments)}function Te(){return(Te=t(r)(t(s).mark((function e(a){var n,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=V[(0,k.getMedia)()-1],t(H)(this,we,1),""===(i=a.target.elements[0].value)){e.next=12;break}return t(I)(this,ve).showSpinner(),e.next=8,t(I)(this,se).getNewsBySearch(i,0,"");case 8:return t(I)(this,he).reCreate({itemsPerPage:n,totalItems:t(I)(this,se).getTotalNews(),currentPage:t(I)(this,we)},G),e.next=11,t(I)(this,de).showPage(1,n,t(I)(this,se));case 11:t(I)(this,ve).hideSpinner();case 12:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Be(t){return Ce.apply(this,arguments)}function Ce(){return(Ce=t(r)(t(s).mark((function e(a){var n,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.value,i=V[(0,k.getMedia)()-1],t(H)(this,we,1),t(I)(this,se).setFilter(n),t(I)(this,he).reCreate({itemsPerPage:i,totalItems:t(I)(this,se).getTotalNews(),currentPage:t(I)(this,we)},G),e.next=7,t(I)(this,de).showPage(1,i,t(I)(this,se));case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ne(t){return Ie.apply(this,arguments)}function Ie(){return(Ie=t(r)(t(s).mark((function e(a){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V[(0,k.getMedia)()-1],t(H)(this,we,a),t(I)(this,ve).showSpinner(),e.next=5,t(I)(this,de).showPage(a,n,t(I)(this,se));case 5:t(I)(this,ve).hideSpinner(),window.scrollTo({top:0,left:0,behavior:"smooth"});case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ee(){return Oe.apply(this,arguments)}function Oe(){return(Oe=t(r)(t(s).mark((function e(){var a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=V[(0,k.getMedia)()-1],t(I)(this,ve).showSpinner(),e.next=4,t(I)(this,se).getMostPopularNews();case 4:return window.addEventListener("resize",t(R)(this,Se,qe).bind(this)),t(H)(this,he,new Wt({itemsPerPage:a,totalItems:t(I)(this,se).getTotalNews(),currentPage:1},G)),t(I)(this,he).onClick=t(R)(this,_e,Ne).bind(this),e.next=9,t(I)(this,de).showPage(1,a,t(I)(this,se));case 9:t(I)(this,ve).hideSpinner();case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function qe(){return De.apply(this,arguments)}function De(){return(De=t(r)(t(s).mark((function e(){var a,n,i,r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,k.getMedia)(),t(I)(this,ge)===a){e.next=10;break}return n=V[t(I)(this,ge)-1],i=(0,k.getPageStartIndex)(t(I)(this,we),n),n=V[a-1],r=Math.floor(i/n)+1,e.next=8,t(I)(this,de).showPage(r,n,t(I)(this,se));case 8:t(I)(this,he).reCreate({currentPage:r,itemsPerPage:n,totalItems:t(I)(this,se).getTotalNews()},G),t(H)(this,ge,a);case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}new function e(a){"use strict";var n=a.categorySelector,i=a.searchSelector,r=a.calendarSelector;t(N)(this,e),t(J)(this,me),t(J)(this,be),t(J)(this,ye),t(J)(this,ke),t(J)(this,_e),t(J)(this,Me),t(J)(this,Se),t(D)(this,se,{writable:!0,value:null}),t(D)(this,ce,{writable:!0,value:""}),t(D)(this,le,{writable:!0,value:null}),t(D)(this,oe,{writable:!0,value:""}),t(D)(this,ue,{writable:!0,value:null}),t(D)(this,he,{writable:!0,value:null}),t(D)(this,de,{writable:!0,value:null}),t(D)(this,pe,{writable:!0,value:""}),t(D)(this,fe,{writable:!0,value:null}),t(D)(this,ve,{writable:!0,value:null}),t(D)(this,ge,{writable:!0,value:(0,k.getMedia)()}),t(D)(this,we,{writable:!0,value:1}),t(R)(this,me,xe).call(this,{categorySelector:n,searchSelector:i,calendarSelector:r}),t(H)(this,se,new Xt),t(H)(this,de,new ee),t(H)(this,ve,new re),t(R)(this,Me,Ee).call(this)}({categorySelector:".categories_ul",searchSelector:".header__search-form",calendarSelector:".calendar__input"});new(0,y.default)("team-9-project")}();
//# sourceMappingURL=index.59bc403f.js.map
