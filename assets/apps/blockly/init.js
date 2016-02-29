var init = function(){
  var app  = new MirobotApp({
    l10n: true,
    simulation: true,
    languages: baseLanguages.concat([])
  });
  // Other google translations
  //[ 'ar', 'cs', 'da', 'de', 'el', 'fa', 'hi', 'hrx', 'hu', 'is', 'it', 'ko', 'ms', 'ro', 'ru', 'sv', 'tr', 'uk', 'vi', 'zh-hans', 'zh-hant']
  // Load in the correct language script
  var scriptEl = document.createElement('script');
  scriptEl.onload = function(){
    // translate the toolbox xml
    updateL10nNames();
    var editor = new MirobotBlockly('editor', 'controlBar');
    editor.setMirobot(app.mirobot);

    app.initPersistence({
      saveHandler: function(){ return editor.saveProgram() },
      loadHandler: function(prog){ return editor.loadProgram(prog) },
      clearHandler: function(){ return editor.clearProgram() }
    });
  }
  scriptEl.src = "/assets/apps/blockly/msg/js/" + String.locale + ".js";
  document.head.appendChild(scriptEl);
}

window.addEventListener('load', init);
