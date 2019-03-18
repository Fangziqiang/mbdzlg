package com.jadlsoft.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.apache.log4j.Logger;


public class DateUtils {
	public static Logger log = Logger.getLogger(DateUtils.class);

	public static int YEAR = 1;

	public static int MONTH = 2;

	public static int DATE = 3;
	
	public static final String defaultDateFormat = "yyyy-MM-dd";
	public static final String defaultTimeFormat = "yyyy-MM-dd HH:mm:ss";
	public static String tranTimestamp2StringWithFormat(Date date){
		return tranTimestamp2String(date , "yyyy-MM-dd HH:mm:ss");
	}
	private static String tranTimestamp2String(Date date , String format){
		return (new SimpleDateFormat(format).format(date));
	}
	
	
	/**
	 * 李洪磊 2009-03-16 
	 * 获得某个年月日
	 * @param kind  获得变更的类型
	 * @param value  变更的量
	 * @return
	 */
	public static String getDate(int type, int value) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		if (type == YEAR) {
			calendar.add(Calendar.YEAR, value);
		} else if (type == MONTH) {
			calendar.add(Calendar.MONTH, value);
		} else if (type == DATE) {
			calendar.add(Calendar.DATE, value);
		} else {
		}
		return new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime());
	}
	/**
	 * 获取上个月今天日期：today：2008-08-18
	 * @return 2008-07-18
	 */
	public static String getLastMonthToday() {	
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		calendar.set(Calendar.MONDAY, calendar.get(Calendar.MONDAY)-1);   
		return new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime());
	}
	
	/**
	 * 获取下个月今天日期：today：2008-08-18
	 * @return 2008-09-18
	 */
	public static String getNextMonthToday() {	
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		calendar.set(Calendar.MONDAY, calendar.get(Calendar.MONDAY)+1);   
		return new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime());
	}
	
	/**
	 * 获得明年的今天日期
	 * @return
	 */
	public static Date getNextYearToday() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR)+1);   
		return calendar.getTime();
	}
	/**
	 * @param days
	 * @return 当前日期days天以前的日期
	 */
	public static String getLastFewDaysAgo(int days) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		int day = calendar.get(Calendar.DAY_OF_YEAR);
		calendar.set(Calendar.DAY_OF_YEAR, day - days);
        return new SimpleDateFormat(defaultDateFormat).format(calendar.getTime());
	}
	/**
	 * Description: 获取当前日期 return: 2006-09-28 14:05:10
	 */
	public static String getCurrentData(String format) {
		if (format == null || format.equals("")) {
			format = "yyyy-MM-dd";
		}
		return (new SimpleDateFormat(format).format(new Date()));
	}
	public static Date getCurrentDate(){
		SimpleDateFormat s =  new SimpleDateFormat(defaultDateFormat);
		Date date = null;
		try {
			date = s.parse(new SimpleDateFormat(defaultDateFormat).format(new Date()));
		} catch (ParseException e) {
			log.error("日期格式化时发生错误!", e);
		}
		return date;
	}
	public static Date getCurrentDate(String format){
		if (format == null || format.equals("")) {
			return getCurrentDate();
		}
		SimpleDateFormat s =  new SimpleDateFormat(format);
		Date date = null;
		try {
			date = s.parse(new SimpleDateFormat(format).format(new Date()));
		} catch (ParseException e) {
			log.error("日期格式化时发生错误!", e);
		}
		return date;
	}
	
	public static String getCurrentTimeStr(){
		return new SimpleDateFormat(defaultTimeFormat).format(new Date());
	}
	public static String getCurrentTimeStr(String format){
		if (format == null || format.equals("")) {
			 return getCurrentTimeStr();
		}
		return new SimpleDateFormat(format).format(new Date());
	}
	
	public static String getCurrentDateStr(String format) {
		if (format == null || format.equals("")) {
			 return getCurrentDateStr();
		}
		return (new SimpleDateFormat(format).format(new Date()));
	}
	
	public static String getCurrentDateStr(){
		return (new SimpleDateFormat(defaultDateFormat).format(new Date()));
	}
	
	public static Date formatDate(Date date,String format) {
		if(date == null){
			return null;
		}
		if (format == null || format.equals("")) {
			format = defaultDateFormat;
		}
		SimpleDateFormat s =  new SimpleDateFormat();
		try {
			date = s.parse(new SimpleDateFormat(format).format(date));
		} catch (ParseException e) {
			log.error("日期格式化时发生错误!", e);
		}
		return date;
	}
	public static String DateToString(Date date,String format){
		if(date == null){
			return null;
		}
		if(format ==null || "".equals(format)){
			return DateToString(date);
		}
		return new SimpleDateFormat(format).format(date);
	}
	public static String DateToString(Date date) {
		return (new SimpleDateFormat(defaultDateFormat).format(date));
	}
	 
	public static Date StringToDate(String dateStr,String format){
		if(dateStr == null || "".equals(dateStr.trim())){
			return null;
		}
		if(format ==null || "".equals(format)){
			return StringToDate(dateStr);
		}
		Date date = null;
		try {
			date = new SimpleDateFormat(format).parse(dateStr);
		} catch (ParseException e) {
			log.error("String转换成日期类型的时发生错误!", e);
		}
		return date;
	}
	public static Date StringToDate(String dateStr){
		if(dateStr == null || "".equals(dateStr.trim())){
			return null;
		}
		Date date = null; 
		try {
			date = new SimpleDateFormat(defaultDateFormat).parse(dateStr);
		} catch (ParseException e) {
			log.error("String转换成日期类型的时发生错误!", e);
		}
		return date;
	}

	/**
	 * Description: 获取当前年 return: 2006-09-28 14:05:10
	 */
	public static String getCurrentYear() {
		return  getCurrentDateStr("yyyy"); 
	}

	/**
	 * Description: 通过给当前的日期增加偏移量而获取指定的日期
	 * 
	 * @param type:类常量YEAR、MONTH、DATE中的一个,分别指定对年、月、日增加偏移量
	 * @param value:偏移量,可正可负
	 * @return: 2006-10-10
	 */
	public static String getOffsetData(int type, int value) {
		Calendar cal = Calendar.getInstance();
		return createOffsetData(cal, type, value);
	}

	/**
	 * Description: 通过给指定的日期增加偏移量而获取指定的日期
	 * 
	 * @param fulldate:给定的日期
	 * @param type:类常量YEAR、MONTH、DATE中的一个,分别指定对年、月、日增加偏移量
	 * @param value:偏移量,可正可负
	 * @return: 2006-10-10
	 */
	public static String getOffsetData(String fulldate, int type, int value) {
		if (fulldate.length() < 10) {
			return getOffsetData(type, value);
		}
		Calendar cal = Calendar.getInstance();
		cal.set(Integer.parseInt(fulldate.substring(0, 4)), Integer.parseInt(fulldate.substring(5, 7)) - 1, Integer.parseInt(fulldate.substring(8, 10)));
		return createOffsetData(cal, type, value);
	}
	 

	/**
	 * Description: 判断日期1--date1是否在日期2--date2之前
	 * @param date1:日期1,格式为【2006-09-28】
	 * @param date2:日期2,格式为【2006-09-28】
	 * return: 如date1在date2之前则返回true,否则返回false.异常时返回false
	 */
	public static boolean compareDate(String date1, String date2) {
		try {
			return StringToDate(date1).before(StringToDate(date2));
		} catch (Exception e) {
			return false;
		}
	}
	 
	/**
	 * Description: 通过对日期增加偏移量而获取指定的日期
	 * 
	 * @param cal:Calendar类实例
	 * @param type:类常量YEAR、MONTH、DATE中的一个,分别指定对年、月、日增加偏移量
	 * @param value:偏移量,可正可负
	 * @return: 2006-10-10
	 */
	private static String createOffsetData(Calendar cal, int type, int value) {
		if (type == YEAR) {
			cal.add(Calendar.YEAR, value);
		} else if (type == MONTH) {
			cal.add(Calendar.MONTH, value);
		} else if (type == DATE) {
			cal.add(Calendar.DATE, value);
		} else {
		}
		return (cal.get(Calendar.YEAR) + "-" + int2string(cal.get(Calendar.MONTH) + 1) + "-" + int2string(cal.get(Calendar.DATE)));
	}

	/**
	 * Description: 将日期中的用到的月、日的int值转换为String值,如将5月转换为05月返回
	 * 
	 * @param value:待转换的值
	 * @return: 05
	 */
	private static String int2string(int value) {
		String returnValue = String.valueOf(value);
		if (returnValue.length() == 1) {
			returnValue = "0" + returnValue;
		}
		return returnValue;
	}

	/**
	 * util的Date转为sql的Date
	 */
	public static java.sql.Date getUtilDate2SqlDate(java.util.Date date, String format) {
		return java.sql.Date.valueOf(new SimpleDateFormat(format).format(date));
	}

	/**
	 * 
	 * @param field
	 * @param amount
	 * @return
	 */
	public static String getDiffDate(int field , int amount) {
		GregorianCalendar d = new GregorianCalendar();
		d.add(field , amount);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date d1 = d.getTime();
		return format.format(d1);
	}
	
	/**
	 * 计算两个日期相差天数
	 * @param fromDate
	 * @param toDate
	 * @return 天数
	 */
	public static int countDays(String fromDate, String toDate) {
		int days = 0;
		try {
			long l = (StringToDate(toDate).getTime() - StringToDate(fromDate).getTime());
			days = (int) (l / 60 / 60 / 1000 / 24);
		} catch (Exception e) {
			log.error("计算两个日期相差天数出错", e);
		}
		return days;
	}
	
	/**
	 * 比较前、后时间差
	 * @param now 现在
	 * @param last 过去
	 * @return 相差的天数
	 */
	public static long compare2Date(String now , String last){
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date passDate1 = null;
		java.util.Date passDate2 = null;
		try {
			passDate1 = simpleDateFormat.parse(now);
			passDate2 = simpleDateFormat.parse(last);
		} catch (ParseException e) {
			return 0;
		}
		GregorianCalendar startDate = new GregorianCalendar(2000, 0, 1);
		if (passDate2.getTime() < startDate.getTimeInMillis()) {
			return 0;
		}
		return (passDate1.getTime() - passDate2.getTime()) / (24 * 60 * 60 * 1000);
	}
	/**
	 * 获取当前的小时，24小时制
	 * @return
	 */
	public static int getCurrentHour(){
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		return calendar.get(Calendar.HOUR_OF_DAY);
	}
	
	/**
	 * 获取当前的分钟
	 * @return
	 */
	public static int getCurrentMinute(){
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(System.currentTimeMillis());
		return calendar.get(Calendar.MINUTE);
	}
 
	/** 
	 * @功能：得到本月的第一天
	 * @参数：
	 * @return
	 * @返回值：String
	 * create by zhaohuibin 2010-9-21 上午10:21:54
	 */
	public static String getMonthFirstDay() {
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.DAY_OF_MONTH, calendar
				.getActualMinimum(Calendar.DAY_OF_MONTH));

		return new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime());
	}

	/**
	 * @功能：得到本月的最后一天
	 * @参数：
	 * @return
	 * @返回值：String
	 * create by zhaohuibin 2010-9-21 上午10:22:01
	 */
	public static String getMonthLastDay() {
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.DAY_OF_MONTH, calendar
				.getActualMaximum(Calendar.DAY_OF_MONTH));
		return new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime());
	}
	 
	/**
	 * Description: 获取登记日期
	 * 
	 * @param appointdate:指定的时间,格式为【2007-11-28】
	 *            return: Date
	 */
	public static Date createDjDate(String appointdate) {
		try {
			if(appointdate.equals("") == false){
				return (new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(appointdate));
			}
		} catch (Exception e) {
			log.error("转换成Date类型的日期时发生错误!", e);
			return null;
		}
		return null;
	}
	
	/**
	 * Description: 获取指定日期
	 * 
	 * @param appointdate:指定的时间,格式为【2006-09-28】
	 *            return: Date
	 */
	public static Date createDate(String appointdate) {
		// 李洪磊 修改 2008-07-16
		if(appointdate == null || appointdate.trim().equals("")) {
			return null;
		}
		try {
			return (new SimpleDateFormat("yyyy-MM-dd").parse(appointdate));
		} catch (Exception e) {
			log.error("转换成Date类型的日期时发生错误!", e);
			return null;
		}
	}
	
	/**
	 * 返回当前时间及日期,用于数据解析
	 * @return 返回格式：yyyy-MM-dd hh:mm:ss
	 * @date:2008-7-18 上午11:39:18
	 */
	public static String getCurrentTime(){
		java.util.Date d = new java.util.Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return format.format(d);
	}
	
	/**
	 * Description: 将日期改为String，精确到秒
	 */
	public static String getFullDataToString(Date date) {
		if(date == null) {
			return null;
		}
		return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
	}
	/**
	 * @功能 获取指定月份之后的之后   比如3个月之后
	 * @参数 @param months
	 * @参数 @return
	 * @作者 zhangsanjie add 2016-5-31 下午2:29:12
	 * @返回值类型 Date
	 */
    public static Date getAssignMonthAfterDate(int months){
    	try{
    		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd"); //设置时间格式
        	Date dNow = new Date(); //当前时间
        	dNow = sdf.parse(sdf.format(dNow));
        	Date dAfter = new Date();
        	Calendar calendar = Calendar.getInstance(); //得到日历
        	calendar.setTime(dNow);//把当前时间赋给日历
        	calendar.add(calendar.MONTH, months); //设置为3个月之后
        	dAfter = calendar.getTime(); //得到前3月的时间
        	dAfter =  sdf.parse(sdf.format(dAfter));
        	return dAfter;
    	}catch(Exception e){
    		e.printStackTrace();
    		log.error("获取指定月份之后的日期失败", e);
    	}
    	return null;
    }
}
