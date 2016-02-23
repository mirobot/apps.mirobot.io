MirobotApp = function(options){
  options = options || {};
  window.l10n = (typeof options.l10n !== 'undefined' && options.l10n);
  this.simulation = !!options.simulation;
  this.languages =  options.languages;
  this.has_connected = false;
  this.initConnMenu();
  if(l10n) l10nMenu('l10n', this.languages);
  this.mirobot = new Mirobot()
  if(this.simulation){
    var sim = new MirobotSim('sim', this.mirobot);
    this.mirobot.setSimulator(sim);
  }
  this.connect();
}

MirobotApp.prototype.extractConfig = function(){
  var self = this;
  self.hashConfig = {};
  if(window.location.hash !== ''){
    window.location.hash.replace('#', '').split('&').map(function(el){
      var split = el.split('=');
      self.hashConfig[split[0]] = split[1];
    });
  }
}

MirobotApp.prototype.supportsLocalStorage = function(){
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

MirobotApp.prototype.initConnMenu = function(){
  var self = this;
  var cs = document.querySelector('#conn');
  cs.innerHTML += '<div class="wrapper"><div class="subMenu"></div></div>';
  new MainMenu(cs)
  this.updateConnMenu();
}

MirobotApp.prototype.updateConnMenu = function(){
  var self = this;
  var menu = document.querySelector('#conn .subMenu');
  if(this.connState === 'connected'){
    menu.innerHTML = l(':connected');
  }else{
    menu.innerHTML = '<p>' + l(':address') + ':</p><input type="text" placeholder="192.168.1.100" value=""/><button>' + l(':connect') + '</button>';
    menu.querySelector('button').addEventListener('click', function(e){
      var ip = document.querySelector('#conn input').value;
      if(ip){
        window.location = '#m=' + ip;
        updateLinks();
        self.connect();
      }
      document.querySelector('#conn').classList.remove('show');
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }
}

MirobotApp.prototype.initPersistence = function(conf){
  if(this.supportsLocalStorage()){
    this.saveMenu = new MirobotSave(document.querySelector('#save'), conf);
  }
}

MirobotApp.prototype.connect = function(){
  var self = this;
  self.extractConfig();
  self.connState = self.hashConfig['m'] ? 'connecting' : 'not_set';
  if(self.hashConfig['m']){
    self.mirobot.connect('ws://' + self.hashConfig['m'] + ':8899/websocket');
    self.mirobot.addEventListener('connectedStateChange', function(r){ self.connHandler(r) });
  }
  self.setConnState();
}

MirobotApp.prototype.connHandler = function(e){
  if(e.state === 'connected'){
    this.connState = 'connected';
    this.has_connected = true;
  }else if(e.state === 'disconnected'){
    if(!this.has_connected){
      this.connState = 'cant_connect';
    }else{
      this.connState = 'disconnected';
    }
  }
	this.updateConnMenu();
  this.setConnState();
}

MirobotApp.prototype.setConnState = function(){
  var self = this;
  var cs = document.querySelector('#conn');
  switch(this.connState){
    case 'not_set':
      cs.classList.remove('connected');
      cs.classList.remove('error');
      break;
    case 'connected':
      cs.classList.remove('error');
      cs.classList.add('connected');
      break;
    case 'cant_connect':
      cs.classList.remove('connected');
      cs.classList.add('error');
      break;
    case 'disconnected':
      cs.classList.remove('connected');
      cs.classList.add('error');
      break;
  }
}
