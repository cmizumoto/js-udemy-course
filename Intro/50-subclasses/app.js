class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // call the parent class constructor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('Jon', 'Doe', '555-05555-55', 'Stamdard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());