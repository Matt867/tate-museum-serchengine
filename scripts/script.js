import {search} from './functions.js'

const form = document.querySelector("#search-form");
const selectRows = document.querySelector("#select-rows");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
});

if (selectRows) {
  selectRows.addEventListener('change', search);
}
