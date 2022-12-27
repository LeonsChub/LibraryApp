const uniqid = require('uniqid')

class Book{
    constructor(author, name){
        this.id = uniqid();
        this.author = author
        this.name = name;
        this.rented = false;
    }

    get isRented(){
        return this.rented;
    }

    rent(){
        this.rented = true;
    }

    return(){
        this.rented = false;
    }
}

module.exports = Book;