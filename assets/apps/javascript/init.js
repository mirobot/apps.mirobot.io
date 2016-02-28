var editor = new Editor('editor', 'controlBar', 'javascript');

//var builder = new Builder($('#code'), undefined, true);
var app  = new MirobotApp({
  l10n: true,
  languages: baseLanguages,
  simulation: true
});

editor.setMirobot(app.mirobot);
editor.onRun(function(prog){
  "use strict"
  var mirobot = app.mirobot;
  eval(prog);
});

app.initPersistence({
  saveHandler: function(){ return editor.saveProgram(); },
  loadHandler: function(prog){ return editor.loadProgram(prog); },
  clearHandler: function(){ return editor.clearProgram(); },
  fileType: 'js'
});