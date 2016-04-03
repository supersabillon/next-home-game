import Ember from 'ember';

export default Ember.Component.extend({
  game: Ember.computed('schedule', function() {
    const NOW = moment();

    let games = this.get('schedule').filter(function(item) {
      return moment(item.date).diff(NOW, 'days') >= 0;
    });

    return games;
  })
});
