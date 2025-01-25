start.addEventListener("click",()=>{
    interval = setInterval(()=>{
        time++;
        seconds = time % 60;
        minutes = Math.floor(time / 60) % 60;
        hours = Math.floor(time / 3600);
        timer.innerText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    },1000)
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
})
reset.addEventListener("click",()=>{
    clearInterval(interval);
    time = 0;
    timer.innerText = "00:00:00";
})
gettime.addEventListener("click",()=>{
    gettimedata.innerHTML = `<p>Time: ${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}</p>`
    closetime.addEventListener("click",()=>{
    gettimedata.innerHTML = "";
})
})
