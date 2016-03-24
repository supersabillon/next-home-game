/*global moment*/
import Ember from 'ember';

export function formatDate(params) {
  return moment(params[0]).format('dddd MMMM D, h:mm a');
}

export default Ember.Helper.helper(formatDate);
