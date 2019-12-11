$(function () {
	$(".icoCate").click(function(){
		$(".mobileCate").stop().animate({
			"bottom":""
		},500)	
	})
	$(".closeBtn").click(function(){
		$(".mobileCate").stop().animate({
			"bottom":"-100%"
		},500)
		
	})

	$(".mobileCatesub>li").click(function () {
		$(this).children("ul").slideToggle(500);
		$(this).siblings().children("ul").slideUp(500);
		
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
	})

})
