var $ = snack.wrap;
var builder = new Builder($('#code'), undefined, true);
var app  = new MirobotApp({
  l10n: true,
  languages: baseLanguages,
  simulation: true
});
builder.setMirobot(app.mirobot);

app.initPersistence({
  saveHandler: function(){ return builder.saveProgram(); },
  loadHandler: function(prog){ return builder.loadProgram(prog); },
  clearHandler: function(){ return builder.clearProgram(); }
});