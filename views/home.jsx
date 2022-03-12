const React = require('react')
const Def = require('./default') 

function home(){
    return(
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img id ='main-image' src="/images/pizza.jpg" alt="pizza" />
                </div>
                <a href = '/places'>
                    <button className = 'btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home