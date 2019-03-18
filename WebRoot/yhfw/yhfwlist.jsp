<!DOCTYPE html>
<%@ page import="com.jadlsoft.utils.MBDZLGConstant"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="gbk" %> 
<%@ taglib uri="/WEB-INF/taglib/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/taglib/struts-html.tld" prefix="html"%>
<%@ taglib uri="/WEB-INF/taglib/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib prefix="c" uri="/WEB-INF/taglib/c.tld"%>
<%@ include file="../include/head.inc"%>
<%
	int httpwzsb = MBDZLGConstant.DATATYPE_HTTP_QBQWZSB;
%>
<head>

<%@ include file="../include/meta.inc"%>
<link href="../css/load.css" type="text/css" rel="stylesheet"/>
		<link href="../css/main1.css" type="text/css" rel="stylesheet"/>
		<link rel="stylesheet" href="/common/calendar/skin/WdatePicker.css" type="text/css"></link>
		<script type="text/javascript" src="../common/calendar/WdatePicker.js"></script>
	    <script type="text/javascript" src="../common/tip.js"></script>
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript" src="../common/list.js"></script>
		<script type="text/javascript" src="../common/queryUtils.js"></script>
		<script type="text/javascript" src="../common/searchUtils.js"></script>
		<script type="text/javascript" src="../common/WdatePicker.js"></script>
		<script type="text/javascript" src="../common/validate.js"></script>
