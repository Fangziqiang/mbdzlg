/*
 * create by huangbotao 
 * date:2012/05/04 
 * discription:commonlist.jsp列表通用JS  实现页面自动添加通用按钮及操作
 *             只需在XML文件配置  列表内操作(oper)、操作名称(opertitle)、操作图标(operimage)、
 *             列表外按钮(button)、按钮名称(buttontitle)标签，然后在本文件内部添加列表页面需要调用的function即可
 * 添加函数说明：
	  function view(selectrow) {//selectrow为列表行数
	    //所有函数参数=params.函数名， 这里为params.view，params中的键与按钮触发的函数名一致
		var param = getparam(params.view, selectrow);//从jsp页面获取参数值并拼接URL参数窜
		window.location = short + "_view.action?" + param;
	  }
        注：
	  其中页面按钮需调用的一些通用函数（如增加、删除、修改、查询等）在common/commonlist.js里创建，如function view()
	  如果一些列表需要调用比较独特复杂的函数，该函数可放在一个单独的JS文件（注意函数名不要与commonlist.js的同名）， 并在XML作如下配置指定js路径：
	 jsurl="/js/qzcrklist.js"
 */
var params = {};// 所有函数需要的参数都在这里，参数=params.函数名
var operfun = [];// 列表内操作需要调用的方法名
var operimg = [];// 列表内操作的图标
var buttonfun = [];// 列表外按钮需要调用的方法
var sortindex = [];// 排序序号
var sortfield = [];// 排序的字段

// 遍历列表中需要添加的操作项、函数、参数、图标
$.each(opers, function(n, value) {
	var param = [];
	if (value.indexOf("(") >= 0) {
		param = value.substring(value.indexOf("(") + 1, value.indexOf(")"))
				.split("~");
		params[value.substring(0, value.indexOf("("))] = param;
		operfun.push(value.substring(0, value.indexOf("(")));
	} else {
		params[value] = [];
		operfun.push(value);
	}
	if (operimage.length <= n || operimage[n] == '') {
		operimg.push("chakan");//图标默认chakan1.gif
	} else
		operimg.push(operimage[n]);
});

// 遍历页面需要添加的按钮及参数
$.each(buttons, function(n, value) {
	var param = [];
	if (value.indexOf("(") >= 0) {
		param = value.substring(value.indexOf("(") + 1, value.indexOf(")"))
				.split("~");
		params[value.substring(0, value.indexOf("("))] = param;
		buttonfun.push(value.substring(0, value.indexOf("(")));
	} else {
		params[value] = [];
		buttonfun.push(value);
	}
});

// 遍历列表中需要添加的排序字段
$.each(sortitem, function(n, value) {
	sortfield.push(value.substring(0, value.indexOf("@")));
	sortindex.push(value.substring(value.indexOf("@") + 1));
});

//从JSP页面获取参数值
function getparam(data, selectrow) {
	var param = "temp=1";
	$.each(data, function(n, value) {
		param += "&" + value + "="
				+ $("input[name=" + value + "]:eq(" + selectrow + ")").val();
	});
	return param;
}

// 添加     params中的健与按钮触发的函数名一致 ，所以add的参数是params.add
function add() {
	var param = "temp=1";
	$.each(params.add, function(n, value) {
		param += "&" + value;// 拼接URL参数串
	});
	window.location = short + "edit.action?" + param;
}

// 添加2  处理形如：tianjia(../bjgl/lyycedit.action)
function tianjia() {
	window.location = params.tianjia + "";
}

// 修改
function update(selectrow) {
	var param = getparam(params.update, selectrow);
	window.location = short + "_get.action?" + param;
}

// 查看
function view(selectrow) {
	var param = getparam(params.view, selectrow);
	do_open(short + "view.action?" + param,"");
}

// 查询 处理形如：query(realaction=../bjgl/lyyclist.action)，可以键值对传参数，以~分开
function query() {
	var param = "temp=1";
	$.each(params.query, function(n, value) {
		param += "&" + value;
	});
	window.location = short + "query.action?" + param;
}

// 查询2  处理形如：chaxun(../bjgl/bjquery.action?realaction=../bjgl/lyyclist.action)
function chaxun() {
	window.location = params.chaxun + "";
}

// 注销
function logout(selectrow) {
	var param = "temp=1";
	var id = "";
	var zt = $("input[name=zt]:eq(" + selectrow + ")").val();
	if (zt == 1) {
		alert("该信息已被注销！");
		return false;
	}
	$.each(params.logout, function(n, value) {
		param += "&" + value + "="
				+ $("input[name=" + value + "]:eq(" + selectrow + ")").val();
	});
	if (confirm("您确定要注销该信息吗？"))
		window.location = short + "_logout.action?" + param;
}

// 初始化页面
$(document).ready(function() {
	addOper(opertitle, operfun, operimg, "listtable","0");
	initList(sortindex, sortfield, "listtable");
	addButton(buttontitle, buttonfun);
});
