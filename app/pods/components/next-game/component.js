/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({
  opponent: Ember.computed('schedule', function() {
    const NOW = moment();
    let schedule = this.get('data.schedule');

    if (schedule) {
      let nextGames = schedule.filter(function(element, index) {
        return moment(element.date).diff(NOW, 'days') >= 0;
      });
      
      return nextGames[this.getIndexOfLowest(nextGames)];
    } else {
      return false;
    };

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
