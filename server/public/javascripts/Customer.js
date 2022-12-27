const uniqid = require('uniqid')

class Customer{
    constructor(name, phoneNumber){
        this.id = uniqid();
        this.name = name
        this.phoneNumber = phoneNumber;
        this.rentedBooks = [];
    }

    set rentBook(book){
        if(!book.isRented){
            this.rentedBooks.push(book)
            book.rent();
        }
        else{
            console.log('Book already rented')
        }
    }

    set returnBook(book){
        const bookIndex = 
        this.rentedBooks.findIndex(
            (libBook) =>
                libBook.id === book.id
        )
        
        this.rentedBooks.splice(bookIndex,1)
    }

    set setPhoneNumber(newNumber){
        this.phoneNumber = newNumber;
    }
}

module.exports = Customer;