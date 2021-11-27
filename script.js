console.log('-------#4');

function getNumberLine(a, b) {
    if (a < b) {
        console.log(a);
        a += 1;
        getNumberLine(a, b);
    }  else if (a > b ) {
        console.log(a);
        a -= 1;
        getNumberLine(a, b);
    }  else {
        console.log(a);;
    }
}
getNumberLine(7, 3);

console.log('-------#5');

window.addEventListener('load', formatTime);
let clock = document.querySelector('.time');
let changeTimeBtn = document.querySelector('.change-time')
changeTimeBtn.innerText = 'Short Format';

changeTimeBtn.addEventListener('click', stateChange);

function stateChange(e){
    if (changeTimeBtn.innerText === 'Short Format') {
        changeTimeBtn.innerText = 'Long Format';
    } 
    else {
        changeTimeBtn.innerText = 'Short Format';
    }
}

function formatTime(e) {
    let time = new Date();

    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s  < 10) {
        s = '0' + s;
    }

    if (changeTimeBtn.innerText === 'Long Format') {
        clock.innerText = `${h}:${m}`;
    } 
    else {
        clock.innerText = `${h}:${m}:${s}`;
    }
}

setInterval(formatTime, 250);