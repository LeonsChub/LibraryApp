const uniqid = require('uniqid')

class Customer{
    constructor(name, phoneNumber, hourlyRate = 9){
        this.id = uniqid();
        this.name = name
        this.active = true;
        this.phoneNumber = phoneNumber;
        this.hourlyRate = hourlyRate;
    }

    set raise(rate){
        this.hourlyRate = rate;
    }

    fire(){
        this.active = false;
    }

    set setPhoneNumber(newNumber){
        this.phoneNumber = newNumber;
    }
}

module.exports = Customer;