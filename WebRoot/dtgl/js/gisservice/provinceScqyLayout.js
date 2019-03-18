var grid;
var grid_y;
var grid_cydw;
var grid_yszyj;
$(document).ready(function() {
	initGrid_y();
	if(xzqhDm_ && isShengjiXzqh(xzqhDm_)){
		initGrid_c();
		initGrid_cydw();
		initGrid_yszyj();
	}else{
		//非省级用户删除车辆列表与车辆轨迹
		$("#sfq").accordion("remove","承运单位"); 
		$("#sfq").accordion("remove","车辆列表"); 
		$("#sfq").accordion("remove","车辆轨迹"); 
	}
});

/* 判断是否为省级行政区划 */
function isShengjiXzqh(xzqh){
	return (xzqh.substring(2,6) == "0000");
}
/**
 * 初始化GRID
 */
function initGrid_yszyj() {
	var height = document.getElementById("center").offsetHeight-250;
	var intAvgW = 200; // 每列宽度
	var url = CTX + '/dtgl/yszyjxxlistjson.do';
	grid_yszyj = $("#flexTable_yszyj").flexigrid( {
                height : height,
                url : url,
                dataType : 'json',
                method : 'POST',
                colModel : [ 
                  { display : '运输许可证编号', 				name : 'yszbh', 		width : intAvgW*0.6 , 	sortable : true , 	align : 'center' },
                  { display : '发证日期', 			name : 'fzrq', 	width : intAvgW*0.5 , 	sortable : true , 	align : 'center' },
                  { display : '回交日期', 			name : 'hjrq', 	width : intAvgW*0.5 , 	sortable : true , 	align : 'center' },
                  { display : '车牌号', 			name : 'cph', 	width : intAvgW*0.5 , 	sortable : true , 	align : 'center' },
                  { display : '规定途经地区', 			name : 'bxtjxzqhmc', 		width : intAvgW , 	sortable : true , 	align : 'center' },
                  { display : '实际途经地区', 			name : 'sjtjxzqhmc', 	width : intAvgW , 	sortable : true , 	align : 'center',hide:true },
                  { display : '未途经地区', 			name : 'wtjxzqhmc', 	width : intAvgW , 	sortable : true , 	align : 'center',hide:false }
                 ],
                errormsg : '发生异常',
                sortname : "fzrq",
                sortorder : "desc",
                usepager : true,
                pagestat : '总计 {total} 条',
                useRp : true,
                rp : 10,
                rpOptions : [10, 15, 20, 30, 40, 100 ], // 可选择设定的每页结果数
                rowbinddata : true, // 配合上一个操作，如在双击事件中获取该行的数据
                rownum : false, // 是否显示行号
                rownumDisplay : '序号', // 行号列表头显示文本
                rownumWidth : 42, // 行号列宽度
                rownumText : '',
                nomsg: '没有符合条件的记录存在',
                showTableToggleBtn: true, 
                showcheckbox : false
            });
}
/**
 * 初始化GRID
 */
function initGrid_cydw() {
	var height = document.getElementById("center").offsetHeight-250;
	var intAvgW = 200; // 每列宽度
	var url = CTX + '/dtgl/cydwxxlistjson.do';
	grid_cydw = $("#flexTable_cydw").flexigrid( {
                height : height,
                url : url,
                dataType : 'json',
                method : 'POST',
                colModel : [ 
                  { display : '承运单位', 				name : 'dwmc', 		width : intAvgW*0.4 , 	sortable : true , 	align : 'center' },
                  { display : '单位资质证明编号', 			name : 'dwzzzmbh', 	width : intAvgW*0.6 , 	sortable : true , 	align : 'center' },
                  { display : '单位地址', 			name : 'dwdz', 	width : intAvgW*0.4 , 	sortable : true , 	align : 'center' },
                  { display : '单位负责人', 			name : 'dwfzr', 		width : intAvgW*0.8 , 	sortable : true , 	align : 'center' },
                  { display : '单位负责人联系电话', 			name : 'dwfzrlxdh', 	width : intAvgW , 	sortable : true , 	align : 'center',hide:false }
                 ],
                errormsg : '发生异常',
                sortname : "dwzzzmbh",
                sortorder : "asc",
                usepager : true,
                rowhandler : cydwCldw,// 是否启用行的扩展事情功能,在生成行时绑定事件，如双击，右键菜单等
                pagestat : '总计 {total} 条',
                useRp : true,
                rp : 10,
                rpOptions : [10, 15, 20, 30, 40, 100 ], // 可选择设定的每页结果数
                rowbinddata : true, // 配合上一个操作，如在双击事件中获取该行的数据
                rownum : false, // 是否显示行号
                rownumDisplay : '序号', // 行号列表头显示文本
                rownumWidth : 42, // 行号列宽度
                rownumText : '',
                nomsg: '没有符合条件的记录存在',
                showTableToggleBtn: true, 
                showcheckbox : false
            });
}


