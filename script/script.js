$(function () {
	// This code is for the sticky navigation menu

	$(window).scroll(function () {
		if (
			$(window).scrollTop() > 500 &&
			$(window).scrollTop() + $(window).height() <
				$(document).height() - 300
		) {
			$("nav")
				.addClass("sticky")
				.css({ boxShadow: "0 3px 7px rgba(51, 50, 45, 0.536)" });
			$(".scroll-to-top").css({ display: "initial" });
		} else {
			$("nav").removeClass("sticky").css({ boxShadow: "none" });
		}
	});

	// This code is for the scroll to top button
	$(".scroll-to-top").click(function () {
		$(window).scrollTop(0);
		$(this).css({ display: "none" });
	});

	// This code is for the header
	var fadeslides = $("header .promo-item");
	var fadecounter = 0;

	function fadeinfunction() {
		$(fadeslides[fadecounter]).fadeOut(2000);
		if (fadecounter == fadeslides.length - 1) {
			fadecounter = 0;
		} else {
			fadecounter++;
		}
		$(fadeslides[fadecounter]).fadeIn(2000);
	}
	var fadeinterval = setInterval(fadeinfunction, 5000);

	//This code is for the products slider section

	var slide = $(".single-slide");
	var widthofeachSlide = $(".single-slide").width();

	var widthofslidecontainer = widthofeachSlide * slide.length;

	var amountofMovement = widthofeachSlide + widthofeachSlide / 2;

	var numberofpossibleMoves = widthofslidecontainer / amountofMovement;

	var numberofpossibleMovesInteger = Math.trunc(numberofpossibleMoves);

	var UnitnumberofpossibleMoves =
		numberofpossibleMoves / numberofpossibleMovesInteger;

	var progressbarmovement = 100 / [numberofpossibleMoves - 1];

	var counter = 0;

	function theCodesThatEnableSliding() {
		if (
			counter >
			numberofpossibleMovesInteger - UnitnumberofpossibleMoves
		) {
			counter = 0;
		} else {
			counter++;
		}

		slide.animate(
			{
				left: -amountofMovement * UnitnumberofpossibleMoves * counter,
			},
			3000
		);

		$(".progress-bar span").animate({
			left:
				[progressbarmovement * UnitnumberofpossibleMoves * counter] -
				100 +
				"%",
		});
	}

	var codeRepeat;
	function startMyAutomaticSlider() {
		codeRepeat = setInterval(theCodesThatEnableSliding, 7000);
	}

	function stopMyAutomaticSlider() {
		clearInterval(codeRepeat);
	}

	startMyAutomaticSlider();

	$(".slide-container").mouseover(function () {
		stopMyAutomaticSlider();
	});

	$(".slide-container").mouseout(function () {
		startMyAutomaticSlider();
	});
	// Slider codes end

	//This code is for the expandable FAQs section
	var faqTitle = $(".faqs .single-question");

	faqTitle.click(function () {
		$(this).find("p").toggle(800);
		$(this).toggleClass("open-question");
		$(".faqs .single-question p").not($(this).find("p")).hide();
		faqTitle.not($(this)).removeClass("open-question");
	});
	// Expandable FAQs end

	// This code is for the mobile menu

	$(".open-menu").click(function () {
		$(".mobile-menu").css({ display: "inherit" });
		$(".mobile-menu").animate({ right: "0%" }, 1000);
		$("span.blur").fadeIn(1500);
	});
	$(".close-menu").click(function () {
		$(".mobile-menu").animate({ right: "-100%" }, 1000);
		$("span.blur").fadeOut();
		$(".mobile-menu").hide(1000);
	});
});
