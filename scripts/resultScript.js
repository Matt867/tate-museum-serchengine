
import { listArtPieces, populateCards } from './functions.js'

let artist = 'Linnell, John'
artist = artist.replaceAll(" ", "+");
console.log(artist)
async function showTatePictures (artist){
  const res = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=the-tate-collection&q=${artist}&rows=5&facet=artist&facet=medium&facet=year&facet=acquisitionyear&facet=dimensions`);
  const data = await res.json();
  return data
}

showTatePictures(artist).then((data) => {
  let pieces = listArtPieces(data.records);
  populateCards(pieces);
}
)
