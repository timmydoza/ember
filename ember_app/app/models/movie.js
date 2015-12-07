import DS from 'ember-data';

export default DS.Model.extend({
  //_id: DS.attr(),
  title: DS.attr(),
  year: DS.attr(),
  director: DS.attr(),
  actors: DS.attr()
});
