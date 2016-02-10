var init = function(){
	if(!('turtlepage' in window)){ return window.setTimeout(init, 100);}

	var appNode = document.querySelector("#app");
	var temp = document.createElement('div');
	temp.innerHTML = turtlepage.start({}, null, {lang: BlocklyApps.LANG, langSrc: BlocklyApps.languagePack()});
	while (temp.childNodes.length > 0) {
			appNode.appendChild(temp.childNodes[0]);
	}

	Turtle.init();
	updateL10n();
	var app  = new MirobotApp(function(mirobot){
		Turtle.setMirobot(mirobot);
	}, {
  	l10n: true,
  	languages: ['en', 'ar', 'ca', 'cs', 'da', 'de', 'el', 'es', 'fa', 'fr', 'hi', 'hrx',
     'hu', 'is', 'it', 'ko', 'ms', 'nl', 'pl', 'pt-br', 'ro', 'ru', 'sv', 'tr',
     'uk', 'vi', 'zh-hans', 'zh-hant']
	});
	app.initPersistence({
		saveHandler: function(){ return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace())); },
		loadHandler: function(prog){
			return Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), Blockly.Xml.textToDom(prog));
		},
		clearHandler: function(){ return Blockly.getMainWorkspace().clear(); }
	});
}

window.addEventListener('load', init);
