const {shuffleArray} = require('./utils')
const testingArr = [2, 3, 4, 5, 6]

describe('shuffleArray should', () => {
    test('array is the same length', () => {
        expect(shuffleArray(testingArr)).toHaveLength(5)
    })

    test('items have been shuffled', () => {
        let result = shuffleArray(testingArr);
        expect(result.join()).not.toEqual(testingArr.join())
    })
})