<script type="text/javascript">
	function changeQqlx(){
		document.getElementById("qqlx").options.length=0;
		var qqlx = $("#qqfs").val();
		if(qqlx == 'socket'){
			$("#qqlx").prepend("<option value=''>请选择</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>+"'>更新规则</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>+"'>位置上报</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>+"'>使用上报</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>+"'>离线下载(复式)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>+"'>离线下载(简式)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>+"'>在线下载(复式)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>+"'>在线下载(简式)</option>");
		}
		if(qqlx == 'http'){
			$("#qqlx").prepend("<option value=''>请选择</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>+"'>更新规则</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>+"'>位置上报</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>+"'>使用上报</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>+"'>离线下载</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>+"'>在线下载</option>");
		}
		if(qqlx = null || qqlx == ''){
			$("#qqlx").prepend("<option value=''>请选择</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>+"'>更新规则(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>+"'>位置上报(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>+"'>使用上报(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>+"'>离线下载(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>+"'>在线下载(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>+"'>更新规则(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>+"'>位置上报(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>+"'>使用上报(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>+"'>离线下载(复式)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>+"'>离线下载(简式)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>+"'>在线下载(复式)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>+"'>在线下载(简式)(socket)</option>");
		}
	}
	function skipyhfwlist(){
		window.location.href ="${pageContext.request.contextPath }/yhfw/yhfwAction_skipyhfwyquery.action";
	}
	function checkparamter(){
		var fields=new Array("qqfs**","qqlx**","qbqbh**","qqsj#","dwdm**","htid**","xmbh**");
		getparamter(fields, "queryparamter", "queryparamtername");
		document.forms[0].submit();
		return true;
	}
	function findQqcsxx(id){
		window.location.href = "${pageContext.request.contextPath }/yhfw/yhfwAction_skipQqcsXxxx.action?id="+id;
	}
	function findFhsjxx(id){
		window.location.href = "${pageContext.request.contextPath }/yhfw/yhfwAction_skipFhsjXxxx.action?id="+id;
	}
</script>


</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"
	onload="initSearchConditions();">
	<div class="bmain">
		<div class="j10"></div>
		<!-- 查询 -->
		<form action="${pageContext.request.contextPath }/yhfw/yhfwlist.action" method="post">
		<input type="hidden" id="queryparamter" name="queryparamter" value="${queryparamter}" />
		<input type="hidden" id="queryparamtername" name="queryparamtername" value="${queryparamtername}" />
		<table  border="0" cellpadding="0" cellspacing="0" class="mb-tm" >
			<tr id="barId">
				<td class="boxtop rbox-pos rbox-imgb" id="baseInfo_title">
                    <div class="htx otxx"><b>用户访问查询</b></div>
                    <div class="boxtop-lt"></div>
                    <div class="boxtop-rt"></div>
				</td>
			</tr>		
			<tr id='tip_tr'>
				<td colspan="2">
					<table  class="mb-table" style="border-bottom:1px solid #96b5d2;" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">请求方式:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<select name="qqfs"  id="qqfs" title="请求方式" onchange="changeQqlx();">
				            		<option value="">请选择</option>
				            		<option value="http">http</option>
				            		<option value="socket">socket</option>
					         </select>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">请求类型:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<select name="qqlx"  id="qqlx" title="访问接口" >
				            		<option value="">请选择</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>">更新规则(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>">位置上报(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>">使用上报(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>">在线下载(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>">离线下载(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>">更新规则(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>">位置上报(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>">使用上报(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>">离线下载(复式)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>">离线下载(简式)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>">在线下载(复式)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>">在线下载(简式)(socket)</option>
					         </select>
						</td>
						
					</tr>
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">单位代码:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="dwdm" id="dwdm" title="单位"/>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">起爆器编号:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="qbqbh" id="qbqbh" title="起爆器编号"/>
						</td>
						
					</tr>
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">合同:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="htid" id="htid" title="合同"/>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">项目:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="xmbh" id="xmbh" title="项目"/>
						</td>
						
					</tr>
					
					<tr>
						
						<td class="tab-tr tdbgcolor" align="right">访问时间:</td>
				        <td class="td-mild" >
				     	<input  id="qqsjfrom_date" name="qqsjfrom_date" title="访问起始时间" readonly="readonly"  class="s_input_date" 
						onfocus="WdatePicker({maxDate:'#F{$dp.$(\'qqsjto_date\').value||\'2020-10-01\'}'})"/>
						&nbsp;至&nbsp;
						<input  id="qqsjto_date" name="qqsjto_date"  title="访问截止时间" readonly="readonly" class="s_input_date" 
						onfocus="WdatePicker({minDate:'#F{$dp.$(\'qqsjfrom_date\').value}',maxDate:'2020-10-01'})"/>
				        </td>
				        
				     </tr>
				</table>
				
				<table id="buttonTable" width="100%" border="0" cellpadding="2" cellspacing="0">
					<tr height="50">
						
						<td align="center" colspan="6">
							<input type="button" class="submit_btn" style="cursor:hand;" value="查询" onclick="checkparamter()"/>
							<input type="reset" class="submit_btn" style="cursor:hand;" value="重填"/>
						</td>
						
					</tr>
				</table>
				
			</tr>	
		</table>
		</form>
		<!-- list -->
		<div class="j10"></div>
		<input type="hidden" id="queryparamter" name="queryparamter" value="${queryparamter}" />
		<input type="hidden" id="queryparamtername" name="queryparamtername" value="${queryparamtername}" />
		<table border="0" cellpadding="0" cellspacing="0" class="mb-tm" >
			<tr id="barId">
				<td class="boxtop rbox-pos rbox-imgb" id="baseInfo_title">
                    <div class="htx otxx"><b>用户访问列表</b></div>
                    <div class="boxtop-lt"></div>
                    <div class="boxtop-rt"></div>
				</td>
			</tr>		
			<tr id='tip_tr'>
				<td >
				<div  id='tjId' style="font-size:12px; font-family:Arial, Helvetica, sans-serif;border-left:1px solid #96b5d2;border-right: 1px solid #96b5d2; ">
					<script></script>
				</div>
				<%--<div align="left" onclick="skipyhfwlist()">查询</div>
					--%><table rules="none" class="mb-table" width="100%" style="border-bottom:1px solid #96b5d2;" border="0" cellspacing="0" cellpadding="0" id="datatable">
						<tr class="mb-ta-head" align='center'>
							<th class="borderline">序号</th>
							<th class="borderline">请求方式</th>
							<th class="borderline">请求类型</th>
							<th class="borderline">单位代码</th>
							<th class="borderline">访问区域</th>
							<th class="borderline">访问时间</th>
							<th class="borderline">起爆器</th>
							<th class="borderline">合同id</th>
							<th class="borderline">项目编号</th>
							<th class="borderline">请求参数</th>
							<th class="borderline">返回数据</th>
						</tr>
						<logic:present name="list">
							<logic:iterate id="map" name="list" indexId="index">
								<tr align="center">
									<td>
	                              		${index+1}
	                              	</td>
									<td>
	                              		${map.qqfs }
	                              	</td>
	                             	<td>
	                             		<c:if test="${map.qqlx == 7}">
	                             			密码在线下载（简式）
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 1}">
	                             			密码在线下载（复式）
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 19}">
	                             			密码离线下载（简式）
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 3}">
	                             			密码离线下载（复式）
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 5}">
	                             			更新准爆、禁爆规则
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 9}">
	                             			起爆器位置上报
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 17}">
	                             			使用信息上报
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 21}">
	                             			密码在线下载
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 22}">
	                             			密码离线下载
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 23}">
	                             			起爆器位置上报
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 24}">
	                             			使用信息上报
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 25}">
	                             			更新规则
	                             		</c:if>
	                              	</td>
	                              	<td>
	                              		${map.dwdm }
	                              	</td>
	                             	<td>
	                              		${map.xzqh }
	                              	</td>
	                             	
	                             	<td>
	                              		${map.qqsj }
	                              	</td>
	                             	
	                             	<td>
	                              		${map.qbqbh }
	                              	</td>
	                             	<td>
	                              		${map.htid }
	                              	</td>
	                             	<td>
	                              		${map.xmbh }
	                              	</td>
	                             	<td>
	                             		<a href="javascript:void(0)" onclick="findQqcsxx('${map.id}');">
			                             	查看
	                             		</a>
	                              	</td>
	                             	<td>
	                             		<a href="javascript:void(0)" onclick="findFhsjxx('${map.id}','${map.qqfs }');">
	                             			查看
	                             		</a>
	                             		
	                              	</td>
								</tr>
							</logic:iterate>
						</logic:present>								
					</table>
				
				<form name="research" method="post" action="">
					<input type="hidden" name="queryparamtername" value="<bean:write name='queryparamtername'/>"/>
				</form>
			</td>	
			</tr>
		</table>
		<!--分页-->
			<div><%@ include file="../include/page.inc"%></div>
		
	</div>
</body>					
	
