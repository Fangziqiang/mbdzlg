<%@ page language="java" pageEncoding="GBK"%>
<%@page import="java.util.List"%>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/taglib/struts-html.tld" prefix="html"%>
<%@ taglib uri="/WEB-INF/taglib/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib uri="jadlbean.tld" prefix="jadlbean"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<%@ include file="../include/meta.inc" %>
		<link rel="stylesheet" href="../dtgl/js/easyui/themes/default/easyui.css" type="text/css"></link>
		<link rel="stylesheet" href="../dtgl/js/easyui/themes/icon.css" type="text/css"></link>
		<script type="text/javascript" language="javascript" src="../dtgl/js/easyui/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" language="javascript" src="../dtgl/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="../dtgl/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<style>
	<!--
	#bg2 {
		left: 0pt;
		top: 0pt;
		width: 31px;
		height: 31px;
		background-color: gray;
		z-index: 98;
		-moz-opacity: 0.1;
		opacity: .10;
		filter: alpha(opacity =           90);
		border: 0;
	}
	-->
</style>
	<link rel="stylesheet" href="css/main.css" type="text/css"></link>
	</head>
	<body id="saveLoad"> 
		<table align="center" cellspacing="0px" cellpadding="0px" border="0"
			width="100%"
			style="font-size: 12px; color: #333333; vertical-align: top;">
			<tr>
				<td>
					<table width="100%" border="0" 
						style="font-size: 12px; color: #333333;">
						<tr align="left">
							<td align="left">
								
							</td>
							<td align="right" rowspan="6">
								<img src="images/truck/empty.png"></img>
							</td>
						</tr>
						<tr align="left">
							<td align="left" colspan="2">
								车牌号： ${requestScope.clxx[0].cph}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								所属单位： ${requestScope.clxx[0].ssdw}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								单位资质证明编号： ${requestScope.clxx[0].dwzzzmbh}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								单位负责人： ${requestScope.clxx[0].dwfzr}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								单位负责人联系电话： ${requestScope.clxx[0].dwfzrlxdh}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								经纬度： ${requestScope.clxx[0].coordy}&nbsp;&nbsp;${requestScope.clxx[0].coordx}
							</td>
						</tr>
						<tr>
							<td align="left" colspan="2">
								当前所在行政区域： ${requestScope.clxx[0].mc}
							</td>
						</tr>
						<logic:notEmpty name="clbdyszxx">
						<tr>
							<td colspan="2">
								<table class="table1">
									<tr>
								<td align="center" class="line_r_t">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<colgroup style="width:27%" />
									<colgroup style="width:25%" />
									<colgroup style="width:25%" />
									<colgroup style="width:25%" />
									<logic:iterate id="map" name="clbdyszxx" indexId="count">
									<logic:equal value="0" name="count">
									<tr>
										<td class="line_b_r" align="right">运输许可证编号：</td>
										<td class="line_b_r"><bean:write name="map" property="yszbh"/>
										(<font color="red"><bean:write name="map" property="flag"/></font>)
										</td>
										<td class="line_b_r" align="right">发证日期：</td>
										<td class="line_b"><bean:write name="map" property="fzrq"/>&nbsp;</td>
									</tr>
									<tr>
										<td class="line_b_r" align="right">驾驶员：</td>
										<td class="line_b_r"><bean:write name="map" property="jsy"/></td>
										<td class="line_b_r" align="right">资格证编号：</td>
										<td class="line_b"><bean:write name="map" property="jsyzgzbh"/>&nbsp;</td>
									</tr>
									<tr>
										<td class="line_b_r" align="right">驾驶员联系电话：</td>
										<td colspan="3" class="line_b"><bean:write name="map" property="cydwjsylxdh"/></td>
									</tr>
									<tr>
										<td class="line_b_r" align="right">押运员：</td>
										<td class="line_b_r"><bean:write name="map" property="yyy"/></td>
										<td class="line_b_r" align="right">资格证编号：</td>
										<td class="line_b"><bean:write name="map" property="yyyzgzbh"/>&nbsp;</td>
									</tr>
									<tr>
										<td class="line_b_r" align="right">押运员联系电话：</td>
										<td colspan="3" class="line_b"><bean:write name="map" property="cydwyyylxdh"/>&nbsp;</td>
									</tr>
									<tr>
										<td class="line_b_r" align="right">起运地：</td>
										<td class="line_b_r"><bean:write name="map" property="qyd"/></td>
										<td class="line_b_r" align="right">运达地：</td>
										<td class="line_b"><bean:write name="map" property="ddd"/></td>
									</tr>
									<logic:notEmpty name="map" property="wpxx">
									<tr>
										<td colspan="7">
											<table  class="table2" width="100%" border="0" cellspacing="0" cellpadding="0">
												<colgroup style="width:50%" />
												<colgroup style="width:50%" />
												<tr  class="TableContent">
													<td class="line_b_r">
														<b> 装载货物 </b>
													</td>
													<td class="line_b">
														<b>货物数量</b>
													</td>
												</tr>
												<logic:iterate  id="wpmap"  name="map" property="wpxx">
												<tr >
													<td class="line_b_r_t">
														<bean:write name="wpmap" property="wpmc"/>
													</td>
													<td class="line_b_t">
														<bean:write name="wpmap" property="sl"/>
													</td>
												</tr>
												</logic:iterate>
											</table>
										</td>
									</tr>
									</logic:notEmpty>
									</logic:equal>
									</logic:iterate>
								</table>
							</td>
						</tr>
								</table>
							</td>
						</tr>
									</logic:notEmpty>
						
					</table>
					<%
						List clbdyszxx = (List)request.getAttribute("clbdyszxx");
						String cph = (String)request.getAttribute("cph");
						String yszbh = (String)request.getAttribute("yszbh");
							if(clbdyszxx.size() > 1){
							%>
								<a href="JavaScript:showYszxx();" style="color: blue;cursor: pointer;">显示更多承运运输证信息</a>
							<%
							}
					%>
					

	</body>
	<script>
		function showYszxx(){
			var url = "../dtgl/cldw.do?method=getClxx&cph=<%=cph %>&yszbh=<%=yszbh %>&flag=yszxx";
			window.open(url,'车辆承运输许可证列表','height=768, width=1024 , toolbar=yes,left=0 ,right=0 , menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes');
		}
	</script>
</html>
