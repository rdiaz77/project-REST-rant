const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className = 'col-sm-6'>
          <h2>
            <a href = {`/places/${index}`}>
            {place.name}
            </a>
            </h2>
          <img src={place.pic} alt={place.name}/>
          <div>
            Photo by <a href="https://unsplash.com/@shaianramesht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shaian ramesht</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
          </div>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className = 'row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

module.exports = index