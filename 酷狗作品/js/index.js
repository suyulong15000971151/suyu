window.onload=function(){

    var Top=$('.top').get(0);

   var offsetTop=getOffset(Top);
   var scrollTop=0;
   window.onscroll=function(){
   	spaceWidth=(document.documentElement.clientWidth-1120)/2;
   	scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
   	if(scrollTop>=offsetTop){
   		Top.style.position="fixed";
   		Top.style.right=(spaceWidth+15)+"px";
   		Top.style.top="0";
   	}else{
   		Top.style.position="";
   	}

   	if(scrollTop>1000){

   		Top.style.right=(spaceWidth-50)+"px";
   		Top.style.display="block";

   	}else{

   		Top.style.display="none";

   	}
   }




   var User=$('form #username input').get(0);
    addEvent(User,'focus',function(evt){
    	if(this.value=="用户名"){
    		 User.value="";
    	}else{
    		this.value=this.value;
    	}
     
    })
    addEvent(User,'blur',function(evt){
    	if(this.value==""){
    		 this.value='用户名';
    	}else{
    		this.value=this.value;
    	}
         
    })
   

	$('.top-ul').children().eq(1).click(function(){
		$('body').css('overflow',"hidden");
		$('.mask').show().click(function(){
			$('body').css('overflow','auto');
			$('.mask').hide();
			$('.login-fu').hide();
		});

		$('.login-fu').show().center(440,378);
		$('.login-fu').children().eq(0).click(function(){

			$('.mask').hide();
			$('.login-fu').hide();
			$('body').css('overflow','auto');

		})

	})
	$('.login-fu').drag();

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
