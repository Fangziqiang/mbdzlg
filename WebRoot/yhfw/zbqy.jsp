<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib uri="jadlhtml.tld" prefix="jadlhtml"%>
<%@ taglib prefix="c" uri="/WEB-INF/taglib/c.tld"%>
<html>
	<head>
		<%@ include file="../include/meta.inc"%>
		<%--<meta http-equiv="X-UA-Compatible" content="IE=11;IE=10;IE=9;IE=8;IE=7;"/>
		--%><link href="../css/load.css" type="text/css" rel="stylesheet"></link>
	    <link href="../css/main1.css" type="text/css" rel="stylesheet"></link>
		<script type="text/javascript" src="../common/list.js"></script>
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript" src="../common/jquery.1.9.1.min.js"></script>
		<script type="text/javascript" >
		</script>
		
	</head>
	<body style="background-color: white;">
	    <div>
			<table class="mb-tm"  border="0" cellspacing="0" cellpadding="0">
				<tr class='becontroler' id='becontroler'>
					<td colspan="2">
						<table  class="mb-table" style="border-bottom:1px solid #96b5d2;" width="95%" border="0" cellspacing="0" cellpadding="0" id="datatable">
							<tr  class="mb-ta-head" align='center' style="border-top: 1px">
								<th class="borderline" >准爆区域经度</th>
								<th class="borderline" >准爆区域经度</th>
								<th class="borderline" >准爆区域纬度</th>
								<th class="borderline" >准爆区域半径</th>
								<th class="borderline" >准爆起始时间</th>
								<th class="borderline" >准爆截止时间</th>
							</tr>
							<c:forEach items="${zbqyList }" var="zbqy">
								<tr>
									<td>
										${zbqy.zbqymc }
									</td>
									<td>
										${zbqy.zbqyjd }
									</td>
									<td>
										${zbqy.zbqywd }
									</td>
									<td>
										${zbqy.zbqybj }
									</td>
									<td>
										${zbqy.zbqssj }
									</td>
									<td>
										${zbqy.zbjzsj }
									</td>
								</tr>
							</c:forEach>
							
						</table>
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>