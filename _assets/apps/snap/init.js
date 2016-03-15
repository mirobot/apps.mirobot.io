

var app  = new MirobotApp({
  l10n: true,
  languages: ['en', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'it',
  'ja-hira', 'ja', 'kn', 'ko', 'nl', 'no', 'pl', 'pt-br', 'pt', 'ru', 'si', 'sv', 'zh'],
  simulation: true
});

var mirobot = app.mirobot;

mirobot.addEventListener('connectedStateChange', function(e){
  if(e.state === 'connected'){
    mirobot.version(function(status, msg){
      if(Number(msg.msg) < 20150201 && !localStorage['_warning_done_']){
        localStorage['_warning_done_'] = true;
        alert("You'll need to update your Arduino firmware to use the addon blocks (bump and line following) in this app, but the other blocks should still work fine.");
      }
    });
	}
});

window.addEventListener('DOMContentLoaded', function () {
  var world;

  var loop = function() {
    world.doOneCycle();
  }

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
	IDE.loadNewProject = false;
	IDE.userLanguage = String.locale;
	IDE.openIn(world);
	IDE.toggleStageSize(true);

	app.initPersistence({
		saveHandler: function(name){
			IDE.setProjectName(name);
			return IDE.serializer.serialize(IDE.stage);
		},
		loadHandler: function(prog){ return IDE.rawOpenProjectString(prog); },
		clearHandler: function(){ return IDE.newProject(); }
	});

	IDE.setLanguage(String.locale);

	setInterval(loop, 1);
});
