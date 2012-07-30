# NumberPuzzles

A simple implementation of Number Puzzles in Node.js, using TDD. Just for study. Contributions are welcome!

##Usage
```javascript
var NumberPuzzles = require('NumberPuzzles');
```

###FizzBuzz
The classical FizzBuzz Puzzle

```javascript
NumberPuzzles.FizzBuzz(); // Will print an array of 100 FizzBuzz \m/
//[ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, ... , 98, 'Fizz', 'Buzz' ]

//If pass a number as parameter will print the FizzBuzz of that

NumberPuzzles.FizzBuzz( 1 ); //1
NumberPuzzles.FizzBuzz( 3 ); //'Fizz'
NumberPuzzles.FizzBuzz( 5 ); //'Buzz'
NumberPuzzles.FizzBuzz( 15 ); //'FizzBuzz'
```

###Kafifa!
The Brazilian puzzle: Kafifa!
It's like FizzBuzz, with this diferences:

```javascript
NumberPuzzles.Kafifa( 7 ); //'Kafifa!'
NumberPuzzles.Kafifa( 14 ); //'Kafifa!'
NumberPuzzles.Kafifa( 17 ); //'Kafifa!'
NumberPuzzles.Kafifa( 21 ); //'Kafifa!'
NumberPuzzles.Kafifa( 27 ); //'Kafifa!'
NumberPuzzles.Kafifa( 28 ); //'Kafifa!'
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

