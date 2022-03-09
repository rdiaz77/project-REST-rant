const express = require('express');
const app = express()

app.get('/', (req,res) =>{
    res.send('hello world rant')

})

app.listen(3000, () => console.log('awaken'))