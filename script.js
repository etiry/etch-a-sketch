// script.js

const container = document.querySelector('#container');

function createBoard(sideSize) {

	for (let i = 0; i < (sideSize * sideSize); i++) {
		const div = document.createElement('div');
		container.appendChild(div);
		divs = container.querySelectorAll('div');
		divs.forEach(div => div.classList.add('square'));
		divs.forEach(div => div.style.flexBasis = 
			`calc(${(100 / sideSize)}% - 4px`);
	}

}

createBoard(30);

container.addEventListener('mouseover', (event) => 
	event.target.style.backgroundColor = 'black');

const button = document.querySelector('button');

button.addEventListener('click', resetBoard);

function resetBoard() {

	let boardSize = prompt('How many squares per side?');

	if (boardSize > 100) {
		alert('Please enter a number less than or equal to 100');
		boardSize = prompt('How many squares per side?');
	} else {
		divs = container.querySelectorAll('div');
		divs.forEach(div => div.parentNode.removeChild(div));
		createBoard(boardSize);
	}

}