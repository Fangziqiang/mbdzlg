<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@page import="com.jadlsoft.utils.SysConfigUtils"%>
<%@page import="com.jadlsoft.domain.UserSessionBean"%>
<%@page import="com.jadlsoft.business.zdgl.ZdglManager"%>
<%@ include file="../dtgl/common/commonLayoutMap.jsp"%>

<%
	String dwdm = ((UserSessionBean) session
			.getAttribute("userSessionBean")).getDwdm();//单位代码
	String userlx = (String)session.getAttribute("userlx");
 %>
<script type="text/javascript" language="javascript">
	var CTX = '${pageContext.request.contextPath}';
	var center_ = '${requestScope.center}';//行政区划经纬度中心点
	var zoomlevel_ = '${requestScope.zoomlevel}';//行政区划缩放级别
	var xzqh_ = '${requestScope.xzqhmc}';//行政区划名称
	var xzqhDm_ = '${sessionScope.userSessionBean.xzqh}';//行政区划代码
	var dwdm = "<%=dwdm %>";//单位代码
	var userlx = "<%=userlx %>";//用户类型
	var gpsexpirelimit = "<%=SysConfigUtils.getProperty("gpsexpirelimit")%>";
	var timeInterval = "<%=SysConfigUtils.getProperty("timeInterval")%>";
	var gpsTimeOutLimit = "<%=SysConfigUtils.getProperty("gpsTimeOutLimit")%>";
	var timeCounter;////解决setTimeout狂吞用户cpu问题,setTimeout执行完毕后清除 
	var intervalId;
	//全局通用，解决setTimeout狂吞cpu问题，清除本次的setTimeout
	function generalClearTimeout(){
		if(timeCounter)window.clearTimeout(timeCounter);
	}
	//全局通用清除本次的setInterval
	function generalClearInterval(){
		if(intervalId)window.clearInterval(intervalId);
	}
