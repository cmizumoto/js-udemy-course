// MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'Some string',
      key2 = {},
      key3 = function () {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map.get(key1), map.get(key2), map.get(key3)); // Value of key1 Value of key2 Value of key3

// // Get values
// console.log(map.size); // 3

// Iterating Maps

// Loop using for ..of
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`)
// }

// Iterate keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }

// Iterate Values only
// for (let value of map1.values()) {
//     console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`);
// });


// CONVERT TO ARRAYS

// Create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create an array of the value pairs
// const valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of the value pairs
const keyArr = Array.from(map1.keys());
console.log(keyArr);