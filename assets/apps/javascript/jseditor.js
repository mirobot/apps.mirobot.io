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
    window.addEventListener('resize', function(){ self.resize(); });
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
  },
  setRunButtonState: function(state){
    this.controls.querySelector('.run').style.display = (state==='run' ? '' : 'none');
    this.controls.querySelector('.pause').style.display = (state==='pause' ? '' : 'none');
  },
  clickRun: function(){
    "use strict"
    this.setRunButtonState('pause');
    var prog = this.editor.getValue();
    var mirobot = this.mirobot;
    eval(prog);
  },
  clickPause: function(){
    this.setRunButtonState('run');
  },
  clickStop: function(){
    this.mirobot.stop();
    this.setRunButtonState('run');
  },
  clickClear: function(){
    this.clearProgram();
  },
  mirobotHandler: function(msg){
    if(msg === 'program_complete'){
    this.setRunButtonState('run');
    }
  },
  setMirobot: function(mirobot){
    var self = this;
    this.mirobot = mirobot;
    this.mirobot.addListener(function(msg){ self.mirobotHandler(msg); });
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