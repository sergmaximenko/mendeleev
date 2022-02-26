let all = document.querySelector('.all');
window.onload=function(){
	if (document.documentElement.clientWidth < document.documentElement.clientHeight){
		all.classList.remove('display0');
		menu.classList.remove('display0');
		return false;
	}
	all.classList.remove('display0');
	(function(){
setTimeout(function(){menu.scrollIntoView({behavior: "smooth"});}, 2500);
setTimeout(function(){menu.classList.remove('display0');}, 2400);
let loader = document.querySelector('.loader');
setTimeout(function(){loader.classList.add('display0');}, 3200);
})()
}