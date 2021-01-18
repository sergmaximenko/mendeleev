let img = document.querySelectorAll('#slider div');
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

for(let i=0; i<img.length; i++){
	slider();
}
let timerId = setInterval(slider, 8000);