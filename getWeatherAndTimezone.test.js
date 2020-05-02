const {getWeatherAndTimezone} = require("./getWeatherAndTimezone.js")


describe('Test getWeatherAndTimezone function with a valid input', () => {
    const input = "New York"
    let result = getWeatherAndTimezone(input)
    it('returns an array', () => {
        result
        .then(data =>
            expect(Array.isArray(data)).toBe(true))
        .catch()
    })
    it('returns an array with two values',  () => {
        result
        .then(data =>
            expect(data.length).toEqual(2))
        .catch()
    })
    it('first return item within the array to be type String', () => {
        result
        .then(data =>
            expect(typeof data[0]).toEqual("string"))
        .catch()
    })
    it('second return item within the array to be type Number', () => {
        result
        .then(data =>
            expect(typeof data[1]).toEqual("number"))
        .catch()
    })
})

describe('Test getWeatherAndTimezone function with an invalid input', () => {
    const errorInput = "null"
    let errorResult = getWeatherAndTimezone(errorInput)

    it('returns an array', () => {
        errorResult
        .then()
        .catch(data=>
             expect(Array.isArray(data)).toBe(true)
        )
    })
      it('returns an array with two values', () => {
        errorResult
        .then()
        .catch(data=>
            expect(data.length).toEqual(2)
        )
      })
      it('first return item within the array to be error',  () => {
        errorResult
        .then()
        .catch(data=>
            expect(data[0]).toEqual("error")
        )
      })
      it('second return item within the array to be error', () => {
        errorResult
        .then()
        .catch(data=>
            expect(data[1]).toEqual("error")
        )
      })

  })
