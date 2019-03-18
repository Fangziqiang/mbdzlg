package com.jadlsoft.utils;

public interface MBConstant {
	
	/**
	 * 工信部用户
	 */
	public static final String GXB = "1";
	/**
	 * 国家行业管理部门用户
	 */
	public static final String BPXH = "2";
	/**
	 * 省级行业管理部门用户
	 */
	public static final String SGB = "3";
	/**
	 * 集团用户
	 */
	public static final String JT = "4";
	/**
	 * 企业用户
	 */
	public static final String QYFGS = "5";
	/**
	 * 培训机构用户
	 */
	public static final String PXJG = "6";
	/**
	 * 管理员用户
	 */
	public static final String ADMIN = "99";
	/**
	 * 首页
	 */
	public static final String FIRSTPAGE = "0";
	/**
	 * 一级菜单
	 */
	public static final String FIRSTMENU = "1";
	/**
	 * 二级菜单
	 */
	public static final String SECONDMENU = "2";
	/**
	 * 三级菜单
	 */
	public static final String THREEMENU = "3";
	
	public static final String ZT_YX = "1";//记录状态：有效或未处理
	public static final String ZT_ZX = "0";//记录状态：注销或已处理
	//保存在SESSION中的验证码的KEY
	public static final String SYSTEM_VALIDATE_CODE = "JADLVALIDATECODE";
	
}
