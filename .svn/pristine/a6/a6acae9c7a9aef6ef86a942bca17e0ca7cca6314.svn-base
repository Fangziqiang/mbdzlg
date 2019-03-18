<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="page.tld" prefix="page"%>
 
<html>
<head>
<title><s:property value="description" /></title>
<link type="text/css" href="../common/main.css" rel="stylesheet">
<script type="text/javascript" src="../common/jquery.js"></script>
<script type="text/javascript" src="../common/xwin.js"></script>
<script type="text/javascript" src="../common/dataManager.js"></script>
<script type="text/javascript" src="../common/tableManager.js"></script>
<script type="text/javascript" src="../common/list.js"></script>
<script type="text/javascript">
	var realaction = "${realaction}";//列表action地址
	var short = realaction.substring(realaction.lastIndexOf("/") + 1,
			realaction.indexOf("list"));
	//列表action简称，用以拼接页面访问action地址，当不设置时，shortaction默认为列表action前缀,如列表action为qzcrklist.action,则shortaction=qzcrk
	    short="${shortaction}"==""?short:"${shortaction}";
	//页面需要添加的按钮
	var buttons = "${button}" == "" ? [] : "${button}".split(",");
	//按钮名称
	var buttontitle = "${buttontitle}" == "" ? [] : "${buttontitle}".split(",");
	//页面列表中需要添加的操作
	var opers = "${oper}" == "" ? [] : "${oper}".split(",");
	//操作名称
	var opertitle = "${opertitle}" == "" ? [] : "${opertitle}".split(",");
	//操作图标
	var operimage = "${operimage}" == "" ? [] : "${operimage}".split(",");
	//列表中需要排序的字段
	var sortitem = "${sortitem}" == "" ? [] : "${sortitem}".split(",");
</script>
<!-- 列表需要的比较通用的函数放在这里 -->
<script type="text/javascript" src="../common/commonlist.js"></script>
<s:if test="#request.jsurl!=null">
	<!-- 列表需要的独特复杂的函数放在jsurl里，
             其内部函数所需参数等于params.函数名 ，
              调用getparam函数可从页面获取参数的值,请见../js/qwgllist.js里的函数
    -->
	<script type="text/javascript" src=..${jsurl}></script>
</s:if>
</head>
<body>
<div class="page_scrollbar">
<script>pageTitle('${parentnode}', '${description}');</script>
	<table width="100%" class="table_out_frame_style">
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="table_title_style">
					<tr class="tool_tip">
						<td width="100%" class="table_titlename_style">${description}</td>
					</tr>
				</table>
				<table id="listtable" width="99%" class="list_table">
					<s:if test="#request.columnwidth!=null">
						<s:iterator value="#request.columnwidth">
							<colgroup width="<s:property/>" />
						</s:iterator>
					</s:if>
					<tr style="height: 22px">
						<s:iterator id="title" value="#request.title" status="status">
							<td nowrap><s:property />
							</td>
						</s:iterator>
					</tr>
					<s:if test="#request.list!=null">
						<s:iterator id="data" value="#request.list" status="status" >
							<tr class="list_table_rows_tr list_table_rows_td">
								<s:iterator id="field" value="#request.field">
									<td nowrap>
										 <s:property value="%{#data[#field]}"/> 
									</td>
								</s:iterator>
							</tr>
							<s:if test="#request.hiddenfield!=null">
								<s:iterator id="hiddenfieldname" value="#request.hiddenfield">
									<s:hidden name="%{hiddenfieldname}"
										value="%{#data[#hiddenfieldname]}" />
								</s:iterator>
							</s:if>
						</s:iterator>
					</s:if>
				</table>
				<table width="99%" border="0" cellspacing="0" cellpadding="0"
					class="makepage_table">
					<colgroup style="width: 95%" />
					<colgroup style="width: 5%" />
					<tr>
						<td class="makepage_td" nowrap="nowrap"><page:pager
								total="${total}" defaultPageSize="${pagesize}"
								saveaction="${saveaction}">
								<page:navigator type="IMG" />
							</page:pager>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		id="buttontable">
		<tr>
			<td class="bottom_func_btn_style" id="td_button"></td>
		</tr>
	</table>
</div>
</body>
</html>