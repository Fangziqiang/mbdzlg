package com.jadlsoft.utils;

import java.util.HashMap;
import java.util.Map;

public class MBDZLGConstant {

	//是否新数据 0:是 1：不是
	public static final String ISNEWDATA_YES = "0";
	public static final String ISNEWDATA_NO = "1";
	
	//数据状态  0:有效 1：无效 2:未备案  4:注销
	public static final String ZT_YX = "0";
	public static final String ZT_WX = "1";
	public static final String ZT_WBA = "2";
	public static final String ZT_ZX = "4";
	
	//处理状态 0:已处理 1：未处理
	public static final String CLZT_YCL = "0";
	public static final String CLZT_WCL = "1";
	
    //黑名单类型
	public static final String HMDLX_QBQ = "01";  //起爆器黑名单
	public static final String HMDLX_XTM = "11";  //箱条码黑名单
	public static final String HMDLX_HTM = "12";  //盒条码黑名单
	public static final String HMDLX_FBH = "13";  //发编号黑名单
	public static final String HMDLX_BPRY = "21";  //爆破人员黑名单
	
	
	//黑名单同步状态
	public static final String TBZT_YTB = "0";   //已同步
	public static final String TBZT_WTB = "1";   //未同步
	
	/**
	 * 黑名单状态 
	 */
	public static final String HMDZT_YX = "0";   //是黑名单
	public static final String HMDZT_YCX = "4";  //不是黑名单 
	
	/**
	 * 是否黑名单 
	 */
	public static final String IS_HMD_YES = "0";  //是
	public static final String IS_HMD_NO = "1";  //否
	
	//起爆器状态
	public static String QBQZT_YBA = "0";
	public static String QBQZT_HMD = "1";
	public static String QBQZT_YZX = "4";
	
	/**
	 * 作业类型	 0:合同作业 	 1：项目作业  	2：单位作业 	3：试爆作业
	 */
	public static String ZYLX_HT = "0";
	public static String ZYLX_XM = "1";
	public static String ZYLX_DW = "2";
	public static String ZYLX_SB = "3";
	
	//socket/http 通讯类型
	public static String TXLX_WZSB = "0";	//位置上报
	public static String TXLX_ZXXZ = "1";	//在线下载
	public static String TXLX_SYSB = "2";	//使用上报
	public static String TXLX_LXXZ = "3";	//离线下载
	public static String TXLX_GXGZ = "4";	//更新规则
	
	//是否报警
	public static String ISBJ_Y = "0";
	public static String ISBJ_N = "1";
	
	/**
	 * 电子雷管请求报警代码
	 */
	public static String BJDM_JBQY_KJ 	= 	"001";	//禁爆区域内开机
	public static String BJDM_ZBQYW_KJ 	= 	"002";	//工区外开机
	
	public static String BJDM_QBQ_WBA 	= 	"101";	//起爆器未备案
	public static String BJDM_HMD_QBQ 	= 	"102";	//黑名单起爆器请求密码
	public static String BJDM_ZYRW_WBA 	= 	"103";	//起爆器未设置作业任务
	public static String BJDM_JBRW_QQ 	= 	"104";	//禁爆任务请求
	public static String BJDM_ZBQYW_QQ 	= 	"105";	//准爆区域外请求
	public static String BJDM_JBQY_QQ 	= 	"106";	//禁爆区域内请求
	public static String BJDM_HMD_LG 	= 	"107";	//黑名单雷管请求
	public static String BJDM_LGBCZ_QQ 	= 	"108";	//雷管不存在请求
	
	public static String BJDM_JBQY_ZY 	= 	"201";	//禁爆区域作业
	public static String BJDM_ZBQYW_ZY 	= 	"202";	//准爆区域外作业
	public static String BJDM_HMD_QBQ_ZY= 	"203";	//黑名单(起爆器)作业
	public static String BJDM_HMD_LG_ZY = 	"204";	//黑名单(雷管发)作业
	public static String BJDM_HMD_BPY_ZY= 	"205";	//黑名单(爆破员)作业
	public static String BJDM_JBRW_ZY 	= 	"206";	//禁爆任务作业
	public static String BJDM_QBQ_WBA_ZY= 	"207";	//未备案起爆器作业
	public static String BJDM_ZYRW_WBA_ZY=	"208";	//无作业任务起爆器作业
	public static String BJDM_LGBCZ_ZY	=	"209";	//雷管不存在作业
	
