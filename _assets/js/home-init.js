l10nMenu('l10n', baseLanguages);

if('chrome' in window && 'storage' in window.chrome){
  document.addEventListener("DOMContentLoaded", function(){
    var chr = document.querySelectorAll('.chromehide');
    for (var i=0; i<chr.length; i++){
      chr[i].classList.add('hidden');
    }
  });
}