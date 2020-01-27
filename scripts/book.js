export default class Book {
  constructor(observable, book) {
    const { id, author, title, cover, rating, pubDate, pages, synopsis } = book;
    this.observable = observable
    this.id = String(id) || '';
    this.author = String(author) || '';
    this.title = String(title) || ''; 
    this.cover = String(cover) || '../assets/images/covers/no-cover.png';
    this.rating = parseInt(rating) || 0;
    this.pages = parseInt(pages) || 0;
    this.pubDate = new Date(pubDate).getFullYear() || new Date().getFullYear().toString();
    this.synopsis = String(synopsis) || '';
    
    this.observable.publish('book-created', {
      id,
      author,
      title,
      cover,
      rating,
      pubDate,
      pages,
      synopsis
    })
  }

  updateBook (updatedBook) {
    const { id, author, title, cover, rating, pubDate, pages, synopsis } = updatedBook;
    this.author = String(author) || '';
    this.title = String(title) || ''; 
    this.cover = String(cover) || '../assets/images/covers/no-cover.png';
    this.rating = parseInt(rating) || 0;
    this.pages = parseInt(pages) || 0;
    this.pubDate = new Date(pubDate).getFullYear() || new Date().getFullYear().toString();
    this.synopsis = String(synopsis) || '';

    this.observable.publish('book-updated', {
      id,
      author,
      title,
      cover,
      rating,
      pubDate,
      pages,
      synopsis
    })
  }

}