/**
 * getTime takes in the timezone and an optional date
 * return the time at that location 
 * If the timezone is a number, then
 *      It gets the current Date utcHours, utcMinutes, utcSeconds 
 *      Declares and initiate timeInSeconds to the Hours * 3600 plus Minutes * 60 plus Seconds plus timezone
 *      Converts timeInSeconds to hours, minutes, seconds 
 *      returns a string HH:MM:SS in 24hr format
 * Else it returns "error" 
 */
const getTime = function (timezone, date = new Date(Date.UTC(2020, 4, 2, 16,0,0))){
    if(typeof timezone === "number"){
        const utcHours = date.getUTCHours();
        const utcMinutes = date.getUTCMinutes();
        const utcSeconds = date.getUTCSeconds();
        let timeInSeconds = utcHours * 3600 + utcMinutes * 60 + utcSeconds + timezone
    
        let hours = Math.floor(timeInSeconds / 3600) 
        if(hours < 10) hours = `0${hours}`
        timeInSeconds = timeInSeconds % 3600
    
        let minutes = Math.floor(timeInSeconds / 60) 
        if(minutes < 10) minutes = `0${minutes}`
    
        let seconds = timeInSeconds % 60
        if(seconds < 10) seconds = `0${seconds}`
    
        let string = `${hours}:${minutes}:${seconds}`
        return string    
    }
    else return "error"
    
 }
exports.getTime = getTime
