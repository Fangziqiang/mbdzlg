<%@ page language="java" contentType="text/html; charset=GBK"%>
<jsp:directive.page import="com.jadlsoft.utils.validatecode.ImageUtils"/>
<jsp:directive.page import="com.core.utils.MBConstant"/>

<%  
ImageUtils image = new ImageUtils();  
//����ҳ�治����
response.setHeader("Pragma","No-cache");  
response.setHeader("Cache-Control","no-cache");  
response.setDateHeader("Expires", 0);  
// ���ͼ��ҳ��  
out.clear();  
javax.imageio.ImageIO.write(image.creatImage(), "JPEG", response.getOutputStream()); //����  
//javax.imageio.ImageIO.write(image.creatImageGB(), "JPEG", response.getOutputStream()); //����  
// ����֤�����SESSION  
//String imgCode = image.getSgbRand();//��ȡ������֤��
String imgCode = image.getSRand();    //��ȡ������֤��
org.apache.log4j.Logger.getLogger(this.getClass()).info("imgCode="+imgCode);
session.setAttribute(MBConstant.SYSTEM_VALIDATE_CODE,imgCode);//����  




%>