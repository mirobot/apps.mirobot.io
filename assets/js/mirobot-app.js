MirobotApp = function(options){
  options = options || {};
  window.l10n = (typeof options.l10n !== 'undefined' && options.l10n);
  this.simulation = !!options.simulation;
  this.languages =  options.languages;
  if(l10n) l10nMenu('l10n', this.languages);
  this.mirobot = new Mirobot()
  if(this.simulation){
    var sim = new MirobotSim('sim', this.mirobot);
    this.mirobot.setSimulator(sim);
  }
  new MirobotConn(this.mirobot);
}

MirobotApp.prototype.supportsLocalStorage = function(){
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

MirobotApp.prototype.initPersistence = function(conf){
  if(this.supportsLocalStorage()){
    this.saveMenu = new MirobotSave(document.querySelector('#save'), conf);
  }
}

