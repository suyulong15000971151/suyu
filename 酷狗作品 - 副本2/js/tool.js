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
function getTarget(evt){
	if(evt){
		return evt.currentTarget||window.event.srcElement;
	}else if(window.event){
		return window.event.srcElement;
	}
}
function getOffset(element){
	var left=element.offsetLeft;
	var top=element.offsetTop;
	var parent=element.offsetParent;

	while(parent!=null){
		left+=parent.offsetLeft;
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return {top:top,left:left};
}
// function getInner(obj){
// 	var width=obj.style.width;
// 	var height=obj.style.height;
// 	return {width:width,height:height};
// }

function getInner(){
	if(innerWidth){
		return {width:innerWidth,height:innerHeight}
	}else{
		return {width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight}
	}
}