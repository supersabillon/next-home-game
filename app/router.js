import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('losangeles', { path: '/LosAngeles' }, function() {
    this.route('lagalaxy', { path: '/LAGalaxy' });
    this.route('lakers');
    this.route('clippers');
    this.route('kings');
  });
});

export default Router;
