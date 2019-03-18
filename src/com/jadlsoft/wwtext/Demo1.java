package com.jadlsoft.wwtext;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.BasicConfigurator;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;


import com.jadlsoft.utils.HttpRequestProxy;
import com.jadlsoft.utils.JsonUtil;
import com.jadlsoft.utils.JsonUtils;
import com.jadlsoft.utils.TripleDES3_DzlgMmxz;
import org.apache.axis.encoding.Base64;

public class Demo1 {
	public static void main(String[] args) throws Exception {
		//BasicConfigurator.configure();
		Map map = new HashMap();
		//		          纯生产单位
		//		          营业性生产单位
		//6401052300001 非营业性生产单位           爆破作业fzq01(爆破片作业起爆器){106.373884,39.007173}    fzq001试爆（试爆）
		//6401054300060 营业性爆破作业单位
		//			  非营业性爆破作业单位
		//位置上报		
//		map.put("sbbh", "爆破作业fzq01");
//		map.put("jd", "106.373884");
//		map.put("wd", "39.007173");
////营业性的单位位置上报不发dwdm，非营业的需要发单位代码
//		map.put("dwdm", "6401052300001");
		
			//在线下载	
//		map.put("sbbh", "爆破作业fzq02");
//		map.put("jd", "106.610174");
//		map.put("wd", "38.637016");
//		map.put("uid", "6060720000092,6060720000093");
//		map.put("dwdm", "6401052300001");
//		map.put("sbbh", "爆破作业fzq01"); map.put("jd", "106.373884"); map.put("wd", "39.007173");map.put("uid", "6060720000092,6060720000093");map.put("dwdm", "6401052300001");
//		map.put("htid", "640105316090011");
//		map.put("xmbh", "");
		
		//离线下载		
//		map.put("sbbh", "");
//		map.put("htid", "640105318010001");
		//map.put("xmbh", "370100X15040012");
//		map.put("xtm", "");
//		map.put("htm", "");
//		map.put("fbh", "6260512000103");
//		map.put("dwdm", "");
		
		//使用上报
		map.put("sbbh", "爆破作业fzq01");
		map.put("jd", "106.373884");
		map.put("wd", "39.007173");
		map.put("bprysfz", "210103197707070025");
		map.put("bpsj", "2018-03-05 13:50:42");
		map.put("uid", "6060720000104");
//		map.put("htid", "640100X17110002");
//		map.put("xmbh", "640100X17110002");
		
		
		String string = JsonUtil.map2json(map);
		System.out.println(string);
		String param = Base64.encode(TripleDES3_DzlgMmxz.encode(string));
		Map paramMap = new HashMap();
		paramMap.put("param", param);
		//map.put("fbh", "02W 000000000,3671223200300,3671223200301,3671223200302,3671223200303,3671223200304,3671223200305,3671223200306,3671223200307,3671223200308,3671223200309,3671223200310,3671223200311,3671223200312,3671223200313,3671223200314,3671223200315,3671223200316,3671223200317,3671223200318,3671223200319,3671223200320,3671223200321,3671223200322,3671223200323,3671223200324,3671223200325,3671223200326,3671223200327,3671223200328,3671223200329,3671223200330,3671223200331,3671223200332,3671223200333,3671223200334,3671223200335,3671223200336,3671223200337,3671223200338,3671223200339,3671223200340,3671223200341,3671223200342,3671223200343,3671223200344,3671223200345,3671223200346,3671223200347,3671223200348,3671223200349,3671223202900,3671223202901,3671223202902,3671223202903,3671223202904,3671223202905,3671223202906,3671223202907,3671223202908,3671223202909,3671223202910,3671223202911,3671223202912,3671223202913,3671223202914,3671223202915,3671223202916,3671223202917,3671223202918,3671223202919,3671223202920,3671223202921,3671223202922,3671223202923,3671223202924,3671223202925,3671223202926,3671223202927,3671223202928,3671223202929,3671223202930,3671223202931,3671223202932,3671223202933,3671223202934,3671223202935,3671223202936,3671223202937,3671223202938,3671223202939,3671223202940,3671223202941,3671223202942,3671223202943,3671223202944,3671223202945,3671223202946,3671223202947,3671223202948,3671223202949,3671223204600,3671223204601,3671223204602,3671223204603,3671223204604,3671223204605,3671223204606,3671223204607,3671223204608,3671223204609,3671223204610,3671223204611,3671223204612,3671223204613,3671223204614,3671223204615,3671223204616,3671223204617,3671223204618,3671223204619,3671223204620,3671223204621,3671223204622,3671223204623,3671223204624,3671223204625,3671223204626,3671223204627,3671223204628,3671223204629,3671223204630,3671223204631,3671223204632,3671223204633,3671223204634,3671223204635,3671223204636,3671223204637,3671223204638,3671223204639,3671223204640,3671223204641,3671223204642,3671223204643,3671223204644,3671223204645,3671223204646,3671223204647,3671223204648,3671223204649");
		HttpRequestProxy httpRequestProxy = new HttpRequestProxy();
		//httpRequestProxy.doRequest("http://qq.mbdzlg.com/mbdzlgtxzx/servlet/DzlgMmlxxzJsonServlert", map, null, null);
	
		//-----------------------------在线下载--------------------------------------------------------
//		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgMmxzJsonServlert", paramMap, null, null);
//		String ss = httpRequestProxy.doRequest("http://192.168.20.158:8888/mbdzlgtxzx/servlet/DzlgMmxzJsonServlert", paramMap, null, null);
//		System.out.println("-------------------------------------------");
//		System.out.println(TripleDES3_DzlgMmxz.decode(Base64.decode(ss)));
			
		//------------------------------离线下载---------------------------------------------------------
//		String ss = httpRequestProxy.doRequest("http://192.168.20.158:8888/mbdzlgtxzx/servlet/DzlgMmlxxzJsonServlert", paramMap, null, null);	
////		String ss = httpRequestProxy.doRequest("http://192.168.30.202:8085/mbdzlgtxzx/servlet/DzlgMmlxxzJsonServlert", paramMap, null, null);	
//		System.out.println("-------------------------------------------");
////		System.out.println(ss);
//		System.out.println(TripleDES3_DzlgMmxz.decode(Base64.decode(ss)));
		
		//------------------------------使用上报------------------------------------------------------------
		String ss = httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgSysbJsonServlert", paramMap, null, null);
//		String ss = httpRequestProxy.doRequest("http://192.168.20.158:8888/mbdzlgtxzx/servlet/DzlgSysbJsonServlert", paramMap, null, null);
		System.out.println("-------------------------------------------");
		System.out.println(ss);
		
		
		//位置上报
//		String ss =httpRequestProxy.doRequest("http://192.168.20.58:8888/mbdzlgtxzx/servlet/DzlgQbqwzsbJsonServlert", paramMap, null, null);
//		System.out.println("-------------------------------------------");
//		System.out.println(ss);
	}
}
