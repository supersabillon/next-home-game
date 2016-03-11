import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('losangeles', { path: '/la' }, function () {
    this.route('index', {
      path: '/test'
    });
    this.route('schedule', {
      path: '/:losangeles_name'
    });
  });
});

export default Router;
