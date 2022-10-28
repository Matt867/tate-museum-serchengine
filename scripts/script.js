import { search } from './functions.js';

const form = document.querySelector('#search-form');
const selectRows = document.querySelector('#select-rows');
const homeButton = document.querySelector('#home-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  search();
});

if (selectRows) {
  selectRows.addEventListener('change', search);
}

if (homeButton) {
  homeButton.addEventListener('click', () => { location.href='./index.html' });
}
