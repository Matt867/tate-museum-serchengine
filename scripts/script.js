import { search } from './functions.js';

const form = document.querySelector('#search-form');
const selectRows = document.querySelector('#select-rows');
const homeButton = document.querySelector('#home-button');
const loginButton = document.querySelector('#login-button')
const signupButton = document.querySelector('#singup-button')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  search();
});

if (selectRows) {
  selectRows.addEventListener('change', search);
}

if (homeButton) {
  homeButton.addEventListener('click', () => { location.href='./' });
}

if (loginButton) {
  loginButton.addEventListener('click', () => { location.href='./login'});
}

if (signupButton) {
  signupButton.addEventListener('click', () => { location.href='./signup'});
}
