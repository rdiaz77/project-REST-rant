require('dotenv').config()
const express = require('express');
const router = require('./controller/places');
const app = express()

//Express settings

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



//Controllers and routes

app.use('/places', require('./controller/places')) // link server.js with controller/places.js


app.get('/', (req,res) => {
    
    res.render('home')
    
})

app.get('*', (req,res) =>{
    res.render('error404')

})



app.listen(process.env.PORT, () => console.log('awaken'))


