const fetch = require('node-fetch');

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

const getTimeAndWeather = function (array){
    for(let location of array){
      const dataPromise =  Promise.resolve(getWeatherAndTimezone(location))
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
 * getTime takes in the timezone
 * return the time at that location 
 * It gets the current Date utcHours, utcMinutes, utcSeconds 
 * Declare and initiate timeInSeconds to the Hours * 3600 plus Minutes * 60 plus Seconds plus timezone
 * Convert timeInSeconds to hours, minutes, seconds 
 * return a string HH:MM:SS in 24hr format
 */
const getTime = function (timezone){

 }
exports.getTime = getTime
