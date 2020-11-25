//code for error handling

var req = new XMLHttpRequest();

req.open('GET', 'https://restcountries.eu/rest/v2/all', true)

req.send();

req.onload = function() {
    try {
        var data = JSON.parse(this.response)
        if( data.length !== 275){
            throw new SyntaxError("Insufficient data from the response")
        }
    }catch( err ) {
        console.log(err.name)
        console.log(err.lineNumber)
        console.log(err.message)
        console.log(err.stack)
    }
}