</script>
<script type="text/javascript" src="../dtgl/js/gisservice/provinceScqyStatic.js"></script>
<script type="text/javascript" src="../dtgl/js/gisservice/provinceScqyLayout.js"></script>
<link rel="stylesheet" href="../dtgl/js/common/calendar/skin/WdatePicker.css" type="text/css"></link>
<script type="text/javascript" src="../dtgl/js/common/calendar/WdatePicker.js"></script>
<script type="text/javascript">
	function query(){
		var nr = $.trim(document.all.cph_ysz.value);
		 var sql = "&&cph~like~%" +$.trim($("#cph_ysz").val())+"%";
		 sql = encodeURI(sql);;
   		 $('#flexTable_c').flexOptions({extParam : {"name" : "queryparamterss", "value" :sql }, query : sql}).flexReload();
	}
	//首页统计车辆信息
	function getClxxtj(){
		var url = CTX+'/dtgl/cldw.do?method=getClxxtj&xzqhdm=';
		if(userlx == "A"){
			url += xzqhDm_;
			if(xzqhDm_.substr(2,6) != '0000'){
				document.all.sxyc.style.display = "none";
			}
	 	}
	 	if(userlx == "B"){
	 		url += "<%= ZdglManager.getXtjbXzqh()%>";
	 		document.all.gauser.style.display = "none";
	 		document.all.dwuser.style.display = "block";
	 	} 
		$.ajax({  
	        url: url,//地址  
	        type: "POST",//提交方式 可以选择post/get 推荐post   
	        async: false,//同步异步   
	        dataType: "text",//返回数据类型   
	        success:function(data){
	          	var displays  = JSON.parse(data);
			 	if(userlx == "A"){//公安用户
					var mbysclsl = displays[0].mbysclsl;
					var yszsl = displays[0].yszsl;
					var bsclcyyszsl = displays[0].bsclcyyszsl;
					var kdwclsl = displays[0].kdwclsl;
					var wjsdwclsl = displays[0].wjsdwclsl;
					var yszyjsl = displays[0].yszyjsl;
			   		document.all.mbysclsl.innerText=mbysclsl;
			   		document.all.kdwclsl.innerText=kdwclsl;
					document.all.yszsl.innerText=yszsl;
					document.all.bsclcyyszsl.innerText=bsclcyyszsl;
					document.all.wjsdwclsl.innerText=wjsdwclsl;
					document.all.yszyjsl.innerText=yszyjsl;
			 	}
			 	if(userlx == "B"){//单位用户
					var dwyszsl = displays[0].dwyszsl;
					var dwyszbsclcysl = displays[0].dwyszbsclcysl;
			       	document.all.dwyszsl.innerText=dwyszsl;
					document.all.dwyszbsclcysl.innerText=dwyszbsclcysl;
			 	}
	        },
	        error:function(){
	        	$.messager.alert('提示信息', '数据查询失败!', 'warning');
	        	return;
	        }  
   		 });  
	}
	//运输许可证信息查询
	function getYsz(){
		var ysz = $('#ysz').val();
		var ysz_cph2 = $('#ysz_cph').val();
		var yszzt = $('#yszzt').val();
		ysz = $.trim(ysz);
		ysz_cph2 = $.trim(ysz_cph2);
		var fzrqfrom_date = $('#fzrqfrom_date').val();
		var fzrqto_date = $('#fzrqto_date').val();
		if($.trim(fzrqfrom_date).length != 0 && $.trim(fzrqto_date).length == 0){
			$.messager.progress('close');
			$.messager.alert("提示信息","请输入查询发证日期截止日期！");
			return;
		}
		if($.trim(fzrqto_date).length != 0 && $.trim(fzrqfrom_date).length == 0){
			$.messager.progress('close');
			$.messager.alert("提示信息","请输入查询发证日期起始日期！");
			return;
		}
		var timeDiffer = Date.parse(fzrqto_date.replace(/-/g, "/")) - Date.parse(fzrqfrom_date.replace(/-/g, "/"));
		if(timeDiffer<0){
			$.messager.progress('close');
			$.messager.alert("提示信息","发证日期查询范围有误，起始日期必须在截止日期之前！");
			return ;
		}
		var sql = "";
		if(userlx == "A"){//公安用户
			url = CTX + '/dtgl/yszxxlistjson.do';
			sql += "&&xzqh~=~" +xzqhDm_;
	 	}
	 	if(userlx == "B"){//单位用户
			url = CTX + '/dtgl/yszxxlistjson.do';
			sql += "&&dwdm~=~" +dwdm;
	 	}
		sql += "~yszbh~like~%" +ysz+"%~cph~like~%" +ysz_cph2+"%~yszzt~like~%"+yszzt+"%";
		
		if($.trim(fzrqfrom_date).length != 0 && $.trim(fzrqto_date).length != 0){
			sql+="~fzrq~>=~to_date" +fzrqfrom_date+"~fzrq~<=~to_date"+fzrqto_date+"";
		}
		sql = encodeURI(sql);
   		$('#flexTable_y').flexOptions({extParam : {"name" : "queryparamterss", "value" :sql }, query : sql}).flexReload();
	}
	//隐藏没有运输任务的车辆标注
	function show_hideMarker(show_hide){
		setAsynchMarker();//重新刷新页面车辆标注
		if (markersArray && markersArray.length > 0) {
			//清除setInterval
			generalClearInterval();
			intervalId = window.setInterval("setAsynchMarker();",1000*60*timeInterval);
			if(show_hide == "show"){
				//展示车辆列表模块
				$("#sfq").accordion("select","车辆列表"); 
				for ( var i in markersArray) {
					markersArray[i].value.marker.show();
				}
			}
			if(show_hide == "hide"){
				//清除setInterval
				generalClearInterval();
				for ( var i in markersArray) {
					var clzt = markersArray[i].clzt;
					if(clzt == "empty"){
						markersArray[i].value.marker.hide();
					}
				}
			}
			if(show_hide == "wdwsj"){
				//清除setInterval
				generalClearInterval();
				for ( var i in markersArray) {
					var wdwsj = markersArray[i].wdwsj;
					if(wdwsj < gpsexpirelimit){
						markersArray[i].value.marker.hide();
					}
				}
			}
			if(show_hide == "kdwcl"){
				//清除setInterval
				generalClearInterval();
				for ( var i in markersArray) {
					var wdwsj = markersArray[i].wdwsj;
					if(wdwsj > gpsexpirelimit){
						markersArray[i].value.marker.hide();
					}
				}
			}
		}

	}
	//根据车牌号查询该车辆某个时间段轨迹；
	function getBycphGjcx(){
		$.messager.progress({title:"",msg:"",text:"正在查询中,请稍等......",interval:"300"});
		timeCounter = window.setTimeout(function(){//解决$.messager.progress执行顺序问题  
			getClgjcx();
           },5);
	}
	
	$(document).ready(function() {
		intervalId = window.setInterval("setAsynchMarker();",1000*60*timeInterval);
	});
	
	function onReset(from_id){
	    document.getElementById(from_id).reset();
    }
    
    function cydwGridQuery(){
    	var cydwmc = $("#cydwmc").val();
    	var sql = "&&dwmc~like~%" +cydwmc+"%";
    	sql = encodeURI(sql);
    	$('#flexTable_cydw').flexOptions({extParam : {"name" : "queryparamterss", "value" :sql }, query : sql}).flexReload();
    }
    
    //禁用Enter键表单自动提交  
    document.onkeydown = function(event) {  
        var target, code, tag;  
        if (!event) {  
            event = window.event; //针对ie浏览器  
            target = event.srcElement;  
            code = event.keyCode;  
            if (code == 13) {  
                tag = target.tagName;  
                if (tag == "TEXTAREA") { return true; }  
                else { return false; }  
            }  
        }  
        else {  
            target = event.target; //针对遵循w3c标准的浏览器，如Firefox  
            code = event.keyCode;  
            if (code == 13) {  
                tag = target.tagName;  
                if (tag == "INPUT") { return false; }  
                else { return true; }   
            }  
        }  
    };  
    //运输许可证预警查询
    function yszyjQuery(){
    	var cph_yszyj = $.trim($("#cph_yszyj").val());
    	var ysxkz_yszyj = $.trim($("#ysxkz_yszyj").val());
		var sql = "&&cph~like~%" +cph_yszyj+"%~yszbh~like~%"+ysxkz_yszyj+"%";
		sql = encodeURI(sql);
   		$('#flexTable_yszyj').flexOptions({extParam : {"name" : "queryparamterss", "value" :sql }, query : sql}).flexReload();
    }
    //显示按规定线路行驶运输证
    function showWagdlxxsysz(){
    	//$("#yszzt option[value='否']").attr("selected",true);
    	document.getElementById("yszzt")[2].selected=true;
    	$("#sfq").accordion("select","运输许可证列表"); 
    	getYsz();
    }
