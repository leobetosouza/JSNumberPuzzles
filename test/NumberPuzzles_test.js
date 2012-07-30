var NumberPuzzles = require('../lib/NumberPuzzles.js');

exports['NumberPuzzles'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'number arg': function(test) {

    test.expect(13);
    // tests here
    test.equal(NumberPuzzles.FizzBuzz(1), 1, '1 should be 1.');
    test.equal(NumberPuzzles.FizzBuzz(2), 2, '2 should be 2.');
    test.equal(NumberPuzzles.FizzBuzz(3), 'Fizz', '3 should be Fizz.');
    test.equal(NumberPuzzles.FizzBuzz(5), 'Buzz', '5 should be Buzz.');
    test.equal(NumberPuzzles.FizzBuzz(6), 'Fizz', '6 should be Fizz.');
    test.equal(NumberPuzzles.FizzBuzz(9), 'Fizz', '9 should be Fizz.');
    test.equal(NumberPuzzles.FizzBuzz(10), 'Buzz', '10 should be Buzz.');
    test.equal(NumberPuzzles.FizzBuzz(15), 'FizzBuzz', '15 should be FizzBuzz.');
    test.equal(NumberPuzzles.FizzBuzz(30), 'FizzBuzz', '30 should be FizzBuzz.');
    test.equal(NumberPuzzles.FizzBuzz(60), 'FizzBuzz', '60 should be FizzBuzz.');
    test.equal(NumberPuzzles.FizzBuzz(90), 'FizzBuzz', '90 should be FizzBuzz.');
    test.equal(NumberPuzzles.FizzBuzz(100), 'Buzz', '100 should be Buzz.');
    test.equal(NumberPuzzles.FizzBuzz(0), 'FizzBuzz', '0 should be FizzBuzz.');

    test.done();
  },
  'no args': function(test) {

    var arr = NumberPuzzles.FizzBuzz();

    test.expect(102);

    test.ok( Array.isArray( arr ), 'should be Array.' );
    test.equal( arr.length, 100, 'length should be 100' );

    arr.forEach(function( value, i ) {

      var fizzBuzz = NumberPuzzles.FizzBuzz( i + 1 );
      test.equal( value, fizzBuzz, 'arr[' + i + '] should be ' + fizzBuzz );

    });
    
    test.done();

  },
  'Kafifa!': function(test) {

    test.expect(6);
    // tests here
    test.equal(NumberPuzzles.Kafifa(1), 1, '1 should be 1.');
    test.equal(NumberPuzzles.Kafifa(7), 'Kafifa!', '7 should be Kafifa!');
    test.equal(NumberPuzzles.Kafifa(14), 'Kafifa!', '14 should be Kafifa!');
    test.equal(NumberPuzzles.Kafifa(17), 'Kafifa!', '17 should be Kafifa!');
    test.equal(NumberPuzzles.Kafifa(27), 'Kafifa!', '27 should be Kafifa!');
    test.equal(NumberPuzzles.Kafifa(30), 30, '30 should be 30');

    test.done();
  },
  'Bizz! Buzz! Woof!': function(test) {

    //test.expect(6);
    // tests here
    test.equal(NumberPuzzles.BizzBuzzWoof(1), 1, '1 should be 1.');
    test.equal(NumberPuzzles.BizzBuzzWoof(2), 2, '2 should be 2.');
    test.equal(NumberPuzzles.BizzBuzzWoof(11), 11, '11 should be 11.');
    test.equal(NumberPuzzles.BizzBuzzWoof(26), 26, '26 should be 11.');
    test.equal(NumberPuzzles.BizzBuzzWoof(3), 'Bizz!', '3 should be Fizz!');
    test.equal(NumberPuzzles.BizzBuzzWoof(5), 'Buzz!', '5 should be Buzz!');
    test.equal(NumberPuzzles.BizzBuzzWoof(7), 'Woof!', '7 should be Woof!');
    test.equal(NumberPuzzles.BizzBuzzWoof(17), 'Woof!', '17 should be Woof!');
    test.equal(NumberPuzzles.BizzBuzzWoof(28), 'Woof!', '28 should be Woof!');
    test.equal(NumberPuzzles.BizzBuzzWoof(51), 'Bizz! Buzz!',
                                               '51 should be Bizz! Buzz!');
    
    test.equal(NumberPuzzles.BizzBuzzWoof(21), 'Bizz! Woof!',
                                               '21 should be Bizz! Woof!');
    test.equal(NumberPuzzles.BizzBuzzWoof(33), 'Bizz! Bizz! Bizz!',
                                               '33 should be Bizz! Bizz! Bizz!');
    test.equal(NumberPuzzles.BizzBuzzWoof(15), 'Bizz! Buzz! Buzz!',
                                               '15 should be Bizz! Buzz! Buzz!');
    test.equal(NumberPuzzles.BizzBuzzWoof(30), 'Bizz! Bizz! Buzz!',
                                               '30 should be Bizz! Bizz! Buzz!');

    test.equal(NumberPuzzles.BizzBuzzWoof(50), 'Buzz! Buzz!',
                                               '50 should be Buzz! Buzz!');
    test.equal(NumberPuzzles.BizzBuzzWoof(55), 'Buzz! Buzz! Buzz!',
                                               '55 should be Buzz! Buzz! Buzz!');

    test.equal(NumberPuzzles.BizzBuzzWoof(70), 'Buzz! Woof! Woof!',
                                               '70 should be Buzz! Woof! Woof!');
    test.equal(NumberPuzzles.BizzBuzzWoof(77), 'Woof! Woof! Woof!',
                                               '77 should be Woof! Woof! Woof!');

    test.equal(NumberPuzzles.BizzBuzzWoof(100), 'Buzz!',
                                               '100 should be Buzz!');
    test.equal( NumberPuzzles.BizzBuzzWoof(105),
                'Bizz! Buzz! Buzz! Woof!',
                '105 should be Bizz! Buzz! Buzz! Woof!' );
    test.equal(NumberPuzzles.BizzBuzzWoof(0), 'Bizz! Buzz! Woof!',
                                               '0 should be Bizz! Buzz! Woof!');
    test.done();
  }
};
