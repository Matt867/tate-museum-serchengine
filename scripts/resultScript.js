
import { listArtPieces, populateCards } from './functions.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('searchQuery')

async function showTatePictures (artist){
  const res = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=the-tate-collection&q=${query}&rows=600&facet=artist&facet=medium&facet=year&facet=acquisitionyear&facet=dimensions`);
  const data = await res.json();
  return data
}

showTatePictures(query).then((data) => {
  let pieces = listArtPieces(data.records);
  populateCards(pieces);
}
)
