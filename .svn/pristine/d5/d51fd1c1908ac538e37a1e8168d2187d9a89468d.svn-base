<%@ page language="java" contentType="text/html;charset=UTF-8" isErrorPage="true"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
	<head>
		<title>错误信息显示页</title>
		<%@ include file="../include/meta.inc"%>
		<link href="../newcss/style.css" rel="stylesheet" type="text/css" />
		<link href="../newcss/add.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript">
			function rePost () {
				document.forms[0].action = "<%= basePath %>";
				document.forms[0].submit();
			}
		</script>
	</head>
	<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
		<form action="#" method="post">
			
			<table width="100%" height="80%" border="0" cellspacing="0"  cellpadding="8">
				<tr>
					<td align="center" valign="middle"><span style="font-size:15px;font-weight:bold;">
					
						<c:if test="${jadlError != null &&  jadlError != ''}">
								${jadlError}
						</c:if>
						<c:if test="${jadlError == null || jadlError == ''}">
							 系统出现异常，请与管理员联系...
						</c:if>
					</span>
					</td>
				</tr>
				<tr height="60%">
					<td align="center" valign="top">
						<input type="button" onclick="history.back()" value="返&nbsp;回" class="Button_Silver">
						<input type="button" onclick="rePost()" value="重新登入" class="Button_Silver">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>
