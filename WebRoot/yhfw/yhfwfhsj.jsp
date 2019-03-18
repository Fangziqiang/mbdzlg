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
	function layerIframe(fhxx){
		var url = "${pageContext.request.contextPath}/yhfw/yhfwAction_findFhxx.action?fhxx="+fhxx;
		layer.open({
			  type: 2 ,
			  area: ['700px', '400px'],
			  title: '返回信息',
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
				<th class="borderline">起爆器</th>
				<th class="borderline">准爆区域</th>
				<th class="borderline">禁爆区域</th>
				<th class="borderline">雷管</th>
				<th class="borderline">返回结果</th>
			</tr>
			<tr align="center">
				<td>
               		${fhsj.qbqbh }
               	</td>
              	<td>
              		<c:if test="${ not empty fhsj.zbqy  }">
              			<a href="javascript:void(0)" onclick="layerIframe('zbqy');">
                   			查看
                   		</a>
              		</c:if>
               	</td>
              	<td>
               		<c:if test="${ not empty fhsj.jbqy  }">
              			<a href="javascript:void(0)" onclick="layerIframe('jbqy');">
                   			查看
                   		</a>
              		</c:if>
               	</td>
               	<td>
               		<c:if test="${ not empty fhsj.lgs  }">
              			<a href="javascript:void(0)" onclick="layerIframe('lg');">
                   			${ fhsj.lgs  }
                   		</a>
              		</c:if>
              		<c:if test="${ empty fhsj.lgs  }">
              			0
              		</c:if>
               	</td>
              	<td>
               		${ fhsj.fhjg  }
               	</td>
              	
			</tr>
		</table>
	</div>
</body>					
	
