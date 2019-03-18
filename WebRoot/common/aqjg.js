// public start
// 添加行
function addRow (tableid, valuefields, flag, hiddenfields) {
	var objTable = document.getElementById(tableid);
	var objRow = objTable.insertRow();
	objRow.setAttribute("align", "center");		
	for (var i=0; i<valuefields.length; i++) {			
		var objCell = objRow.insertCell();
		if (flag=="b_r") {
			objCell.className="line_b_r";
		} else if(flag=="r_t") {
			objCell.className="line_r_t";
		}
		var str="";
		if(valuefields[i]=="hjszd"){
		str="sxr_hjszd";
		objCell.innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(str)+"' />";
		}else if(valuefields[i]=="wpmc"){
		str = "wplb";
		objCell.innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(str)+"' />";
		}else{
		objCell.innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(valuefields[i])+"' />&nbsp;";
	    }
	}
	return objRow;
}

// 更新行记录
function updateRow (valuefields, hiddenfields) {
     	if(valuefields[0].substring(0,4)=='jswp'){
			var slValue = document.getElementById("jswp_sl").value;
			var slmsg = checkNumber("number(13,3)" , slValue , "数量");
			if(slmsg!="") {
				alert(slmsg);
				return;
			}
			if(slValue == "0"){
				alert("数据量不能为零！");
				return;
			}
			var tzValue = document.getElementById("jswp_tz").value;
			var tzmsg = checkInputLength("length<=30" , tzValue , "特征");
			if(tzmsg!=""){
				alert(tzmsg);
				return;
			}
			var clqkValue = document.getElementById("jswp_clqk").value;
			var clqkmsg = checkInputLength("length<=500" , clqkValue , "处理情况");
			if(clqkmsg!=""){
				alert(clqkmsg);
				return;
			}
			var jswp_valuefields0 = new Array("jswp_mc", "jswp_sl", "jswp_gg","jswp_tz");
			var jswp_titles0 = new Array("名称", "数量", "规格","特征");
			
			if(!checkMustInput(jswp_valuefields0, jswp_titles0)) return;
		}else if(valuefields[0].substring(0,3)=='sxr'){
			var sfzvalue = document.getElementById("sxr_sfzh").value;
			var sfzmsg = checkSFZ("sfz" , sfzvalue , "身份证");
			if(sfzmsg!="") {
				alert(sfzmsg);
				return;
			}
			var xmvalue = document.getElementById("sxr_xm").value;
			var xmmsg = checkInputLength("length<=30" ,xmvalue ,"姓名");
			if(xmmsg!="") {
				alert(xmmsg);
				return;
			}
			var xzzvalue = document.getElementById("sxr_xzz").value;
			var xzzmsg = checkInputLength("length<=200" ,xzzvalue ,"现住址");
			if(xzzmsg!="") {
				alert(xzzmsg);
				return;
			}
			var gzdwvalue = document.getElementById("sxr_gzdw").value;
			var gzdwmsg = checkInputLength("length<=200" ,gzdwvalue ,"工作单位");
			if(gzdwmsg!="") {
				alert(gzdwmsg);
				return;
			}
			var wffzjlvalue = document.getElementById("sxr_wffzjl").value;
			var wffzjlmsg = checkInputLength("length<=200" ,wffzjlvalue ,"违法犯罪记录");
			if(wffzjlmsg!="") {
				alert(wffzjlmsg);
				return;
			}
			if(!checkMustInput(sxr_valuefields, sxr_titles)) return;
		}else if(valuefields[0].substring(0,4)=='sxdw'){
			var mcvalue = document.getElementById("sxdw_mc").value;
			var mcmsg = checkInputLength("length<=200" ,mcvalue ,"单位名称");
			if(mcmsg!="") {
				alert(mcmsg);
				return;
			}
			var dbrvalue = document.getElementById("sxdw_dbr").value;
			var dbrmsg = checkInputLength("length<=30" ,dbrvalue ,"法定代表人");
			if(dbrmsg!="") {
				alert(dbrmsg);
				return;
			}
			var dzvalue = document.getElementById("sxdw_dz").value;
			var dzmsg = checkInputLength("length<=100" ,dzvalue ,"单位地址");
			if(dzmsg!="") {
				alert(dzmsg);
				return;
			}
			if(!checkMustInput(sxdw_valuefields, sxdw_titles)) return;
		}else if(valuefields[0].substring(0,5)=='wpcyr'){
			var xmvalue = document.getElementById("wpcyr_xm").value;
			var xmmsg = checkInputLength("length<=30" ,xmvalue ,"姓名");
			if(xmmsg!="") {
				alert(xmmsg);
				return;
			}
			var xzzvalue = document.getElementById("wpcyr_xzz").value;
			var xzzmsg = checkInputLength("length<=200" ,xzzvalue ,"现住址");
			if(xzzmsg!="") {
				alert(xzzmsg);
				return;
			}
			var gzdwvalue = document.getElementById("wpcyr_gzdw").value;
			var gzdwmsg = checkInputLength("length<=200" ,gzdwvalue ,"工作单位");
			if(gzdwmsg!="") {
				alert(gzdwmsg);
				return;
			}
			if(!checkMustInput(wpcyr_valuefields, wpcyr_titles)) return;
		}else if(valuefields[0].substring(0,4)=='sjwp'){
			var slValue = document.getElementById("sjwp_sl").value;
			var msg = checkNumber("number(13,3)" , slValue , "数量");
			if(msg!="") {
				alert(msg);
				return;
			}
			if(slValue == "0"){
				alert("数据量不能为零！");
				return;
			}
			var tzValue = document.getElementById("sjwp_tz").value;
			var tzmsg = checkInputLength("length<=30" , tzValue , "特征");
			if(tzmsg!=""){
				alert(tzmsg);
				return;
			}
			if(!checkMustInput(sjwp_valuefields, jswp_titles)) return;
		}else if(valuefields[0].substring(0,4)=='qtwp'){
			var slValue = document.getElementById("qtwp_sl").value;
			var msg = checkNumber("number(13,3)" , slValue , "数量");
			if(msg!="") {
				alert(msg);
				return;
			}
			if(slValue == "0"){
				alert("数据量不能为零！");
				return;
			}
			var tzValue = document.getElementById("qtwp_tz").value;
			var tzmsg = checkInputLength("length<=30" , tzValue , "特征");
			if(tzmsg!=""){
				alert(tzmsg);
				return;
			}
			if(!checkMustInput(qtwp_valuefields, qtwp_titles)) return;
		}else if(valuefields[0].substring(0,3)=='zrr'){
			var nlValue = document.getElementById("zrr_nl").value;
			var msg = checkNumber("number(3)" , nlValue , "年龄");
			if(msg!="") {
				alert(msg);
				return;
			}
			var xmValue = document.getElementById("zrr_xm").value;
			var xmmsg = checkInputLength("length<=30" , xmValue , "姓名");
			if(xmmsg!="") {
				alert(xmmsg);
				return;
			}
			var sfzvalue = document.getElementById("zrr_sfz").value;
			var sfzmsg = checkSFZ("sfz" , sfzvalue , "身份证");
			if(sfzmsg!="") {
				alert(sfzmsg);
				return;
			}
			
			var zrr_valuefields0 = new Array("zrr_xm", "zrr_xb", "zrr_nl","zrr_clqk");
			var zrr_titles0 = new Array("姓名", "性别", "年龄","处理情况");
			
			if(!checkMustInput(zrr_valuefields0, zrr_titles0)) return;
		}else if(valuefields[0].substring(0,4)=='zrdw'){
			var mcvalue = document.getElementById("zrdw_mc").value;
			var mcmsg = checkInputLength("length<=200" ,mcvalue ,"单位名称");
			if(mcmsg!="") {
				alert(mcmsg);
				return;
			}
			var dzvalue = document.getElementById("zrdw_dz").value;
			var dzmsg = checkInputLength("length<=100" ,dzvalue ,"单位地址");
			if(dzmsg!="") {
				alert(dzmsg);
				return;
			}
			if(!checkMustInput(zrdw_valuefields, zrdw_titles)) return;
		}else if(valuefields[0].substring(0,4)=='wzry'){
			var nlValue = document.getElementById("wzry_nl").value;
			var msg = checkNumber("number(3)" , nlValue , "年龄");
			if(msg!="") {
				alert(msg);
				return;
			}
			var xmValue = document.getElementById("wzry_xm").value;
			var xmmsg = checkInputLength("length<=30" , xmValue , "姓名");
			if(xmmsg!="") {
				alert(xmmsg);
				return;
			}
			var pzrValue = document.getElementById("wzry_pzr").value;
			var pzrmsg = checkInputLength("length<=30" , pzrValue , "批准人");
			if(pzrmsg!="") {
				alert(pzrmsg);
				return;
			}
			var lxdhValue = document.getElementById("wzry_lxdh").value;
			var lxdhmsg = checkDHHM("dhhm" , lxdhValue , "联系电话");
			var lxdhmsg1 = checkInputLength("length<=50" , lxdhValue , "联系电话");
			if(lxdhmsg!="") {
				alert(lxdhmsg);
				return;
			}
			if(lxdhmsg1!="") {
				alert(lxdhmsg1);
				return;
			}
			var sfzvalue = document.getElementById("wzry_sfz").value;
			var sfzmsg = checkSFZ("sfz" , sfzvalue , "身份证");
			if(sfzmsg!="") {
				alert(sfzmsg);
				return;
			}
			var jbrValue = document.getElementById("wzry_jbr").value;
			var jbrmsg = checkInputLength("length<=30" , jbrValue , "经办人");
			if(jbrmsg!="") {
				alert(jbrmsg);
				return;
			}
			var wzry_valuefields0 = new Array("wzry_xm", "wzry_xb", "wzry_nl","wzry_wznr","wzry_clqk","wzry_pzr","wzry_jbr");
			var wzry_titles0 = new Array("姓名", "性别", "年龄","违章内容","处理情况","批准人","经办人");
		
			if(!checkMustInput(wzry_valuefields0, wzry_titles0)) return;
		}else if(valuefields[0].substring(0,4)=='wpmc'){
		 	var slValue = document.getElementById("bawp_sl").value;
			var slmsg = checkNumber("number(25,3)" , slValue , "数量");
			if(slmsg!="") {
				alert(slmsg);
				return;
			}
			if(slValue == "0"){
				alert("数据量不能为零！");
				return;
			}
			var tmlx = document.getElementById("bawp_lx").value;
			if(tmlx==4){
				if(!checkMustInput(new Array("wpmc", "bawp_lx", "bawp_sl"), new Array("物品名称", "条码类型", "数量"))) return;
			}else{
				if(!checkMustInput(new Array("wpmc", "bawp_lx", "bawp_tm"), new Array("物品名称", "条码类型", "条码"))) return;
			}
			if(!verifyLength()) return;
			if(!verifyWp()) return;
			if(!isAllContentTm(getText(bawp_valuefields[2]), document.getElementById("bawpTable"), "此条码已存在，不能重复添加。")) {
			return;
		}
		}
	// 更新域值
	for(var i=0; i<valuefields.length; i++) {
		var str="";
		if(valuefields[i]=="hjszd"){
		str="sxr_hjszd";
		onRow.childNodes[i].innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(str)+"' />";
		}else if(valuefields[i]=="wpmc"){
		str = "wplb";
		onRow.childNodes[i].innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(str)+"' />";
		}else{
		onRow.childNodes[i].innerHTML = getText(valuefields[i]) + "<input type='hidden' name='"+hiddenfields[i]+"' value='"+getValue(valuefields[i])+"' />";;
	    }
	}	
	// 作用：把内容转移到域中，然后清空层中内容
	cancel();
}

