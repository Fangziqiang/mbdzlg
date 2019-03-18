package com.jadlsoft.utils;

import java.math.BigDecimal;

import net.sf.json.JSONObject;

/**
 * 经纬度工具类
 * @author niutongda
 *
 */
public class LngLatUtils {
	
	/**
	 * 计算地球上任意两点(经纬度)距离是否大于半径
	 * @param jd1  第一点经度
	 * @param wd1   第一点纬度
	 * @param jd2 第二点经度
	 * @param wd2 第二点纬度
	 * @param radius 第二点纬度
	 * @return 返回距离 单位：米
	 */
	public static boolean distance(String jd1, String wd1, String jd2,
			String wd2,String radius) {
		boolean flag = false;
		double a, b, R;
		double long1 = Double.valueOf(jd1);
		double lat1 = Double.valueOf(wd1);
		double long2 = Double.valueOf(jd2);
		double lat2 = Double.valueOf(wd2);
		BigDecimal dd = new BigDecimal(radius);
		R = 6378137; // 地球半径
		lat1 = lat1 * Math.PI / 180.0;
		lat2 = lat2 * Math.PI / 180.0;
		a = lat1 - lat2;
		b = (long1 - long2) * Math.PI / 180.0;
		double d;
		double sa2, sb2;
		sa2 = Math.sin(a / 2.0);
		sb2 = Math.sin(b / 2.0);
		d = 2
				* R
				* Math.asin(Math.sqrt(sa2 * sa2 + Math.cos(lat1)
						* Math.cos(lat2) * sb2 * sb2));
		if(new BigDecimal(d).compareTo(dd) == 1){
			flag = true;
		}
		return flag;
	}
	
	/**
	 *判断经纬度是否在行政区划中
	 * @参数： @param jd
	 * @参数： @param wd
	 * @参数： @param xzqh
	 * @参数： @return   
	 * @返回值： boolean  
	 * @throws
	 */
	public static boolean checkeLngLatIsInXzqh(String jd,String wd,String xzqh){
		boolean flag = false;
		String adcode = getXzqhByLngLat(jd,wd);
		if(!"".equals(adcode)){
			if(xzqh.equals(adcode)){
				flag = true;
			}else{
				if(xzqh.endsWith("00") && xzqh.substring(0, 4).equals(adcode.substring(0, 4))){
					flag = true;
				}else if(xzqh.endsWith("000") && xzqh.substring(0, 3).equals(adcode.substring(0, 3))){
					flag = true;
				}else{
					flag = false;
				}
			}
		}
		return flag;
	}
	
	/**
	 * 根据经纬度获取地区行政区划
	 * @参数： @param jd
	 * @参数： @param wd
	 * @参数： @return   
	 * @返回值： String  
	 * @throws
	 */
	private static String getXzqhByLngLat(String jd,String wd){
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String url = "http://api.map.baidu.com/geocoder/v2/?ak=GokSZ2wzPQivRG4yfjtZQmp6TFXBSZen&callback=renderReverse&location="
			+ wd + "," + jd + "&output=json&pois=0";
		String jsonStr = "";
		String xzqh = "";
		try {
			jsonStr = httpRequestProxy.doRequest(url, null, null, "UTF-8");
			jsonStr = jsonStr.substring(jsonStr.indexOf("{"), jsonStr.lastIndexOf("}")+1);
			JSONObject jsonOBJ = JSONObject.fromObject(jsonStr);
			if("0".equals(jsonOBJ.getString("status"))){
				JSONObject result = jsonOBJ.getJSONObject("result");
				JSONObject addressComponent = result.getJSONObject("addressComponent");
				xzqh = (String) addressComponent.getString("adcode");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return xzqh;
	}
	
	/**
	 * 根据经纬度，距离，角度计算另一点经纬度
	 * @参数： @param distance 距离 单位：米（m）
	 * @参数： @param logLatPtStr 经纬度：经度,纬度
	 * @参数： @param angle  角度 0~360
	 * @参数： @return   经纬度：经度,纬度
	 * @返回值： String  
	 * @throws
	 */
	public static String ConvertDistanceToLogLat(String dis, String logLatPtStr, double angle)
    {
		String lngLat = null;
		float distance = Float.valueOf(dis)/1000;
		String[] temp_Arrary = logLatPtStr.split(",");
        double lng1 = Double.valueOf(temp_Arrary[0]);
        double lat1 = Double.valueOf(temp_Arrary[1]);
        double lng = lng1 + (distance * Math.sin(angle* Math.PI / 180)) / (111 * Math.cos(lat1 * Math.PI / 180));//将距离转换成经度的计算公式
        double lat = lat1 + (distance * Math.cos(angle* Math.PI / 180)) / 111;//将距离转换成纬度的计算公式
        String lngStr = lng + "";
        String latStr = lat + "";
        lngLat = lngStr + "," + latStr;
        return lngLat;
    }
	
	public static void main(String[] args) {
		System.out.println(checkeLngLatIsInXzqh("112.545160","37.837620","140100")); 
		System.out.println(Math.cosh(112.545160));
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",45.00)+ "====45");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",90.00)+ "====90");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",135.00)+ "====135 右下");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",180.00)+ "====180");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",225.00)+ "====225");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",270.00)+ "====270");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",315.00)+ "====315 左上");
		System.out.println(ConvertDistanceToLogLat(""+5000,"116.5,40",360.00)+ "====360");
	}
}
