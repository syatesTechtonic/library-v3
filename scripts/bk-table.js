const books = [
  {
    id: "111aaa",
    author: "Dr Seuss",
    title: "The Cat in the Hat",
    imgSrc: "assets/images/covers/cat-hat.png",
    pages: 61,
    pubDate: "1957-03-12",
    synopsis: "When in doubt, turn to the story of the cat that transformed a dull, rainy afternoon into a magical and just-messy-enough adventure.",
    rating: 4
  },
  {
    id: "222bbb",
    author: "Dr Seuss",
    title: "Green Eggs and Ham",
    imgSrc: "assets/images/covers/green-eggs.png",
    pages: 65,
    pubDate: "1960-08-12",
    synopsis: "Sam-I-am is as persistent as a telemarketer, changing as many variables as possible in the hopes of convincing the nameless skeptic that green eggs and ham are a delicacy to be savored.",
    rating: 3
  },
  {
    id: "333ccc",
    author: "Dr Seuss",
    title: "There's a Wocket in my Pocket",
    imgSrc: "assets/images/covers/wocket-pocket.png",
    pages: 65,
    pubDate: "1984-08-12",
    synopsis: "A young boy goes exploring in his house and finds an array of fun characters! Are you certain there’s a Jertain in the curtain? Or have you ever had a feeling there’s a Geeling on the ceiling?",
    rating: 5
  },
  {
    id: "444ddd",
    author: "Thomas Pynchon",
    title: "V",
    imgSrc: "assets/images/covers/v.jpg",
    pages: 492,
    pubDate: "1963-05-16",
    synopsis: "In which Benny Profane, a schlemil and human yo-yo, gets to an apocheir.",
    rating: 4
  },
  {
    id: "555eee",
    author: "Thomas Pynchon",
    title: "The Crying of Lot 49",
    imgSrc: "assets/images/covers/lot-49.jpg",
    pages: 194,
    pubDate: "1965-05-16",
    synopsis: "Oedipa Maas finds herself enmeshed in a worldwide conspiracy, meets some extremely interesting characters and attains a not inconsiderable amount of self-knowledge.",
    rating: 4
  },
  {
    id: "666fff",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pages: 770,
    pubDate: "1973-05-16",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "777ggg",
    author: "John Le Carré",
    title: "Tinker, Tailor, Soldier, Spy",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pages: 770,
    pubDate: "1973-05-16",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "888hhh",
    author: "John Le Carré",
    title: "The Honourable Schoolboy",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pages: 770,
    pubDate: "1973-05-16",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "999iii",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pages: 770,
    pubDate: "1973-05-16",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "101010jjj",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pages: 770,
    pubDate: "1973-05-16",
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  }
]

function populateBooks () {
  books.map(book => addBook(book));
  document.getElementById('bookSearch').reset();
  return;
}

function addBook (book) {
  // copy
  let copy = document.createElement('div');
  copy.classList.add('bk-info__copy');
  let pubDateLabel = document.createElement('label');
  pubDateLabel.classList.add('bk-info__copy--bold');
  pubDateLabel.innerHTML = 'Publication Date:'
  copy.appendChild(pubDateLabel);
  let pubDate = document.createElement('input');
  pubDate.value = book.pubDate;
  copy.appendChild(pubDate);
  let pagesLabel = document.createElement('label');
  pagesLabel.classList.add('bk-info__copy--bold');
  pagesLabel.innerHTML = 'Pages:'
  copy.appendChild(pagesLabel);
  let pages = document.createElement('input');
  pages.value = book.pages;
  copy.appendChild(pages);
  let synopsisLabel = document.createElement('label');
  synopsisLabel.classList.add('bk-info__copy--bold');
  synopsisLabel.innerHTML = 'Synopsis:'
  copy.appendChild(synopsisLabel);
  let synopsis = document.createElement('input');
  synopsis.value = book.synopsis;
  copy.appendChild(synopsis);
  // buttons
  let buttons = document.createElement('div');
  buttons.classList.add('bk-info__ed-del');
  let editBtn = document.createElement('button');
  editBtn.classList.add('lb-button');
  editBtn.innerHTML = 'Edit';
  buttons.appendChild(editBtn);
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('lb-button');
  deleteBtn.innerHTML = 'Delete';
  buttons.appendChild(deleteBtn);
  copy.appendChild(buttons);
  // coverRating
  let coverRating = document.createElement('div');
  coverRating.classList.add('bk-info__cover-rating');
  let cover = document.createElement('img');
  cover.classList.add('bk-info__cover');
  cover.setAttribute('src', book.imgSrc);
  coverRating.appendChild(cover);
  let rating = document.createElement('div');
  rating.classList.add('bk-info__rating');
  coverRating.appendChild(rating);
  for (let i = 1; i <= 5; i++) {
    let newStar = document.createElement('span');
    newStar.classList.add('bk-info__star', 'fas', 'fa-star');
    newStar.id = book.id + '-star-' + i;
    if (i <= book.rating) {
      newStar.classList.add('bk-info__star--checked');
    }
    rating.appendChild(newStar);
    attachStarHandler('#' + book.id + '-star-' + i);
  }
  // info
  let info = document.createElement('article');
  info.classList.add('bk-info', 'js-bk-info');
  info.id = book.id + '-info';
  info.appendChild(coverRating);
  info.appendChild(copy)
  // header
  let header = document.createElement('header');
  header.classList.add('bk-info__header', 'js-bk-header');
  header.id = book.id + '-header';
  let author = document.createElement('h3');
  author.classList.add('bk-info__author');
  author.innerHTML = book.author;
  let title = document.createElement('h3');
  title.classList.add('bk-info__title');
  title.innerHTML = book.title;
  header.appendChild(author);
  header.appendChild(title);
  // form
  let form = document.createElement('form');
  form.id = book.id;
  form.appendChild(header);
  form.appendChild(info);
  // put it all together
  let bkTable = document.getElementById('bkTable');
  bkTable.appendChild(form);
  attachHandlers(book.id);
}

function attachHandlers (id) {
  $('#' + id + '-delete').bind("click", (e) => {
    e.preventDefault();
    document.getElementById(id + '-header').remove();
    document.getElementById(id + '-info').remove();
    books.splice(books.findIndex(book => book.id === id), 1);
    return;
  });
  $('#' + id + '-edit').bind("click", (e) => {
    e.preventDefault();
    $('#' + id + '-header').children("h3").hide();
    $('#' + id + '-header').children("input").show();
    return;
  });
  const headerId = '#' + id + '-header';
  const infoId = '#' + id + '-info';
  $('#' + id + '-header').bind("click", (e) => {
    e.preventDefault();
    if ($(headerId).hasClass('bk-info__header--selected')) {
      $(infoId).slideUp();
      $(headerId).removeClass('bk-info__header--selected');
      return;
    } else {
      $(headerId).addClass('bk-info__header--selected');
      $('#bkTable').children('.js-bk-header').not(headerId).removeClass('bk-info__header--selected');
      $(infoId).hide().addClass('bk-info--open').slideDown();
      $('#bkTable').children('.js-bk-info').not(infoId).removeClass('bk-info--open').slideUp();
      return;
    }
  });
  return;
}

function attachStarHandler (starId) {
  $(starId).bind("click", () => {
    $(starId).prevAll().addClass('bk-info__star--checked');
    $(starId).nextAll().removeClass('bk-info__star--checked');
    return;
  });
  return;
}

$(document).ready(() => populateBooks());

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

$('#showAllBooks').bind('click', () => {
  $('#bkTable').children().not('.bk-table__header').remove();
  populateBooks();
  return;
})