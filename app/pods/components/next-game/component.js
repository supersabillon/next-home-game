/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({

  opponents: Ember.computed(function() {
    const NOW = moment();
    let self = this;

    let data = this.get('model').map(function(team) {

      if(team.schedule) {
        let games = team.schedule.filter(function(element, index) {
          return moment(element.date).diff(NOW, 'days') >= 0;
        });
        return games[self.getIndexOfLowest(games)];
       };

    });

    let sorted = data.sort(function(a,b) {
      return moment(a.date) - moment(b.date);
    });

    return sorted;
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
