/*******************************************************************************
 * 
 * 与右侧列表交互的数据
 * 
 ******************************************************************************/ 
var markersArray = [];


/**
 * 异步获取车辆或运输证一段时间内位移的经纬度点
 */ 
var fromdate = "";//该全局变量比较重要，使用地方很多，请勿乱动
function getYszgjcx(){
	//清除本次的setTimeout
	generalClearTimeout();
	//清除setInterval
    if(fromdate == ""){
		generalClearInterval();
	    map.clearOverlays(); //清除地图上的所以覆盖物
    }
	var	url = CTX+'/dtgl/cldw.do?method=getYszgjxx'; 
	$.ajax({  
        url: url,//地址  
        data: "fromdate="+fromdate+"&yszbh="+yszbh,//参数  
        type: "POST",//提交方式 可以选择post/get 推荐post   
        async: false,//同步异步   
        dataType: "text",//返回数据类型   
        success:function(data){
        	//查询日期截止到当前时间不可以超过三个月
	     	if(data == "date"){
        		$.messager.progress('close');
		    	$.messager.alert('提示信息', '抱歉，只能查询距离发证日期三个月内的轨迹!', 'warning');
		    	return;
        	}
            var displays  = JSON.parse(data);
		    if(displays.length == 0){
		    	$.messager.progress('close');
		    	$.messager.alert('提示信息', '抱歉，未定位到该车辆轨迹信息!', 'warning');
		    	return ;
		    }
			if(displays[0].error){
				$.messager.progress('close');
				$.messager.alert('提示信息', displays[0].error, 'warning');
	        	return;
			}
			showTrail(displays);//显示轨迹
	    	getYszTjxzqh(yszbh);//显示行政区划版图
			$.messager.progress('close');//关闭进度条	 
        },
        error:function(){
        	$.messager.progress('close');
        	$.messager.alert('提示信息', '获取轨迹信息数据失败!', 'warning');
        	return;
        }  
    	});  
}  
function getClgjcx(){
	yszzt == "";
	fromdate = "";//查询车辆轨迹时初始化fromdate，避免再次点击运输证轨迹查询时造成查询起始时间混乱
	//清除本次的setTimeout
	generalClearTimeout();
	//清除setInterval
	generalClearInterval();
	var	cph_fromdate = $('#fromdate').val();
	var	enddate = $('#enddate').val();
	var	cph = $.trim(document.all.cph.value);
	if(cph.length==0){
		$.messager.progress('close');
		$.messager.alert("提示信息","请输入您要查询的车牌号！");
		return;
	}
	if($.trim(cph_fromdate).length==0){
		$.messager.progress('close');
		$.messager.alert("提示信息","请输入起始日期！");
		return;
	}
	if($.trim(enddate).length==0){
		$.messager.progress('close');
		$.messager.alert("提示信息","请输入截止日期！");
		return;
	}
	var timeDiffer = Date.parse(enddate.replace(/-/g, "/")) - Date.parse(cph_fromdate.replace(/-/g, "/"));
	if(timeDiffer<=0){
		$.messager.progress('close');
		$.messager.alert("提示信息","查询日期范围有误，起始日期必须在截止日期之前！");
		return;
	}
	if((timeDiffer/(1000*60*60*24))>1){
		$.messager.progress('close');
		$.messager.alert("提示信息","只能查询二十四小时内的车辆轨迹！");
		return;
	}
	var	url =  CTX+'/dtgl/cldw.do?method=getClgjxx'; 
	$.ajax({  
        url: url,//地址  
        data: "enddate="+enddate+"&fromdate="+cph_fromdate+"&cph="+cph,//参数  
        type: "POST",//提交方式 可以选择post/get 推荐post   
        async: false,//同步异步   
        dataType: "text",//返回数据类型   
        success:function(data){
            var displays  = JSON.parse(data);
		    if(displays.length == 0){
		    	$.messager.progress('close');
		    	$.messager.alert('提示信息', '抱歉，未定位到该车辆轨迹信息!', 'warning');
		    	return ;
		    }
		    map.clearOverlays(); //清除地图上的所以覆盖物
			showTrail(displays);//显示车辆运行轨迹
			$.messager.progress('close');	 
        },
        error:function(){
        	$.messager.progress('close');
        	$.messager.alert('提示信息', '未定位到该车辆轨迹信息!', 'warning');
        	return;
        }  
    	});  
}  
//异步获取运输证必须途径行政区划
function getYszTjxzqh(yszbh){
	var url =  CTX+'/dtgl/cldw.do?method=getYszTjxzqh'; 
	$.ajax({  
        url: url,//地址  
        data: "yszbh="+yszbh,//参数  
        type: "post",//提交方式 可以选择post/get 推荐post   
        async: false,//同步异步   
        dataType: "text",//返回数据类型   
        success:function(data){
			showBoundary(data);//绘制行政区划版图
        },
        error:function(){
        	$.messager.progress('close');
        	$.messager.alert('提示信息', '获取运输证途径行政区划失败!', 'warning');
        	return;
        }  
    	});  
}

