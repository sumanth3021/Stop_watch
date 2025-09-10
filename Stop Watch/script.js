let time = document.getElementById("time");

let sec = 0;
let min = 0;
let hr = 0;
let clock;
let is_time_running = false;

function startBtn(){
    if(is_time_running){
        return;
    }
    is_time_running = true;
    clock = setInterval(function(){
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
        }
        let hours;
        let minutes;
        let seconds;
        if (sec < 10){
            seconds = "0"+sec;
        }
        else{
            seconds = sec;
        }
        if (min < 10){
            minutes = "0"+min;
        }
        else{
            minutes = min;
        }
        if (hr < 10){
            hours = "0"+hr;
        }  
        else{
            hours = hr;
        }
        time.textContent = hours+":"+minutes+":"+seconds;
        sec++;
    },1000)
}
function stopBtn(){
    clearInterval(clock);
    is_time_running=false;
}
function resetBtn(){
    clearInterval(clock);
    sec = 0;
    min = 0;
    hr = 0;
    time.textContent = "00:00:00";
    is_time_running=false;
}