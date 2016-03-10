/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({
  time: Ember.computed('opponent', function () {
    return moment(this.get('opponent.date')).format('dddd MMMM Do, h:mm a');
  })

});
