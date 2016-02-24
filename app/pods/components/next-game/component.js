import Ember from 'ember';

export default Ember.Component.extend({
  opponent: Ember.computed('schedule', function() {
    var schedule = this.get('schedule');
      console.log('schedule is ' + schedule[0].team);
    return 'test';
  })
});
