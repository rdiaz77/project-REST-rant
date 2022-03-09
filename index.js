require('dotenv').config()
const express = require('express');
const app = express()

app.get('/', (req,res) =>{
    res.send('hello world rant')

})

app.listen(process.env.PORT, () => console.log('awaken'))