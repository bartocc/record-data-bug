import DS from 'ember-data';

export default DS.Model.extend({
  addresses: DS.hasMany()
});
