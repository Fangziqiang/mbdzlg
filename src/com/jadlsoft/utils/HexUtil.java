package com.jadlsoft.utils;

import java.io.ByteArrayOutputStream;

public class HexUtil {
	
	/**
	 * 字节转换成int
	 * @参数：@param hexstr
	 * @参数：@return
	 * @返回值：Integer
	 */
	public static Integer convertByteToInt(byte cb) {
		return Integer.valueOf(cb);
	}
	
	/**
	 * 根据下标和长度转换字节  返回int
	 * @参数：@param cb
	 * @参数：@return
	 * @返回值：Integer
	 */
	public static Integer convertBytes(byte[] cb,int index,int length) {
		StringBuffer toInt = new StringBuffer();
		int end = index + length;
		for(int i = index ; i < end ; i++){
			toInt.append(Integer.valueOf(cb[i]) >= 0 ? Integer.valueOf(cb[i]) :Integer.valueOf(cb[i] )+ 256);
		}
		return Integer.valueOf(toInt.toString()) >= 0 ? Integer.valueOf(toInt.toString()) :Integer.valueOf(toInt.toString()) + 256;
	}
	
	/**
	 * 根据下标和长度转换字节  返回字符串
	 * @参数：@param cb
	 * @参数：@return
	 * @返回值：String
	 */
	public static String convertASCBytesToString(byte[] cb,int index,int length) {
		StringBuffer toInt = new StringBuffer();
		int end = index + length;
		for(int i = index ; i < end ; i++){
			toInt.append((char)cb[i]);
		}
		return toInt.toString();
	}
	
	/**
	 * 根据下标和长度转换字节,将四字节字节数组转换为String（经纬度）
	 * @参数： @param cb
	 * @参数： @param index
	 * @参数： @param length
	 * @参数： @return   
	 * @返回值： String  
	 * @throws
	 */
	public static String convert4BytesToString(byte[] cb,int index,int length) {
		Float F = new Float(0.0);
		int i = ((((cb[index+3] & 0xff) << 8 | (cb[index+2] & 0xff)) << 8) | (cb[index+1] & 0xff)) << 8
				| (cb[index] & 0xff);
		return F.intBitsToFloat(i)+"";
	}
	
	/**
	 * 将字符串转换为四字节数组（经纬度）
	 * @参数： @param str
	 * @参数： @return   
	 * @返回值： byte[]  
	 * @throws
	 */
	public static byte[] convertStringTo4Bytes(String str){
		Float f = Float.valueOf(str);
		byte[] b = new byte[4];
		b[0] = (byte) (Float.floatToRawIntBits(f) & 0xff);
		b[1] = (byte) (Float.floatToRawIntBits(f) >> 8 & 0xff);
		b[2] = (byte) (Float.floatToRawIntBits(f) >> 16 & 0xff);
		b[3] = (byte) (Float.floatToRawIntBits(f) >> 24 & 0xff);
		return b;
	}
	
	/**
	 * 根据下标和长度转换字节,将八字节字节数组转换为String（单位代码）
	 * @参数： @param cb
	 * @参数： @param index
	 * @参数： @param length
	 * @参数： @return   
	 * @返回值： String  
	 * @throws
	 */
	public static String convert8BytesToString(byte[] cb,int index,int length) {
		if(length == 0 ){
			return "";
		}
		return ((((long) cb[index] & 0xff) << 0)   | 
				(((long) cb[index+1] & 0xff) << 8) | 
				(((long) cb[index+2] & 0xff) << 16) | 
				(((long) cb[index+3] & 0xff) << 24) | 
				(((long) cb[index+4] & 0xff) << 32) | 
				(((long) cb[index+5] & 0xff) << 40) | 
				(((long) cb[index+6] & 0xff) << 48)  | 
				(((long) cb[index+7] & 0xff) << 56))+"";
	}
	
	/**
	 * 将字符串转换为8字节数组（单位代码）
	 * @参数： @param str
	 * @参数： @return   
	 * @返回值： byte[]  
	 * @throws
	 */
	public static byte[] convertStringTo8Bytes(String str) {
		long l = Double.doubleToLongBits(Double.parseDouble(str));  
		byte b[] = new byte[8];  
        b[0] = (byte)  (0xff & (l >> 56));  
        b[1] = (byte)  (0xff & (l >> 48));  
        b[2] = (byte)  (0xff & (l >> 40));  
        b[3] = (byte)  (0xff & (l >> 32));  
        b[4] = (byte)  (0xff & (l >> 24));  
        b[5] = (byte)  (0xff & (l >> 16));  
        b[6] = (byte)  (0xff & (l >> 8));  
        b[7] = (byte)  (0xff & l);  
        return b;  
	}
	
	/**
	 * 全字节转换
	 * @参数：@param cb
	 * @参数：@return
	 * @返回值：Integer
	 */
	public static Integer convertBytes(byte[] cb) {
		StringBuffer toInt = new StringBuffer();
		for(int i = 0 ; i < cb.length ; i++){
			toInt.append(Integer.valueOf(cb[i]));
		}
		return Integer.valueOf(toInt.toString());
	}
	
