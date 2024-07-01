function getTime(){
    const currentTime=new Date()
    const timeinfo={
        day:currentTime.getUTCDate(),
        hour:currentTime.getUTCHours(),
        minutes:currentTime.getUTCMinutes(),
        seconds:currentTime.getUTCSeconds()
    }
    
    

    const daysOfTheWeek=["","Monday","Tusday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const Time=`${timeinfo.hour}:${timeinfo.minutes}:${timeinfo.seconds}`

    document.querySelector(`[data-testid="currentTimeUTC"]`).innerHTML=Time;
    document.querySelector(`[data-testid="currentDay"]`).innerHTML=daysOfTheWeek[timeinfo.day]
}
getTime()

setInterval(getTime,1000)