	//��������Ϣ���ֵĹ��ܺ���
	function pageTitle(title, navigation){
		document.write("	<table width='100%' border='0' cellspacing='0' cellpadding='0' class='title'>");
		document.write("	    <colgroup style='width:100%'>");
		document.write("		<tr>");
		document.write("		    <td>");
		document.write("		        <a href='javascript:void(0);'>" + title + " </a> > <a href='javascript:void(0);'>" + navigation + "</a>");
		document.write("	  		</td>");
		document.write("	  	</tr>");
		document.write("	</table>");
	}
	// �˺�����һ������ΪҪ��ת����ҳǩ�ı��,�ڶ�������Ϊ��ҵ�ڵ�ҳǩ����
	function ShowTag(sid, totalid) {
		for (i = 1; i < totalid + 1; i++) {
			eval("Tag" + i + ".style.display=\"none\";");
			eval("td" + i + ".className='tab_off';");
		}
		eval("Tag" + sid + ".style.display=\"\";");
		eval("td" + sid + ".className='tab_on'");
	}
	// ����鿴��ťʱ�򿪵���ҳ
	function do_open(url, title){
		var win = window.open(url, title, "height="+screen.height+",width="+screen.width+",top=0,left=0,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
		win.focus(); 
	}
    // ����������
    function addRow(tablename,valuefields,hiddenfields) {
    	var objTable = document.getElementById(tablename);
		var objRow = objTable.insertRow();  // ������
		// objRow.bgColor=getRowColor("default",objRow.rowIndex);
		objRow.className = "list_table_rows_tr";
		
		// ���Ӹ���
		for(var i=0;i<valuefields.length && i<hiddenfields.length;i++){
			var objCell = objRow.insertCell();
			objCell.innerHTML = getText(valuefields[i])+getHidden(valuefields[i],hiddenfields[i]);
		}
		
		// Ϊ���������ṩ�¼���֧��
		// objRow.onmouseover = MouseOver;
		// objRow.onmouseout = MouseOut;
		// objRow.onclick = SelectRow;
		return objRow;
    }
    // �����ֶε�disabled����,flag��ֵΪtrue��false
	function setFieldsDisabled(fields, flag){
		for(var i=0;i<fields.length;i++){
			document.getElementById(fields[i]).disabled = flag;
		}
	}
	
	// ѡ��ָ����
	function SelectRow(){
        var objTR = window.event.srcElement; 
		if(objTR.tagName == "TD")
			objTR = objTR.parentElement;
		if(objTR.tagName != "TR") return;
		
		var objTable = objTR.parentElement;
		if(objTable.tagName != "TABLE")
			objTable = objTable.parentElement;
        var isel = objTable.getAttribute("selectedrow");
        // objTable.rows[isel].bgColor = getRowColor("default",isel);
        objTable.rows[isel].className = "Pop_TR";
        // Add on 2008-08-12 By Zong,��ǹ�䱸��λ�޸�-���ż�������λ.Ϊ��ֹ��Ϣ�б��������ʽ�������еĵ����¼����ı�
        objTable.rows[0].className = "td_a";
        // objTR.bgColor=getRowColor("selected",0);
        objTable.setAttribute("selectedrow", objTR.rowIndex);
        objTR.className = "Pop_TR1";
    }
    // ����Ƴ�
    function MouseOut(){
        var objTR = window.event.srcElement; 
		if(objTR.tagName == "TD")
			objTR = objTR.parentElement;
		var objTable = objTR.parentElement;
		if(objTable.tagName != "TABLE")
			objTable = objTable.parentElement;        
        
        var isel = objTable.getAttribute("selectedrow");
        
        if(objTR.rowIndex!=isel) {
            objTR.bgColor = getRowColor("default",objTR.rowIndex);
        } else {
            objTR.bgColor=getRowColor("selected",0);
        }
        
    }
    // �������
    function MouseOver(){
        var objTR = window.event.srcElement;
		if(objTR.tagName == "TD")
			objTR = objTR.parentElement;
		
        objTR.bgColor=getRowColor("over",0);
    }
	// ��ȡ����е���ɫ
	function getRowColor(type, rowindex) {
		if (type == "selected") {
			return "#00ccff";
		}
		if (type == "over") {
			return "#f0f0f0";
		}
		if (rowindex % 2 == 0) {
			return "#ffffff";
		} else {
			return "#eeeeff";
		}
	}
    // ����������Ŀǰδʹ��
    function addHidden(hname, hvalue){
    	var hid = document.createElement("input");
    	hid.setAttribute("type","hidden");
    	hid.setAttribute("value",hvalue);
    	hid.setAttribute("name",hname);
    	hid.setAttribute("id",hname);
    	
    	return hid;
    }
    // ��ȡ����ı���Ŀǰֻ����������������
    function getText(field){
    	var obj = document.getElementById(field);
 
    	if(obj == null)
    		return "";
    	if(obj.length>=0) {
    		if(obj.selectedIndex>=0)
    			return obj.options[obj.selectedIndex].text;
    		else{
    			return "";
    		}
		}
		if(obj.type=="checkbox" || obj.type=="radio"){	
			var fs = document.getElementsByName(field);
			for(var i=0;i<fs.length;i++)
				if(fs[i].checked) return fs[i].value;
		}else
    		return obj.value;
    }
    // ��ȡ���ֵ
    function getValue(field){
// alert(field);
    	var obj = document.getElementById(field);
    	if(obj == null)
    		return "";

    	if(obj.type=="checkbox" || obj.type=="radio"){	
			var fs = document.getElementsByName(field);
			for(var i=0;i<fs.length;i++)
				if(fs[i].checked) return fs[i].value;
		}else
    		return obj.value;
    	
    }
    // ��ȡ������HTML�ı�
    function getHidden(valuefield,hiddenfield){
    	return "<input type=\"hidden\" name=\"" + hiddenfield + "\" value=\""+getValue(valuefield)+"\">";
    }
    // ���������У����¼��б�
    function addRowEvent(tablename,valuefields,hiddenfields, events){
    	var objTable = document.getElementById(tablename);
		var objRow = objTable.insertRow();  // ������
		objRow.bgColor=getRowColor("default",objRow.rowIndex);
		
		// ���Ӹ���
		for(var i=0;i<valuefields.length && i<hiddenfields.length;i++){
			var objCell = objRow.insertCell();
			objCell.innerHTML = getText(valuefields[i])+getHidden(valuefields[i],hiddenfields[i]);
			objCell.className="Pop_Text";
		}
		
		// Ϊ���������ṩ�¼���֧��
		// Ĭ���¼�֧��
		objRow.onmouseover = MouseOver;
		objRow.onmouseout = MouseOut;
		objRow.onclick = SelectRow;
		// �����¼�֧��
		for (key in events) {
			objRow.setAttribute(key, events[key]);
		}
		
		return objRow;
    }
    
    // ��ɾ����
    function deleteRow(tablename){
    	objTable = document.getElementById(tablename);
    	var isel = objTable.getAttribute("selectedrow");
    	if(isel<1) {
    		alert("��ѡ��Ҫɾ������Ϣ��");
    		return false;
    	}
    	
    	if(!confirm("��ȷ��Ҫɾ��ѡ�е�������")) return false;
    	
    	objTable.deleteRow(isel);
    	objTable.setAttribute("selectedrow","0");
    	
    	var iupdate = objTable.getAttribute("updaterow");
    	if(iupdate==isel)
    		iupdate=0;
    	else if(iupdate>isel)
    		iupdate--;
    	objTable.setAttribute("updaterow",iupdate);
    	
    	return true;
    }
    
    // �������
    function updateRow(tablename, valuefields, hiddenfields){
    	objTable = document.getElementById(tablename);
    	iupdate = objTable.getAttribute("updaterow");
    	if(iupdate<1) {
    		alert("��û��ѡ��Ҫ�޸ĵ���Ϣ����˫��һ�н����޸ģ�");
    		return;
    	}
    	objTR = objTable.rows[iupdate];
    	// ������ֵ
    	for(var i=0;i<valuefields.length && i<hiddenfields.length;i++){
			// var objHidden =
			// document.getElementsByName(bmhiddenfields[i])[iupdate-1];
			var objCell = objTR.cells[i];
			// objHidden.value =
			// document.getElementById(bmvaluefields[i]).value;
			// objCell.innerText = getText(bmvaluefields[i]);
			// objCell.setText(getText(bmvaluefields[i]));
			objCell.innerHTML = getText(valuefields[i])+getHidden(valuefields[i],hiddenfields[i]);
		}
		return objTR;
    }

 	function RowDblClick(valuefields,hiddenfields){
    	var objTR = window.event.srcElement; 
		if(objTR.tagName == "TD")
			objTR = objTR.parentElement;
		var objTable = objTR.parentElement;
		if(objTable.tagName != "TABLE")
			objTable = objTable.parentElement;
			
		var isel = objTR.rowIndex;
		// ���ñ�������
		objTable.setAttribute("updaterow",isel);
		for(var i=0;i<valuefields.length && i<hiddenfields.length;i++){
			var objHidden = document.getElementsByName(hiddenfields[i])[isel-1];
			document.getElementById(valuefields[i]).value = objHidden.value;
		}
    }
 
    // �������б���field�л�ȡvalue��Ӧ���ı�
    function getTextByValue(field,value){
    	var obj = document.getElementById(field);
    	if(obj == null)
    		return "";
    	for(var i=0;i<obj.length;i++){
			if (obj[i].value == value){
				return obj[i].text;
			}
		}
		return obj.text;
    }

   	// ��ȡѡ���е�rowIndex,������ѡ���е���ʽ
	function selectRow(objTR) {
		var objTable = objTR.parentElement;
		if (selectrow>0) {
			objTable.rows[selectrow].className = "Pop_TR";
		}
		objTR.className = "Pop_TR1";
		selectrow = objTR.rowIndex;
	}

	function selectMultiRow(objTR) {
		var line1,line2;
		var objTable = objTR.parentElement;
		for(var i=0;i<objTable.rows.length;i++){
			objTable.rows[i].className = "Pop_TR";
		}
		objTR.className = "Pop_TR1";
       	if(event.shiftKey){
       		if(selectrow == 0){// ��סshiftѡ��ʱ,֮ǰ��Ҫѡ��һ��.
       			alert("����ѡ����ʼ�У�");
       			return 0;
       		}
       		if(selectrow!=objTR.rowIndex){
       			if((selectrow + "").indexOf(",")>0){// �����һ��Ҳ�ǰ�סshiftѡ������,��selectrow��ֵ��ʽΪ[ling1,line2].����ȡline1
       				selectrow = selectrow.split(",")[0];
       			}
	       		if(selectrow<objTR.rowIndex){
	       			line1 = selectrow;
	       			line2 = objTR.rowIndex;
	       		}else if(selectrow>objTR.rowIndex){
	       			line1 = objTR.rowIndex;
	       			line2 = selectrow;
	       		}
				for(var i=line1;i<line2;i++){
					objTable.rows[i].className = "Pop_TR1";
				}
	       		selectrow = line1 + "," + line2;
       		}
       	}else{
			selectrow = objTR.rowIndex;
		}
		objTable.rows[0].className = "td_a";
	}
		

	/**
	 * ��ѡ���ȫѡ��ȫ��ȡ�� all:ȫѡ������ alone:���������� Add on 2008-05-30
	 */
	function selectAll(all, alone){
		var alone_ = document.getElementsByName(alone);
		if (document.getElementById(all).checked == true){
			for(var i=0;i<alone_.length;i++){
				if(!alone_[i].disabled){
					alone_[i].checked = true;
				}
			}
		}else{
			for(var i=0;i<alone_.length;i++){
				if(!alone_[i].disabled){
					alone_[i].checked = false;
				}
			}
		}
	}
	
	// ������ҳ��ӡ��ҳüҳ��Ϊ��
	function pagesetup_null(){
	 	var hkey_root,hkey_path,hkey_key;
	 	var hkey_root="HKEY_CURRENT_USER";
	 	var hkey_path="\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
	 	try{
			var RegWsh = new ActiveXObject("WScript.Shell");
			hkey_key="header";
			RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
			hkey_key="footer";
			RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
	 	}catch(e){}
	}
	
	function setFrameHeight(frame, len){
		if(parseInt(len) < 5){
			document.getElementById(frame).height = (parseInt(len) * 70) ;
		}else{
			document.getElementById(frame).height = (parseInt(len) * 30) ;
		}
	}
	// ����������
    function addRowWithDelete(tablename,valuefields,hiddenfields) {
    	var objTable = document.getElementById(tablename);
		var objRow = objTable.insertRow();  // ������
		
		// ���Ӹ���
		for(var i=0;i<valuefields.length && i<hiddenfields.length;i++){
			var objCell = objRow.insertCell();
			objCell.innerHTML = getText(valuefields[i])+getHidden(valuefields[i],hiddenfields[i]);
// alert(objCell.innerHTML);
		}
		
		// ���ɾ����ť
		var objCell = objRow.insertCell();
    	objCell.innerHTML = "<img src=\"../images/er/shanchu1.gif\" alt=\"ɾ��\" onmousemove=\"this.src='../images/er/shanchu2.gif'\" onmouseout=\"this.src='../images/er/shanchu1.gif'\" onclick=del(this) style='cursor:hand' border='0'>";
    	// alert(objCell.innerHTML);
		return objRow;
    }
	
	// ���ɾ����ť
	function addDeleteRow(objRow,tablename){
    	var objCell = objRow.insertCell();
    	objCell.innerHTML = "<img src=\"../images/er/shanchu1.gif\" alt=\"ɾ��\" onmousemove=\"this.src='../images/er/shanchu2.gif'\" onmouseout=\"this.src='../images/er/shanchu1.gif'\" onclick=del(this) style='cursor:hand' border='0'>";
    }
	
	// ��̬�������������
    function getHiddenfields(i,object,hiddenfields){
    	var newHiddenfields = new Array(); 
    	for(var j=0;j<hiddenfields.length;j++){
    		newHiddenfields[j] = object+"["+i+"]."+hiddenfields[j];
    		// alert(newHiddenfields[j]);
    	}
    	return newHiddenfields;
    }
	    
    // ɾ����
    function del(obj){
    	var rowObj = obj.parentNode.parentNode;
   		if(!confirm("��ȷ��Ҫɾ��ѡ�е�������")) return false;
   		rowObj.parentNode.deleteRow(rowObj.rowIndex);
   	} 
    
    /**
	 * ����һ�У�����������ɾ����ť
	 * 
	 * @param tablename
	 *            html table����
	 * @param showfields
	 *            ��ʾ���б��ϵ���
	 * @param hiddenfields
	 *            ������
	 * @param hiddenvaluefields
	 *            �������ֵ
	 * @returns
	 */
    function addRowHiddenDelete(tablename,showfields,hiddenfields,hiddenvaluefields) {
    	var objTable = document.getElementById(tablename);
		var objRow = objTable.insertRow();  // ������
		
		// ���Ӹ���
		for(var i=0;i<showfields.length && i<hiddenfields.length;i++){
			var objCell = objRow.insertCell();
			objCell.innerHTML = getText(showfields[i])+getHidden(hiddenvaluefields[i],hiddenfields[i]);
// alert(getHidden(hiddenfields[i],hiddenvaluefields[i]));
			// alert(objCell.innerHTML);
		}
		
		// ���ɾ����ť
		var objCell = objRow.insertCell();
    	objCell.innerHTML = "<img src=\"../images/er/shanchu1.gif\" alt=\"ɾ��\" onmousemove=\"this.src='../images/er/shanchu2.gif'\" onmouseout=\"this.src='../images/er/shanchu1.gif'\" onclick=del(this) style='cursor:hand' border='0'>";
    	// alert(objCell.innerHTML);
		return objRow;
    }

    // ����������
    function addRow_s2(tablename,objList,valuefields,hiddenfields) {
    	
    	var objTable = document.getElementById(tablename);
		var objRow = objTable.insertRow();  // ������
		var i=0, currentRow = objTable.rows.length;
		var hiddenvaluse = "";
		objRow.className = "list_table_rows_tr";
		
		// ���Ӹ���
		for(;i<valuefields.length && i<hiddenfields.length;i++){
			var objCell = objRow.insertCell();
			// objCell.innerHTML =
			// getText(valuefields[i])+getHidden(valuefields[i],hiddenfields[i]);
			objCell.innerHTML = getText(valuefields[i]) + ("<input type=\"hidden\" name=\"" + objList+ "[" + currentRow + "]." + hiddenfields[i] + "\" value=\"" + getValue(hiddenfields[i]) + "\">");
		}
		
		for(;i<hiddenfields.length;i++){
			hiddenvaluse += "<input type=\"hidden\" name=\"" + objList+ "[" + currentRow + "]." + hiddenfields[i] + "\" value=\"" + getValue(hiddenfields[i]) + "\">";
		}
		var objCell = objRow.insertCell();
    	objCell.innerHTML = "<img src=\"../images/er/shanchu1.gif\" alt=\"ɾ��\" onmousemove=\"this.src='../images/er/shanchu2.gif'\" onmouseout=\"this.src='../images/er/shanchu1.gif'\" onclick=del(this) style='cursor:hand' border='0'>" + hiddenvaluse;
    	return objRow;
    }
    //����ʱ����ҳ�沼�� create by huangbotao date:2012/07/04
    function loadInit(){
    	if(screen.width>=1280&&screen.height>=720){
    		$("#tbody").addClass("tbody2");
			$.each($("td[colspan=3]"), function(n, value) {
				$("td[colspan=3]").eq(n).children().eq(0).addClass("colspan2");
			});
		}
		else{
			$("#tbody").addClass("tbody");
			$.each($("td[colspan=3]"), function(n, value) {	
				$("td[colspan=3]").eq(n).children().eq(0).addClass("colspan");
			});
		}				
    }