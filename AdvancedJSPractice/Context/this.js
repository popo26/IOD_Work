// "use strict"

function Greeting() {
    //console.log(this)
    const context = this;
    console.log(context)
}

//console.log(this)
Greeting();