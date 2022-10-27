
import { listArtPieces, populateCards, apiLink , numberOfResults} from './functions.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('searchQuery');

async function showTatePictures (query, rows = 10){
  const res = await fetch(apiLink(query, rows));
  const data = await res.json();

  return data
}

showTatePictures(query).then((data) => {
  let pieces = listArtPieces(data.records);
  populateCards(pieces);
}
)
