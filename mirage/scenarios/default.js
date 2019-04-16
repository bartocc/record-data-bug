export default function(server) {
  const author = server.create('author');
  server.createList('book', 2, {author});
}
