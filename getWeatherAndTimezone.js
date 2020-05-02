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