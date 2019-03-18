package com.jadlsoft.utils;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
/**
 * 3DES加密解密工具类   --网络服务平台电子雷管
 * @author niutongda
 *
 */
public class SecretUtils {  
	
	public static final String ALGORITHM = "DESede";
	private final static byte[] KEY = "abcdefgh12345678ABCDEFGH".getBytes();
	
	private static Cipher TripleDES_cp;
	
	private static Cipher TripleDES_cp_decode;
	static {
		
		 SecretKey deskey = new SecretKeySpec(KEY, ALGORITHM); 
		try {
			TripleDES_cp = Cipher.getInstance("DESede/ECB/PKCS5Padding");
			TripleDES_cp.init(Cipher.ENCRYPT_MODE, deskey);
			TripleDES_cp_decode = Cipher.getInstance("DESede/ECB/PKCS5Padding");
			TripleDES_cp_decode.init(Cipher.DECRYPT_MODE, deskey);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			e.printStackTrace();
		} catch (InvalidKeyException e) {
			e.printStackTrace();
		}
	}
   /** 
    * ECB加密
    * @param data 明文 
    */  
   public synchronized static byte[] des3EncodeECB( byte[] data)  
           throws Exception {  
       byte[] bOut = TripleDES_cp.doFinal(data);  
       return bOut;  
   }  
   /** 
    * ECB解密 
    * @return 明文 
    */  
   public synchronized static byte[] des3DecodeECB( byte[] data)  
           throws Exception {  
       byte[] bOut = TripleDES_cp_decode.doFinal(data);  
       return bOut;  
   }  
   
   
   
	
	
 
}