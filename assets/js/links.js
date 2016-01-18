var updateLinks = function(){
	[].forEach.call(document.links, function(l) {
		if(l.href.slice(-1) === '/'){
			l.href = l.href + 'index.html';
		}
		l.href = l.href + document.location.hash;
	});
}

document.addEventListener('DOMContentLoaded', updateLinks);
