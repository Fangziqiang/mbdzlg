/*
˴������
Made by PuterJam
*/
//--��ʼ������--
var rT=true;//����ͼ�����
var bT=true;//����ͼ���뵭��
var tw=350;//��ʾ�����
var endaction=false;//��������

var ns4 = document.layers;
var ns6 = document.getElementById && !document.all;
var ie4 = document.all;
offsetX = 0;
offsetY = 200;
var toolTipSTYLE="";
function initToolTips()
{
  if(ns4||ns6||ie4)
  {
    if(ns4) toolTipSTYLE = document.toolTipLayer;
    else if(ns6) toolTipSTYLE = document.getElementById("toolTipLayer").style;
    else if(ie4) toolTipSTYLE = document.all.toolTipLayer.style;
    if(ns4) document.captureEvents(Event.MOUSEMOVE);
    else
    {
      toolTipSTYLE.visibility = "visible";
      toolTipSTYLE.display = "none";
    }
    document.onmousemove = moveToMouseLoc;
  }
}
function toolTip(msg, fg, bg)
{
  if(toolTip.arguments.length < 1) // hide
  {
    if(ns4) 
    {
    toolTipSTYLE.visibility = "hidden";
    }
    else 
    {
      //--ͼ����ɣ���������--
      if (!endaction) {toolTipSTYLE.display = "none";}
      if (rT) document.all("msg1").filters[1].Apply();
      if (bT) document.all("msg1").filters[2].Apply();
      document.all("msg1").filters[0].opacity=0;
      if (rT) document.all("msg1").filters[1].Play();
      if (bT) document.all("msg1").filters[2].Play();
      if (rT){ 
      if (document.all("msg1").filters[1].status==1 || document.all("msg1").filters[1].status==0){  
      toolTipSTYLE.display = "none";}
      }
      if (bT){
      if (document.all("msg1").filters[2].status==1 || document.all("msg1").filters[2].status==0){  
      toolTipSTYLE.display = "none";}
      }
      if (!rT && !bT) toolTipSTYLE.display = "none";
      //----------------------
    }
  }
  else // show
  {
    if(!fg) fg = "#777777";
    if(!bg) bg = "#eeeeee";
    var content =
    '<table id="msg1" name="msg1" border="0" cellspacing="0" cellpadding="1" bgcolor="' + fg + '" class="trans_msg"><td>' +
    '<table border="0" cellspacing="0" cellpadding="3" bgcolor="' + bg + 
    '"><td width=' + tw + '><font face="Arial" color="' + fg +
    '" size="-2">' + msg +
    '&nbsp\;</font></td></table></td></table>';

    if(ns4)
    {
      toolTipSTYLE.document.write(content);
      toolTipSTYLE.document.close();
      toolTipSTYLE.visibility = "visible";
    }
    if(ns6)
    {
      document.getElementById("toolTipLayer").innerHTML = content;
      toolTipSTYLE.display='block'
    }
    if(ie4)
    {
      document.all("toolTipLayer").innerHTML=content;
      toolTipSTYLE.display='block'
      //--ͼ����ɣ����봦��--
      var cssopaction=document.all("msg1").filters[0].opacity
      document.all("msg1").filters[0].opacity=0;
      if (rT) document.all("msg1").filters[1].Apply();
      if (bT) document.all("msg1").filters[2].Apply();
      document.all("msg1").filters[0].opacity=cssopaction;
      if (rT) document.all("msg1").filters[1].Play();
      if (bT) document.all("msg1").filters[2].Play();
      //----------------------
    }
  }
}
function moveToMouseLoc(e)
{
  if(ns4||ns6)
  {
    x = e.pageX;
    y = e.pageY;
  }
  else
  {
    x = event.x + document.body.scrollLeft;
    y = event.y + document.body.scrollTop;
  }
  toolTipSTYLE.left = x + offsetX;
  toolTipSTYLE.top = y - offsetY;
  return true;
}
