<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%
String xzqhdm = (String) request.getAttribute("xzqhdm");
String xzqhmc = (String) request.getAttribute("xzqhmc");
String resultColumn = (String)request.getAttribute("resultColumn");
String valueColumn = (String)request.getAttribute("valueColumn");
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<HEAD>
		<TITLE>行政区划选择列表</TITLE>
		 <%@ include file="../include/meta.inc"%>
	<link rel="stylesheet" type="text/css" href="../css/form.css">
	<style type="text/css">
	  /*
	     body{
	         font-family:Arial,Helvetica,sans-serif;
		       font-size:1em;
		       vertical-align:middle;
		       font-weight:normal
	     }
	     .btn_blue {width: 50px;height: 25px;line-height: 25px;border: none;
	     background-color: #00a2ca;text-align: center;color: #fff;cursor: pointer;
	     -webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;
	     *overflow:visible;line-height: normal;}
	     */
	     .btn_blue {width: 50px;height: 22px;line-height: 22px;border: none;background-color: #00a2ca;text-align: center;color: #fff;cursor: pointer;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;*overflow:visible;line-height: normal;}
	     .btn_blue1 {width: 64px;height: 22px;line-height: 22px;border: none;background-color: #00a2ca;text-align: center;color: #fff;cursor: pointer;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;*overflow:visible;line-height: normal;}
	</style>
		<script type="text/javascript" src="../js/jquery-1.6.2.min.js"></script>
		<script type="text/javascript">
		$(function(){
		     init();
		});
		var xzqhdm = "<%=xzqhdm %>";
		var xzqhmc = "<%=xzqhmc %>";
		var xzqhdmArray = xzqhdm.split(",");
		var xzqhmcArray = xzqhmc.split(",");
		function init(){
			var obj = document.forms[0].select1;
			for(var i = 0;i<xzqhdmArray.length;i++){
				if(xzqhdmArray[i].indexOf("0000") > 0 && xzqhdmArray[i] != "000000") {
					obj.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
				}
			}
			var city = document.forms[0].select2;
			if(obj.length == 0) {
				document.getElementById("provinceTd").style.display = 'none';
				for(var i = 0;i<xzqhdmArray.length;i++){
					if(xzqhdmArray[i].substring(4,6) == '00' && xzqhdmArray[i] != "000000") {
						city.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
					}
				}
			} else {
				return false;
			}
			var county = document.forms[0].select3;
			if(city.length == 0) {
				document.getElementById("cityTd").style.display = 'none';
				for(var i = 0;i<xzqhdmArray.length;i++){
					county.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
				}
			} else {
				return false;
			}
		}
		
		function selectProvince(opt){
			var province = opt.value;
			if(province == '') return;
			document.forms[0].dm.value = province;
			document.forms[0].mc.value = opt.options[opt.selectedIndex].text;
			var city = document.forms[0].select2;
			city.length = 0;
			var county = document.forms[0].select3;
			county.length = 0;
			for(var i = 0;i<xzqhdmArray.length;i++){
				if(xzqhdmArray[i].substring(0, 2) == province.substring(0,2) && xzqhdmArray[i] != province
				&& xzqhdmArray[i].substring(4,6) == "00"
				) {
					city.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
				}
			}
			
			if(city.length == 0) {
				for(var i = 0;i<xzqhdmArray.length && i<xzqhmcArray.length;i++){
					if(xzqhdmArray[i].substring(0, 2) == province.substring(0,2) && xzqhdmArray[i] != province) {
						county.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
					}
					if(xzqhdmArray[i] == province) {
						city.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
					}
				}
			} else if(city.length == 1) {
				if(iszxs(province)) {
					city.value = city.options[0].value;
					selectCity(city);
				}
			}
		}
		
		function iszxs(xzqh){
			if(xzqh == "110000" || xzqh == "120000" || xzqh == "310000" || xzqh == "500000"){
				return true;
			}else{
				return false;
			}
		}
		
		
		
		function selectCity(opt){
			var city = opt.value;
			if(city == '') return;
			document.forms[0].dm.value = city;
			document.forms[0].mc.value = opt.options[opt.selectedIndex].text;
			var county = document.forms[0].select3;
			
			county.length = 0;
			
			if(opt.length == 1) {
				for(var i = 0;i<xzqhdmArray.length && i<xzqhmcArray.length;i++){
					if(xzqhdmArray[i].substring(0, 2) == city.substring(0,2) && xzqhdmArray[i] != city) {
						county.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
					}
				}
			} else {
				for(var i = 0;i<xzqhdmArray.length;i++){
					if(xzqhdmArray[i].substring(0, 4) == city.substring(0,4) && xzqhdmArray[i] != city) {
						county.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
					}
				}
			}
		}
		
		
		function search() {
			document.getElementById("selectTr").style.display = "none";
			document.getElementById("checkTr").style.display = "block";
			var dm = document.forms[0].dm.value;
			var obj4 = document.forms[0].select4;
			
			obj4.length = 0;
			
			for(var i = 0;i<xzqhmcArray.length;i++){
				if(((dm != '') ?(xzqhdmArray[i].indexOf(dm) != -1) : true) || ((dm != '') ?(xzqhmcArray[i].indexOf(dm) != -1) : true)) {
					obj4.add(new Option(xzqhmcArray[i], xzqhdmArray[i]));
				}
			}
		}
		

		function onclickSelect() {
			document.getElementById("selectTr").style.display = "block";
			document.getElementById("checkTr").style.display = "none";
			document.forms[0].dm.value = "";
			document.forms[0].mc.value = "";
			var opt = document.forms[0].select1;
			for( var i=0; i<opt.options.length; i++){
				if(opt.options[i].selected){
					opt.options[i].selected = false;
				}
			}
			return false;
		}
		
		function selectCounty(opt) {
			var county = opt.value;
			if(county == '') return;
			document.forms[0].dm.value = county;
			document.forms[0].mc.value = opt.options[opt.selectedIndex].text;
		}
		
		function onclickXzqh() {
			var pWindow=window.dialogArguments; 
			var resultColumn = '<%=resultColumn %>';
			var valueColumn = '<%=valueColumn %>';
			var resultsArray = resultColumn.split(",");
			var valuesArray = valueColumn.split(",");
			for(var i = 0; i < resultsArray.length; i++) {
				if(pWindow != null){
				   if(!pWindow.document.getElementsByName(resultsArray[i])[0]){
				       pWindow.document.getElementById(resultsArray[i]).value=document.getElementsByName(valuesArray[i])[0].value;
				   }else{
				       pWindow.document.getElementsByName(resultsArray[i])[0].value=document.getElementsByName(valuesArray[i])[0].value;
				   }
				}else{
					window.opener.document.getElementsByName(resultsArray[i])[0].value=document.getElementsByName(valuesArray[i])[0].value;
				}
			}
			window.close();
		}
		
		function dblClick(opt) {
			var optValue = opt.value;
			if(optValue == '') return;
			document.forms[0].dm.value = optValue;
			document.forms[0].mc.value = opt.options[opt.selectedIndex].text;
			onclickXzqh();
		}
		
		function clickClose() {
			window.close();
		}
		<%--
		function document.onkeydown(){                //网页内按下回车触发
		    
		    if(event.keyCode==13){
		    	var select1 = document.getElementById("select1");
			    var select2 = document.getElementById("select2");
			    var select3 = document.getElementById("select3");
			    var select4 = document.getElementById("select4");
			    if(select4.selectedIndex != -1) {
			    	dblClick(select4);
			    	return true;
			    }
		    	if(select3.selectedIndex != -1) {
			    	dblClick(select3);
			    	return true;
			    }
			    if(select2.selectedIndex != -1) {
			    	dblClick(select2);
			    	return true;
			    }
			    if(select1.selectedIndex != -1) {
			    	dblClick(select1);
			    	return true;
			    }
			    alert("请选择行政区划！");
			    return false;
		    }
		    return true;
		} --%>
		</script>
	</HEAD>
	<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="background-color: #D9EDF7 ">
		<form name="selectXzqh">
		<table class="tablestyle1">
			<tr class="TableContent">
				<td colspan='3'>
					<span style="font-family:'微软雅黑','黑体','宋体';font-size:12px;font-weight: bold;">请输入行政区划代码或名称：</span>
					<input type="text" name="dm" class="s_input">
					<input type="button" class="btn_blue" value="查询" onclick="search();">
					<input type="button" class="btn_blue1" value="重新选择" onclick="onclickSelect();">
					<input type="button" class="btn_blue" value="关闭" onclick="clickClose();">
					<input type="hidden" name="mc">
				</td>
			</tr>
			
			
			<tr id = "selectTr"  class="TableContent">
				<td width='25%' id="provinceTd" style='display:block'>
					<select name="select1" size="15" style="width:100%;background-color: #D9EDF7" onclick="selectProvince(this);" ondblclick="dblClick(this)"></select>
				</td>
				<td width='33%' id= 'cityTd' style='display:block'>
					<select name="select2" size="15" style="width:100%;background-color: #D9EDF7" onclick="selectCity(this);" ondblclick="dblClick(this)"></select>
				</td>
				<td width='42%' id = 'countyTd' style='display:block'>
					<select name="select3" size="15" style="width:100%;background-color: #D9EDF7" onclick="selectCounty(this);" ondblclick="dblClick(this)"></select>
				</td>
			</tr>
			<tr id = "checkTr" style={display:none}  class="TableContent">
				<td colspan='3'>
					<select name="select4" size="15" style="width:100%" onclick="selectCounty(this);" ondblclick="dblClick(this)"></select>
				</td>
			</tr>
		</table>
		</form>

	</BODY>
</HTML>
