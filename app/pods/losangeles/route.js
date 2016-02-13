import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var teams = {
      data: [{
        "name": "Galaxy",
        "schedule": [
            {
                team: "Santos Laguna",
                date: "2016-02-24 19",
                competition: "CCL"
            },
            {
                team: "DC United",
                date: "2016-03-06 19",
                competition: "MLS"
            },
            {
                team: "SJ Earthquakes",
                date: "2016-03-19 19:30",
                competition: "MLS"
            },
            {
                team: "Portland Timbers",
                date: "2016-04-10 18:30",
                competition: "MLS"
            },
            {
                team: "Real Salt Lake",
                date: "2016-04-23 19:30",
                competition: "MLS"
            },
            {
                team: "NE Revolution",
                date: "2016-05-08 12:30",
                competition: "MLS"
            },
            {
                team: "SJ Earthquakes",
                date: "2016-05-22 16",
                competition: "MLS"
            }
        ]
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
