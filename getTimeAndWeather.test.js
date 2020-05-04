const {getTimeAndWeather} = require("./getTimeAndWeather.js")
jest.mock('./getTime')
jest.mock('./getWeatherAndTimezone')
 
describe('Test getTimeAndWeather function', () => {
    afterEach(() => {    
        jest.clearAllMocks();
      });

    it('accept as array"',  async () => {
        const consoleSpy = jest.spyOn(console, "log");
        await getTimeAndWeather(["New York"])
        expect(consoleSpy).toHaveBeenCalledWith('Input: New York\nOutput: weather: nice weather time: 12:00:00\n');
    });
    it('accept array with multiple input', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather(["New York","New York, 10278","London"]);
        expect(consoleSpy).toHaveBeenCalledWith('Input: New York\nOutput: weather: nice weather time: 12:00:00\n');
        expect(consoleSpy).toHaveBeenCalledWith('Input: New York, 10278\nOutput: weather: bad weather time: 12:00:00\n');
        expect(consoleSpy).toHaveBeenCalledWith('Input: London\nOutput: weather: clear skies time: 17:00:00\n');
    });
    it('A error is provided for invalid inputs', async () => {
        try{
          getTimeAndWeather(["","fake"]);  
        } 
        catch(e){
            expect(e).toEqual('Input: \nOutput: weather: error time: error\n')
        }
    });
    it('does not console log if input is not an array', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather("New York")
        expect(consoleSpy).not.toHaveBeenCalled();
    });
    it('expect no calls with an empty array as an input', async () => {
        const consoleSpy = jest.spyOn(console, "log"); 
        await getTimeAndWeather([])
        expect(consoleSpy).not.toHaveBeenCalled();
    });
})