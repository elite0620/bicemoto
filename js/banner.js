$(function () {
	var sNum = 0;
	var banner = $(".banner>li");
	var bannerWidth = banner.width();
	var obj = banner.clone();

	$(".banner").append(obj);


	//오른쪽 버튼 이벤트
	$(".rightBtn").on("click", function () {
		if (sNum == 3) {
			$(".banner").css("margin-left", 0);
			sNum = 0;
		}
		sNum++;

		if (sNum == 3) {
			$("count").text(1);
		} else {
			$(".count").text(sNum + 1);
		}

		moveBanner();

	})

	//왼쪽 버튼 이벤트
	$(".leftBtn").on("click", function () {
		if (sNum == 0) {
			$(".banner").css("margin-left", -bannerWidth * 3 + "px");
			sNum = 3;
		}
		sNum--;
		$(".count").text(sNum+1);
		
		moveBanner();

	})

	//배너를 움직일 함수 선언
	function moveBanner() {
		$(".banner").stop().animate({
			"margin-left": -sNum * bannerWidth + "px"
		}, 3000)

	}
	
	//자동으로 가기
	var timer=setInterval(function(){
		$(".rightBtn").trigger("click");
		
	},3000)
	
	//stop 
	$(".playStop").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			timer=setInterval(function(){
				$(".rightBtn").trigger("click");	
			},3000)
		}
		else{
			clearInterval(timer);
			$(this).addClass("active");
		}
		
	})



})







