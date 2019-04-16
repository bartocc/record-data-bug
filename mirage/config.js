export default function() {
  this.get('/authors');

  this.get('/books/:id/author', function({ books }, { params }) {
    let book = books.find(params.id)
    return book.author;
  });
}
