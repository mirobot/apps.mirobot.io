// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">sjónrænt forritunarumhverfi</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Sjá forritið sem JavaScript kóða.</span><span id="linkTooltip">Vista og tengja við kubba.</span><span id="runTooltip">Keyra forritið sem kubbarnir á vinnusvæðinu mynda.</span><span id="runProgram">Keyra forritið</span><span id="resetProgram">Byrja aftur</span><span id="dialogOk">Í lagi</span><span id="dialogCancel">Hætta við</span><span id="catLogic">Rökvísi</span><span id="catLoops">Lykkjur</span><span id="catMath">Reikningur</span><span id="catText">Texti</span><span id="catLists">Listar</span><span id="catColour">Litir</span><span id="catVariables">Breytur</span><span id="catProcedures">Stefjur</span><span id="httpRequestError">Það kom upp vandamál með beiðnina.</span><span id="linkAlert">Deildu kubbunum þínum með þessari krækju:</span><span id="hashError">Því miður, \'%1\' passar ekki við neitt vistað forrit.</span><span id="xmlError">Gat ekki hlaðið vistuðu skrána þína. Var hún kannske búin til í annarri útgáfu af Blockly?</span><span id="listVariable">listi</span><span id="textVariable">texti</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Í lagi</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Færir skjaldbökuna fram eða aftur um tiltekna vegalengd.</span><span id="Turtle_moveForward">færa fram um</span><span id="Turtle_moveBackward">færa aftur um</span><span id="Turtle_turnTooltip">Snýr skjaldbökunni til vinstri eða hægri um tiltekinn gráðufjölda.</span><span id="Turtle_turnRight">snúa til hægri um</span><span id="Turtle_turnLeft">snúa til vinstri um</span><span id="Turtle_widthTooltip">Breytir breidd pennans.</span><span id="Turtle_setWidth">stilla breidd á</span><span id="Turtle_colourTooltip">Breytir lit pennans.</span><span id="Turtle_setColour">stilla lit á</span><span id="Turtle_penTooltip">Lyftir pennanum til að hætta að teikna eða setur hann niður til að byrja.</span><span id="Turtle_penUp">penni upp</span><span id="Turtle_penDown">penni niður</span><span id="Turtle_turtleVisibilityTooltip">Gerir skjaldbökuna (hringinn og píluna) sýnilega eða ósýnilega.</span><span id="Turtle_hideTurtle">fela skjaldböku</span><span id="Turtle_showTurtle">sýna skjaldböku</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Teiknar texta þar sem skjaldbakan er og í stefnu hennar.</span><span id="Turtle_print">prenta</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Stillir leturgerðina sem prentað er með.</span><span id="Turtle_font">leturgerð</span><span id="Turtle_fontSize">leturstærð</span><span id="Turtle_fontNormal">venjulegt</span><span id="Turtle_fontBold">feitletrað</span><span id="Turtle_fontItalic">skáletrað</span><span id="Turtle_unloadWarning">Ef þú ferð af þessari síðu tapar þú því sem þú hefur gert.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> <span data-l10n=":simulate-program">Simulate Program</span></button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> <span data-l10n=":reset-simulation">Reset Simulation</span></button></td></tr><tr><td><button id="codeButton" title="Sjá forritið sem JavaScript kóða."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21"><span data-l10n=":view-js-code">View JS Code</span></button></td><td style="text-align: right"><button id="runButton" class="primary" title="Lætur skjaldbökuna gera það sem kubbarnir segja."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"><span data-l10n=":run-on-mirobot">Run on Mirobot</span></button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"><span data-l10n=":stop-mirobot">Stop Mirobot</span></button></td></tr></table><button class="secondary" onclick="Blockly.getMainWorkspace().clear()"><span data-l10n=":clear-program">Clear Program</span></button><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Mirobot"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Rökvísi"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Lykkjur"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Reikningur"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Listar"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">listi</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">listi</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">listi</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">listi</field></block></value></block></category><category name="Breytur" custom="VARIABLE"></category><category name="Stefjur" custom="PROCEDURE"></category></xml>';
};
