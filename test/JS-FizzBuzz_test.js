var JS_FizzBuzz = require('../lib/JS-FizzBuzz.js');

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(JS_FizzBuzz.awesome(), 'awesome', 'should be awesome.');
    test.done();
  }
};
