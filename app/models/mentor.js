import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr(),
  title: DS.attr(),
  company: DS.attr(),
  zip_code: DS.attr(),
  strengths: DS.attr(),
  weaknesses: DS.attr(),
  availability: DS.attr(),
  image: DS.attr()
});
