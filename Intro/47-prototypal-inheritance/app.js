// Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`    
}

const person1 = new Person('Miguel', 'Joseph');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    // Function that allows to call another function in the current context.
    // In this case we call the person function above
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.cosntructor = Customer;

// Create a customer
const customer1 = new Customer('Tom', 'Smith', '34738248302', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`   
}

console.log(customer1.greeting());

