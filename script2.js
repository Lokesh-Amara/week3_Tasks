//code to print countries with population lessthan 2 lakhs

var req = new XMLHttpRequest();

req.open('GET', 'https://restcountries.eu/rest/v2/all', true );

req.send();

req.onload = function() {
    var data = JSON.parse(this.response)

    let lessPopulatedConts = data.filter( el => el.population < 200000)

    console.log(lessPopulatedConts)
}
