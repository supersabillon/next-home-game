import Ember from 'ember';
import teams from '../../utils/fixtures';

export default Ember.Route.extend({
  model() {
    return teams;
  }
});
