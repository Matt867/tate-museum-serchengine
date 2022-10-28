
import { listArtPieces, populateSearchInfo, populateCards, apiLink , numberOfResults, populateNumberOfResults} from './functions.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('searchQuery');
const rows = urlParams.get('rows');

async function showTatePictures (query, rows){
  const res = await fetch(apiLink(query, rows));
  const data = await res.json();

  return data
}

showTatePictures(query, rows).then((data) => {
  populateSearchInfo(query, rows);
  populateCards(listArtPieces(data.records));
  populateNumberOfResults(numberOfResults(data));
});
