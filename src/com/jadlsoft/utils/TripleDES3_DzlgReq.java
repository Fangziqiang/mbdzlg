package com.jadlsoft.utils;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

/**
 * 3DES加密
 * 
 * @author 张方俊
 * 
 */
public class TripleDES3_DzlgReq {
	
	private static Cipher TripleDES_cp;
	
	static {
		try {
			TripleDES_cp = Cipher.getInstance("DESede");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			e.printStackTrace();
		}
	}
	
		
	private TripleDES3_DzlgReq() {}
	
	/**
	 * 密钥生成方法。如需要用其他的密钥生成方法，子类覆盖此方法即可。
	 * 注：密钥为24位字符串
	 * @return 密钥
	 */
	protected static String generateKey(){
		/*
		String year = ""+Calendar.getInstance().get(Calendar.YEAR);
		String month = ""+(Calendar.getInstance().get(Calendar.MONTH)+1);
		if(month.length() == 1){
			month = "0" + month;
		}
		String day = ""+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
		if(day.length() == 1){
			day = "0" + day;
		}
		//由当前的年月日生成密钥，规则为：MMYYDDYY YYDDMMYY MMYYDDYY,分开的YY按顺序代表年的前、后两位
		return (month + year.substring(0,2) + day + year.substring(2,4) + year.substring(0,2) + day + month + year.substring(2,4) + month + year.substring(0,2) + day + year.substring(2,4));
		*/
		
		//易普力混装车系统密钥
		//return "MBSCJYJKXTHZCMISMBSCJYJK";
		
        //工信监控系统密钥，视频监控配置加密密钥
		return "jadlsoftdzlgrequestabmyz";
		
        //工信监控系统密钥
//		return "123456781234567812345678";
	}
	
	/**
	 * 对指定的字符串加密
	 * @param waitforencode : 需要加密的字符串
	 * @return byte数组
	 */
	public static final byte[] encode(String waitforencode) {
		
		if (waitforencode == null || waitforencode.equals("")) {
			return null;
		}
				
		String ori_key = generateKey();

		byte[] tmp = new byte[24];
		
		tmp = ori_key.getBytes();
		
		SecretKey k = new SecretKeySpec(tmp, "DESede");

		try {			
			TripleDES_cp.init(Cipher.ENCRYPT_MODE, k);		
						
			byte[] waitforencode_bytes = waitforencode.getBytes("UTF-8");
			//byte[] waitforencode_bytes = waitforencode.getBytes();			
			
			byte[] encode_bytes = TripleDES_cp.doFinal(waitforencode_bytes);
			
			return encode_bytes;
			
		}  catch (InvalidKeyException e) {
			e.printStackTrace();
			return null;
		} catch (IllegalBlockSizeException e) {
			e.printStackTrace();
			return null;
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		} /**/catch (BadPaddingException e) {
			e.printStackTrace();
			return null;
		} 
	}
public static final byte[] encode(String pre, String crc, String use) {		
						
		String ori_key = generateKey();

		byte[] tmp = new byte[24];
		
		tmp = ori_key.getBytes();
		
		SecretKey k = new SecretKeySpec(tmp, "DESede");

		try {			
			TripleDES_cp.init(Cipher.ENCRYPT_MODE, k);		
						
			byte[] b1 = pre.getBytes();
			byte[] b2 = crc.getBytes("UTF-8");
			byte[] b3 = use.getBytes();
			byte[] b  = new byte[b1.length+b2.length+b3.length];
			int i = 0;
			for(;i<b1.length;i++){
				b[i] = b1[i];
			}
			for(;i<(b1.length+b2.length);i++){
				b[i] = b2[i-b1.length];
			}
			for(;i<(b1.length+b2.length+b3.length);i++){
				b[i] = b3[i-b1.length-b2.length];
			}	
			
			byte[] encode_bytes = TripleDES_cp.doFinal(b);
			
			return encode_bytes;
			
		}  catch (InvalidKeyException e) {
			e.printStackTrace();
			return null;
		} catch (IllegalBlockSizeException e) {
			e.printStackTrace();
			return null;
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		} /**/catch (BadPaddingException e) {
			e.printStackTrace();
			return null;
		} 
	}
	

