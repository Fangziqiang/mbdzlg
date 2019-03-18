/** 获取HTMLElement
 * @param {String | HTMLElement |Array} el 必填项。可以是元素ID、对象、数组(id或对象)
 * @return {HTMLElement | Array} Element，或者包含多个Element的数组
 */
function $get(el) {
 if(el) {
  if(el.nodeType) {
   return el;
  }else if(typeof(el) === 'string') {
   return document.getElementById(el);
  }else if(length in el) {
   var els = [];
   for(var i=0, l = el.length; i < l; ++i) {
    els.push($get(el[i]));
   }
   return els;
  }
  return el;
 }
 return null;
}
/**  根据给定的类匹配一个元素。
 * @param eleClassName 必选项。需要查询的className
 * @param parentWrap 可选项，需要查询节点的主容器，默认为document
 * @return {Array} 包含匹配类名的Element数组
 */
function $class(classname,parentWrap){
 var rs=[],
  myclass = new RegExp("\\b"+classname+"\\b"),
  elem = ($get(parentWrap) || document).getElementsByTagName("*");
 for(var h=0,l=elem.length;h<l;++h){
  var classes = elem[h].className;
  if(myclass.test(classes)){rs.push(elem[h]);}
 }
 return rs;
}
/** 给ele添加className："value"
 * @param ele 必填项。目标元素
 * @param classValue 必填项。需要添加的className
 */
function addClass(ele,v) {
 if(!ele.className) {
  ele.className = v;
 } else if(!hasClass(ele,v)) {
  ele.className += ' '+v;
 } else {
  return false;
 }
}
/** 移除ele的className："classValue"
 * @param ele 必填项。目标元素
 * @param value 必填项。需要删除的className
 */
function removeClass(ele,v) {/*-----  移除样式  -----*/
 var cn = ele.className;
 if(cn) {
  var delclass = new RegExp('\\b'+v+'\\b','ig');
  if(delclass.test(cn)) {
   ele.className = cn.replace(delclass,"");
  }
 }
}
/** 判断ele是否有className，返回布尔值
 * @param ele
 * @param classname
 */
function hasClass(ele,classname) {
 var cn = ele.className;
 var rgExp = new RegExp('\\b'+classname+'\\b');
 return cn.match(rgExp);
}
/** 在tarElement之后插入newElement对象
 * @param newElement 要被插入文档结构的对象。
 * @param targetElement 指定插入点。
 */
function insertAfter(newElement,tarElement) {
 var pnode = tarElement.parentNode;
 if (pnode.lastChild == tarElement) {
  pnode.appendChild(newElement);
 } else {
  pnode.insertBefore(newElement,tarElement.nextSibling);
 }
}
/** 将element插入到tarElement的前面
 * @param element
 * @param tarElement
 */
function prepend(element,tarElement) {
 if(tarElement.firstChild) {
  tarElement.insertBefore(element,tarElement.firstChild);
 }else {
  tarElement.appendChild(element);
 }
}
/** 创建ele的父节点newprarent
 * @param newparent
 * @param ele
 */
function wrap(newparent,ele) {
 if(ele.nextSibling) {
  var n = ele.nextSibling;
  n.parentNode.insertBefore(newparent,n);
 }else if(ele.previousSibling) {
  insertAfter(newparent,ele.previousSibling);
 }else {
  ele.parentNode.appendChild(newparent);
 }
 newparent.appendChild(ele);
}
/** 移除ev的默认事件
 * @param
 */
function clearDefault(ev) {
 ev=window.event?window.event:ev;
 if(ev.preventDefault) {
  ev.preventDefault();
 }else {
  ev.returnValue = false;
 }
}
/** 将fn绑定到tar的ev事件
 * @param tar
 * @param ev
 * @param fn
 */
function addEvent(tar,ev,fn) {
 if(document.attachEvent) {
  tar.attachEvent('on'+ev,fn);
 }else if(document.addEventListener) {
  tar.addEventListener(ev,fn,false);
 }
}
/** 移除tar上ev事件里的fn
 * @param tar
 * @param ev
 * @param fn
 */
function removeEvent(tar,ev,fn) {
 if(document.detachEvent) {
  tar.detachEvent('on'+ev,fn);
 }else if(document.removeEventListener) {
  tar.removeEventListener(ev,fn,false);
 }
}
/** 选项卡
 * @param el 目标元素，可以是id值也可是对象
 * @param args 参数组{
  focusClass:导航连接高亮样式，默认为"lh",
  mode:鼠标事件，默认为"mouseover"
 }
 * @example
 * var c = new CatTab('nav',{
 *  focusClass:'lh',
 *  mode:'mouseover'
 * });
 */
