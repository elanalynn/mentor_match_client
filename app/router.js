import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('mentors');
  this.route('mentor-signup');
  this.route('mentor-signup-form');
  this.route('mentee-signup');
  this.route('mentee-signup-form');
  this.route('login', function() {
    this.route('local-signup');
    this.route('local-login');
  });
  this.route('safety');
});

export default Router;
