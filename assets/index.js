// Globabl varaibles
// Button
let bttn = document.getElementById('button')

// Movie 
const API_KEY = 'api_key=b38b724637a214decfd523fff0073f29';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY

console.log(API_URL)

let movieDisplay = document.getElementById('movie-display')

let movieImg = document.getElementsByTagName('img')[0]
let title = document.getElementById('title')
let overview = document.getElementById('overview')
let rate = document.getElementById('vote-average')

// Snack
const snackURL = 'http://localhost:3000/snacks'
let snackDisplay = document.getElementById('snack-display')
let snackImg = document.getElementsByTagName('img')[1]
let nameS = document.getElementById('name')

// Comment
let comment = document.getElementById('comment')

getMovie(API_URL);

async function getMovie(url) {
    let clickedGenerate = false;
    const snacks = await getSnacks(snackURL)

    fetch(url)
        .then(response => response.json())
        .then(movieArray => {

            bttn.addEventListener('click', () => {

                if (clickedGenerate == false) {
                    //Create the form...
                    let form = document.createElement('form')
                    let input = document.createElement('input')
                    let submit = document.createElement('input')
                    submit.type = 'submit'
                    form.append(input, submit)
                    comment.append(form)

                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        input.value = ""
                    })

                    clickedGenerate = true
                }
                GeneratorMS(movieArray.results, snacks);

            })
        })
}

function getSnacks(snackURL) {
    return fetch(snackURL)
        .then(response => response.json())

}

function GeneratorMS(movieArray, snacks) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * movieArray.length)

    const randomIndexS = Math.floor(Math.random() * snacks.length)

    // get random item
    const item = movieArray[randomIndex];
    const snackItem = snacks[randomIndexS]

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
    // Image
    snackImg.src = snackItem.image

    // Name 
    nameS.innerHTML = snackItem.name
    return item

}








