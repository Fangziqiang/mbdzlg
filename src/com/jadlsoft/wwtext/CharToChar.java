package com.jadlsoft.wwtext;
  
/**  
 * 实现两个字符串交叉功能  
 *   
 * @author qdh  
 *  
 */  
public class CharToChar {  
    public static void main(String[] args) {  
        String a = "ABCDE";  
        String b = "abcde";  
        System.out.println(toChar(a, b));  
        System.out.println("第二种：" + merge(a, b));  
    }  
  
    public static String toChar(String a, String b) {  
        // 将字符串转换为字符数组 
        char[] aArray = a.toCharArray();  
        char[] bArray = b.toCharArray();  
  
        // 定义一个字符缓冲流  
        StringBuffer stringBuffer = new StringBuffer();  
  
        // 循环字符数组将两个字符数组中的元素进行交换位置  
        for (int i = 0; i < aArray.length; i++) {  
            // 将第一个字符数组添加的字符缓冲区  
            stringBuffer.append(aArray[i]);  
            // 如果i<bArray.length将bArray添加到字符串缓冲区  
            if (i < bArray.length) {  
                stringBuffer.append(bArray[i]);  
            }  
        }  
        // 返回交叉后的结果  
        return stringBuffer.toString();  
    }  
  
    public static String merge(String a, String b) {  
        // 将接收的字符串转换为字符数组  
        char[] aChar = a.toCharArray();  
        char[] bChar = b.toCharArray();  
          
        //定义一个长度  
        int mClength = aChar.length * 2;  
        //定义一个字符数组并给一个长度  
        char[] mixChar = new char[mClength];  
        for (int i = 0; i < aChar.length; i++) {  
            //将字符数组aChar中的元素赋予给新的字符数组  
            mixChar[i * 2] = aChar[i];  
            //将字符数组bChar中的元素赋予给新的字符数组中的第二个位置  
            mixChar[i * 2 + 1] = bChar[i];  
        }  
        return String.valueOf(mixChar);  
  
    }  
}  