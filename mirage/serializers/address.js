import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  alwaysIncludeLinkageData: true,

  links(address) {
    return {
      'user': { related: `/addresses/${address.id}/user` }
    };
  }

});
