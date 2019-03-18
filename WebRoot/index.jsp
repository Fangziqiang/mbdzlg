<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="gbk"%>
<%@ taglib uri="/struts-tags" prefix="s"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>民爆电子雷管通信中心</title>
	<link href="css/reset_front.css" rel="stylesheet" type="text/css" />
	<link href="css/font_front.css" rel="stylesheet" type="text/css" />
	<link href="css/style_front.css" rel="stylesheet" type="text/css" />
	<link href="css/sidebar_front.css" rel="stylesheet" type="text/css" />
	<link type="text/css" rel="stylesheet" href="css/login_front.css" />
	<link type="text/css" rel="stylesheet" href="css/qrcode.css" />
	<script type="text/javascript" src="js/respond.js"></script>
	<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="js/common_front.js"></script>
	<script type="text/javascript" src="xtgl/js/register.js"></script>
	<script type="text/javascript" src="xtgl/js/user.js"></script>
	<script type="text/javascript" src="common/cookieUtils.js"></script>
	<script type="text/javascript" src="js/StringUtils.js"></script>

<script type="text/javascript">
	
	$(function() {
		//页面加载后，将光标定位在用户名输入框
		$("input[name=username]").focus();
		//为验证码输入框绑定键盘事件，提交表单
		
		$(document).keyup(function(event){
		  if(event.keyCode ==13){
			  checkParameter();
		  }
		});
	});
	
	function checkParameter(){
		
		var username = $("#username").val();
		if(username == ""){
			alert("请输入用户名");
			$("#username").focus();
			return false;
		}
		var password = $("#password").val();
		if(password == ""){
			alert("请输入密码");
			$("#password").focus();
			return false;
		}
		document.forms[0].submit();
		
	}
	
</script>
</head>
<body style="background: #0354a5">
	<div class="detail_logo_bg"></div>
		<!--conterBox s-->
		<div class="contentBox">
			<div class="content">
				<div class="login_banner">
					<img src="">
				</div>
				<div class="reg-inner login">
					<h2>
						欢迎登录
					</h2>
					<form action="${pageContext.request.contextPath}/login/loginAction_login.action" id="LoginForm"
						name="LoginForm" method="post">
						<ol>
							<li>
								<input type="text" class="input" placeholder="请输入用户名"
									target="userName" id="username" name="username" value="" />
								<span class="icon"><img src="images/user.png" />
								</span>
								<span class="errorinfo" target="userName" style="display: none;">请输入用户名</span>
							</li>
							<li>
								<input type="password" class="input" placeholder="请输入密码"
									target="userPass" id="password" name="password" value="" />
								<span class="icon"><img src="images/lock.png" />
								</span>
								<span class="errorinfo" target="userPass" style="display: none;">请输入您的密码</span>
							</li>
							<li style="margin-top: 10px;">
								<input type="button" name="checkcode" id="imageField" onclick="checkParameter();"
									value="登录" class="refer" />
							</li>
						</ol>
					</form>
				</div>


			</div>
		</div>
	
</body>
</html>