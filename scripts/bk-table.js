const books = [
  {
    id: "111aaa",
    author: "Dr Seuss",
    title: "The Cat in the Hat",
    imgSrc: "assets/images/covers/cat-hat.png",
    pubDate: "1957-03-12",
    pages: 61,
    synopsis: "When in doubt, turn to the story of the cat that transformed a dull, rainy afternoon into a magical and just-messy-enough adventure.",
    rating: 4
  },
  {
    id: "222bbb",
    author: "Dr Seuss",
    title: "Green Eggs and Ham",
    imgSrc: "assets/images/covers/green-eggs.png",
    pubDate: "1960-08-12",
    pages: 65,
    synopsis: "Sam-I-am is as persistent as a telemarketer, changing as many variables as possible in the hopes of convincing the nameless skeptic that green eggs and ham are a delicacy to be savored.",
    rating: 3
  },
  {
    id: "333ccc",
    author: "Dr Seuss",
    title: "There's a Wocket in my Pocket",
    imgSrc: "assets/images/covers/wocket-pocket.png",
    pubDate: "1984-08-12",
    pages: 65,
    synopsis: "A young boy goes exploring in his house and finds an array of fun characters! Are you certain there’s a Jertain in the curtain? Or have you ever had a feeling there’s a Geeling on the ceiling?",
    rating: 5
  },
  {
    id: "444ddd",
    author: "Thomas Pynchon",
    title: "V",
    imgSrc: "assets/images/covers/v.jpg",
    pubDate: "1963-05-16",
    pages: 492,
    synopsis: "In which Benny Profane, a schlemil and human yo-yo, gets to an apocheir.",
    rating: 4
  },
  {
    id: "555eee",
    author: "Thomas Pynchon",
    title: "The Crying of Lot 49",
    imgSrc: "assets/images/covers/lot-49.jpg",
    pubDate: "1965-05-16",
    pages: 194,
    synopsis: "Oedipa Maas finds herself enmeshed in a worldwide conspiracy, meets some extremely interesting characters and attains a not inconsiderable amount of self-knowledge.",
    rating: 4
  },
  {
    id: "666fff",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pubDate: "1973-05-16",
    pages: 770,
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "777ggg",
    author: "John Le Carré",
    title: "Tinker, Tailor, Soldier, Spy",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pubDate: "1973-05-16",
    pages: 770,
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "888hhh",
    author: "John Le Carré",
    title: "The Honourable Schoolboy",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pubDate: "1973-05-16",
    pages: 770,
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "999iii",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pubDate: "1973-05-16",
    pages: 770,
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  },
  {
    id: "101010jjj",
    author: "Thomas Pynchon",
    title: "Gravity's Rainbow",
    imgSrc: "assets/images/covers/gravitys-rainbow.jpg",
    pubDate: "1973-05-16",
    pages: 770,
    synopsis: "A few months after the Germans’ secret V-2 rocket bombs begin falling on London, British Intelligence discovers that a map of the city pinpointing the sexual conquests of one Lieutenant Tyrone Slothrop, U.S. Army, corresponds identically to a map showing the V-2 impact sites.",
    rating: 5
  }
]

const newBook = {
  id: "",
  author: "Author",
  title: "Title",
  imgSrc: "assets/images/covers/no-cover.png",
  pubDate: "",
  pages: 0,
  synopsis: "",
  rating: 0
}

function populateBooks () {
  books.reverse().map(book => addBook(book));
  document.getElementById('bookSearch').reset();
  return;
}

function addBook (book) {
  const { id, author, title, imgSrc, pubDate, pages, synopsis, rating } = book;
  const template = document.querySelector('#js-bk');
  const clone = template.content.cloneNode(true);
  const form = clone.querySelector('.js-bk-form');
  form.id = id + '-form';
  const header = clone.querySelector('.bk-info__header');
  header.id = id + '-header';
  const info = clone.querySelector('.bk-info');
  info.id = id + '-info';
  const authorHead = clone.querySelector('.bk-info__author');
  authorHead.value = author;
  const titleHead = clone.querySelector('.bk-info__title');
  titleHead.value = title;
  const img = clone.querySelector('img');
  img.alt = title;
  img.src = imgSrc ? imgSrc : img.src;
  const stars = clone.querySelectorAll('.bk-info__star');
  const pubDateInput = clone.querySelector('.bk-info__pubDate');
  pubDateInput.value = pubDate;
  const pagesInput = clone.querySelector('.bk-info__pages');
  pagesInput.value = pages;
  const synopsisInput = clone.querySelector('.bk-info__synopsis');
  synopsisInput.value = synopsis;
  const editBtn = clone.querySelector('.js-edit');
  editBtn.id = id + '-edit';
  const deleteBtn = clone.querySelector('.js-delete');
  deleteBtn.id = id + '-delete';
  $('#bkTableBody').prepend(clone);
  attachHandlers(id);
}

function attachHandlers (id) {
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
  $('#' + id + '-delete').bind("click", (e) => {
    e.preventDefault();
    document.getElementById(id + '-header').remove();
    document.getElementById(id + '-info').remove();
    books.splice(books.findIndex(book => book.id === id), 1);
    return;
  });
  $('#' + id + '-edit').bind("click", (e) => {
    e.preventDefault();
    $('#' + id + '-form').find('input').attr('disabled', 'false');
    return;
  });
}

function attachStarHandler (starId) {
  $(starId).bind("click", () => {
    $(starId).addClass('bk-info__star--checked');
    $(starId).prevAll().addClass('bk-info__star--checked');
    $(starId).nextAll().removeClass('bk-info__star--checked');
    return;
  });
}

$(document).ready(() => populateBooks());

function checkBook (input, book) {
  return input.title && book.title.toLowerCase().includes(input.title.toLowerCase()) || input.author && book.author.toLowerCase().includes(input.author.toLowerCase());
}

function randomString() {
  return Math.random().toString(36).substring(2, 15)
 }

$('#bookSearch').submit(e => {
  e.preventDefault();
  const input = {
    title: $('[name="titleSearch"]').val() || '',
    author: $('[name="authorSearch"]').val() || ''
  }
  const results = books.filter(book => checkBook(input, book));
  if (results) {
    $('#bkTableBody').children().remove();
    results.map(book => addBook(book))
    return;
  }
  console.log('no books matched your serach');
  return;
})

$('#showAllBooks').bind('click', (e) => {
  e.preventDefault();
  $('#bkTableBody').children().remove();
  populateBooks();
  return;
})

$('#addBook').bind('click', (e) => {
  e.preventDefault();
  newBook.id = randomString();
  addBook(newBook);
  $('#' + newBook.id + '-edit').remove(); 
  $('#' + newBook.id + '-delete').remove();
  $('#' + newBook.id + '-form').find('input').attr('disabled', 'false');
  $('#' + newBook.id + '-header').addClass('bk-info__header--selected');
  $('#bkTableBody').children('.js-bk-header').not('#' + newBook.id + '-header').removeClass('bk-info__header--selected');
  $('#' + newBook.id + '-info').hide().addClass('bk-info--open').slideDown();
  return;
})