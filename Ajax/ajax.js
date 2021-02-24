// API KEY

const key = "08e5f4f809d80ba88983a82fc2a83c53"; 
const apiURL = "https://api.themoviedb.org/3/movie/550?api_key=08e5f4f809d80ba88983a82fc2a83c53";
const base_url = "http://image.tmdb.org/t/p/original";  


// Events

let fetchBtn = document.getElementById('fetchBtn'); 
fetchBtn.addEventListener('click', buttonClickHandler); 

function buttonClickHandler () {
    console.log('You have clicked fetchBtn');

    //STEP 1 :Initiate xhr object
    const xhr = new XMLHttpRequest(); 

    // GET : means we will get data and fetch it from the URL (SERVER)
    // POST : means we will get data, give data and in terms of data given reponse me 

    // STEP 2 : Open xhr Object : From where you will get data
    xhr.open('GET','https://api.themoviedb.org/3/movie/551?api_key=08e5f4f809d80ba88983a82fc2a83c53', true); // 3 PARAMETRS = GET OR POST / URL / ASYNCHRONOUS OR SYNCRONOUS

    // STEP 3 : Action to perform on page loading (it's optional for loading  animations)
    xhr.onprogress = function progress() {
        console.log('on progress');
    }

    // xhr.onreadystatechange = function (){
    //     console.log('ready state is ', xhr.readyState);
    // }
    // STEP 4 : Action to perform once page is load
    xhr.onload = function load() {
        if(this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj); 
            let list = document.getElementById('movies-list'); 
            let movie = "";  
            for (key in obj)
            {
                movie += `<div>${obj[key].poster_path}</div>`
            }
            list.innerHTML = movie; 
        } else {
            console.error("Status not ok"); 
        }
    } 
    // STEP 5 : Send request to server
    xhr.send(); 

    console.log('We are done'); 
}

