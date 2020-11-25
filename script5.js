//code to print total population in asian countries

var req = new XMLHttpRequest();

req.open('GET', 'https://restcountries.eu/rest/v2/all', true);

req.send();

req.onload = function() {
    let data = JSON.parse(this.response)

    let asianCountries = data.filter( x => x.region === 'Asia' )

    let asianPopulation = asianCountries.reduce( (a, b) => a + b.population , 0)

    console.log("Population of Asian countries : "+ asianPopulation)
}
