import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { RSVP: { Promise } } = Ember;

moduleFor('helper:resolve-promise', 'Unit | Helper | resolve promise', {
  unit: true
});

test('it works', function(assert) {
  assert.expect(2);
  let done = assert.async();

  let helper = this.subject();
  let promise = Promise.resolve(42);

  function recompute() {
    let result = helper.compute([promise]);

    assert.strictEqual(result, 42);
    done();
  }

  helper.recompute = () => setTimeout(recompute);

  let result = helper.compute([promise]);

  assert.strictEqual(result, null);
});
