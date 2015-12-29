import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { RSVP: { Promise } } = Ember;

moduleForComponent('helper:resolve-promise', 'Integration | Helper | resolve promise', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  let promise = Promise.resolve(42);
  this.set('promise', promise);

  this.render(hbs`{{resolve-promise promise}}`);

  assert.equal(this.$().text().trim(), '42');
});
