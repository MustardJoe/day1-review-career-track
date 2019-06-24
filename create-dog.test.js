const createDog = require ('./index');

describe('creates a dog using create-dog.js', () => {
    it('returns a dog object using the new function', () => {
        const dog = createDog('spotZZ', 5, '20lbs')
        expect(dog).toEqual({
            name: 'spotZZ',
            age: 5,
            weight: '20lbs'
        });
    });

})