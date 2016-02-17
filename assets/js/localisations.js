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
  ":show-help": "Show help",
  ":hide-help": "Hide help",
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

  // For the main page
  ":blockly": "Blockly",
  ":blockly-desc": "This app allows much more advanced programming techniques to be used to control Mirobot",
  ":javascript": "Javascript",
  ":javascript-desc": "Program Mirobot using the full power of Javascript directly from your browser",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "This is the built-in simple drag-and-drop app used to program Mirobot",
  ":point-click": "Point & Click",
  ":point-click-desc": "Click to control Mirobot and see the program it would use",
  ":remote": "Remote Control",
  ":remote-desc": "Use buttons to directly remote control your Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap! is very similar to Scratch and is good for using the addon sensors in code",

  // For snap!
  'Move forward by %n mm':'Move forward by %n mm',
  'Move back by %n mm':'Move back by %n mm',
  'Beep for %n seconds':'Beep for %n seconds',
  'Stop':'Stop',
  'Bump sensor':'Bump sensor',
  'Line sensor':'Line sensor',
  'When I bump into something':'When I bump into something',
  'When the line sensor changes':'When the line sensor changes',

  // For Blockly
  ':run-on-mirobot': "Run on Mirobot",
  ':stop-mirobot': "Stop Mirobot",
  ':simulate-program': "Simulate Program",
  ':reset-simulation': "Reset Simulation",
  ':view-js-code': "View JS Code",
  ':clear-program': "Clear Program"
}

