package com.jadlsoft.wwtext;

import java.util.HashMap;
import java.util.Map;


import com.jadlsoft.utils.HttpRequestProxy;
import com.jadlsoft.utils.JsonUtil;
import com.jadlsoft.utils.JsonUtils;
import com.jadlsoft.utils.TripleDES3_DzlgLyffMm;
import com.jadlsoft.utils.TripleDES3_DzlgMmxz;
import org.apache.axis.encoding.Base64;

public class Demo2 {
	public static void main(String[] args) throws Exception {
		//������������
		dzlgMmzxxz();
		
		//������������
//		dzlgMmlxxz();
		
		//ʹ���ϱ�
		//dzlgSysb();
		
		//λ���ϱ�������������
//		dzlgWzsb();
		
		//���÷���
		//dzlgLyff();
	}
	/**
	 * ����������ƽ̨�������ع��ܻ�ȡ����
	 * @author fandengyong
	 * @throws Exception 
	 * @����: 
	 * @date 2018-2-5 ����9:33:04
	 */
	private static void dzlgLyff() throws Exception {
		Map map = new HashMap();
		map.put("xlh", "373737");
		map.put("dwdm", "3701004200003");
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgLyffJsonServlert", map, null, null);
		System.out.println("-------------------------------------------");
		System.out.println("������Ϣ   "+ss);
		if(ss != null && !"".equals(ss)){
			Map map2 =JsonUtils.getMap4Json(ss);
			TripleDES3_DzlgLyffMm dES3 = new TripleDES3_DzlgLyffMm();
			dES3.setMy("373737");
			String par = null;
			if(map2.get("mmwj") != null && !"".equals(map2.get("mmwj"))){
				par = dES3.decode(Base64.decode(map2.get("mmwj")+""));
			}
			System.out.println("������Ϣ   "+par);
		}
		
	}
	/**
	 * λ���ϱ�
	 * @author fandengyong
	 * @throws Exception 
	 * @����: 
	 * @date 2018-2-5 ����9:34:44
	 */
	private static void dzlgWzsb() throws Exception {
		Map map = new HashMap();
		map.put("sbbh", "fzq_yy002");
		map.put("jd", "105.408026");
		map.put("wd", "38.466807");
//		Ӫҵ�Ե�λ������λ����
//		map.put("dwdm", "6401054300060");
		String string = JsonUtil.map2json(map);
		System.out.println(string);
		String param = Base64.encode(TripleDES3_DzlgMmxz.encode(string));
		Map paramMap = new HashMap();
		paramMap.put("param", param);
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgQbqwzsbJsonServlert", paramMap, null, null);
		System.out.println("-------------------------------------------");
		System.out.println(ss);
	}
	/**
	 * ʹ���ϱ�
	 * @author fandengyong
	 * @throws Exception 
	 * @����: 
	 * @date 2018-2-5 ����9:34:54
	 */
	private static void dzlgSysb() throws Exception {
		Map map = new HashMap();
		map.put("sbbh", "");
		map.put("jd", "");
		map.put("wd", "");
		map.put("uid", "");
		map.put("bpsj", "");
		map.put("bprysfz", "");
		map.put("htid", "");
		map.put("xmbh", "");
		String string = JsonUtil.map2json(map);
		System.out.println(string);
		String param = Base64.encode(TripleDES3_DzlgMmxz.encode(string));
		Map paramMap = new HashMap();
		paramMap.put("param", param);
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgSysbJsonServlert", paramMap, null, null);
		System.out.println("-------------------------------------------");
		System.out.println(ss);
	}
	/**
	 * ������������
	 * @Title:
	 * @author fandengyong
	 * @throws Exception 
	 * @����: 
	 * @date 2018-2-5 ����9:35:03
	 */
	private static void dzlgMmlxxz() throws Exception {
		Map map = new HashMap();
		map.put("sbbh", "");
		map.put("htid", "370101214120003");
		map.put("xmbh", "");
		map.put("xtm", "");
		map.put("htm", "");
		map.put("fbh", "6060720000069,6060720000070");
		map.put("dwdm", "");
		String string = JsonUtil.map2json(map);
		System.out.println(string);
		String param = Base64.encode(TripleDES3_DzlgMmxz.encode(string));
		Map paramMap = new HashMap();
		paramMap.put("param", param);
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgMmlxxzJsonServlert", paramMap, null, null);
		System.out.println("-------------------------------------------");
		System.out.println("---------"+ss);
		System.out.println(TripleDES3_DzlgMmxz.decode(Base64.decode(ss)));
	}
	/**
	 * ������������
	 * @Title:
	 * @author fandengyong
	 * @throws Exception 
	 * @����: 
	 * @date 2018-2-5 ����9:35:10
	 */
	private static void dzlgMmzxxz() throws Exception {
		Map map = new HashMap();
		map.put("sbbh", "fzq_yy002");
		map.put("jd", "105.408026");
		map.put("wd", "38.466807");
		map.put("uid", "6060720000069,6060720000079");
		map.put("htid", "640105316090010");
//		map.put("xmbh", "");
//		map.put("dwdm", "");
		String string = JsonUtil.map2json(map);
		System.out.println(string);
		String param = Base64.encode(TripleDES3_DzlgMmxz.encode(string));
		Map paramMap = new HashMap();
		paramMap.put("param", param);
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgMmlxxzJsonServlert", paramMap, null, null);
		System.out.println("-------------------------------------------");
		System.out.println(TripleDES3_DzlgMmxz.decode(Base64.decode(ss)));
	}
}
