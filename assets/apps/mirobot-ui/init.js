var $ = snack.wrap;
var builder = new Builder($('#code'), undefined, true);
var app  = new MirobotApp(function(mirobot){
  builder.setMirobot(mirobot);
}, {
  l10n: true,
  languages: baseLanguages
});
app.initPersistence({
  saveHandler: function(){ return builder.saveProgram(); },
  loadHandler: function(prog){ return builder.loadProgram(prog); },
  clearHandler: function(){ return builder.clearProgram(); }
});