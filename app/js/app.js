import {Swiper, Parallax, Mousewheel,  Navigation} from 'swiper'
Swiper.use([Parallax, Mousewheel, Navigation])

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop:false,
		speed:2400, 
		parallax: true,
		mousewheel:{
			invert:false,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
		

	})

})
