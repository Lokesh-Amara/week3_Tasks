//code to print the country that use US dollars as currency

let request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function() {
    let data = JSON.parse(this.response);

    let countries = data.filter( x => {
        let flag = false;

        for( const c of x.currencies){
            if( c.code === "USD"){
                flag = true;
                break
            }
        }
        return flag
    })

    for( const i of countries) 
        console.log(i)
}
