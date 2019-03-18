<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="jadllogic" uri="jadllogic.tld"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%
	String msg = (String)request.getSession().getAttribute("successPageMsg");
	if (msg == null || msg.equals("")) {
		msg = "无提示信息。";
	}
%>
<!doctype html>
<html>
	<head>
		<%@ include file="../include/title.inc"%>
		<%@ include file="../include/meta.inc"%>
		<%@ include file="../exit.jsp"%>
		<link type="text/css" rel="stylesheet"
			href="${pageContext.request.contextPath}/css/style.css">
		<link type="text/css" rel="stylesheet"
			href="${pageContext.request.contextPath}/css/form.css">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/jquery-1.6.2.min.js"></script>
		<script type="text/javascript" src="../common/list.js"></script>
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript" src="../common/maxpage.js"></script>
		<style type="text/css">
.commsucc a:hover {
	color: #0099CC;
	text-decoration: underline;
}

.commsucc a {
	color: #0099CC;
	text-decoration: none;
}
</style>
		<script type="text/javascript">
			function init_(){
				window.history.forward(1);
			}
			function backtrack (url, target) {
				var w = screen.availWidth;
				var h = screen.availHeight;
				//url = encodeURI(url); // 不对&符号进行转码，encodeURIComponent：对&进行转码
				if (target == "_top") {
					
				}else if (target == "_blank") {
					window.open(url, "", "width=" + w + "px, height=" + h + "px, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
				}else if(target == "_self"){
					document.location.href = url;
				}
			}
			
			//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
			function banBackSpace(e){
				var ev = e || window.event;//获取event对象
				var obj = ev.target || ev.srcElement;//获取事件源
				
				var t = obj.type || obj.getAttribute('type');//获取事件源类型
				
				//获取作为判断条件的事件类型
				var vReadOnly = obj.getAttribute('readonly');
				var vEnabled = obj.getAttribute('enabled');
				//处理null值情况
				vReadOnly = (vReadOnly == null) ? false : vReadOnly;
				vEnabled = (vEnabled == null) ? true : vEnabled;
				
				//当敲Backspace键时，事件源类型为密码或单行、多行文本的，
				//并且readonly属性为true或enabled属性为false的，则退格键失效
				var flag1=(ev.keyCode == 8 && (t=="password" || t=="text" || t=="textarea")
				&& (vReadOnly==true || vEnabled!=true))?true:false; 
				
				//当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效 
				var flag2=(ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea")?true:false; 
				
				//判断 
				if(flag2){ 
					return false; 
				}
				if(flag1){ 
					return false; 
				}
			} 
			
			//禁止后退键 作用于Firefox、Opera 
			document.onkeypress=banBackSpace; 
			//禁止后退键 作用于IE、Chrome 
			document.onkeydown=banBackSpace;
			function refresh() {
			   window.opener.location.href=window.opener.location.href;
			   window.close(); 
			} 
		</script>
	</head>
	<body onload="javascript:init_();" onunload="refresh()">
		<%@ include file="../index/top.jsp"%>
		<div class="mainBox" style="padding-bottom: 20px">
			<%@ include file="../include/navigation.jsp"%>
			<script>setNavifation('提示信息','操作结果')</script>
			<div class="main"
				style="height: 280px; border-bottom: 1px solid #ddd; border-top: 1px solid #ddd;">
				<!--操作结果-->
				<table class="div_table " style="margin-top: 70px">
					<tr>
						<td rowspan="2" align="right" width="37%">
							<c:if test="${resultType == 'success'}">
							<img src="../images/success.png">
							</c:if>
							<c:if test="${resultType != 'success'}">
							<img src="../images/fail.png">
							</c:if>
						</td>

						<td align="left" width="60%" style="padding-left: 30px">
							<span style="font-size: 24px; color:#292929; font-weight: bold;"><%=msg%></span>
						</td>
					</tr>
					<tr>

						<td align="left" width="60%" style="padding-left: 30px"
							class="commsucc">
							您可能需要：

							<s:iterator id="map" value="#session.successPageMsUrl">
								<a href="javascript:void(0)" style="font-size: 14px;"
									onclick="backtrack('${map.url}', '${map.target}')">
									${map.ms}</a>
										&nbsp;&nbsp;
								</s:iterator>

						</td>
					</tr>
				</table>
				<!--todoList-->
				<table class="div_table">
					<tr style="height: 60px">
						<td align="center" valign="middle" style="border-top-width: 0px;">

						</td>
					</tr>
				</table>
				<div align="center" style="display: none">
					<input name="" type="button" value="关闭"
						style="background-color: #ff6700" class="btn_blue button"
						onclick="window.close();" />
				</div>
			</div>

			<form name="searchForm" action="" method="post">
				<input type="hidden" name="queryparamter" />
				<input type="hidden" name="queryparamtername" />
			</form>
		</div>
	</body>
</html>
