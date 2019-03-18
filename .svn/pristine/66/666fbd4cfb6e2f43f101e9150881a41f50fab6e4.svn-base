/* 
 * 判断是否为县级行政区划 
 * xzqh:6位
 */
function isXianjiXzqh(xzqh){
	return (xzqh.substring(4,6) != "00") || isShengZxx(xzqh);
}

/* 判断是否为市级行政区划。直辖市即视为市级也是省级 */
function isShijiXzqh(xzqh){
	if(isZxs(xzqh)){
		//modify by zhaohuibin 2013-01-08 去除xxxx00格式行政区划，因直辖市xx0000为省或地市级，xxxxxx为地市或区县级，没有xxxx00
		return (xzqh.substring(2,6) == "0000") || (xzqh.substring(4,6) != "00") || isShengZxx(xzqh);
	}else{
		return (xzqh.substring(4,6) == "00" && xzqh.substring(2,4) != "00");
	}
}

/* 判断是否为省级行政区划 */
function isShengjiXzqh(xzqh){
	return (xzqh.substring(2,6) == "0000");
}

/* 是否为直辖市 
 * modify by zhaohuibin 2013-01-08 直辖市的判断修改为只判断前两位
 */
function isZxs(xzqh){
	return (xzqh.substring(0,2) == "11") || (xzqh.substring(0,2) == "12") || (xzqh.substring(0,2) == "31") || (xzqh.substring(0,2) == "50") || isShengZxx(xzqh);
}

/**
 * @功能：判断是否为重庆或上海
 * @参数：
 * @param xzqh
 * @return
 * @返回值：boolean
 * create by zhaohuibin 2013-4-10 上午09:14:50
 */
function isChongqingOrShanghai(xzqh){
	return "31" == xzqh.substring(0,2) || "50" == xzqh.substring(0,2);
}

/**
 * @功能：判断是否为省直辖县
 * @参数：
 * @param xzqh
 * @return
 * @返回值：boolean
 * create by zhaohuibin 2013-7-18 下午05:07:31
 */
function isShengZxx(xzqh){
	return ("468200" == xzqh) || ("468300" == xzqh) || ("468400" == xzqh) || 
	("468500" == xzqh) || ("468600" == xzqh) || ("468700" == xzqh) || ("468800" == xzqh) || 
	("468900" == xzqh) || ("469100" == xzqh) || ("469200" == xzqh) || ("469300" == xzqh) || 
	("469400" == xzqh) || ("469500" == xzqh) || ("469600" == xzqh) || ("469700" == xzqh) || 
	("469800" == xzqh) || ("469900" == xzqh) || ("441900" == xzqh) || ("442000" == xzqh) || 
	("4290" == xzqh.substring(0, 4) && !"00" == xzqh.substring(4)) || ("420103" == xzqh) || 
	("410881" == xzqh) || ("220381" == xzqh) || ("220581" == xzqh) || ("130181" == xzqh) ||
	("130682" == xzqh) || ("429004" == xzqh) ||	("429005" == xzqh) || ("429006" == xzqh) ||
	("429021" == xzqh) || ("429099" == xzqh) ||	("350128" == xzqh) || ("340826" == xzqh) ||
	("341822" == xzqh) || ("419900" == xzqh) ||	("220300" == xzqh) || ("220400" == xzqh) ||
	("220600" == xzqh) || ("139800" == xzqh) ||	("139900" == xzqh) || ("620200" == xzqh) ||
	("320500" == xzqh) || ("320600" == xzqh) ||	("320900" == xzqh) || ("321000" == xzqh) ||
	("321200" == xzqh) || ("321300" == xzqh) ||	("460100" == xzqh) || ("460200" == xzqh) ||
	("410181" == xzqh) || ("410225" == xzqh) ||	("410482" == xzqh) || ("410526" == xzqh) ||
	("410728" == xzqh) || ("411381" == xzqh) ||	("411481" == xzqh) || ("411525" == xzqh) ||
	("411628" == xzqh) || ("411729" == xzqh) || ("360482" == xzqh) || ("360781" == xzqh) ||
	("360981" == xzqh) || ("361128" == xzqh) || ("360829" == xzqh) || ("361021" == xzqh) ||
	("360100" == xzqh) || ("219800" == xzqh) ||	("379800" == xzqh) || ("379900" == xzqh) ||
	("130181" == xzqh) || ("130682" == xzqh) || ("231081" == xzqh) || ("230833" == xzqh);
}
/*
 * 判断是否为非营运性爆破作业单位行政区划(市级行政区划)
 */
function isFyyxbpzydwXZQH(xzqh){
	if(isZxs(xzqh)){
		if(isChongqingOrShanghai(xzqh)){
			//重庆和上海只能省厅办证
			if(isShengjiXzqh(xzqh)){
				return true;
			}
		}
		//北京和天津只能在县一级办证
		if(isXianjiXzqh(xzqh)){
			return true;
		}
		return false;
	}
	if(isShijiXzqh(xzqh)){
		return true;
	}
	return false;
}
/*
 * 判断是否为营运性爆破作业单位行政区划(省级行政区划)
 */
function isYyxbpzydwXZQH(xzqh){
	if(isShengjiXzqh(xzqh)){
		return true;
	}
	return false;
}

/*
 * 判断人员许可证是否为市一级行政区划
 */
function isRyxkzXZQH(xzqh){
	if(isZxs(xzqh)){
		if(isChongqingOrShanghai(xzqh)){
			//重庆和上海只能省厅办证
			if(isProvince(xzqh)){
				return true;
			}
		}
		//北京和天津只能在县一级办证
		if(isXianjiXzqh(xzqh)){
			return true;
		}
		return false;
	}
	if(isShijiXzqh(xzqh)){
		return true;
	}
	return false;
}
/*判断是否是北京市行政区划
 *2013-07-18 张晨光
  */
function isBjs(xzqh){
	var bjs = xzqh;
	if(bjs=="110000"){
		return true;
	}
	return false;
}
/*add  by wangqing 2013-01-08
 *判断是否为北京行政区划
 **/
 function isBjXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "11";
 }
 
/*add  by wangqing 2013-01-08
 *判断是否为天津所属行政区划
 **/
 function isTjXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "12";
 }
/*add  by wangqing 2013-01-08
 *判断是否为上海行政区划
 **/
 function isShXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "31";
 }
/*add  by wangqing 2013-01-08
 *判断是否为重庆行政区划
 **/
 function isCqXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "50";
 }