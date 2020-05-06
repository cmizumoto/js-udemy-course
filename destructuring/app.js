// Destructuring Assigment

let a, b;

[a, b] = [100, 200];

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(a); // 100
// console.log(b); // 200

// console.log(rest); // [300, 400, 500]

({ a, b } = {a: 100, b: 200, c: 300, d: 400, e: 500})
({ a, b, ...rest } = {a: 100, b: 200, c: 300, d: 400, e: 500})

// console.log(a, b); // 100 200
// console.log(rest); // c: 300, d: 400, e: 500

//  Array Destructuring
// const people = ['Jim', 'Beth', 'Miek'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3); // Jim Beth Miek

// Parse Array returned from function
// function getPeople() {
//     return ['Jim', 'Beth', 'Miek'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3); // Jim Beth Miek

// Object Destructuring

const person = {
    name: 'John Doe',
    age: 33,
    city: 'Miami',
    gender: 'Male'
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city } = person;
console.log(name, age, city); 