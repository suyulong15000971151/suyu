window.onload=function(){

 // var Body=document.getElementsByTagName('body')[0];
	// $('.top-ul').children().eq(1).click(function(){
	// 	$('.mask').show().click(function(){
	// 		$('.mask').hide();
	// 		$('.login-fu').hide();
	// 	});

	// 	$('.login-fu').show().center(440,378);
	// 	$('.login-fu').children().eq(0).click(function(){
	// 		$('.mask').hide();
	// 		$('.login-fu').hide();
	// 	})
	// })
	// $('.login-fu').drag();

	var more=$('#more').get(0);

	var menuMore=$('#menu-more').get(0);
	var TimeoutId=0;
	addEvent(more,'mouseover',function(evt){
		clearTimeout(TimeoutId)
		menuMore.style.display="block";

	})
	addEvent(more,'mouseout',function(evt){
		TimeoutId=setInterval(function(){
			menuMore.style.display="none";
		},500);
		

	})
	addEvent(menuMore,'mouseover',function(evt){
		clearTimeout(TimeoutId)
		menuMore.style.display="block";

	})
	addEvent(menuMore,'mouseout',function(evt){
		TimeoutId=setInterval(function(){
			menuMore.style.display="none";
		},00);
		

	})




	var picture=$('#banner').get(0);
	var interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	var num=1;
	var opa=100;
	var dots=children($('.cir').get(0));
	var leftArrow=$('.left-jian').get(0);
	var rightArrow=$('.right-jian').get(0);
	addEvent(picture,'mouseover',function(){
	leftArrow.className="left-jian";
	rightArrow.className="right-jian";

	})
	addEvent(picture,'mouseout',function(){
	leftArrow.className="";
	rightArrow.className="";
	})
	addEvent(leftArrow,'click',function(evt){
		clearInterval(interId);
		num==1?num=5:num--;
		setTimeout(changeOpa,50);

		for (var i = 0; i < dots.length; i++) {
			if(i+1==num){
				dots[i].style.background='url(img/sprite.png) no-repeat 0 -37px';
			}else{
				dots[i].className='url(img/sprite.png) no-repeat 0 -10px';
			}
		}
		interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	})
		addEvent(rightArrow,'click',function(evt){
		clearInterval(interId);
		num==5?num=1:num++;
		setTimeout(changeOpa,50);

		for (var i = 0; i < dots.length; i++) {
			if(i+1==num){
				dots[i].className='dot-active';
			}else{
				dots[i].className='';
			}
		}
		interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	})
	for (var i = 0; i < dots.length; i++) {
		addEvent(dots[i],'mouseover',function(evt){
			var target=getTarget(evt);
			clearInterval(interId);
			for (var j = 0; j < dots.length; j++) {
				if(dots[j]==target){
					num=j+1;

					setTimeout(changeOpa,50);
					dots[j].style.background='url(img/sprite.png) no-repeat 0 -37px';
				}else{
					dots[j].style.background='url(img/sprite.png) no-repeat 0 -10px';
				}
			}
			interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
		})
	}
	function changeOpa(){				
		opa<=0?opa=0:opa-=20;
		picture.style.opacity=opa/100;
		if(opa>0){
			setTimeout(changeOpa,50);
		}else{
			picture.style.background='url(img/banner-bg'+num+'.jpg) no-repeat center center';
			for (var i = 0; i <dots.length; i++) {
				if(i+1==num){
					dots[i].style.background='url(img/sprite.png) no-repeat 0 -37px';
				}else{
					dots[i].style.background='url(img/sprite.png) no-repeat 0 -10px';
				}
			}
			setTimeout(changeOpa2,50);
		}
	}
	function changeOpa2(){		
		opa>=100?opa=100:opa+=20;
		picture.style.opacity=opa/100;
		if(opa<100){
			setTimeout(changeOpa2,50);
		}
	}

//  alert($('.songer-host').eq(0).children().children(0).eq(0));
    jQuery('.om').on('mouseover',function(){
    	jQuery.ajax({
    		type:"post",
    		url:"index.json",
    		dataType:'json',
    		success:function(msg){
				jQuery('.songer-host').eq(0).children().children(0).attr('src',msg[0].path);
				jQuery('.songer-host').eq(1).children().children(0).attr('src',msg[1].path);
				jQuery('.songer-host').eq(2).children().children(0).attr('src',msg[2].path);
				jQuery('.songer-host').eq(3).children().children(0).attr('src',msg[3].path);
				jQuery('.songer-host').eq(4).children().children(0).attr('src',msg[4].path);
    		}
    	});
    })
    
    

}

	function children(obj){
	var nodes=obj.childNodes;
	var arr=[];
	for (var i = 0; i < nodes.length; i++) {
		if(!(nodes[i].nodeType==3&&/^\s+$/.test(nodes[i].nodeValue))){
			arr.push(nodes[i]);
		}
	}
	return arr;
}