//在地图上汇出运输证轨迹所途径的多个行政区划版图
function showBoundary(data){
	var datas = data.split(",");
	for(var i=0;i<datas.length;i++){  
	    getBoundary(datas[i]);  
	} 
}

function getBoundary(data){  
    var bdary = new BMap.Boundary();  
    bdary.get(data.split("-")[0], function(rs){
		var bounds;
		var count = rs.boundaries.length; 
		for(var i = 0; i < count; i++){
			var polyligonOption =  {
				strokeWeight: 2,
			   	strokeOpacity:0.6 ,
				fillOpacity : 0.3, 
				fillColor:data.split("-")[1],
				strokeColor: data.split("-")[1]
				};	
			var ply = new BMap.Polygon(rs.boundaries[i],polyligonOption);
			map.addOverlay(ply);  
		}
    });
}  
var myP = [];
//将后台传回的经纬度信息显示在地图上
function showTrail(locations){
	var trajectoryInfo = [];
	if(locations.length == 0){
		return;
	}
	var j = 0;
	var k = 0;
	var count = 0;
	for(var i = 0 ;i<locations.length; i++){
		var coordx = locations[i].coordx;
		var coordy = locations[i].coordy;
		/*
		if(i>=1){
			if((Date.parse(locations[i].time.replace(/-/g, "/"))) - 
			(Date.parse(locations[i-1].time.replace(/-/g, "/"))) >1000*60*gpsTimeOutLimit){
				showLineS(myP);//显示实线
				//显示虚线
			 	showLineX(new BMap.Point(locations[i-1].coordx,locations[i-1].coordy),
			 	new BMap.Point(locations[i].coordx,locations[i].coordy));
				trajectoryInfo[k++] = locations[i-1].time+"~"+locations[i].time;
				myP = [];
				j = 0;
			}else{
				myP[j++] = new BMap.Point(coordx,coordy);
			}
		}else{
			myP[j++] = new BMap.Point(coordx,coordy);
		}
		*/
		myP.push(new BMap.Point(coordx,coordy));
	}
	showLineS(myP);
	j = 0;
	var marker1;
	var marker2;
	if(fromdate == ""){
		//起点刷新不变
		var qd = new BMap.Point(locations[0].coordx,locations[0].coordy);
		marker1 = new BMap.Marker(qd,{icon:crateCurrencyIcon("qidian.png")});
	}
	//终点
	var zd = new BMap.Point(locations[locations.length-1].coordx,locations[locations.length-1].coordy);
	if(yszzt != "正在执行运输任务" || yszzt == ""){
		marker2 = new BMap.Marker(zd,{icon:crateCurrencyIcon("zhongdian.png")});
		//只有运输证轨迹回放时双击才显示车辆承运信息
		if(yszzt != "正在执行运输任务" && yszzt != ""){
			marker1.addEventListener("dblclick",function(){
			createDivInfoWindow(qd,trajectoryInfo);
			});
			marker2.addEventListener("dblclick",function(){
				createDivInfoWindow(zd,trajectoryInfo);
			});
			//创建Label
			var label = createLabel("双击图标显示运输许可证信息");
			var labe2 = createLabel("双击图标显示运输许可证信息");
			marker1.setLabel(label);
			marker1.getLabel().hide();
			marker2.setLabel(labe2);
			marker2.getLabel().hide();
	 		marker1.addEventListener("mouseout",function(){
					marker1.setTop(false);//使Lable总是显示在最上层
					marker1.getLabel().hide();
				});
			marker2.addEventListener("mouseout",function(){
					marker2.setTop(false);//使Lable总是显示在最上层
					marker2.getLabel().hide();
			});
			marker1.addEventListener("mouseover",function(){
					marker1.getLabel().show();
				});
			marker2.addEventListener("mouseover",function(){
					marker2.getLabel().show();
			});
		}
		yszzt = "";//为全局变量，使用后清空
	}
	if(yszzt == "正在执行运输任务"){
		fromdate = locations[locations.length - 1].time;
		//暂时屏蔽实时刷新轨迹
		//intervalId = window.setInterval("getYszgjcx();",1000*60*timeInterval);
		marker2 = new BMap.Marker(zd,{icon:crateCurrencyIcon("truck_static.gif")});
		marker1.addEventListener("dblclick",function(){
			createDivInfoWindow(qd,trajectoryInfo);
		});
		marker2.addEventListener("dblclick",function(){
			createDivInfoWindow(zd,trajectoryInfo);
		});
		//创建Label
		var label = createLabel("双击图标显示运输许可证信息");
		var labe2 = createLabel("双击图标显示运输许可证信息");
		marker1.setLabel(label);
		marker1.getLabel().hide();
		marker2.setLabel(labe2);
		marker2.getLabel().hide();
 		marker1.addEventListener("mouseout",function(){
				marker1.setTop(false);//使Lable总是显示在最上层
				marker1.getLabel().hide();
			});
		marker2.addEventListener("mouseout",function(){
				marker2.setTop(false);//使Lable总是显示在最上层
				marker2.getLabel().hide();
		});
		marker1.addEventListener("mouseover",function(){
				marker1.getLabel().show();
			});
		marker2.addEventListener("mouseover",function(){
				marker2.getLabel().show();
		});
		yszzt = "";//为全局变量，使用后清空				
	}
	map.addOverlay(marker1);
	map.addOverlay(marker2);
	marker1.show();
	marker2.show(); 
 	var timeCounter = window.setTimeout(function(){  
             map.setViewport(myP);          //调整到最佳视野  
			//清除本次的setTimeout
			generalClearTimeout();	
           },1000);
    myP.length = 0;       
}
//创建Label
function createLabel(title){
	var label = new BMap.Label(title,{"offset":new BMap.Size(19,20)});
	label.setStyle({
			borderColor:"#808080",
			color:"#333",
			cursor:"pointer"
		});
	return label;
}
// 创建DivInfoWindow
function createDivInfoWindow(qd,arr){
		var content = "<table>";
		if(arr.length == 0){
			content += "<tr align = 'center'><td> 本时间段车辆轨迹完整</td></tr>";
		}else{
			content += "<tr align = 'center'><td>以下时间段未定位到车辆地理位置信息</td></tr>";
		}
		for(var i=0 ;i<arr.length;i++){
			content += "<tr align = 'center'><td>"+arr[i]+"</td></tr>";
		}
		content += "</table>";
		var div = "<div  style='height:350;overflow-y:auto;position:relative;'><iframe   height='380' width='510'  align='middle' frameborder='0'  marginheight='0' marginwidth='0' style='border-style: none #ffffff solid'  src='"+CTX+"/dtgl/cldw.do?method=getClxx&cph="+ysz_cph+"&yszbh="+yszbh+"' ></iframe>"+content+"</div>";
		//var div = "<div  style='margin:0;line-height:20px;padding:2px;'><iframe width='500' height:390  frameborder='0' marginheight='0' marginwidth='0' style='border-style: none #ffffff solid'  src='"+CTX+"/dtgl/cldw.do?method=getClxx&cph="+ysz_cph+"&yszbh="+yszbh+"' ></iframe>"+content+"</div>";
		var opts = {    
		width : 530,     // 信息窗口宽度    
		height: 600,     // 信息窗口高度    
		title : "车辆轨迹信息"  // 信息窗口标题   
		}    
		var infoWindow = new BMap.InfoWindow(div, opts);  // 创建信息窗口对象    
		map.openInfoWindow(infoWindow, qd);  
}

