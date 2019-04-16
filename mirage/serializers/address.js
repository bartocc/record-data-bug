import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({

  links(address) {
    return {
      'user': { related: `/addresses/${address.id}/user` }
    };
  }

});
