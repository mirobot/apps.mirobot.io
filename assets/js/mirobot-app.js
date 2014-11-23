MirobotApp = function(ready){
  this.ready = ready;
  this.init();
}

MirobotApp.prototype.init = function(){
  var self = this;
  self.hashConfig = {};
  if(window.location.hash !== ''){
    window.location.hash.replace('#', '').split('&').map(function(el){
      var split = el.split('=');
      self.hashConfig[split[0]] = split[1];
    });
  }
  self.connState = document.querySelector('#header .connState');
  var host = self.hashConfig['m'] || window.location.hostname;
  self.mirobot = new Mirobot('ws://' + host + ':8899/websocket');
  self.mirobot.addListener(function(r){ self.handler(r) });
}

MirobotApp.prototype.handler = function(state){
  if(state === 'connected'){
    this.connState.innerHTML = '&#10003; Connected to Mirobot';
    this.connState.className = 'connState connected';
    this.ready(this.mirobot);
  }else if(state === 'disconnected'){
    this.connState.innerHTML = '&#10007; Reconnecting to Mirobot';
    this.connState.className = 'connState disconnected';
  }
}