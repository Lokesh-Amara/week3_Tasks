//Code to print details of each rest country

var reqst = new XMLHttpRequest();

reqst.open('GET', 'https://restcountries.eu/rest/v2/all', true)

reqst.send();

reqst.onload = function() {
    let data = JSON.parse(this.response)

    data.forEach( x => {
        console.log("Country name: "+ x.name+" ,capital: "+ x.capital+" ,flag: "+x.flag)
    })
}
