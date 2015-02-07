var assert = require('assert');
describe('basic', function () {
  it('overrides the express app.set method with a method that supports dot-nested notation', function () {
    var express = require('express');
    require('..');
    var app = express();
    app.set('my.nested.config.param', true);
    assert.deepEqual(app.get('my'), { nested: { config: { param: true } } });
    assert.strictEqual(app.get('my.nested.config.param'), true);
  });
});