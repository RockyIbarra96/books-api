// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//express settings
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000/books',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))


//controllers and routes
app.use('/books', require('./controllers/books'))
//create a homepage route. 
app.get('/', function(req, res) {
    //this gets sent to the client
    res.send('Hello World')
})


//404 error
app.get('*', function(req, res) {
    res.send('error404')
})

//listen for connections
app.listen(process.env.PORT)