const heros = document.querySelectorAll('.hero__article');
console.log(heros);

heros.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(true);
        removeHerosActive();
        item.classList.add('active');
    })
})


function removeHerosActive() {
    heros.forEach((item) => {
        item.classList.remove('active');
    })
}


window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');    
    nav.classList.toggle('nav_fluid', window.scrollY > 100);

    const up = document.querySelector('.up');
    up.classList.toggle('d-block', window.scrollY>0);

})

window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    loader.style.display = "none";
})


function Search() {
    const navItems = document.querySelector('.nav__items');
    const navSearch = document.querySelector('.nav__search');

    navItems.classList.toggle('d-none');
    navSearch.classList.toggle('searchActive');
}


function announcementClose() {
    const announcement = document.querySelector('.announcement');
    announcement.style.display = "none";
}

const select = document.querySelector('#theme__select');
const HTML = document.querySelector('html');

if(localStorage.getItem('theme') == 'dark') {
        HTML.classList.remove('light');
        HTML.classList.add('dark');
        select.value = 'dark';
} else {
    HTML.classList.remove('dark');
    HTML.classList.add('light');
    select.value = 'light';
}



select.addEventListener('change', () => {
    // console.log(select.options[select.selectedIndex].text);

    if(select.value == 'dark') {
        console.log(`Theme: dark`);
        localStorage.setItem('theme', 'dark');
        HTML.classList.remove('light');
        HTML.classList.add('dark');
    }  else {
        console.log(`Theme: light`);
        localStorage.setItem('theme', 'light');
        HTML.classList.remove('dark');
        HTML.classList.add('light');
    }

})