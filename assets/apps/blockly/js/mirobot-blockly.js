function MirobotRunner(mirobot){
  var self = this;
  this.mirobot = mirobot;
  this.stack = [];
  
  this.run = function(prog){
    var self = this;
    console.log(prog);
    try {
      eval(prog);
    } catch (e) {
      // Null is thrown for infinite loop.
      // Otherwise, abnormal termination is a user error.
      if (e !== Infinity) {
        alert(e);
      }
    }
    this.runNext();
  }
  
  var done = function(){
    return function(msg){
      if(msg === 'complete') self.runNext();
    }
  }
  
  var runCmd = function(fn, el){
    return function(){
      Blockly.mainWorkspace.traceOn(true)
      self.highlight(el);
      fn();
    }
  }
  
  this.highlight = function(id){
    Blockly.mainWorkspace.highlightBlock(id);
  }
  
  this.runNext = function(){
    if(this.stack.length > 0){
      var next = this.stack.shift();
      next();
    }else{
      Blockly.mainWorkspace.highlightBlock();
    }
  }
  
  this.forward = function(distance, el){
    this.stack.push(runCmd(function(){ self.mirobot.forward(distance, done()) }, el));
  }
  this.back = function(distance, el){
    this.stack.push(runCmd(function(){ self.mirobot.back(distance, done()) }, el));
  }
  this.left = function(angle, el){
    this.stack.push(runCmd(function(){ self.mirobot.left(angle, done()) }, el));
  }
  this.right = function(angle, el){
    this.stack.push(runCmd(function(){ self.mirobot.right(angle, done()) }, el));
  }
  this.penup = function(el){
    this.stack.push(runCmd(function(){ self.mirobot.penup(done()) }, el));
  }
  this.pendown = function(el){
    this.stack.push(runCmd(function(){ self.mirobot.pendown(done()) }, el));
  }
  this.beep = function(duration, el){
    this.stack.push(runCmd(function(){ self.mirobot.beep(duration, done()) }, el));
  }
}


function MirobotBlockly(editorId, controlsId, lang){
  this.editorId = editorId;
  this.el = document.getElementById(editorId);
  this.lang = lang;
  this.initControls(controlsId);
  this.init(editorId);
  this.el.classList.remove('hidden');
  this.resize();
}

MirobotBlockly.prototype = {
  init: function(id){
    var self = this;

  	this.workspace = Blockly.inject(this.editorId,
      {toolbox: document.getElementById('toolbox'),
      media: '/assets/apps/blockly/media/'});

    window.addEventListener('resize', function(){ self.resize(); });
  },
  initControls: function(id){ 
    var self = this;
    this.controls = document.getElementById(id);
    this.controls.querySelector('.run').addEventListener('click', function(){ self.clickRun(); })
    this.controls.querySelector('.pause').addEventListener('click', function(){ self.clickPause(); })
    this.controls.querySelector('.stop').addEventListener('click', function(){ self.clickStop(); })
    this.controls.querySelector('.clear').addEventListener('click', function(){ self.clickClear(); })
    this.controls.classList.remove('hidden');
  },
  resize: function(){
    // Find the top of the buttons
    var height = window.innerHeight - document.getElementById(this.editorId).offsetTop - this.controls.getBoundingClientRect().height - 10;
    document.getElementById(this.editorId).style.height = height + "px";
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
    if(!this.mirobot.ready()) return;
    this.setRunButtonState('pause');
    
    var code = Blockly.Mirobot.workspaceToCode();
    this.runner.run(code);
  },
  clickPause: function(){
    if(!this.mirobot.ready()) return;
    this.setRunButtonState('run');
  },
  clickStop: function(){
    if(!this.mirobot.ready()) return;
    this.mirobot.stop();
    if(this.runner) this.runner.stack = [];
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
    this.runner = new MirobotRunner(mirobot)
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
  saveProgram: function(){
    return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace()));
  },
  loadProgram: function(prog){
    return Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), Blockly.Xml.textToDom(prog))
  },
  clearProgram: function(){
    return Blockly.getMainWorkspace().clear()
  }
}