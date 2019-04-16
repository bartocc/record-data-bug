import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  model() {
    return this.store.query('user', { include: 'addresses' }).then((users) => {
      return users.get('firstObject');
    });
  }
}
