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


let menu = document.querySelector('.menu');
setTimeout(function(){menu.scrollIntoView({behavior: "smooth"});}, 2500);


let cont = document.querySelector('.cont');
let mendeleev = document.querySelector('.mendeleev');

mendeleev.onclick = function(){
	cont.classList.remove('display0');
	cont.scrollIntoView({behavior: "smooth"});
}

let logo = document.querySelector('.logo_b');
logo.onclick = function(){
	menu.scrollIntoView({behavior: "smooth"});
}

let arrow = document.getElementById('arrow');
arrow.onclick = function(){
	menu.scrollIntoView({behavior: "smooth"});
}

let loader = document.querySelector('.loader');
setTimeout(function(){loader.classList.add('display0');}, 3100);



