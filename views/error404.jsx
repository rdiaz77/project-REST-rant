const React = require('react')
const Def = require('./default')

function error404(){
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FoUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src="/images/404Error_Dog.jpg" alt="cute dog with glasses watching the screen of a laptop" />
                <div>
                Photo by <a href="https://unsplash.com/@cookiethepom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cookie the Pom</a> on <a href="https://unsplash.com/s/photos/404-error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   
                </div>
            </div>
        </main>

    </Def>


    )
    
}

module.exports = error404