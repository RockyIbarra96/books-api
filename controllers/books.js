const router = require('express').Router()
const db = require('../models')
const books = require('../models/books')

router.get('/seed', (req, res) => {
    books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})



router.get('/', (req,res) => {
    db.Books.find()
    .then((books) => {
        res.json(books)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({ error: 'Page could not be found'})
    })
})

// POST route for /books to create a new book
router.post('/', (req, res) => {
    const newBookData = req.body;
  
    db.Books.create(newBookData)
      .then((createdBook) => {
        res.status(201).json(createdBook); // Send the created book back as JSON with 201 status
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json({ error: 'An error occurred while creating the book', details: err }); // Return a proper error message
      });
  });

// GET route for /books/:id to fetch a book by its ID
router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    
    db.Books.findById(bookId)
      .then((book) => {
        if (book) {
          res.json(book); // Send the book back as JSON
        } else {
          res.status(404).json({ error: 'Book not found' }); // Book not found
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching the book' }); // Return a proper error message
      });
  });

  // PUT route for /books/:id to update a book by its ID
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
  
    db.Books.findByIdAndUpdate(bookId, updatedData, { new: true, runValidators: true })
      .then((updatedBook) => {
        if (updatedBook) {
          res.json(updatedBook); // Send the updated book back as JSON
        } else {
          res.status(404).json({ error: 'Book not found' }); // Book not found
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json({ error: 'An error occurred while updating the book', details: err }); // Return a proper error message
      });
  });

  // DELETE route for /books/:id to delete a book by its ID
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
  
    db.Books.findByIdAndDelete(bookId)
      .then((deletedBook) => {
        if (deletedBook) {
          res.json({ message: 'Book successfully deleted' }); // Send success message and the deleted book
        } else {
          res.status(404).json({ error: 'Book not found' }); // Book not found
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the book' }); // Return a proper error message
      });
  });

  

module.exports = router