//显示虚线
function showLineX(dot1,dot2){
	var polyline = new BMap.Polyline([dot1,dot2],
		 	{strokeColor:"#FF0000", strokeWeight:5, strokeOpacity:0.5,strokeStyle:"dashed"}    
			);
	map.addOverlay(polyline);     
}
//显示实线
function showLineS(point){
	var polyline = new BMap.Polyline(point,
		 	{strokeColor:"blue", strokeWeight:5, strokeOpacity:0.5}    
			);
	map.addOverlay(polyline);    
}


  

/*******************************************************************************
 * 
 * 针对于地图中心和缩放等级的初始化函数
 * 
 ******************************************************************************/ 
function initializeMapCenter(){
		var mapCenter = null;	
		// 后台数据中带过来的数据有省所在中心的话那么就以后台数据为准
		if(center_ && '' != center_){
				var centers_ = center_.split(',');	
				if(centers_ && centers_.length >= 2 ){
						var lat  = centers_[0];
						var lng  = centers_[1];
						mapCenter = new BMap.Point(lng ,lat );
				}
		}

		if(mapCenter){
				return mapCenter;
		}else{
				return new BMap.Point(116.397 , 39.917); // 以故宫为中心的北京行政图
		}
}

function initializeZoomLevel(){
		var zoomLevel = 11;
		// 如果后台传值有缩放等级的值 那么采用后台数据为准
		if(zoomlevel_ && '' != zoomlevel_){
				zoomLevel = parseInt(zoomlevel_);
		}else{
				zoomLevel = 11;
		}
		return zoomLevel;
}
function initializeXzqh(){
	var xzqh ;
	if(xzqh_ && '' != xzqh_){
		xzqh = xzqh_;
	}else{
		xzqh = '北京市';
	}
	return xzqh ;
}
/*******************************************************************************
 * 
 * 创建和初始化地图函数：
 * 
 ******************************************************************************/
