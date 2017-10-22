// copy card id on click
const input = document.createElement('input');
document.body.appendChild(input);

document.addEventListener('click', (e) => {

	const elem = e.originalTarget;
	const isCardShortId = elem.classList.contains('card-short-id');

	if (isCardShortId) {
		e.stopImmediatePropagation();
		e.preventDefault();

		input.value = elem.textContent.replace('Nr. ', '#').replace(' - ', '');
		input.select();
		document.execCommand('Copy');
	}

}, true);

// format card id
(function () {
	const elems = document.querySelectorAll('.card-short-id');
	for (let elem of elems) {	
		var parentText = elem.parentNode.parentNode.parentNode.href
		var hashRegex = /\/c\/(\w*)\/\d+-.*/; 
		var results = hashRegex.exec(parentText)[1];

		// elem.textContent = elem.textContent.replace('Nr. ', '#');
		elem.textContent = results + ' - ';
	}
})()
