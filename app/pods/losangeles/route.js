import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var teams = {
      data: [{
        "name": "Galaxy"
      },
      {
        "name": "Kings"
      },
      {
        "name": "Lakers"
      },
      {
        "name": "Clippers"
      },
      {
        "name": "Dodgers"
      },
      {
        "name": "Rams"
      }]
    };

    return teams;
  }

});
