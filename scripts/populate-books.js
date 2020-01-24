import books from './books.js';
import makeBook from './make-book.js'
import toggleEditBook from './forms/edit.js'

const pagination = {
  page: 1,
  perPage: 5
}

function paginate (page, perPage) {
  return {
    start: (page - 1) * perPage,
    end: page * perPage
  }
}

function turnThePage (change) {
  pagination.page += change;
  populateBooks(books);
}

function populateBooks (bookArray) {
  const { page, perPage } = pagination;
  const { start, end } = paginate(page, perPage);
  console.log(start, end);
  document.getElementById('bkTableBody').innerHTML = bookArray.slice(start, end).map(book => makeBook(book)).join('');
  bookArray.map(book => attachDisplayHandlers(book.id));
  document.getElementById('bookSearch').reset();
  return;
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

$('#pageDown').bind('click', (e) => {
  e.preventDefault();
  turnThePage(-1);
  return;
})
$('#pageUp').bind('click', (e) => {
  e.preventDefault();
  turnThePage(1);
  return;
})

export default populateBooks;