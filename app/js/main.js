$(function () {
	//-------------activate-wow.js-------
	new WOW().init();

	//-------------slick-slider----------
	$(document).ready(function () {
		$('.slider').slick({
			autoplaySpeed: 3000,
			prevArrow: '<div class="icon-arrow-left slider-btn"></div>',
			nextArrow: 	'<div class="icon-arrow-right slider-btn"></div>'
		});
	});

	let header = document.querySelector(".header");
	let headerNav = document.querySelector(".header-nav");
	let burgerButton = document.querySelector(".header-links__item_burger");
	document.addEventListener("scroll", parallaxScroll);
	burgerButton.addEventListener('click', burgerBtn);

	function burgerBtn() {
		burgerButton.classList.toggle("change");
		headerNav.classList.toggle("active");
		header.classList.toggle("blackout")
		document.body.classList.toggle("noScroll");
	}

	function parallaxScroll() {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
		let sectionRight = document.querySelector(".team");
		let sectionLeft = document.querySelector(".advantages");

		if (scrolled > 830 && scrolled < 1850 && window.innerWidth > 1024) {

			sectionRight.style.transform = `translateY(${+90 - scrolled * 0.08}px)`;
			sectionLeft.style.transform = `translateY(${-90 + scrolled * 0.08}px)`;
		}
	}
});