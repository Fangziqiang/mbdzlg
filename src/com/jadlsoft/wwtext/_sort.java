package com.jadlsoft.wwtext;
import java.util.Arrays;
public class _sort {

    /**
     * @param args
     */
        public static void main(String[] args){   
                int[] a={5,4,2,4,9,1};   
                Arrays.sort(a);  //��������   
// ������ð�ŵ�forѭ������foreachѭ����foreach�����java5��������֮һ���ڱ������顢���Ϸ��棬foreachΪ������Ա�ṩ�˼���ķ��㡣
                for(int i: a){   
                        System.out.print(i);   
               }  
        }  
      //ð�������㷨
        public static int[] bubbleSort(int[] args){   
            for(int i=0;i<args.length-1;i++){   
                   for(int j=i+1;j<args.length;j++){   
                       if (args[i]>args[j]){   
                           int temp=args[i];   
                           args[i]=args[j];   
                           args[j]=temp;   
                           }   
                }  
           }  
           return args;  
    } 
        
      //ѡ�������㷨
        public static int[] selectSort(int[] args){   
            for (int i=0;i<args.length-1 ;i++ ){   
                   int min=i;   
                   for (int j=i+1;j<args.length ;j++ ){   
                         if (args[min]>args[j]){   
                              min=j;   
                              }   
                     }   
                         if (min!=i){  
                         int temp=args[i];  
                         args[i]=args[min];  
                         args[min]=temp;          
                     }  
               }  
                return args;  
       } 
        public static int[] insertSort(int[] args){//���������㷨   
            for(int i=1;i<args.length;i++){   
                    for(int j=i;j>0;j--){   
                            if (args[j]<args[j-1]){   
                                    int temp=args[j-1];  
                                    args[j-1]=args[j];  
                                   args[j]=temp;          
                           }else break;   
                   }  
            }  
            return args;  
    }  

}
