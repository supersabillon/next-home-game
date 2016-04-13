/*global moment*/

import Ember from 'ember';

export default Ember.Component.extend({

  fixtures: Ember.computed(function() {
    const NOW = moment();
    let self = this;

    let data = this.get('model').map(function(team) {
      let obj = {};

      obj.name = team.name;
      obj.address = team.address;
      
      if(team.schedule) {
        let games = team.schedule.filter(function(element, index) {
          return moment(element.date).diff(NOW, 'days') >= 0;
        });
        obj.opponent = games[0];
       };
      
      return obj;
    });

    // // sort by date
    // let sorted = data.sort(function(a,b) {
    //   return moment(a.date) - moment(b.date);
    // });

    return data;
  })
});
