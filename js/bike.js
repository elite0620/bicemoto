$(function () {
	//현재 보여지는 배너가 누구인지를 체크할 변수
	var sNum = 0;
	
	//배너의 사이즈를 저장할 변수 만들기
	var bWidth = $(".nukeBike>li").outerWidth();
	var margin=parseInt($(".nukeBike>li").css("margin-left"))*2;
	console.log(bWidth);
	//비디오 복사해서 붙이기
	var obj = $(".nukeBike>li").clone();
	$(".nukeBike").append(obj);
	
	//resize
	$(window).resize(function(){
		bWidth = $(".nukeBike>li").outerWidth();
		margin=parseInt($(".nukeBike>li").css("margin-left"))*2;
		$(".nukeBike").css("margin-left",-(bWidth+margin)*sNum+"px");
	})
	

	//rightBtn
	//오른쪽 버튼을 클릭하면, 
	$(".rightArrow").click(function (e) {	
		console.log(bWidth,margin)
		e.preventDefault();
		//margin-left -300px
		//1 --> 
		if(sNum ==8){
			sNum=0;
			$(".nukeBike").css("margin-left","0px");
		}
		sNum++;
		move();
	})
	//왼쪽 버튼을 클릭하면
	$(".leftArrow").click(function(e){
		e.preventDefault();
		console.log(sNum);
		if(sNum==0){
			sNum=8;
			
			$(".nukeBike").css("margin-left",-(bWidth+margin)*sNum+"px");
		}
		sNum--;
		move();
	})

	//
	function move() {		
		//비디오를 이동시키기
		$(".nukeBike").stop().animate({
			"margin-left": -(bWidth+margin) * sNum + "px"
		}, 500)
		
		
	}


})
