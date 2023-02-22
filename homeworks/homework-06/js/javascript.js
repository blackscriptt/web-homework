const SIDEBAR = document.querySelector('#sidebar');

SIDEBAR.addEventListener('click', function(){
    const ASIDE_LEFT = document.querySelector('#aside__left');
    if(ASIDE_LEFT.style.display=='block')
        ASIDE_LEFT.style.display='none';
    else
        ASIDE_LEFT.style.display='block';
})