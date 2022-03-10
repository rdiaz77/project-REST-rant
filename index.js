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

app.listen(process.env.PORT, () => console.log('awaken'))

router.get('/', (req,res) => {
    res.send('GET/places')
})
module.exports = router