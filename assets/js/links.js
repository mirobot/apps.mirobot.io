var updateLinks = function(){
  [].forEach.call(document.links, function(l) {
    // Make the URL have index.html if running as a chrome app
    if('chrome' in window && 'storage' in window.chrome){
      if(l.href.slice(-1) === '/'){
        l.href += 'index.html';
      }
    }
    // Add the query for the language
    l.href += document.location.search;
    // Add the hash for configuring Mirobot    
    l.href += document.location.hash;
  });
}

document.addEventListener('DOMContentLoaded', updateLinks);