//获取域的文本，目前只考虑下拉框(只能获取下拉框的text)、输入框、复选框
function getText (field) {
	var obj = document.getElementById(field);
	if (obj == null) {
		return "";
	}
	if (obj.length>=0) {
		if (obj.selectedIndex>=0) {
			return obj.options[obj.selectedIndex].text;
		} else {
			return "";
		}
	}
	if (obj.type=="checkbox"||obj.type=="radio") {	
		var fs = document.getElementsByName(field);
		for (var i=0; i<fs.length; i++) {
			if(fs[i].checked) {
				return fs[i].value;
			}
		}
	} else {
		var val = obj.value
		return (val=="null" || val=="" || val==null ? "&nbsp;":obj.value);
	}
}

//获取域的值(可以获取下拉框的value)
function getValue(field) {
   	var obj = document.getElementById(field);
   	if(obj == null)
   		return "";
   	if(obj.type=="checkbox" || obj.type=="radio") {	
		var fs = document.getElementsByName(field);
		for(var i=0;i<fs.length;i++)
			if(fs[i].checked) return fs[i].value;
	} else {
   		return obj.value;
   	}
}

//检查必须输入的域，去除空格
function checkMustInput(valuefields, titles) {
	var chres = true;
	var pstr = "";
	for (var i=0; i<valuefields.length; i++) {
		var field = document.getElementById(valuefields[i]);
		if (field != null && field.value.replace(" ","")=="") {
			if(chres) field.focus();
			if(titles.length>i && titles[i]!="")
				pstr += "“"+titles[i]+"”不可以为空！\n";
			chres = false;
		}
	}
	if(pstr!="") alert(pstr);
	return chres;
}

