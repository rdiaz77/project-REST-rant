const React = require('react')
const Def = require('./default') 

function home(){
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/pizza.jpg" alt="pizza" />
                </div>
                <a href = '/places'>
                    <button className = 'btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home