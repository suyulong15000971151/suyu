
function $(_this){
	var base=new Base();
	if (typeof _this=='object'&&_this!=null) {
		base.elements.push(_this);
	}else if(typeof _this=='string'){
		var substr1=_this.substring(0,1);
		var substr2=_this.substring(1);	
		if(substr1=='#'){
			return base.getId(substr2);
		}else if(substr1=='.'){
			var doc=document.getElementsByTagName('*');
			var reg=new RegExp(substr2);
			for (var i = 0; i < doc.length; i++) {
				if(reg.test(doc[i].className)){
					base.elements.push(doc[i]);
				}
			}
			
		}
	}
	return base;
}
function Base(_this){
	this.elements=[];
}
Base.prototype.getId=function(_this){
	this.elements.push(document.getElementById(_this));
	return this;
}
// 设置所有Base数组元素的css样式
Base.prototype.css=function(attr,value){
	if(arguments.length==1){
		var style = window.getComputedStyle ? 
		window.getComputedStyle(this.elements[0], null) : this.elements[0].currentStyle;
		return style[attr];
	}else if(arguments.length==2){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style[attr]=value;
		}
		return this;
	}	
}
// 清空base数组元素的所有子元素
Base.prototype.empty=function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].innerHTML='';
	}
	return this;
}
//获取base数组中第一个元素的所有子元素
Base.prototype.children=function(){
	var element=this.elements[0];
	this.elements=[];
	var nodes=element.childNodes;
	for (var i = 0; i < nodes.length; i++) {
		if(!(nodes[i].nodeType==3&&/^\s+$/.test(nodes[i].nodeValue))){
			this.elements.push(nodes[i]);
		}
	}
	return this;
}
// 获取base数组的指定索引的对象
Base.prototype.eq=function(index){
	var element=this.elements[index];
	this.elements=[];
	this.elements.push(element);
	return this;
}

Base.prototype.get=function(index){
	return this.elements[index];
}

Base.prototype.center=function(width,height){

	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].style.left=(getInner().width-width)/2+'px';
		this.elements[i].style.top=(getInner().height-height)/2+'px';
		// alert(getInner().height);

	}
	return this;
}
Base.prototype.click=function(fn){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].onclick=fn;
	}
	return this;
}
Base.prototype.mousedown=function(fn){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].onmousedown=fn;
	}
	return this;
}
Base.prototype.mousemove=function(fn){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].onmousemove=fn;
	}
	return this;
}
Base.prototype.mouseup=function(fn){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].onmouseup=fn;
	}
	return this;
}
Base.prototype.show=function(){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].style.display='block';
	}
	return this;
}
Base.prototype.hide=function(){
	for (var i = 0; i < this.elements.length; i++) {		
		this.elements[i].style.display='none';
	}
	return this;
}
Base.prototype.drag=function(){
	this.mousedown(function(evt){
		var e=evt||window.event;
		var offset=getOffset(this);		
		var offsetX=e.clientX-offset.left;
		var offsetY=e.clientY-offset.top;

		var loginWidth=$(this).css('width');
		var loginHeight=$(this).css('height');
		$(this).mousemove(function(evt){
			var e=evt||window.event;
			var offsetLeft=0;
			var offsetTop=0;
			if (e.clientX-offsetX>getInner().width-loginWidth.substring(0,loginWidth.length-2)) {
				offsetLeft=getInner().width-loginWidth.substring(0,loginWidth.length-2)+'px';
			}else if(e.clientX-offsetX<0){
				offsetLeft=0+'px';
			}else{
				offsetLeft=e.clientX-offsetX+'px';
			}

			if (e.clientY-offsetY>getInner().height-loginHeight.substring(0,loginWidth.length-2)) {
				offsetTop=getInner().height-loginHeight.substring(0,loginHeight.length-2)+'px';
			}else if(e.clientY-offsetY<0){
				offsetTop=0+'px';
			}else{
				offsetTop=e.clientY-offsetY+'px';
			}
			$(this).css('left',offsetLeft).css('top',offsetTop);
		});
		$(this).mouseup(function(){
			$(this).mousemove(null);
		})
	});
}