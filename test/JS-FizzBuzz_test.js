var JS_FizzBuzz = require('../lib/JS-FizzBuzz.js');

exports['FizzBuzz'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'number arg': function(test) {

    test.expect(13);
    // tests here
    test.equal(JS_FizzBuzz.FizzBuzz(1), 1, '1 should be 1.');
    test.equal(JS_FizzBuzz.FizzBuzz(2), 2, '2 should be 2.');
    test.equal(JS_FizzBuzz.FizzBuzz(3), 'Fizz', '3 should be Fizz.');
    test.equal(JS_FizzBuzz.FizzBuzz(5), 'Buzz', '5 should be Buzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(6), 'Fizz', '6 should be Fizz.');
    test.equal(JS_FizzBuzz.FizzBuzz(9), 'Fizz', '9 should be Fizz.');
    test.equal(JS_FizzBuzz.FizzBuzz(10), 'Buzz', '10 should be Buzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(15), 'FizzBuzz', '15 should be FizzBuzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(30), 'FizzBuzz', '30 should be FizzBuzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(60), 'FizzBuzz', '60 should be FizzBuzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(90), 'FizzBuzz', '90 should be FizzBuzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(100), 'Buzz', '100 should be Buzz.');
    test.equal(JS_FizzBuzz.FizzBuzz(0), 'FizzBuzz', '0 should be FizzBuzz.');

    test.done();
  },
  'no args': function(test) {

    var arr = JS_FizzBuzz.FizzBuzz();

    test.expect(102);

    test.ok( Array.isArray( arr ), 'should be Array.' );
    test.equal( arr.length, 100, 'length should be 100' );

    arr.forEach(function( value, i ) {

      var fizzBuzz = JS_FizzBuzz.FizzBuzz( i + 1 );
      test.equal( value, fizzBuzz, 'arr[' + i + '] should be ' + fizzBuzz );

    });
    
    test.done();

  },
  'Kafifa!': function(test) {

    test.expect(6);
    // tests here
    test.equal(JS_FizzBuzz.Kafifa(1), 1, '1 should be 1.');
    test.equal(JS_FizzBuzz.Kafifa(7), 'Kafifa!', '7 should be Kafifa!');
    test.equal(JS_FizzBuzz.Kafifa(14), 'Kafifa!', '14 should be Kafifa!');
    test.equal(JS_FizzBuzz.Kafifa(17), 'Kafifa!', '17 should be Kafifa!');
    test.equal(JS_FizzBuzz.Kafifa(27), 'Kafifa!', '27 should be Kafifa!');
    test.equal(JS_FizzBuzz.Kafifa(30), 30, '30 should be 30');

    test.done();
  }
};
