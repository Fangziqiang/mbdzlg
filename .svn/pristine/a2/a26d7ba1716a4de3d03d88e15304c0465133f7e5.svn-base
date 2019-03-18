/*
 * create by huangbotao 
 * create date 2012/11/01 
 * description 天地图显示及操作
 * 
 */

var map;
// 将天安门位置设为地图的默认中心点
var x = 116.3972282409668;
var y = 39.90960456049752;
var selectControl, selectedFeature;
// 点图层默认样式
var pointstyle = new OpenLayers.StyleMap({
	"default" : new Geo.Style({
		cursor : "pointer",
		pointRadius : 8,
		fillColor : "red",
		strokeColor : "#666666",
		strokeWidth : 2,
		graphicZIndex : 1,
		fillOpacity : 0.7
	}),

	"select" : new Geo.Style({
		fillColor : "#66ccff",
		strokeColor : "#3399ff",
		graphicZIndex : 2
	})
});

// 线图层默认样式
var linestyle = new OpenLayers.StyleMap({
	"default" : new Geo.Style({
		strokeColor : "#666666",
		strokeWidth : 2,
		graphicZIndex : 1,
		fillOpacity : 0.7
	})
});

// 自定义矢量图层
function createVectorLayer(type, style) {
	if (typeof (style) == "undefined" || style == null) {
		if (type == "line")// 点图层
			style = linestyle;// 默认样式
		else if (type = "point") {
			style = pointstyle;
		}
	}
	var layer = new OpenLayers.Layer.Vector("Polygon Layer", {
		styleMap : style,
		rendererOptions : {
			zIndexing : true
		}
	});
	map.addLayer(layer);
	return layer;
}

// 矢量图层组
var vectorGroup = new Geo.View2D.LayerGroup({
	layers : [
			new Geo.View2D.Layer.GlobeTile("全球1:100万矢量底图",
					"http://tile0.tianditu.com/services/B0627_EMap1112", {
						transitionEffect : "resize",
						topLevel : 11,
						bottomLevel : 12,
						maxExtent : new Geo.Bounds(-180, -90, 180, 90)
					}),
			new Geo.View2D.Layer.GlobeTile("全球1:100万矢量底图",
					"http://tile0.tianditu.com/services/siwei0608", {
						transitionEffect : "resize",
						topLevel : 13,
						bottomLevel : 18,
						maxExtent : new Geo.Bounds(-180, -90, 180, 90)
					}) ]
});

/*
 * 初始化地图 id 地图显示的DIV lon 中心点经度 lat 中心点纬度
 */
function initMap(id, lon, lat) {
	map = new Geo.View2D.Map(id);
	if (lon != null && lon != "" && lat != null && lat != "") {
		x = lon;
		y = lat;
	}
	var center = new Geo.LonLat(x, y);
	map.loadLayerGroup(vectorGroup);
	map.setCenter(center, 1);
}

/*
 * 绘制轨迹点 data 含有每个点的数据信息 layer 轨迹所在的矢量图层 flag是否添加Mark
 */
function drawPoints(data, layer, flag) {
	// 画出所有点
	$.each(data, function(i, value) {
		var point = new Geo.Geometry.Point(value.jd, value.wd);
		if (flag == 0) {// 不添加mark
			addPoint(point, layer, null);
		} else {
			var img = "";
			if (i == 0) {//起点图标
				img = "../../images/dd-start.png";
			} else if (i == data.length - 1) {//终点图标
				img = "../../images/dd-end.png";
			} else {
				img = "../../images/dd-start.png";
			}
			var style = {
				graphicWidth : 20,
				graphicHeight : 25,
				graphicZIndex : 1,
				cursor : "pointer",
				externalGraphic : img
			}
			addPoint(point, layer, style);
		}
	});
}

/*
 * 添加点 point 点 layer 点所在的图层 style 样式
 */
function addPoint(point, layer, style) {
	var pointFeature = new Geo.Feature.Vector(point, null, style);
	layer.addFeatures([ pointFeature ]);
}
/*
 * 绘制连接所有点的线
 */
