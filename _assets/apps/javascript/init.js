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
  var console = {log: function(text){
    editor.printToConsole(text);
    window.console.log("Javascript: " + text);
  }}
  try{
    eval(prog);
  }catch(e){
    console.log(e);
  }
  editor.completeHandler();
});

app.initPersistence({
  saveHandler: function(){ return editor.saveProgram(); },
  loadHandler: function(prog){ return editor.loadProgram(prog); },
  clearHandler: function(){ return editor.clearProgram(); },
  fileType: 'js'
});