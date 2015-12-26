import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource('projects', function() {
    this.route("new");
    this.route('edit', {path: '/edit/:project_id'});
  });
  this.route('users');
  this.route('signup');
  this.route('signin');
});

export default Router;
