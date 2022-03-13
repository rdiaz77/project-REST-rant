const router = require('express').Router()





// GET /places

router.get('/', (req,res) => {
    let places = [{
        name: 'Burger',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian',
        pic: 'images/burger.jpg'
      }, {
        name: 'Vittorio - An Italian Place',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Italian',
        pic: 'images/spaghetti copy.jpg'
      }]
    res.render('places/index', {places})
})

// GET PLACES NEW

router.get('/new', (req,res) => {
  res.render('places/new')
})



module.exports = router