import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cars', function() {
    this.route('car', {
      path: ':id'
    });
  });
});

export default Router;
