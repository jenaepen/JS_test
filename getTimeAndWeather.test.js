const {getTimeAndWeather} = require("./getTimeAndWeather.js")
jest.mock('./getTime')
jest.mock('./getWeatherAndTimezone')
 
describe('Test getTimeAndWeather function', () => {
    afterEach(() => {    
        jest.clearAllMocks();
      });

    it('accept as array"', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather(["New York"])
        expect(consoleSpy).toHaveBeenCalledWith('weather: nice weather time: 12:00:00');
    });
    it('accept array with multiple input"', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather(["New York","New York, 10278","London","fake",""])
        expect(consoleSpy).toHaveBeenCalledWith('weather: nice weather time: 12:00:00');
        expect(consoleSpy).toHaveBeenCalledWith('weather: bad weather time: 12:00:00');
        expect(consoleSpy).toHaveBeenCalledWith('weather: clear skies time: 17:00:00');
    });
    it('does not console log if input is not an array"', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather("New York")
        expect(consoleSpy).not.toHaveBeenCalled();
    });
    it('expect no calls with an empty array as an input"', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather([])
        expect(consoleSpy).not.toHaveBeenCalled();
    });
})