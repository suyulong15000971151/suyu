window.onload=function(){
	// alert(1)
	var relatedp=$('#fixed-right');
    var fixedTop=$('#fixed-nav');


    var navTop=getOffset(fixedTop);
    var navUl=$('.navul')[0];
   var childre=children(navUl)[3];
   var childres=children(navUl);

   var spanLeft=$('.span-left');


 
	// alert(getOffset(relatedp))
	var offsetTop=getOffset(relatedp);
	var scrollTop=0;
	window.onscroll=function(){
		spaceWidth=(document.documentElement.clientWidth-1120)/2;
		scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrollTop>=offsetTop){
			relatedp.style.position="fixed";
			relatedp.style.right=(spaceWidth+15)+"px";
			relatedp.style.top="0";
		}else{
			relatedp.style.position="";
		}

		if(scrollTop>1450){
			
			fixedTop.style.right=(spaceWidth-50)+"px";
			childre.style.display="block";
			
		}else{
		
			childre.style.display="none";

		}
	}
// addEvent(childres,'mouseover',function(){
// 	for(i=0;i<spanLeft.length;i++){
// 	  var target=getTarget(evt)
// 		if(childres[i]=target){
//                 None[i].style.position=""
// 			    spanLeft.style.position="absolute"
// 				spanLeft.style.left="0";
// 				}else{

// 				spanLeft[i].style.left="50px";


// 			}

// 		}
// 	})
var spanLeft1=$('.span-left1')[0];
var None1=$('.none1')[0];


addEvent(childres[0],'mouseover',function(){
	
var Interval=setTimeout(function(){
		spanLeft1.style.cssText="position:absolute;left:0px;transition:left 0.3s";
        None1.style.cssText="position:absolute;left:-50px;"
	},500)
  

})
addEvent(childres[0],'mouseout',function(){
	
	var Interval=setTimeout(function(){
		spanLeft1.style.cssText="position:absolute;left:50px";
        None1.style.cssText="position:absolute;left:14px;transition:left 0.3s;"
	},500)
  

})



}