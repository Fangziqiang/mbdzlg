<%@ page language="java" contentType="text/html; charset=GBK"%>
<jsp:directive.page import="com.jadlsoft.utils.validatecode.ImageUtils"/>
<jsp:directive.page import="com.core.utils.MBConstant"/>

<%  
ImageUtils image = new ImageUtils();  
//设置页面不缓存
response.setHeader("Pragma","No-cache");  
response.setHeader("Cache-Control","no-cache");  
response.setDateHeader("Expires", 0);  
// 输出图象到页面  
out.clear();  
javax.imageio.ImageIO.write(image.creatImage(), "JPEG", response.getOutputStream()); //数字  
//javax.imageio.ImageIO.write(image.creatImageGB(), "JPEG", response.getOutputStream()); //汉字  
// 将认证码存入SESSION  
//String imgCode = image.getSgbRand();//获取汉字验证码
String imgCode = image.getSRand();    //获取数字验证码
org.apache.log4j.Logger.getLogger(this.getClass()).info("imgCode="+imgCode);
session.setAttribute(MBConstant.SYSTEM_VALIDATE_CODE,imgCode);//汉字  




%>