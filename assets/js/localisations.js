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
  ":100mm-grid": "100mm grid",

  // For snap!
  'Move forward by %n mm':'Move forward by %n mm',
  'Move back by %n mm':'Move back by %n mm',
  'Beep for %n seconds':'Beep for %n seconds',
  'Stop':'Stop',
  'Bump sensor':'Bump sensor',
  'Line sensor':'Line sensor',
  'When I bump into something':'When I bump into something',
  'When the line sensor changes':'When the line sensor changes'
}

trans.bn = {
  langName: "বাংলা",
  flag: 'bd'
}
trans.ca = {
  langName: "Català",
  flag: 'cat'
}
trans.cs = {
  langName: "Česky",
  flag: 'cz'
}
trans.de = {
  langName: "Deutsch",
  flag: 'de'
}
trans.da = {
  langName: "Dansk",
  flag: 'dk'
}
trans.el = {
  langName: "Ελληνικά",
  flag: 'gr'
}
trans.eo = {
  langName: "Esperanto",
  flag: 'eu'
}
trans.es = {
  langName: "Espa\u00F1ol",
  flag: 'es'
}
trans.fi = {
  langName: "Suomi",
  flag: 'fi'
}
trans.fr = {
  langName: "Fran\u00E7ais",
  flag: 'fr'
}
trans.it = {
  langName: "Italiano",
  flag: 'it'
}
trans['ja_HIRA'] = {
  langName: "にほんご",
  flag: 'jp'
}
trans.ja = {
  langName: "日本語",
  flag: 'jp'
}
trans.kn = {
  langName: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",
  flag: 'in'
}
trans.ko = {
  langName: "한국어",
  flag: 'kr'
}
trans.nl = {
  langName: "Nederlands",
  flag: 'nl'
}
trans.no = {
  langName: "Norsk",
  flag: 'no'
}
trans.pl = {
  langName: "Polski",
  flag: 'pl'
}
trans['pt_BR'] = {
  langName: "Português do Brasil",
  flag: 'br'
}
trans.pt = {
  langName: "Português",
  flag: 'pt'
}
trans.ru = {
  langName: "Русский",
  flag: 'ru'
}
trans.si = {
  langName: "Sloven\u0161\u010Dina",
  flag: 'si'
}
trans.sv = {
  langName: "Svenska",
  flag: 'se'
}
trans.tw = {
  langName: "繁體中文",
  flag: 'cn'
}
trans.zh = {
  langName: "简体中文",
  flag: 'cn'
}
trans['en-US'] = {
  langName: "American English",
  flag: 'us'
}

// Useful for double checking that the translation has been made
for(var lang in trans){
  var debug = true;
  if(typeof debug === 'undefined') break;
  if(trans.hasOwnProperty(lang)){
    for(var item in trans[lang]){
      if(trans[lang].hasOwnProperty(item)){
        if(item !== 'flag') trans[lang][item] += '-' + lang;
      }
    }
  }
}

String.toLocaleString(trans);