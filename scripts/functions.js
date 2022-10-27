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


//module.export = {photoLink, createArtPiece, listArtPieces};
