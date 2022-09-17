function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=t.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var n=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){s[e]=n},t.parcelRequire3a11=i),i.register("27Lyk",(function(n,t){var r,s;e(n.exports,"register",(()=>r),(e=>r=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},s=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.4a43f0bd.js","eyyUD":"icons.c14567a0.svg"}'));const a=async function(e,n){try{const r=n?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}):fetch(e),s=await Promise.race([r,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),i=await s.json();if(!s.ok)throw new Error(`${i.message} (${s.status})`);return i}catch(e){throw e}var t},o={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},c=function(e){const{recipe:n}=e.data;return{id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients,...n.key&&{key:n.key}}},d=function(e=o.search.page){o.search.page=e;const n=(e-1)*o.search.resultsPerPage,t=e*o.search.resultsPerPage;return o.search.results.slice(n,t)},l=function(){localStorage.setItem("bookmarks",JSON.stringify(o.bookmarks))},u=function(e){o.bookmarks.push(e),e.id===o.recipe.id&&(o.recipe.bookmarked=!0),l()};!function(){const e=localStorage.getItem("bookmarks");e&&(o.bookmarks=JSON.parse(e))}();var p;p=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class g{_data;render(e,n=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();if(!n)return t;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const n=this._generateMarkup(),t=document.createRange().createContextualFragment(n),r=Array.from(t.querySelectorAll("*")),s=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,n)=>{const t=s[n];e.isEqualNode(t)||""===e.firstChild?.nodeValue.trim()||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach((e=>t.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n              <svg>\n                <use href="${n(p)}#icon-loader"></use>\n              </svg>\n            </div>\n      `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n    <div class="error">\n              <div>\n                <svg>\n                  <use href="${n(p)}#icon-alert-triangle"></use>\n                </svg>\n              </div>\n              <p>${e}</p>\n            </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n    <div class="message">\n              <div>\n                <svg>\n                  <use href="${n(p)}#icon-smile"></use>\n                </svg>\n              </div>\n              <p>${e}</p>\n            </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var h;function _(e,n,t,r,s){const i=[2,3,5];if(!0===s)for(let n=3;n*n<=e;n+=2)e%n==0&&i.push(n);let a=0,o=1,c=e,d=n;for(;a<=i.length;)c%i[a]==0&&d%i[a]==0?(o*=i[a],c/=i[a],d/=i[a]):a++;return function(e,n,t,r){return 1===e&&1===n?`${t=`${r}${(parseInt(t)+1).toString()}`}`:0===n?`${r}${t}`:"0"==t?`${r}${n}/${e}`:`${r}${t} ${n}/${e}`}(d,c,t,r)}h=function(e){let n;if(e<0?(e=Math.abs(e),n="-"):n="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${n}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${n}${e}`;if(e<1e-6)return"0";const t=e.toString(),r=t.split(".");let s,i=r[0];if("0"==s&&"0"!==i)return i;if("0"==s&&"0"==i)return"0";if(s=t.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==s&&"0"!==i)return`${i} 99/100`;if("99"==s&&"0"==i)return"99/100";if(1-parseFloat(`.${s}`)<.0011&&(s="999"),null==s)return i;let a=s.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&s.length>2){let e=a[0].split("").reverse().join(""),t=a[1].split("").reverse().join("");if(t.length>1){let e=t.split(""),n=1;for(let t=0;t<e.length;t++)n/=e[0]/e[t];1===n&&(t=e[0])}return t.length>1&&t.length%2==0&&(t=parseInt(t.slice(0,t.length/2),10)-parseInt(t.slice(t.length/2,t.length),10)==0?t.slice(0,t.length/2):t),function(e,n,t,r,s){const i=!0,a=e.length-t.length>=1?e.length-t.length:1,o=Math.pow(10,a),c=parseFloat(`0.${e}`),d=Math.pow(10,n.length),l=Math.round((c*d-c)*Math.pow(10,a));return _(l,(d-1)*o,r,s,i)}(s,t,e,i,n)}return function(e,n,t){const r=!1,s=parseInt(e,10),i=Math.pow(10,e.length);return _(s,i,n,t,r)}(s,i,n)};var f=new class extends g{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((n=>window.addEventListener(n,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--update-servings");if(!t)return;const{updateTo:r}=t.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(n){n.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n    ${n(p)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(p)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(p)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(p)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}" >\n          <svg>\n            <use href="${n(p)}#icon-user"></use>\n          </svg>\n        </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(p)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n            </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This this._data.was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(p)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}_generateMarkupIngredient(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(p)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?n(h)(e.quantity).toString():""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>\n      `}};var v=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(n){n.preventDefault(),e()}))}};var m=new class extends g{_parentElement="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n\n        <div class="preview__user-generated ${this._data.key?"":"hidden"}" >\n          <svg>\n          <use href="${n(p)}#icon-user"></use>\n          </svg>\n        </div>\n      </div>\n    </a>\n  </li>\n    `}};var b=new class extends g{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";_message="";_generateMarkup(){return console.log(this._data),this._data.map((e=>m.render(e,!1))).join("")}};var k=new class extends g{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--inline");if(!t)return;const r=+t.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n      <button data-goto="${e+1}"class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(p)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n      `:e===t&&t>1?`\n      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(p)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n              <svg class="search__icon">\n                <use href="${n(p)}#icon-arrow-left"></use>\n              </svg>\n              <span>Page ${e-1}</span>\n            </button>\n            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(p)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n        `:""}};var y=new class extends g{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :) !";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map((e=>m.render(e,!1))).join("")}};var w=new class extends g{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault();const t=[...new FormData(this)],r=Object.fromEntries(t);console.log(r),e(r)}))}_generateMarkup(){}};const $=async function(){try{const e=window.location.hash.slice(1);if(!e)return;f.renderSpinner(),b.update(d()),y.update(o.bookmarks),await async function(e){try{const n=await a(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=f384c7d6-ae6b-41eb-9bd0-c5f1ee8d6d28`);o.recipe=c(n),o.bookmarks.some((n=>n.id===e))?o.recipe.bookmarked=!0:o.recipe.bookmarked=!1,console.log(o.recipe)}catch(e){throw console.error(`${e}!!!`),e}}(e),f.render(o.recipe)}catch(e){f.renderError()}},E=async function(){try{b.renderSpinner();const e=v.getQuery();if(!e)return;await async function(e){try{o.search.query=e;const n=await a(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=f384c7d6-ae6b-41eb-9bd0-c5f1ee8d6d28`);console.log(n),o.search.results=n.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),o.search.page=1}catch(e){throw console.error(`${e}!!!`),e}}(e),b.render(d()),k.render(o.search)}catch(e){console.log(e)}},S=function(e){b.render(d(e)),k.render(o.search)},M=function(e){!function(e){o.recipe.ingredients.forEach((n=>{n.quantity=n.quantity*e/o.recipe.servings})),o.recipe.servings=e}(e),f.update(o.recipe)},H=function(){o.recipe.bookmarked?function(e){const n=o.bookmarks.findIndex((n=>n.id===e));o.bookmarks.splice(n,1),e===o.recipe.id&&(o.recipe.bookmarked=!1),l()}(o.recipe.id):u(o.recipe),f.update(o.recipe),y.render(o.bookmarks)},q=function(){y.render(o.bookmarks)},x=async function(e){try{w.renderSpinner(),await async function(e){try{const n=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const n=e[1].split(",").map((e=>e.trim()));if(3!==n.length)throw new Error("Wrong ingredient format! Please use the correct format :)");const[t,r,s]=n;return{quantity:t?+t:null,unit:r,description:s}})),t={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:n},r=await a("https://forkify-api.herokuapp.com/api/v2/recipes/?key=f384c7d6-ae6b-41eb-9bd0-c5f1ee8d6d28",t);o.recipe=c(r),u(o.recipe)}catch(e){throw e}}(e),console.log(o.recipe),f.render(o.recipe),w.renderMessage(),y.render(o.bookmarks),window.history.pushState(null,"",`#${o.recipe.id}`),setTimeout((function(){w.toggleWindow()}),2500)}catch(e){console.error(e),w.renderError(e.message)}};y.addHandlerRender(q),f.addHandlerRender($),f.addHandlerUpdateServings(M),f.addHandlerAddBookmark(H),v.addHandlerSearch(E),k.addHandlerClick(S),w.addHandlerUpload(x);
//# sourceMappingURL=index.4a43f0bd.js.map
