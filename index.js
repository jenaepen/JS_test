const fetch = require('node-fetch');

/**
 * getTimeAndWeather takes in an array of location (as a String)
 * console logs weather and time 
 * It iterates over the array while doing the following:
 *  1) declare and initialize dataPromise to be the returned promise from 
 *     invoking getWeatherAndTimezone with a location 
 *  2) if the promise resolves then
 *     2a) declare and initialize weather and timezone from the return data
 *     2b) declare and initialize time to the returned value from 
 *         invoking getTime with timezone
 *     2c) console log "weather:" weather "time:" time
 *  3) if the promise is rejected then
 *     3a) console log "weather:" data[0] "time:" data[1] Note: data = ["error","error"]     
 */

const getTimeAndWeather = function (array){
    for(let location of array){
      const dataPromise = getWeatherAndTimezone(location)
      dataPromise
      .then( data => {
        const [weather, timezone] = data
        const time = getTime(timezone)
        console.log("weather: " + weather + "time: " +time)
      })
      .catch(data => {
          console.log("weather: " + data[0] + "time: " + data[1])
        }) 
    }
 }
 exports.getTimeAndWeather= getTimeAndWeather;
 /**
 * getWeatherAndTimezone takes in an location
 * returns the weather (as a String) and timezone (as a number) within an array
 * It declares and initialize url with the location 
 * It declares and initialize promise to a new promise 
 *      which fetches the url by using open weather's api 
 *      If the return data.cod from the fetch is 200 (status 200),
 *      Then 
 *          declares and initialize weather to data.weather[0].description 
 *          declares and initialize timezone to data.timezone
 *          then resolves the promise with [weather, timezone]
 *      Else
 *          rejects the promise with [null, null]
 * Returns the promise
 */
const getWeatherAndTimezone =  function (location){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=81fd3a25df3903c95746b8c7ffb9c8c4`
    const promise = new Promise((resolve, reject)=>{
        fetch(url)
        .then(result=> result.json())
        .then(data => {
            if(Number(data.cod) === 200){
                const weather =  data.weather[0].description;
                const timezone = data.timezone;
                resolve([weather,timezone]);
            }
            else reject(["error","error"])
        })
        .catch(error => {
            reject(["error","error"])
        })
    } )
    return promise;
 }
exports.getWeatherAndTimezone = getWeatherAndTimezone

/**
 * getTime takes in the timezone and an optional date
 * return the time at that location 
 * It gets the current Date utcHours, utcMinutes, utcSeconds 
 * Declare and initiate timeInSeconds to the Hours * 3600 plus Minutes * 60 plus Seconds plus timezone
 * Convert timeInSeconds to hours, minutes, seconds 
 * return a string HH:MM:SS in 24hr format
 */
const getTime = function (timezone, date = new Date()){
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
exports.getTime = getTime
