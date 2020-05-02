const {getWeatherAndTimezone} = require("./getWeatherAndTimezone.js")
const {getTime} = require("./getTime.js")
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
 *     3a) console log "weather:" weather "time:" time Note: [weather,time] = ["error","error"]     
 */

const getTimeAndWeather = function (array){
  if(Array.isArray(array)){
    for(let location of array){
      const dataPromise = getWeatherAndTimezone(location)
      dataPromise
      .then( data => {
        const [weather, timezone] = data
        const time = getTime(timezone)
        console.log(`weather: ${weather} time: ${time}`)
      })
      .catch(data => {
        const [weather, time] = data
        console.log(`weather: ${weather} time: ${time}`)
      }) 
    }
  }  
 }
 exports.getTimeAndWeather= getTimeAndWeather;

const userInput = ["new york, 10278", "london"]

getTimeAndWeather(userInput)