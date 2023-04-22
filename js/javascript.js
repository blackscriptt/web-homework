$(document).ready(function() {

    // loading - [START]
    $('#loading .loading__first').animate({ opacity: '1' })
      .delay(7000)
      .animate({ opacity: '0' },
      function () {
        $('#loading').animate({ opacity: '1' })
          .delay(1500)
          .animate({ opacity: '0' }, function() { $(this).css({ display: 'none' }) });
      });
    // loading - [END^]
    
    
    
    /* dark - light mode - [START] */
    const DARK_MODE = document.querySelector('.dark__mode');
    const LIGHT_MODE = document.querySelector('.light__mode');
    const BODY = document.querySelector('body');

    /* dark - light mode aktif mi? - [START] */
    if(localStorage.getItem('mode') == 'dark___mode'){
        BODY.classList.add('dark___mode');

        DARK_MODE.style.display='none';
        LIGHT_MODE.style.display='block';
    }
    else
        BODY.classList.remove('dark___mode');
    console.log(localStorage.getItem('mode'));
    /* dark - light mode aktif mi? - [END^] */

    DARK_MODE.addEventListener('click', function(){
        this.style.display='none';
        LIGHT_MODE.style.display='block';
        BODY.classList.add('dark___mode');
        localStorage.setItem('mode', 'dark___mode');
    })

    LIGHT_MODE.addEventListener('click', function(){
        this.style.display='none';
        DARK_MODE.style.display='block';
        BODY.classList.remove('dark___mode');
        localStorage.setItem('mode', 'light___mode');
    })
    /* dark - light mode - [END^] */

    /* aside - [START] */
    const ASIDE_BARS = document.querySelector('.aside__bars');
    const ASIDE = document.querySelector('aside');
    const ASIDE_DARK = document.querySelector('.aside__dark');

    ASIDE_BARS.addEventListener('click', function(){
        ASIDE.classList.add('aside__active');
        ASIDE_DARK.classList.toggle('display__block'); // Arka planı koyulaştırıyor
    })

    /* aside_close - [START] */
    const ASIDE_CLOSE = document.querySelector('.close__aside');

    ASIDE_CLOSE.addEventListener('click', function(){
        ASIDE.classList.remove('aside__active');

        ASIDE_DARK.classList.toggle('display__block');
    })
    /* aside_close - [END^] */

    /* aside - [END^] */

    /* yukari - [START] */
    window.addEventListener('scroll', function(){
        const YUKARI = document.querySelector('.yukari');
        if(this.scrollY>0)
            YUKARI.style.display='block';
        else
            YUKARI.style.display='none';
    })
    /* yukari - [END^] */
});





