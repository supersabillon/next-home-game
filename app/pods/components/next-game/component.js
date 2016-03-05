/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({
  opponent: Ember.computed('schedule', function() {
    const NOW = moment();
    let schedule = this.get('schedule.date');
    let nextGame = schedule.filter(function(index) {
      console.log(this);
      //return moment(schedule.date).diff(NOW, 'days') > 0;
    });
    
   // console.log(nextGame);
    //console.log(this.getIndexOfLowest(nextGame));

    return schedule[0].team;
  }),
  
  getIndexOfLowest(arr) {
    let min = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    
    return minIndex;
  }
});