/**
 * 初始化GRID
 */
function initGrid_c() {
	var height = document.getElementById("center").offsetHeight-250;
	var intAvgW = 200; // 每列宽度
	var url = CTX + '/dtgl/ysclhzlistjson.do';
	grid_y = $("#flexTable_c").flexigrid( {
                height : height,
                url : url,
                dataType : 'json',
                method : 'POST',
                colModel : [ 
                  { display : '车牌号', 				name : 'cph', 		width : intAvgW*0.4 , 	sortable : true , 	align : 'center' },
                  { display : '绑定的运输许可证', 			name : 'yszbh', 	width : intAvgW*0.6 , 	sortable : true , 	align : 'center' },
                  { display : '是否可定位', 			name : 'sfkdw', 	width : intAvgW*0.4 , 	sortable : true , 	align : 'center' },
                  { display : '单位名称', 			name : 'dwmc', 		width : intAvgW*0.8 , 	sortable : true , 	align : 'center' },
                  { display : '驾驶员', 			name : 'jsy', 	width : intAvgW , 	sortable : true , 	align : 'center',hide:false },
                  { display : '单位负责人', 		name : 'fzrxm', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '单位负责人联系电话', 		name : 'dwfzrlxdh', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '押运员', 		name : 'yyy', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false}
                 ],
                errormsg : '发生异常',
                sortname : "yszbh",
                sortorder : "asc",
                usepager : true,
                pagestat : '总计 {total} 条',
                useRp : true,
                rp : 10,
                rpOptions : [10, 15, 20, 30, 40, 100 ], // 可选择设定的每页结果数
                rowhandler : viewInMap2,// 是否启用行的扩展事情功能,在生成行时绑定事件，如双击，右键菜单等
                rowbinddata : true, // 配合上一个操作，如在双击事件中获取该行的数据
                rownum : false, // 是否显示行号
                rownumDisplay : '序号', // 行号列表头显示文本
                rownumWidth : 42, // 行号列宽度
                rownumText : '',
                nomsg: '没有符合条件的记录存在',
                showTableToggleBtn: true, 
                showcheckbox : false
            });
}
/**
 * 初始化GRID
 */
function initGrid_y() {
	var height = document.getElementById("center").offsetHeight-350;
	var intAvgW = 200; // 每列宽度
	var url = "";
	var query = "";
	if(userlx == "A"){//公安用户
		url = CTX + '/dtgl/yszxxlistjson.do';
		query = "&&zt~=~0~xzqh~=~" +xzqhDm_;
 	}
 	if(userlx == "B"){//单位用户
		url = CTX + '/dtgl/yszxxlistjson.do';
		query = "&&zt~=~0~dwdm~=~" +dwdm;
 	}
 	grid = $("#flexTable_y").flexigrid( {
                height : height,
                url : url,
                dataType : 'json',
                method : 'POST',
                colModel : [ 
                  { display : '运输许可证编号', 	name : 'yszbh', 		width : intAvgW*0.6 , 	sortable : true , 	align : 'center' },
                  { display : '车牌号', 			name : 'cph', 	width : intAvgW*0.6 , 	sortable : true , 	align : 'center' },
                  { display : '发证机关', 			name : 'kzjg', 		width : intAvgW*0.8 , 	sortable : true , 	align : 'center' },
                  { display : '驾驶员', 			name : 'jsy', 	width : intAvgW , 	sortable : true , 	align : 'center',hide:false },
                  { display : '驾驶员资格证编号', 		name : 'jsyzgzh', 	width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '押运员', 		name : 'yyy', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '押运员资格证编号', 		name : 'yyyzgzh', 	width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '车辆所属单位', 		name : 'ssdw', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '单位资质证明编号', 		name : 'dwzzzmbh', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '单位地址', 		name : 'dwdz', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '单位负责人', 		name : 'dwfzr', 	width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '单位负责人联系电话', 		name : 'dwfzrlxdh', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '是否按规定路线行驶', 		name : 'yszzt', 		width : intAvgW , 	sortable : true , 	align : 'center' },
                  { display : '发证日期', 		name : 'fzrq', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '有效日期', 		name : 'yxrq', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false},
                  { display : '回交日期', 		name : 'hjrq', 		width : intAvgW , 	sortable : true , 	align : 'center' ,hide:false}
                 ],
                errormsg : '发生异常',
                sortname : "yszbh",
                query: query,
                sortorder : "asc",
                usepager : true,
                pagestat : '总计 {total} 条',
                useRp : true,
                rp : 10,
                rpOptions : [10, 15, 20, 30, 40, 100 ], // 可选择设定的每页结果数
                rowhandler : getYszgj,// 是否启用行的扩展事情功能,在生成行时绑定事件，如双击，右键菜单等
                rowbinddata : true, // 配合上一个操作，如在双击事件中获取该行的数据
                rownum : false, // 是否显示行号
                rownumDisplay : '序号', // 行号列表头显示文本
                rownumWidth : 42, // 行号列宽度
                rownumText : '',
                nomsg: '没有符合条件的记录存在',
                showTableToggleBtn: true, 
                showcheckbox : false
            });
	
}

