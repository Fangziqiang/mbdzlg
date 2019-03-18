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
								<th class="borderline" >雷管uid</th>
								<th class="borderline" >雷管fbh</th>
								<th class="borderline" >雷管状态</th>
							</tr>
							<c:forEach items="${lgList }" var="lgxx">
								<tr>
									<td>
										${lgxx.uid }
									</td>
									<td>
										${lgxx.fbh }
									</td>
									<td>
										<c:if test="${lgxx.gzmcwxx == 0}">
											正常
										</c:if>
										<c:if test="${lgxx.gzmcwxx == ''}">
											正常
										</c:if>
										<c:if test="${lgxx.gzmcwxx == 1}">
											黑名单
										</c:if>
										<c:if test="${lgxx.gzmcwxx == 2}">
											已使用
										</c:if>
										<c:if test="${lgxx.gzmcwxx == 3}">
											不存在
										</c:if>
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