var init = function(){
	var thisScript = document.querySelector("script[src='/assets/apps/blockly/init.js']");
	thisScript.insertAdjacentHTML("afterend", turtlepage.start({}, null,
		{lang: BlocklyApps.LANG,
		 langSrc: BlocklyApps.languagePack()}));
		 
	Turtle.init();
	var app  = new MirobotApp(function(mirobot){
		Turtle.setMirobot(mirobot);
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
