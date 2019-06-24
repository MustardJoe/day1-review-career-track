const createDog = require('./index');

describe('dog create function', () => {
    //individual test
    it('returns a dog object', () => {
        const dog = createDog('spot', 5, '20lbs')
        expect(dog).toEqual({
            name: 'spot',
            age: 5,
            weight: '20lbs'
        });
    });
    it('might be another test here', () => {

    });
});