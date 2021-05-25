var msec = 0;
var sec  = 5;
var minInput  = document.getElementById('mn');
var hourInput  = document.getElementById('hr');


var msechead  = document.getElementById('msec')
var sechead  = document.getElementById('sec')
var minhead  = document.getElementById('min')
var hourhead  = document.getElementById('hour')
var btn = document.getElementById('dis')

var interval;
function inputValue() {
    minhead.innerHTML = minInput.value -1
    hourhead.innerHTML = hourInput.value
sechead.innerHTML = 5
    btn.disabled = false
}

function timer(){
    msec++
    if(msec == 100){
        sec--
        sechead.innerHTML = sec
        msec = 0
    }
    else if(sec == 0){
        minhead.innerHTML--
        sec = 5
    }
    else if(minhead.innerHTML == 0){
        hourhead.innerHTML--
        minhead.innerHTML = 5

    }
    else if(hourhead.innerHTML < 0 ){
        reset()
    }

}


function start(){
    interval = setInterval(timer,10)
    btn.disabled = true
}

function paus(){
    clearInterval(interval)
    btn.disabled = false

}
function reset(){

    sec = 0;
    min = 0;
    hour = 0;
sechead.innerHTML= sec;
minhead.innerHTML= min;
hourhead.innerHTML = hour;
minInput.value = 0;
hourInput.value = 0
clearInterval(interval)

}
