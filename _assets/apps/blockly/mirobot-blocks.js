'use strict';

var tokenise = function(str){
  var re = /(\[\[[^\]]+\]\])/g;
  var m;
  var prevIndex = 0;
  var output = [];
  
  while ((m = re.exec(str)) !== null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
    output.push(str.substr(prevIndex, m.index - prevIndex).trim());
    output.push(m[0]);
    prevIndex = m.index + m[0].length;
    
  }
  if(prevIndex < str.length){
    output.push(str.substr(prevIndex, str.length - prevIndex).trim());
  }
  return output
}

Blockly.Mirobot = Blockly.JavaScript;

Blockly.Blocks['mirobot_move'] = {
  init: function() {
    var str = l(':move-cmd');
    var tokens = tokenise(str);
    for(var i = 0; i< tokens.length; i++){
      if(tokens[i] === '[[ direction ]]'){
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([[l(':forward'), "forward"], [l(':back'), "back"]]), "DIRECTION");
      }else if(tokens[i] === '[[ distance ]]'){
        this.appendValueInput("DISTANCE")
          .setCheck("Number");
      }else{
        this.appendDummyInput().appendField(tokens[i]);
      }
    }
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['mirobot_move'] = function(block) {
  // Generate JavaScript for moving forward or backwards.
  var distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'mirobot.' + block.getFieldValue('DIRECTION') + '(' + distance + ');\n';
};

Blockly.Mirobot['mirobot_move'] = function(block) {
  // Generate JavaScript for moving forward or backwards.
  var distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'this.' + block.getFieldValue('DIRECTION') + '(' + distance + ', "' + block.id + '");\n';
};

Blockly.Blocks['mirobot_turn'] = {
  init: function() {
    var str = l(':turn-cmd');
    var tokens = tokenise(str);
    var DIRECTIONS = [[l(":left"), "left"], [l(":right"), "right"]]
    DIRECTIONS[0][0] += ' \u21BA';
    DIRECTIONS[1][0] += ' \u21BB';
    for(var i = 0; i< tokens.length; i++){
      if(tokens[i] === '[[ direction ]]'){
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(DIRECTIONS), "DIRECTION");
      }else if(tokens[i] === '[[ angle ]]'){
        this.appendValueInput("ANGLE")
          .setCheck("Number");
      }else{
        this.appendDummyInput().appendField(tokens[i]);
      }
    }
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['mirobot_turn'] = function(block) {
  // Generate JavaScript for turning left or right.
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'mirobot.' + block.getFieldValue('DIRECTION') + '(' + angle + ');\n';
};

Blockly.Mirobot['mirobot_turn'] = function(block) {
  // Generate JavaScript for turning left or right.
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'this.' + block.getFieldValue('DIRECTION') + '(' + angle + ', "' + block.id + '");\n';
};

Blockly.Blocks['mirobot_penup'] = {
  init: function() {
    this.appendDummyInput().appendField(l(':penup-cmd'));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['mirobot_penup'] = function(block) {
  // Generate JavaScript for pen up/down.
  return 'mirobot.penup();\n';
};

Blockly.Mirobot['mirobot_penup'] = function(block) {
  // Generate JavaScript for pen up/down.
  return 'this.penup("' + block.id + '");\n';
};

Blockly.Blocks['mirobot_pendown'] = {
  init: function() {
    this.appendDummyInput().appendField(l(':pendown-cmd'));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['mirobot_pendown'] = function(block) {
  // Generate JavaScript for pen up/down.
  return 'mirobot.pendown();\n';
};

Blockly.Mirobot['mirobot_pendown'] = function(block) {
  // Generate JavaScript for pen up/down.
  return 'this.pendown("' + block.id + '");\n';
};


Blockly.Blocks['mirobot_beep'] = {
  init: function() {
    var str = l(':beep-cmd');
    var tokens = tokenise(str);
    for(var i = 0; i< tokens.length; i++){
        if(tokens[i] === '[[ duration ]]'){
        this.appendValueInput("DURATION").setCheck("Number");
      }else{
        this.appendDummyInput().appendField(tokens[i]);
      }
    }
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['mirobot_beep'] = function(block) {
  // Generate JavaScript for beep.
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'this.beep(' + (value*1000) + ');\n';
};

Blockly.Mirobot['mirobot_beep'] = function(block) {
  // Generate JavaScript for beep.
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'this.beep(' + (value*1000) + ', "' + block.id + '");\n';
};