function drawLine(data, layer) {
	// 根据点画线
	var points = [];
	$.each(data, function(i, value) {
		var point = new Geo.Geometry.Point(value.jd, value.wd);
		points.push(point);
	});
	var line = new Geo.Geometry.LineString(points);
	var lineFeature = new Geo.Feature.Vector(line);
	var style = {
		graphicWidth : 40,
		graphicHeight : 45,
		graphicZIndex : 999,
		cursor : "pointer",
		externalGraphic : "../../images/coltM911.png"
	}
	/*
	 * var bus = new Geo.Feature.Vector(new Geo.Geometry.Point(114.4, 30.6),
	 * null, style);
	 */
	layer.addFeatures([ lineFeature ]);
	/*
	 * var animator = new Geo.Animator(); animator.setFeature(bus); //
	 * 设置点要素的行走路线以及速度 animator.moveAlong(lineFeature, { ratio : 1 }); //
	 * 让点要素开始行走 animator.start();
	 */
}
/*
 * 添加选择要素控件 data 含有但选择时需要显示的数据信息 layer 需要添加控件的矢量图层 msgFlag提示数据来源
 */
function addSelectControl(data, layer, msgFlag) {
	selectControl = new Geo.View2D.Control.SelectFeature(layer, {
		hover : msgFlag == "tdt" ? true : false,
		onSelect : function(feature) {
			selectedFeature = feature;

			$.each(data,
					function(i, p) {
						var prompt;
						var selectLonLat = new Geo.LonLat(p.jd, p.wd);
						if (msgFlag == "all") {
							var cond = "&yccid=" + p.yccid + "&djsj="
									+ p.dwfhsj + "&lrdw_qzxzhqh="
									+ p.lrdw_qzxzhqh + "&lrdw_qzsxh="
									+ p.lrdw_qzsxh + "&lybh=" + p.lybh;
							prompt = "<a href=\"#\" onclick=\"qwgjView('"
									+ cond + "')\">车号: " + p.nbch + "<br>枪号:"
									+ p.qz_id + "<br>押运员: " + p.hwy
									+ "<br>定位时间: " + p.dwfhsj + "</a>";
						} else if (msgFlag == "one") {
							prompt = "车号: " + p.nbch + "<br>枪号:" + p.qz_id
									+ "<br>押运员: " + p.hwy + "<br>定位时间: "
									+ p.dwsj;
						} else if (msgFlag == "tdt") {//来自天地图请求数据
							var selectpoint = (p.lonlat).split(" ");
							var x = selectpoint[0];
							var y = selectpoint[1];
							selectLonLat = new Geo.LonLat(x, y);
							prompt = "地名：" + p.name + "</br>地址：" + p.address

						}
						if (selectLonLat.equals(feature.geometry.getBounds()
								.getCenterLonLat())) {// 如果是选中的selectLonLat
							var popup = new Geo.View2D.Popup.FramedCloud(
									"chicken", feature.geometry.getBounds()
											.getCenterLonLat(), null, prompt,
									null, msgFlag == "tdt" ? false : true,
									onPopupClose);
							if (typeof (popup) != "undefined") {
								selectedFeature.popup = popup;
								map.addPopup(popup);
							}
							return false;
						}
					});
		},
		onUnselect : onFeatureUnselect
	});
	map.addControl(selectControl);
	selectControl.activate();
}
/*
 * 添加控件集,未激活
 */
function addControls(controls) {
	for ( var key in controls) {
		map.addControl(controls[key]);
	}
}

/*
 * 弹出窗口关闭时，取消选中要素
 */
function onPopupClose(evt) {
	selectControl.unselect(selectedFeature);
}
/*
 * 当要素取消选中时销毁弹出窗口
 */
function onFeatureUnselect(feature) {
	if (null != feature.popup) {
		map.removePopup(feature.popup);
		feature.popup.destroy();
		feature.popup = null;
	}
}
