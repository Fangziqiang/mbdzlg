//modify by huangbotao date 2012/6/15
//discription:1.ajax参数改为通过URL方式传递以便处理中文乱码问题；
//            2.将#替换成UNION因为#不能通过URL方式传递到后台
function getDBData(tablename, cols, cond, handleFun){//cols 查询字段
	//var reg = new RegExp("#", "g");//g表示替换所有   
	cond = cond.replace(/\#/g, "UNION");
	var pagedata = "dataname=" + tablename + "&cols=" + cols + "&cond=" + cond;
   	var successflag = false;
	$.ajax({
   	  type:"post",
   	  url:"../ajax/ajax!returnDBData?" + pagedata,
   	  async:false,
   	  contentType:"application/x-www-form-urlencoded;charset=UTF-8", 
   	  success:function(data){successflag = handleFun(data); },
   	  error: function(){alert("获取数据时产生错误，请与管理员联系！");}
   	});
	return successflag;
}

function getDicData(dicname, diccode, dictext, cond, target, handleFun){
	cond = cond.replace(/\#/g, "UNION");
	var pagedata = "dicname=" + dicname + "&diccode=" + diccode + "&dictext=" + dictext + "&cond=" + cond;
	$.ajax({
   	  type:"post",
   	  url:"../ajax/ajax!returnDicData?"+pagedata,
   	  async:false,
   	  contentType:"application/x-www-form-urlencoded;charset=UTF-8", 
   	  success:function(data){handleFun(data, diccode, dictext, target); },
   	  error: function(){alert("获取数据时产生错误，请与管理员联系！");}
   	});
}

function checkDataExist(tablename, cond, alertcontent){
	var reg = new RegExp("#", "g");
	cond=cond.replace(reg, "|");
	var pagedata = "dataname=" + tablename + "&cond=" + cond;
	var returnvaule = false;
	 $.ajax({
	   		type: "POST",
	   		url: encodeURI(encodeURI("../ajax/ajax!checkDataExist.action?"+pagedata)),
	   		data: "",
	   		dataType:"text",
	   		async:false,
			success: function(data){
				if(data =="\"3\""){
		   	  		if($.trim(alertcontent) != ""){
		   	  			alert(alertcontent);
		   	  		}
		   	  	returnvaule = true;
		   	  	}else{
		   	  	returnvaule = false;
		   	  	}
			},
   	 		 error: function(){alert("获取数据时产生错误，请与管理员联系！");}
		 });
	 return returnvaule;
}

function fillOption(data, diccode, dictext, target){
	if (target==null){
		return;
	}
	
	var objOption;
	clearoption(target);
	objOption = document.createElement("option");
	objOption.value = "";
	objOption.text = "";
	target.options.add(objOption);
	
	$.each(data,function(index, content){
   		objOption = document.createElement("option");
	    objOption.value = content[diccode];
	    objOption.text = content[dictext];
        target.options.add(objOption);
   	});
}

//清除下拉框obj
function clearoption(obj){
	if(obj==null){
		return;
	}
	while(obj.length>0){
		obj.remove(0);
	}
}