package com.jadlsoft.utils;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;


/**
 * @deprecated:json工具类
 * @author:邱嘉 2013年3月27日10:30:57
 * 
 */
public class JsonUtils {
	/**
	 * @author shihongbo 2012-05-18
	 * @throws Exception 
	 * @Description 把JsonArray转换成List<Map>
	 */
	@SuppressWarnings("unchecked")
	public static List getList4Json(String JsonArray) throws Exception {
		List list = new ArrayList();
		Map map = new HashMap();
		if (JsonArray != null && !JsonArray.equals("")) {
			Object obj = JSONValue.parse(JsonArray);
			JSONArray jsonArray = (JSONArray) obj;
			for (int i = 0; i < jsonArray.size(); i++) {
				map = getMap4Json(jsonArray.get(i).toString());
				list.add(map);
			}
		}
		return list;
	}

	/**
	 * @author shihongbo 2012-05-15
	 * @Description 把jsonObject转换成map
	 */
	@SuppressWarnings("unchecked")
	public static Map getMap4Json(String jsonString) throws Exception  {
		Object obj = JSONValue.parse(jsonString);
		JSONObject jsonObject = (JSONObject) obj;
		Iterator keyIter = jsonObject.keySet().iterator();
		String key;
		Object value;
		Map valueMap = new HashMap();

		while (keyIter.hasNext()) {
			key = (String) keyIter.next();
			value = jsonObject.get(key);
			valueMap.put(key, value);
		}

		return valueMap;
	}

	/**
	 * @Description 把map格式的数据转成jsonObject
	 * @param map
	 *            <String,String>
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static JSONObject getJson4Map(Map map) {
		JSONObject jsonObject = new JSONObject();
		if (map != null && !map.isEmpty()) {
			Iterator keyIter = map.keySet().iterator();
			String key;
			Object value;
			while (keyIter.hasNext()) {
				key = (String) keyIter.next();
				if (map.get(key) instanceof java.util.Date) {
					Date date = (Date) map.get(key);
					value = DateUtils.getFullDataToString(date);
				} else {
					value = map.get(key);
				}
				jsonObject.put(key, value);
			}
		}
		return jsonObject;
	}

	/**
	 * @功能：将list转成JSON串
	 * @参数：
	 * @param list
	 * @return
	 * @返回值：String
	 * create by zhaohuibin 2014-6-12 下午04:22:11
	 */
	@SuppressWarnings("unchecked")
	public static String getJson4List(List list) {
		String result = null;
		JSONArray jsonArray = new JSONArray();
		JSONObject jsonObject = new JSONObject();
		if (list != null && list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				Map map = (Map)list.get(i);
				jsonObject = getJson4Map(map);
				jsonArray.add(jsonObject);
			}
			result = jsonArray.toString();
		}
		return result;
	}
	public String list2JsonArray(List list){
		net.sf.json.JSONArray array = net.sf.json.JSONArray.fromObject(list);
		return array.toString();
	}
	public static String listToJsonArray(List list){
		net.sf.json.JSONArray array = net.sf.json.JSONArray.fromObject(list);
		return array.toString();
	}
}
