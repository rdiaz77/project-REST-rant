const router = require('express').Router()
const places = require('../models/places')




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

// POST PLACES NEW

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})






module.exports = router