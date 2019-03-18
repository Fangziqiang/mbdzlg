<script type="text/javascript">
 	function keyDownFireEvent(){
 		if(window.event.keyCode=="13"){
 			this.form.submit();
 		}
 	}
</script>
<table width="100%"  border="0" cellspacing="0" cellpadding="0" class="makepage_table">
	<tr>
		<td class="makepage_td" nowrap="nowrap" align="center" >
		<div class="m-page">
				<div class="inner clearfix">
			<%
				int totalcount = ((Integer) request.getAttribute("total")).intValue();
				int pagesize = ((Integer) request.getAttribute("pagesize")).intValue();
				Object obj = request.getAttribute("saveaction");
				String saveaction = "";
				if (obj != null) {
					saveaction = (String) request.getAttribute("saveaction");
				}
			%>
			<page:pager total="<%=totalcount%>" defaultPageSize="<%=pagesize%>" saveaction="<%=saveaction%>">
				<page:navigator type="TEXT" />
			</page:pager>
			</div></div>
		</td>
	</tr>
</table>