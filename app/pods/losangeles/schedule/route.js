import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    let teams = this.modelFor('losangeles').data;

    let schedule = teams.find(function(item) {
      return item.shortname === params.losangeles_shortname;
    });
    console.log(schedule);
    let data = 'data';

   return schedule;
  }
});