	/**
	 * 10 进制转换16进制  返回16进制串
	 * @参数： @param cb
	 * @参数： @param index
	 * @参数： @param length
	 * @参数： @return   
	 * @返回值： String  
	 * @throws
	 */
	public static String convert10216(byte[] cb,int index,int length) {
		StringBuffer toInt = new StringBuffer();
		int end = index + length;
		String str = "";
		for(int i = index ; i < end ; i++){
			str = Integer.toHexString(cb[i]);
			if(str.length() > 2){
				toInt.append(str.substring(6, str.length()));
			}else{
				toInt.append(str);
			}
		}
		return toInt.toString();
	}
	
	public static String[] convert10216Arr(byte[] cb,int index,int length) {
		StringBuffer toInt = new StringBuffer();
		String [] strArr = new String[length];
		int end = index + length;
		String str = "";
		for(int i = index ; i < end ; i++){
			str = Integer.toHexString(cb[i]);
			if(str.length() > 2){
				strArr[i]=str.substring(6, str.length());
			}else{
				strArr[i]=str;
			}
		}
		return strArr;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		byte[] src = new byte[]{0x44,0x43,0x03,0,0,0x10,(byte) 0x90,0x00,0x00};
		int offset = 3;
		 int value;    
		    value = (int) ((src[offset] & 0xFF<<24)   
		            | ((src[offset+1] & 0xFF)<<16)   
		            | ((src[offset+2] & 0xFF)<<8)   
		            | ((src[offset+3] & 0xFF)));  
		    System.out.println(value);
		
	}
	
	public static int bytesToInt2(byte[] src, int offset) {  
	    int value;    
	    value = (int) ( ((src[offset] & 0xFF)<<24)  
	            |((src[offset+1] & 0xFF)<<16)  
	            |((src[offset+2] & 0xFF)<<8)  
	            |(src[offset+3] & 0xFF));  
	    return value;  
	}
	

	private static String hexString = "0123456789ABCDEF";
	private final static byte[] hex = "0123456789ABCDEF".getBytes();  
	/**
	 * 将字符串编码成16进制数字,适用于所有字符（包括中文）
	 * @参数：@param str
	 * @参数：@return
	 * @返回值：String
	 */
	public static String encodeHex(String str) {
		// 根据默认编码获取字节数组
		byte[] bytes = str.getBytes();
		StringBuilder sb = new StringBuilder(bytes.length * 2);
		// 将字节数组中每个字节拆解成2位16进制整数
		for (int i = 0; i < bytes.length; i++) {
			sb.append(hexString.charAt((bytes[i] & 0xf0) >> 4));
			sb.append(hexString.charAt((bytes[i] & 0x0f) >> 0));
		}
		return sb.toString();
	}
	
	/**
	 * 从十六进制字符串到字节数组转换  
	 * @参数：@param hexstr
	 * @参数：@return
	 * @返回值：byte[]
	 */
	public static byte[] HexString2Bytes(String hexstr) {
		byte[] b = new byte[hexstr.length() / 2];  
	    int j = 0;  
	    for (int i = 0; i < b.length; i++) {  
	        char c0 = hexstr.charAt(j++);  
	        char c1 = hexstr.charAt(j++);  
	        b[i] = (byte) ((parse(c0) << 4) | parse(c1));  
	    }  
	    return b;  
	}
	
	/**
	 * 从字节数组到十六进制字符串转换
	 * @参数：@param b
	 * @参数：@return
	 * @返回值：String
	 */
	public static String Bytes2HexString(byte[] b) {  
	    byte[] buff = new byte[2 * b.length];  
	    for (int i = 0; i < b.length; i++) {  
	        buff[2 * i] = hex[(b[i] >> 4) & 0x0f];  
	        buff[2 * i + 1] = hex[b[i] & 0x0f];  
	    }  
	    return new String(buff);  
	}  
	
	/**
	 * 将16进制数字解码成字符串,适用于所有字符（包括中文）
	 * @参数：@param bytes
	 * @参数：@return
	 * @返回值：String
	 */
	public static String decodeHex(String bytes) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream(
				bytes.length() / 2);
		// 将每2位16进制整数组装成一个字节
		for (int i = 0; i < bytes.length(); i += 2)
			baos.write((hexString.indexOf(bytes.charAt(i)) << 4 | hexString
					.indexOf(bytes.charAt(i + 1))));
		return new String(baos.toByteArray());
	}

	private static int parse(char c) {  
        if (c >= 'a')  
         return (c - 'a' + 10) & 0x0f;  
        if (c >= 'A')  
         return (c - 'A' + 10) & 0x0f;  
        return (c - '0') & 0x0f;  
    }  

	/**
	 * 合并两个数组
	 * @param byte_1
	 * @param byte_2
	 * @return
	 * @author wujiaxu
	 * @Time 2017-7-4 下午12:07:21
	 */
	public static byte[] byteMerger(byte[] byte_1, byte[] byte_2){  
        byte[] byte_3 = new byte[byte_1.length+byte_2.length];  
        System.arraycopy(byte_1, 0, byte_3, 0, byte_1.length);  
        System.arraycopy(byte_2, 0, byte_3, byte_1.length, byte_2.length);  
        return byte_3;  
    }
}
