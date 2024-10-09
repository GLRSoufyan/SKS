const button = document.getElementById('playButton');
const title = document.querySelector('h1');
const body = document.body;

button.addEventListener('click', () => {
    title.classList.add('fly-up');
    button.classList.add('fly-up');
    body.style.background = 'transparent';
});