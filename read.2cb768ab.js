!function(){function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=r.parcelRequirebcdd;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},r.parcelRequirebcdd=i),i.register("iE7OH",(function(n,r){var t,a;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)i[n[r]]=e[n[r]]},a=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,r){var t;e(n.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var n=a[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=n),n}})),i("iE7OH").register(JSON.parse('{"3hZM1":"read.2cb768ab.js","410VS":"icons.640475a3.svg","dAuHR":"read.15407962.js","cDAuR":"read.5d7f9396.js"}'));var l,o=i("iB7CT");l=i("aNJCr").getBundleURL("3hZM1")+i("iE7OH").resolve("410VS"),i("8tk4c"),i("4At6I");var c=i("dOFS2"),s=i("1RLhk"),u=new(0,o.default)("team-9-project").getRead(),d=document.querySelector(".read-gallery"),f=(0,s.normalizeImportFileName)(n(l));function p(e){var n=new Date(e),r=n.getDate(),t=n.getMonth()+1,a=n.getFullYear();return"".concat(r,"/").concat(t,"/").concat(a)}var v=function(e){var n=new Map,r=!0,t=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var o=i.value,c=p(o.readdate);if(n.has(c))n.get(c).push(o);else n.set(c,[o])}}catch(e){t=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(t)throw a}}return n}(u);function y(e,n){var r=f,t=f,a="",i=!0,l=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var d=s.value;a+=(0,c.createMarkup)({abstract:d.snippet,title:d.title,updated:p(d.readdate||d.newsdate),nytdsection:d.sectionname||d.section,url:d.url,media:d.image,uri:d.uri})}}catch(e){l=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(l)throw o}}return'<li class="read-gallery__item">\n        <div class="date-span">\n        '.concat(e,'   \n        <span class="read-gallery__iconswrap" data-opened="true">\n        <svg class="read-gallery__iconup" width="9" height="14">\n            <use href="').concat(r,'#icon-up">\n            </use>\n        </svg>\n        <svg class="read-gallery__icondown" width="9" height="14">\n            <use href="').concat(t,'#icon-down">\n            </use>\n        </svg>\n        </span>\n        </div>\n        <hr class="read-gallery__divider">\n        <ul class="news-list">\n            ').concat(a,"\n        </ul>\n    </li>")}function h(e){e.preventDefault();var n=e.currentTarget;"true"===n.dataset.opened?(n.children[0].style.display="none",n.children[1].style.display="inline",n.dataset.opened="false",n.parentElement.parentElement.children[2].style.display="none"):(n.children[0].style.display="inline",n.children[1].style.display="none",n.dataset.opened="true",n.parentElement.parentElement.children[2].style.removeProperty("display"))}0===u.length?d.innerHTML='<h2 class="rip-title">Sorry, we haven\'t found any read news.\n    </h2>\n    <div class="rip-container container">\n    </div>':d.innerHTML=function(e){var n='<ul class="read-gallery__list container">',r=!0,t=!1,a=void 0;try{for(var i,l=e.keys()[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var o=i.value,c=y(o,e.get(o));n+=c}}catch(e){t=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(t)throw a}}return n+="</ul>"}(v),document.querySelector(".news-list").addEventListener("click",c.onBtnClick);var g=document.getElementsByClassName("read-gallery__iconswrap");Array.from(g).map((function(e){return e.addEventListener("click",h)}))}();
//# sourceMappingURL=read.2cb768ab.js.map