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
  this.route('mentee-signup');
  this.route('login');
});

export default Router;
