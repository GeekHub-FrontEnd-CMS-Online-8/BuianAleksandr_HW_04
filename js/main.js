"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

document.getElementById("accept-cooki").addEventListener("click", function () {
  document.getElementsByClassName("popUpCooki")[0].style.display = "none";
});
document.getElementById("show-nav").addEventListener("click", function () {
  var element = document.getElementById("main-nav");
  toggliCSS(element);
});
var allClose = document.getElementsByClassName('close');
console.log(_typeof(allClose));
Array.from(allClose).forEach(function (element) {
  element.addEventListener('click', function () {
    this.parentNode.closest(".modal").style.display = 'none';
  });
});

function toggliCSS(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}