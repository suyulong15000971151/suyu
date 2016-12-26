$(function(){

// hea导航dNav


// 我们的优势弹出层
	$(".text-list ul li").on("mouseover",function(){
		$(".list-content .context").css("transform","translateY(0px)")
	}).on("mouseout",function(){
		$(".list-content .context").css("transform","translateY(110px)")
	})

     $(".somecaseShow .img").on("mouseover",function(){
     	var index=$(".somecaseShow .img").index(this);
     	$('.some-item').eq(index).css("fontSize","18px").css("width","1120px")

     }).on("mouseout",function(){
     	$('.some-item').css("width","0px").css("fontSize","0px")

})


// log图片左右滚动区
// $('.sal-log ul').css("marginLeft")

 var marginLeft=0;
   if(marginLeft<=0){
     	$('.left-arrow').fadeIn(1000)
     }
 $('.left-arrow').on("click",function(){
 	marginLeft-=201;
 	$('.sal-log ul').css("marginLeft",marginLeft+"px");
 	$('.right-arrow').fadeIn(1000);
 	if(marginLeft<=-603){
 		  	$('.left-arrow').fadeOut(200)
 	}
 })
  $('.right-arrow').on("click",function(){
 	marginLeft+=201;
 	$('.sal-log ul').css("marginLeft",marginLeft+"px");
 	$('.left-arrow').fadeIn(1000);
 	if(marginLeft>=0){
 		  	$('.right-arrow').fadeOut(200)
 	}
 })


})

// 我们的擅长动画
$(window).scroll(function(){

   var scrollTopz=$(document).scrollTop()+window.innerHeight
	if(scrollTopz>$('.addventlist ul').offset().top&&scrollTopz<2000){
		$('.addventlist ul li').find("h3").addClass("at");
		// alert($(window).clientHeight())
		// alert(window.innerHeight);

	}
	// 我们的优势动画建筑
	
	if(scrollTopz>$('.man-03 .lou').offset().top){
		$(".man-03 .lou").css("animation","lou 1s ease 1s forwards")
	}

	// 他们有话说图片动画
	if(scrollTopz>$('.somecaseShow').offset().top+100){
		$(".somecaseShow a img").addClass("addimg");
	}
// 企业log区
	if(scrollTopz>$('.sal-log').offset().top){
		$(".sal-log ul li").find("img").eq(1).addClass("addevent").css("animation-delay","0.1s");
		$(".sal-log ul li").find("img").eq(2).addClass("addevent").css("animation-delay","2.1s");
		$(".sal-log ul li").find("img").eq(3).addClass("addevent").css("animation-delay","0.3s");
		$(".sal-log ul li").find("img").eq(4).addClass("addevent").css("animation-delay","1.9s");
		$(".sal-log ul li").find("img").eq(5).addClass("addevent").css("animation-delay","0.7s");
		$(".sal-log ul li").find("img").eq(6).addClass("addevent").css("animation-delay","2.1s");
		$(".sal-log ul li").find("img").eq(7).addClass("addevent").css("animation-delay","0.1s");
		$(".sal-log ul li").find("img").eq(8).addClass("addevent").css("animation-delay","1.1s");
		$(".sal-log ul li").find("img").eq(9).addClass("addevent").css("animation-delay","0.1s");
		$(".sal-log ul li").find("img").eq(10).addClass("addevent").css("animation-delay","0.9s");
		$(".sal-log ul li").find("img").eq(11).addClass("addevent").css("animation-delay","2.1s");
		$(".sal-log ul li").find("img").eq(12).addClass("addevent").css("animation-delay","0.7s");
		$(".sal-log ul li").find("img").eq(13).addClass("addevent").css("animation-delay","0.9s");
		$(".sal-log ul li").find("img").eq(14).addClass("addevent").css("animation-delay","0.1s");
		$(".sal-log ul li").find("img").eq(0).addClass("addevent").css("animation-delay","1.1s");
	}

// 这是底部计数动画
if($('.title p span').text()==0){

 	if(scrollTopz>$('.title p span').offset().top+100){
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
