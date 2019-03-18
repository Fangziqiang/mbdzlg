<!DOCTYPE html>
<%@ page import="com.jadlsoft.utils.MBDZLGConstant"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="gbk" %> 
<%@ taglib uri="/WEB-INF/taglib/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/taglib/struts-html.tld" prefix="html"%>
<%@ taglib uri="/WEB-INF/taglib/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib prefix="c" uri="/WEB-INF/taglib/c.tld"%>
<%@ include file="../include/head.inc"%>
<%
	int httpwzsb = MBDZLGConstant.DATATYPE_HTTP_QBQWZSB;
%>
<head>

<%@ include file="../include/meta.inc"%>
<link href="../css/load.css" type="text/css" rel="stylesheet"/>
		<link href="../css/main1.css" type="text/css" rel="stylesheet"/>
		<link rel="stylesheet" href="/common/calendar/skin/WdatePicker.css" type="text/css"></link>
		<script type="text/javascript" src="../common/calendar/WdatePicker.js"></script>
	    <script type="text/javascript" src="../common/tip.js"></script>
		<script type="text/javascript" src="../common/common.js"></script>
		<script type="text/javascript" src="../common/list.js"></script>
		<script type="text/javascript" src="../common/queryUtils.js"></script>
		<script type="text/javascript" src="../common/searchUtils.js"></script>
		<script type="text/javascript" src="../common/WdatePicker.js"></script>
		<script type="text/javascript" src="../common/validate.js"></script>
