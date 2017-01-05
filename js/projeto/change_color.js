var trs = document.getElementsByTagName("tr");

function readArray(array) {
	var i = 0;
	var position = trs.length - 1;

	for (i=0; i<=position; i++) {
		changeColor(array[i]);
	}
}

function changeColor(element) {
	element.addEventListener("mouseover", function() {
		element.setAttribute("bgcolor", "silver");
	});
	element.addEventListener("mouseout", function() {
		element.setAttribute("bgcolor", "white");
	});
}

readArray(trs);
