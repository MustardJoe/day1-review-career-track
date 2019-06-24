const store = require('./store');

console.log(store.getState());
store.updateState('shoes', 50);
console.log(store.getState());