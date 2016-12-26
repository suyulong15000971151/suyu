$(function(){
	$("body").append('<div class="backtop"><div class="calltop"></div><div class="sever">联系客服</div></div>')
	$(".backtop").on("click",function(){
		$("body").animate({scrollTop:0},500)
	})

	$('.head-top ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active')
    // $(this).find("a").css("color","#fff")
})

})

$(window).scroll(function(){
	if($(document).scrollTop()>150){
		$(".backtop").fadeIn(1000)
	}else{
		$(".backtop").fadeOut(1000)
	}
// 这是底部计数动画
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




