var hamburger = document.querySelector(".hamburger");
var ul = document.querySelector(".menu");

hamburger.onclick = function(e){
	ul.classList.toggle("menuop");
}