//定位承运单位所有车辆信息
function cydwCldw(row){

	$(row).dblclick(function() {
		var ssdw = yszbh = $('td:nth-child(1)', this).text();
		var url =  CTX+'/dtgl/cldw.do?method=getCldwQuery&flag=cydwcldw&ssdw='+ssdw+'&xzqhdm='+xzqhDm_; 
		$.ajax({  
	        url: url,//地址  
	        type: "POST",//提交方式 可以选择post/get 推荐post   
	        async: false,//同步异步   
	        dataType: "text",//返回数据类型   
	        success:function(data){
	          	var displays  = JSON.parse(data);
          	   	if(displays.length == 0){
          	   		map.clearOverlays(); //清楚地图上覆盖物
	          		$.messager.alert('提示信息', '没有查询到“'+ssdw+'”单位车辆位置信息!', 'warning');
	          		return;
          		}
				setMarkers(displays);
				$.messager.progress('close');
	        },
	        error:function(){
	        	$.messager.progress('close');
	        	$.messager.alert('提示信息', '数据查询失败!', 'warning');
	        	return;
	        }  
	    });  
	});
	
}

var yszzt = "";//运输证状态
var yszbh = "";
var ysz_cph ="";
function getYszgj(row){
	$(row).dblclick(function() {
		fromdate = "";//初始化运输证轨迹查询起始时间
		yszbh = $('td:nth-child(1)', this).text();
		yszzt = $('td:nth-child(13)', this).text();
		ysz_cph = $('td:nth-child(2)', this).text();
		$.messager.progress({title:"",msg:"",text:"正在查询中,请稍等......",interval:"300"}); 
		var timeCounter = window.setTimeout(function(){//解决$.messager.progress执行顺序问题  
             getYszgjcx();
           },10); 
	});
}

/**
 * 在地图内展示弹出气泡信息
 */
function viewInMap(row) {
	$(row).dblclick(function() {
		var cph = $('td:nth-child(2)', this).text();
		var yszbh = $('td:nth-child(3)', this).text();
		popMarkerInfoWindow(cph);
	});
}
/**
 * 在地图内展示弹出气泡信息
 */
function viewInMap2(row) {
	$(row).dblclick(function() {
		var cph = $('td:nth-child(1)', this).text();
		var yszbh = $('td:nth-child(3)', this).text();
		$.messager.progress({title:"",msg:"",text:"正在查询中,请稍等......",interval:"300"});
		var timeCounter = window.setTimeout(function(){//解决$.messager.progress执行顺序问题  
			popMarkerInfoWindow(cph);
           },10); 
	});
}

function popMarkerInfoWindow(cph) {
	//清除本次的setTimeout
	generalClearTimeout();
	map.clearOverlays(); //清楚地图上覆盖物
	markersArray = [];//清空原本车辆标注缓存
	setAsynchMarker();//重新刷新页面车辆标注
	var markerInfo = null;
	var isMarkerExist = false;
	if (markersArray && markersArray.length > 0) {
		for ( var i in markersArray) {
			var cph_ = markersArray[i].cph;
			if (cph_ && cph && cph_ == cph) {
				markerInfo = markersArray[i];
				isMarkerExist = true;
				break;
			}
		}
	}
	if (!isMarkerExist) {
		$.messager.alert('提示信息', '该车辆无法定位', 'warning');
		return;
	}
	if (markerInfo) {
		var marker = markerInfo.value.marker;
		var info = markerInfo.value.infoWin;
		adjustMarkerCenter(marker);
		marker.openInfoWindow(info)
	}
}
