require('dotenv').config()
const express = require('express');
const router = require('./controller/places');
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controller/places'))


app.get('/', (req,res) => {
    
    res.render('home')
    
})

app.get('*', (req,res) =>{
    res.render('error404')

})
// GET PLACES
app.get('/', (req,res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
})

app.listen(process.env.PORT, () => console.log('awaken'))

router.get('/', (req,res) => {
    res.send('GET/places')
})
module.exports = router