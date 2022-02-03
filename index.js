let mins = document.querySelector('.mins');
let secs = document.querySelector('.secs');


let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let time = 00;
let intervalId;

function incrementTimer(){
    time++;
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    mins.textContent = zeroAdding(minutes);
    secs.textContent = zeroAdding(seconds);
}

function startTimer(){
    intervalId = setInterval(incrementTimer, 1000);
    stop.style.display = 'inline-block';
    start.style.display = 'none';
};

function stopTimer(){
    clearInterval(intervalId);
    stop.style.display = 'none';
    start.style.display = 'inline-block';

}

function resetTimer(){
    stopTimer();
    time = 0;
    secs.textContent = "00";
    mins.textContent = '00';
}


function zeroAdding(number){
    return number < 10 ? `0${number}` : `${number}`;
}


start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

stop.style.display = 'none';
