class ArtPiece {
  constructor(author, title, medium, dimensions, collection, image, moreInfoLink) {
    this.author = author;
    this.title = title;
    this.medium = medium;
    this.dimensions = dimensions;
    this.collection = collection;
    this.image = image;
    this.moreInfoLink = moreInfoLink;
  }
}



const piece1 = new ArtPiece('John Linnell',
    'The Man who taught Blake Painting in his Dreams',
    'Graphite on paper',
    '260 × 206 mm',
    'Tate',
    'https://media.tate.org.uk/art/images/work/N/N05/N05186_10.jpg',
    'https://www.tate.org.uk/art/artworks/linnell-the-man-who-taught-blake-painting-in-his-dreams-after-william-blake-n05186'
    )


console.log(piece1);
