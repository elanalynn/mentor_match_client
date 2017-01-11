import Ember from 'ember';

const loginOptions = [
  {
    name: 'LinkedIn',
    endpoint: '#',
    class: 'linkedin'
  },{
    name: 'GitHub',
    endpoint: '#',
    class: 'github'
  },{
    name: 'Twitter',
    endpoint: '#',
    class: 'twitter'
  },{
    name: 'Google',
    endpoint: '#',
    class: 'google'
  },{
    name: 'Instagram',
    endpoint: '#',
    class: 'instagram'
  },{
    name: 'Facebook',
    endpoint: '#',
    class: 'facebook'
  },{
    name: 'Etsy',
    endpoint: '#',
    class: 'etsy'
  },
];

export default Ember.Route.extend({
  model() {
    return loginOptions;
  }
});
