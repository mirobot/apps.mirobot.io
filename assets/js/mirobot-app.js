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
  this.initConnMenu();
  this.connect();
}

MirobotApp.prototype.initConnMenu = function(){
	var self = this;
	var cs = document.querySelector('#conn');
	cs.innerHTML += '<div class="wrapper"><div class="subMenu"></div></div>';
  cs.querySelector('a').addEventListener('click', function(e){
		cs.classList.toggle('show');
		e.preventDefault();
		return false;
	});
  cs.addEventListener('mouseleave', function(){ cs.classList.remove("show");});
  this.updateConnMenu();
}

MirobotApp.prototype.updateConnMenu = function(){
	var self = this;
	var menu = document.querySelector('#conn .subMenu');
	if(this.connState === 'connected'){
		menu.innerHTML = 'Connected';
	}else{
		menu.innerHTML = '<p>Enter the address for your Mirobot here:</p><input type="text" placeholder="192.168.1.100" value=""/><button>Connect</button>';
		menu.querySelector('button').addEventListener('click', function(e){ self.configure(e) });
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
  //self.setConnState();
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
  //this.setConnState();
}

MirobotApp.prototype.configure = function(e){
  var ip = document.querySelector('.connState input').value;
  if(ip){
    window.location = '#m=' + ip;
    updateLinks();
    this.connect();
  }
  e.preventDefault();
  return false;
}

MirobotApp.prototype.setConnState = function(){
  var self = this;
  var cs = document.querySelector('#header .connState');
  var csLink = document.querySelector('#header .connState .csLink');
  var csIcon = document.querySelector('#header .connState .csIcon');
  switch(this.connState){
    case 'not_set':
      csLink.innerHTML = 'Configure Mirobot connection';
      csIcon.innerHTML = '&#10007;';
      cs.classList.remove('connected');
      cs.classList.remove('error');
      break;
    case 'connected':
      csLink.innerHTML = 'Connected to Mirobot';
      csIcon.innerHTML = '&#10003;';
      cs.classList.remove('error');
      cs.classList.add('connected');
      break;
    case 'cant_connect':
      csLink.innerHTML = 'Can\'t connect to Mirobot';
      csIcon.innerHTML = '&#10007;';
      cs.classList.remove('connected');
      cs.classList.add('error');
      break;
    case 'disconnected':
      csLink.innerHTML = 'Reconnecting to Mirobot';
      csIcon.innerHTML = '&#10007;';
      cs.classList.remove('connected');
      cs.classList.add('error');
      break;
  }
}