// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">un entorn visual de programació</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Vegeu el codi JavaScript generat.</span><span id="linkTooltip">Desa i enllaça als blocs.</span><span id="runTooltip">Executa el programa definit pels blocs de l\'àrea de treball.</span><span id="runProgram">Executa el programa</span><span id="resetProgram">Reinicialitza</span><span id="dialogOk">D\'acord</span><span id="dialogCancel">Cancel·la</span><span id="catLogic">Lògica</span><span id="catLoops">Bucles</span><span id="catMath">Matemàtiques</span><span id="catText">Text</span><span id="catLists">Llistes</span><span id="catColour">Color</span><span id="catVariables">Variables</span><span id="catProcedures">Procediments</span><span id="httpRequestError">Hi ha hagut un problema amb la sol·licitud.</span><span id="linkAlert">Comparteix els teus blocs amb aquest enllaç: %1</span><span id="hashError">Ho sentim, \'%1\' no es correspon amb cap fitxer desat de Blockly.</span><span id="xmlError">No s\'ha pogut carregar el teu fitxer desat.  Potser va ser creat amb una versió diferent de Blockly?</span><span id="listVariable">llista</span><span id="textVariable">text</span></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">D\'acord</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Mou la tortuga endavant o enrere segons la quantitat especificada.</span><span id="Turtle_moveForward">moure endavant</span><span id="Turtle_moveBackward">moure enrere</span><span id="Turtle_turnTooltip">Gira la tortuga cap a l\'esquerra o cap a la dreta el nombre especificat de graus.</span><span id="Turtle_turnRight">gira cap a la dreta</span><span id="Turtle_turnLeft">gira cap a l\'esquerra</span><span id="Turtle_widthTooltip">Canvia el gruix de la ploma.</span><span id="Turtle_setWidth">canvia el gruix a</span><span id="Turtle_colourTooltip">Canvia el color de la ploma.</span><span id="Turtle_setColour">canvia el color a</span><span id="Turtle_penTooltip">Aixeca o abaixa la ploma, per acabar o començar a dibuixar.</span><span id="Turtle_penUp">ploma amunt</span><span id="Turtle_penDown">ploma avall</span><span id="Turtle_turtleVisibilityTooltip">Fa que la tortuga (cercle i fletxa) sigui visible o invisible.</span><span id="Turtle_hideTurtle">amaga tortuga</span><span id="Turtle_showTurtle">mostra tortuga</span><span id="Turtle_printHelpUrl">https://ca.wikipedia.org/wiki/Impressió</span><span id="Turtle_printTooltip">Dibuixa text en la direcció de la tortuga a partir de la seva posició.</span><span id="Turtle_print">imprimir</span><span id="Turtle_fontHelpUrl">https://ca.wikipedia.org/wiki/Font_(tipografia)</span><span id="Turtle_fontTooltip">Canvia la font usada pel bloc d\'impressió.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">mida de lletra</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">negreta</span><span id="Turtle_fontItalic">cursiva</span><span id="Turtle_unloadWarning">Si abandona aquesta pàgina, perdrà tota la feina.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> <span data-l10n=":simulate-program">Simulate Program</span></button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> <span data-l10n=":reset-simulation">Reset Simulation</span></button></td></tr><tr><td><button id="codeButton" title="Vegeu el codi JavaScript generat."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21"><span data-l10n=":view-js-code">View JS Code</span></button></td><td style="text-align: right"><button id="runButton" class="primary" title="Fa que la tortuga faci el que diuen els blocs."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"><span data-l10n=":run-on-mirobot">Run on Mirobot</span></button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"><span data-l10n=":stop-mirobot">Stop Mirobot</span></button></td></tr></table><button class="secondary" onclick="Blockly.getMainWorkspace().clear()"><span data-l10n=":clear-program">Clear Program</span></button><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Mirobot"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Lògica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Bucles"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matemàtiques"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Llistes"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">llista</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">llista</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">llista</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">llista</field></block></value></block></category><category name="Variables" custom="VARIABLE"></category><category name="Procediments" custom="PROCEDURE"></category></xml>';
};
