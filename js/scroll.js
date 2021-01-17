let menu = document.querySelector('.menu_wrap');
let menuCol = document.querySelectorAll('.menu_column');
let logo1 = document.querySelector('.logo1');

let mendeleev = document.querySelector('.mendeleev');
let one = document.querySelector('.one');
let coctails = document.querySelector('.coctails');
let two = document.querySelector('.two');
let music = document.querySelector('.music');
let four = document.querySelector('.four');
let three = document.querySelector('.three');
let events = document.querySelector('.events');

mendeleev.onclick = function(){
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	one.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
coctails.onclick = function(){
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	two.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
music.onclick = function(){
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	four.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}

events.onclick = function(){
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	three.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}

let arrow = document.querySelector('.arrow');
let logo = document.querySelector('.logo_b');
let two_arrow = document.querySelector('.two_arrow');
let two_logo = document.querySelector('.two_b_logo');
let four_arrow = document.querySelector('.four_arrow');
let four_logo = document.querySelector('.four_b_logo');
let three_arrow = document.querySelector('.three_arrow');
let three_logo = document.querySelector('.three_b_logo');
arrow.onclick = function(){
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){one.classList.add('display0');}, 700);
}
logo.onclick = function(){
	one.scrollIntoView({behavior: "smooth"});
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){one.classList.add('display0');}, 700);
}
two_arrow.onclick = function(){
		menu.classList.remove('display0');
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){two.classList.add('display0');}, 700);
}
two_logo.onclick = function(){
	two.scrollIntoView({behavior: "smooth"});
		for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){two.classList.add('display0');}, 700);
}
four_arrow.onclick = function(){
		for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){four.classList.add('display0');}, 700);
}
four_logo.onclick = function(){
	four.scrollIntoView({behavior: "smooth"});
		for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){four.classList.add('display0');}, 700);
}

three_arrow.onclick = function(){
		for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){three.classList.add('display0');}, 700);
}
three_logo.onclick = function(){
	three.scrollIntoView({behavior: "smooth"});
		for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){three.classList.add('display0');}, 700);
}