export default function(server) {
  const user = server.create('user');
  server.createList('address', 2, {user});
}
