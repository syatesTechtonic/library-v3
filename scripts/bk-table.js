const books = [
  {
    id: "111aaa",
    author: "Dr Seuss",
    title: "The Cat in the Hat",
    imgSrc: "assets/images/covers/cat-hat.png",
    imgAlt: "cat-hat-cover",
    pages: 61,
    pubDate: "3/12/1957",
    synopsis: "When in doubt, turn to the story of the cat that transformed a dull, rainy afternoon into a magical and just-messy-enough adventure.",
    rating: 4
  },
  {
    id: "222bbb",
    author: "Dr Seuss",
    title: "Green Eggs and Ham",
    imgSrc: "assets/images/covers/green-eggs.png",
    imgAlt: "green-eggs-cover",
    pages: 65,
    pubDate: "8/12/1960",
    synopsis: "Sam-I-am is as persistent as a telemarketer, changing as many variables as possible in the hopes of convincing the nameless skeptic that green eggs and ham are a delicacy to be savored.",
    rating: 3
  },
  {
    id: "333ccc",
    author: "Dr Seuss",
    title: "There's a Wocket in my Pocket",
    imgSrc: "assets/images/covers/wocket-pocket.png",
    imgAlt: "wocket-pocket-cover",
    pages: 65,
    pubDate: "8/12/1984",
    synopsis: "A young boy goes exploring in his house and finds an array of fun characters! Are you certain there’s a Jertain in the curtain? Or have you ever had a feeling there’s a Geeling on the ceiling?",
    rating: 5
  },
  {
    id: "444ddd",
    author: "Thomas Pynchon",
    title: "V",
    imgSrc: "assets/images/covers/v.jpg",
    imgAlt: "v-cover",
    pages: 492,
    pubDate: "5/16/1963",
    synopsis: "In which Benny Profane, a schlemil and human yo-yo, gets to an apocheir.",
    rating: 4
  },
  {
    id: "555eee",
    author: "Thomas Pynchon",
    title: "The Crying of Lot 49",
    imgSrc: "assets/images/covers/lot-49.jpg",
    imgAlt: "-cover",
    pages: 194,
    pubDate: "5/16/1965",
    synopsis: "Oedipa Maas finds herself enmeshed in a worldwide conspiracy, meets some extremely interesting characters and attains a not inconsiderable amount of self-knowledge.",
    rating: 4
  },
  {
    id: "666fff",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    imgAlt: "gravitys-rainbow-cover",
    pages: 770,
    pubDate: "5/16/1973",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  }
]

function onInit () {
  books.map(book => addBook(book));
  document.getElementById('bookSearch').reset();
  return;
}

function addBook (book) {
  const headerId = '#bk-' + book.id + '-header';
  const infoId = '#bk-' + book.id + '-info';
  $('#bkTable').append(`<header id="bk-${book.id}-header" class="bk-info__header js-bk-header"></header>`);
  $('#bkTable').append(`<article id="bk-${book.id}-info" class="bk-info js-bk-info"></article>`);
  $(headerId).append(`<h3 class="bk-info__author">${book.author}</h3><h3 class="bk-info__title">${book.title}</h3>`).click(() => clickTitle(headerId, infoId));
  $(infoId).append(`<div class="bk-info__cover-rating"></div><div class="bk-info__copy">`);
  $(infoId + ' div.bk-info__cover-rating').append(`<img src="${book.imgSrc}" alt="${book.imgAlt}" class="bk-info__cover"><div class="bk-info__rating">${stars(book.rating).map(star => `<span class="fa${star} fa-star"></span>`).join('')}</div>`);
  $(infoId + ' div.bk-info__copy').append(`<p><span class="bk-info__copy--bold">Publication Date: </span><time datetime="${new Date(book.pubDate)}">${book.pubDate}</time></p><p><span class="bk-info__copy--bold">Pages: </span>${book.pages}</p><p><span class="bk-info__copy--bold">Synopsis: </span>${book.synopsis}</p>`);
  $(infoId + ' div.bk-info__copy').append(`<div class="bk-info__ed-del"><button id="bk-${book.id}-edit" class="lb-button">Edit</button><button id="bk-${book.id}-delete" class="lb-button">Delete</button></div>`);
  attachHandlers(book.id);
}

function stars (rating) {
  const numArray = [1,2,3,4,5];
  return numArray.map(num => num <= rating ? 's' : 'r');
}

function attachHandlers (id) {
  $('#bk-' + id + '-delete').bind("click", () => {
    console.log('delete book id: ' + id)
  });
  $('#bk-' + id + '-edit').bind("click", () => {
    console.log('edit book id: ' + id)
  });
}

$(document).ready(() => onInit());

function clickTitle (headerId, infoId) {
  if ($(headerId).hasClass('bk-info__header--selected')) {
    $(infoId).addClass('bk-info--open').slideUp();
    $(headerId).removeClass('bk-info__header--selected');
    return;
  }
  $(headerId).addClass('bk-info__header--selected');
  $('#bkTable').children('.js-bk-header').not(headerId).removeClass('bk-info__header--selected');
  $(infoId).hide().addClass('bk-info--open').slideDown();
  $('#bkTable').children('.js-bk-info').not(infoId).removeClass('bk-info--open').slideUp();
  return;
}

function checkBook (input, book) {
  return input.title && book.title.toLowerCase().includes(input.title.toLowerCase()) || input.author && book.author.toLowerCase().includes(input.author.toLowerCase());
}

$('#bookSearch').submit(e => {
  e.preventDefault();
  const input = {
    title: $('[name="title"]').val() || '',
    author: $('[name="author"]').val() || ''
  }
  const results = books.filter(book => checkBook(input, book));
  if (results) {
    $('#bkTable').children().not('.bk-table__header').remove();
    results.map(book => addBook(book))
    return;
  }
  console.log('no books matched your serach');
  return;
})