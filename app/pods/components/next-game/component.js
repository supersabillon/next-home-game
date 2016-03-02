/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({
  opponent: Ember.computed('schedule', function() {
    let schedule = this.get('schedule');
    let gameDates = schedule.map(function(item, index, enumerable) {
      console.log(moment(item.date));
    });
    let now = moment();
        
    console.log(now);
    return schedule[0].team;
  })
});
