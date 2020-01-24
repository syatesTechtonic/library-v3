import books from './books.js';
import bookSearch from './forms/search.js';
import toggleAddBook from './forms/add.js';
import populateBooks from './populate-books.js';

$(document).ready(() => populateBooks(books));

$('#showAllBooks').bind('click', (e) => {
  e.preventDefault();
  $('#bkTableBody').children().remove();
  populateBooks(books);
  return;
})

$('#addBook').bind('click', (e) => {
  e.preventDefault();
  toggleAddBook();
  return;
})

bookSearch();