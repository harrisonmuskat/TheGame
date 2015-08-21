var assert = require('assert')

suite('dummy-1', function() {
  test('dummy', function() {
    assert.equal(11, 11);
  });

  test('dummy2', function() {
    assert.equal(2, 2);
    assert.equal(3,3);
  });
});