function initMap(){
		//初始化
		markersArray = [];
		myP = [];
		createMap();// 创建地图
		setMapEvent();// 设置地图事件
		addMapControl();// 向地图添加控件
		setAsynchMarker();// 向地图中添加marker
		//清除setInterval
		generalClearInterval();
		//首页车辆位置信息实时刷新
		intervalId = window.setInterval("setAsynchMarker();",1000*60*timeInterval);
}

// 创建地图函数：
function createMap(){
		var map = new BMap.Map("map_canvas",{mapType: BMAP_NORMAL_MAP } );// 在百度地图容器中创建一个地图
		var point = initializeMapCenter();// 定义一个中心点坐标
		var zoomlevel = initializeZoomLevel();// 定义缩放等级
		map.centerAndZoom(point,zoomlevel);// 设定地图的中心点和坐标并将地图显示在地图容器中
		
		var bdary = new BMap.Boundary();
		var xzqh = initializeXzqh();
		bdary.get(xzqh, function(rs){
				var bounds;
				var count = rs.boundaries.length; 
				for(var i = 0; i < count; i++){
					var polyligonOption =  {
						strokeWeight: 5,
					   	strokeOpacity:0.6 ,
						fillOpacity : 0.05, 
						fillColor:'#33a3dc',
						strokeColor: "#2570a1"
						};	
					var ply = new BMap.Polygon(rs.boundaries[i],polyligonOption);
					map.addOverlay(ply);  
				}
		});
		window.map = map;// 将map变量存储在全局
}

// 地图事件设置函数：
function setMapEvent(){
		map.enableDragging();// 启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom();// 启用地图滚轮放大缩小
		map.enableDoubleClickZoom();// 启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard();// 启用键盘上下左右键移动地图
}

// 地图控件添加函数：
function addMapControl(){
		// 向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
		map.addControl(ctrl_nav);
		// 向地图中添加缩略图控件
		/*
		 * var ctrl_ove = new
		 * BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
		 * map.addControl(ctrl_ove);
		 */	
		// 向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
		map.addControl(ctrl_sca);
		// 向地图加地图类型控件
		map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP] ,anchor: BMAP_ANCHOR_TOP_RIGHT}));
}

/*******************************************************************************
 * 
 * 针对于地图中心和缩放等级的适应地图的函数
 * 
 ******************************************************************************/ 
