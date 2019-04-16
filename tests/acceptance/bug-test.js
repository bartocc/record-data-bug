import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | the bug', function(hooks) {
  setupApplicationTest(hooks);

  test('visit the page', async function(assert) {
    const user = this.server.create('user');
    this.server.createList('address', 2, {user});

    await visit('/');
    assert.dom('.address').exists({count: 2});
  });
});
