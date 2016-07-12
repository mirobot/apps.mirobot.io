var AsyncLocalStorageInterface = function(){
  this.getItem = function(item, cb){
    cb(window.localStorage.getItem(item));
  }
  this.setItem = function(item, value, cb){
    cb(window.localStorage.setItem(item, value));
  }
  this.removeItem = function(item, cb){
    cb(window.localStorage.removeItem(item));
  }
  this.length = function(cb){
    cb(window.localStorage.length);
  };
  this.keys = function(cb){
    var keys = [];
    for(var i=0; i< window.localStorage.length; i++){
      keys.push(window.localStorage.key(i));
    }
    cb(keys);
  };
}

var ChromeSandboxStorageInterface = function(){
  var self = this;
  this.id = 0;
  this.cbs = {};
  window.addEventListener('message', function(event) {
    if(event.data.id && typeof self.cbs[event.data.id] !== 'undefined'){
      self.cbs[event.data.id](event.data.output);
      delete self.cbs[event.data.id];
    }
  });

  this.sendCommand = function(cmd, params, cb){
    this.id++;
    this.cbs[this.id] = cb;
    parent.postMessage({command: cmd, params: params, id:this.id}, "*");
  }

  this.getItem = function(item, cb){
    this.sendCommand("getItem", item, cb);
  }
  this.setItem = function(item, value, cb){
    var out = {}
    out[item] = value;
    this.sendCommand("setItem", out, cb);
  }
  this.removeItem = function(item, cb){
    this.sendCommand("removeItem", item, cb);
  }
  this.keys = function(cb){
    this.sendCommand("keys", null, cb);
  };
  this.length = function(cb){
    this.sendCommand("length", null, cb);
  };
}


var Persister = function(conf){
  var self = this;
  this.namespace = window.location.pathname.replace(/\//g, '').replace('index.html', '');
  window.addEventListener('pagehide', function(){return self.handleUnload();});
  window.addEventListener('beforeunload', function(){return self.handleUnload();});
  if(conf.saveHandler && typeof conf.saveHandler === 'function' && conf.loadHandler && typeof conf.loadHandler === 'function'){
    this.saveHandler = conf.saveHandler;
    this.loadHandler = conf.loadHandler;
    this.clearHandler = conf.clearHandler;
  }
  this.fileType = conf.fileType || 'txt';
}

Persister.prototype = {
  listeners: [],
  init: function(){
    var self = this;
    self.initLocalStorage();
    if(!self.localStorage) return;
    self.localStorage.getItem('/' + self.namespace + '/currentProgram', function(currentProgram){
      self.currentProgram = currentProgram;
      self.localStorage.getItem('/' + self.namespace + '/unsaved', function(unsavedProgram){
        self.unsaved(function(unsaved){
          if(unsaved){
            self.loadHandler(unsavedProgram);
            self.notify();
          }else{
            if(self.currentProgram){
              self.localStorage.getItem('/' + self.namespace + '/programs/' + self.currentProgram, function(program){
                if(program){
                  self.loadHandler(program);
                  self.notify();
                }
              });
            }
          }
        });
      });
    });
  },
  initLocalStorage: function(){
    try {
      window.localStorage.setItem('test', true);
      window.localStorage.removeItem('test');
      this.localStorage = new AsyncLocalStorageInterface();
    } catch (e) {
      // No local storage
      if('chrome' in window && 'storage' in window.chrome){
        // We are running as a chrome app
        console.log("Running in Chrome");
        this.localStorage = new ChromeSandboxStorageInterface();
      }else if('chrome' in window && typeof localStorage === 'undefined'){
        console.log("Running in Chrome Sandbox");
        this.localStorage = new ChromeSandboxStorageInterface();
      }else{
        this.localStorage = false;
      }
    }
  },
  load: function(name){
    var self = this;
    self.localStorage.getItem('/' + self.namespace + '/programs/' + name, function(program){
      if(program){
        self.currentProgram = name;
        self.localStorage.setItem('/' + self.namespace + '/currentProgram', name, function(){
          self.clearHandler();
          self.loadHandler(program);
          self.notify();
        });
      }
    });
  },
  handleUnload: function(){
    this.localStorage.setItem('/' + this.namespace + '/unsaved', this.saveHandler(this.currentProgram || 'untitled'), function(){});
  },
  unsaved: function(cb){
    var self = this;
    this.localStorage.getItem('/' + this.namespace + '/programs/' + this.currentProgram, function(current){
      cb(!self.currentProgram || current !== self.saveHandler(self.currentProgram));
    });
  },
  exists: function(name, cb){
    this.localStorage.getItem('/' + this.namespace + '/programs/' + name, function(res){
      cb(!!res);
    });
  },
  saveAs: function(name){
    var self = this;
    self.localStorage.setItem('/' + self.namespace + '/currentProgram', name, function(){
      self.currentProgram = name;
      self.saveProgram();
      self.notify();
    });
  },
  save: function(){
    this.saveProgram();
  },
  downloadCurrent: function(){
    if(this.currentProgram){
      var blob = new Blob([this.saveHandler(this.currentProgram)], {type: "text/plain;charset=utf-8"});
      var fileName = this.namespace + '-' + this.currentProgram + '.' + this.fileType;
      saveAs(blob, fileName);
    }
  },
  delete: function(program){
    var self = this;
    this.localStorage.getItem('/' + self.namespace + '/currentProgram', function(prog){
      if(prog === program){
        self.localStorage.removeItem('/' + self.namespace + '/currentProgram', function(){});
      }
      self.localStorage.removeItem('/' + self.namespace + '/programs/' + program, function(){});
      self.currentProgram = undefined;
      self.clearHandler();
      self.notify();
    });
  },
  new: function(){
    this.currentProgram = undefined;
    this.clearHandler();
    this.notify();
  },
  saveProgram: function(){
    this.localStorage.setItem('/' + this.namespace + '/programs/' + this.currentProgram, this.saveHandler(this.currentProgram), function(){});
  },
  notify: function(){
    for(var i in this.listeners){
      if(this.listeners.hasOwnProperty(i)){
        this.listeners[i]();
      }
    }
  },
  subscribe: function(cb){
    this.listeners.push(cb);
  },
  fileList: function(cb){
    var self = this;
    var files = [];
    var prefix = '/' + this.namespace + '/programs/';
    this.localStorage.keys(function(keys){
      var out = [];
      for(var i = 0; i< keys.length; i++){
        if(keys[i].startsWith(prefix)){
          out.push(keys[i].replace(prefix, ''));
        }
      }
      console.log(out);
      cb(out);
    });
  }
}