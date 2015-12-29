import Ember from 'ember';

const {
  Route,
  RSVP: { Promise }
} = Ember;

export default Route.extend({
  model() {
    return {
      promise: Promise.resolve(42),
      child: Promise.resolve(Ember.Object.create({
        name: 'Kelly Selden'
      }))
    };
  }
});
