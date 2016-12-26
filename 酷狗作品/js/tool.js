
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else{
		if(!obj.events)obj.events={};
		if(!obj.events[type])obj.events[type]=[];
		obj.events[type].push(fn);
		obj['on'+type]=function(){
			for (var i = 0; i < obj.events[type].length; i++) {
				obj.events[type][i]();
			}
		}
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

function getInner(){
	return {width:innerWidth||document.documentElement.clientWidth,
		height:innerHeight||document.documentElement.clientHeight};
}
// function getSize(obj){
// 	return {width:obj.offsetWidth,height:offsetHeight};
// }
function lock(mask,block){
	$('body').css('overflow','hidden');
	mask.show().css('width',getInner().width+'px').css('height',getInner().height+'px').click(function(){
		mask.hide();
		block.hide();
		$('body').css('overflow','auto');
	});
	block.show().center(block.get(0).offsetWidth,block.get(0).offsetHeight);
}
function unlock(mask,block){
	$('body').css('overflow','auto');
	mask.hide();
	block.hide();
}
function getScrollTop(){
	return  document.body.scrollTop||document.documentElement.scrollTop;
}

