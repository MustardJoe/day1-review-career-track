const createDog = require('./create-dog');

const newDog = createDog(process.argv[2], process.argv[3], process.argv[4]);

// console.log(process.argv);
console.log(newDog);