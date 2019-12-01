$(function () {
	//-------------activate-wow.js-------
	new WOW().init();

	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	//-------------slick-slider----------
	$(document).ready(function () {
		$('.slider').slick({
			autoplaySpeed: 3000,
			prevArrow: '<div class="icon-arrow-left slider-btn"></div>',
			nextArrow: '<div class="icon-arrow-right slider-btn"></div>'
		});
	});
	//------	
	mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button


	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}



	let header = document.querySelector(".header");
	let headerNav = document.querySelector(".header-nav");
	let burgerButton = document.querySelector(".header-links__item_burger");
	let topScroll = document.querySelector("#myBtn");
	
	document.querySelector(".advantages__img").style.height = `${document.querySelector(".advantages").offsetHeight}px`;

	document.addEventListener("scroll", parallaxScroll);
	window.addEventListener("scroll", scrollFunction);
	burgerButton.addEventListener('click', burgerBtn);
	topScroll.addEventListener("click", topFunction);

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