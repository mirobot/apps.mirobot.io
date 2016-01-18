var editor = new JSEditor('editor', 'controlBar');

//var builder = new Builder($('#code'), undefined, true);
var app  = new MirobotApp(function(mirobot){
  editor.setMirobot(mirobot);
});

app.initPersistence({
  saveHandler: function(){ return editor.saveProgram(); },
  loadHandler: function(prog){ return editor.loadProgram(prog); },
  clearHandler: function(){ return editor.clearProgram(); },
  fileType: 'js'
});