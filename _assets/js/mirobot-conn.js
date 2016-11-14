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
      this.connect(conf['m']);
    }
    // Fetch the devices anyway in case you want to change
    mirobot.fetchDevices(function(devices){
      if(Object.keys(devices).length == 1){
        self.connect(Object.keys(devices)[0]);
      }
      self.updateMenu();
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
  this.selectedMenu = [];
  this.menuData = {};

  this.init = function(){
    this.devices = {};
    this.el.innerHTML += '<div class="wrapper"><ul class="subMenu"></ul></div>';
    new MainMenu(this.el)
    this.updateConnMenu();
  }
  
  this.onConnect = function(cb){
    this.connectCb = cb;
  }

  this.selectedNode = function(){
    var n = self.menuData;
    for(var i = 0; i< self.selectedMenu.length; i++){
      n = n[self.selectedMenu[i]];
    }
    return n;
  }

  this.updateConnMenu = function(){
    var menu = this.el.querySelector('.subMenu');
    menu.innerHTML = '';
    
    var clickHandler = function(node){
      return function(e){
        var selected = self.selectedNode();
        if(typeof selected[node] !== 'undefined'){
          selected = selected[node];
        }
        if(typeof selected.__address__ === 'undefined'){
          // It's an organisational node
          self.selectedMenu.push(node);
          self.updateConnMenu();
        }else{
          if(self.connectCb) self.connectCb(selected.__address__);
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }

    var selectedMenu = self.selectedNode();
    if(typeof selectedMenu.__address__ !== 'undefined'){
      // It's a selected device so use the parent node
      selectedMenu = selectedMenu.__parent__;
    }
    
    if(self.selectedMenu.length > 0){
      // Add the back button
      var backEl = document.createElement('li');
      backEl.innerHTML += '← Back <span class="address">(' + selectedMenu.__name__ + ')</span>';
      backEl.addEventListener('click', function(){
        self.selectedMenu.pop();
        self.updateConnMenu();
      });
      menu.appendChild(backEl);
    }else{
      // Add the manual entry box
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

    for(var menuItem in selectedMenu){
      if(selectedMenu.hasOwnProperty(menuItem) && menuItem !== '__name__'){
        var devEl = document.createElement('li');
        if(typeof selectedMenu[menuItem]['__address__'] !== 'undefined'){
          devEl.innerHTML = menuItem + ' <span class="address">(' + selectedMenu[menuItem]['__address__'] + ')</span>';
        }else{
          devEl.innerHTML = menuItem + ' →';
        }
        devEl.addEventListener('click', clickHandler(menuItem));
        if(this.selected_device === selectedMenu[menuItem]['__address__'] || this.devices[this.selected_device].name.substring(0, selectedMenu[menuItem].__name__.length) == selectedMenu[menuItem].__name__){
          devEl.classList.add('selected');
        }
        menu.appendChild(devEl);
      }
    }

    var submit = function(e){
      var ip = document.querySelector('#conn input').value;
      if(ip) return clickHandler(ip)(e);
    }
  }


  this.parseDevices = function(devices){
    self.menuData = {};
    for(var device in devices){
      var splitName = devices[device].name.split(':');
      var dest = self.menuData;
      for(var token in splitName){
        if(token == (splitName.length - 1)){
          dest[splitName[token]] = {__name__: devices[device].name, __address__: devices[device].address, __parent__: dest};
        }else{
          if(typeof dest[splitName[token]] === 'undefined'){
            dest[splitName[token]] = {};
            //debugger
            dest[splitName[token]].__name__ = splitName.slice(0, token+1).join(':');
          }
          dest = dest[splitName[token]];
        }
      }
    }
  }

  this.setDevices = function(devices, selected){
    this.devices = devices;
    if(typeof this.devices[selected] === 'undefined'){
      this.devices[selected] = {address: selected, name: "Mirobot", last_seen: -1};
    }else{
      this.selectedMenu = this.devices[selected].name.split(':');
      this.selectedMenu.pop();
    }
    this.parseDevices(this.devices);
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
