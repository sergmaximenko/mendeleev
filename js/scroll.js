let menu = document.querySelector('.menu_wrap');
(function(){
setTimeout(function(){menu.scrollIntoView({behavior: "smooth"});}, 2500);
setTimeout(function(){menu.classList.remove('display0');}, 2400);
let loader = document.querySelector('.loader');
setTimeout(function(){loader.classList.add('display0');}, 3000);
})();

let mendeleev = document.querySelector('.mendeleev');
let one = document.querySelector('.one');
let coctails = document.querySelector('.coctails');
let two = document.querySelector('.two');
let music = document.querySelector('.music');
let four = document.querySelector('.four');

mendeleev.onclick = function(){
	one.classList.remove('display0');
	one.scrollIntoView({behavior: "smooth"});
	setTimeout(function(){menu.classList.add('display0');}, 1000);
	
}
coctails.onclick = function(){
	two.classList.remove('display0');
	two.scrollIntoView({behavior: "smooth"});
	setTimeout(function(){menu.classList.add('display0');}, 1000);
}
music.onclick = function(){
	four.classList.remove('display0');
	four.scrollIntoView({behavior: "smooth"});
	setTimeout(function(){menu.classList.add('display0');}, 1000);
}

let arrow = document.querySelector('.arrow');
let logo = document.querySelector('.logo_b');
let two_arrow = document.querySelector('.two_arrow');
let two_logo = document.querySelector('.two_b_logo');
let four_arrow = document.querySelector('.four_arrow');
let four_logo = document.querySelector('.four_b_logo');
arrow.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	one.classList.add('display0');
}
logo.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	one.classList.add('display0');
}
two_arrow.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	two.classList.add('display0');
}
two_logo.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	two.classList.add('display0');
}
four_arrow.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	four.classList.add('display0');
}
four_logo.onclick = function(){
	menu.classList.remove('display0');
	menu.scrollIntoView({behavior: "smooth"});
	four.classList.add('display0');
}