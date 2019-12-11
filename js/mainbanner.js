$(function(){
	var sNum=0;
	
	$(".mainBtn>li").click(function(e){
		e.preventDefault();
		sNum=$(this).index();
		
	move();
		
	})
	
	setInterval(function(){
		sNum++;
		if(sNum==3){
			sNum=0;
		}
		
		move();
		
	},2000)
	
	function move(){
    $(".mainBanner>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
	$(".mainBtn>li").eq(sNum).addClass("active").siblings().removeClass("active");	
	}
	
	
})