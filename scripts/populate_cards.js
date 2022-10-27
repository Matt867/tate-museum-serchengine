// import { ArtPiece } from './artpiece.js'

// const piece1 = new ArtPiece('John Linnell',
//     'The Man who taught Blake Painting in his Dreams',
//     'Graphite on paper',
//     '260 × 206 mm',
//     1825,
//     'https://media.tate.org.uk/art/images/work/N/N05/N05186_10.jpg',
//     'https://www.tate.org.uk/art/artworks/linnell-the-man-who-taught-blake-painting-in-his-dreams-after-william-blake-n05186'
// )

// const cardHolder = document.querySelector('#card_container')
// const template = document.querySelector('#card_template')

// for(let k = 0; k < 12; k++){
//     const clone = template.content.cloneNode(true)
//     let imageURL = clone.querySelector('#art_main_image')
//     let title = clone.querySelector('#art_title')
//     let artist = clone.querySelector('#author_name')
//     let year = clone.querySelector('#art_year')
//     let medium = clone.querySelector('#art_medium')
//     let dimensions = clone.querySelector('#art_dimensions')
//     let moreInfo = clone.querySelector('#art_more_info')


//     imageURL.src = piece1.image
//     title.innerHTML = piece1.title
//     medium.innerHTML = piece1.medium
//     dimensions.innerHTML = piece1.dimensions
//     year.innerHTML = piece1.year
//     moreInfo.href = piece1.moreInfoLink
//     artist.innerHTML = piece1.author

//     cardHolder.appendChild(clone)

// }


// async function moreInfoFill (link) {
//     try{
//         const response = await fetch(link)
//         const doc = await response.text()

//         const parser = new DOMParser()
//         doc = parser.parseFromString(html, 'text/html')

//         const desc = doc.querySelector('.tab-section__content')

//         console.log(desc)

//     } catch (error) {

//         console.error(error)

//     }
// }


// moreInfoFill('https://www.tate.org.uk/art/artworks/linnell-the-man-who-taught-blake-painting-in-his-dreams-after-william-blake-n05186')
