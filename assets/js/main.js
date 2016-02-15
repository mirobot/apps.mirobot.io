var MainMenu = function(el){
  var timer;
  
  var toggleMenu = function(e){
    el.classList.toggle('show');
    e.preventDefault();
    return false;
  }

  var hideMenu = function(e){
    el.classList.remove('show');
    if(e) e.preventDefault();
    return false;
  }  

  var handleKeyboard = function(e){
    if(e.keyCode === 27){
      hideMenu();
      e.preventDefault();
      return false;
    }
  }
  
  el.addEventListener('mouseup', toggleMenu);
  el.querySelector('.wrapper').addEventListener('mouseup', function(e){
    e.stopPropagation();
  });
  el.addEventListener('mouseleave', function(){
    timer = window.setTimeout(hideMenu, 500);
  });
  el.addEventListener('mouseenter', function(){
    if(timer){
      window.clearTimeout(timer);
      timer = undefined;
    }
  });
  window.addEventListener("keydown", function(e){ handleKeyboard(e);}, false);
}


/*
  Update the links so that they preserve the language and mirobot config
*/
var updateLinks = function(){
  [].forEach.call(document.links, function(l) {
    if(!l.href.startsWith('http')) return;
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