function getAllLatLng(displayDatas){
		var latLngArray = [];
		if( displayDatas && displayDatas.length > 0){
				for ( var i = 0; i < displayDatas.length; i++) {
						var position = displayDatas[i];
						var latLng = [position.latitude, position.longitude];
						latLngArray.push(latLng);
				}
		}
		return latLngArray;
}

function caculateArrayLatDiffer(latLngs){
		var differ = 0;
		if	(latLngs && latLngs.length > 1) {
				var max = 0 ;
				var min = 90 ;	
				for ( var i = 0; i < latLngs.length; i++) {
						var lat = latLng[i][0];
						if(lat > max){
								max = lat ;
						}
						if(lat < min){
								min = lat ;
						}
				}

				differ = max - min;
		}
		return differ;

}

function adjustMapCenter(displayDatas){
		var mapCenter = map.getCenter();		
		if(displayDatas && displayDatas.length > 0){
				var latLngArray =	getAllLatLng(displayDatas);	
				var centerArray = jadlsoft.maps.utils.caculateArrayCenter(latLngArray);		
				mapCenter =  new BMap.Point( centerArray[1] , centerArray[0]);
		}
		return mapCenter;
}

function adjustZoomLevel(displayDatas){
		var zoomLevel = map.getZoom();	
		if(displayDatas && displayDatas.length > 0){
				var latLngArray = getAllLatLng(displayDatas);	
				zoomLevel	= jadlsoft.maps.utils.calculateZoomLevel(caculateArrayLatDiffer(latLngArray));		
		}

		if(zoomlevel_ && '' != zoomlevel_ && parseInt(zoomlevel_) < zoomLevel){
				zoomlevel  =  parseInt(zoomlevel_) ;
		}

		return zoomLevel;
}


/**
 * 异步创建标注点
 */ 
function setAsynchMarker(){
	generalClearInterval();
	var url =  CTX+'/dtgl/cldw.do?method=getCldwQuery&xzqhdm='+xzqhDm_; 
	$.ajax({  
        url: url,//地址  
        type: "POST",//提交方式 可以选择post/get 推荐post   
        async: false,//同步异步   
        dataType: "text",//返回数据类型   
        success:function(data){
          	var displays  = JSON.parse(data);
			setMarkers(displays);
			$.messager.progress('close');
        },
        error:function(){
        	$.messager.progress('close');
        	$.messager.alert('提示信息', '数据查询失败!', 'warning');
        	return;
        }  
    });  
}

// 创建marker
function setMarkers(locations){
		map.clearOverlays(); //清楚地图上覆盖物
		markersArray = [];//清空原本车辆标注缓存
		for(var i=0;i<locations.length;i++){
				/**
				 * 标注点的经纬度信息
				 */
				var position = locations[i];
				var point = new BMap.Point( position.longitude , position.latitude);
				/**
				 * 标注的图标信息
				 */
			    var icon =  {w:32,h:32,l:0,t:0,x:6,lb:5};
				var iconImg = createIcon(position.type,position.clzt,position.qb,position.wdwsj,icon);
				/**
				 * 创建标注点
				 */ 
				var marker = new BMap.Marker(point,{icon:iconImg});
				/**
				 * 创建信息窗口
				 */ 
				var iw = createInfoWindow(position);

				var markerEle = { cph : position.cph ,clzt : position.clzt,wdwsj:position.wdwsj, index : position.num ,value : { marker: marker , infoWin : iw }};
				markersArray.push(markerEle);   

				// 创建标注点的提示信息
				var label = new BMap.Label(position.title,{"offset":new BMap.Size(icon.lb-icon.x+20,20)});
				marker.setLabel(label);
				marker.getLabel().hide();
				
				map.addOverlay(marker);
				label.setStyle({
					borderColor:"#808080",
					color:"#333",
					cursor:"pointer"
				});
				
				// 创建窗口
				(function(){
					 var index = i;
					 var _iw = createInfoWindow(position);
					 var _marker = marker;
					 var _id = position.id;
					 
					if(_marker){
						 _marker.addEventListener("mouseout",function(){
					 		_marker.setTop(false);//使Lable总是显示在最上层
							 _marker.getLabel().hide();
					 	});
					
					 	_marker.addEventListener("mouseover",function(){
						 	_marker.setTop(true,27000000);//使Lable总是显示在最上层
						 	_marker.getLabel().show();
					 	});
					}
					
					if(_marker && _iw){
					 	_marker.addEventListener("click",function(){
				 			adjustMarkerCenter(_marker);
							this.openInfoWindow(_iw);
					 	});
				 	 
					 	_iw.addEventListener("open",function(){
						 	_marker.getLabel().hide();
					 	});
				 	
					 	label.addEventListener("click",function(){
						 	_marker.openInfoWindow(_iw);
						});
					
				 		if(!!position.isOpen){
				 			label.hide();
							if(_iw){
								_marker.openInfoWindow(_iw);
							}
				 		}
					}else

					if(_marker && !_iw){
					 	_marker.addEventListener("click",function(){
				 			adjustMarkerCenter(_marker);
					 	});
					}
				 })()
				}
}


