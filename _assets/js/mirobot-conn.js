MirobotConn = function(mirobot, options){
  var self = this;

  this.extractConfig = function(){
    var hashConfig = {};
    if(window.location.hash !== ''){
      window.location.hash.replace('#', '').split('&').map(function(el){
        var split = el.split('=');
        hashConfig[split[0]] = split[1];
      });
    }
    return hashConfig;
  }

  this.connect = function(address){
    if(self.address !== address){
      if(this.mirobot.connected){
        this.mirobot.disconnect();
      }
      console.log('connecting to ' + address)
      self.address = address;
      if(typeof mirobot.devices[address] === 'undefined'){
        mirobot.devices[address] = {address: address, name: "Mirobot", last_seen: -1};
      }
      self.has_connected = false;
      self.connState = 'connecting';
      self.mirobot.connect('ws://' + address + ':8899/websocket');
      self.updateMenu();
    }
  }
  
  this.autoConnect = function(){
    var conf = this.extractConfig();
    if(typeof conf['m'] !== 'undefined'){
      // Check if there's already an address in the URL
      return this.connect(conf['m']);
    }
    mirobot.fetchDevices(function(devices){
      if(Object.keys(devices).length == 1){
        self.connect(Object.keys(devices)[0]);
      }
    });
  }
  
  this.updateMenu = function(){
    this.menu.setDevices(mirobot.devices, this.address);
    this.menu.setConnState(this.connState);
  }

  this.connHandler = function(e){
    if(e.state === 'connected'){
      this.connState = 'connected';
      this.has_connected = true;
      window.location = '#m=' + this.address;
      updateLinks();
    }else if(e.state === 'disconnected'){
      if(!this.has_connected){
        this.connState = 'cant_connect';
      }else{
        this.connState = 'disconnected';
      }
    }
    this.updateMenu();
  }

  this.init = function(){ 
    this.mirobot = mirobot;
    this.mirobot.addEventListener('connectedStateChange', function(r){ self.connHandler(r) });
    this.extractConfig();
    this.menu = new MirobotConnMenu('conn')
    this.connState = 'not_set';
    this.menu.onConnect(function(address){
      self.connect(address);
    });
    this.autoConnect();
  }
  
  this.init();
}

// Handles the dom implementation of the connection menu
MirobotConnMenu = function(el){
  var self = this;
  this.connectCb = undefined;
  this.el = document.getElementById(el);

  this.init = function(){
    this.devices = {};
    this.el.innerHTML += '<div class="wrapper"><ul class="subMenu"></ul></div>';
    new MainMenu(this.el)
    this.updateConnMenu();
  }
  
  this.onConnect = function(cb){
    this.connectCb = cb;
  }

  this.updateConnMenu = function(){
    var menu = this.el.querySelector('.subMenu');
    menu.innerHTML = '';
    
    var clickHandler = function(address){
      return function(e){
        if(self.connectCb) self.connectCb(address);
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }   
    
    for(var device in this.devices){
      if(this.devices.hasOwnProperty(device)){
        var devEl = document.createElement('li');
        devEl.innerHTML = this.devices[device].name + ' <span class="address">(' + device + ')</span>';
        devEl.addEventListener('click', clickHandler(this.devices[device].address));
        if(this.selected_device === this.devices[device].address){
          devEl.classList.add('selected');
        }
        menu.appendChild(devEl);
      }
    }
    
    var submit = function(e){
      var ip = document.querySelector('#conn input').value;
      if(ip) return clickHandler(ip)(e);
    }

    var devEl = document.createElement('li');
    devEl.innerHTML = '<p>' + l(':address') + ':</p><input type="text" placeholder="192.168.1.100" value=""/><button>' + l(':connect') + '</button>';
    devEl.querySelector('input').addEventListener('keypress', function(e){
       if(e && e.keyCode == 13) return submit(e);
    })
    devEl.querySelector('button').addEventListener('click', function(e){
      return submit(e)
    });
    menu.appendChild(devEl);
  }

  this.setDevices = function(devices, selected){
    this.devices = devices;
    this.selected_device = selected;
    this.updateConnMenu();
  }

  this.setConnState = function(connState){
    this.connState = connState;
    switch(connState){
      case 'not_set':
        this.el.classList.remove('connected');
        this.el.classList.remove('error');
        break;
      case 'connected':
        this.el.classList.remove('error');
        this.el.classList.add('connected');
        break;
      case 'connecting':
        this.el.classList.remove('connected');
        this.el.classList.remove('error');
        break;
      case 'cant_connect':
        this.el.classList.remove('connected');
        this.el.classList.add('error');
        break;
      case 'disconnected':
        this.el.classList.remove('connected');
        this.el.classList.add('error');
        break;
    }
    this.updateConnMenu();
  }
  
  this.init();
}
