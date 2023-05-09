// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const refreshnav = document.getElementById("coin")

coin.addEventListener("click", flipCoin)

// Set up an asynchronous function so that it will await a response.
async function rpsOpp() {
    // Build up the endpoint URL
        const endpoint = "/app/play/"
    // Create url
        const url = document.baseURI + endpoint;
    // This sends a GET request to the API endpoint and waits for a response
        await fetch(url)
    // This receives the response as JSON
                  .then(function(response) {
                    return response.json();
                    })
    // This processes the JSON into DOM calls that replace the existing corresponding elements in index.html 
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("result").innerHTML = result.flip;
                        document.getElementById("quarter").setAttribute("src", "assets/img/"+result.flip+".png");
                    });
                };       

async function rpslsOpp() {
    // Build up the endpoint URL
        const endpoint = "/app/rpsls/play/"
    // Create url
        const url = document.baseURI + endpoint;
    // This sends a GET request to the API endpoint and waits for a response
        await fetch(url)
    // This receives the response as JSON
                  .then(function(response) {
                    return response.json();
                    })
    // This processes the JSON into DOM calls that replace the existing corresponding elements in index.html 
                    .then(function(result) {
                        console.log(result);

                    });
                };       

async function rpsSingle() {
    // Build up the endpoint URL
        const endpoint = "/app/rps/"
    // Create url
        const url = document.baseURI + endpoint;
    // This sends a GET request to the API endpoint and waits for a response
        await fetch(url)
    // This receives the response as JSON
                  .then(function(response) {
                    return response.json();
                    })
    // This processes the JSON into DOM calls that replace the existing corresponding elements in index.html 
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("result").innerHTML = result.flip;
                        document.getElementById("quarter").setAttribute("src", "assets/img/"+result.flip+".png");
                    });
                };     

    async function rpslsSingle() {
    // Build up the endpoint URL
        const endpoint = "/app/rpsls/"
    // Create url
        const url = document.baseURI + endpoint;
    // This sends a GET request to the API endpoint and waits for a response
        await fetch(url)
    // This receives the response as JSON
                  .then(function(response) {
                    return response.json();
                    })
    // This processes the JSON into DOM calls that replace the existing corresponding elements in index.html 
                    .then(function(result) {
                        console.log(result);

                    });
                };     

var shoot = document.getElementById('shoot');

shoot.addEventListener("click", rpsSingle())

function changeMode(mode) {
    if (mode.value == "opp") {
        shoot.style.display == 'none'
    } else {
      
    }
}