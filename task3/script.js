let redBtn = document.querySelector('#red');
let blueBtn = document.querySelector('#blue');
let greenBtn = document.querySelector('#green');
let yellowBtn = document.querySelector('#yellow');
let body = document.querySelector('body');
redBtn.addEventListener('click', function() {
	body.style.backgroundColor = 'red';
})
blueBtn.addEventListener('click', function() {
	body.style.backgroundColor = 'blue';
})
greenBtn.addEventListener('click', function() {
	body.style.backgroundColor = 'green';
})
yellowBtn.addEventListener('click', function() {
	body.style.backgroundColor = 'yellow';
})