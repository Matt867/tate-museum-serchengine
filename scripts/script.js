import {search} from './functions.js'

const searchButton = document.querySelector("#search-button")
const form = document.querySelector("#search-form")

searchButton.addEventListener('click', search)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
});
