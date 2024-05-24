const mongoose = require('mongoose')

let booksSchema = new mongoose.Schema({
    id: {},
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true }
})
  
module.exports = mongoose.model('Books', booksSchema)