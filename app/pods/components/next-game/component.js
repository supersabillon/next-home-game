/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({

  fixtures: Ember.computed(function() {
    const NOW = moment();

    let data = this.get('model').map(function(team) {
      let obj = {};

      obj.name = team.name;
      obj.address = team.address;
      obj.opponent = {};
      
      if(team.schedule.length) {
        let games = team.schedule.filter(function(element, index) {
          return moment(element.date).diff(NOW, 'days') >= 0;
        });
        obj.opponent = games[0];
       } else {
         obj.opponent.date = null;
       }
      
      return obj;
    });

    // sort by date
    let sorted = data.sort(function(a,b) {
      return moment(a.opponent.date) - moment(b.opponent.date);
    });

    return sorted;
  })
});
