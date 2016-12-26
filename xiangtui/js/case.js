$(function(){

})

$(window).scroll(function(){

	//这是下面图片左右动画 
	var caseTop=$(document).scrollTop()+window.innerHeight;

	if(caseTop>$('.man-02 .money-tu').offset().top){
		$('.man-02 .money-tu').addClass('caseLeft');
		$('.man-02 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-04 .money-tu').offset().top){
		$('.man-04 .money-tu').addClass('caseLeft');
		$('.man-04 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-06 .money-tu').offset().top){
		$('.man-06 .money-tu').addClass('caseLeft');
		$('.man-06 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-08 .money-tu').offset().top){
		$('.man-08 .money-tu').addClass('caseLeft');
		$('.man-08 .money-text').addClass('caseOpacity');
	}

	if(caseTop>$('.man-03 .money-tu').offset().top){
		$('.man-03 .money-tu').addClass('caseRight');
		$('.man-03 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-05 .money-tu').offset().top){
		$('.man-05 .money-tu').addClass('caseRight');
		$('.man-05 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-07 .money-tu').offset().top){
		$('.man-07 .money-tu').addClass('caseRight');
		$('.man-07 .money-text').addClass('caseOpacity');
	}
	if(caseTop>$('.man-08 .money-tu').offset().top){
		$('.man-08 .money-tu').addClass('caseRight');
		$('.man-08 .money-text').addClass('caseOpacity');
	}

	// 只是下不计数
	if($('.title p span').text()==0){

 	if($(document).scrollTop()+window.innerHeight>$('.title p span').offset().top+100){
   clearTimeout(setTimedId);
   var registerNum=0;
   var setTimedId=setTimeout(changeNum,1000);
   function changeNum(){
   	if(registerNum>3658){
   		clearTimeout(setTimedId);

   	}else{
   		registerNum+=40;
   		registerNum>3658?registerNum=3658:registerNum;
   		$('.title p span').text(registerNum)
   		setTimedId=setTimeout(changeNum,10)
   	}
   }

	}

}else{
	$('.title p span').text()=3658
}

})