	public static String BJDM_LGYQ_SB 	= 	"301";	//雷管逾期上报
	public static String BJDM_LGYQ_WSB 	= 	"302";	//雷管逾期未上报
	
	/*
	 * 禁爆类型
	 */
	public static String GZLX_BJ = "0";//圆形区域禁爆
	public static String GZLX_XZQH = "1";//行政区域禁爆
	public static String GZLX_ZYRW = "2";//作业任务禁爆
	
	/**
	 * 使用状态
	 */
	public static String SYZT_YSY = "0";//已使用
	public static String SYZT_WSY = "1";//未使用
	public static String SYZT_BCZ = "5";//不存在
	/*
	 * 作业任务操作类型
	 */
	public static String ZYRW_GZLX_ADD = "1";
	public static String ZYRW_GZLX_DEL = "2";
	
	/*
	 *逾期处理状态 
	 */
	public static String YQCLZT_YCL = "0";
	public static String YQCLZT_WCL = "1";
	
	
	/*
	 *起爆器使用方式
	 */
	public static String SYFS_SB = "0"; //试爆
	public static String SYFS_FSB = "1";//非试爆 爆破作业
	/*
	 *审批状态
	 */
	public static String SPZT_YSQ = "0"; //已申请
	public static String SPZT_SPTG = "1";//审批通过
	public static String SPZT_SPWTG = "2";//审批未通过
	
	/**
	 *接口访问类型
	 */
	public static final String JKLX_HTTP = "http";	//http访问
	public static final String JKLX_SOCKET = "socket";	//socket访问
	
	/**
	 * 访问类型
	 */
	public static final int DATATYPE_ZXXZ_INP_JS = 7;	//密码在线下载（简式）
	public static final int DATATYPE_ZXXZ_INP_FS = 1;	//密码在线下载（复式）
	public static final int DATATYPE_LXXZ_INP_JS = 19;	//密码离线下载（简式）
	public static final int DATATYPE_LXXZ_INP_FS = 3; 	//密码离线下载（复式）
	public static final int DATATYPE_GXGZ_INP =    5; 	//更新准爆、禁爆规则
	public static final int DATATYPE_QBQWZSB_INP = 9; 	//起爆器位置上报
	public static final int DATATYPE_SYXXSB_INP  = 17; 	//使用信息上报
	
	public static final int DATATYPE_HTTP_ZZXZ = 21;	//http密码在线下载
	public static final int DATATYPE_HTTP_LXXZ = 22;	//http密码离线下载
	public static final int DATATYPE_HTTP_QBQWZSB = 23;	//http起爆器位置上报
	public static final int DATATYPE_HTTP_SYXXSB = 24;	//http使用信息上报
	public static final int DATATYPE_HTTP_GXGZ = 25;		//http更新规则
	
	
	/**
	 * 返回类型
	 */
	public static final int DATATYPE_ZXXZ_OUT_JS = 8;	//密码在线下载（简式）
	public static final int DATATYPE_ZXXZ_OUT_FS = 2;	//密码在线下载（复式）
	public static final int DATATYPE_LXXZ_OUT_JS = 20;	//密码离线下载（简式）
	public static final int DATATYPE_LXXZ_OUT_FS = 4;	//密码离线下载（复式）
	public static final int DATATYPE_GXGZ_OUT =    6; 	//更新准爆、禁爆规则
	public static final int DATATYPE_QBQWZSB_OUT = 16; 	//起爆器位置上报
	public static final int DATATYPE_SYXXSB_OUT  = 18; 	//使用信息上报
	
	
	/**
	 * 访问类型与返回类型对应关系
	 */
	public static final Map DATATYPE_RETURN = new HashMap();
	static{
		DATATYPE_RETURN.put(DATATYPE_ZXXZ_INP_JS, DATATYPE_ZXXZ_OUT_JS);
		DATATYPE_RETURN.put(DATATYPE_ZXXZ_INP_FS, DATATYPE_ZXXZ_OUT_FS);
		DATATYPE_RETURN.put(DATATYPE_LXXZ_INP_JS, DATATYPE_LXXZ_OUT_JS);
		DATATYPE_RETURN.put(DATATYPE_LXXZ_INP_FS, DATATYPE_LXXZ_OUT_FS);
		DATATYPE_RETURN.put(DATATYPE_GXGZ_INP, DATATYPE_GXGZ_OUT);
		DATATYPE_RETURN.put(DATATYPE_QBQWZSB_INP, DATATYPE_QBQWZSB_OUT);
		DATATYPE_RETURN.put(DATATYPE_SYXXSB_INP, DATATYPE_SYXXSB_OUT);
	}
	
