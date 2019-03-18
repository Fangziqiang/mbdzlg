var tabPane;
	document.addEvent('domready', function addEvent() {
		  tabPane = new TabPane('demo', {}, function() {
			var showTab = window.location.hash.match(/tab=(\d+)/);			
			return showTab ? showTab[1] : 0;
		});	
		$('demo').addEvent('click:relay(.remove)', function(e) {
			// stop the event from bubbling up and causing a native click
			e.stop();
			var parent = this.getParent('.tab');
			// close the tab (closeTab takes care of selecting an adjacent tab) 
			tabPane.close(parent);
		});
	});
	function _add(title,tabid,url){
		 
		if (!title || !url) {
			window.alert('Title or content text empty, please fill in some text.');
			return;
		}
		var t = getTitleLength(title);
		title = new Element('li', {'class': 'tab',id:tabid,text: t}).setStyle('cursor', 'default').adopt(new Element('span', {'class': 'remove', html:'&times;'}).setStyle('cursor', 'pointer'));	
		content = new Element('p', {'class': 'content'}).setStyle('display', 'none').setStyle('height','96%').adopt(new Element('iframe', {'id':'saveSingle', 'width':'100%', 'height':'100%','frameborder':'0','src':url}));	 
		tabPane.add(title, content);		 
	}
	function getTitleLength(title){
		if(title.length>6){
			title = title.substr(0,5)+"...";			
		}
		return title;
	 }
	//判断当前浏览器是否为Mozilla/Gecko，如果是DIV 的高度为100%，否则为95%。
	 
	