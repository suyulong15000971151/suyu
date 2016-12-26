window.onload=function(){

	var p1=$('#p1');
	var Dong=$('#dong');

	var Denglu=$('.denglu')[0];
	var Mendl=$('.men2')[0];
	var Mendchild=children(Mendl)[0];
	


         
      addEvent(p1,'mouseover',function(){
      	Changerplay(Dong)
      });
       addEvent(p1,'mouseout',function(){
      	Changerplay(Dong)
      });
          addEvent(Dong,'mouseover',function(){
      	Changerplay(Dong)
      });
       addEvent(Dong,'mouseout',function(){
      	Changerplay(Dong)
      });


          addEvent(Mendchild,'mouseover',function(){
      	Changerplay(Denglu)
      });
       addEvent(Mendchild,'mouseout',function(){
      	Changerplay(Denglu)
      });
          addEvent(Denglu,'mouseover',function(){
      	Changerplay(Denglu)
      });
       addEvent(Denglu,'mouseout',function(){
      	Changerplay(Denglu)
      });

    
      function Changerplay(obj){
      	obj.style.display=="block"?obj.style.display="none":obj.style.display="block"
      }

    


		function addEvent(obj,type,fn){
			if(obj.addEventListener){
				obj.addEventListener(type,fn,false);
			}else if(obj.attachEvent){
				obj.attachEvent('on'+type,fn);
			}
		}
		function removeEvent(obj,type,fn){
			if(obj.removeEventListener){
				obj.removeEventListener(type,fn,false);
			}else if(obj.detachEvent){
				obj.detachEvent('on'+type,fn);
			}
		}


function $(biaoji){
	var substr1=biaoji.substring(0,1);
	var substr2=biaoji.substring(1);
	if(substr1=='#'){
		return document.getElementById(substr2);
	}else if(substr1=='.'){
		var doc=document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < doc.length; i++) {
			if(doc[i].className==substr2){
				arr.push(doc[i]);
			}
		}
		return arr;
	}else if(substr1=='_'){
		return document.getElementsByName(substr2);
	}else if(substr1=='&'){
		return document.getElementsByTagName(substr2);
	}
}


/*man01的图片切换
*/
	var picsTitle=$('#pics-title');
	var picsChilds=children(picsTitle);
	var num=1;
	var pics=$('#pics');	
	var interId=setInterval(changeSelect,1000);
	for (var i = 0; i < picsChilds.length; i++) {
		addEvent(picsChilds[i],'mouseover',function(evt){
			var target=getTarget(evt);
			clearInterval(interId);	
			for (var j = 0; j < picsChilds.length; j++) {
				if(picsChilds[j].innerText==target.innerText){
					target.style.backgroundPosition='0 -54px';
					target.firstChild.nodeType==1?target.firstChild.style.color='#d6d1ff':target.style.color='#d6d1ff';
					pics.src='img/lr'+(j+1)+'.jpg';
				}else{
					picsChilds[j].style.backgroundPosition='0 0';
					picsChilds[j].firstChild.style.color='#aba65d';
				}				
			}			
		})
		addEvent(picsChilds[i],'mouseout',function(evt){
			var target=getTarget(evt);
			for (var j = 0; j < picsChilds.length; j++) {	
				if(target==picsChilds[j]){
					num=j+1;
				}		
			}
			interId=setInterval(changeSelect,1000);
		})
	}
	function changeSelect(){
		for (var i = 0; i < picsChilds.length; i++) {
			if(i==(num-1)){
				picsChilds[i].style.backgroundPosition='0 -54px';
				picsChilds[i].firstChild.style.color='#d6d1ff';
				pics.src='img/lr'+num+'.jpg';
			}else{
				picsChilds[i].style.backgroundPosition='0 0';
				picsChilds[i].firstChild.style.color='#aba65d';
			}
		}
		num==4?num=1:num++;
	}



	// mano2图片切换
	var pagination=$('#pagination');
	var paginations=children(pagination);
	   
	var pagContent=$('#pagContent');
	var pagContents=children(pagContent);



	for (var i = 0; i < paginations.length; i++) {
		
		addEvent(paginations[i],'mouseover',function(evt){
           var target=getTarget(evt);
            empty(pagContent);
            var str='';
            for (var i = 0; i <15; i++) {
                 	str+='<li><i>10/17</i><a href="###">'+target.innerText+'</a></li>'
                     };

                   pagContent.innerHTML=str;  
		})
	}



	//魔兽世界职业菜单栏

	var lastNav=$(".last-nav")[0];
	var lastNavs=children(lastNav);
     
     var lastCon=$(".last-con")[0];
     var lastCons=children(lastCon);
    for (var i = 0; i < lastNavs.length; i++) {
       addEvent(lastNavs[i],'mouseover',function(evt){
       	var target=getTarget(evt);
       	empty(lastCon);
       	arr="";
       	for (var i = 0; i < 17; i++) {
       		arr+="<li><span>12/26</span><a href='###'>"+target.innerText+"</a></li>"    
       			};

       		lastCon.innerHTML=arr;	
       })
    };



		
}

function children(obj){
	var nodes=obj.childNodes;
	var arr=[];
	for (var i = 0; i<nodes.length; i++) {
		if(!(nodes[i].nodeType==3&&/^\s+$/.test(nodes[i].nodeValue))){
			arr.push(nodes[i]);
		}
	}
	return arr;
}

function getTarget(evt){
	if(evt){
		return evt.currentTarget||window.event.srcElement;
	}else if(window.event){
		return window.event.srcElement;
	}
}

function empty(obj){
	var childs=children(obj);
	for (var i = 0; i < childs.length; i++) {
		obj.removeChild(childs[i]);
	}
}