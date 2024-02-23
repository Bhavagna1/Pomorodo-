const startTime=document.getElementById("start");
const pauseTime=document.getElementById("pause");
const resetTime=document.getElementById("reset");
const Timer=document.getElementById("timer");
let interval;
let time=1500;
function updateTimer() 
{
    let minutes = Math.floor(time/60);
    let seconds=time%60;
    let finalTime=`${minutes.toString().padStart(2,"0")}:
                  ${seconds.toString().padStart(2,"0")}`;
    Timer.innerHTML=finalTime;
}
function startInterval() {
    interval=setInterval(()=>{
        time--;
    updateTimer();
    if(time===0) {
        clearInterval();
        alert("Times UP");
        time = 1500;
    }
}, 1000);

}

function stopInterval() {
clearInterval(interval);
}

function resetTimer() {
    time=1500;
    updateTimer();
}

    
startTime.addEventListener("click",startInterval);
pauseTime.addEventListener("click",stopInterval);
resetTime.addEventListener("click",resetTimer);