</script>
</head>
<body class="easyui-layout">
	<div region="east" split="true" title="信息汇总" style="width: 400px;">
		<div class="easyui-layout" fit="true" style="background: #ccc;">
			<div region="north" style="height: 160px;">
				<div id="gauser">
				<div id="sxyc">
					当前共有
					<a href="javascript:show_hideMarker('show');" style="color: red;" title="显示所有车辆"><font style="color: red;" size="4" id="mbysclsl"></font></a>辆民爆运输车辆，
					<br>
					其中
					<a href="javascript:show_hideMarker('kdwcl');" style="color: red;" title="显示可定位车辆"> <font
						style="color: red" size="4" id="kdwclsl"></font>
					</a>辆车辆可定位，
					<a href="javascript:show_hideMarker('wdwsj');" style="color: red;" title="显示所有未及时定位车辆">
						<font style="color: red" size="4" id="wjsdwclsl"></font>
					</a>
					辆车超过<%=SysConfigUtils.getProperty("gpsexpirelimit")%>分钟未定位。
					<br>
				</div>
				共开
				<font style="color: red" size="4" id="yszsl"></font>个运输许可证，
				<br>
				其中
				<a href="javascript:show_hideMarker('hide');" style="color: red;" title="点击显示所有可定位承运车辆"><font style="color: red"
					size="4" id="bsclcyyszsl"></font>
				</a>个运输许可证由本省车辆承运。
				<br>
				有<a href="javascript:showWagdlxxsysz();" title='展示结果在"运输许可证列表"中显示'><font style="color: red" size="4" id="yszyjsl"></font></a>个运输证涉及的车辆未按规定线路行驶。
				</div>
				<div id="dwuser" style="display: none;">
					共开
					<font style="color: red" size="4" id="dwyszsl"></font>个运输许可证，
					<br>
					其中
					<a href="javascript:show_hideMarker('hide');" style="color: red;" title="点击显示所有可定位承运车辆">
					<font style="color: red" size="4" id="dwyszbsclcysl">
					</font>
					</a>
					个运输许可证由本省车辆承运。
				</div>
				<font color="red">说明：</font>
				<img style="margin: 0px;padding: 0px;widows: 32px;height: 32px" src="images/jadlgis/position/truck_full_static.png"></img>正在执行运输任务车辆，
				<img style="margin: 0px;padding: 0px;widows: 32px;height: 32px" src="images/jadlgis/position/truck_empty_static.png"></img>未执行运输任务车辆，
				<br>闪烁代表车辆正在运行，红圈代表车辆超过<%=SysConfigUtils.getProperty("gpsexpirelimit")%>分钟未定位。
			</div>
			<div region="center" id="center">
				<div id="sfq" class="easyui-accordion" fit="true" >
					<div title="运输许可证列表" selected="true" style="overflow: auto;">
						<form id="ysz_from">
							<table border="0" cellpadding="1" cellspacing="1">
								<tr>
									<td align="right">
										运输许可证编号：
									</td>
									<td align="left">
										<input name="" type="text" id="ysz" size="16" title="运输许可证编号">
									</td>
								</tr>
								<tr>
									<td align="right">
										车牌号：
									</td>
									<td align="left">
										<input name="" type="text" id="ysz_cph" size="16" title="车牌号">
									</td>
								</tr>
								<tr>
									<td align="right">
										是否按规定路线行驶：
									</td>
									<td align="left">
										<select id="yszzt"  title="是否按规定路线行驶" >
											<option value="">--请选择--</option>
											<option value="是">是</option>
											<option value="否">否</option>
											<option value="正在执行运输任务">正在执行运输任务</option>
											<option value="车辆无法定位">车辆无法定位</option>
										</select>
									</td>
								</tr>
								<tr style="margin: 1px;">
									<td align="right">
										发证日期：
									</td>
									<td align="left">
										<input id="fzrqfrom_date" type="text" size="8" 
												name="fzrqfrom_date" alt="date;" title="发证日期查询起始日期"
												onFocus="WdatePicker({maxDate:'#F{$dp.$(\'fzrqto_date\').value||\'2020-10-01\'}',minDate: '#F{$dp.$D(\'fzrqto_date\',{y:-20});}',dateFmt:'yyyy-MM-dd'})" />
											至
										<input id="fzrqto_date"  type="text" size="8"
											name="fzrqto_date" alt="date;" title="发证日期查询截止日期"
											onFocus="WdatePicker({minDate:'#F{$dp.$(\'fzrqfrom_date\').value}',maxDate:'#F{$dp.$D(\'fzrqfrom_date\',{y:20});}',dateFmt:'yyyy-MM-dd'})" />
									</td>
								</tr>
								<tr>
									<td align="center" colspan="2">
										<br>
										<img style="cursor: pointer;"
											src="../dtgl/images/button/cx.gif" onclick="getYsz();"></img>
										&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/chongzhi.gif" onclick="document.forms.ysz_from.reset();"></img>
										&nbsp;&nbsp;
									</td>
								</tr>
							</table>
						</form>
						<table align="left" cellpadding="1" class="ListTableF" width="99%" title="双击回放运输许可证轨迹"
							id="flexTable_y"></table>
					</div>
					<!-- 
					<div title="运输许可证预警">
						<form id="yszyj_from">
							<table border="0" cellpadding="1" cellspacing="1">
								<tr>
									<td align="right">
										车牌号：
									</td>
									<td align="left">
										<input name="" type="text" id="cph_yszyj" size="18" title="车牌号">
									</td>
								</tr>
								<tr>
									<td align="right">
										运输许可证编号：
									</td>
									<td align="left">
										<input name="" type="text" id="ysxkz_yszyj" size="18" title="运输许可证编号">
									</td>
								</tr>
								<tr>
									<td align="center" colspan="2">
										<br>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/cx.gif" onclick="yszyjQuery();"></img>
										&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/chongzhi.gif" onclick="onReset('yszyj_from');"></img>
										&nbsp;&nbsp;
									</td>
								</tr>
							</table>
						</form>
						<table align="left" cellpadding="1" class="ListTableF" width="99%" 
							id="flexTable_yszyj"></table>
					</div>
						 -->
					<div title="车辆列表">
						<form id="cl_from">
							<table border="0" cellpadding="1" cellspacing="1">
								<tr>
									<td align="right">
										车牌号：
									</td>
									<td align="left">
										<input name="" type="text" id="cph_ysz" size="18" title="车牌号">
									</td>
								</tr>
								<tr>
									<td align="center" colspan="2">
										<br>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/cx.gif" onclick="query();"></img>
										&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/chongzhi.gif" onclick="onReset('cl_from');"></img>
										&nbsp;&nbsp;
									</td>
								</tr>
							</table>
						</form>
						<table align="left" cellpadding="1" class="ListTableF" width="99%" title="双击定位车辆位置"
							id="flexTable_c"></table>
					</div>
					<div title="承运单位">
						<form id="cydwForm">
						<table border="0" cellpadding="1" cellspacing="1">
								<tr>
									<td align="right">
										单位名称：
									</td>
									<td align="left">
										<input name="" type="text" id="cydwmc" size="18" title="单位名称">
									</td>
								</tr>
								<tr>
									<td align="center" colspan="2">
										<br>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/cx.gif" onclick="cydwGridQuery();"></img>
										&nbsp;&nbsp;
										<img style="cursor: pointer;"
											src="../dtgl/images/button/chongzhi.gif" onclick="onReset('cydwForm');"></img>
										&nbsp;&nbsp;
									</td>
								</tr>
							</table>
							</form>
						<table align="left" cellpadding="1" class="ListTableF" width="99%" title="双击定位车辆位置"
							id="flexTable_cydw"></table>
					</div>
					<div title="车辆轨迹">
						<form id="gj_from">
							<table border="0"  cellpadding="1" cellspacing="1">
								<tr>
									<td align="right">
										车牌号：
									</td>
									<td align="left">
										<input name="" type="text" id="cph"  size="15"
											title="车牌号">
									</td>
								</tr>
								<tr style="margin: 1px;">
									<td align="right">
										起止时间：
									</td>
									<td align="left">
										<input id="fromdate" type="text" size="15" 
												name="fromdate" alt="date;" title="起始日期"
												onFocus="WdatePicker({maxDate:'#F{$dp.$(\'enddate\').value||\'2020-10-01\'}',minDate: '#F{$dp.$D(\'enddate\',{H:-24});}',dateFmt:'yyyy-MM-dd HH:mm:ss'})" />
											至
										<input id="enddate"  type="text" size="15"
											name="enddate" alt="date;" title="截止日期"
											onFocus="WdatePicker({minDate:'#F{$dp.$(\'fromdate\').value}',maxDate:'#F{$dp.$D(\'fromdate\',{H:24});}',dateFmt:'yyyy-MM-dd HH:mm:ss'})" />
									</td>
								</tr>
								<tr>
									<td align="center"  colspan="2">
										<br>
										<img src="../dtgl/images/button/cx.gif" onclick="getBycphGjcx();"></img>
										&nbsp;&nbsp;
										<img src="../dtgl/images/button/chongzhi.gif" onclick="onReset('gj_from');"></img>
										&nbsp;&nbsp;
									</td>
								</tr>
								<tr>
									<td align="left" colspan="2">
										<br>
										<hr>
										<font color="red">说明：</font>车辆轨迹由实线与虚线组成，实线是车辆正常轨迹，虚线是因该段时间无法定位到车辆。
									</td>
								</tr>
							</table>
						</form>
					</div>
				</div>


			</div>
		</div>
	</div>
	<div region="center" style="overflow: hidden;">
		<div id="map_canvas"></div>
	</div>
</body>
</html>