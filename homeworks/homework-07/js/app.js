/* global variables - [START] */
const LOADER = document.querySelector('.loading');
const HEROS = document.querySelectorAll('.hero__article');
const NAV = document.querySelector('nav');
const SELECT = document.querySelector('#theme__select');
const HTML = document.querySelector('html');
/* global variables - [END^] */



/* function - [START] */
function Search() {
    const navItems = document.querySelector('.nav__items');
    const navSearch = document.querySelector('.nav__search');

    navItems.classList.toggle('d-none');
    navSearch.classList.toggle('searchActive');
}

function AnnouncementClose() {
    const announcement = document.querySelector('.announcement');
    announcement.style.display = "none";
}

function RemoveHerosActive() {
    HEROS.forEach((item) => {
        item.classList.remove('active');
    });
}

function LoaderActive() {
    LOADER.style.display = "flex";
    setInterval(() => {
        LOADER.style.display = "none";
    }, 1600);
}

function Theme(value) {
    LoaderActive();
    console.log(`Theme: ${value}`);

    HTML.classList.remove('light');
    NAV.classList.remove('navbar-light');
    HTML.classList.remove('dark');
    NAV.classList.remove('navbar-dark');

    localStorage.setItem('theme', value);
    HTML.classList.add(value);
    SELECT.value = value;

    if(value == 'dark') NAV.classList.add('navbar-dark');
    else NAV.classList.add('navbar-light');
}
/* function - [END^] */



/* laod event - [START] */
window.addEventListener('load', () => {
    LOADER.style.display = "none";
});
/* laod event - [END^] */


/* heros - [START] */
console.log(HEROS);
HEROS.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(`Heros: ` + true);
        RemoveHerosActive();
        item.classList.add('active');
    })
});
/* heros - [END^] */


/* scroll event - [START] */
window.addEventListener('scroll', () => {
    NAV.classList.toggle('nav_fluid', window.scrollY > 100);

    const UP = document.querySelector('.up');
    UP.classList.toggle('d-block', window.scrollY>0);
});
/* scroll event - [END^] */


/* theme - [START] */
let howTheme = ( localStorage.getItem('theme') ) ? localStorage.getItem('theme') : 'light' ;
Theme( howTheme );
SELECT.addEventListener('change', () => {
    // console.log(select.options[select.selectedIndex].text);
    Theme(SELECT.value);
});
/* theme - [END^] */