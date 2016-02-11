MirobotApp = function(ready, options){
  options = options || {};
  window.l10n = (typeof options.l10n !== 'undefined' && options.l10n);
  this.languages =  options.languages;
  this.ready = ready;
  this.has_connected = false;
  this.init();
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

MirobotApp.prototype.init = function(){
  this.initted = false;
  this.initConnMenu();
  l10nMenu('l10n', this.languages);
  this.connect();
}

MirobotApp.prototype.initConnMenu = function(){
  var self = this;
  var cs = document.querySelector('#conn');
  cs.innerHTML += '<div class="wrapper"><div class="subMenu"></div></div>';

  var showMenu = function(e){
    cs.classList.add('show');
    e.preventDefault();
    return false;
  }

  var hideMenu = function(e){
    cs.classList.remove('show');
    if(e) e.preventDefault();
    return false;
  }
  var timer;
  cs.addEventListener('click', showMenu);
  cs.addEventListener('mouseleave', function(){
    timer = window.setTimeout(hideMenu, 500);
  });
  cs.addEventListener('mouseenter', function(){
    if(timer){
      window.clearTimeout(timer);
      timer = undefined;
    }
  });
  this.updateConnMenu();
}

var langCb = function(lang){
  return function(){
    var loc = document.location;
    var newLoc = loc.pathname + '?lang=' + lang + loc.hash;
    window.location = newLoc;
  }
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
    self.mirobot = new Mirobot('ws://' + self.hashConfig['m'] + ':8899/websocket');
    self.mirobot.addListener(function(r){ self.handler(r) });
  }
  self.setConnState();
}

MirobotApp.prototype.handler = function(state){
  if(state === 'connected'){
    this.connState = 'connected';
    this.has_connected = true;
    if(!this.initted){
      this.initted = true;
      this.ready(this.mirobot);
    }
  }else if(state === 'disconnected'){
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