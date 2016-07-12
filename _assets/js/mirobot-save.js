MirobotSave = function(el, conf){
  var self = this;
  this.el = el;
  this.persister = new Persister(conf);
  this.persister.subscribe(function(){self.handleUpdate();});
  this.init();
  this.persister.init();
}

MirobotSave.prototype.createMenuItem = function(text, cb){
  var li = document.createElement('li');
  li.innerHTML = text;
  li.addEventListener('click', cb);
  return li
}

MirobotSave.prototype.updateFileMenu = function(menu){
  var self = this;
  var progs_ul = menu.querySelector('ul#progs')
  if(progs_ul) progs_ul.innerHTML = '';

  this.persister.fileList(function(files){
    files.map(function(f){
      progs_ul.appendChild(self.createMenuItem(f, function(){ self.openProgram(f);}));
    });
  });
}

MirobotSave.prototype.setSaveFilename = function(name){
  var title = this.el.querySelector('#menu .title');
  if(name){
    title.innerHTML = '['+name+']';
  }else{
    title.innerHTML = '';
  }
}

MirobotSave.prototype.handleUpdate = function(){
  this.setSaveFilename(this.persister.currentProgram);
  this.updateFileMenu(document.getElementById('save'));
}

MirobotSave.prototype.init = function(){
  var self = this;
  var wrap = document.createElement('div');
  wrap.className = 'wrapper';
  this.el.appendChild(wrap);
  var menu = document.createElement('ul');
  menu.id="saveMenu";
  menu.className="subMenu";
  menu.appendChild(this.createMenuItem(l(':save') + ' <span class="title"></span>', function(){ self.saveHandler();}));
  menu.appendChild(this.createMenuItem(l(':save-as') + '...', function(){ self.saveAsHandler();}));
  menu.appendChild(this.createMenuItem(l(':new-prog'), function(){ self.newHandler();}));
  menu.appendChild(this.createMenuItem(l(':delete-prog'), function(){ self.deleteHandler();}));
  menu.appendChild(this.createMenuItem(l(':download'), function(){ self.downloadHandler();}));
  var uploader = document.createElement('input');
  uploader.type = 'file';
  uploader.id = "uploader";
  wrap.appendChild(uploader);
  uploader.addEventListener('change', function(e){ self.uploadFileHandler(e) }, false);
  menu.appendChild(this.createMenuItem(l(':upload'), function(){ self.uploadHandler();}));
  
  var progs_li = document.createElement('li');
  progs_li.innerHTML = l(':open') + ':';
  progs_li.className = 'inactive';
  menu.appendChild(progs_li);
  wrap.appendChild(menu);
  
  var progs_ul = document.createElement('ul');
  progs_ul.id = 'progs';
  progs_ul.className = 'subMenu';
  menu.appendChild(progs_ul);

  new MainMenu(this.el);
  this.el.classList.remove('hidden');

  window.addEventListener("keydown", function(e){ self.handleKeyboard(e);}, false);
}

MirobotSave.prototype.handleKeyboard = function(e){
  if(e.keyCode === 83 && e.metaKey){
    this.saveHandler();
    e.preventDefault();
    return false;
  }
}

MirobotSave.prototype.saveHandler = function(){
  if(this.persister.currentProgram){
    this.persister.save();
  }else{
    this.saveAsHandler();
  }
}

MirobotSave.prototype.saveAsModal = function(){
  var el = document.createElement('div');
  el.id = "saveAsModal";
  var p = document.createElement('p');
  p.innerHTML = l(':choose-name');
  el.appendChild(p);
  var input = document.createElement('input');
  input.type = "text"
  el.appendChild(input);
  return el
}

MirobotSave.prototype.saveAsHandler = function(){
  var self = this;
  var modal = nanoModal(this.saveAsModal(), {
    autoRemove: true,
    buttons: [
      {
        text: "Cancel",
        handler: "hide",
        primary: false
      },
      {
        text: "Save",
        primary: true,
        handler: function(modal) {
          var filename = document.querySelector("#saveAsModal input").value;
          if(filename && filename !== ''){
            self.persister.exists(filename, function(exists){
              if(exists){
                modal.hide();
                nanoModal(l(':exists'), {autoRemove: true}).show().onHide(modal.show);
              }else{
                self.persister.saveAs(filename);
                modal.hide();
              }
            })
          }
        }
      }
    ]
  });
  modal.show();
}

MirobotSave.prototype.uploadHandler = function(){
  this.checkSaved(function(res){
    if(res) document.getElementById('uploader').click();
  });
}

MirobotSave.prototype.uploadFileHandler = function(e){
  var self = this;
  e.stopPropagation();
  e.preventDefault();
  if(typeof e.dataTransfer !== 'undefined'){
    var files = e.dataTransfer.files;
  }else if(typeof e.target !== 'undefined'){
    var files = e.target.files;
  }
  if(files.length > 1) return nanoModal(l(':single-file'), {autoRemove: true}).show();
  
  // Read the file
  var r = new FileReader(files[0]);
  r.onload = function(e) { self.loadFromFile(e.target.result) }
  r.readAsText(files[0]);
  
  return false;
}

MirobotSave.prototype.loadFromFile = function(content){
  this.persister.new();
  this.persister.loadHandler(content);
}

MirobotSave.prototype.checkSaved = function(cb){
  this.persister.unsaved(function(unsaved){
    if(unsaved){
      nanoConfirm(l(':unsaved'), function(res){
        cb(res);
      });
    }else{
      cb(true);
    }
  });
}

MirobotSave.prototype.newHandler = function(){
  var self = this;
  this.checkSaved(function(res){
    if(res) self.persister.new();
  });
}

MirobotSave.prototype.downloadHandler = function(){
  this.persister.downloadCurrent();
}

MirobotSave.prototype.deleteHandler = function(){
  var self = this;
  var filename = this.persister.currentProgram;
  if(filename && filename !== ''){
    nanoConfirm(l(':sure') + " '" + filename + "'? " + l(':permanent') + '.', function(res){
      if(res) self.persister.delete(filename);
    });
  }
}

MirobotSave.prototype.openProgram = function(filename){
  var self = this;
  this.checkSaved(function(res){
    if(res && filename && filename !== '') self.persister.load(filename);
  });
}