	/**
	 * 访问类型描述
	 */
	public static final String HTTP_LXXZ = "【离线下载#http】";
	public static final String HTTP_ZXXZ = "【在线下载#http】";
	public static final String HTTP_WEZB = "【位置上报#http】";
	public static final String HTTP_SYSB = "【使用上报#http】";
	public static final String HTTP_GXGZ = "【规则更新#http】";
	public static final String SOCKET_ZXXZ_FS = "【在线下载#socket[复式]】";
	public static final String SOCKET_ZXXZ_JS = "【在线下载#socket[简式]】";
	public static final String SOCKET_LXXZ_FS = "【离线下载#socket[复式]】";//默认
	public static final String SOCKET_LXXZ_JS = "【离线下载#socket[简式]】";
	public static final String SOCKET_GZGX = "【规则更新#socket】";
	public static final String SOCKET_WZSB = "【位置上报#socket】";
	public static final String SOCKET_SYSB = "【使用上报#socket】";
	
	
	/**
	 * socket通信类型      0:短连接  1:长连接  2：分包
	 */
	public static final int RECEIVE_MODE_SHORT  = 0;//短连接
	public static final int RECEIVE_MODE_LONG  = 1;//长连接
	public static final int RECEIVE_MODE_SPLIT  = 2;//分包
	
	/**
	 * 电子雷管密码请求方式  2：复式  8:简式
	 */
	public static final int DATATYPE_F = 2;//复式
	public static final int DATATYPE_J = 8;//简式
	

	/***************************电子雷管请求信息代码**************************/
	/**
	 * 成功
	 */
	public static final int CORRECT = 0;
	/**
	 * 错误信息：【请求信息】非法申请信息
	 */
	public static final int ERROR_REQ = 1;
	
	/**
	 * 错误信息：【请求信息】未找到转发地址
	 */
	public static final int ERROR_REQ_NOFONDXZQH = 2;
	
	/**
	 * 错误信息：【备案信息】起爆器或作业任务未备案
	 */
	public static final int ERROR_BAXX_WBA = 2;
	
	/**
	 * 错误信息：【备案信息】备案的起爆器存在多个作业任务，无法识别
	 */
	public static final int ERROR_BAXX_MOREZYRW = 3;
	
	/**
	 * 错误信息：【备案信息】备案的起爆器是黑名单
	 */
	public static final int ERROR_BAXX_HMDQBQ = 4;
	
	/**
	 * 错误信息：【备案信息】试爆起爆器不支持离线请求
	 */
	public static final int ERROR_BAXX_BZZDQQ = 9;
	
	/**
	 * 错误信息：【备案信息】作业任务未备案爆破区域
	 */
	public static final int ERROR_BAXX_WSZQY = 10;
	
	/**
	 * 错误信息：【备案信息】请求的位置在爆破区域外
	 */
	public static final int ERROR_BAXX_ZBQYW = 5;
	

	/**
	 * 错误信息：【监管信息】请求的位置在禁爆区域内
	 */
	public static final int ERROR_JGXX_JBQYNQQ  = 6;
	
	
	/**
	 * 错误信息：【监管信息】禁爆任务请求
	 */
	public static final int ERROR_JGXX_RWJB = 8;
	/**
	 * 错误信息：【密码申请】超量申请
	 */
	public static final int ERROR_MMSQ_CL = 11;
	
	/**
	 * 错误信息：营业性单位必须设置合同或者项目
	 */
	public static final int ERROR_HTTP_YYXDW_BXSZHTHXM = 12;
	/**
	 * 错误信息：网络连接失败
	 */
	public static final int ERROR_CONNECT = 99;
	
	
	/**
	 * 错误信息：【使用上报】成功
	 */
	public static final int ERROR_SYSB_TRUE = 0;
	/**
	 * 错误信息：【使用上报】失败
	 */
	public static final int ERROR_SYSB_FAIL = 1;
	/**
	 * 错误信息：【http使用上报】失败
	 */
	public static final String ERROR_HTTPSYSB_FAIL = "fail";	//失败
	public static final String ERROR_HTTPSYSB_TRUE = "true";	//成功
	
