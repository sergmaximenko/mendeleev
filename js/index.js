let img = document.querySelectorAll('#slider img');
cur = 0;

function slider(){
	if(cur == 1){
		img[8].classList.remove('anim');
		img[7].classList.remove('anim');
	}
	for(let i = 0; i < img.length; i++){
		img[i].classList.add('opacity0');
	}
	img[cur].classList.add('anim');
	if(cur>1){
		img[cur-2].classList.remove('anim');
	}
	img[cur].classList.remove('opacity0');
	if(cur+1 == img.length){
		cur = 0;
	}
	else{
		cur++;
	}
};

let timerId = setInterval(slider, 8000);

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

mendeleev.onclick = function(){
	one.classList.remove('display0');
	one.scrollIntoView({behavior: "smooth"});
	setTimeout(function(){menu.classList.add('display0');}, 700);
	
}
coctails.onclick = function(){
	two.classList.remove('display0');
	two.scrollIntoView({behavior: "smooth"});
	setTimeout(function(){menu.classList.add('display0');}, 700);
}

let arrow = document.querySelector('.arrow');
let logo = document.querySelector('.logo_b');
let two_arrow = document.querySelector('.two_arrow');
let two_logo = document.querySelector('.two_b_logo');
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
