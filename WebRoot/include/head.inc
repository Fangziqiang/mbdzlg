<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<meta http-equiv="Cache-Control" content="no-store"/>
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE6" />

<%
	response.addHeader("Pragma", "No-cache");
	response.addHeader("Cache-Control", "no-cache");
	response.setHeader("Cache-Control", "no-store");
	response.setDateHeader("Expires",-10);
	response.setHeader("Pragma", "no-cache");
	response.setHeader("X-UA-Compatible","IE=EmulateIE6");
%>

<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css"/>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/form.css"/>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/form_ms.css"/>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/qrcode.css"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/list.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/common.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/queryUtils.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/searchUtils.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/WdatePicker.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/WdateTimePicker.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/xwin.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/validate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/tableManager.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/dataManager.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/ajaxUtil.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/common/cookieUtils.js"></script>

