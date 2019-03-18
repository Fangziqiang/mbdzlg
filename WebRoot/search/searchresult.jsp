<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="jadlhtml.tld" prefix="jadlhtml"%>
<%@ taglib uri="jadllogic.tld" prefix="jadllogic"%>
<%@ taglib uri="page.tld" prefix="page"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html:html lang="true">
<head>
	<%@ include file="../include/meta.inc"%>
	<script type="text/javascript" src="../common/searchUtils.js"></script>
	<link type="text/css" rel="stylesheet" href="../common/common.css"/>
	<link type="text/css" rel="stylesheet" href="../css/form.css"/>
	
	<style>
	.table1{ color:#333; margin:6px auto;width:100%}
	.table1 th.line_b_r {
	    background-color: #6DAEDA;
	    border-top: 2px solid #6DAEDA;
	    line-height: 28px;
	    color: #fff;
	      white-space: nowrap; 
	}
	.table1 .line_b_r {
	    line-height: 25px;
	    background-color: #F6F6F6;
	    padding: 0px 8px;
	      white-space: nowrap; 
	}
	.text-caolor-blue{ color: #3693D1;}


	</style>
	
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"  style="background-color: #fff;min-width: 0px;">
	<script type="text/javascript">
		var selectrow = 0;
		var titlelen = 0;
		//提交查询前设置查询条件
	function checkparamter(){
	  	return setSearchParamter({searchcol:document.getElementsByName("searchcol")[0].value,
	  		searchoper:document.getElementsByName("searchcond")[0].value,
	  		searchfield:'searchfield'});
	  	
	}
	  
	//双击行事件
	function dblClick(obj){ 
		var test = obj.cells[0];
		if(test.getAttribute("id") == 'flag') {
			if(trim(test.innerText) == '0') {
				alert(obj.cells[obj.cells.length - 1].innerText);
				return;
			}
		}
	
		onSearchdblClick(obj, {fields:document.getElementsByName("searchfields")[0].value,
	  		targets:document.getElementsByName("targetfields")[0].value,
	  		parobj:document.getElementsByName("consistfields")[0].value});
	  	parent.doSearchFinished();
	}  
	
	//去除空格
	function trim(str) {
		return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
	}
	
	function init(){
		document.getElementsByName("searchfield")[0].focus();
	}
  </script>
	<s:form action="" method="post" onsubmit="return checkparamter()">
		<s:hidden name="searchfields" value="%{#parameters.searchfields[0]}" />
		<s:hidden name="targetfields" value="%{#parameters.targetfields[0]}" />
		<s:hidden name="consistfields" value="%{#parameters.consistfields[0]}" />
		<s:hidden name="baseconditions" value="%{#parameters.baseconditions[0]}" />
		<s:hidden name="forward" value="%{#parameters.forward[0]}" />
		<s:hidden name="queryparamter" value="%{#request.queryparamter}" />
		<s:hidden name="searchcol" value="%{#request.searchcol}" />
		<s:hidden name="searchcond" value="%{#request.searchcond}" />
	  <table class="table1" cellpadding="0"  >
			<colgroup style="width:50%"/>
			<colgroup style="width:50%"/>
			<tr>
				<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="2" style="margin-left:134px;">
						
						<s:iterator id="stitle" value="#request.searchtitle">
							<tr>
								<td   align="right"><s:property />：</td>
								<td>
									<input type="text"  style="border: 1px solid #ccc" onkeyup="value=value.replace(/(^\s*)|(\s*$)/g,'')" onblur="value=value.replace(/(^\s*)|(\s*$)/g,'')" name="searchfield" size="20" />
								</td>
								<td>&nbsp;</td>
							</tr>
							
						</s:iterator>
					</table>
				</td>
				<td>
					<table width="100%"  border="0" cellspacing="0" cellpadding="2" style=" margin-left:80px;">
						<tbody>
						<tr>
							<td nowrap="nowrap">
								<input type="submit" value="查询" style="margin-right:10px;"  class="btn_blue button"/>
								<input type="button" name="search_bnt" onclick="parent.closesearchwin();"  class="btn_blue button" value="关闭"/>
							</td>
						</tr>
						<tr>
							<td nowrap=""></td>
						</tr>
						</tbody>
						
					</table>
				</td>
				</tr>
			
		</table>
	</s:form>
	<input type="hidden" name="curItem"/>
	<div style="width: 100%;overflow: auto">
	<table class="table1" cellpadding="0">
		<tr>
			<s:iterator status="sta" value="#request.titles">
				<s:if test="#sta.first">
					<td align="center" nowrap>
				</s:if>
				<s:elseif test="#sta.last">
					<td align="center"  nowrap>
				</s:elseif>
				<s:else>
					<td align="center" nowrap>
				</s:else>
				<s:property />
				
				</td>
			</s:iterator>
		</tr>
		
		 <s:iterator id="result" value="#request.list">
				<tr class="Pop_TR" ondblclick="dblClick(this)" style="cursor: hand" align="center">
					<s:if test="#result.ischeckornot != null">
							<td style="display: none" id="flag">
							<s:property value="%{#result.ischeckornot}" />
							</td>
						</s:if>
					<s:iterator id="rescol" status="sta" value="#request.resultcol">
						<s:if test="#sta.index< #request.titlelength">
						<td class="line_b_r text-caolor-blue" style="background-color: #F6F6F6">
							<s:property value="%{#result[#rescol]}" />
							<s:hidden name="%{#rescol}" value="%{#result[#rescol]}" />
						</td>
						</s:if>
						<s:else>
							<s:hidden name="%{#rescol}" value="%{#result[#rescol]}" />
						</s:else>
					
					</s:iterator>
				</tr>
			</s:iterator>	
	</table>  
	</div>
	<div id="pageId" style="">
   		<div id="x_count_div" class="m-page"  style="margin-top: 10px">
		<page:pager total="${total}" defaultPageSize="${pagesize}">
			<page:navigator type="TEXT_SHORT" />
		</page:pager>
	</div>
	</div>	
</body>
</html:html>
