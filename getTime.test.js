const {getTime} = require("./getTime.js")


describe('Test getTime function with New York timezone', () => {
    const input = -14400 
    const date = new Date(Date.UTC(2020, 4, 2, 16,0,0))
    let result = getTime(input, date)
    
    it('returns a string', () => {
        expect(typeof result).toBe("string")
    })
    it('input of May 2, 2020 16:00:00 returns 12:00:00',  () => {
        expect(result).toEqual("12:00:00")
    })
})

describe('Test getTime function with london timezone', () => {
    const input = 3600;
    const date = new Date(Date.UTC(2020, 4, 2, 16,0,0))
    let result = getTime(input, date)
    
    it('input of May 2, 2020 16:00:00 returns 17:00:00',  () => {
        expect(result).toEqual("17:00:00")
    })
})

describe('Test getTime function with error', () => {
    const input = "error";
    let result = getTime(input)
    it('returns a string', () => {
        expect(typeof result).toBe("string")
    })
    it('input of "error" returns error',  () => {
        expect(result).toEqual("error")
    })
})