//检查必须输入的域，去除空格,无提示信息
function checkMustInputNull(valuefields, titles) {
	var chres = true;
	var pstr = "";
	for (var i=0; i<valuefields.length; i++) {
		var field = document.getElementById(valuefields[i]);
		if (field != null && field.value.replace(" ","")=="") {
			if(chres) field.focus();
			if(titles.length>i && titles[i]!="")
				pstr += "“"+titles[i]+"”不可以为空！\n";
			chres = false;
		}
	}
	//if(pstr!="") alert(pstr);
	return chres;
}

//去空格
function trim(s) {
	return s=="&nbsp;" ? "":s;  
}


// public end


function focusField(fieldobj)
{
		if(fieldobj==null)
		{
			return;
		}
	   setFieldVisible(fieldobj);
			fieldobj.focus();
}
	
	
function setFieldVisible(obj)
{
	if(obj == null) return;
	var tab = obj.parentElement;
	while((tab.tagName != "DIV" || tab.id.substr(0,3)!="Tag") && tab.tagName != "BODY")
		tab = tab.parentElement;
	if(tab.tagName == "BODY") return;
	
	var maxtab=0;
	for(var i=1;i<10;i++)
	{
		var objtd = document.getElementById("td" + i);
		if(objtd!=null) 
			maxtab=i;
		else
			break;
	}
	if(maxtab>1)
	{
		ShowTag(tab.id.substr(3),maxtab);
	}
}