function  adjustMarkerCenter(marker){
	if(_VERSION_BAIDU_  && _VERSION_BAIDU_ == '1.1'){
		var center = marker.getPoint();
	}else{
		var center = marker.getPosition();
	}
	map.setCenter(center);
}
// 创建InfoWindow
function createInfoWindow(position){
		var iframe = "<div  style='height:400;overflow-y:auto;position:relative;'><iframe   height='400' width='500'  align='middle' frameborder='0'  marginheight='0' marginwidth='0' style='border-style: none #ffffff solid'  src='"+CTX+"/dtgl/cldw.do?method=getClxx&cph="+position.cph+"' ></iframe></div>";
		if(position && position.cph){
			var opts = {    
				width : 530,     // 信息窗口宽度    
				height: 600,     // 信息窗口高度    
				title : "车辆信息"  // 信息窗口标题
			}    
			var iw = new BMap.InfoWindow(iframe, opts);
			return iw;
		}
		return null;
}
// 创建一个Icon
function createIcon(type,clzt,qb,wdwsj, json) {
	var image;
	var imageBase = CTX + "/dtgl/images/jadlgis/position/";
	var imageType = imageBase;
	if(wdwsj < gpsexpirelimit){
		if (type && type == 'active' && clzt == 'full') {
			imageType = imageType + 'truck_full_active.gif';
		} else if (type && type == 'active' && clzt == 'empty') {
			imageType = imageType + 'truck_empty_active.gif';
		} else if(type && type == 'static' && clzt == 'full'){
			imageType = imageType + 'truck_full_static.png';
		} else if (type && type == 'static' && clzt == 'empty') {
			imageType = imageType + 'truck_empty_static.png';
		}
	}else{
		if (type && type == 'active' && clzt == 'full') {
			imageType = imageType + 'truck_full_active_t.gif';
		} else if (type && type == 'active' && clzt == 'empty') {
			imageType = imageType + 'truck_empty_active_t.gif';
		} else if(type && type == 'static' && clzt == 'full'){
			imageType = imageType + 'truck_full_static_t.png';
		} else if (type && type == 'static' && clzt == 'empty') {
			imageType = imageType + 'truck_empty_static_t.png';
		}
	}
	image = imageType;
	var size = new BMap.Size(json.w, json.h);
	var options = {
		imageOffset : new BMap.Size(-json.l, -json.t),
		infoWindowOffset : new BMap.Size(json.lb + 5, 1),
		offset : new BMap.Size(json.x, json.h)
	};
	var icon = new BMap.Icon(image, size, options);
	return icon;
}
//创建一个通用Icon
function crateCurrencyIcon(picture){
 	var json =  {w:32,h:32,l:0,t:0,x:6,lb:5};
	var image = CTX + "/dtgl/images/jadlgis/"+picture;
	var size = new BMap.Size(json.w, json.h);
	var options = {
		imageOffset : new BMap.Size(-json.l, -json.t),
		infoWindowOffset : new BMap.Size(json.lb + 5, 1),
		offset : new BMap.Size(json.x, json.h)
	};
	var icon = new BMap.Icon(image, size, options);
	return icon;

}
//清除所有车辆marker
function clearAllMarke(){
	if (markersArray && markersArray.length > 0) {
		for ( var i in markersArray) {
			markersArray[i].value.marker.remove();
		}
		markersArray = [];
	}
}

window.onload =function (){
		getClxxtj();
		initMap();// 创建和初始化地图
}; 

