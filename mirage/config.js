export default function() {
  this.namespace = '/api';

  this.get('/mentors', function() {
    return {
      data: [{
        type: 'mentors',
        id: 123,
        attributes: {
          first: 'Craig',
          last: 'Quincy',
          title: 'Principal Instructor',
          company: 'Galvanize',
          zip_code: '80203',
          strengths: ['Rails', 'PHP'],
          weaknesses: ['Angular'],
          availability: 1.5,
          image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
        }
      }, {
        type: 'mentors',
        id: 287,
        attributes: {
          first: 'Matthew',
          last: 'Bouchard',
          title: 'Resident',
          company: 'Galvanize',
          zip_code: '80203',
          strengths: ['Angular', 'JavaScript'],
          weaknesses: ['Ember'],
          availability: .5,
          image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
        }
      }, {
        type: 'mentors',
        id: 360,
        attributes: {
          first: 'James',
          last: 'Freeman',
          title: 'Resident',
          company: 'Galvanize',
          zip_code: '80203',
          strengths: ['Computer Science', 'JavaScript'],
          weaknesses: ['Rails'],
          availability: .75,
          image: 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg'
        }
      }]
    };
  });
}
