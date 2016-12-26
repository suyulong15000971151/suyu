function $(args){	
	return new Base(args);
}
function Base(args){
	this.elements=[];
	if (typeof args=='object'&&args!=null) {
		this.elements.push(args);
	}else if(typeof args=='string'){
		if(args.indexOf(' ')>0){
			var eles=args.split(' ');
			var eleChilds=[];
			var nodes=[];
			if(nodes.length==0)nodes.push(document);
			for (var i = 0; i < eles.length; i++) {
				eleChilds=[];
				switch (eles[i].charAt(0)){
					case '#':
						eleChilds.push(document.getElementById(eles[i].substring(1)));
						break;
					case '.':
						for (var j = 0; j < nodes.length; j++) {
							eleChilds=eleChilds.concat(this.getClass(eles[i].substring(1),nodes[j]));
						}
						break;
					default:
						for (var j = 0; j < nodes.length; j++) {
							eleChilds=eleChilds.concat(this.getTagName(eles[i],nodes[j]));
						}
				}				
				
				nodes=eleChilds;
			}
			this.elements=eleChilds;
		}else{
			switch (args.charAt(0)){
			case '#':
				this.elements.push(this.getId(args.substring(1)));
				break;
			case '.':
				this.getClass(args.substring(1));
				break;
			default:
				this.getTagName(args);
			}
		}
	}
	
}
Base.prototype.getId=function(args){
	return document.getElementById(args);
}
Base.prototype.getClass=function(args,parentNode){
	var temp=[];
	if(arguments.length==1){
		var doc=document.getElementsByTagName('*');	
		var reg=new RegExp(args);
		for (var i = 0; i < doc.length; i++) {
			if(reg.test(doc[i].className)){
				temp.push(doc[i]);
			}
		}
		this.elements=temp;
	}else if(arguments.length==2){
		var doc=parentNode.getElementsByTagName('*');
	}
	var reg=new RegExp(args);
	for (var i = 0; i < doc.length; i++) {
		if(reg.test(doc[i].className)){
			temp.push(doc[i]);
		}
	}		
	return temp;
}
Base.prototype.getTagName=function(args,parentNode){
	var temp=[];
	if(arguments.length==1){
		this.elements=document.getElementsByTagName(args);
	}else if(arguments.length==2){
		var childs=parentNode.getElementsByTagName(args);
		for (var i = 0; i < childs.length; i++) {
			temp.push(childs[i]);
		}
	}	
	return temp;
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
		$(this).mousemove(function(evt){
			var e=evt||window.event;
			var offsetLeft=0;
			var offsetTop=0;
			if (e.clientX-offsetX>getInner().width-this.offsetWidth) {
				offsetLeft=getInner().width-this.offsetWidth+'px';
			}else if(e.clientX-offsetX<0){
				offsetLeft=0+'px';
			}else{
				offsetLeft=e.clientX-offsetX+'px';
			}

			if (e.clientY-offsetY>getInner().height-this.offsetHeight) {
				offsetTop=getInner().height-this.offsetHeight+'px';
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
Base.prototype.val=function(value){
	for (var i = 0; i < this.elements.length; i++) {
		if(arguments.length==0){
			return this.elements[0].value;
		}
		this.elements[i].value=value;
	}
	return this;
}
Base.prototype.html=function(html){
	for (var i = 0; i < this.elements.length; i++) {
		if(arguments.length==0){
			return this.elements[0].innerHTML;
		}
		this.elements[i].innerHTML=html;
	}
	return this;
}
Base.prototype.text=function(text){
	for (var i = 0; i < this.elements.length; i++) {
		if(arguments.length==0){
			return this.elements[0].innerText;
		}
		this.elements[i].innerText=text;
	}
	return this;
}