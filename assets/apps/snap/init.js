var mirobot;
var world;

var app  = new MirobotApp(function(m){
	mirobot = m;
	m.version(function(status, msg){
		if(Number(msg.msg) < 20150201 && !localStorage['_warning_done_']){
			localStorage['_warning_done_'] = true;
			alert("You'll need to update your Arduino firmware to use the addon blocks (bump and line following) in this app, but the other blocks should still work fine.");
		}
	});
}, {
  l10n: true,
  languages: ['en', 'bn', 'ca', 'cs', 'de', 'dk', 'el', 'eo', 'es', 'fi', 'fr', 'it', 'ja_HIRA', 'ja', 'kn', 'ko', 'nl', 'no', 'pl', 'pt_BR', 'pt', 'ru', 'si', 'sv', 'tw', 'zh']
});

window.onload = function () {
	IDE_Morph.prototype.reactToWorldResize = function (rect) {
		if (this.isAutoFill) {
			rect.origin.y = document.getElementById('header').getBoundingClientRect().height;
			this.setPosition(rect.origin);
			this.setExtent(rect.extent());
		}
		if (this.filePicker) {
			document.body.removeChild(this.filePicker);
			this.filePicker = null;
		}
	};
	
	world = new WorldMorph(document.getElementById('world'));
	
	world.worldCanvas.focus();
	var IDE = new IDE_Morph(false);
	IDE.openIn(world);
	IDE.setLanguage(String.locale);

	app.initPersistence({
		saveHandler: function(name){
			IDE.setProjectName(name);
			return IDE.serializer.serialize(IDE.stage);
		},
		loadHandler: function(prog){ return IDE.rawOpenProjectString(prog); },
		clearHandler: function(){ return IDE.newProject(); }
	});

	setInterval(loop, 1);
};
function loop() {
	world.doOneCycle();
}
