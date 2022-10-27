//const ArtPiece = require('./artpiece');

function photoLink(record) {
  const idPhoto = record.fields.thumbnailurl.filename;
  const firstLetteridPhoto = idPhoto[0];
  const first3LettersidPhoto = idPhoto.substring(0, 3);

  const link = `https://media.tate.org.uk/art/images/work/${firstLetteridPhoto}/${first3LettersidPhoto}/${idPhoto}`

  return link
}

function createArtPiece(record) {
  const author = record.fields.artist;
  const title = record.fields.title;
  const medium = record.fields.medium;
  const dimmensions =`${record.fields.width} x ${record.fields.height} ${record.fields.units}`;
  const year = record.fields.year;
  const image = photoLink(record);
  const moreInfoLink = record.fields.url;

  const art = new ArtPiece(author, title, medium, dimmensions, year, image, moreInfoLink);

  return art;
}


function listArtPieces(records) {
  let pieces = [];

  for (let i = 0; i < records.length; i++) {
    let piece = createArtPiece(records[i]);
    pieces.push(piece);
  }

  return pieces;
}

function populateCards(artPieces) {
  const cardHolder = document.querySelector('#card_container')
  const template = document.querySelector('#card_template')


  for(let k = 0; k < artPieces.length; k++){
    const clone = template.content.cloneNode(true)
    let imageURL = clone.querySelector('#art_main_image')
    let title = clone.querySelector('#art_title')
    let artist = clone.querySelector('#author_name')
    let year = clone.querySelector('#art_year')
    let medium = clone.querySelector('#art_medium')
    let dimensions = clone.querySelector('#art_dimensions')
    let moreInfo = clone.querySelector('#art_more_info')
    clone.addEventListener('click', () => {window.location.href = artPieces[k].moreInfoLink})

    imageURL.src = artPieces[k].image
    title.innerHTML = artPieces[k].title
    medium.innerHTML = artPieces[k].medium
    dimensions.innerHTML = artPieces[k].dimensions
    year.innerHTML = artPieces[k].year
    moreInfo.href = artPieces[k].moreInfoLink
    artist.innerHTML = artPieces[k].author

    cardHolder.appendChild(clone)
  }
}

//module.export = {photoLink, createArtPiece, listArtPieces};
