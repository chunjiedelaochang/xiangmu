$(function (){
	var swiperFirst=new Swiper(".swiper-container-first",{
		autoplay:2000,
		autoplayDisableOnInteraction:false,
		loop:true,
		pagination:".swiper-pagination-first",
	})
	var swiperSecond=new Swiper(".swiper-container-second",{
		autoplay:2000,
		autoplayDisableOnInteraction:false,
		// loop:true,
		pagination:".swiper-pagination-second",
		slidesPerView:3,
		// centeredSlides:true,
	})


	$(".providerDiv").mouseenter(function (){
		$(".providerImgHov",this).css({
			animation: "providerImgHovAni 0.3s linear",
			opacity: 1,
		});
		$(".providerImgOra",this).css({
			opacity: 0,
		});
	}).mouseleave(function (){
		$(".providerImgHov",this).css({
			animation: "providerImgOraAni 0.3s linear",
			opacity: 0,
		});
		$(".providerImgOra",this).css({
			opacity: 1,
		})
	});


	$(".productsDiv").mouseenter(function (){
		$(this).css({
			animation: "productsDivOutLineIn 0.3s linear",
			outline: "18px solid #178fdd"
		});
	}).mouseleave(function () {
		$(this).css({
			animation: "productsDivOutLineOut 0.3s linear",
			outline: "0px solid #178fdd"
		});
	});


	$(".gotop").click(function() {
		$("html,body").animate({scrollTop: 0}, 500);
	});


	$(".menu").click(function() {
		$(".screen").css({
			display:"inline-block",
		})
	});

	$(".left").click(function() {
		$(".screen").css({
			display:"none",
		})
	});
});

$(window).scroll(function () {
	if (document.documentElement.scrollTop+document.body.scrollTop>100) {
		$(".gotop").fadeIn(500);
	}else{
		$(".gotop").fadeOut(500);
	}
})