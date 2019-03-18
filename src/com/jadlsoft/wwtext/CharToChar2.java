package com.jadlsoft.wwtext;
import java.util.ArrayList;
import java.util.List;

//交叉合并字符串代码
public class CharToChar2 {
    public static void main(String[] args) {
	          String a[] ={"a","b","c","d","e","f","g"};
	          String b[] ={"1","2","3","4","5"};
	          CombineTwoArray(a, b);
	          System.out.println(CombineTwoArray(a, b));
	     }
	 
	     public static List<String> CombineTwoArray(String[] first, String[] second) {
	         List<String> outlist = new ArrayList<String>();
	         int index = 0;
	         while (index < first.length && index < second.length) {
	             outlist.add(first[index]);
	             outlist.add(second[index]);
	             ++index;
	         }
	         if (index >= first.length) {
	             for (int i = index; i < second.length; i++) {
	                 outlist.add(second[i]);
	             }
	         } else {
	             for (int i = index; i < first.length; i++) {
	                 outlist.add(first[i]);
	             }
	         }
	         return outlist;
	     }
}
