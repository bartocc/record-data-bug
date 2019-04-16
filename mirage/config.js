export default function() {
  this.get('/users');

  this.get('/addresses/:id/user', function({ addresses }, { params }) {
    let address = addresses.find(params.id)
    return address.user;
  });
}
