const stopWatchNum = document.querySelector('.num-container')

const obj = {
    milliSec:0,
    sec:0,
    min:0,
    hour:0
}

let stopWatchTimer;

function start(){
   stopWatchTimer = setInterval(function(){
       obj.milliSec++
       if(obj.milliSec === 100){
           obj.milliSec = 0
           obj.sec++

           if(obj.sec === 60){
               obj.sec = 0
               obj.min++
           }

           if(obj.min === 60){
               obj.min = 0;
               obj.hour++
           }
        }

           const timeResults = {
            hr:obj.hour<10 ?'0'+ obj.hour : obj.hour,
            minute:obj.min < 10 ? '0' + obj.min : obj.min,
            second:obj.sec < 10 ? '0' + obj.sec : obj.sec,
            ms:obj.milliSec < 10 ? '00' + obj.milliSec:obj.milliSec
   }
   stopWatchNum.innerHTML = `${timeResults.hr}:${timeResults.minute}:${timeResults.second}:${timeResults.ms}`
   },10)
}

function stop(){
    clearInterval(stopWatchTimer)
}

function reset(){
    stopWatchNum.innerHTML = `00:00:00:00`
    clearInterval(stopWatchTimer)
}