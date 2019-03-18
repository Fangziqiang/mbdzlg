/** ===============================================================
 *
 * ��JS����FORM������֤��HTML��ֻ�������JS���ɡ�
 * ��JS����STRING������������
 * 1������ʵ�ʳ��ȵķ����������������ַ���
 * 2��ɾ���ַ�����ͷ�ո�ķ���
 *
 * =================================================================*/
function checkCharFormat(cValue){
	var asciiFormat = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	return asciiFormat.indexOf(cValue);	
}
String.prototype.length2 = function() {
	/*
	 * ԭ����
	 * var cArr = this.match(/[^\x00-\xff]/ig);
     * return this.length + (cArr == null ? 0 : cArr.length);
	 * */
	var iLength = 0;
	for(var i = 0; i < this.length; i ++ ){
		//var k = checkCharFormat(this.charAt(i));
		if(checkCharFormat(this.charAt(i)) != -1){
			iLength += 1;
		}else{
			iLength += 2;
		}
	}
	return iLength;
}
String.prototype.trim = function() {
	var  i,b=0,e=this.length;  
    for(i=0;i<this.length;i++)
    	if(this.charAt(i)!=' ')
        	{
        		b=i;
        		break;
        	}  
     if(i==this.length)  
        return  "";  

   	for(i=this.length-1;i>=b;i--) 
   		if(this.charAt(i)!=' ')
      		{
      			e=i;
      			break;
      		}  
  return  this.substring(b,e+1);
}
var x_flag = "\n";
function setFlag(f){
	x_flag = f;
}
function alertErrorMsg(errorMsg){
	alert(errorMsg);
}
// ҳ�渲�Ǵ˷�������У��
function customCheck(f){
	return "";
}
/*�����ҳǩ����Ҫת��ҳǩ*/
function setTagVisible(obj){
	if(obj == null) return;
	var tab = obj.parentElement;
	while((tab.tagName != "DIV" || tab.id.toUpperCase().substr(0,3) != "TAG") && tab.tagName != "BODY"){		
		tab = tab.parentElement;
	}		
	if(tab.tagName == "BODY") return;	
	var maxtab=0;
	for(var i=1;i<15;i++){
		var objtd = document.getElementById("td" + i);
		if(objtd!=null) 
			maxtab=i;
		else
			break;
	}
	if(maxtab>1){
		ShowTag(tab.id.substr(3),maxtab);
	}
}
// ���form
function checkForm(f) {
	var errorMsg = "";
	var hasFocus = false;
	for (var elementIndex = 0;elementIndex < f.elements.length;elementIndex++) {
		var ele;
		try	{
			ele = f.elements[elementIndex];
			var eleTagn = ele.tagName;
			var eleType = ele.type;
			if((eleTagn == "INPUT" && (eleType == "text" || eleType == "checkbox" || eleType == "radio")) || ele.tagName == "TEXTAREA"){
				/*���CHECKBOX��CHECKBOX������Ƿ����ѡ���Լ�ѡ�������*/
				if(eleType == "checkbox"){
					errorMsg += checkCheckBox(ele);
				}else if(eleType == "radio"){
					errorMsg += checkRadio(ele);
				}else{
					errorMsg += checkElement(ele);	
				}
				/*��λ*/
				if(!hasFocus && errorMsg != ""){
					try{
						hasFocus = true;
						/*�����ҳǩ����Ҫת��ҳǩ*/
						setTagVisible(ele);
						ele.focus();
					}catch(e){}
				}
			}else if(ele.tagName == "SELECT"){
				errorMsg += checkSelect(ele);
				/*��λ*/
				if(!hasFocus && errorMsg != ""){
					hasFocus = true;
					ele.focus();
				}
			}		
		}
		catch(e){}
	}
	errorMsg += customCheck(f);  
	//lihonglei �޸� 2009-08-27 �����˶�errorMsg�Ĵ�����operateErrorMsg  Ӧ��ʱ��ҳ���и��Ǵ˷�����д���Լ��Ĵ���
	errorMsg = operateErrorMsg(errorMsg);
	if(errorMsg != ""){
		alertErrorMsg(errorMsg);
		return false;
	}
	return true;
}
function operateErrorMsg(errorMsg) {
	return errorMsg;
}

