<%@ page language="java" pageEncoding="GBK"%>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/taglib/struts-html.tld" prefix="html"%>
<%@ taglib uri="/WEB-INF/taglib/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib uri="jadlbean.tld" prefix="jadlbean"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<%@ include file="../include/meta.inc" %>
		<link rel="stylesheet" href="css/main.css" type="text/css"></link>
		<link rel="stylesheet" href="../dtgl/js/easyui/themes/default/easyui.css" type="text/css"></link>
		<link rel="stylesheet" href="../dtgl/js/easyui/themes/icon.css" type="text/css"></link>
		<script type="text/javascript" language="javascript" src="../dtgl/js/easyui/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" language="javascript" src="../dtgl/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="../dtgl/js/easyui/locale/easyui-lang-zh_CN.js"></script>

  </head>
  
  <body>
  	<center>
	<logic:iterate id="map" name="clbdyszxx">
	<table width="80%" border="0" cellspacing="0" cellpadding="0" class="table1">
	<colgroup style="width:27%" />
	<colgroup style="width:25%" />
	<colgroup style="width:25%" />
	<colgroup style="width:25%" />
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
	<tr>
		<td colspan="7" >
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
	</table>
		<hr  style="border-style:dashed;color: blue;size: 10;"></hr>
	</logic:iterate>
	</center>
  </body>
</html>
