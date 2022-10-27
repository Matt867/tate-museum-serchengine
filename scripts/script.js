let searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', ShowTatePictures);

async function ShowTatePictures() {
  let artist = document.querySelector("#userInput").value
  artist = artist.replaceAll(" ", "+");
  const res = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=the-tate-collection&q=${artist}&rows=5&facet=artist&facet=medium&facet=year&facet=acquisitionyear&facet=dimensions`);
  const data = await res.json();
  console.log(data);

  //const link = PhotoLink(data.records[0]);

  AddCard(data.records[0]);

  // document.querySelector('').innerHTML = data.name;
  // document.querySelector('img').src = data.sprites.front_default;
}


function PhotoLink(record) {
  const idPhoto = record.fields.thumbnailurl.filename;
  const firstLetteridPhoto = idPhoto[0];
  const first3LettersidPhoto = idPhoto.substring(0, 3);

  const link = `https://media.tate.org.uk/art/images/work/${firstLetteridPhoto}/${first3LettersidPhoto}/${idPhoto}`

  console.log(link);
  return link
}



function AddCard(record) {

  const link = PhotoLink(record);
  const title = record.fields.title;
  const author = record.fields.artist;
  const moreInfo = record.fields.url;


  const body = document.querySelector('body');
  const div = document.createElement('div');
  const divImg = document.createElement('div');
  const divDescription = document.createElement('div');
  const authorH1 = document.createElement('h1');
  const titleP = document.createElement('p');
  div.className = 'card';
  const img = document.createElement('img');


  authorH1.innerHTML = author;
  titleP.innerHTML = title;
  img.src = link;
  divDescription.appendChild(authorH1);
  divDescription.appendChild(titleP);
  divImg.appendChild(img);

  div.appendChild(divImg);
  div.appendChild(divDescription);
  body.appendChild(div);
}


// addAllCards(data)
// for
//   addCard(data.record[])
