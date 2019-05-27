//find elements
var	showPrevBtn = document.getElementById('show-prev')
var	showNextBtn = document.getElementById('show-next')
var	slideImage = document.getElementById('slide-img')


//реакция на события
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);


//Добавление изображений
var imagesUrls = [];
imagesUrls.push('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98569646/original/25036e2dc82be0fe9ec6c5c192830cdbd15868fd/design-your-websites-css.jpg');
imagesUrls.push('https://smartprogress.do/uploadImages/001281756.jpg');
imagesUrls.push('http://www.inwizards.com/blog/wp-content/uploads/2017/09/nodejs_logo_green.jpg');
imagesUrls.push('https://res.cloudinary.com/practicaldev/image/fetch/s--bSk4L30z--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/7u4fjx2suyjmcshu0khg.png');
imagesUrls.push('https://i.ytimg.com/vi/MedNz6RHph8/maxresdefault.jpg');



var currentImageIndex = 0;

slideImage.src=imagesUrls[currentImageIndex];




function onShowPrevBtnClick(){
	currentImageIndex--;

	if (currentImageIndex === 0) {
		showPrevBtn.disabled = true;
	}

	slideImage.src=imagesUrls[currentImageIndex];

	//Отменяем выключение Next при нажатии
	showNextBtn.disabled = false;

}

function onShowNextBtnClick(){

	currentImageIndex++;
	

	//выключить кнопку если необходимо
	if (currentImageIndex === imagesUrls.length-1) {
		showNextBtn.disabled = true;
	}

	slideImage.src=imagesUrls[currentImageIndex];

	//Отменяем выключение при Prev при нажатии
	showPrevBtn.disabled = false;
	
}