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
	("410881" == xzqh) || ("220381" == xzqh) || ("220581" == xzqh) || ("130181" == xzqh) ||
	("130682" == xzqh) || ("429004" == xzqh) ||	("429005" == xzqh) || ("429006" == xzqh) ||
	("429021" == xzqh) || ("429099" == xzqh) ||	("350128" == xzqh) || ("340826" == xzqh) ||
	("341822" == xzqh) || ("419900" == xzqh) ||	("220300" == xzqh) || ("220400" == xzqh) ||
	("220600" == xzqh) || ("139800" == xzqh) ||	("139900" == xzqh) || ("620200" == xzqh) ||
	("320500" == xzqh) || ("320600" == xzqh) ||	("320900" == xzqh) || ("321000" == xzqh) ||
	("321200" == xzqh) || ("321300" == xzqh) ||	("460100" == xzqh) || ("460200" == xzqh) ||
	("410181" == xzqh) || ("410225" == xzqh) ||	("410482" == xzqh) || ("410526" == xzqh) ||
	("410728" == xzqh) || ("411381" == xzqh) ||	("411481" == xzqh) || ("411525" == xzqh) ||
	("411628" == xzqh) || ("411729" == xzqh) || ("360482" == xzqh) || ("360781" == xzqh) ||
	("360981" == xzqh) || ("361128" == xzqh) || ("360829" == xzqh) || ("361021" == xzqh) ||
	("360100" == xzqh) || ("219800" == xzqh) ||	("379800" == xzqh) || ("379900" == xzqh) ||
	("130181" == xzqh) || ("130682" == xzqh) || ("231081" == xzqh) || ("230833" == xzqh);
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