require('dotenv').config()
const express = require('express');
const router = require('./controller/places');
const app = express()

app.use('/places', require('./controller/places'))

app.get('/', (req,res) => {
    
    res.send('hello world -rest ran')
    
})

app.get('*', (req,res) =>{
    res.status(404).send(`
    <h1>404 page</h1>`)

})

app.listen(process.env.PORT, () => console.log('awaken'))

router.get('/', (req,res) => {
    res.send('GET/places')
})
module.exports = router