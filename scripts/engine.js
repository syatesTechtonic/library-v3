import books from './books.js';
import Book from './book.js';
import Observable from './observable.js';
import BookShelf from './bookshelf.js'
import bookSearch from './forms/search.js';
import toggleAddBook from './forms/add.js';
import populateBooks from './populate-books.js';

const observable = new Observable();
const bookShelf = new BookShelf(observable);

$(document).ready(() => {
  books.map(book => {
    new Book(observable, book);
  });
  console.log(bookShelf.books);
  populateBooks(bookShelf.books);

  bookSearch();
  bindShowAll();
  bindAddBook();
});

function bindShowAll () {
  $('#showAllBooks').bind('click', (e) => {
    e.preventDefault();
    $('#bkTableBody').children().remove();
    populateBooks(books);
    return;
  })
}

function bindAddBook () {
  $('#addBook').bind('click', (e) => {
    e.preventDefault();
    toggleAddBook();
    return;
  })
}
