// strings
const name1 = 'Jeff'; // String
const name2 = new String('Jeff'); // Object

if(name1 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}

// name1 - Yes
// name2 - No

// Number
const num1 = 5; //Number
const num2 = new Number(5); //Object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y){
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(1,1));

// Objects
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');