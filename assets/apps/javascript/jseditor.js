function JSEditor(editorId, controlsId){
  this.editorId = editorId;
  this.el = document.getElementById(editorId);
  this.initControls(controlsId);
  this.init(editorId);
  this.resize();
}

JSEditor.prototype = {
  init: function(id){
    var self = this;
    this.editor = ace.edit(id);
    this.editor.setTheme("ace/theme/xcode");
    this.editor.getSession().setMode("ace/mode/javascript");
    this.editor.$blockScrolling = Infinity;
    this.editor.setShowPrintMargin(false);
    window.addEventListener('resize', function(){ self.resize(); });
    this.help = document.querySelector('#help');
    document.querySelector('#helpButton').addEventListener('click', function(){ self.helpHandler(); });
  },
  initControls: function(id){ 
    var self = this;
    this.controls = document.getElementById(id);
    this.controls.querySelector('.run').addEventListener('click', function(){ self.clickRun(); })
    this.controls.querySelector('.pause').addEventListener('click', function(){ self.clickPause(); })
    this.controls.querySelector('.stop').addEventListener('click', function(){ self.clickStop(); })
    this.controls.querySelector('.clear').addEventListener('click', function(){ self.clickClear(); })
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
  clickRun: function(){
    "use strict"
    if(!this.mirobot.ready()) return;
    this.setRunButtonState('pause');
    var prog = this.editor.getValue();
    var mirobot = this.mirobot;
    eval(prog);
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