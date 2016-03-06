import Ember from 'ember';

export default Ember.Component.extend({
  
  time: Ember.computed('opponent', function() {
    return this.get('opponent.date');
  })

});
