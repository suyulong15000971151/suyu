$(function(){

})

$(window).scroll(function(){
	// alert($(document).scrollTop())
	
	var topheight=$(document).scrollTop()+window.innerHeight
	if(topheight>$(".head-top").offset().top){
	  $(".man01 .man01-box").find("div").eq(0).addClass("Botanima")
	  $(".man01 .man01-box").find("div").eq(1).addClass("Botanima")
	  $(".man01 .man01-box").find("div").eq(2).addClass("rotate")
	}

		if(topheight>$(".man-02box").offset().top){
			$(".man-02box").find("div").eq(1).addClass("Leftanima");
			$(".man-02box").find("div").eq(2).addClass("opacity")
		}
		if(topheight>$(".man03-box").offset().top){
			$(".man03-box").find("div").eq(0).addClass("Rightanima");
			$(".man03-box").find("div").eq(1).addClass("opacity")
		}
		if(topheight>$(".man-04box").offset().top){
			$(".man-04box").find("div").eq(0).addClass("Leftanima");
			$(".man-04box").find("div").eq(1).addClass("opacity")
		}
})