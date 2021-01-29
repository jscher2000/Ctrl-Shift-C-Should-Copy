/* Intercept and check keydown events for Ctrl+Shift+C */

document.body.addEventListener('keydown', function(evt){
	if (evt.ctrlKey && evt.shiftKey && evt.key == "C"){
		// Copy the selection to the clipboard
		document.execCommand('copy');
		// Throw away this event and don't do the default stuff
		evt.stopPropagation();
		evt.preventDefault();
	}
}, false);

/* Intercept and check keyup events for Ctrl+Shift+C */

document.body.addEventListener('keyup', function(evt){
	if (evt.ctrlKey && evt.shiftKey && evt.key == "C"){
		// Throw away this event and don't do the default stuff
		evt.stopPropagation();
		evt.preventDefault();
	}
}, false);
