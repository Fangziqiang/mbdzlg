package com.jadlsoft.wwtext;
  
/**  
 * ʵ�������ַ������湦��  
 *   
 * @author qdh  
 *  
 */  
public class CharToChar {  
    public static void main(String[] args) {  
        String a = "ABCDE";  
        String b = "abcde";  
        System.out.println(toChar(a, b));  
        System.out.println("�ڶ��֣�" + merge(a, b));  
    }  
  
    public static String toChar(String a, String b) {  
        // ���ַ���ת��Ϊ�ַ����� 
        char[] aArray = a.toCharArray();  
        char[] bArray = b.toCharArray();  
  
        // ����һ���ַ�������  
        StringBuffer stringBuffer = new StringBuffer();  
  
        // ѭ���ַ����齫�����ַ������е�Ԫ�ؽ��н���λ��  
        for (int i = 0; i < aArray.length; i++) {  
            // ����һ���ַ�������ӵ��ַ�������  
            stringBuffer.append(aArray[i]);  
            // ���i<bArray.length��bArray��ӵ��ַ���������  
            if (i < bArray.length) {  
                stringBuffer.append(bArray[i]);  
            }  
        }  
        // ���ؽ����Ľ��  
        return stringBuffer.toString();  
    }  
  
    public static String merge(String a, String b) {  
        // �����յ��ַ���ת��Ϊ�ַ�����  
        char[] aChar = a.toCharArray();  
        char[] bChar = b.toCharArray();  
          
        //����һ������  
        int mClength = aChar.length * 2;  
        //����һ���ַ����鲢��һ������  
        char[] mixChar = new char[mClength];  
        for (int i = 0; i < aChar.length; i++) {  
            //���ַ�����aChar�е�Ԫ�ظ�����µ��ַ�����  
            mixChar[i * 2] = aChar[i];  
            //���ַ�����bChar�е�Ԫ�ظ�����µ��ַ������еĵڶ���λ��  
            mixChar[i * 2 + 1] = bChar[i];  
        }  
        return String.valueOf(mixChar);  
  
    }  
}  