var express = require('express');
var router = express.Router();
var Book = require('../public/javascripts/Book')

const books = []
books.push(new Book('JRR Martin','A song of ice and fire'));
books.push(new Book('Fyodor Dostoevsky','Crime and Punishment'));
books.push(new Book('Fyodor Dostoevsky','The Brothers Karamazov'));
books.push(new Book('Vladimir Nabokov','Lolita'));
books.push(new Book('William Golding','Lord of the Flies'));

function getBookById(id){
    return( books.filter(book=>book.id === id))[0]
}


/* Get books route. */

router.get('/books', function(req, res, next) {
  console.log('sending...')
  res.send({books});
});

router.post('/books', function(req, res, next) {
    res.send(req.params);
});

router.get('/books/:id', function(req, res, next) {
    const bookToDisp = getBookById(req.params.id)
    res.render('single_book_disp', {title:`Book Display ${bookToDisp.name}`, book:bookToDisp});
});
  

router.post(`/books/:id`, function(req, res, next) {
    console.log('delete')
    res.send('Delete books by id NOT IMPLEMENTED');
});

router.post('/books/:id', function(req, res, next) {
    res.send(req.body);
});

/* Get customets route. */

router.get('/customers', function(req, res, next) {
    res.send('Get all books NOT IMPLEMENTED');
  });
  
  router.post('/customers', function(req, res, next) {
      res.send('Post new book NOT IMPLEMENTED');
  });
  
  router.delete('/customers', function(req, res, next) {
      res.send('Delete all customers NOT IMPLEMENTED');
  });
  
  router.get('/customers/:id', function(req, res, next) {
      res.send('Get customers by id NOT IMPLEMENTED');
  });
    
  router.post('/customers/:id', function(req, res, next) {
      res.send('Post customers by id NOT IMPLEMENTED');
  });
    
  router.delete('/customers/:id', function(req, res, next) {
      res.send('Delete customers by id NOT IMPLEMENTED');
  });

/* Get workers route. */

router.get('/workers', function(req, res, next) {
    res.send('Get all books NOT IMPLEMENTED');
  });
  
  router.post('/workers', function(req, res, next) {
      res.send('Post new book NOT IMPLEMENTED');
  });
  
  router.delete('/workers', function(req, res, next) {
      res.send('Delete all workers NOT IMPLEMENTED');
  });
  
  router.get('/workers/:id', function(req, res, next) {
      res.send('Get workers by id NOT IMPLEMENTED');
  });
    
  router.post('/workers/:id', function(req, res, next) {
      res.send('Post workers by id NOT IMPLEMENTED');
  });
    
  router.delete('/workers/:id', function(req, res, next) {
      res.send('Delete workers by id NOT IMPLEMENTED');
  });
  
  

module.exports = router;
