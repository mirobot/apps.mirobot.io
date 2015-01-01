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
	if(window.localStorage[WorkspaceNameValue]){
		if(confirm("Are you sure you want to save over your existing workspace named " + WorkspaceNameValue)==false) return;
	}
	
	var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    window.localStorage.setItem(WorkspaceNameValue, Blockly.Xml.domToText(xml));
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
	Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), Blockly.Xml.textToDom(window.localStorage[WorkspaceNameValue]));
}

WMManger.Delete=function(){
//console.log('WMManger.Delete');
	var WorkspaceNameValue=WMManger.WorkspaceListValue();
	if(WorkspaceNameValue==""){
		alert("Please select an existing workplace from the drop down list.");
		return;
	}
    if(confirm("Are you sure you want to DELETE your existing workspace named " + WorkspaceNameValue)){
		localStorage.removeItem(WorkspaceNameValue);
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
	var url = window.location.href.split('#')[0];
	var wsnInput=document.getElementById('WorkspaceList');
	if(wsnInput==null) { return;}
    while(wsnInput.options.length > 0){                
		wsnInput.remove(0);
	}
	for (var i=0; i<=localStorage.length-1; i++)  
    {  
	
		var option = document.createElement("option");
		option.text = localStorage.key(i);
		if(url!=option.text) wsnInput.add(option);
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