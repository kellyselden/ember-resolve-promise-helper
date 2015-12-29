import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | resolve promise');

test('visiting /', function(assert) {
  assert.expect(4);

  visit('/');

  andThen(function() {
    assert.notEqual($('#unresolved-promise').text().trim(), '42');
    assert.equal($('#resolved-promise').text().trim(), '42');
    assert.equal($('#unresolved-promise-to-component').text().trim(), 'unresolved');
    assert.equal($('#resolved-promise-to-component').text().trim(), 'Kelly Selden');
  });
});
