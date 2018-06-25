function $(id) {
	if (id.startsWith('[')) {
		return document.querySelector(id);
	} else {
		return document.getElementById(id);
	}
}

function addClass(element, className) {
	var classNames = element.getAttribute('class');
	if (classNames) {
		var classes = classNames.split(' ');
		var length = classes.length;
		for (var i = 0 ; i < length ; i++) {
			var clazz = classes[i];
			if (clazz == className) {
				return;
			}
		}
		var newClassNames = classNames.trim() + ' ' + className;
		element.className = newClassNames;
	} else {
		element.className = className;	
	}
}

function delClass(element, className) {
	var classNames = element.getAttribute('class');
	if (classNames) {
		var classes = classNames.split(' ');
		var length = classes.length;
		for (var i = 0 ; i < length ; i++) {
			var clazz = classes[i];
			if (clazz == className) {
				classes[i] = '';
				break;
			}
		}
		var newClassNames = classes.join(' ').trim();
		element.className = newClassNames;
	}
}

function hasClass(element, className) {
	var classNames = element.className;
	if (classNames) {
		var classes = classNames.split(' ');
		var length = classes.length;
		for (var i = 0 ; i < length ; i++) {
			var clazz = classes[i];
			if (clazz == className) {
				return true;
			}
		}
	}
	return false;
}

(function() {

	function initGlobals() {
	}

	function init() {
		initGlobals();
	}

	window.addEventListener('load', function() { init(); });

})();
