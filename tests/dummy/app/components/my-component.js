import Ember from 'ember';

const {
  Component,
  computed: { reads }
} = Ember;

export default Component.extend({
  name: reads('child.name')
});
