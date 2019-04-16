import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | the bug', function(hooks) {
  setupApplicationTest(hooks);

  test('visit the page', async function(assert) {
    const author = this.server.create('author');
    this.server.createList('book', 2, {author});

    await visit('/');
    assert.dom('.book').exists({count: 2});
  });
});
