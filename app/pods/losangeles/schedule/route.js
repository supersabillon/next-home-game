import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    let teams = this.modelFor('losangeles').data;

    let data = teams.find(function(item) {
      return item.shortname === params.losangeles_shortname;
    });

   return data;
  }
});
