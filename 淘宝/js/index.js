window.onload=function(){
	  var menu=$('.menu');
	 
	  var floatBox=$('.mytaobao')[0];
	  for (var i = 0; i < menu.length; i++) {
	  addEvent(menu[i],'mouseover',function(evt){
	  	var target=getTarget(evt);
	  	var select=target.getAttribute('menun');
	  	var arr=$('.'+select)[0];

	     arr.style.display="block"
	  	target.style.backgroundColor="#fff"
	  	addEvent(arr,'mouseover',function(evt){
           arr.style.display="block"
         target.style.backgroundColor="#fff"
	  	})
	  })
	  	  addEvent(menu[i],'mouseout',function(evt){
	  	var target=getTarget(evt);
	  	var select=target.getAttribute('menun');
	  	var arr=$('.'+select)[0];

	     arr.style.display="none"
	  	target.style.backgroundColor="#f1f1f1"
	  	addEvent(arr,'mouseout',function(evt){
           arr.style.display="none"
         target.style.backgroundColor="#f1f1f1"
	  	})
	  })
	

	  };


	  //导航栏变色
	  var searForm=$('.searform')[0];
	  var souButton=$('.soubutton')[0];
	  // alert(souButton);
	  var searchNav=children(children($('.search-header')[0])[0]);
	 for (var i = 0; i < searchNav.length; i++) {
	 	addEvent(searchNav[i],'click',function(evt){
	 		var target=getTarget(evt);
	 	for (var i = 0; i < searchNav.length; i++) {
	 		if(target==searchNav[i]){
	 			if(i==1){
	 				target.style.backgroundColor="#6c0000";
	 				searForm.style.borderColor="#6c0000";
	 				souButton.style.backgroundColor="#6c0000";
	 			}else{
	 				target.style.backgroundColor="#ff5400";
	 				searForm.style.borderColor="#ff5400";
	 				souButton.style.backgroundColor="#ff5400";


	 			}
	 	          target.style.fontWeight="bold";
	 	          target.style.color="#fff";
	 	         
	 		}else{
	 			searchNav[i].style.backgroundColor="#fff";
	 			 searchNav[i].style.fontWeight="normal";
	 	          searchNav[i].style.color="#000"
	 		}
	 	};
	 		

	 	})
	 };


	 //左边菜单动态显示子菜单
	 var manNav=children($('.man-nav')[0]);
	 var daohang=$('.daohang-sub')[0];
      TimeId=0
      ppa=0
     for (var i = 0; i < manNav.length; i++) {
  
     	addEvent(manNav[i],'mouseover',function(evt){
     		 clearTimeout(TimeId)
     		  daohang.style.display="block";
     		
     TimeId=setTimeout(opa,30)

     
     	})
     	     	addEvent(manNav[i],'mouseout',function(evt){
     		clearTimeout(TimeId)
     		ppa=0;
     		daohang.style.opacity=ppa
     		daohang.style.display="none"
     	})
 
     };
    	 function opa(){
			
			ppa>=100?ppa==100:ppa+=10;
             daohang.style.opacity=ppa/100;			
				if(ppa<100){
					TimeId=setTimeout(opa,30);
								} 
  }


  // 第一个导航；
  num=0;
  var scroolLeft=$('.left-arrow')[0];

  var scrool=$('.lunbo')[0];
var windowScrool=children(scrool);
TimeId=0;
  var dos=children($('.lunbo2')[0]);
  for (var i = 0; i < dos.length; i++) {
  	addEvent(dos[i],'click',function(evt){
  	clearTimeout(TimeId);
  		var target=getTarget(evt);
  		for (var j = 0; j < dos.length; j++) {

 
  			if(dos[j]==target){
  					clearTimeout(timeoutId);
  				target.style.backgroundColor="f40";
  				j==0?offsetLeft=-2080:offsetLeft=(j-1)*-520;
  			
  				 changeOffsetleft()
                 
  			}else{
  				dos[j].style.backgroundColor="#B7B7B7"
  			}
  			
  		};
  		
  	})
 
         
  };


  for (var i = 0; i < 5; i++) {
  	addEvent(scroolLeft,'click',function(){
  		clearTimeout(timeoutId);
  		i==0?offsetLeft=-2080:offsetLeft=(i-1)*-520;
		
           	 changeOffsetleft()
  	})
  };

var TimeId2=setInterval(changeOffsetleft,3000)
offsetLeft=0;
timeoutId=0;
function changeOffsetleft(){
	offsetLeft-=20;
	scrool.style.left=offsetLeft+"px";
	if(offsetLeft%-520==0){


		for (var i = 0; i < dos.length; i++) {
			var num=offsetLeft/-520;
			if(num==i){
				scrool.style.left=i*-520+"px";
				dos[i].style.backgroundColor="#f60";
			}else{
				dos[i].style.backgroundColor="#B7B7B7";

			}
		};
		return
	}else{
		timeoutId=setTimeout(changeOffsetleft,50);

	}
	if(offsetLeft<-2600){
		offsetLeft=0
	}
}
 
  
}
