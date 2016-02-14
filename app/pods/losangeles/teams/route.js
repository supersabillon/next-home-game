import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var data = this.modelFor("losangeles");
        
        return data.data[0];
    }
});
