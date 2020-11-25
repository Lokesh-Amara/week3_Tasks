//Code to print Asian countries from rest countries 

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function() {

    var data = JSON.parse(this.response);

    let asianCountries = data.filter( ele => ele.region === 'Asia')

    console.log(asianCountries)

}
