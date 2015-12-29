import Ember from 'ember';

const {
  Route,
  RSVP: { Promise }
} = Ember;

export default Route.extend({
  model() {
    return {
      promise: new Promise(resolve => {
        resolve(42);
      })
    };
  }
});
