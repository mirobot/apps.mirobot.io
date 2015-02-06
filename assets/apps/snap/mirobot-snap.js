SpriteMorph.prototype.categories.push('mirobot');
SpriteMorph.prototype.blockColor.mirobot = new Color(255, 0, 0);

//Functions to handle events coming from Mirobot
StageMorph.prototype.setupMirobotEvents = function () {
    var procs = [],
        bumpHats = [],
        lineHats = [],
        ide = this.parentThatIsA(IDE_Morph),
        myself = this;

    this.children.concat(this).forEach(function (morph) {
        if (morph instanceof SpriteMorph || morph instanceof StageMorph) {
            bumpHats = bumpHats.concat(morph.allHatBlocksFor('__mirobot_bump__'));
            lineHats = lineHats.concat(morph.allHatBlocksFor('__mirobot_line__'));
        }
    });
    var handler = function(e){    
        if(bumpHats.length > 0 && e === 'collide'){
          myself.fireMirobotEvent('bump');
        }
        if(lineHats.length > 0 && e === 'follow'){
          myself.fireMirobotEvent('line');
        }
    }
    if(bumpHats.length > 0){
      //Set up the bump event handling
      mirobot.collideSensorNotify(true, function(){
        mirobot.addListener(handler);
      });
    }
    if(lineHats.length > 0){
      //Set up the line event handling
      mirobot.followSensorNotify(true, function(){
        mirobot.addListener(handler);
      });
    }
    return procs;
}

StageMorph.prototype.stopMirobotEvents = function () {
    mirobot.stop(function(){
        //Set up the bump event handling
        mirobot.collideSensorNotify(false, function(){});
        //Set up the line event handling
        mirobot.followSensorNotify(false, function(){});
    });
}

StageMorph.prototype.fireMirobotEvent = function (type) {
    var procs = [],
        hats = [],
        ide = this.parentThatIsA(IDE_Morph),
        myself = this;

    this.children.concat(this).forEach(function (morph) {
        if (morph instanceof SpriteMorph || morph instanceof StageMorph) {
            hats = hats.concat(morph.allHatBlocksFor('__mirobot_' + type + '__'));
        }
    });
    hats.forEach(function (block) {
        procs.push(myself.threads.startProcess(
            block,
            myself.isThreadSafe
        ));
    });
    return procs;
}


// Mirobot functions
Process.prototype.mirobotForward = function (distance) {
  // interpolated
  if (typeof this.context.proceed === 'undefined') {
    var self = this;
    this.context.proceed = false;
    mirobot.forward(distance, function(state, msg){
      if(state === 'complete' && self.context){
        self.context.proceed = true;
      }
    });
  }
  if(this.context.proceed){
    return null;
  }
  this.pushContext('doYield');
  this.pushContext();
}

Process.prototype.mirobotBack = function (distance) {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.back(distance, function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotLeft = function (angle) {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.left(angle, function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotRight = function (angle) {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.right(angle, function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotPenup = function () {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.penup(function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotPendown = function () {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.pendown(function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotBeep = function (seconds) {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.beep(Math.round(seconds * 1000), function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotStop = function () {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        mirobot.stop(function(state, msg){
          if(state === 'complete' && self.context){
            self.context.proceed = true;
          }
        });
    }
    if(this.context.proceed){
        return null;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotBumpSensor = function () {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        this.context.result = null;
        mirobot.collisionSensorState(function(state){
          self.context.result = state;
          self.context.proceed = true;
        });
    }
    if(this.context.proceed){
        return this.context.result;
    }
    this.pushContext('doYield');
    this.pushContext();
}

Process.prototype.mirobotLineSensor = function () {
    // interpolated
    if (typeof this.context.proceed === 'undefined') {
        var self = this;
        this.context.proceed = false;
        this.context.result = null;
        mirobot.followSensorState(function(state){
          self.context.result = state;
          self.context.proceed = true;
        });
    }
    if(this.context.proceed){
        return this.context.result;
    }
    this.pushContext('doYield');
    this.pushContext();
}
