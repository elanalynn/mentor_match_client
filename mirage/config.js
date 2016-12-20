export default function() {
  this.namespace = '/api';

  const mentors = {
    data: [{
    type: 'mentors',
    id: 123,
    // attributes: {
      first_name: 'Craig',
      last_name: 'Quincy',
      title: 'Principal Instructor',
      zip_code: '80203',
      strengths: ['Rails', 'PHP'],
      weaknesses: ['Angular'],
      availability: 1.5,
      image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
    // }
  }, {
    type: 'mentors',
    id: 236,
    // attributes: {
      first_name: 'Matthew',
      last_name: 'Bouchard',
      title: 'Resident',
      zip_code: '80203',
      strengths: ['Angular', 'JavaScript'],
      weaknesses: ['Ember'],
      availability: .5,
      image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
    // }
  }, {
    type: 'mentors',
    id: 376,
    // attributes: {
      first_name: 'James',
      last_name: 'Freeman',
      title: 'Resident',
      zip_code: '80203',
      strengths: ['Computer Science', 'JavaScript'],
      weaknesses: ['Rails'],
      availability: .75,
      image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
    // }
  }]
};

  this.get('/mentors', function() {
    return mentors;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
