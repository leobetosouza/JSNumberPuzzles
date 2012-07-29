# JS-FizzBuzz

A simple implementation of FizzBuzz Puzzle in Node.js, using TDD.

```javascript
var JS_FizzBuzz = require('JS-FizzBuzz');
JS_FizzBuzz.FizzBuzz(); // Will print an array of 100 FizzBuzz \m/
//[ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, ... , 98, 'Fizz', 'Buzz' ]

//If pass a number as parameter will print the FizzBuzz of that

JS_FizzBuzz.FizzBuzz( 1 ); //1
JS_FizzBuzz.FizzBuzz( 3 ); //'Fizz'
JS_FizzBuzz.FizzBuzz( 5 ); //'Buzz'
JS_FizzBuzz.FizzBuzz( 15 ); //'FizzBuzz'
```

##BONUS!
Now with the Brazilian puzzle Kafifa!

```javascript

JS_FizzBuzz.Kafifa( 7 ); //'Kafifa!'
JS_FizzBuzz.Kafifa( 14 ); //'Kafifa!'
JS_FizzBuzz.Kafifa( 17 ); //'Kafifa!'
JS_FizzBuzz.Kafifa( 21 ); //'Kafifa!'
JS_FizzBuzz.Kafifa( 27 ); //'Kafifa!'
JS_FizzBuzz.Kafifa( 28 ); //'Kafifa!'
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

