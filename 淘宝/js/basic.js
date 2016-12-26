function empty(obj){
	
	var childs=children(obj);
	for (var i = 0; i < childs.length; i++) {
		obj.removeChild(childs[i]);
	}
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
function getTarget(evt){
	if(evt){
		return evt.currentTarget||window.event.srcElement;
	}else if(window.event){
		return window.event.srcElement;
	}
}
function $(biaoji){
	var substr1=biaoji.substring(0,1);
	var substr2=biaoji.substring(1);
	var reg=new RegExp(substr2);
	if(substr1=='#'){
		return document.getElementById(substr2);
	}else if(substr1=='.'){
		var doc=document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < doc.length; i++) {
			if(reg.test(doc[i].className)){
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
function getOffset(element){
	// var left=element.offsetLeft;
	var top=element.offsetTop;
	var parent=element.offsetParent;

	while(parent!=null){
		// left+=parent.offsetLeft;
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	// return left+","+top;
	return top;
}
// function $(){
// 	return new Base();
// }
// function Base(){
//   this.elements=[];
// }
// Base.prototype.getId=function(id){
// 	this.elements.push(document.getElementById(id));
// 	return this;
// }

// Base.prototype.getClass=function(className){
// 	var doc=document.getElementsByTagName('*');
// 	var reg=new RegExp(className);
// 	for (var i = 0; i < doc.length; i++) {
// 			if(reg.test(doc[i].className)){
// 				this.elements.push(doc[i]);
// 			}
// 		}
// 		return this;

// }
// Base.prototype.css=function(attr.value){
// 	for(var i=0;i<this.elements.length;i++){
// 		this.elements[i].style[attr]=value;
// 	}
// 	return this;
// }