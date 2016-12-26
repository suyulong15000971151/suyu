window.onload=function(){

	var more=$('#more');
	var menuMore=$('#menu-more');
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




	var picture=$('#banner');
	var interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	var num=1;
	var opa=100;
	var dots=children($('.cir')[0]);
	var leftArrow=$('.left-jian')[0];
	var rightArrow=$('.right-jian')[0];
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
		// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
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
		// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
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
					// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
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

}
