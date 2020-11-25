//code to print total population

var reqs = new XMLHttpRequest();

reqs.open('GET', 'https://restcountries.eu/rest/v2/all', true );

reqs.send();

reqs.onload = function() {
    let data = JSON.parse(this.response);

    
    let population = data.reduce( (a, b) => a + b.population , 0);

    console.log("Total population: "+ population)
}
