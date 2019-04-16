import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  model() {
    return this.store.query('author', { include: 'books' }).then((authors) => {
      return authors.get('firstObject');
    });
  }
}
