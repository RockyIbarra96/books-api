const db = require('../models')

db.Books.create([{
    id: 1,
    title: 'The Shinobi Initiative',
    description: 'The reality-bending adventures of a clandestine service agency in the year 2166',
    year: 2014,
    quantity: 10,
}, {
    id: 2,
    title: 'Tess the Wonder Dog',
    description: 'The tale of a dog who gets super powers',
    year: 2007,
    quantity: 3,
}, {
    id: 3,
    title: 'This anthology tells the intertwined narratives of six fairy tales.',
    description: 'The reality-bending adventures of a clandestine service agency in the year 2166',
    year: 2016,
    quantity: 8,
}, {
    id: 4,
    title: 'W∀RP',
    description: 'A time-space anomaly folds matter from different points in earths history in on itself, sending six unlikely heroes on a race against time as worlds literally collide',
    year: 2010,
    quantity: 4,
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})