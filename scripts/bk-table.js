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
    imgSrc: "assets/images/covers/tinker-tailor.jpg",
    pubDate: "1974-06-16",
    pages: 401,
    synopsis: "British Secret Service Agent George Smiley has a world-class problem. He has discovered a mole--a Soviet double agent who has managed to burrow his way up to the highest level of British Intelligence.",
    rating: 5
  },
  {
    id: "888hhh",
    author: "John Le Carré",
    title: "The Honourable Schoolboy",
    imgSrc: "assets/images/covers/honourable-schoolboy.jpg",
    pubDate: "1977-05-16",
    pages: 611,
    synopsis: "The mole has been eliminated, but the damage wrought has brought the British Secret Service to its knees. Given the charge of the gravely compromised Circus, George Smiley embarks on a campaign to uncover what Moscow Centre most wants to hide.",
    rating: 5
  },
  {
    id: "999iii",
    author: "John Le Carré",
    title: "Smiley's People",
    imgSrc: "assets/images/covers/smileys-people.jpg",
    pubDate: "1979-11-16",
    pages: 468,
    synopsis: "A very junior agent answers Vladimir’s call, but it could have been the Chief of the Circus himself. No one at the British Secret Service considers the old spy to be anything except a senile has-been who can’t give up the game—until he’s shot in the face at point-blank range.",
    rating: 5
  },
  {
    id: "101010jjj",
    author: "Karl Marx",
    title: "Das Kapital",
    imgSrc: "assets/images/covers/das-kapital.jpg",
    pubDate: "1867-09-14",
    pages: 908,
    synopsis: "A critical analysis of political economy, meant to reveal the contradictions of the capitalist mode of production, how it was the precursor of the socialist mode of production and of the class struggle rooted in the capitalist social relations of production.",
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

function populateBooks (bookArray) {
  document.getElementById('bkTableBody').innerHTML = bookArray.map(book => addBook(book)).join('');
  bookArray.map(book => attachDisplayHandlers(book.id));
  document.getElementById('bookSearch').reset();
  return;
}

function addBook (book) {
  const { id, author, title, imgSrc, pubDate, pages, synopsis, rating } = book;
  return `<section id="${id}-book" class="js-bk">
    <header id="${id}-header" class="bk-info__header js-bk-header">
      <h3 class="bk-info__author">${author}</h3>
      <h3 class="bk-info__title">${title}</h3>
      <span class="fas fa-caret-down bk-info__carat"></span>
    </header>
    <article id="${id}-info" class="bk-info js-bk-info">
      <div class="bk-info__cover-rating">
        <img src="${imgSrc ? imgSrc : 'assets/images/covers/no-cover.png'}" alt="${title}" class="bk-info__cover">
        <div class="bk-info__rating">
          <span data-star="1" class="fas fa-star bk-info__star${rating >= 1 ? ' bk-info__star--checked' : ''}"></span>
          <span data-star="2" class="fas fa-star bk-info__star${rating >= 2 ? ' bk-info__star--checked' : ''}"></span>
          <span data-star="3" class="fas fa-star bk-info__star${rating >= 3 ? ' bk-info__star--checked' : ''}"></span>
          <span data-star="4" class="fas fa-star bk-info__star${rating >= 4 ? ' bk-info__star--checked' : ''}"></span>
          <span data-star="5" class="fas fa-star bk-info__star${rating >= 5 ? ' bk-info__star--checked' : ''}"></span>
        </div>
      </div>
      <div class="bk-info__copy">
        <p><span class="bk-info__copy--bold">Publication Date: </span>${pubDate}</p>
        <p><span class="bk-info__copy--bold">Pages: </span>${pages}</p>
        <p><span class="bk-info__copy--bold">Synopsis: </span>${synopsis}</p>
        <div class="bk-info__buttons">
          <button id="${id}-edit" class="lb-button js-edit">Edit</button>
          <button id="${id}-delete" class="lb-button js-delete">Delete</button>
        </div>
      </div>
    </article>
  </section>`
}

function attachDisplayHandlers (id) {
  const headerId = '#' + id + '-header';
  const infoId = '#' + id + '-info';
  $('#' + id + '-header').bind("click", (e) => {
    e.preventDefault();
    if ($(headerId).hasClass('bk-info__header--selected')) {
      $(infoId).slideUp();
      $(headerId).removeClass('bk-info__header--selected');
      $(headerId).children('span').removeClass('bk-info__carat--selected');
      return;
    } else {
      $(headerId).addClass('bk-info__header--selected');
      $(headerId).children('span').addClass('bk-info__carat--selected');
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
    toggleEditBook(id);
    return;
  });
}

function toggleEditBook (id) {
  const bookToEdit = books.find(book => book.id === id);
  const { author, title, imgSrc, pubDate, pages, synopsis, rating } = bookToEdit;
  const formDisplay = document.createElement('form');
  formDisplay.id = id + '-form';
  formDisplay.classList.add('js-bk-form');
  formDisplay.addEventListener('submit', editBookSubmit);
  formDisplay.innerHTML = `<header id="${id}-header" class="bk-info__header js-bk-header">
    <div class="bk-edit__author">
      <label for="author">Author:</label>
      <input name="author" value="${author}"/>
    </div>
    <div class="bk-edit__title">
      <label for="author">Title:</label>
      <input name="title" value="${title}"/>
    </div>
  </header>
  <article class="bk-info bk-info--open js-bk-info">
    <div class="bk-info__cover-rating">
      <img name="cover" src="${imgSrc ? imgSrc : 'assets/images/covers/no-cover.png'}" alt="${title}" class="bk-info__cover">
      <div class="bk-info__rating">
        <span data-star="1" class="fas fa-star bk-info__star${rating >= 1 ? ' bk-info__star--checked' : ''}"></span>
        <span data-star="2" class="fas fa-star bk-info__star${rating >= 2 ? ' bk-info__star--checked' : ''}"></span>
        <span data-star="3" class="fas fa-star bk-info__star${rating >= 3 ? ' bk-info__star--checked' : ''}"></span>
        <span data-star="4" class="fas fa-star bk-info__star${rating >= 4 ? ' bk-info__star--checked' : ''}"></span>
        <span data-star="5" class="fas fa-star bk-info__star${rating >= 5 ? ' bk-info__star--checked' : ''}"></span>
      </div>
    </div>
    <div class="bk-info__copy">
      <label for="pubDate" class="bk-info__copy--bold">Publication Date: </label>
      <input name="pubDate" type="date" class="bk-edit__pubDate" value="${pubDate}"/>
      <label for="pages" class="bk-info__copy--bold">Pages: </label>
      <input name="pages" type="number" class="bk-edit__pages" value="${pages}"/>
      <label for="synopsis" class="bk-info__copy--bold">Synopsis: </label>
      <input name="synopsis" type="text" class="bk-edit__synopsis" value="${synopsis}"/>
      <div class="bk-info__buttons">
        <button id="${id}-save" type="submit" class="lb-button js-save">Save</button>
        <button id="${id}-cancel" type="button" class="lb-button js-cancel">Cancel</button>
      </div>
    </div>
  </article>`;
  const readDisplay = document.getElementById(id + '-book');
  readDisplay.replaceWith(formDisplay);
  attachEditHandlers(id);
}

function attachEditHandlers (id) {
  $('#' + id + '-cancel').bind("click", (e) => {
    e.preventDefault();
    populateBooks(books);
    return;
  });
}

function editBookSubmit (e) {
  e.preventDefault();
  const elements = e.target.elements;
  const bookId = e.target.id.split('-')[0];
  const book = books.find(book => book.id === bookId);
  book.author = elements['author'].value;
  book.title = elements['title'].value;
  book.pubDate = elements['pubDate'].value;
  book.pages = elements['pages'].value;
  book.synopsis = elements['synopsis'].value;
  populateBooks(books);
}

function attachStarHandler (starId) {
  $(starId).bind("click", () => {
    $(starId).addClass('bk-info__star--checked');
    $(starId).prevAll().addClass('bk-info__star--checked');
    $(starId).nextAll().removeClass('bk-info__star--checked');
    return;
  });
}

$(document).ready(() => populateBooks(books));

function checkBook (input, book) {
  return input.title && book.title.toLowerCase().includes(input.title.toLowerCase()) || input.author && book.author.toLowerCase().includes(input.author.toLowerCase());
}

function randomString() {
  return Math.random().toString(36).substring(2, 15);
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
    populateBooks(results);
    return;
  }
  console.log('no books matched your serach');
  return;
})

$('#showAllBooks').bind('click', (e) => {
  e.preventDefault();
  $('#bkTableBody').children().remove();
  populateBooks(books);
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