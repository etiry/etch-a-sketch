// script.js

const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	container.appendChild(div);
}

divs = container.querySelectorAll('div');
divs.forEach(div => div.classList.add('square'));

container.addEventListener('mouseover', (event) => \
	event.target.style.backgroundColor = 'black');