!function(){var e=document.querySelector('[data-action="open-modal"]'),t=document.querySelector('[data-action="close-modal"]'),n=document.querySelector(".js-backdrop");function o(){window.removeEventListener("keydown",c),document.body.classList.remove("show-modal")}function c(e){"Escape"===e.code&&o()}e.addEventListener("click",(function(){window.addEventListener("keydown",c),document.body.classList.add("show-modal")})),t.addEventListener("click",o),n.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}));document.querySelector(".btn_watched");var d=document.querySelector(".change_watch");d.addEventListener("click",(function(e){"add to Watched"==d.textContent?d.textContent="remove from Watched":d.textContent="add to Watched"}));var a=document.querySelector(".btn_queue"),r=document.querySelector(".change_queue");a.addEventListener("click",(function(){"add to queue"==r.textContent?r.textContent="remove from queue":r.textContent="add to queue"}))}();
//# sourceMappingURL=index.cb7cfe49.js.map