	/**
	 * 返回错误信息解析
	 */
	public static final String FHCWXX_0 = "成功";
	public static final String FHCWXX_1 = "非法申请信息";
	public static final String FHCWXX_SYSB_1 = "失败";
	public static final String FHCWXX_2 = "起爆器未备案或未设置作业任务";
	public static final String FHCWXX_3 = "起爆器【未设置作业任务】";
	public static final String FHCWXX_4 = "起爆器【黑名单】";
	public static final String FHCWXX_5 = "准爆【区域外请求】";
	public static final String FHCWXX_6 = "禁爆【区域外请求】";
	public static final String FHCWXX_7 = "起爆器【已注销/报废】";
	public static final String FHCWXX_8 = "禁爆【任务禁爆】";
	public static final String FHCWXX_SOCKET_9 = "起爆器【试爆不支持离线下载】";
	public static final String FHCWXX_HTTP_9 = "作业合同存在项目";
	public static final String FHCWXX_10 = "准爆【未设置区域】";
	public static final String FHCWXX_SOCKET_11 = "雷管数量【离线超量下载】";
	public static final String FHCWXX_HTTP_11 = "离线下载不支持生产厂家试爆";
	public static final String FHCWXX_12 = "营业性单位必须设置合同或者项目";
	public static final String FHCWXX_SOCKET_63 = "网络连接失败";
	public static final String FHCWXX_HTTP_99 = "网络连接失败";
	
	/**
	 * 领用发放返回信息
	 */
	public static final String LYFF_COUNT = "0";	//下载成功
	public static final String LYFF_ERROR_FFXLH = "1";	//非法的序列号
	public static final String LYFF_ERROR_WHQDMMXX = "2";	//未获取到密码信息
	
	/**
	 * 雷管的错误信息代码
	 */
	public static final String LG_CWXX_ZC = "0" ;		//雷管正常
	public static final String LG_CWXX_ISHMD = "1" ;	//雷管在黑名单中
	public static final String LG_CWXX_YSY = "2" ;		//雷管已使用
	public static final String LG_CWXX_BCZ = "3" ;		//申请的雷管不存在
	
	
	
	//营业性爆破作业单位和非营业性爆破作业单位类别
	public static final String DWLB_YYX = "1";
	public static final String DWLB_FYYX = "0";
	
	
	//////////////////////////////// 领用发放密码下载 ////////////////////////////////
	
	/**
	 * 领用发放请求错误
	 */
	public static final String ERROR_LYFF_BWZ = "0";	//序列号或密钥为空
	public static final String ERROR_LYFF_XLHCW = "1";	//序列号错误
	public static final String ERROR_LYFF_WLLJSB = "2";	//网络连接失败
	
	
	/**
	 * 数据流错误信息
	 */
	public static final String SJL_CWXX_FFSJL_OR_WLG = "1";	//数据流不是新流(从单位卡中读取的流不是新流，即没有合同、项目)
															//或雷管数量为空
	public static final String SJL_CWXX_FFGS = "2";	//数据流数据格式不对
	/**
	 * 领用发放下载状态
	 */
	
	public static final String LYFFLG_XZZT_YXZ = "0" ; 		//已下载;
	public static final String LYFFLG_XZZT_WXZ = "1" ; 		//未下载;
	
	/**
	 * 领用发放数据状态
	 */
	
	public static final String LYFF_ZT_YX = "0" ; 	//有效;
	public static final String LYFF_ZT_WX= "1" ; 		//无效;
	
	/**
	 * 当前系统
	 */
	public static final String SYSTEMINFO = "【请求中心】";
	
	/**
	 * 日志信息头部
	 */
	public static final String LOGINFO_TITLE_SUCCESS = "===============";//正确的信息头
	public static final String LOGINFO_TITLE_FAILE   = "***************";//错误的信息头
	/**
	 * 区分内外网同步数据来源
	 */
	public static final String NWWTB_SJLY = "QQWW";   //外网数据  (QQNW  内网数据)  
}