	/**
	 * 对byte数组解密
	 * @param waitfordecode ：待解密的数组
	 * @return 解密过后的字符串
	 */
	public static final String decode(byte[] waitfordecode) {
		
		if (waitfordecode == null || waitfordecode.length == 0) {
			return null;
		}	
		
		
		byte[] tmp = new byte[24];
		String ori_key = generateKey();
		tmp = ori_key.getBytes();
		SecretKey k = new SecretKeySpec(tmp, "DESede");
		
		try {			
			TripleDES_cp.init(Cipher.DECRYPT_MODE, k);
			byte[] decode_bytes = TripleDES_cp.doFinal(waitfordecode);
			return new String(decode_bytes , "UTF-8");
		} catch (InvalidKeyException e) {
			e.printStackTrace();
			return null;
		} catch (IllegalBlockSizeException e) {
			e.printStackTrace();
			return null;
		} catch (BadPaddingException e) {
			e.printStackTrace();
			return null;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} 
	}
	public static void main(String[] args){
//		String str = "1234567812345678";		
//		File aa = new File("D:/gxbFtp/a16.txt");
//		//String d_str = decode(encode(str));
//		try {
//			OutputStream os = new FileOutputStream(aa);
//			os.write(encode(str), 0, encode(str).length);
//			// 关闭输出流
//			os.close();
//			System.out.println("已保存到WriteFile.txt!");
//		    } catch (IOException ioe) {
//			System.out.println(ioe);
//		    } catch (Exception e) {
//			System.out.println(e);
//		    }
//		    
		    
//		    InputStream is = null;
//		    InputStream is1 = null;
//			ByteArrayOutputStream out = new ByteArrayOutputStream();
//			ByteArrayOutputStream out1 = new ByteArrayOutputStream();
//
//			try {
//				is = new FileInputStream("D:/gxbFtp/a.txt");// pathStr 文件路径
//				byte[] b = new byte[1024];
//				int n;
//				while ((n = is.read(b)) != -1) {
//					out.write(b, 0, n);
//				}
//				is1 = new FileInputStream("D:/gxbFtp/a16.txt");// pathStr 文件路径
//				byte[] b1 = new byte[1024];
//				int n1;
//				while ((n1 = is1.read(b1)) != -1) {
//					out1.write(b1, 0, n1);
//				}
//			} catch (Exception e) {
//				e.printStackTrace();
//			} finally {
//				try {
//					is.close();
//				} catch (IOException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}
//
//			byte[] aaaa = out.toByteArray();
//			byte[] aaaa1 = out1.toByteArray();
//			//byte[] aaaa11 =byteMerger(aaaa,aaaa1);
//			byte[] ass = subBytes(aaaa1,0,16);
//			byte[] aaaa11 =byteMerger(aaaa,ass);
			String decodedString = TripleDES3_DzlgReq.decode("ADCB4F56E7C9324E".getBytes());
			System.out.println("---------------str = "+decodedString);
	}
	public static byte[] subBytes(byte[] src, int begin, int count) {
		byte[] bs = new byte[count];
		for (int i=begin; i<begin+count; i++) bs[i-begin] = src[i];
		return bs;
	}
	//java 合并两个byte数组
	public static byte[] byteMerger(byte[] byte_1, byte[] byte_2){
		byte[] byte_3 = new byte[byte_1.length+byte_2.length];
		System.arraycopy(byte_1, 0, byte_3, 0, byte_1.length);
		System.arraycopy(byte_2, 0, byte_3, byte_1.length, byte_2.length);
		return byte_3;
	}
}
