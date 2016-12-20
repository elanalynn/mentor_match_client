import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  title: DS.attr(),
  zip_code: DS.attr(),
  strengths: DS.attr(),
  weaknesses: DS.attr(),
  availability: DS.attr(),
  image: DS.attr()
});
