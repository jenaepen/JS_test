/**
 * getTimeAndWeather takes in an array of location (as a String)
 * console logs weather and time 
 * It iterates over the array while doing the following:
 *  1) invokes getWeatherAndTimezone with a location 
 *  2) declare and initialize weather and timezone from getWeatherAndTimezone
 *  3) invokes getTime with timezone
 *  4) declare and initialize time from timezone
 *  5) prints out "weather:" weather "time:" time
 */

 function getTimeAndWeather(array){
    for(let location of array){
       const [weather, timezone] = getWeatherAndTimezone(location)
       const time = getTime(timezone)
       console.log("weather: " + weather + "time: " +time)
    }
 }

 /**
 * getWeatherAndTimezone takes in an location
 * returns the weather (as a String) and timezone (as a number) within an array
 * It declares and initialize url with the location 
 * Fetches url by using open weather's api 
 * Then destructing the weather.description and timezone from the returned data object
 * returning weather and timezone within an array
 */
 function getWeatherAndTimezone(location){

 }

/**
 * getTime takes in the timezone
 * return the time at that location 
 * It gets the current Date utcHours, utcMinutes, utcSeconds 
 * Declare and initiate timeInSeconds to the Hours * 3600 plus Minutes * 60 plus Seconds plus timezone
 * Convert timeInSeconds to hours, minutes, seconds 
 * return a string HH:MM:SS in 24hr format
 */
 function getTime(timezone){

 }