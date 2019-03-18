function ajaxRequest(url, returnType, methodAndArgs) {
	$.ajax({
		  type: "POST",
		  url: url,
		  dataType:returnType,
		  data: methodAndArgs,
		  success: function(msg){
				success(msg);
		  },
		  error: function (msg) {
		  		fail(msg);
		  }
	});	
}
function success(msg) {}
function fail(msg) {}

function ajaxRequestMulti(url, returnType, methodAndArgs, name) {
	$.ajax({
		  type: "POST",
		  url: url,
		  dataType:returnType,
		  data: methodAndArgs,
		  success: function(msg){
				success(msg, name);
		  },
		  error: function (msg) {
		  		fail(msg, name);
		  }
	});	
}
function success(msg, name) {}
function fail(msg, name) {}


/*获取制定xml标签的值*/
function getValue(xmldoc , tagname){
	var tagObj = xmldoc.getElementsByTagName(tagname)[0];
	if(tagObj != undefined && tagObj != null && tagObj.childNodes.length != 0 && tagObj.childNodes[0].nodeValue != undefined && tagObj.childNodes[0].nodeValue != null){
		return tagObj.childNodes[0].nodeValue;
	}
	return "";
}