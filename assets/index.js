// Globabl varaibles
// Button
let bttn = document.getElementById('button')

// Movie 
const API_KEY = 'api_key=b38b724637a214decfd523fff0073f29';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY


let movieDisplay = document.getElementById('movie-display')

let movieImg = document.getElementsByTagName('img')[0]
let title = document.getElementById('title')
let overview = document.getElementById('overview')
let rate = document.getElementById('vote-average')

// Snack
const snackURL = 'http://localhost:3000/snacks'

getMovie(API_URL);

async function getMovie(url) {
    const snacks = await getSnacks(snackURL)

    fetch(url)
        .then(response => response.json())
        .then(movieArray => {
            bttn.addEventListener('click', () => {
                GeneratorMS(movieArray.results);

            })


        })
}

// Function render Movie
// Function render Snacks

function getSnacks(snackURL) {
    return fetch(snackURL)
        .then(response => response.json())
        .then(snackArray => {
            console.log(snackArray)
            // return snackArray.snacks

        })
}


function GeneratorMS(movieArray, snacks) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * movieArray.length)
    // const randomIndexS = Math.floor(Math.random() * snacks.length)
    // get random item
    const item = movieArray[randomIndex];
    // const snackItem = snacks[randomIndexS]
    // console.log(snackItem)
    // // Movie
    // Image display
    movieImg.src = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path
    // Title 
    title.innerHTML = item.title
    // Overview
    overview.innerHTML = item.overview
    // Rate
    rate.innerHTML = item.vote_average

    // Snack

    return item



}

// API movie - done


// API snacks - db.json - make at least 10/15

// Figure math.random for movie and snacks

// addEventListener for Generator 'click'