function check(f)
{
	for (elementIndex = 0;elementIndex < f.elements.length;elementIndex++)
	{
		             
		try
		{
			if(!checkElement(f.elements[elementIndex]))
			{
				return false;
			}
		}
		catch(e){}
	
	}
	return true;
}

function trim(str){
	var reg_exp = /(^\s*)|(\s*$)/g;
	var s = str.replace(reg_exp,'');
	return s;
}

function searchBjcdw0(xzqhValue, dw_dm, dwmc,dwdz,frdb){
	var conditions = getXzqhConditions("xzqhdm", xzqhValue, 1);
	openSeachWindow("aqjg0", conditions, "dwdm,dwmc,dwdz,fzr", ""+dw_dm+","+dwmc+","+dwdz+","+frdb+"", "");
}
function searchBjcdw(xzqhValue, dw_dm, dwmc,dwdz,frdb){
	openSeachWindow("aqjg", "", "dwdm,dwmc,dwdz,fzr", ""+dw_dm+","+dwmc+","+dwdz+","+frdb+"", "");
}
function searchRy(xzqhValue, sxr_xm, sxr_xzz,sxr_xb,sxr_csrq,xr_gzdw,sxr_whcd,sxr_sfzh,hjszd,sxr_hjszd){
	var conditions = getXzqhConditions("zyzbh", xzqhValue, 1);
	openSeachWindow("ryxx", conditions, "xm,zz,xb,csrq,gzdw,whcd,sfz,jg,jgmc", ""+sxr_xm+","+sxr_xzz+","+sxr_xb+","+sxr_csrq+","+xr_gzdw+","+sxr_whcd+","+sxr_sfzh+","+sxr_hjszd+","+hjszd+"", "");
}
function getHjszd(xzqhValue,hjszd,sxr_hjszd){
	openSeachWindow("hjszd", "", "dm,mc", ""+sxr_hjszd+","+hjszd+"", "");
}

