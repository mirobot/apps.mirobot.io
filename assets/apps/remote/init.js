var app  = new MirobotApp({
  simulation: true
})

var Remote = function(mirobot){
  var sending = false;
  
  var sendCommand = function(cmd){
    if(!mirobot.ready()) return;
    document.querySelector('.' + cmd + ' .bg').className.baseVal = 'bg pressed';
    switch(cmd){
      case 'penup':
      case 'pendown':
        sending = true;
        mirobot[cmd]();
        break;
      case 'beep':
        sending = true;
        mirobot.beep(500);
        break;
      default:
        sending = true;
        mirobot[cmd](9999);
        break;
    }
  }
  
  var stop = function(){
    if(sending){
      sending = false;
      [].forEach.call(document.querySelectorAll('.bg'), function(el) {
        el.className.baseVal = 'bg';
      });
      mirobot.stop();
    }
  }
  
  var keyHandler = function(e){
    var actions = {37: 'left', 38: 'forward', 40: 'back', 39: 'right', 85: 'penup', 68: 'pendown', 66: 'beep'}
    var action = actions[e.keyCode];
    if(action){
      if(!sending){
        sendCommand(action);
      }
      e.preventDefault();
      return false;
    }
    return true;
  }
  
  var cmds = ['forward', 'back', 'left', 'right', 'penup', 'pendown', 'beep'];
  cmds.map(function(cmd){
    document.querySelector('.' + cmd).addEventListener('mousedown', function(){ sendCommand(cmd)});
    document.querySelector('.' + cmd).addEventListener('touchstart', function(){ sendCommand(cmd)});
  })
  
  document.addEventListener('mouseup', stop);
  document.addEventListener('touchend', stop);
  document.addEventListener('keydown', keyHandler);
  document.addEventListener('keyup', stop);
  
}

new Remote(app.mirobot);