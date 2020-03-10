// People tend to use for loop when they know how many times it will loop
// And they use while, when the loop is undetermined.

// FOR LOOP

for (let i = 0; i < 5; i++) {
    if(i === 2){
        console.log('2 is a great number');
        // Continue orders the function to proceed to the next loop and skip things bellow it
        continue;
    }

    if(i === 4){
        console.log('Stop the loop');
        // break will stop the loop
        break;
    }
}

// WHILE LOOP

let i = 0;

while (i < 10) {
    console.log('Number ' + i);
    // Do not forget this i++ or else an infinite loop will occour
    i++;
}

//  DO WHILE LOOP
// In this loop, it will always run once, no matter what

let i = 100;

do {
    console.log('Number ' + i);
    // Same as before, do not forget i++ or the loop is infinite
    i++;
}
// this loop also needs the condition and it's declared below with while
while( i < 10);

// LOOP THROUGH AN ARRAY
// We could use for loop using array.length, but we have other methods that makes the code cleaner
cars = ['Ford', 'Mustang', 'Honda', 'Toyota'];

// FOR EACH
// For better understanding we usually name an array in plural and the element in singular so Cars and Car
cars.forEach(car => {
    console.log(car);
});

// MAP
// Map is almost like for each but it will return an array with the values

const users = [
    {id: 1, name: 'Miguel'},
    {id: 2, name: 'Nancy'},
    {id: 3, name: 'Julia'},
    {id: 4, name: 'Albert'}
]

// Note we are saving the result to an ID, also we are using singular to the element
const ids = users.map(function(user){
    return user.id;
})

// Result ids = [1, 2, 3, 4]

// FOR IN LOOP
// This loop is commonly used for Objects

const user = {
    firstName: 'Miguel',
    lastName: 'Joseph',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

// Result:
// firstName : Miguel
// lastName: Joseph
// age : 40