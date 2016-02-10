var trans = {}

// English base translations
trans.en = {
  langName: "English",
  flag: 'gb',
  ":save": "Save",
  ':save-as': "Save as",
  ":new-prog": "New program",
  ":delete-prog": "Delete program",
  ":download": "Download current program",
  ":upload": "Upload program",
  ":open": "Open program",
  ":choose-name": "Choose the file name",
  ":unsaved": "You have unsaved changes which will be lost. Do you want to continue?",
  ":exists": "Error, file already exists with this name",
  ":single-file": "Please select a single file to upload",
  ":sure": "Are you sure you want to delete program",
  ":permanent": "This is permanent and cannot be undone",
  ":address": "Enter the address for your Mirobot here",
  ":connect": "Connect",
  ":connected": "Connected",
  ":move-cmd": "Move {{ direction }} by {{ distance }} mm",
  ":penup-cmd": "Pen up",
  ":pendown-cmd": "Pen down",
  ":turn-cmd": "Turn {{ direction }} by {{ angle }} degrees",
  ":repeat-cmd": "Repeat {{ count }} times",
  ":beep-cmd": "Beep for {{ duration }} seconds",
  ":forward": "forward",
  ":back": "back",
  ":left": "left",
  ":right": "right",
  ":start-collision": "Start Collision Detection",
  ":start-following": "Start Following Lines",
  ":toolbox": "Toolbox",
  ":program": "Program",
  ":drag": "Drag functions from the left over here!",
  ":run": "Run",
  ":pause": "Pause",
  ":stop": "Stop",
  ":clear": "Clear",
  ":js-help-title": "Controlling Mirobot with Javascript",
  ":js-help-intro": "Use these simple commands to get started controlling Mirobot:",
  ":js-forward-help": "move 100 mm forward",
  ":js-back-help": "move 100mm back",
  ":js-left-help": "turn 90 degrees to the left",
  ":js-right-help": "turn 90 degrees to the right",
  ":js-penup-help": "lift the pen up",
  ":js-pendown-help": "lower the pen to draw",
  ":js-beep-help": "make it beep",
  ":hide-js": "Hide Javascript",
  ":show-js": "Show Javascript",
  ":100mm-grid": "100mm grid"
}

for(var item in trans.en){
  //var debug = true;
  if(typeof debug === 'undefined') break;
  if(item !== 'flag') trans.en[item] += '-';
}

/*
trans['en-US'] = {
  langName: "American English",
  flag: 'us'
}

trans.de = {
  langName: "Deutsch",
  flag: 'de'
}
*/

String.toLocaleString(trans);