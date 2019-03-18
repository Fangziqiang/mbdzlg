<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@	page import="java.util.*"%>
<%@	page import="com.jadlsoft.model.service.Service"%>
<%@	page import="com.core.struts.action.login.UserUtils"%>
<%@	page import="com.jadlsoft.model.session.UserSessionBean,com.core.model.role.BaseRole"%>
<%@ taglib prefix="jadllogic" uri="jadllogic.tld"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 

<html>
<head>
<%@ include file="../index/top.jsp"%>
<title>商店首页</title>
<%@ include file="../exit.jsp"%>
<link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16">
<link rel="shortcut icon" href="images/favicon.jpg">
<link rel="Bookmark" href="images/favicon.jpg">

<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/shop_index.css">
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/qrcode.css"/>

<%--<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/shop.css">--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/laba.js"></script>
<script language="Javascript">
	var clicknum = 1;     //计算点击服务向左、向右次数
	
	function init(){
		var pp = '${pageContext.request.contextPath}';
	}

	$(function(){
		  $(".M-design").mouseover(function() {
			$(".M-design").find(".M-design-title").css({"margin-top":"-60px","transition":"all .1s linear"});
			$(".Brand").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".move").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".ui").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			
			$(".M-design").find("em").css({"background":"url(images/design-ico-hover.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".Brand").find(".Brand-ico").css({"background":"url(images/brand-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".move").find(".move-ico").css({"background":"url(images/move-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".ui").find(".ui-ico").css({"background":"url(images/ui-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			
			$(".home-star-goods").find(".xm-plain-box-1").show();
			$(".home-star-goods").find(".xm-plain-box-2").hide();
			$(".home-star-goods").find(".xm-plain-box-3").hide();
			$(".home-star-goods").find(".xm-plain-box-4").hide();
		  });
		  
		  
		  $(".Brand").mouseover(function() {
			$(".M-design").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".Brand").find(".M-design-title").css({"margin-top":"-60px","transition":"all .1s linear"});
			$(".move").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".ui").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			
			
			$(".M-design").find(".M-design-ico").css({"background":"url(images/design-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".Brand").find("em").css({"background":"url(images/brand-ico-hover.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".move").find(".move-ico").css({"background":"url(images/move-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".ui").find(".ui-ico").css({"background":"url(images/ui-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			
			
			$(".home-star-goods").find(".xm-plain-box-1").hide();
			$(".home-star-goods").find(".xm-plain-box-2").show();
			$(".home-star-goods").find(".xm-plain-box-3").hide();
			$(".home-star-goods").find(".xm-plain-box-4").hide();
		  });
		  
		  
		  $(".move").mouseover(function() {
			$(".M-design").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".Brand").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".move").find(".M-design-title").css({"margin-top":"-60px","transition":"all .1s linear"});
			$(".ui").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			
			
			$(".M-design").find(".M-design-ico").css({"background":"url(images/design-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".Brand").find(".Brand-ico").css({"background":"url(images/brand-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".move").find("em").css({"background":"url(images/move-ico-hover.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".ui").find(".ui-ico").css({"background":"url(images/ui-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			
			$(".home-star-goods").find(".xm-plain-box-1").hide();
			$(".home-star-goods").find(".xm-plain-box-2").hide();
			$(".home-star-goods").find(".xm-plain-box-3").show();
			$(".home-star-goods").find(".xm-plain-box-4").hide();
		  });
		  
		  
		  $(".ui").mouseover(function() {
			$(".M-design").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".Brand").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".move").find(".M-design-title").css({"margin-top":"0px","transition":"all .1s linear"});
			$(".ui").find(".M-design-title").css({"margin-top":"-60px","transition":"all .1s linear"});
			
			$(".M-design").find(".M-design-ico").css({"background":"url(images/design-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".Brand").find(".Brand-ico").css({"background":"url(images/brand-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".move").find(".move-ico").css({"background":"url(images/move-ico.png) no-repeat","transition":" all 0.25s ease-in-out"});
			$(".ui").find("em").css({"background":"url(images/ui-ico-hover.png) no-repeat","transition":" all 0.25s ease-in-out"});
			
			$(".home-star-goods").find(".xm-plain-box-1").hide();
			$(".home-star-goods").find(".xm-plain-box-2").hide();
			$(".home-star-goods").find(".xm-plain-box-3").hide();
			$(".home-star-goods").find(".xm-plain-box-4").show();
		  });
			
		})
		
		function init(typeid){
			var types = "gmfw_id,ysfw_id,ccfw_id,bpzyfw_id";
			var type_s = types.split(",");
			
			for(var i=0;i<type_s.length;i++){
				var type = type_s[i];			
				if(type == typeid){				
					$("#"+type).css('display','block'); 				
				}else{				
					$("#"+type).css('display','none'); 
				}
			}
		}

		function onclicknum(lx,clicklx){
			if(clicklx =='left')
				clicknum --;
			if(clicklx =='right')
				clicknum ++;

			//向右移动到最后一页
			/**
			if((lx == 'ys' && clicknum == ys_cl)
				||(lx == 'cc' && clicknum == cc_cl)
				||(lx == 'bpzy' && clicknum == bpzy_cl)){
				
			}

			//向左移动到第一页
			if((clicknum == ys_cl){
					
			}
			*/
		}
    
		function toSeeService(obj){
			var cond = "";
			if(obj != null && obj != ""){
				cond = "?serviceType="+obj;
			}
			var url = "${pageContext.request.contextPath}/service/service_allService.action"+cond;
			document.location.href = url;
		}
</script>
</head>
<body onload="init('gmfw_id')">


<div id="mainBox">
  <div id="main">
    <!--背景-->
    <div class="section section-4" style=" height:865px;">
      <!--中心-->
      <div class="cases">
          <!--标题-->
          <div><img src="images/case_title.png"></div>
          <p style="color:#8a8a8a; margin-top:8px;">服务涉及领域 <br>
            煤矿、非金属矿、金属矿山、铁路道路、水利水电</p><!--标题结束-->
            <!--内容显示区-->
              <section class="section interactive">
                <div class="list-hex-grid list-inline-block clearfix">
                  <div class="hex grid-3 full-img" style="opacity: 1;">
                    <a href="#" title="1">
                      <div class="inner">
                          <img src="" width="133" height="140" alt="煤矿">
                      </div>
                      <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                      <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                      <span class="after" style="opacity: 1;"></span>
                    </a>
                  </div>
                  <div class="hex grid-3 secondary" style="opacity: 1;">
                    <a href="#" style="background-image:url(images/1.jpg);" title="2" class="flex">
                      <div class="hex-1"></div>
                      <div class="hex-2"></div>
                    </a>
                  </div>
                  <div class="hex grid-3 tertiary" style="opacity: 1;">
                    <a href="#" title="">
                      <div class="inner">
                          <img src="" width="116" height="110" alt="">
                      </div>
                      <div class="hex-1"><span class="after"></span></div>
                      <div class="hex-2"><span class="after"></span></div>
                      <span class="after"></span>
                    </a>
                  </div>

          
                  <br class="mq-mid mq-small">
                  
                  <div class="hex grid-3 align-top" style="opacity: 1;">
                    <a href="#" title="" style="background-image: url(images/meikuang.jpg);">
                      <div class="inner">
                        <p>煤矿</p>
                        <hr class="grid-1 center">
                        <h3>煤矿</h3>
                      </div>
                      <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                      <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                      <span class="after" style="opacity: 1;"></span>
                    </a>
                  </div>
          
                  <br class="mq-wide">
      
                  <div class="hex grid-3 tertiary" style="opacity: 1;">
                      <a href="#" title="">
                          <div class="inner">
                              <img src="" width="140" height="77" alt="">
                          </div>
                          <div class="hex-1"><span class="after"></span></div>
                          <div class="hex-2"><span class="after"></span></div>
                          <span class="after"></span>
                      </a>
                  </div>
      
                  <div class="hex grid-3 secondary align-top" style="opacity: 1;">
                      <a href="#" title="">
                          <div class="inner">
                              <p>煤矿</p>
                              <hr class="grid-1 center">
                              <h3>煤矿</h3>
                          </div>
                          <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                          <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                          <span class="after" style="opacity: 1;"></span>
                      </a>
                  </div>
      
                  <div class="hex grid-3 tertiary" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/meikuang.jpg);" title="" class="flex">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>
      
                  <div class="hex grid-3" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/1.jpg);" title="">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>
      
      
                  <div class="hex grid-3 secondary large-img" style="opacity: 1;">
                      <a href="#" title="">
                          <div class="inner">
                              <img src="" width="160" height="180" alt="">
                          </div>
                          <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                          <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                          <span class="after" style="opacity: 1;"></span>
                      </a>
                  </div>
      
                  <br class="mq-wide">
      
                  <div class="hex grid-3" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/4.jpg);" title="">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>
      
                  <br class="mq-mid mq-small">
      
                  <div class="hex grid-3" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/3.jpg);" title="">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>
      
                  <div class="hex grid-3 secondary" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/2.jpg);" title="">
                          <div class="inner">
                              <img src="" width="90" height="140" alt="">
                          </div>
                          <div class="hex-1"><span class="after"></span></div>
                          <div class="hex-2"><span class="after"></span></div>
                          <span class="after"></span>
                      </a>
                  </div>
      
                  <div class="hex grid-3" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/1.jpg);" title="">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>
      
                  <br class="mq-wide">
      
                 <!-- <div class="hex grid-3 align-top" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/meikuang.jpg);" title="">
                          <div class="inner">
                              <p>煤矿</p>
                              <hr class="grid-1 center">
                              <h3>煤矿</h3>
                          </div>
                          <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                          <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                          <span class="after" style="opacity: 1;"></span>
                      </a>
                  </div>
      
                  <div class="hex grid-3 tertiary" style="opacity: 1;">
                      <a href="#" title="">
                          <div class="inner">
                              <img src="" width="150" height="66" alt="">
                          </div>
                          <div class="hex-1"><span class="after" style="opacity: 1;"></span></div>
                          <div class="hex-2"><span class="after" style="opacity: 1;"></span></div>
                          <span class="after" style="opacity: 1;"></span>
                      </a>
                  </div>
      
      
                  <div class="hex grid-3" style="opacity: 1;">
                      <a href="#" style="background-image: url(images/meikuang.jpg);" title="">
                          <div class="hex-1"></div>
                          <div class="hex-2"></div>
                      </a>
                  </div>-->
      
                  <div class="hex grid-3 mq-mid-i-block mq-small-i-block" style="opacity: 1;"></div>

              </div>
          </section><!--内容显示区结束-->
          
        </div>

      <a href="#section-5" class="top-ico4"></a>

    </div>
    
    <div class=" " style="width:1100px;  margin:0 auto; text-align:center; padding-top: 45px;">
    	<a name="section-5" style=" visibility:hidden;"></a>
        <div><img src="images/process_title.png"></div>
        <p style="color:#8a8a8a; margin-top:8px;">服务流程 <br> 购买、运输、存储、爆破作业</p>
              
        <!--流程图-->
        <div class="M-what clearfix" style=" overflow:hidden !important;width:1030px; height:254px;position:relative;margin: 40px auto 0;">
            <a href="javascript:void(0);">
                <div class="M-design fl" style="width: 172px; top: 0px;">
                    <em class="M-design-ico"></em>
                    <div class="M-design-bottom">
                        <div class="M-design-title" style="margin-top: 0px;">
                            <span>购买</span>
                            <font>在云平台购买自<br>己所需服务</font>
                        </div>
                        <span class="M-btn" onclick="">查看更多</span>
                    </div>
                </div>
            </a>
            <div class="M-arrow" style="position:absolute; left:210px;top:67px;"><img src="images/arrow_icon_01.png"></div>
            <a href="javascript:void(0);">
                <div class="Brand fl" style="width: 172px; top: 0px;">
                    <em class="Brand-ico"></em>
                    <div class="M-design-bottom">
                        <div class="M-design-title" style="margin-top: 0px;">
                            <span>运输</span>
                            <font>把所购买的商品运输<br>到仓库中</font>
                        </div>
                        <span class="M-btn" onclick="">查看更多</span><!-- toSeeService('03') -->
                    </div>
                </div>
            </a>
            <div class="M-arrow" style="position:absolute; left:494px;top:67px;"><img src="images/arrow_icon_01.png"></div>
            <a href="javascript:void(0);">
                <div class="move fl" style="width: 172px; top: 0px;">
                    <em class="move-ico"></em>
                    <div class="M-design-bottom">
                        <div class="M-design-title" style="margin-top: 0px;">
                            <span>存储</span>
                            <font>把商品运输过来后，进<br>行存放储存</font>
                        </div>
                        <span class="M-btn M-left" onclick="">查看更多</span>
                    </div>
                </div>
            </a>
            <div class="M-arrow" style="position:absolute; left:778px;top:67px;"><img src="images/arrow_icon_01.png"></div>
            <a href="javascript:void(0);">
                <div class="ui fl" style="width: 172px; top: 0px;">
                    <em class="ui-ico"></em>
                    <div class="M-design-bottom">
                        <div class="M-design-title" style="margin-top: 0px;">
                            <span>爆破作业</span>
                            <font>进行爆破作业<br>&nbsp;</font>
                        </div>
                        <span class="M-btn" onclick="">查看更多</span>
                    </div>
                </div>
            </a>
            <a href="javascript:void(0);">
                <div class="ui2 fl" style="width: 145px; top: 0px;">
                    <em class="ui2-ico"></em>
                    <div class="M-design-bottom">
                        <div class="M-design-title" style="margin-top: 0px;">
                            <span></span>
                            <font><br></font>
                        </div>
                        <span class="M-btn">查看更多</span>
                    </div>
                </div>
            </a>

        </div>
      
      
      
      
      <div class="home-star-goods xm-carousel-container" id="J_homeStar" style="padding-top: 20px;">
        
        <div id="gmfw_id" class="xm-plain-box xm-plain-box-1" style="position:relative;">
        	<div class="box-hd" style="display: none">
                <h3 class="title">购买类服务如下</h3>
                <div class="more">
                    <div class="xm-controls xm-controls-line-small xm-carousel-controls">

 							<a class="control control-prev iconfont control-prev1" href="javascript: void(0);" >&lt;</a>
                       		<a class="control control-next iconfont control-next1" href="javascript: void(0);" >&gt;</a>	
                    </div>
                </div>
            </div>
            
            <div class="box-bd" style="display: none">
                <div class="xm-carousel-wrapper" style=" overflow: hidden;">
                	<ul class="xm-carousel-list xm-carousel-col-5-list goods-list rainbow-list clearfix J_carouselList xm-carousel-list1" style="width: 20000px; margin-left: 0px;">
						<%-- <%
							List ysServiceList_ = (List)request.getAttribute("ysServiceList");
							if(ysServiceList_.size()>0){
								for(int i=0;i<ysServiceList_.size();i++){
									Service tempService = (Service) ysServiceList_.get(i);		
									%> --%>
									<%-- <li class="rainbow-item-1">
			                        	<a class="thumb" href="#">
			                        	<img src=""  alt=""></a>
			                            <h3 class="title">
			                            <a href="#" target="_blank"><%=tempService.getServiceName() %></a></h3>
			                            <p class="price"><%=tempService.getPrice() %>元</p>
			                            <p class="desc">300人使用</p>
			                            <a href="'${pageContext.request.contextPath}/cpcg/cart_shoppingCartNumEdit.action?svr='<%=tempService.getServiceId()%>" class="adcar" style="">立即购买</a>
			                    	</li> --%>
								<%-- <%}
							}
						%> --%>
					</ul>
				</div>
            </div>
        </div>
        
        <div id="ysfw_id" class="xm-plain-box xm-plain-box-2" style="position:relative;">
        	<div class="box-hd">
                <h3 class="title">运输类服务如下</h3>
                <div class="more">
                    <div class="xm-controls xm-controls-line-small xm-carousel-controls">
                        <a class="control control-prev iconfont control-prev2 " href="javascript: void(0);" >&lt;</a>
                        <a class="control control-next iconfont control-next2 " href="javascript: void(0);" >&gt;</a>
                    </div>
                </div>
            </div>
            
            <div class="box-bd">
                <div class="xm-carousel-wrapper" style=" overflow: hidden;">
                	<ul class="xm-carousel-list xm-carousel-col-5-list goods-list rainbow-list clearfix J_carouselList xm-carousel-list2" style="width: 20000px; ">
						<%-- <%
							//List ysServiceList = (List)request.getAttribute("ysServiceList");
							if(ysServiceList.size()>0){
								for(int i=0;i<ysServiceList.size();i++){
									Service tempService = (Service) ysServiceList.get(i);		
									%>
									<li class="rainbow-item-2">
			                        	<a class="thumb" href="#">
			                        	<img src=""  alt=""></a>
			                            <h3 class="title">
			                            <a href="#"><%=tempService.getServiceName() %></a></h3>
			                            <p class="price"><%=tempService.getPrice() %>元</p>
			                            <p class="desc">300人使用</p>
			                            <a href="${pageContext.request.contextPath}/cpcg/cart_addToShoppingCart.action?svr=<%=tempService.getServiceId()%>" class="adcar" style="">立即购买</a>
			                    	</li>
								<%}
							}
						%> --%>
					</ul>
				</div>
            </div>
        </div>
        
        
        <div id="ccfw_id" class="xm-plain-box xm-plain-box-3" style="position:relative;">
        	<div class="box-hd">
                <h3 class="title">储存类服务如下</h3>
                <div class="more">
                    <div class="xm-controls xm-controls-line-small xm-carousel-controls">
                        <a class="control control-prev iconfont control-prev3" href="javascript: void(0);" >&lt;</a>
                        <a class="control control-next iconfont control-next3" href="javascript: void(0);" >&gt;</a>
                    </div>
                </div>
            </div>
            
            <div class="box-bd">
                <div class="xm-carousel-wrapper" style=" overflow: hidden;">
                	<ul class="xm-carousel-list xm-carousel-col-5-list goods-list rainbow-list clearfix J_carouselList xm-carousel-list3" style="width: 20000px;">
						<%-- <%
							//List ccServiceList = (List)request.getAttribute("ccServiceList");
							if(ccServiceList.size()>0){
								for(int i=0;i<ccServiceList.size();i++){
									Service tempService = (Service) ccServiceList.get(i);		
									%>
									<li class="rainbow-item-3">
			                        	<a class="thumb" href="#">
			                        	<img src=""  alt=""></a>
			                            <h3 class="title">
			                            <a href="#"><%=tempService.getServiceName() %></a></h3>
			                            <p class="price"><%=tempService.getPrice() %>元</p>
			                            <p class="desc">300人使用</p>
			                            <a href="${pageContext.request.contextPath}/cpcg/cart_addToShoppingCart.action?svr=<%=tempService.getServiceId()%>" class="adcar" style="">立即购买</a>
			                    	</li>
								<%}
							}
						%> --%>
					</ul>
				</div>
            </div>
        </div>
        
        <div id="bpzyfw_id" class="xm-plain-box xm-plain-box-4" style="position:relative;">
        	<div class="box-hd">
                <h3 class="title">爆破作业类服务如下</h3>
                <div class="more">
                    <div class="xm-controls xm-controls-line-small xm-carousel-controls">
                        <a class="control control-prev iconfont control-prev4" href="javascript: void(0);" >&lt;</a>
                        <a class="control control-next iconfont control-next4" href="javascript: void(0);" >&gt;</a>
                    </div>
                </div>
            </div>
            
            <div class="box-bd">
                <div class="xm-carousel-wrapper" style=" overflow: hidden;">
                	<ul class="xm-carousel-list xm-carousel-col-5-list goods-list rainbow-list clearfix J_carouselList xm-carousel-list xm-carousel-list4" style="width: 20000px;">
						<%-- <%
							//List bpzyServiceList = (List)request.getAttribute("bpzyServiceList");
							if(bpzyServiceList.size()>0){
								for(int i=0;i<bpzyServiceList.size();i++){
									Service tempService = (Service) bpzyServiceList.get(i);		
									%>
									<li class="rainbow-item-4">
			                        	<a class="thumb" href="#">
			                        	<img src=""  alt=""></a>
			                            <h3 class="title">
			                            <a href="#"><%=tempService.getServiceName() %></a></h3>
			                            <p class="price"><%=tempService.getPrice() %>元</p>
			                            <p class="desc">300人使用</p>
			                            <a href="${pageContext.request.contextPath}/cpcg/cart_addToShoppingCart.action?svr=<%=tempService.getServiceId()%>" class="adcar" style="">立即购买</a>
			                    	</li>
								<%}
							}
						%> --%>
					</ul>
				</div>
            </div>
        </div>
 
    </div>
 
    </div>  
  </div>
  
</div>

<%@ include file="../index/bottom.jsp"%>





<!--右侧浮动条-->
<div class=" " >    
	<div class="con " name="">    
		<div class="sidebar_wrap" id="sidebar_wrap_id">
			<div class="sidebar" style="z-index: 100000">
				<div class="sale"></div>
                <div class="sidebar_code2">
					<!--<a class="code2s"></a>
					<a class="code2b" style="display: none;"><img src="" width="100" height="125"></a>-->
                </div>
                <s:if test="#session.MBCP_USER_SESSION.baseRole.roleid == 1">
				<div class="sidebar_cart"><a href="${pageContext.request.contextPath}/cpcg/cart_myCart.action" dd_name="购物车"><span></span>购<br>物<br>车<em id="cartnum"></em></a></div>
				</s:if>
				<div class="sidebar_link">
					<!--<a class="collect" onclick="AddFavorite()" dd_name="收藏"><span class="name" style="left: 0px;">收藏页面</span></a>
					<a href="#" class="my_collection" target="_blank" dd_name="我的收藏"><span class="name" style="left: 0px;">我的收藏</span></a>-->
					<a href="javascript:void(0);" class="back_top"></a>
					<a href="#" class="survey" target="_blank">联系客服</a>
                </div>
			</div>
		</div>
	</div>
</div>

</body>
</html>
