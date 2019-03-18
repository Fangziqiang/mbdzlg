/* 
 * �ж��Ƿ�Ϊ�ؼ��������� 
 * xzqh:6λ
 */
function isXianjiXzqh(xzqh){
	return (xzqh.substring(4,6) != "00") || isShengZxx(xzqh);
}

/* �ж��Ƿ�Ϊ�м�����������ֱϽ�м���Ϊ�м�Ҳ��ʡ�� */
function isShijiXzqh(xzqh){
	if(isZxs(xzqh)){
		//modify by zhaohuibin 2013-01-08 ȥ��xxxx00��ʽ������������ֱϽ��xx0000Ϊʡ����м���xxxxxxΪ���л����ؼ���û��xxxx00
		return (xzqh.substring(2,6) == "0000") || (xzqh.substring(4,6) != "00") || isShengZxx(xzqh);
	}else{
		return (xzqh.substring(4,6) == "00" && xzqh.substring(2,4) != "00");
	}
}

/* �ж��Ƿ�Ϊʡ���������� */
function isShengjiXzqh(xzqh){
	return (xzqh.substring(2,6) == "0000");
}

/* �Ƿ�ΪֱϽ�� 
 * modify by zhaohuibin 2013-01-08 ֱϽ�е��ж��޸�Ϊֻ�ж�ǰ��λ
 */
function isZxs(xzqh){
	return (xzqh.substring(0,2) == "11") || (xzqh.substring(0,2) == "12") || (xzqh.substring(0,2) == "31") || (xzqh.substring(0,2) == "50") || isShengZxx(xzqh);
}

/**
 * @���ܣ��ж��Ƿ�Ϊ������Ϻ�
 * @������
 * @param xzqh
 * @return
 * @����ֵ��boolean
 * create by zhaohuibin 2013-4-10 ����09:14:50
 */
function isChongqingOrShanghai(xzqh){
	return "31" == xzqh.substring(0,2) || "50" == xzqh.substring(0,2);
}

/**
 * @���ܣ��ж��Ƿ�ΪʡֱϽ��
 * @������
 * @param xzqh
 * @return
 * @����ֵ��boolean
 * create by zhaohuibin 2013-7-18 ����05:07:31
 */
function isShengZxx(xzqh){
	return ("468200" == xzqh) || ("468300" == xzqh) || ("468400" == xzqh) || 
	("468500" == xzqh) || ("468600" == xzqh) || ("468700" == xzqh) || ("468800" == xzqh) || 
	("468900" == xzqh) || ("469100" == xzqh) || ("469200" == xzqh) || ("469300" == xzqh) || 
	("469400" == xzqh) || ("469500" == xzqh) || ("469600" == xzqh) || ("469700" == xzqh) || 
	("469800" == xzqh) || ("469900" == xzqh) || ("441900" == xzqh) || ("442000" == xzqh) || 
	("4290" == xzqh.substring(0, 4) && !"00" == xzqh.substring(4)) || ("420103" == xzqh) || 
	("410881" == xzqh) || ("130900" == xzqh);
}
/*
 * �ж��Ƿ�Ϊ��Ӫ���Ա�����ҵ��λ��������(�м���������)
 */
function isFyyxbpzydwXZQH(xzqh){
	if(isZxs(xzqh)){
		if(isChongqingOrShanghai(xzqh)){
			//������Ϻ�ֻ��ʡ����֤
			if(isShengjiXzqh(xzqh)){
				return true;
			}
		}
		//���������ֻ������һ����֤
		if(isXianjiXzqh(xzqh)){
			return true;
		}
		return false;
	}
	if(isShijiXzqh(xzqh)){
		return true;
	}
	return false;
}
/*
 * �ж��Ƿ�ΪӪ���Ա�����ҵ��λ��������(ʡ����������)
 */
function isYyxbpzydwXZQH(xzqh){
	if(isShengjiXzqh(xzqh)){
		return true;
	}
	return false;
}

/*
 * �ж���Ա���֤�Ƿ�Ϊ��һ����������
 */
function isRyxkzXZQH(xzqh){
	if(isZxs(xzqh)){
		if(isChongqingOrShanghai(xzqh)){
			//������Ϻ�ֻ��ʡ����֤
			if(isProvince(xzqh)){
				return true;
			}
		}
		//���������ֻ������һ����֤
		if(isXianjiXzqh(xzqh)){
			return true;
		}
		return false;
	}
	if(isShijiXzqh(xzqh)){
		return true;
	}
	return false;
}
/*�ж��Ƿ��Ǳ�������������
 *2013-07-18 �ų���
  */
function isBjs(xzqh){
	var bjs = xzqh;
	if(bjs=="110000"){
		return true;
	}
	return false;
}
/*add  by wangqing 2013-01-08
 *�ж��Ƿ�Ϊ������������
 **/
 function isBjXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "11";
 }
 
/*add  by wangqing 2013-01-08
 *�ж��Ƿ�Ϊ���������������
 **/
 function isTjXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "12";
 }
/*add  by wangqing 2013-01-08
 *�ж��Ƿ�Ϊ�Ϻ���������
 **/
 function isShXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "31";
 }
/*add  by wangqing 2013-01-08
 *�ж��Ƿ�Ϊ������������
 **/
 function isCqXzqh(xzqh){
 	return (xzqh.substring(0,2)) == "50";
 }