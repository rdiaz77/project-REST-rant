const React = require('react')
const Def = require('../default')

function new_form(){
    return (
        <Def>

            <main>
                <h1>This is a new form</h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">Place City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">Place State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlFor="cuisine">Place Cuisine</label>
                        <input id="cuisine" name="cuisine" required />
                    </div>
                    <div>
                    <input type="submit" value="Create New Place"/>
                    </div>







                </form>
            </main>
        </Def>
    )

}

module.exports = new_form