const DARK = document.querySelector('#dark');
const LIGHT = document.querySelector('#light');
const HTML = document.querySelector('html');

DARK.addEventListener('click', () => {
    DARK.classList.add('hidden');
    HTML.classList.add('dark');
    LIGHT.classList.remove('hidden');
})

LIGHT.addEventListener('click', () => {
    LIGHT.classList.add('hidden');
    HTML.classList.remove('dark');
    DARK.classList.remove('hidden');
})