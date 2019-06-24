// function createDog(name, age, weight) {
//     return {
//         name,
//         age,
//         weight,
//     };
// }

// const dog = createDog('barney', 26, '300lbs');

// console.log(dog);

const createDog = (name, age, weight) => ({
    name,
    age, 
    weight,
});

const dog1 = createDog('ralph', 10, '200lbs');

console.log(dog1);

module.exports = createDog