var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){n[e]=a},e.parcelRequired7c6=r);var t=r("iM3XI");const l=document.querySelector(".gallery-list"),o=new(0,t.default),s=({title:e,release_date:a,poster_path:n,vote_average:r})=>{const t=n?`https://image.tmdb.org/t/p/w500${n}`:"https://images.prom.ua/211029177_w640_h640_211029177.jpg";const l=a?new Date(a).getFullYear():"No information";const o=r.toFixed(2);return i(e,t,l,o)},i=(e,a,n,r)=>`<li class="gallery-card list">\n        <a href="">\n          <img class='card-img' src="${a}" alt="${e}">\n        </a>\n        <p class="card-title">${e}</p>\n        <p class="card-ganre"></p>\n        <p class="card-release">${n}</p>\n        <p class="card-average">${r}</p>\n        </li>`;(async()=>{const e=await o.fetchTrendMovies();console.log(e),(e=>{const a=e.map((e=>s(e))).join("");l.innerHTML=a})(e)})();
//# sourceMappingURL=index.cfd1109c.js.map