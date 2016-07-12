window.addEventListener('message', function(event) {
  if(event.data.command && event.data.id){
    switch(event.data.command){
      case "getItem":
        chrome.storage.local.get(event.data.params, function(res){
          if(event.source) event.source.postMessage({output: res[event.data.params], id: event.data.id}, "*");
        });
        break;
      case "setItem":
        console.log("saving item");
        chrome.storage.local.set(event.data.params, function(res){
          if(event.source) event.source.postMessage({output: null, id: event.data.id}, "*");
        });
        break;
      case "removeItem":
        chrome.storage.local.remove(event.data.params, function(res){
          if(event.source) event.source.postMessage({output: null, id: event.data.id}, "*");
        });
        break;
      case "length":
        chrome.storage.local.get(null, function(res){
          if(event.source) event.source.postMessage({output: Object.keys(res).length, id: event.data.id}, "*");
        });
        break;
      case "keys":
        chrome.storage.local.get(null, function(res){
          if(event.source){
          event.source.postMessage({output: Object.keys(res), id: event.data.id}, "*");
          }
        });
        break;
      default:
        console.log("Error: unknown command");
    }
  }
});

