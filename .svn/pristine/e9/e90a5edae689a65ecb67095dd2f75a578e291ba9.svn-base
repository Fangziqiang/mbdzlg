
/** ===============================================================
 *
 * 此JS包含FORM表单的验证。HTML中只需引入此JS即可。
 * 此JS包含STRING的两个方法：
 * 1、计算实际长度的方法（汉字算两个字符）
 * 2、删除字符串两头空格的方法
 *
 * =================================================================*/
String.prototype.endWith = function (s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length) {
		return false;
	}
	if (this.substring(this.length - s.length) == s) {
		return true;
	} else {
		return false;
	}
	return true;
};
String.prototype.startWith = function (s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length) {
		return false;
	}
	if (this.substr(0, s.length) == s) {
		return true;
	} else {
		return false;
	}
	return true;
};
String.prototype.length2 = function () {
	var cArr = this.match(/[^\x00-\xff]/ig);
	return this.length + (cArr == null ? 0 : cArr.length);
};
String.prototype.trim = function () {
	var i, b = 0, e = this.length;
	for (i = 0; i < this.length; i++) {
		if (this.charAt(i) != " ") {
			b = i;
			break;
		}
	}
	if (i == this.length) {
		return "";
	}
	for (i = this.length - 1; i >= b; i--) {
		if (this.charAt(i) != " ") {
			e = i;
			break;
		}
	}
	return this.substring(b, e + 1);
};
var x_flag = "\n";
function setFlag(f) {
	x_flag = f;
}
function alertErrorMsg(errorMsg) {
	alert(errorMsg);
}
// 页面覆盖此方法继续校验
function customCheck(f) {
	return "";
}
/*如果有页签，需要转换页签*/
function setTagVisible(obj) {
	if (obj == null) {
		return;
	}
	var tab = obj.parentElement;
	while ((tab.tagName != "DIV" || tab.id.toUpperCase().substr(0, 3) != "TAG") && tab.tagName != "BODY") {
		tab = tab.parentElement;
	}
	if (tab.tagName == "BODY") {
		return;
	}
	var maxtab = 0;
	for (var i = 1; i < 15; i++) {
		var objtd = document.getElementById("td" + i);
		if (objtd != null) {
			maxtab = i;
		} else {
			break;
		}
	}
	if (maxtab > 1) {
		ShowTag(tab.id.substr(3), maxtab);
	}
}
// 检查form
function checkForm(f) {
	var errorMsg = "";
	var hasFocus = false;
	for (var elementIndex = 0; elementIndex < f.elements.length; elementIndex++) {
		var ele;
		try {
			ele = f.elements[elementIndex];
			var eleTagn = ele.tagName;
			var eleType = ele.type;
			if ((eleTagn == "INPUT"  && (eleType == "text" || eleType == "password" || eleType == "checkbox" || eleType == "radio")) || ele.tagName == "TEXTAREA") {
				/*检查CHECKBOX。CHECKBOX仅检查是否必须选择以及选择的项数*/
				if (eleType == "checkbox") {
					errorMsg += checkCheckBox(ele);
				} else if(eleType == "radio"){
					errorMsg += checkRadio(ele);
	
				} else {
					errorMsg += checkElement(ele);
				}
				/*定位*/
				if (!hasFocus && errorMsg != "") {
					try {
						hasFocus = true;
						/*如果有页签，需要转换页签*/
						setTagVisible(ele);
						ele.focus();
					}
					catch (e) {
					}
				}
			}else {
				if (ele.tagName == "SELECT") {
					errorMsg += checkSelect(ele);
					/*定位*/
					if (!hasFocus && errorMsg != "") {
						hasFocus = true;
						ele.focus();
					}
				}
			}
		}
		catch (e) {
		}
	}
	errorMsg += customCheck(f);
	if (errorMsg != "") {
		alertErrorMsg(errorMsg);
		return false;
	}
	return true;
}
function checkNull(checkType, checkValue, titleValue) {
	var pat = /notnull/g;
	if (pat.test(checkType) && checkValue.trim() == "") {
		return titleValue + "\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u8f93\u5165\u3002" + x_flag;
	}
	return "";
}
function checkNumber(checkType, checkValue, titleValue) {
	var pat = new RegExp("number\\([=]{0,1}\\d+,{0,1}\\d*\\)", "g");
	if (!pat.test(checkType) || checkValue == "") {
		return "";
	}
	pat.compile("number\\((\\d+),(\\d+)\\)", "g");
	if (pat.test(checkType)) {
		var zs = RegExp.$1;
		var xs = RegExp.$2;
		/*张方俊 2008-11-4 根据ORACLE的要求，（13,3）代表10位整数和3位小数*/
		zs = zs - xs;
		if (checkValue.indexOf(".") == -1) {
			checkValue = checkValue + ".";
		}
		pat.compile("^\\d{1," + zs + "}\\.{0,1}\\d{0," + xs + "}$", "g");
		if (pat.test(checkValue)) {
			return "";
		} else {
			return titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u5165\u6570\u5b57\uff0c\u4e14\u6574\u6570\u90e8\u5206\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7" + zs + "\u4f4d\uff0c\u5c0f\u6570\u90e8\u5206\u4e0d\u80fd\u8d85\u8fc7" + xs + "\u4f4d\u3002" + x_flag;
		}
	}
	pat.compile("number\\((\\d+)\\)", "g");
	if (pat.test(checkType)) {
		var zs = RegExp.$1;
		pat.compile("^\\d{1," + zs + "}$", "g");
		if (pat.test(checkValue)) {
			return "";
		} else {
			return titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u5165\u6574\u6570\uff0c\u4e14\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7" + zs + "\u4f4d\u3002" + x_flag;
		}
	}
	/*张方俊 2008-11-4 增加等于的判断*/
	pat.compile("number\\(=(\\d+)\\)", "g");
	if (pat.test(checkType)) {
		var zs = RegExp.$1;
		pat.compile("^\\d{" + zs + "}$", "g");
		if (pat.test(checkValue)) {
			return "";
		} else {
			return titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u5165" + zs + "\u4f4d\u6574\u6570\u3002" + x_flag;
		}
	}
}
function checkDate(checkType, checkValue, titleValue) {
	var pat = /date/g;
	if (!pat.test(checkType) || checkValue == "") {
		return "";
	}
	var errMsg = __checkDate__(checkValue);
	return errMsg == "" ? "" : (titleValue + errMsg + "\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u3002" + x_flag);
}
function __checkDate__(dateValue) {
	var pat = /^(\d{4})-(\d{2})-(\d{2})$/g;
	if (!pat.test(dateValue)) {
		return "\u683c\u5f0f\u6709\u8bef\uff01\u6807\u51c6\u683c\u5f0f\u5982\uff1a2006-01-01";
	}
	var year = parseInt(RegExp.$1, 10);
	var month = parseInt(RegExp.$2, 10);
	var day = parseInt(RegExp.$3, 10);
	var thisDay = 0;
	var errMsg = "";
	switch (month) {
	  case 1:
	  case 3:
	  case 5:
	  case 7:
	  case 8:
	  case 10:
	  case 12:
		thisDay = 31;
		break;
	  case 4:
	  case 6:
	  case 9:
	  case 11:
		thisDay = 30;
		break;
	  case 2:
		(((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? thisDay = 29 : thisDay = 28);
		break;
	}
	var pre = "";
	if ((year > 3000) || (year < 1900)) {
		errMsg += pre + "\u683c\u5f0f\u4e2d\u7684\u5e74\u4efd\u6709\u8bef";
		pre = "\uff0c";
	}
	if ((month > 12) || (month < 1)) {
		errMsg += pre + "\u683c\u5f0f\u4e2d\u7684\u6708\u6709\u8bef";
		pre = "\uff0c";
	} else {
		if ((day > thisDay) || (day < 1)) {
			errMsg += pre + "\u683c\u5f0f\u4e2d\u7684\u65e5\u6709\u8bef";
			pre = "\uff0c";
		}
	}
	return errMsg;
}
function checkInputLength(checkType, checkValue, titleValue) {
	var pat = /length(<=|=)(\d+)/g;
	if (!pat.test(checkType) || checkValue == "") {
		return "";
	}
	var opt = RegExp.$1;
	var val = parseInt(RegExp.$2, 10);
	var len = checkValue.length2();
	var l = ((val % 2) == 1) ? ((val - 1) / 2) : val / 2;
	var m = "\u3002";
	if (l != 0) {
		m = "\u6216" + l + "\u4f4d\u6c49\u5b57\u3002";
	}
	if (opt == "<=" && len > val) {
		return titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u5165\u4e0d\u8d85\u8fc7" + val + "\u4f4d\u5b57\u7b26" + m + x_flag;
	} else {
		if (opt == "=" && len != val) {
			return titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u5165" + val + "\u4f4d\u5b57\u7b26" + m + x_flag;
		}
	}
	return "";
}
function checkDHHM(checkType, checkValue, titleValue) {
	var pat = /dhhm/g;
	if (!pat.test(checkType) || checkValue == "") {
		return "";
	}
	pat.compile("^[\\d,\\-,\\+,\\ ]+$", "g");
	if (!pat.test(checkValue)) {
		return titleValue + "\u6709\u8bef\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801\u3002" + x_flag;
	}
	var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
	if (patrn.test(checkValue)) {
		return "";
	}
	return titleValue + "\u6709\u8bef\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801\u3002" + x_flag;
}
function checkSFZ(checkType, checkValue, titleValue) {
	var pat = /sfz/g;
	if (!pat.test(checkType) || checkValue == "") {
		return "";
	}
	var s = checkValue;
	pat.compile("^\\d{15}|\\d{17}[0-9,X]$", "g");
	var sfzErrMsg = titleValue + "\u6709\u8bef\u3002\u8bf7\u8f93\u516515\u4f4d\u6216\u800518\u4f4d\u516c\u6c11\u8eab\u4efd\u53f7\u7801\uff01" + x_flag;
	if (!pat.test(s)) {
		return (sfzErrMsg);
	}
	if (s.length == 18 && s.substr(17) != getSfzLastCode(s.substring(0, 17))) {
		var err = "\u6821\u9a8c\u7801\u6709\u8bef";
		return (sfzErrMsg);
	}
	if (s.length == 15) {
		s = sfz15to18(s);
	}
	var birthErrMsg = __checkDate__(getBirth(s));
	if (birthErrMsg != "") {
		var err = "\u51fa\u751f\u65e5\u671f\u6709\u8bef";
		return (sfzErrMsg);
	}
	return "";
}
//获取身份证行政区划代码
function getxzqhdm(sfz) {
	if (sfz == null || sfz.length != 18) {
		return "";
	}
	return sfz.substring(0, 6);
}
//获取身份证性别
function getxbdm(sfz) {
	if (sfz == null || sfz.length != 18) {
		return "";
	}
	return (parseInt(sfz.charAt(16)) + 1) % 2;
}
//身份证15位转18位
function sfz15to18(sfz) {
	if (sfz == null || (sfz.length != 15 && sfz.length != 17 && sfz.length != 18)) {
		return "";
	}
	var retsfz = sfz;
	if (retsfz.length == 15) {
		retsfz = retsfz.substr(0, 6) + "19" + retsfz.substr(6);
	}
	if (retsfz.length == 17) {
		retsfz = retsfz + getSfzLastCode(retsfz);
	}
	return retsfz;
}
function getSfzLastCode(sfz) {
	if (sfz == null || sfz.length < 17 || sfz.length > 18) {
		return "";
	}
	var Num = 0;
	for (i = 0; i < 17; i++) {
		Num += Math.pow(2, 17 - i) % 11 * Number(sfz.substr(i, 1));
	}
	Num = Num % 11;
	var code = (12 - Num) % 11;
	return code < 10 ? String(code) : "X";
}
//获取身份证出生日期
function getBirth(sfz) {
	if (sfz == null || sfz.length != 18) {
		return "";
	}
	return sfz.substring(6, 10) + "-" + sfz.substring(10, 12) + "-" + sfz.substring(12, 14);
}
function checkElement(field) {
	var titleValue = field.title;
	
	if (!titleValue) {
		return "";
	}
	var checkValue = field.value;
	var checkType = field.alt;
	if (!checkType) {
		return "";
	}
	var errorMsg = "";
	/*检查空值。通过notnull标识*/
	errorMsg += checkNull(checkType, checkValue, titleValue);
	/*检查数字，包括小数点。通过number标识，如number(3,2)表示111.11、11.1合法，而1111.不合法*/
	errorMsg += checkNumber(checkType, checkValue, titleValue);
	/*检查日期。通过date标识*/
	errorMsg += checkDate(checkType, checkValue, titleValue);
	/*检查输入项的长度，汉字的长度为2。通过length<=标识*/
	errorMsg += checkInputLength(checkType, checkValue, titleValue);
	/*检查身份证。通过sfz标识*/
	errorMsg += checkSFZ(checkType, checkValue, titleValue);
	/*检查电话号码。通过dhhm标识*/
	errorMsg += checkDHHM(checkType, checkValue, titleValue);
	return errorMsg;
}
function checkSelect(field) {
	var titleValue = field.title;
	if (!titleValue || titleValue == "") {
		return "";
	}
	var fieldName = field.name;
	var checkType = document.getElementsByName(fieldName)[0].getAttribute("alt");
	//var checkType = field.alt;
	if (!checkType || checkType == "") {
		return "";
	}
	var errorMsg = "";
	var val = field.value;
	var pat = /notnull/g;
	if (pat.test(checkType) && val == "") {
		return titleValue + "\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u9009\u62e9\u3002" + x_flag;
	}
	return "";
}
function checkRadio(field) {
	var fieldName = field.name;
	var fields = document.getElementsByName(fieldName);
	if (field != fields[0]) {
		return "";
	}
	var titleValue = field.title;
	if (!titleValue) {
		titleValue = "";
	}
	var checkType = field.alt;
	if (!checkType) {
		checkType = "";
	}
	var errorMsg = "";
	var count = 0;
	for (var i = 0; i < fields.length; i++) {
		var altTmp = fields[i].alt;
		if (altTmp && altTmp.length > checkType) {
			titleValue = fields[i].title;
			checkType = altTmp;
		}
		if (fields[i].checked) {
			count++;
		}
	}
	if (!titleValue) {
		return "";
	}
	if (!checkType) {
		return "";
	}
	var pat = /notnull/g;
	if (pat.test(checkType) && count == 0) {
		return titleValue + "\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u9009\u62e9\u3002" + x_flag;
	}
	return "";
}
function checkCheckBox(field) {
	var fieldName = field.name;
	var fields = document.getElementsByName(fieldName);
	if (field != fields[0]) {
		return "";
	}
	var titleValue = field.title;
	if (!titleValue) {
		titleValue = "";
	}
	var checkType = field.alt;
	if (!checkType) {
		checkType = "";
	}
	var errorMsg = "";
	var count = 0;
	for (var i = 0; i < fields.length; i++) {
		var altTmp = fields[i].alt;
		if (altTmp && altTmp.length > checkType) {
			titleValue = fields[i].title;
			checkType = altTmp;
		}
		if (fields[i].checked) {
			count++;
		}
	}
	if (!titleValue) {
		return "";
	}
	if (!checkType) {
		return "";
	}
	/*检查CHECKBOX，如：notnull;length=3标识不能必须选择，且只能选择三项。length<=5标识可以选择，
	可以不选。但选择最多不能超过5项*/
	var pat = /notnull/g;
	if (pat.test(checkType) && count == 0) {
		return titleValue + "\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u9009\u62e9\u3002" + x_flag;
	}
	pat = /length(<=|=)(\d+)/g;
	if (!pat.test(checkType) || count == 0) {
		return "";
	}
	var opt = RegExp.$1;
	var val = parseInt(RegExp.$2, 10);
	if (opt == "<=" && val < count) {
		//return titleValue + "选择了" + count　+ "项，超过了最大允许的" + val + "项。请重新选择。" + x_flag; 
	}
	if (opt == "=" && val != count) {
		//return titleValue + "选择了" + count　+ "项，而只允许选择" + val + "项。请重新选择。" + x_flag; 
	}
	return "";
}
function fromOnSubmit() {
	//treatInput();	
	var sform = event.srcElement;
	if (!checkForm(sform)) {
		return false;
	}
	if (sform.oldfun && sform.oldfun.func) {
		return sform.oldfun.func();
	}
	return true;
}
function treatForm() {
	if (document.readyState != "complete") {
		return;
	}
	var curforms = document.forms;
	if (curforms.length > 0) {
		for (var i = 0; i < curforms.length; i++) {
			var ss = new Object();
			ss.func = curforms[i].onsubmit;
			curforms[i].oldfun = ss;
			curforms[i].onsubmit = fromOnSubmit;
		}
	}
	document.body.onpaste = docPaste;
}
function docPaste() {
	var src = event.srcElement;
	if (src.type == "text" || src.type == "textarea") {
		var str = window.clipboardData.getData("Text");
		window.clipboardData.setData("Text", str.replace(/[`$#@%~&*<>;:\'\"\/\\\\]/g, "").replace(/[\,]/g, "\uff0c"));
	}
}
function docKeyPress() {
	var src = event.srcElement;
	if (src.type == "text" || src.type == "textarea" || src.type == "password") {
		if (event.srcElement.name == "wz" && event.keyCode == 58) {
			return true;
		} //让网址输入':'字符
		if (event.srcElement.name == "yx" && event.keyCode == 64) {
			return true;
		} //让邮箱输入'@'字符
		if (event.keyCode >= 33 && event.keyCode <= 41) {
			return false;
		}
		if (event.keyCode >= 43 && event.keyCode <= 44) {
			return false;
		}
		if (event.keyCode >= 58 && event.keyCode <= 64) {
			return false;
		}
		if (event.keyCode >= 91 && event.keyCode <= 96) {
			return false;
		}
		if (event.keyCode == 126) {
			return false;
		}
	}
	return true;
}
/*Added by zwt 检验输入是否全为数字*/
function checkOnlyNum(title, id) {
	var s = document.getElementById(id).value;
	if (s.replace(/\D/, "") != s) {
		alert(title + " \u4e0d\u662f\u6570\u5b57,\u8bf7\u91cd\u65b0\u8f93\u5165\uff01");
		document.getElementById(id).focus();
		return false;
	} else {
		return true;
	}
}
/*Added by zwt 检验输入是否含有特殊字符*/
function checkSpecialSymbol(checkedFieldName, checkedFieldValue, checkedSpecialSymbol) {
	if (checkedFieldValue.indexOf(checkedSpecialSymbol) != -1) {
		alert(" " + checkedFieldName + " \u4e2d\u542b\u6709\u975e\u6cd5\u5b57\u7b26 " + checkedSpecialSymbol + " ,\u8bf7\u91cd\u65b0\u8f93\u5165\uff01");
		return true;
	}
}
function docKeyDown() {
	var src = event.srcElement;
	if (src.type != "text" && src.type != "textarea" && src.type != "password" && event.keyCode == 8) {
		return false;
	} else {
		if (src.readOnly) {
			return false;
		}
	}
	return true;
}
//document.onkeypress = docKeyPress;
//document.onkeydown = docKeyDown;
//document.onreadystatechange = treatForm;


//全部清空功能
function clearInput(formObj, condition, flag) {
	var form = null;
	if (formObj == null || trim(formObj) == "") {
		form = document.forms[0];
	} else {
		form = formObj;
	}
	condition = "," + condition + ",";
	if (flag == null || flag == "") {
		flag = "all";
	}
	for (var i = 0; i < form.elements.length; i++) {
		var ele = form.elements[i];
		var eleTagn = ele.tagName;
		var eleType = ele.type;
		if ((eleTagn == "INPUT" && (eleType == "text" || eleType == "checkbox" || eleType == "radio")) || ele.tagName == "TEXTAREA") {
			partClearInput(flag, condition, ele, eleType);
		} else {
			if (eleTagn == "SELECT") {
				partClearSelect(flag, condition, ele);
			}
		}
	}
}
function partClearSelect(flag, condition, ele) {
	var param = "," + ele.name + ",";
	if ((flag == "checked") && (condition.indexOf(param) != -1)) {
		var selectLength = ele.options.length;
		if (selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
	if ((flag == "unchecked") && (condition.indexOf(param) == -1)) {
		var selectLength = ele.options.length;
		if (selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
	if (flag == "all") {
		var selectLength = ele.options.length;
		if (selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
}
function partClearInput(flag, condition, ele, type) {
	var param = "," + ele.name + ",";
	if ((flag == "checked") && (condition.indexOf(param) != -1)) {
		if (type == "text" || type == "textarea") {
			ele.value = "";
		} else {
			ele.checked = false;
		}
	}
	if ((flag == "unchecked") && (condition.indexOf(param) == -1)) {
		if (type == "text" || type == "textarea") {
			ele.value = "";
		} else {
			ele.checked = false;
		}
	}
	if (flag == "all") {
		if (type == "text" || type == "textarea") {
			ele.value = "";
		} else {
			ele.checked = false;
		}
	}
}
//检查必须输入的域，去除空格
function checkMustInput(valuefields, titles) {
	var chres = true;
	var pstr = "";
	for (var i = 0; i < valuefields.length; i++) {
		var field = document.getElementById(valuefields[i]);
		if (field != null && field.value.replace(" ", "") == "") {
			if (chres) {
				field.focus();
			}
			if (titles.length > i && titles[i] != "") {
				pstr += "\u201c" + titles[i] + "\u201d\u4e0d\u53ef\u4ee5\u4e3a\u7a7a\uff01\n";
			}
			chres = false;
		}
	}
	if (pstr != "") {
		alert(pstr);
	}
	return chres;
}

//验证护照是否正确
function checknumber(number){
	var str=number;
	//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
	var Expression=/(P\d{7})|(G\d{8})/;
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
	   return true;
	}else{
	   return false;
	} 
}

