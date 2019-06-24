const store = require('./store');

describe('store', () => {
    it('gets the god damn thing', () => {
        const state = store.getState();

        expect(state).toEqual({
            shirts: 5,
            pants: 10,
            toys: 100,
            shoes: 1,
            apples: 9
        });   
    });

    it('need sleep update object', () => {
        store.updateState('shoes', 100);
        const state = store.getState();

        expect(state).toEqual({
            shirts: 5,
            pants: 10,
            toys: 100,
            shoes: 100,
            apples: 9
        })
    });
});