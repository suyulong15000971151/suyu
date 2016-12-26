
	
	//第一页改变背景
	$(document).ready(function(){
		
		var backgrounds = [];
		var text = [];
		var header = $('.bag1');
		var headline = $('');
		var index=0;
		
		backgrounds[0] = 'bag1';
		backgrounds[1] = 'bag2';
		backgrounds[2] = 'bag3';
		
		text[0] = '纠结半天，又没买到衣服';
		text[1] = '买衣服太浪费时间了';
		text[2] = '看过很多达人分享，却依然穿不好这一身';
		
		function changeBackground() {
			index++;
			if(index%3==0){
				header.removeClass().fadeIn(2000,function(){$(this).addClass(backgrounds[0]);});
				headline.html(text[0]);
			}else if(index%3==1){
				header.removeClass().fadeIn(2000,function(){$(this).addClass(backgrounds[1]);});
				headline.html(text[1]);
			}else{
				header.removeClass().fadeIn(2000,function(){$(this).addClass(backgrounds[2]);});
				headline.html(text[2]);
			}
		}
		setInterval(changeBackground, 4000);
	})

	$(function(){
		//滚动时改变导航背景颜色
		$(window).scroll(function(){
			if($(document).scrollTop()>50){
				$("nav").addClass("on");
			}else{
				$("nav").removeClass("on");
			}
		})
	})
	
	//点击logo返回顶部
	$(function(){
		$("#top").click(function() {
			$("html,body").animate({scrollTop:0}, 500);
		}); 
	})
	
	$(function(){
		
		//设计师页面选择设计师点击效果
		$(".rel").each(function(index){
			var txtr =[]
			txtr[0] = "中国著名设计师，师从国际形象大师吉米，曾获得2013年中国国际时装周最佳化妆奖提名、2014年中国十大化妆师创意大奖。今年主创个人形象和品牌“YOUGX”寓意--同行永远的陪伴。中国著名设计师，师从国际形象大师吉米，曾获得2013年中国国际时装周最佳化妆奖提名、2014年中国十大化妆师创意大奖。今年主创个人形象和品牌“YOUGX”寓意--同行永远的陪伴。"
			txtr[1] = "2222222222222222222222222222222222222222"
			txtr[2] = "3333333333333333333333333333333333333333"
			txtr[3] = "4444444444444444444444444444444444444444"
			txtr[4] = "5555555555555555555555555555555555555555"
			txtr[5] = "6666666666666666666666666666666666666666"
			txtr[6] = "7777777777777777777777777777777777777777"
			txtr[7] = "88888888888888888888888888888888888888888"
			$(".rel").eq(index).click(function(){
				var n=$(".rel").eq(index).children("img").attr("src");
				$(".pare").children("img").attr("src",n);
				$("figcaption").text(txtr[index]);
			})
			$(".rel").click(function(){
				if($(this).children("p").hasClass("m")){
					$(".pare>span").text("选择他");
				}else{
					$(".pare>span").text("选择她");
				}
			})
		})
		
		
		//个人中心列表切换
		$(".liste").find("li").each(function(i){
			$(".liste>li").eq(i).children("span").click(function(){
				$(this).addClass("activer").parent().siblings().children().removeClass("activer");
				$("dt").eq(i).show().siblings().hide();
			})
		})
		
		//个人中心资料修改
		$("#revise").click(function(){
			$(".revise").hide();
			$(".save").show();
		})
		
		
		
	})
	
	
	
