//encodeURIComponent()：处理js中中文问题。须改下tomcat配置文件：Tomcat 5.5\conf\server.xml(<Connector port="8080"...URIEncoding="UTF-8"/>)
//zhaohuibin 2010-06-09 编码格式改为GBK后，encodeURIComponent去掉
function openNewPage (xzqhdm, djrq, jslsh) {
	//var url = "jswpEdit.do?method=getJswpXx&xzqhdm="+encodeURIComponent(xzqhdm)+ "&djrq="+encodeURIComponent(djrq) + "&jslsh="+encodeURIComponent(jslsh);
	var url = "jswpEdit.do?method=getJswpXx&xzqhdm="+(xzqhdm)+ "&djrq="+(djrq) + "&jslsh="+(jslsh);
	window.open(url, "", "height=380px, width=500px, top=220px, left=250px, toolbar=no, menubar=no, resizable=yes, location=no, status=no");
}

function selectedOneOptionByValue(selectId , optValue){
	var sel = document.getElementById(selectId);
	if(!sel || !sel.options){
		return;
	}
	var opts = sel.options;
	for(var i=0; i<opts.length; i++){
		if(opts[i].innerHTML == optValue){
		  opts[i].selected = true;
		}else{
			opts[i].selected = false;
		}
	}
}
//点击基础查询事件
function jcShowHiddenTable(aa, bb,cc,dd) {
	if(document.getElementById(aa).style.display=='block') { 
		document.getElementById(aa).style.display = 'none';
		document.getElementById(bb).style.display = 'block';
		document.getElementById(cc).style.display = 'block';
		document.getElementById(dd).style.display = 'none';
	}
	if(document.getElementById(bb).style.display=='none') { 
		document.getElementById(aa).style.display = "block";
		document.getElementById(bb).style.display = "none";	
		document.getElementById(cc).style.display = "none";
		document.getElementById(dd).style.display = "block";
	}
}
//点击高级查询事件
function gjShowHiddenTable(aa, bb, cc, dd) {
	if(document.getElementById(aa).style.display=="none") { 
		document.getElementById(aa).style.display = "block";
		document.getElementById(bb).style.display = "none";	
		document.getElementById(cc).style.display = "none";
		document.getElementById(dd).style.display = "block";
	} else {
		document.getElementById(aa).style.display = "none";
		document.getElementById(bb).style.display = "block";	
		document.getElementById(cc).style.display = "block";
		document.getElementById(dd).style.display = "none";
	}
}
