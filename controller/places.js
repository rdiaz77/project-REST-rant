const router = require('express').Router()


// GET /places

router.get('/', (req,res) => {
    let places = [{
        name: 'Italian Cuisine',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian',
        pic: 'images/italy.jpg'
      }, {
        name: 'Vittorio - An Italian Place',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Italian',
        pic: 'images/spaghetti copy.jpg'
      }]
    res.render('places/index', {places})
})



module.exports = router