var hide;
var dataobj;
var closeflag = false;
function tips_pop() {
	if (closeflag) {
		return;
	} else {
		$.ajax({
			type : "post",
			url : "bjgl/bjxx_getBjxxAjax_ajax",
			async : false,
			processData : false,
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			success : function(data) {
				dataobj = eval("(" + data + ")"); // 转换为json对象
				if (dataobj == null || dataobj.length == 0) {
					return;
				}
				viewJson(dataobj);
				var MsgPop = document.getElementById("winpop");// 获取窗口这个对象,即ID为winpop的对象
				var popH = parseInt(MsgPop.style.height);// 用parseInt将对象的高度转化为数字,以方便下面比较
				if (popH == 0) {// 如果窗口的高度是0
					MsgPop.style.display = "block";// 那么将隐藏的窗口显示出来
					hide = setInterval("changeH('up')", 2);// 开始以每0.002秒调用函数changeH("up"),即每0.002秒向上移动一次
				}
			},
			error : function() {
				alert("获取数据时产生错误，请与管理员联系！");
			}
		});
	}
}
function tips_pop_qz() {
	if (closeflag) {
		return;
	} else {
		$.ajax({
			type : "post",
			url : "qzdwsbgl/getQzdwsbAjax.action",
			async : false,
			processData : false,
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			success : function(data) {
				dataobj = eval("(" + data + ")"); // 转换为json对象
				if (dataobj == null || dataobj.length == 0) {
					return;
				}
				viewQzJson(dataobj);
				var MsgPop = document.getElementById("winpopQz");// 获取窗口这个对象,即ID为winpop的对象
				var popH = parseInt(MsgPop.style.height);// 用parseInt将对象的高度转化为数字,以方便下面比较
				if (popH == 0) {// 如果窗口的高度是0
					MsgPop.style.display = "block";// 那么将隐藏的窗口显示出来
					hide = setInterval("changeQ('up')", 2);// 开始以每0.002秒调用函数changeH("up"),即每0.002秒向上移动一次
				}
			},
			error : function() {
				alert("获取数据时产生错误，请与管理员联系！");
			}
		});
	}
}
function tips_close() {
	closeflag = true;
	hide = setInterval("changeH('down')", 2);// 开始以每0.002秒调用函数changeH("down"),即每0.002秒向下移动一次
}

function tips_qz_close() {
	closeflag = true;
	hide = setInterval("changeQ('down')", 2);// 开始以每0.002秒调用函数changeH("down"),即每0.002秒向下移动一次
}

function changeH(str) {
	var MsgPop = document.getElementById("winpop");
	var popH = parseInt(MsgPop.style.height);
	if (str == "up") {// 如果这个参数是UP
		if (popH <= 160) {// 如果转化为数值的高度小于等于100
			MsgPop.style.height = (popH + 8).toString() + "px";// 高度增加4个象素
		} else {
			clearInterval(hide);// 否则就取消这个函数调用,意思就是如果高度超过160象度了,就不再增长了
		}
	}
	if (str == "down") {
		if (popH >= 8) {// 如果这个参数是down
			MsgPop.style.height = (popH - 8).toString() + "px";// 那么窗口的高度减少4个象素
		} else {// 否则
			clearInterval(hide);// 否则就取消这个函数调用,意思就是如果高度小于4个象度的时候,就不再减了
			MsgPop.style.display = "none";// 因为窗口有边框,所以还是可以看见1~2象素没缩进去,这时候就把DIV隐藏掉
		}
	}
}

function changeQ(str) {
	var MsgPop = document.getElementById("winpopQz");
	var popH = parseInt(MsgPop.style.height);
	if (str == "up") {// 如果这个参数是UP
		if (popH <= 160) {// 如果转化为数值的高度小于等于100
			MsgPop.style.height = (popH + 8).toString() + "px";// 高度增加4个象素
		} else {
			clearInterval(hide);// 否则就取消这个函数调用,意思就是如果高度超过160象度了,就不再增长了
		}
	}
	if (str == "down") {
		if (popH >= 8) {// 如果这个参数是down
			MsgPop.style.height = (popH - 8).toString() + "px";// 那么窗口的高度减少4个象素
		} else {// 否则
			clearInterval(hide);// 否则就取消这个函数调用,意思就是如果高度小于4个象度的时候,就不再减了
			MsgPop.style.display = "none";// 因为窗口有边框,所以还是可以看见1~2象素没缩进去,这时候就把DIV隐藏掉
		}
	}
}

window.onload = function() {// 加载
	if (null != document.getElementById('winpop')) {
		document.getElementById('winpop').style.height = '0px';
		tips_pop();
	}

	if (null != document.getElementById('winpopQz')) {
		document.getElementById('winpopQz').style.height = '0px';
		tips_pop_qz();
	}

	// setTimeout("tips_pop()", 800);// 3秒后调用tips_pop()这个函数 setInterval
};
function viewJson(dataobj) {
	var str = "";
	for ( var i = 0; i < dataobj.length; i++) {
		var ry = "护卫员" + dataobj[i].ry_xm;
		if (dataobj[i].ry_xm == '未知')
			ry = "未知护卫员";
		str += "<tr><td><a href='" + getUrl(dataobj[i].lx)
				+ "?method=bjgl&qwzt=" + dataobj[i].qwzt
				+ "'>&nbsp;&nbsp;&nbsp;" + dataobj[i].djsj.substring(11)
				+ "，押运车" + dataobj[i].cphm + "，" + ry + "持枪支"
				+ dataobj[i].qz_id + dataobj[i].dz
				+ "，发生<font class='lightFont'>" + dataobj[i].qwzt_dicvalue
				+ "</font></a></td></tr>";
		if (i == 2)
			break;
	}
	document.getElementById('myorder').innerHTML = "<table>" + str + "</table>";
	if (dataobj.length >= 3)
		$("#bottom").css("display", "block");
}

function viewQzJson(dataobj) {
	var str = "";
	for ( var i = 0; i < dataobj.length; i++) {
		if ("BJ10" == dataobj[i].dwxx) {
			str += "<tr><td><a href='#'>&nbsp;&nbsp;&nbsp;手机号码"
					+ dataobj[i].sjhm
					+ "  的枪支，<font class='lightFont'>手机号码报警</font></a></td></tr>";
		}
		if ("BO01" == dataobj[i].dwxx) {
			str += "<tr><td><a href='#'>&nbsp;&nbsp;&nbsp;手机号码"
					+ dataobj[i].sjhm
					+ "  的枪支，<font class='lightFont'>电池电量低</font></a></td></tr>";
		}
		if ("BJ11" == dataobj[i].dwxx) {
			str += "<tr><td><a href='#'>&nbsp;&nbsp;&nbsp;手机号码"
					+ dataobj[i].sjhm
					+ "  的枪支，<font class='lightFont'>正在充电</font></a></td></tr>";
		}
		if (i == 5)
			break;
	}
	document.getElementById('myorder').innerHTML = "<table>" + str + "</table>";
	if (dataobj.length >= 3)
		$("#bottom").css("display", "block");
}

function getUrl(ly) {
	var url;
	if (ly == 'sxc') {
		url = "qwgl/qzsxclist.action";
	} else if (ly == 'qwd') {
		url = "qwgl/qzqwdqdlist.action";
	} else {
		url = "qwgl/qzcrklist.action";
	}
	return url;
}
