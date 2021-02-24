// Selector
var form = document.getElementById("form"); 

// Event
form.addEventListener('submit',function(e){

// Refresh by default 
    e.preventDefault(); 

// Selectors
var area = document.getElementById('area').value; 
var options = document.getElementById('Options').value; 
var room = document.getElementById('Room').value; 
var zip = document.getElementById('Zip').value; 
var facades = document.getElementById('Facades').value; 
var terrace = document.getElementById('Terrace').checked; 
var furnished = document.getElementById('Furnished').checked; 
var kitchen = document.getElementById('Kitchen').checked; 
var garden = document.getElementById('Garden').checked; 


 // Fetch Post Request

let _data = 
    {
        'area': parseInt(area),
        'property-type': options,
        'rooms-number': parseInt(room),
        'zip-code': parseInt(zip),
        'garden' : garden,
        'equipped-kitchen': kitchen,
        'furnished': furnished,
        'terrace': terrace,
        'facades-number': parseInt(facades)
    }

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://propertyprediction.herokuapp.com/predict";

    fetch(proxyurl + url ,{
        method: 'POST',
        body:JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"} 
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    });
})


// // Data to be sent to the POST request
// let _data = {
//     "area": 150,
//     "property-type": "APARTMENT", 
//     "rooms-number": 3,
//     "zip-code": 1000,
//   }

//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//   const url = 'https://propertyprediction.herokuapp.com/predict';

//   fetch(proxyurl+url, {
//     method: "POST",
//     body: JSON.stringify(_data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
//   })
//   .then(response => response.json()) 
//   .then(json => console.log(json));