<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script src="js/jquery-1.3.2.min.js" type="text/javascript"></script>
<link href="css/flexigrid.css" type="text/css" rel="stylesheet" />
<script src="js/jquery.flexigrid.js" type="text/javascript" ></script>
<script type="text/javascript">
$(document).ready(function(){
	
	var grid=$("#flexTable").flexigrid({
		width: 1150,  
		height: 450,
		url: '${pageContext.request.contextPath}/pam/pdm/TPamPdmSupervisiondaily/FlaxiGridData.do',
		dataType: 'json',
		colModel : [
			{display: '编号', name : 'id', width : 50, sortable : true, align: 'center',hide: true,toggle : false},
			{display: '日报编号', name : 'supdCode', width : 180, sortable : true, align: 'center'},
			{display: '地点', name : 'supdPlace', width : 80, sortable : true, align: 'center'},
			{display: '班次', name : 'supdClasses', width : 80, sortable : true, align: 'center'},
			{display: 'CH4', name : 'supdCh4', width : 80, sortable : true, align: 'center'},
			{display: 'CO2', name : 'supdCo2', width : 80, sortable : true, align: 'center'},
			{display: 'CO', name : 'supdCo', width : 80, sortable : true, align: 'center'},
			{display: '温度', name : 'supdTemperature', width : 150, sortable : true, align: 'center'},
			{display: '汇报人', name : 'userName', width : 150, sortable : true, align: 'center'},
			{display: '汇报时间', name : 'supdTime', width : 150, sortable : true, align: 'center'}	
			],
		errormsg: '发生异常',
		sortname: "id",
		sortorder: "desc",
		qop: "LIKE",//搜索的操作符
		usepager: true,
		title: 'flexigrid',
		pagestat: '显示记录从{from}到{to}，总数 {total} 条',
		useRp: true,
		rp: 10,
		rpOptions: [10, 15, 20, 30, 40, 100], //可选择设定的每页结果数
		nomsg: '没有符合条件的记录存在',
		minColToggle: 1, //允许显示的最小列数
		showTableToggleBtn: true,
		autoload: true, //自动加载，即第一次发起ajax请求
		resizable: false, //table是否可伸缩
		procmsg: '加载中, 请稍等 ...',
		hideOnSubmit: true, //是否在回调时显示遮盖
		blockOpacity: 0.5,//透明度设置
		showcheckbox: true,//是否显示第一列的checkbox（用于全选）
		gridClass: "bbit-grid",//样式
        rowhandler: false,//是否启用行的扩展事情功能,在生成行时绑定事件，如双击，右键菜单等
		rowbinddata: true,//配合上一个操作，如在双击事件中获取该行的数据
		onrowchecked: false//在每一行的的checkbox选中状态发生变化时触发某个事件
	});

    //操作函数
	function formatMoney(value, pid) {
         return "￥" + parseFloat(value).toFixed(2);
    }
	
});

</script>
</head>
<body>
<div id="ptable" style="margin:10px">
	<table id="flexTable" style="display:none"></table>
</div>  
</body>
</html>