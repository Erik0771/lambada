"use strict";

new WOW().init();

function burger(x) {
   x.classList.toggle("change");
}

const header = document.getElementById("header");
const logo = document.getElementById("logo");

window.onscroll = function() {
   scrollFunction();
};

function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      logo.style.cssText = `width:100px;`;
      header.style.cssText = `position: fixed; background: rgba(0, 0, 0, 0.6);
      `;
   } else {
      logo.style.cssText = `width:;`;
      header.style.cssText = `position: absolute; background:;`;
   }
}
