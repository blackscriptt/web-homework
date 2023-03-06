/* 
    Eee yeter dibine düştün :D
    - blackscriptt 
*/

const LIVE = document.querySelector('iframe');
function WebLive(value) {
    localStorage.setItem('webLink', value);
    console.log(value);
}

console.log(localStorage.getItem('webLink'));
LIVE.setAttribute('src', localStorage.getItem('webLink'));