function checkNull(checkType , checkValue , titleValue){
	var pat = /notnull/g;
	if(pat.test(checkType) && checkValue.trim() == ""){
		return titleValue + "����Ϊ�գ������롣" + x_flag;
	}
	return "";
}
function checkNumber(checkType , checkValue , titleValue){
	var pat = new RegExp("number\\([=]{0,1}\\d+,{0,1}\\d*\\)", "g");
	if(!pat.test(checkType) || checkValue == ""){
		return "";
	}		
	pat.compile("number\\((\\d+),(\\d+)\\)", "g");
	if(pat.test(checkType)){
		var zs = RegExp.$1;	
		var xs = RegExp.$2;
		/*�ŷ��� 2008-11-4 ����ORACLE��Ҫ�󣬣�13,3������10λ������3λС��*/
		zs = zs - xs;
		if(checkValue.indexOf(".") == -1){
			checkValue = checkValue + ".";
		}
		pat.compile("^\\d{1," + zs + "}\\.{0,1}\\d{0," + xs + "}$" , "g");
		if(pat.test(checkValue)){
			return "";
		}else{
			return titleValue + "�������������֣����������ֳ��Ȳ��ܳ���" +  zs + "λ��С�����ֲ��ܳ���" + xs + "λ��" + x_flag;
		}
	}		
	pat.compile("number\\((\\d+)\\)" , "g");
	if(pat.test(checkType)){				
		var zs = RegExp.$1;	
		pat.compile("^\\d{1," + zs + "}$" , "g");
		if(pat.test(checkValue)){
			return "";
		}else{
			return titleValue + "�����������������ҳ��Ȳ��ܳ���" +  zs + "λ��" + x_flag;
		}
	}
	/*�ŷ��� 2008-11-4 ���ӵ��ڵ��ж�*/
	pat.compile("number\\(=(\\d+)\\)" , "g");
	if(pat.test(checkType)){				
		var zs = RegExp.$1;	
		pat.compile("^\\d{" + zs + "}$" , "g");
		if(pat.test(checkValue)){
			return "";
		}else{
			return titleValue + "����������" +  zs + "λ������" + x_flag;
		}
	}
}
function checkDate(checkType , checkValue , titleValue){
	var pat = /date/g;
	if(!pat.test(checkType) || checkValue == ""){
		return "";
	}	
	var errMsg = __checkDate__(checkValue);
	return errMsg == "" ? "" : (titleValue + errMsg + "�����������롣" + x_flag);
}
function __checkDate__(dateValue){
	var pat = /^(\d{4})-(\d{2})-(\d{2})$/g;
	if(!pat.test(dateValue))
	{
		return "��ʽ���󣡱�׼��ʽ�磺2006-01-01";
	}
	var year = parseInt(RegExp.$1, 10);
	var month = parseInt(RegExp.$2, 10);
	var day = parseInt(RegExp.$3, 10);
	var thisDay = 0;
	var errMsg = "";
	switch(month) {
		case 1:case 3:case 5:case 7:case 8:case 10:case 12:thisDay = 31;break;
		case 4:case 6:case 9:case 11:thisDay = 30;break;
		case 2:(((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? thisDay=29 : thisDay=28);break;
	}
	var pre = "";
	if((year > 3000 ) || (year < 1900)) {
		errMsg += pre + "��ʽ�е��������";
		pre = "��";
	}
	if((month > 12 ) || (month < 1)) {
		errMsg += pre + "��ʽ�е�������";
		pre = "��";
	}else if((day > thisDay) || (day < 1)) {
		errMsg += pre + "��ʽ�е�������";
		pre = "��";
	}
	return errMsg;
}

function checkInputLength(checkType , checkValue , titleValue){
	var pat = /length(<=|=)(\d+)/g;
	if(!pat.test(checkType) || checkValue == ""){
		return "";
	}
	var opt = RegExp.$1;
	var val = parseInt(RegExp.$2, 10);
	var len = checkValue.length2();
	var l = ((val%2)==1) ?((val-1)/2) : val/2;
	var m = "��";
	if(l != 0){
		m = "��" + l  + "λ���֡�";
	}	
	if(opt == "<=" && len > val){		
		return titleValue + "���������벻����" + val + "λ�ַ�" + m + x_flag;
	}else if(opt == "=" && len != val){
		return titleValue + "����������" + val + "λ�ַ�" +  m + x_flag;
	}
	return "";
}
function checkDHHM(checkType , checkValue , titleValue){
	var pat = /dhhm/g;
	if(!pat.test(checkType) || checkValue == ""){
		return "";
	}
	pat.compile("^[\\d,\\-,\\+,\\ ]+$","g");
	if(!pat.test(checkValue)){
		return titleValue + "������������ȷ�ĺ��롣" + x_flag;
	}	
	var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
	if(patrn.test(checkValue)){
		return "";
	}
	return titleValue + "������������ȷ�ĺ��롣" + x_flag;
}
function checkSFZ(checkType , checkValue , titleValue){
	var pat = /sfz/g;
	if(!pat.test(checkType) || checkValue == ""){
		return "";
	}
	if(checkValue.indexOf("x") != -1){
		checkValue = checkValue.replace("x","X");
	}
	var s = checkValue;	
	pat.compile("^\\d{15}|\\d{17}[0-9,X]$" , "g");
	var sfzErrMsg = titleValue + "����������15λ����18λ������ݺ��룡" + x_flag;
	if(!pat.test(s)) {
		return(sfzErrMsg);
	}
	if(s.length == 18 && s.substr(17) != getSfzLastCode(s.substring(0,17))){
		var err = "У��������";
		return(sfzErrMsg);
	}
	if(s.length == 15){
		s = sfz15to18(s);
	}	
	var birthErrMsg = __checkDate__(getBirth(s));
	if(birthErrMsg != "") {
		var err = "������������";
		return(sfzErrMsg);
	}		
	return "";
}
//���֤15λת18λ
function sfz15to18(sfz) {
	if(sfz==null || (sfz.length!=15 && sfz.length!=17 && sfz.length!=18)) return "";
	var retsfz = sfz;
	if(retsfz.length==15) retsfz = retsfz.substr(0,6)+"19"+retsfz.substr(6);
	if(retsfz.length==17) retsfz = retsfz + getSfzLastCode(retsfz);
	return retsfz;
}
function getSfzLastCode(sfz)
{
	if(sfz==null || sfz.length<17 || sfz.length>18) return "";
	var Num=0;
	for(i=0;i<17;i++)
	{
		Num += Math.pow(2,17-i) % 11 * Number(sfz.substr(i,1));
	}
	Num = Num % 11;
	var code = (12-Num) % 11;
	return code<10?String(code):"X";
}
//��ȡ���֤��������
function getBirth(sfz) {
	if(sfz == null || sfz.length!=18) return "";
	return sfz.substring(6,10) + "-" + sfz.substring(10,12) + "-" + sfz.substring(12,14);
}
function checkElement(field){
	var titleValue = field.title;
	if(!titleValue){
		return "";
	}
	var checkValue = field.value;
	var checkType = field.alt;
	if(!checkType){
		return "";
	}
	var errorMsg = "";
	/*����ֵ��ͨ��notnull��ʶ*/
	errorMsg += checkNull(checkType , checkValue , titleValue);
	/*������֣�����С���㡣ͨ��number��ʶ����number(3,2)��ʾ111.11��11.1�Ϸ�����1111.���Ϸ�*/
	errorMsg += checkNumber(checkType , checkValue , titleValue);
	/*������ڡ�ͨ��date��ʶ*/
	errorMsg += checkDate(checkType , checkValue , titleValue);
	/*���������ĳ��ȣ����ֵĳ���Ϊ2��ͨ��length<=��ʶ*/
	errorMsg += checkInputLength(checkType , checkValue , titleValue);
	/*������֤��ͨ��sfz��ʶ*/
	errorMsg += checkSFZ(checkType , checkValue , titleValue);
	/*���绰���롣ͨ��dhhm��ʶ*/
	errorMsg += checkDHHM(checkType , checkValue , titleValue);
	return errorMsg;
}
function checkSelect(field){
	var titleValue = field.title;	
	if(!titleValue || titleValue == ""){
		return "";
	}
	var checkType = field.alt;
	if(!checkType || checkType == ""){
		return "";
	}	
	var errorMsg = "";
	var val = field.value;
	var pat = /notnull/g;
	if(pat.test(checkType) && val == ""){
		return titleValue + "����Ϊ�գ���ѡ��" + x_flag;
	}
	return "";
}
function checkRadio(field){
	var fieldName = field.name;
	var fields = document.getElementsByName(fieldName);
	if(field != fields[0]){
		return "";
	}
	var titleValue = field.title;	
	if(!titleValue) titleValue = "";
	var checkType = field.alt;
	if(!checkType) checkType = "";	
	var errorMsg = "";
	var count = 0;
	for(var i=0;i<fields.length;i++){
		var altTmp = fields[i].alt;
		if(altTmp && altTmp.length > checkType){
			titleValue = fields[i].title;
			checkType = altTmp;
		}
		if(fields[i].checked){
			count++;
		}
	}	
	if(!titleValue){
		return "";
	}
	if(!checkType){
		return "";
	}
	var pat = /notnull/g;
	if(pat.test(checkType) && count == 0){
		return titleValue + "����Ϊ�գ���ѡ��" + x_flag;
	}
	return "";
}
function checkCheckBox(field){
	var fieldName = field.name;
	var fields = document.getElementsByName(fieldName);
	if(field != fields[0]){
		return "";
	}
	var titleValue = field.title;	
	if(!titleValue) titleValue = "";
	var checkType = field.alt;
	if(!checkType) checkType = "";	
	var errorMsg = "";
	var count = 0;
	for(var i=0;i<fields.length;i++){
		var altTmp = fields[i].alt;
		if(altTmp && altTmp.length > checkType){
			titleValue = fields[i].title;
			checkType = altTmp;
		}
		if(fields[i].checked){
			count++;
		}
	}	
	if(!titleValue){
		return "";
	}
	if(!checkType){
		return "";
	}
	/*���CHECKBOX���磺notnull;length=3��ʶ���ܱ���ѡ����ֻ��ѡ�����length<=5��ʶ����ѡ��
	���Բ�ѡ����ѡ����಻�ܳ���5��*/
	var pat = /notnull/g;
	if(pat.test(checkType) && count == 0){
		return titleValue + "����Ϊ�գ���ѡ��" + x_flag;
	}	
	pat = /length(<=|=)(\d+)/g;
	if(!pat.test(checkType) || count == 0){
		return "";
	}
	var opt = RegExp.$1;
	var val = parseInt(RegExp.$2, 10);
	if(opt == "<=" && val < count){
		return titleValue + "ѡ����" + count��+ "���������������" + val + "�������ѡ��" + x_flag; 
	}
	if(opt == "=" && val != count){
		return titleValue + "ѡ����" + count��+ "���ֻ����ѡ��" + val + "�������ѡ��" + x_flag; 
	}
	return "";
}
function fromOnSubmit() {
	//treatInput();	
	var sform = event.srcElement;	
	if(!checkForm(sform)){
		return false;
	}
	if(sform.oldfun && sform.oldfun.func) {
		return sform.oldfun.func();
	}
	return true;
}
function treatForm() {
	if(document.readyState!="complete") return;
	var curforms = document.forms;
	if(curforms.length>0) {
		for(var i=0;i<curforms.length;i++) {
			var ss = new Object();
			ss.func = curforms[i].onsubmit;
			curforms[i].oldfun = ss;
			curforms[i].onsubmit= fromOnSubmit;
		}
	}
	document.body.onpaste = docPaste;
}
function docPaste()
{
	var src = event.srcElement;
	if(src.type=="text" || src.type=="textarea")
	{
		var str = window.clipboardData.getData("Text");
		window.clipboardData.setData("Text", str.replace(/[`$#@%~&*<>;:\'\"\/\\\\]/g,'').replace(/[\,]/g,"��"));
	}
}
function docKeyPress()
{
	var src = event.srcElement;
	if(src.type=="text" || src.type=="textarea"){
		if(event.keyCode>=33 && event.keyCode<=41) return false;
		if(event.keyCode>=43 && event.keyCode<=44) return false;
		if(event.keyCode>=58 && event.keyCode<=64) return false;
		if(event.keyCode>=91 && event.keyCode<=96) return false;		
		if(event.keyCode==47) return false;
		if(event.keyCode==126) return false;
	}
	return true;
}
function docKeyDown()
{
	var src = event.srcElement;
	if(src.type != "text" && src.type != "textarea" && event.keyCode == 8){
		return false;
	}else if(src.readOnly){
		return false;
	}
	return true;
}
document.onkeypress = docKeyPress;
document.onkeydown = docKeyDown;
document.onreadystatechange = treatForm;


//ȫ����չ���
function clearInput(formObj, condition, flag) {
	var form = null;
	if(formObj==null || trim(formObj) == '') {
		form = document.forms[0];
	} else {
		form = formObj;
	}
	condition = ',' + condition + ',';
	if(flag == null || flag == '') {
		flag = 'all';
	}
	for(var i = 0; i < form.elements.length; i++) {
		var ele = form.elements[i];
		var eleTagn = ele.tagName;
		var eleType = ele.type;
		if((eleTagn == "INPUT" && (eleType == "text" || eleType == "checkbox" || eleType == "radio")) || ele.tagName == "TEXTAREA"){
			partClearInput(flag, condition, ele, eleType);
		} else if(eleTagn == "SELECT"){
			partClearSelect(flag, condition, ele);
		}	
	}
}
function partClearSelect(flag, condition, ele) {
	var param = ',' + ele.name + ',';
	if((flag == 'checked') && (condition.indexOf(param) != -1)) {
		var selectLength = ele.options.length;
		if(selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
	if((flag == 'unchecked') && (condition.indexOf(param) == -1)) {
		var selectLength = ele.options.length;
		if(selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
	if(flag == 'all') {
		var selectLength = ele.options.length;
		if(selectLength > 1) {
			ele.value = ele.options[0].value;
		}
	}
}

function partClearInput(flag, condition, ele, type) {
	var param = ',' + ele.name + ',';
	if((flag == 'checked') && (condition.indexOf(param) != -1)) {
		if(type == 'text' || type == 'textarea') {
			ele.value = '';	
		} else {
			ele.checked = false;
		}
	}
	if((flag == 'unchecked') && (condition.indexOf(param) == -1)) {
		if(type == 'text' || type == 'textarea') {
			ele.value = '';	
		} else {
			ele.checked = false;
		}
	}
	if(flag == 'all') {
		if(type == 'text' || type == 'textarea') {
			ele.value = '';	
		} else {
			ele.checked = false;
		}
	}
}

/***  ������֤ value��Ҫ�жϵ�ֵ��title����ʾ��Ϣ������trueΪ���֣�falseΪ�Ǻ��� **/
function chineseName(value, title) {
	var reg = /^[\u4e00-\u9fa5]+$/i;
	if (!reg.test(value)) {
		alert(title + "ֻ�����뺺�֣�");
		return false; 
	}
	return true;
}
//ȥ���ҿո�
String.prototype.trim2 = function()
	{
		 return this.replace(/(^\s*)|(\s*$)/g, "");
	}

/*��֤�Ƿ�Ϊ�ֻ����롣��ǰֻ�м�����֤�Ƿ�Ϊ�ֻ�����*/
function checkMobile(obj,xzqh){
 	if(xzqh.substring(0,2) != "22") return true;
    var sMobile = obj.value;
    if( sMobile == ""){
    	alert( obj.title + "����Ϊ�գ�����д��"); 
        return false;
    }
    if(sMobile.length != 11 || isNaN(sMobile)){
    	alert( obj.title + "����Ϊ11λ���֣���������д��"); 
        return false;
    }
    if(!(/^1[3|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
        alert( obj.title + "������ȷ���ֻ����룡"); 
        return false;
    } 
    return  true;
} 