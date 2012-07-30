# NumberPuzzles
===============

Simple implementations of some Number Puzzles in Node.js, using TDD. Just for study. Contributions are welcome!


## Usage
---------------
```javascript
var NumberPuzzles = require('NumberPuzzles');

NumberPuzzles.FizzBuzz(); // Will return an array of 100 FizzBuzz \m/
//[ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, ... , 98, 'Fizz', 'Buzz' ]
```
### Puzzles

Each puzzle method returns an array of 100 elements in the rules of puzzle. If you pass a number it will returns that number in the puzzle.

#### FizzBuzz
The classical FizzBuzz Puzzle

```javascript
NumberPuzzles.FizzBuzz( 1 ); //1
NumberPuzzles.FizzBuzz( 3 ); //'Fizz'
NumberPuzzles.FizzBuzz( 5 ); //'Buzz'
NumberPuzzles.FizzBuzz( 15 ); //'FizzBuzz'
```

#### Kafifa!
A Brazilian puzzle. It's like FizzBuzz, but it's Kafifa!

```javascript
NumberPuzzles.Kafifa( 7 ); //'Kafifa!'
NumberPuzzles.Kafifa( 14 ); //'Kafifa!'
NumberPuzzles.Kafifa( 17 ); //'Kafifa!'
NumberPuzzles.Kafifa( 21 ); //'Kafifa!'
NumberPuzzles.Kafifa( 27 ); //'Kafifa!'
NumberPuzzles.Kafifa( 28 ); //'Kafifa!'
```

#### Bizz! Buzz! Woof!
A elaborate FizzBuzz, as decribled on [Wikipedia](http://en.wikipedia.org/wiki/Bizz_buzz#Bizz_Buzz_Woof).

```javascript
NumberPuzzles.BizzBuzzWoof( 3 ); //'Bizz!'
NumberPuzzles.BizzBuzzWoof( 5 ); //'Buzz!'
NumberPuzzles.BizzBuzzWoof( 7 ); //'Woof!'
NumberPuzzles.BizzBuzzWoof( 15 ); //'Bizz! Buzz! Buzz!'
NumberPuzzles.BizzBuzzWoof( 50 ); //'Buzz! Buzz!'
NumberPuzzles.BizzBuzzWoof( 57 ); //'Bizz! Buzz! Woof!'
NumberPuzzles.BizzBuzzWoof( 70 ); //'Buzz! Woof! Woof!'
NumberPuzzles.BizzBuzzWoof( 105 ); //'Bizz! Buzz! Buzz! Woof!'
```

## Contributing
---------------
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Testing
Clone the repository on you machine. You'll need ([node.js](http://nodejs.org/) and [grunt](https://github.com/cowboy/grunt)) to run the tests:

```
grunt test
```

Enjoy!

##License
---------------
### WTFPL
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

	Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

	Everyone is permitted to copy and distribute verbatim or modified
	copies of this license document, and changing it is allowed as long
	as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

	0. You just DO WHAT THE FUCK YOU WANT TO.
