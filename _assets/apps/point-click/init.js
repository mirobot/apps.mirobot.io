var t = new Turtle(document.getElementById('turtle'));
var app  = new MirobotApp({
  l10n: true,
  languages: baseLanguages
});
t.setMirobot(app.mirobot);