function CatTab(el,args) {
 this.el = $get(el);
 if(!this.el) {return false;}
 this.links = this.el.getElementsByTagName('a');
 this.ajaxLoad = args.ajaxLoad;
  if(this.ajaxLoad) {
   this.ajaxWrap = $get(args.ajaxWrap);
   this.ajaxWrapName = 'ctTabAxWrap';
   this.ajaxLoading = args.ajaxLoading;
   this.ajaxLoadsucc = args.ajaxLoadsucc;
   this.ajaxLoadfail = args.ajaxLoadfail;
  }
 this.focusClass = args.focusClass || 'lh';
 this.bindEv = args.mode || 'mouseover';
 this.nTab = new Object();

 this.ini();
}
CatTab.prototype = {
 ini:function (e) {
  var self = this;
  for(var i=0, l = this.links.length; i < l; ++i) {
   var lk = this.links[i],
    lc = hasClass(lk,this.focusClass), //检测默认高亮的连接
    lts = lk.getAttribute('href',2).split('#'),
    lt = lts[1],
    wel = $get(lt);
   if(lc) {this.nTab = lk;} //储存
   if(wel) {
    if(!lc) {
     wel.style.display = 'none';
    }else {
     wel.style.display = '';
    }
   }
   if((!lts[0] || this.bindEv == 'click') && lt) { //取消点击默认事件
    addEvent(lk,'click',clearDefault);
   }
   if(!e) {
    if(!this.ajaxLoad) {
     lk.setAttribute('href',lts[0]);
     lk.v_catTab = lt;
     addEvent(lk,this.bindEv,function (e) {self.showTab(e)});
    }else {
     var tarid = this.ajaxWrapName+i;
     var anwrap = document.createElement('div');
     anwrap.style.display = 'none';
     this.ajaxWrap.appendChild(anwrap);

     lk.v_catTab = anwrap;
     lk['on'+self.bindEv] = function (e) {self.showAjaxTab(e)};
    }
   }
  }
  if(!this.nTab.nodeType){//默认为首个tab
   this.nTab = this.links[0];
  }
  if(!this.ajaxLoad) {
   this.showTab(this.nTab);
  }else {
   this.showAjaxTab(this.nTab);
  }
 },
 getObj:function (e) {
  var o;
  var e = e || window.event;
  if(!$get(e).nodeType) {
   o = e.srcElement || e.target;
   while(o.tagName.toLowerCase() != 'a') { // 修正子结点非为a的问题
    o = o.parentNode;
   }
  }else {
   o = $get(e);
  }
  return o;
 },
 showTab:function (e) {
  var obj = this.getObj(e);
  var oldtb = $get(this.nTab.v_catTab),
   newtb = $get(obj.v_catTab);
  if(oldtb && newtb) {//隐藏原tab
   oldtb.style.display = 'none';
   removeClass(this.nTab,this.focusClass);
  }
  if(newtb) {//显示新tab
   addClass(obj,this.focusClass);
   newtb.style.display = '';
   this.nTab = obj;//设置ntb为新的ntb
  }
 },
 showAjaxTab:function (e) {
  var self = this,
   obj = self.getObj(e),
   objlink=obj.getAttribute('href'),
   oldtb = $get(self.nTab.v_catTab),
   newtb = $get(obj.v_catTab);
  grabFile(objlink.split('#')[0],{
   loading:function (rs) {
    if(self.ajaxLoading) {
     self.ajaxLoading(newtb);
    }else {
     newtb.innerHTML = '加载中...';
    }
    oldtb.style.display = 'none';
    newtb.style.display = '';
    removeClass(self.nTab,self.focusClass);
    addClass(obj,self.focusClass);
    self.nTab = obj;
   },
   success:function (rs) {
    var rstext = rs.responseText;
    if(self.ajaxLoadsucc) {
     self.ajaxLoadsucc(newtb,rstext);
    }else {
     newtb.innerHTML = rstext;
    }
    obj['on'+self.bindEv] = function (e) {self.showTab(e);}
   },
   fail:function (rs) {
    if(self.ajaxLoadfail) {
     self.ajaxLoadfail(newtb);
    }else {
     newtb.innerHTML = '加载失败';
    }
   }
  });
 }
}
function catTab(el,args) {
 if(typeof(el) !== 'string' && (length in el)) {
  for(var i=0, l = el.length; i < l; ++i) {
   (function () {
    var v_catTab = new CatTab(el[i],args);}
   )();
  }
 }else {
  (function () {
   var v_catTab = new CatTab(el,args);
  })();
 }
}