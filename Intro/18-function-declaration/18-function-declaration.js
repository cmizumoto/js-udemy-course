// FUNCTION DECLARATION

// We can assign default values using =
function greet(firstName = 'Miguel', lastName = 'Joseph') {
    return 'Hello' + firstName + ' ' + lastName;
}

console.log(greet());
// result for default will be 'Hello Miguel Joseph'

// FUNCTIONS EXPRESSIONS
// Also possible to assign default values
const square = function(x = 3) {
    return x*x;
};

console.log(square());

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
// This type of function is already being called when declared
(function(name) {
    console.log('IIFE ran...');
})('Miguel');


// PROPERTY METHOD
const todo = {
    add: function() {
        console.log('Add todo...');
    }
}

todo.delete = function(){
    console.log('Delete todo...')
}

todo.add();