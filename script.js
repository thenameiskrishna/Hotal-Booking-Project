var swiper = new Swiper(".home-slider",{
	grabCursor:true,
	loop:true,
	centeredSlider:true,
	autoplay:{
		delay:7500,
		disableOnInteraction:false,
	},
	navigation:{
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let accordions = document.querySelectorAll('.faqs .row .content .box');
accordions.forEach(acco =>{
	acco.onclick = () =>{
		accordions.forEach(subAcco => {subAcco.classList.remove('active')});
		acco.classList.add('active');
	}
})