<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="gbk"%>
<%@ taglib uri="/WEB-INF/taglib/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/taglib/struts-html.tld" prefix="html"%>
<%@ taglib uri="/WEB-INF/taglib/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib prefix="c" uri="/WEB-INF/taglib/c.tld"%>
<%@ include file="../include/head.inc"%>
<head>

<%@ include file="../include/meta.inc"%>
<link href="../css/load.css" type="text/css" rel="stylesheet"/>
		<link href="../css/main1.css" type="text/css" rel="stylesheet"/>
	    <script type="text/javascript" src="../common/tip.js"></script>
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript" src="../common/list.js"></script>
		<script type="text/javascript" src="../common/queryUtils.js"></script>
		<script type="text/javascript" src="../common/xwin.js"></script>
		<script type="text/javascript" src="../common/searchUtils.js"></script>
		<script type="text/javascript" src="../common/jquery.1.9.1.min.js"></script>
		<script type="text/javascript" src="../common/validate.js"></script>
		<script type="text/javascript" src="../yhfw/layer/layer.js"></script>
<script type="text/javascript">
	function layerIframe(lgxx,cxsj){
		var url = "${pageContext.request.contextPath}/yhfw/yhfwAction_skipLgxx.action?lgxx="+lgxx+"&cxsj="+cxsj;
		layer.open({
			  type: 2 ,
			  area: ['400px', '500px'],
			  title: '雷管信息',
			  shadeClose : true,
			  content: url
		}); 
		
	}
</script>


</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
	<div class="bmain" style="">
		<div class="j10"></div>
		<table rules="none" id="zxxztable"  class="mb-table" width="100%" style="border-bottom:1px solid #96b5d2;margin-top: 50px" border="0" cellspacing="0" cellpadding="0" id="datatable" >
			<tr class="mb-ta-head" align='center'>
				<th class="borderline">单位代码</th>
				<th class="borderline">合同id</th>
				<th class="borderline">项目编号</th>
				<th class="borderline">起爆器</th>
				<th class="borderline">经度</th>
				<th class="borderline">纬度</th>
				<th class="borderline">爆破时间</th>
				<th class="borderline">爆破员身份证</th>
				<th class="borderline">箱条码</th>
				<th class="borderline">盒条码</th>
				<th class="borderline">发编号</th>
				<th class="borderline">发编号</th>
			</tr>
			<tr align="center">
				<td>
               		${qqcs.dwdm }
               	</td>
              	<td>
            		${qqcs.htid }
               	</td>
              	<td>
               		${qqcs.xmbh }
               	</td>
               	<td>
               		${qqcs.qbqbh }
               	</td>
              	<td>
               		${qqcs.jd }
               	</td>
              	
              	<td>
               		${qqcs.wd }
               	</td>
              	
              	<td>
               		${qqcs.bpsj }
               	</td>
              	<td>
               		${qqcs.bprysfz }
               	</td>
              	<td>
              		<c:if test="${qqcs.xtms != 0}">
              			<a href="javascript:void(0)" onclick="layerIframe('xtmList','qqcs');">
              				${qqcs.xtms }
	              		</a>
              		</c:if>
              		<c:if test="${qqcs.xtms == 0}">
              				0
              		</c:if>
               	</td>
              	<td>
              		<c:if test="${qqcs.htms != 0}">
              			<a href="javascript:void(0)" onclick="layerIframe('htmList','qqcs');">
              				${qqcs.htms }
	              		</a>
              		</c:if>
              		<c:if test="${qqcs.htms == 0}">
              			0
              		</c:if>
               		
               	</td>
               	<td>
              		<c:if test="${qqcs.fbhs != 0}">
              			<a href="javascript:void(0)" onclick="layerIframe('fbhList','qqcs');">
              				${qqcs.fbhs}
	              		</a>
              		</c:if>
              		<c:if test="${qqcs.fbhs == 0}">
              				0
              		</c:if>
               	</td>
               	<td>
              		<c:if test="${qqcs.uids != 0}">
              			<a href="javascript:void(0)" onclick="layerIframe('uidList','qqcs');">
              				${qqcs.uids }
	              		</a>
              		</c:if>
              		<c:if test="${qqcs.uids == 0}">
              			0
              		</c:if>
               		
               	</td>
			</tr>
		</table>
	</div>
	
</body>					
	