<script type="text/javascript">
	function changeQqlx(){
		document.getElementById("qqlx").options.length=0;
		var qqlx = $("#qqfs").val();
		if(qqlx == 'socket'){
			$("#qqlx").prepend("<option value=''>��ѡ��</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>+"'>���¹���</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>+"'>λ���ϱ�</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>+"'>ʹ���ϱ�</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>+"'>��������(��ʽ)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>+"'>��������(��ʽ)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>+"'>��������(��ʽ)</option></br>"+
								"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>+"'>��������(��ʽ)</option>");
		}
		if(qqlx == 'http'){
			$("#qqlx").prepend("<option value=''>��ѡ��</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>+"'>���¹���</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>+"'>λ���ϱ�</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>+"'>ʹ���ϱ�</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>+"'>��������</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>+"'>��������</option>");
		}
		if(qqlx = null || qqlx == ''){
			$("#qqlx").prepend("<option value=''>��ѡ��</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>+"'>���¹���(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>+"'>λ���ϱ�(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>+"'>ʹ���ϱ�(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>+"'>��������(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>+"'>��������(http)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>+"'>���¹���(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>+"'>λ���ϱ�(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>+"'>ʹ���ϱ�(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>+"'>��������(��ʽ)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>+"'>��������(��ʽ)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>+"'>��������(��ʽ)(socket)</option></br>"+
					"<option value='"+<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>+"'>��������(��ʽ)(socket)</option>");
		}
	}
	function skipyhfwlist(){
		window.location.href ="${pageContext.request.contextPath }/yhfw/yhfwAction_skipyhfwyquery.action";
	}
	function checkparamter(){
		var fields=new Array("qqfs**","qqlx**","qbqbh**","qqsj#","dwdm**","htid**","xmbh**");
		getparamter(fields, "queryparamter", "queryparamtername");
		document.forms[0].submit();
		return true;
	}
	function findQqcsxx(id){
		window.location.href = "${pageContext.request.contextPath }/yhfw/yhfwAction_skipQqcsXxxx.action?id="+id;
	}
	function findFhsjxx(id){
		window.location.href = "${pageContext.request.contextPath }/yhfw/yhfwAction_skipFhsjXxxx.action?id="+id;
	}
</script>


</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"
	onload="initSearchConditions();">
	<div class="bmain">
		<div class="j10"></div>
		<!-- ��ѯ -->
		<form action="${pageContext.request.contextPath }/yhfw/yhfwlist.action" method="post">
		<input type="hidden" id="queryparamter" name="queryparamter" value="${queryparamter}" />
		<input type="hidden" id="queryparamtername" name="queryparamtername" value="${queryparamtername}" />
		<table  border="0" cellpadding="0" cellspacing="0" class="mb-tm" >
			<tr id="barId">
				<td class="boxtop rbox-pos rbox-imgb" id="baseInfo_title">
                    <div class="htx otxx"><b>�û����ʲ�ѯ</b></div>
                    <div class="boxtop-lt"></div>
                    <div class="boxtop-rt"></div>
				</td>
			</tr>		
			<tr id='tip_tr'>
				<td colspan="2">
					<table  class="mb-table" style="border-bottom:1px solid #96b5d2;" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">����ʽ:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<select name="qqfs"  id="qqfs" title="����ʽ" onchange="changeQqlx();">
				            		<option value="">��ѡ��</option>
				            		<option value="http">http</option>
				            		<option value="socket">socket</option>
					         </select>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">��������:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<select name="qqlx"  id="qqlx" title="���ʽӿ�" >
				            		<option value="">��ѡ��</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_GXGZ %>">���¹���(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_QBQWZSB %>">λ���ϱ�(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_SYXXSB %>">ʹ���ϱ�(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_ZZXZ %>">��������(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_HTTP_LXXZ %>">��������(http)</option>
				            		<option value="<%=MBDZLGConstant.DATATYPE_GXGZ_INP %>">���¹���(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_QBQWZSB_INP %>">λ���ϱ�(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_SYXXSB_INP %>">ʹ���ϱ�(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_LXXZ_INP_FS %>">��������(��ʽ)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_LXXZ_INP_JS %>">��������(��ʽ)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_FS %>">��������(��ʽ)(socket)</option>
									<option value="<%=MBDZLGConstant.DATATYPE_ZXXZ_INP_JS %>">��������(��ʽ)(socket)</option>
					         </select>
						</td>
						
					</tr>
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">��λ����:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="dwdm" id="dwdm" title="��λ"/>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">�������:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="qbqbh" id="qbqbh" title="�������"/>
						</td>
						
					</tr>
					<tr>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">��ͬ:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="htid" id="htid" title="��ͬ"/>
						</td>
						<td class="tab-tr tdbgcolor" style="border-top: 0px" align="right">��Ŀ:</td>
						<td class="td-mild"  style="border-top: 0px" >
							<input type="text" name="xmbh" id="xmbh" title="��Ŀ"/>
						</td>
						
					</tr>
					
					<tr>
						
						<td class="tab-tr tdbgcolor" align="right">����ʱ��:</td>
				        <td class="td-mild" >
				     	<input  id="qqsjfrom_date" name="qqsjfrom_date" title="������ʼʱ��" readonly="readonly"  class="s_input_date" 
						onfocus="WdatePicker({maxDate:'#F{$dp.$(\'qqsjto_date\').value||\'2020-10-01\'}'})"/>
						&nbsp;��&nbsp;
						<input  id="qqsjto_date" name="qqsjto_date"  title="���ʽ�ֹʱ��" readonly="readonly" class="s_input_date" 
						onfocus="WdatePicker({minDate:'#F{$dp.$(\'qqsjfrom_date\').value}',maxDate:'2020-10-01'})"/>
				        </td>
				        
				     </tr>
				</table>
				
				<table id="buttonTable" width="100%" border="0" cellpadding="2" cellspacing="0">
					<tr height="50">
						
						<td align="center" colspan="6">
							<input type="button" class="submit_btn" style="cursor:hand;" value="��ѯ" onclick="checkparamter()"/>
							<input type="reset" class="submit_btn" style="cursor:hand;" value="����"/>
						</td>
						
					</tr>
				</table>
				
			</tr>	
		</table>
		</form>
		<!-- list -->
		<div class="j10"></div>
		<input type="hidden" id="queryparamter" name="queryparamter" value="${queryparamter}" />
		<input type="hidden" id="queryparamtername" name="queryparamtername" value="${queryparamtername}" />
		<table border="0" cellpadding="0" cellspacing="0" class="mb-tm" >
			<tr id="barId">
				<td class="boxtop rbox-pos rbox-imgb" id="baseInfo_title">
                    <div class="htx otxx"><b>�û������б�</b></div>
                    <div class="boxtop-lt"></div>
                    <div class="boxtop-rt"></div>
				</td>
			</tr>		
			<tr id='tip_tr'>
				<td >
				<div  id='tjId' style="font-size:12px; font-family:Arial, Helvetica, sans-serif;border-left:1px solid #96b5d2;border-right: 1px solid #96b5d2; ">
					<script></script>
				</div>
				<%--<div align="left" onclick="skipyhfwlist()">��ѯ</div>
					--%><table rules="none" class="mb-table" width="100%" style="border-bottom:1px solid #96b5d2;" border="0" cellspacing="0" cellpadding="0" id="datatable">
						<tr class="mb-ta-head" align='center'>
							<th class="borderline">���</th>
							<th class="borderline">����ʽ</th>
							<th class="borderline">��������</th>
							<th class="borderline">��λ����</th>
							<th class="borderline">��������</th>
							<th class="borderline">����ʱ��</th>
							<th class="borderline">����</th>
							<th class="borderline">��ͬid</th>
							<th class="borderline">��Ŀ���</th>
							<th class="borderline">�������</th>
							<th class="borderline">��������</th>
						</tr>
						<logic:present name="list">
							<logic:iterate id="map" name="list" indexId="index">
								<tr align="center">
									<td>
	                              		${index+1}
	                              	</td>
									<td>
	                              		${map.qqfs }
	                              	</td>
	                             	<td>
	                             		<c:if test="${map.qqlx == 7}">
	                             			�����������أ���ʽ��
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 1}">
	                             			�����������أ���ʽ��
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 19}">
	                             			�����������أ���ʽ��
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 3}">
	                             			�����������أ���ʽ��
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 5}">
	                             			����׼������������
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 9}">
	                             			����λ���ϱ�
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 17}">
	                             			ʹ����Ϣ�ϱ�
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 21}">
	                             			������������
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 22}">
	                             			������������
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 23}">
	                             			����λ���ϱ�
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 24}">
	                             			ʹ����Ϣ�ϱ�
	                             		</c:if>
	                             		<c:if test="${map.qqlx == 25}">
	                             			���¹���
	                             		</c:if>
	                              	</td>
	                              	<td>
	                              		${map.dwdm }
	                              	</td>
	                             	<td>
	                              		${map.xzqh }
	                              	</td>
	                             	
	                             	<td>
	                              		${map.qqsj }
	                              	</td>
	                             	
	                             	<td>
	                              		${map.qbqbh }
	                              	</td>
	                             	<td>
	                              		${map.htid }
	                              	</td>
	                             	<td>
	                              		${map.xmbh }
	                              	</td>
	                             	<td>
	                             		<a href="javascript:void(0)" onclick="findQqcsxx('${map.id}');">
			                             	�鿴
	                             		</a>
	                              	</td>
	                             	<td>
	                             		<a href="javascript:void(0)" onclick="findFhsjxx('${map.id}','${map.qqfs }');">
	                             			�鿴
	                             		</a>
	                             		
	                              	</td>
								</tr>
							</logic:iterate>
						</logic:present>								
					</table>
				
				<form name="research" method="post" action="">
					<input type="hidden" name="queryparamtername" value="<bean:write name='queryparamtername'/>"/>
				</form>
			</td>	
			</tr>
		</table>
		<!--��ҳ-->
			<div><%@ include file="../include/page.inc"%></div>
		
	</div>
</body>					
	
