export default class BookShelf {
  constructor(observable) {
    this.observable = observable;
    this.books = [];
    
    this.observable.subscribe('book-created', this.addBook.bind(this));
    this.observable.subscribe('book-deleted', this.deleteBook.bind(this));
    this.observable.subscribe('book-updated', this.updateBook.bind(this));
  }

  addBook(book) {
    this.books.push(book);
  }
  deleteBook(id) {
    this.books.splice(this.books.findIndex(book => book.id === id), 1);
  }
  updateBook(updatedBook) {
    this.books.splice(this.books.findIndex(oldBook => oldBook.id === updatedBook.id), 1, updatedBook);
  }
}