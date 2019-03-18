<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@	page import="com.core.struts.action.login.UserUtils"%>
<%@	page import="com.jadlsoft.model.session.UserSessionBean"%>
<%@ page import="com.jadlsoft.utils.Constants"%>
<%@page import="java.util.List"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="adapter" uri="adapterfronttags"%>
<%
	 UserSessionBean user = (UserSessionBean) request
			.getSession().getAttribute(UserUtils.USER_SESSION); 

%>
<html>
<head>
<%@ include file="../include/head.inc"%>
<script type="text/javascript">
	function changeSecondColomn(link,menuCode){
		setCookie("menuCode",menuCode,24,"/");
		window.location = link;
	}


 
	var role_gly = '<%=Constants.ROLE_GLY %>';
	$(function(){
		
		//当企业管理员登陆时进行购物车和订单数量的获取
		if('${sessionScope.MBCP_USER_SESSION.roleId}'== role_gly){
		
			if($("#cartNum").length > 0){
				showCartNum();
			}
		  
			//if($("#orderNum").length > 0){
			//	showOrderNum();
			//}
			
		}
	});

	//显示购物车数量
	function showCartNum(){
		$.ajax({
			type : "post",
			url : "${pageContext.request.contextPath}/yfw/service_getCartNum.action",
			async : true,
			success : function(msg) {
				$("#cartNum").text(msg);
				$("#cartnum").text(msg);
			}
		});
	}
	
	//显示我的订单数量
	function showOrderNum(){
		$.ajax({
			type : "post",
			url : "${pageContext.request.contextPath}/yfw/service_getOrderNum.action",
			async : true,
			success : function(msg) {
				$("#orderNum").text(msg);
			}
		});
	}
</script>
</head>
<body>
	<div class="topBox">
		<div class="top w">
			<div class="login fl">
				<p>
					欢迎，<span >${session.MBCP_USER_SESSION.userName}</span>
				</p>
				&nbsp;
				<s:if test="#session.MBCP_USER_SESSION.yxjzrq != null">
                        &nbsp;&nbsp;到期时间：<s:date name="#session.MBCP_USER_SESSION.yxjzrq" format="yyyy-MM-dd" />
				</s:if>
			</div>
			<div class="topRight fr">
			
				<a onclick="getCarMessage()" style="display: none" id="lbid">小喇叭</a>
				
				<span class="li_spacing"></span>
				<a href="${pageContext.request.contextPath}/xtgl/user_pswEdit.action">个人中心</a>
				<c:if test="${sessionScope.MBCP_USER_SESSION.roleId == 1}">
					<span class="li_spacing"></span>
					<img src="${pageContext.request.contextPath}/images/cart_icon_01.png">
					<a href="${pageContext.request.contextPath}/cpcg/cart_myCart.action">
						购物车(<span class="number" id="cartNum">0</span>)
					</a>
					<span class="li_spacing"></span>
					<a href="${pageContext.request.contextPath}/cpcg/myOrderslist.action">
						我的订单
					</a>
	
				</c:if>
				<c:if test="${sessionScope.MBCP_USER_SESSION.roleId == 3}">
				

					<span class="li_spacing"></span>
					<div class="fl " style="position:relative">
						<img src="${pageContext.request.contextPath}/images/news_icon_01.png"
							class="xxtx_xs" id="xxtx" onclick="getCarMessage()"> <input
							type="hidden" value="" id="yscmessageid"> <span
							class="sup" id="redhd" style="display: none"></span>
					</div>
					<a>消息</a>
				</c:if>
				<!--<span class="li_spacing"></span> <a href="javascript:void(0)">联系客服</a>-->
				<span class="li_spacing"></span> <a target="blank" href="../commons/setup.zip" >下载控件</a> 
				<!-- <span class="li_spacing"></span> <a target="blank" href="http://bbs.danlingyun.com" >论坛</a> -->
				<span class="li_spacing"></span> <a target="blank" href="../commons/helper_qy.zip" >帮助手册</a> 
				<span class="li_spacing"></span> <a href="javascript:exitSystem()" >[<span id="">退出</span>]</a>
			</div>
		</div>
	</div>
	<!--topBox结束-->
	<!--headerBox开始-->
	<div class="headerBox">
		<div class="header w">
			<div class="fl" style="margin-top:15px">
                    <a href="javascript:void(0);"
				         title="民爆服务云"> 
		                 <img  src="${pageContext.request.contextPath}/images/<adapter:adapterfront contentlb="logo"/>"
				            alt="民爆服务云" />
			         </a> 
			</div>
			<div class="menu fl">
				<ul>
					<c:set value="<%=Constants.MENU_LEVELS1 %>" var="menu_levels"></c:set>
					<c:if test="${sessionScope.MBCP_USER_SESSION.menuList != null }">	
						<c:forEach var="menu" items="${sessionScope.MBCP_USER_SESSION.menuList}">
							<c:if test="${menu.levels == menu_levels}">
								<li>	
									<a name="menu" id="menu_${menu.menuCode}" href="javascript:void(0)" onclick="changeSecondColomn('${pageContext.request.contextPath}/${menu.link}','${menu.menuCode}')">${menu.menuName}</a>
								</li>
							</c:if>
						</c:forEach>
					</c:if>
					<script>
						var menuCode = getCookieValue("menuCode");
							
						if(menuCode != null && menuCode != "" && $("#menu_"+menuCode).length > 0){
							$("#menu_"+menuCode).addClass("current");
						}else{
							var obj ;
							if('${sessionScope.MBCP_USER_SESSION.roleId}'== role_gly){
							 	obj = $("li").children("[name=menu]")[1];
							}else{
								obj = $("li").children("[name=menu]")[0];
							}
							
							$(obj).addClass("current");
						}
					</script>
				</ul>
			</div>
		</div>
	</div>
	<!--headerBox结束-->
</body>
</html>