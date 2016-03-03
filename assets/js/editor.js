function Editor(editorId, controlsId, lang){
  this.editorId = editorId;
  this.el = document.getElementById(editorId);
  this.lang = lang;
  this.initControls(controlsId);
  this.init(editorId);
  this.resize();
}

Editor.prototype = {
  init: function(id){
    var self = this;
    this.editor = ace.edit(id);
    this.editor.setTheme("ace/theme/xcode");
    this.editor.getSession().setMode("ace/mode/" + this.lang);
    this.editor.$blockScrolling = Infinity;
    this.editor.setShowPrintMargin(false);
    window.addEventListener('resize', function(){ self.resize(); });
    this.help = document.querySelector('#help');
    document.querySelector('#helpButton').addEventListener('click', function(){ self.helpHandler(); });
    this.initConsole();
  },
  initControls: function(id){ 
    var self = this;
    this.controls = document.getElementById(id);
    this.controls.querySelector('.run').addEventListener('click', function(){ self.clickRun(); })
    this.controls.querySelector('.pause').addEventListener('click', function(){ self.clickPause(); })
    this.controls.querySelector('.stop').addEventListener('click', function(){ self.clickStop(); })
    this.controls.querySelector('.clear').addEventListener('click', function(){ self.clickClear(); })
  },
  printToConsole: function(text){
    this.showConsole();
    var pre = this.console.querySelector('pre');
    pre.innerHTML += text + "\n";
    // Scroll to bottom
    pre.scrollTop = pre.scrollHeight;
  },
  showConsole: function(state){
    if(state || typeof state === 'undefined'){
      this.console.classList.remove('hide-console');
      this.console.classList.add('show-console');
    }else{
      this.console.classList.add('hide-console');
      this.console.classList.remove('show-console');
    }
  },
  initConsole: function(){
    var self = this;
    this.console = document.createElement('div');
    this.console.id = 'console';
    this.console.className = 'hide-console';
    this.console.innerHTML = '<button class="showButton">Show Console</button><button class="hideButton">Hide Console</button><pre></pre>';
    this.console.querySelector('.showButton').addEventListener('click', function(){ self.showConsole(); });
    this.console.querySelector('.hideButton').addEventListener('click', function(){ self.showConsole(false); });
    document.body.appendChild(this.console)
  },
  resize: function(){
    // Find the top of the buttons
    var height = window.innerHeight - document.getElementById(this.editorId).offsetTop - this.controls.getBoundingClientRect().height - 10;
    document.getElementById(this.editorId).style.height = height + "px";
    this.editor.resize();
    this.help.style.height = (height - 70) + 'px'
  },
  helpHandler: function(){
    if(this.help.style.display !== 'block'){
      this.help.style.display = 'block';
      document.querySelector('#helpButton').innerText = l(':hide-help');
    }else{
      this.help.style.display = '';
      document.querySelector('#helpButton').innerText = l(':show-help');
    }
  },
  setRunButtonState: function(state){
    this.controls.querySelector('.run').style.display = (state==='run' ? '' : 'none');
    this.controls.querySelector('.pause').style.display = (state==='pause' ? '' : 'none');
  },
  onRun: function(cb){
    this._onRun = cb;
  },
  clickRun: function(){
    if(!this.mirobot.ready()) return;
    this.setRunButtonState('pause');
    if(this._onRun)this._onRun(this.editor.getValue());
  },
  clickPause: function(){
    if(!this.mirobot.ready()) return;
    this.setRunButtonState('run');
  },
  clickStop: function(){
    if(!this.mirobot.ready()) return;
    this.mirobot.stop();
    this.setRunButtonState('run');
  },
  clickClear: function(){
    this.clearProgram();
  },
  completeHandler: function(msg){
    this.setRunButtonState('run');
  },
  setMirobot: function(mirobot){
    var self = this;
    this.mirobot = mirobot;
    this.mirobot.addEventListener('programComplete', function(msg){ self.completeHandler(msg); });
    this.mirobot.addEventListener('readyStateChange', function(){ self.updateMirobotState() });
    this.updateMirobotState();
  },
  updateMirobotState: function(){
    if(this.mirobot.ready()){
      this.controls.classList.add('ready');
      this.controls.classList.remove('notReady');
    }else{
      this.controls.classList.remove('ready');
      this.controls.classList.add('notReady');
    }
  },
  saveProgram: function(name){
    return this.editor.getValue();
  },
  loadProgram: function(prog){
    return this.editor.setValue(prog, -1);
  },
  clearProgram: function(){
    return this.editor.setValue('');
  }
}