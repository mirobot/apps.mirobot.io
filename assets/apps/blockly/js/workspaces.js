var WMManger = {};


WMManger.init=function(){
	if (!('localStorage' in window)){ //shouldn't happen.  just in case.
			var WorkspacesUIel=document.getElementById('WorkspacesUI');
			if(WorkspacesUIel!=null) WorkspacesUIel.style.display="none";
	}
	WMManger.LoadWorkspaceList();
}

window.addEventListener('load', WMManger.init);

WMManger.Save=function(){
//console.log('WMManger.Save');
	var wsnInput=document.getElementById('WorkspaceName');
	if(wsnInput==null) {
		alert("can't find the WorkspaceName textbox.  this shouldn't happen.  can't continue");
		return;
	}
	var WorkspaceNameValue=wsnInput.value;
	if(WorkspaceNameValue==""){
		alert("Please enter a name to save your workplace to in the textbox.");
		return;
	}
	if(window.localStorage[WMManger.WorkspaceNamespace() + WorkspaceNameValue]){
		if(confirm("Are you sure you want to save over your existing workspace named " + WorkspaceNameValue)==false) return;
	}
	
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    window.localStorage.setItem(WMManger.WorkspaceNamespace() + WorkspaceNameValue, Blockly.Xml.domToText(xml));
	alert(WorkspaceNameValue + " Saved");
	WMManger.LoadWorkspaceList();
}

WMManger.Load=function(){
//console.log('WMManger.Load');
	var WorkspaceNameValue=WMManger.WorkspaceListValue();
	if(WorkspaceNameValue==""){
		alert("Please select an existing workplace from the drop down list.");
		return;
	}
	
	//this is GREAT.  It appends the loaded workspace into the active workspace
	//without clearing it on purpose.
	//in this way, the programmer can build up libraries of functions one at a time,
	//then append them together into one master program later.
	//if this isn't the desired effect, the user can just "clear workspace" before loading.
	Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), Blockly.Xml.textToDom(window.localStorage[WMManger.WorkspaceNamespace() + WorkspaceNameValue]));
}

WMManger.Delete=function(){
//console.log('WMManger.Delete');
	var WorkspaceNameValue=WMManger.WorkspaceListValue();
	if(WorkspaceNameValue==""){
		alert("Please select an existing workplace from the drop down list.");
		return;
	}
    if(confirm("Are you sure you want to DELETE your existing workspace named " + WorkspaceNameValue)){
		localStorage.removeItem( WMManger.WorkspaceNamespace() + WorkspaceNameValue);
		WMManger.LoadWorkspaceList();
	}
}

WMManger.WorkspaceListValue=function(){
	var wsnInput=document.getElementById('WorkspaceList');
	if(wsnInput==null) {
		alert("can't find the Workspace list drop-down.  this shouldn't happen.  can't continue");
		return "";
	}
	return wsnInput.value;
}

WMManger.LoadWorkspaceList=function(){
	var wsnInput=document.getElementById('WorkspaceList');
	if(wsnInput==null) { return;}
	var url = window.location.href.split('#')[0];
	var namespace = WMManger.WorkspaceNamespace();
	
    while(wsnInput.options.length > 0){                
		wsnInput.remove(0);
	}
	for (var i=0; i<=localStorage.length-1; i++)  
    {  
		var key = localStorage.key(i);
		if(key.indexOf(namespace)==0){
			var option = document.createElement("option");
			option.text = key.substring(namespace.length);
			wsnInput.add(option);
		}
    }
	var WorkspacesUIel=document.getElementById('ExistingWorkspacesUI');
	if(WorkspacesUIel!=null) {
		if(wsnInput.options.length > 0){
			WorkspacesUIel.style.display="";
		}else{
			WorkspacesUIel.style.display="none";
		}	
	}
}

WMManger.WorkspaceNamespace=function(){
	return window.location.pathname + 'programs/';
}

WMManger.FileSave=function(){
	var wsnInput=document.getElementById('FileName');
	if(wsnInput==null) {
		alert("can't find the FileName textbox.  this shouldn't happen.  can't continue");
		return;
	}
	var FileNameValue=wsnInput.value;
	if(FileNameValue==""){
		alert("Please enter a file name to save your workplace to in the textbox.");
		return;
	}
	
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    
	var blob = new Blob([Blockly.Xml.domToPrettyText(xml)], {type: "text/plain;charset=utf-8"});
	saveAs(blob, FileNameValue + ".txt");
}

WMManger.FileLoad=function(){
	var fileInput = document.getElementById('fileInput');
	var file = fileInput.files[0];
	var textType = /text.*/;

	if (file.type.match(textType)) {
		var reader = new FileReader();

		reader.onload = function(e) {
			Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), Blockly.Xml.textToDom(reader.result));
		}

		reader.readAsText(file);	
	} else {
		alert("File not supported!");
	}
	
}