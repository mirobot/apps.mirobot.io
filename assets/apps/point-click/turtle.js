var Turtle = function(el){
  var self = this;
  self.el = el;
  this.penDown = true;
  this.addTurtle();
  el.onmousemove = function(e){ return self.point(e)};
  el.onclick = function(e){ return self.move(e)};
}

Turtle.prototype = {
  program: [],
  moving: false,
  prev_angle: 0,
  curr_angle: 0,
  angle: 0,
  setMirobot: function(mirobot){
    this.mirobot = mirobot;
  },
  point: function(e){
    if(this.moving) return;
    this.angle = Math.atan2(this.mouse_x(e) - this.bot_x(), - (this.mouse_y(e) - this.bot_y()) )*(180/Math.PI);
    this.robot.style["-webkit-transform"] = 'rotate(' + this.angle + 'deg)';
    this.robot.style['-moz-transform'] = 'rotate(' + this.angle + 'deg)';
    this.robot.style['-ms-transform'] = 'rotate(' + this.angle + 'deg)';
    this.robot.style['transform'] = 'rotate(' + this.angle + 'deg)';
  },
  move: function(e){
    var self = this;
    if(self.moving) return;
    self.point(e);
    this.prev_angle = this.curr_angle;
    this.curr_angle = this.angle;
    self.moving = true;
    var rate = 5;
    var dx = this.mouse_x(e) - self.bot_x();
    var dy = this.mouse_y(e) - self.bot_y();
    var dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    this.storeMove(this.angle, dist);
    var steps = Math.ceil(dist/rate);
    var _dx = dx / steps;
    var _dy = dy / steps;
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.moveTo(this.bot_x(), this.bot_y());
    var mover = function(){
      if(!self.moving){return;}
      steps--;
      if(self.penDown){
        self.context.lineTo(self.bot_x() + _dx, self.bot_y() + _dy);
        self.context.stroke();
      }
      if(steps === 0){
        self.moveBy(_dx, _dy);
        if(self.penDown){
          self.context.closePath();
        }
        self.moving = false;
      }else{
        self.moveBy(_dx, _dy);
        window.setTimeout(mover, 30)
      }
    }
    mover();
  },
  moveBy: function(x, y){
    this.robot.style.left = parseFloat(this.robot.style.left.replace('px', '')) + x + "px";
    this.robot.style.top = parseFloat(this.robot.style.top.replace('px', '')) + y + "px";
  },
  storeMove: function(angle, distance){
    if(this.program.length === 0){
      turnangle = angle
    }else{
      turnangle = this.prev_angle - angle;
    }
    turnangle = Math.floor(turnangle);
    if(turnangle != 0){
      if(turnangle > 180){ turnangle -= 360}
      if(turnangle < -180){ turnangle += 360}
      var dir = turnangle < 0 ? 'right' : 'left';
      this.pushScript(dir, Math.floor(Math.abs(turnangle)));
    }
    if(Math.floor(distance) != 0){
      this.pushScript('forward', Math.floor(distance));
    }
  },
  pushScript: function(func, arg){
    this.program.push([func, arg]);
    if(this.mirobot){
      this.mirobot[func](arg);
    }
    this.js.value += 'mirobot.' + func + '(' + (arg ? arg : '') + ')\n';
  },
  penControlHandler: function(e){
    this.penDown = !this.penDown;
    if(this.penDown){
      this.pushScript('pendown');
      this.robot.className = '';
      this.penControl.innerHTML = "Pen Up";
    }else{
      this.pushScript('penup');
      this.robot.className = 'penup';
      this.penControl.innerHTML = "Pen Down";
    }
    e.preventDefault();
    e.cancelBubble = true;
  },
  jsControlHandler: function(e){
    if(this.js.style.display === 'none'){
      this.js.style.display = 'block';
      this.jsControl.innerHTML = "Hide Javascript";
    }else{
      this.js.style.display = 'none';
      this.jsControl.innerHTML = "Show Javascript";
    }
    e.preventDefault();
    e.cancelBubble = true;
  },
  resetControlHandler: function(e){
    this.moving = false;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGrid();
    this.js.value = '';
    this.robot.style["-webkit-transform"] = '';
    this.robot.style['-moz-transform'] = '';
    this.robot.style.left = this.canvas.getBoundingClientRect().width/2 - this.robot.getBoundingClientRect().width/2 + "px";
    this.robot.style.top = this.canvas.getBoundingClientRect().height/2 - this.robot.getBoundingClientRect().height/2 + "px";
    e.preventDefault();
    e.cancelBubble = true;
  },
  drawGrid: function(){
    var gridSize = 100;
    var w = this.canvas.getBoundingClientRect().width;
    var h = this.canvas.getBoundingClientRect().height;
    var x = (w/2)%gridSize;
    var y = (h/2)%gridSize;
    this.context.beginPath();
    this.context.strokeStyle = '#EEE';
    this.context.lineWidth = 1;
    while(y < h){
      this.context.moveTo(0, y);
      this.context.lineTo(w, y);
      this.context.stroke();
      y += gridSize;
    }
    
    while(x < w){
      this.context.moveTo(x, 0);
      this.context.lineTo(x, h);
      this.context.stroke();
      x += gridSize;
    }
    
    this.context.strokeStyle = '#000000';
    this.context.closePath();
  },
  addTurtle: function(){
    var self = this;
    this.el.style.height = (window.innerHeight - this.el.getBoundingClientRect().top - 15) + 'px';
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.robot = document.createElement('div');
    this.robot.innerHTML = '<svg version="1.1" x="0px" y="0px" width="10px" height="14px" viewBox="0 0 10 14" xml:space="preserve"><polygon fill="#FFFFFF" stroke="#FF0000" stroke-miterlimit="10" points="0,14 5,0 10,14 "/></svg>';
    var label = document.createElement('span');
    label.innerHTML = "100mm grid";
    this.penControl = document.createElement('button');
    this.penControl.id = "penControl";
    this.penControl.innerHTML = "Pen Up";
    this.penControl.addEventListener('click', function(e){ self.penControlHandler(e) });
    var controls = document.createElement('div');
    controls.id = 'controls';
    this.jsControl = document.createElement('button');
    this.jsControl.innerHTML = "Show Javascript";
    this.jsControl.addEventListener('click', function(e){ self.jsControlHandler(e) });
    this.resetControl = document.createElement('button');
    this.resetControl.innerHTML = "Reset";
    this.resetControl.addEventListener('click', function(e){ self.resetControlHandler(e) });
    this.js = document.createElement('textarea');
    this.js.id = 'js';
    this.js.style.display = 'none';
    this.js.readOnly = true;
    this.js.addEventListener('click', function(e){ e.preventDefault(); e.cancelBubble = true; });
    this.robot.id = 'robot'
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    // lock the size of the canvas because it's difficult to resize it
    this.el.style.width = this.el.getBoundingClientRect().width + 'px';
    this.el.style.height = this.el.getBoundingClientRect().height + 'px';
    this.js.style.height = this.el.getBoundingClientRect().height - 75 + 'px'
    this.el.appendChild(this.robot);
    this.el.appendChild(this.canvas);
    this.el.appendChild(this.penControl);
    controls.appendChild(this.jsControl);
    controls.appendChild(this.resetControl);
    this.el.appendChild(this.js);
    this.el.appendChild(controls);
    this.el.appendChild(label);
    
    this.context.canvas.width = this.canvas.getBoundingClientRect().width;
    this.context.canvas.height = this.canvas.getBoundingClientRect().height;
    this.robot.style.left = this.canvas.getBoundingClientRect().width/2 - this.robot.getBoundingClientRect().width/2 + "px";
    this.robot.style.top = this.canvas.getBoundingClientRect().height/2 - this.robot.getBoundingClientRect().height/2 + "px";
    
    this.drawGrid();
  },
  mouse_x: function(e){
    return e.pageX - this.el.getBoundingClientRect().left
  },
  mouse_y: function(e){
    return e.pageY - this.el.getBoundingClientRect().top
  },
  bot_x: function(){
    return this.robot.getBoundingClientRect().left + this.robot.getBoundingClientRect().width/2 - this.el.getBoundingClientRect().left
  },
  bot_y: function(){
    return this.robot.getBoundingClientRect().top + this.robot.getBoundingClientRect().height/2 - this.el.getBoundingClientRect().top;
  }
}
