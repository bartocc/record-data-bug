import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({

  links(book) {
    return {
      'author': { related: `/books/${book.id}/author` }
    };
  }

});
