const fetch = require('node-fetch');
 
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
 *          rejects the promise with ["error", "error"]
 * Returns the promise
 */
const getWeatherAndTimezone =  function (location){
    const options = {
        "New York": Promise.resolve(["nice weather", -14400]),
        "New York, 10278": Promise.resolve(["bad weather", -14400]),
        "London": Promise.resolve(["clear skies", 3600]),
        "": Promise.reject(["error","error"]),
        "fake": Promise.reject(["error","error"]),
    }
    return options[location];
 }
exports.getWeatherAndTimezone = getWeatherAndTimezone