trans.ar = {
  langName: "العربية",
  flag: 'none'
}
trans.fa = {
  langName: "فارسی",
  flag: 'none'
}
trans.hi = {
  langName: "हिन्दी",
  flag: 'in'
}
trans.hrx = {
  langName: "Hunsrik",
  flag: 'br'
}
trans.hu = {
  langName: "Magyar",
  flag: 'hu'
}
trans.is = {
  langName: "Íslenska",
  flag: 'is'
}
trans.ms = {
  langName: "Bahasa Melayu",
  flag: 'none'
}
trans.ro = {
  langName: "Română",
  flag: 'ro'
}
trans.tr = {
  langName: "Türkçe",
  flag: 'tr'
}
trans.uk = {
  langName: "Українська",
  flag: 'ua'
}
trans.vi = {
  langName: "Tiếng Việt",
  flag: 'vn'
}
trans.bn = {
  langName: "বাংলা",
  flag: 'bd'
}
trans.ca = {
  langName: "Català",
  flag: 'cat',
  ":save": "Desa",
  ":save-as": "Desa com a",
  ":new-prog": "Nou programa",
  ":delete-prog": "Esborra el programa",
  ":download": "Descarrega el programa actual",
  ":upload": "Puja un programa",
  ":open": "Obre un programa",
  ":choose-name": "Tria el nom del arxiu",
  ":unsaved": "Tens canvis sense desar que es perdran. Vols continuar?",
  ":exists": "Error, ja existeix un arxiu amb aquest nom",
  ":single-file": "Selecciona un arxiu per pujar, si us plau",
  ":sure": "Estàs segur que desitjes eliminar el programa",
  ":permanent": "Aquesta acció no es podrà desfer",
  ":address": "Introdueix l'adreça del teu Mirobot aquí",
  ":connect": "Connecta't",
  ":connected": "Connectat",
  ":move-cmd": "Mou-te {{ distance }} mm cap {{ direction }}",
  ":penup-cmd": "Aixeca el llapis",
  ":pendown-cmd": "Baixa el llapis",
  ":turn-cmd": "Gira {{ angle }} graus cap a {{ direction }}",
  ":repeat-cmd": "Repeteix {{ count }} vegades",
  ":beep-cmd": "Fes un so durant {{ duration }} segons",
  ":forward": "endavant",
  ":back": "endarrera",
  ":left": "l'esquerra",
  ":right": "la dreta",
  ":start-collision": "Inicia la Detecció de Col·lisions",
  ":start-following": "Inicia el Seguiment de Línies",
  ":toolbox": "Caixa d'eines",
  ":program": "Programa",
  ":drag": "Arrossega les funcions de l'esquerra cap aquí",
  ":run": "Executa",
  ":pause": "Pausa",
  ":stop": "Atura",
  ":clear": "Esborra",
  ":show-help": "Mostra l'ajuda",
  ":hide-help": "Amaga l'ajuda",
  ":js-help-title": "Controlant el Mirobot amb Javascript",
  ":js-help-intro": "Comença a controlar el teu Mirobot amb aquestes senzilles instruccions:",
  ":js-forward-help": "mou-te 100 mm cap endavant",
  ":js-back-help": "mou-te 100 mm cap endarrera",
  ":js-left-help": "gira 90 graus a l'esquerra",
  ":js-right-help": "gira 90 graus a la dreta",
  ":js-penup-help": "aixeca el llapis",
  ":js-pendown-help": "baixa el llapis per dibuixar",
  ":js-beep-help": "fes que soni",
  ":hide-js": "Amaga Javascript",
  ":show-js": "Mostra Javascript",
  ":100mm-grid": "Quadrícula de 100mm",
  ":blockly": "Blockly",
  ":blockly-desc": "Aquesta aplicació permet controlar el teu Mirobot fent servir tècniques de programació avançades",
  ":javascript": "Javascript",
  ":javascript-desc": "Programa Mirobot fent servir tot el potencial de Javascript des del teu navegador",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "Aplicació bàsica per programar el teu Mirobot arrossegant instruccions",
  ":point-click": "Apunta i clica",
  ":point-click-desc": "Clica per controlar el teu Mirobot i mira quin programa faria servir",
  ":remote": "Control Remot",
  ":remote-desc": "Fes servir botons per controlar el teu Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap! és molt semblant a Scratch i és perfecte per fer servir sensors en el teu codi",
  "Move forward by %n mm": "Mou-te %n mm endavant",
  "Move back by %n mm": "Mou-te %n mm endarrera",
  "Beep for %n seconds": "Pita durant %n segons",
  "Stop": "Atura't",
  "Bump sensor": "Sensor de xoc",
  "Line sensor": "Sendor de línies",
  "When I bump into something": "Quan xoqui amb alguna cosa",
  "When the line sensor changes": "Quan el sensor de linies canvii",
  ":run-on-mirobot": "Executa al Mirobot",
  ":stop-mirobot": "Atura el Mirobot",
  ":simulate-program": "Simula el Programa",
  ":reset-simulation": "Reinicia la Simulació",
  ":view-js-code": "Mira el codi JS",
  ":clear-program": "Esborra el Programa"
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
  flag: 'es',
  ":save": "Guardar",
  ":save-as": "Guardar como",
  ":new-prog": "Nuevo programa",
  ":delete-prog": "Borrar programa",
  ":download": "Descargar programa actual",
  ":upload": "Subir programa",
  ":open": "Abrir programa",
  ":choose-name": "Escoge el nombre del fichero",
  ":unsaved": "Has hecho cambios que se perderán. ¿Deseas continuar?",
  ":exists": "Error, ya existe un fichero con ese nombre",
  ":single-file": "Po favor, escoger un único fichero a subir",
  ":sure": "¿Estás seguro que deseas borrar el programa?",
  ":permanent": "Esta acción es permanente y no se pude deshacer",
  ":address": "Introduce la dirección de tu Mirobot aquí",
  ":connect": "Conectar",
  ":connected": "Conectado",
  ":move-cmd": "Mover {{ distance }} mm hacia {{ direction }}",
  ":penup-cmd": "Levantar el lápiz",
  ":pendown-cmd": "Bajar el lápiz",
  ":turn-cmd": "Girar {{ angle}} grados hacia la {{ direction }}",
  ":repeat-cmd": "Repetir {{ count }} veces",
  ":beep-cmd": "Pitar durante {{ duration }} segundos",
  ":forward": "adelante",
  ":back": "atrás",
  ":left": "izquierda",
  ":right": "derecha",
  ":start-collision": "Iniciar la Detección de Colisiones",
  ":start-following": "Iniciar el Seguimiento de Líneas",
  ":toolbox": "Caja de herramientas",
  ":program": "Programa",
  ":drag": "Arrastra funciones de la izquierda hacía aquí",
  ":run": "Ejecutar",
  ":pause": "Pausar",
  ":stop": "Parar",
  ":clear": "Limpiar",
  ":show-help": "Mostrar ayuda",
  ":hide-help": "Ocultar ayuda",
  ":js-help-title": "Controlando Mirobot con Javascript",
  ":js-help-intro": "Utiliza estas sencillas instruccions para empezar a controlar Mirobot:",
  ":js-forward-help": "mover 100mm hacia adelante",
  ":js-back-help": "mover 100mm hacia atrás",
  ":js-left-help": "girar 90 grados hacia la izquierda",
  ":js-right-help": "girar 90 grados hacia la derecha",
  ":js-penup-help": "levantar el lápiz",
  ":js-pendown-help": "bajar el lápiz para dibujar",
  ":js-beep-help": "haz que pite",
  ":hide-js": "Ocultar Javascript",
  ":show-js": "Mostrar Javascript",
  ":100mm-grid": "Cuadrícula de 100mm",
  ":blockly": "Blockly",
  ":blockly-desc": "Esta applicación permite controlar Mirobot usando técnicas de programación más avanzadas",
  ":javascript": "Javascript",
  ":javascript-desc": "Programa Mirobot usando todo el potencial de Javascript directamente desde tu navegador",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "Aplicación básica para programar Mirobot arrastrando instrucciones",
  ":point-click": "Apunta y pulsa",
  ":point-click-desc": "Pulsa para controlar Mirobot y ver que código utilizaría",
  ":remote": "Control Remoto",
  ":remote-desc": "Usa un mando para controlar directamente los movimientos de tu Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap! es muy parecido a Scratch y permite usar los datos de los sensores en el código",
  "Move forward by %n mm": "Mover %n mm hacia adelante",
  "Move back by %n mm": "Mover %n mm hacia atrás",
  "Beep for %n seconds": "Pitar durante %n segundos",
  "Stop": "Parar",
  "Bump sensor": "Sensor de choque",
  "Line sensor": "Sensor de líneas",
  "When I bump into something": "Cuando choco con algo",
  "When the line sensor changes": "Cuando cambia el sensor de líneas",
  ":run-on-mirobot": "Ejecutar en Mirobot",
  ":stop-mirobot": "Parar Mirobot",
  ":simulate-program": "Simular programa",
  ":reset-simulation": "Reiniciar la simulación",
  ":view-js-code": "Ver código JS",
  ":clear-program": "Borrar programa"
}
trans.fi = {
  langName: "Suomi",
  flag: 'fi'
}
trans.fr = {
  langName: "Fran\u00E7ais",
  flag: 'fr',
  ":save": "Sauvegarder ",
  ":save-as": "Sauvegarder sous",
  ":new-prog": "Nouveau programme",
  ":delete-prog": "Supprimer programme",
  ":download": "Télécharger programme en cours",
  ":upload": "Uploader programme",
  ":open": "Ouvrir programme",
  ":choose-name": "Choisir le nom de fichier",
  ":unsaved": "Vous avez des modifications non sauvegardées qui seront perdues. Voulez-vous continuer ?",
  ":exists": "Erreur, ce nom de fichier existe déjà",
  ":single-file": "Merci de sélectionner un seul fichier à uploader",
  ":sure": "Êtes-vous certain de vouloir supprimer ce programme ?",
  ":permanent": "Ceci est permanent et ne peut être annulé",
  ":address": "Entrez l'adresse pour votre Mirobot ici",
  ":connect": "Connecter",
  ":connected": "Connecté",
  ":move-cmd": "Déplacer {{ direction }} de {{ distance }} mm",
  ":penup-cmd": "Lever le crayon",
  ":pendown-cmd": "Baisser le crayon",
  ":turn-cmd": "Tourner {{ direction }} de {{ angle }} degrés",
  ":repeat-cmd": "Répéter {{ nombre }} fois",
  ":beep-cmd": "Biper pendant {{ durée }} secondes",
  ":forward": "avant",
  ":back": "arrière",
  ":left": "gauche",
  ":right": "droite",
  ":start-collision": "Démarrer la détection de collision",
  ":start-following": "Démarrer le suivi de lignes",
  ":toolbox": "Boîte à outils",
  ":program": "Programme",
  ":drag": "Faire glisser les fonctions à gauche vers ici!",
  ":run": "Lancer",
  ":pause": "Pause",
  ":stop": "Arrêter",
  ":clear": "Effacer",
  ":show-help": "Afficher l'aide",
  ":hide-help": "Masquer l'aide",
  ":js-help-title": "Contrôler Mirobot avec Javascript",
  ":js-help-intro": "Utilisez ces commandes de base pour commencer à contrôler Mirobot",
  ":js-forward-help": "déplacer de 100 mm en avant",
  ":js-back-help": "déplacer de 100 mm en arrière",
  ":js-left-help": "tourner de 90 degrés à gauche",
  ":js-right-help": "tourner de 90 degrés à droite",
  ":js-penup-help": "lever le crayon ",
  ":js-pendown-help": "baisser le crayon pour dessiner",
  ":js-beep-help": "faire biper",
  ":hide-js": "Masquer Javascript",
  ":show-js": "Afficher Javascript",
  ":100mm-grid": "Grille de 100mm",
  ":blockly": "Blockly",
  ":blockly-desc": "Cette application permet d'utiliser des techniques de programmation plus avancées pour le contrôle de Mirobot",
  ":javascript": "Javascript",
  ":javascript-desc": "Programme Mirobot utilisant toute la puissance de Javascript directement depuis votre navigateur",
  ":mirobot-ui": "Mirobot IU (Interface Utilisateur)",
  ":mirobot-ui-desc": "Ceci est une application intégrée pour programmer Mirobot à l'aide de la simple fonctionalité glisser-déposer ",
  ":point-click": "Pointer et Cliquer",
  ":point-click-desc": "Cliquer pour contrôler Mirobot et visualiser le programme utilisé",
  ":remote": "Contrôle à distance",
  ":remote-desc": "Utiliser les boutons pour contrôler directement Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap! est très similaire à Scratch et est utile pour se servir des modules de détection dans le code",
  "Move forward by %n mm": "Déplacer vers l'avant de %n mm",
  "Move back by %n mm": "Déplacer vers l'arrière de %n mm",
  "Beep for %n seconds": "Biper pendant %n secondes",
  "Stop": "Arrêter",
  "Bump sensor": "Détecteur de choc",
  "Line sensor": "Détecteur de ligne",
  "When I bump into something": "Lorsque je heurte quelque chose",
  "When the line sensor changes": "Lorsque le détecteur de ligne change",
  ":run-on-mirobot": "Lancer Mirobot",
  ":stop-mirobot": "Arrêter Mirobot",
  ":simulate-program": "Simuler Programme",
  ":reset-simulation": "Réinitialiser la simulation",
  ":view-js-code": "Afficher Code JS",
  ":clear-program": "Effacer Programme"
}
trans.it = {
  langName: "Italiano",
  flag: 'it'
}
trans['ja-hira'] = {
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
  flag: 'nl',
  ":save": "Opslaan",
  ":save-as": "Opslaan als",
  ":new-prog": "Nieuw programma",
  ":delete-prog": "Verwijder programma",
  ":download": "huidige programma downloaden",
  ":upload": "programma uploaden",
  ":open": "programma openen",
  ":choose-name": "Kies de bestandsnaam",
  ":unsaved": "Je hebt onopgeslagen wijzigingen die verloren zullen gaan. Wil je door gaan?",
  ":exists": "Error: Bestand bestaat al met deze naam",
  ":single-file": "Selecteer een enkel bestand op te uploaden",
  ":sure": "Weet je zeker dat je het programma wilt verwijderen?",
  ":permanent": "Dit is definitief en kan niet ongedaan gemaakt worden",
  ":address": "Vul het adres voor je Mirobot hier in",
  ":connect": "Verbinden",
  ":connected": "Verbonden",
  ":move-cmd": "Beweeg {{ distance }} mm naar {{ direction }}",
  ":penup-cmd": "Pen omhoog",
  ":pendown-cmd": "Pen omlaag",
  ":turn-cmd": "Draai {{ angle }} graden naar {{ direction }}",
  ":repeat-cmd": "Herhaal {{ count }} keer",
  ":beep-cmd": "Beep gedurende {{ duration }} seconden",
  ":forward": "voren",
  ":back": "achteren",
  ":left": "links",
  ":right": "rechts",
  ":start-collision": "Start bots-detectie",
  ":start-following": "Start lijn-volgen",
  ":toolbox": "Toolbox",
  ":program": "Programma",
  ":drag": "Sleep functies van links naar hier!",
  ":run": "Uitvoeren",
  ":pause": "Pauze",
  ":stop": "Stop",
  ":clear": "Leeg",
  ":show-help": "Toon help",
  ":hide-help": "Hide help",
  ":js-help-title": "Mirobot met Javascript besturen",
  ":js-help-intro": "Gebruik deze eenvoudige commando's om te beginnen met het besturen van Mirobot:",
  ":js-forward-help": "beweeg 100 mm naar voren",
  ":js-back-help": "beweeg 100 mm naar achteren",
  ":js-left-help": "draai 90 graden naar links",
  ":js-right-help": "draai 90 graden naar rechts",
  ":js-penup-help": "til de pen op",
  ":js-pendown-help": "breng de pen omlaag om te tekenen",
  ":js-beep-help": "maak een geluid",
  ":hide-js": "Verberg Javascript",
  ":show-js": "Toon Javascript",
  ":100mm-grid": "100mm raster",
  ":blockly": "blokkerig",
  ":blockly-desc": "Deze app staat het toe geavanceerdere programmeer technieken te gebruiken om de Mirobot te besturen",
  ":javascript": "Javascript",
  ":javascript-desc": "Programmeer Mirobot nu rechtstreeks vanuit je browser met alle mogelijkheden van Javascript",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "Dit is de ingebouwde eenvoudige sleep-en-plaats app om te Mirobot te programmeren",
  ":point-click": "Aanwijzgen & Klikken",
  ":point-click-desc": "Klik om Mirobot te besturen en te zien welk programma het gebruikt",
  ":remote": "Afstandsbediening",
  ":remote-desc": "Gebruik de knoppen om je Mirobot direct op afstand te besturen",
  ":snap": "Snap!",
  ":snap-desc": "Snap! lijkt veel op Scratch en is goed om de extra sensors toe te voegen in de code",
  "Move forward by %n mm": "Beweeg %n mm naar voren",
  "Move back by %n mm": "Beweeg %n mm naar achteren",
  "Beep for %n seconds": "Beep gedurende %n seconden",
  "Stop": "Stop",
  "Bump sensor": "Bots sensor",
  "Line sensor": "Lijn sensor",
  "When I bump into something": "Als ik ergens tegenaan kom",
  "When the line sensor changes": "Als de lijn sensor verandert",
  ":run-on-mirobot": "Uitvoeren op Mirobot",
  ":stop-mirobot": "Stop Mirobot",
  ":simulate-program": "Simuleer Programma",
  ":reset-simulation": "Reset Simulatie",
  ":view-js-code": "Bekijk JS Code",
  ":clear-program": "Verwijder programma"
}
trans.no = {
  langName: "Norsk",
  flag: 'no',
  ":save": "Lagre",
  ":save-as": "Lagre som",
  ":new-prog": "Nytt program",
  ":delete-prog": "Slett program",
  ":download": "Last ned nåværende program",
  ":upload": "Last opp program",
  ":open": "Åpne program",
  ":choose-name": "Velg filnavn",
  ":unsaved": "Du har ulagrede endringer som vil gå tapt. Ønsker du å fortsette?",
  ":exists": "Feil, en fil med samme navn eksisterer allerede",
  ":single-file": "Vennligst velg en enkelt fil for opplasting",
  ":sure": "Er du sikker på at du ønsker å slette programmet",
  ":permanent": "Endringen er permanent og kan ikke tilbakestilles",
  ":address": "Skriv inn adressen til din Mirobot her",
  ":connect": "Koble til",
  ":connected": "Koblet til",
  ":move-cmd": "Flytt {{ distance }} mm {{ direction }}",
  ":penup-cmd": "Penn opp",
  ":pendown-cmd": "Penn ned",
  ":turn-cmd": "Snu {{ angle }} grader {{ direction }}",
  ":repeat-cmd": "Gjenta {{ count }} ganger",
  ":beep-cmd": "Pip i {{ duration }} sekunder",
  ":forward": "fremover",
  ":back": "bakover",
  ":left": "mot venstre",
  ":right": "mot høyre",
  ":start-collision": "Start Kollisjons-deteksjon",
  ":start-following": "Start Linje-følging",
  ":toolbox": "Verktøykasse",
  ":program": "Program",
  ":drag": "Trekk funksjoner fra venstre side hit!",
  ":run": "Kjør",
  ":pause": "Pause",
  ":stop": "Stopp",
  ":clear": "Slett",
  ":show-help": "Vis hjelp",
  ":hide-help": "Skjul hjelp",
  ":js-help-title": "Styr Mirobot med Javascript",
  ":js-help-intro": "Bruk disse enkle kommandoene for å styre Mirobot:",
  ":js-forward-help": "flytt 100 mm fremover",
  ":js-back-help": "flytt 100 mm bakover",
  ":js-left-help": "Snu 90 grader mot venstre",
  ":js-right-help": "Snu 90 grader mot høyre",
  ":js-penup-help": "løft pennen opp",
  ":js-pendown-help": "senk pennen for å tegne",
  ":js-beep-help": "få den til å pipe",
  ":hide-js": "Gjem Javascript",
  ":show-js": "Vis Javascript",
  ":100mm-grid": "100 mm rutemønster",
  ":blockly": "Blockly",
  ":blockly-desc": "Denne appen tillater mer avanserte programmeringsteknikker for å styre Mirobot",
  ":javascript": "Javascript",
  ":javascript-desc": "Programmér Mirobot med full kapasitet fra Javascript direkte i nettleseren",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "Dette er den innebygde enkle dra-og-slipp appen for å programmere Mirobot",
  ":point-click": "Pek og Klikk",
  ":point-click-desc": "Klikk for å styre Mirobot og se hvilket program den vil bruke",
  ":remote": "Fjernkontroll",
  ":remote-desc": "Bruk knapper for å fjernstyre Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap! er veldig likt Scratch, og fungerer bra til å benytte sensorene i koden",
  "Move forward by %n mm": "Flytt %n mm fremover",
  "Move back by %n mm": "Flytt %n mm bakover",
  "Beep for %n seconds": "Pip i %n sekunder",
  "Stop": "Stopp",
  "Bump sensor": "Støtsensor",
  "Line sensor": "Linjesensor",
  "When I bump into something": "Når jeg støter borti noe",
  "When the line sensor changes": "Når linjesensoren endres",
  ":run-on-mirobot": "Kjør på Mirobot",
  ":stop-mirobot": "Stopp Mirobot",
  ":simulate-program": "Simulér Program",
  ":reset-simulation": "Nullstill Simulering",
  ":view-js-code": "Vis JS-kode",
  ":clear-program": "Slett Program"
}
trans.pl = {
  langName: "Polski",
  flag: 'pl',
  ":save": "Zapisz",
  ":save-as": "Zapisz jako",
  ":new-prog": "Nowy program",
  ":delete-prog": "Usuń program",
  ":download": "Pobierz bieżący program",
  ":upload": "Wczytaj program",
  ":open": "Otwórz program",
  ":choose-name": "Wpisz nazwę pliku",
  ":unsaved": "Masz niezapisane zmiany, które zostaną utracone. Czy na pewno chcesz kontynuować?",
  ":exists": "Błąd, plik o takiej nazwie już istnieje",
  ":single-file": "Wybierz plik do wczytania",
  ":sure": "Czy na pewno chcesz usunąć program?",
  ":permanent": "Zmiany są trwałe i nie można ich cofnąć",
  ":address": "Wpisz adres IP swojego robota Mirobot",
  ":connect": "Łączenie",
  ":connected": "Połączono",
  ":move-cmd": "Przesuń {{w kierunku}} o {{ile}} mm",
  ":penup-cmd": "Podnieś pisak",
  ":pendown-cmd": "Opuść pisak",
  ":turn-cmd": "Obróć {w stronę}} o {{ile}} stopni",
  ":repeat-cmd": "Powtórz {{ile}} raz(-y)",
  ":beep-cmd": "Zagraj przez {{ ile}} sekund(-ę)",
  ":forward": "do przodu",
  ":back": "do tyłu",
  ":left": "w lewo",
  ":right": "w prawo",
  ":start-collision": "Rozpocznij wykrywanie przeszkód",
  ":start-following": "Rozpocznij wykrywanie linii",
  ":toolbox": "Przybornik",
  ":program": "Program",
  ":drag": "Przeciągnij funkcje z lewej strony w to miejsce",
  ":run": "Uruchom",
  ":pause": "Pauza",
  ":stop": "Zatrzymaj",
  ":clear": "Wyczyść",
  ":show-help": "Pokaż pomoc",
  ":hide-help": "Ukryj pomoc",
  ":js-help-title": "Kontroluj robota Mirobot z użyciem języka Javascript",
  ":js-help-intro": "Użyj prostych poleceń, by kontrolować robota Mirobot",
  ":js-forward-help": "przesuń 100 mm do przodu",
  ":js-back-help": "przesuń 100 mm do tyłu",
  ":js-left-help": "obroć o 90 stopni w lewo",
  ":js-right-help": "obroć o 90 stopni w prawo",
  ":js-penup-help": "podnieś pisak",
  ":js-pendown-help": "opuść pisak, by rysować",
  ":js-beep-help": "spraw, by robot wydał dźwięk",
  ":hide-js": "Ukryj kod Javascript",
  ":show-js": "Pokaż kod Javascript",
  ":100mm-grid": "Siatka 100 mm",
  ":blockly": "Bloczki",
  ":blockly-desc": "Ta aplikacja umożliwia bardziej zaawansowane techniki programowania do sterowania robotem Mirobot",
  ":javascript": "Javascript",
  ":javascript-desc": "Programuj robota Mirobot używając pełnej mocy JavaScript bezpośrednio w przeglądarce",
  ":mirobot-ui": "Mirobot UI",
  ":mirobot-ui-desc": "Jest to domyślna aplikacja do programowania robota Mirobot metodą przeciągnij i upuść",
  ":point-click": "Od punktu do punktu",
  ":point-click-desc": "KIlkaj, by kontrolować ruch robota i obserwuj rezultat na ekranie",
  ":remote": "Zdalne sterowanie",
  ":remote-desc": "Użyj przycisków, by sterować robotem Mirobot",
  ":snap": "Snap!",
  ":snap-desc": "Snap1 jest bardzo podobny do Scratcha i jest dobry do wykorzystania czujników w kodzie",
  "Move forward by %n mm": "Przesuń do przodu o %n mm",
  "Move back by %n mm": "Przesuń do tyłu o %n mm",
  "Beep for %n seconds": "Zagraj przez %n sekund(-ę)",
  "Stop": "Zatrzymaj",
  "Bump sensor": "Czujnik przeszkód",
  "Line sensor": "Czujnik linii",
  "When I bump into something": "Kiedy z czymś się zderzy",
  "When the line sensor changes": "Kiedy zmienia się stan czujnika linii",
  ":run-on-mirobot": "Uruchom robota",
  ":stop-mirobot": "Zatrzymaj robota",
  ":simulate-program": "Symuluj program",
  ":reset-simulation": "Resetuj symulację",
  ":view-js-code": "Pokaż kod JS",
  ":clear-program": "Wyczyśc program"
}
trans['pt-br'] = {
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
trans['zh-hans'] = {
  langName: "簡體中文",
  flag: 'cn'
}
trans['zh-hant'] = {
  langName: "正體中文",
  flag: 'cn'
}
trans['en-US'] = {
  langName: "American English",
  flag: 'us'
}

// Useful for double checking that the translation has been made
for(var lang in trans){
  //var debug = true;
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