import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('losangeles', { path: '/LosAngeles' }, function() {
    this.route('lagalaxy', { path: '/Galaxy' });
    this.route('lakers', { path: '/Lakers'} );
    this.route('clippers', { path: '/Clippers'} );
    this.route('kings', { path: '/Kings'} );
  });
});

export default Router;
