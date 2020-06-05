// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); //Won't be stored


// Declaration types
// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// check for values
// console.log(set1.has(100)); //true
// console.log(set1.has(50 + 50)); //true
// console.log(set1.has({name: 'John'})); // False - not a primitive type

// Delete from set
// set1.delete(100);

// console.log(set1); //Set(3)

// ITERATING THROUGH SETS

// For..of
// for(let item of set1){ //set1.values set1.keys set1.entries
//     console.log(item); //list all items
// }

// ForEach loop
// set1.forEach((values) => {
//     console.log(value);
// })

// Convert set to array
// const setArr = Array.from(set1);
// console.log(setArr);