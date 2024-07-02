function getTime(){
    const currentTime=new Date()
    const timeinfo={
        day:currentTime.getUTCDate(),
        hour:currentTime.getUTCHours(),
        minutes:currentTime.getUTCMinutes(),
        seconds:currentTime.getUTCSeconds()
    }
    
    // geting time AM Or PM

    function PmAm(){
        const options={hour: "numeric", minute: "numeric",second: "numeric", hour12:true };
        const timeString=currentTime.toLocaleTimeString('en-US', options)

        const amPm=timeString.slice(-2)
        return amPm
    }
    PmAm()

    const daysOfTheWeek=["","Monday","Tusday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const Time=`${timeinfo.hour}:${timeinfo.minutes}:${timeinfo.seconds} ${PmAm()}`

    document.querySelector(`[data-testid="currentTimeUTC"]`).innerHTML=Time;
    document.querySelector(`[data-testid="currentDay"]`).innerHTML=daysOfTheWeek[timeinfo.day]
}
getTime()

setInterval(getTime,1000)