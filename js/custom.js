jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

    jQuery(".fancybox").fancybox();

    let carousel = jQuery('#carousel_partners');
		
	carousel.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 0,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			479:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			767:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			991:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			1099:{
				items: 1,
				nav: true,
				dots: false,
				mouseDrag: true,
				autoplay: true
			}
		}
	});

	let carousel2 = jQuery('#carousel_partners_2');
		
	carousel2.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 0,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			479:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			767:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			991:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			1099:{
				items: 1,
				nav: true,
				dots: false,
				mouseDrag: true,
				autoplay: true
			}
		}
	});

	let carousel3 = jQuery('#carousel_partners_3');
		
	carousel3.owlCarousel({
		items: 2,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<div class="circle"><img src="./img/main/testimonials/left.png" alt="left"></div>','<div class="circle"><img src="./img/main/testimonials/right.png" alt="right"></div>'],
		dots: false,
		mouseDrag: true,
		margin: 20,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			479:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			767:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			991:{
				items: 2,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			1099:{
				items: 2,
				nav: true,
				dots: false,
				mouseDrag: true,
				autoplay: true
			}
		}
	});
});

