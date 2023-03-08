function ErrorShow(value) {
    const ERROR = document.querySelector('.error');
    
    if(value) {
        let counter = 6;
        ERROR.style.backgroundColor = 'green';
        ERROR.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Giriş başarılı. <span class="user_login"><b>${counter}</b></span> saniye sonra <b>yönlendirileceksiniz!</b></span>`;
        
        const USER_LOGIN = document.querySelector('.user_login');
        setInterval(() => {
            counter--;
            USER_LOGIN.innerHTML = `<b>${counter}</b>`;
        }, 1000);
    }

    ERROR.style.opacity = "1";
    setInterval(() => {
        ERROR.style.opacity = "0";
    }, 10000);
}



const NAME = document.querySelector('.form__item input[type="text"]');
const PASSWORD = document.querySelector('.form__item input[type="password"]');
function UserLogin() {

    console.log(NAME + " >> "+ PASSWORD);
    
    if( (NAME.value == 'admin') && (PASSWORD.value == '1234')  ) {
        console.log(true);
        ErrorShow(true);
        
        setInterval(() => {
            window.location.href = './svart-panel/index.html';
        }, 6000);

    } else {
        ErrorShow(false);
        console.log(false);
    }

    NAME.value = "";
    PASSWORD.value = "";
}