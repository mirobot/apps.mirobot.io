MirobotApp = function(ready){
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

MirobotApp.prototype.init = function(conf){
  this.initted = false;
  this.conf = conf;
  this.connect();
}

MirobotApp.prototype.initPersistence = function(conf){
  if(this.supportsLocalStorage()){
    this.saveMenu = new MirobotSave(document.getElementById('save'), conf);
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
  this.setConnState();
}

MirobotApp.prototype.configure = function(e){
  var ip = prompt("Enter the address for your Mirobot here:\n (e.g. 192.168.1.100)", this.hashConfig['m']);
  if(ip){
    window.location = '#m=' + ip;
    this.connect();
  }
  e.preventDefault();
  return false;
}

MirobotApp.prototype.setConnState = function(){
  var self = this;
  var cs = document.querySelector('#header .connState');
  switch(this.connState){
    case 'not_set':
      cs.innerHTML = '&#10007; <a href="#">Configure Mirobot connection</a>';
      cs.querySelector('a').addEventListener('click', function(e){ self.configure(e) });
      cs.className = 'connState';
      break;
    case 'connected':
      cs.innerHTML = '&#10003; Connected to Mirobot';
      cs.className = 'connState connected';
      break;
    case 'cant_connect':
      cs.innerHTML = '&#10007; <a href="#">Can\'t connect to Mirobot<a>';
      cs.querySelector('a').addEventListener('click', function(e){ self.configure(e) });
      cs.className = 'connState error';
      break;
    case 'disconnected':
      cs.innerHTML = '&#10007; <a href="#">Reconnecting to Mirobot</a>';
      cs.querySelector('a').addEventListener('click', function(e){ self.configure(e) });
      cs.className = 'connState error';
      break;
  }
}