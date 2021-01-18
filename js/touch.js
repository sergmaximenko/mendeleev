var ldelay;
var betw={};
document.addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
ldelay=new Date();
betw.x=event.changedTouches[0].pageX;
betw.y=event.changedTouches[0].pageY;
}, false);
/*Ловим отпускание пальца*/
mendeleev.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	one.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
}, false);

coctails.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	two.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
}, false);

music.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	four.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
}, false);

events.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.add('opacity0')
	}
	logo1.classList.add('opacity0');
	three.classList.remove('display0');
	menu.classList.add('scroll');
	menu.classList.remove('scroll2');
}
}, false);

arrow.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){one.classList.add('display0');}, 700);
}
}, false);

logo.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
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
}, false);

two_arrow.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
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
}, false);

two_logo.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
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
}, false);

four_arrow.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){four.classList.add('display0');}, 700);
}
}, false);

four_logo.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
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
}, false);

three_arrow.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
	for(let i=0; i<menuCol.length; i++){
		menuCol[i].classList.remove('opacity0')
	}
	logo1.classList.remove('opacity0');
	menu.classList.remove('display0');
	menu.classList.remove('scroll');
	menu.classList.add('scroll2');
	setTimeout(function(){three.classList.add('display0');}, 700);
}
}, false);

three_logo.addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>500){
/*Здесь ваш код*/
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
}, false);