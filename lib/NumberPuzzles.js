/*
 * NumberPuzzles
 * https://github.com/leobetosouza/JSNumberPuzzles
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the WTF-PL license.
 */

module.exports = (function () {
  
  "use strict";

  /**
    * Private Method that returns the FizzBuzz of a number.
    * It will be passed to the makePuzzleFunction()
    * See makePuzzleFunction to understand all the magic
    *
    * @function fizzBuzz
    * @param {Number} an integer number
    * @return {String} Returns 'Fizz' if multiple of 3
    * @return {String} Returns 'Buzz' if multiple of 5
    * @return {String} Returns 'FizzBuzz' if multiple of 3 and 5
    * @return {Number} Returns the number if nothing above
    */

  function fizzBuzz( x ) {

    return ( ( x % 3 ) ? '' : 'Fizz' ) + ( ( x % 5 ) ? '' : 'Buzz' ) || x;

  }

  /**
    * Private Method that returns the Kafifa of a number.
    * It will be passed to the makePuzzleFunction()
    * See makePuzzleFunction to understand all the magic
    *
    * @function kafifa
    * @param {Number} an integer number
    * @return {String} Returns 'Kafifa!' if multiple of 7 or have a 7 in the last digit
    * @return {Number} Returns the number if nothing above
    */
  
  function kafifa( x ) {

    return ( ( x % 7 ) && ( ( x - 7 ) % 10 ) ) ? x : 'Kafifa!';

  }

  /**
    * Private Method that returns the BizzBuzzWoof of a number.
    * It will be passed to the makePuzzleFunction()
    * See makePuzzleFunction to understand all the magic
    *
    * @function bizzBuzzWoof
    * @param {Number} an integer number
    * @return {String} a straight of 'Bizz!', 'Buzz!' or/and 'Woof!
    * @return {Number} Returns the number if nothing above
    */

  function bizzBuzzWoof( x ) {

    /**
      * Private Method that returns the @result n times.
      *
      * Will returns a straight of @result following the rules above:
      * - One if @x is a multiple of @base returns @result
      * - And If @x have @base in any digit returns @result for each digit ta matches
      * 
      * @function makeExpression
      * @param {Number} an integer number will be tested
      * @param {Number} an integer number that are one of the 
      * @param {String} a special word that will be returned or not
      * @return {String} Returns a straight of @result 
      * @return {Number} Returns the @x param if nothing 
      */

    function makeExpression( x, base, result ) {

      // TODO: need works for all the decimals

      var mod = x % base;
      var dif = x - base;
      var dif10 = x - base * 10;

      return ( mod                               ? '' : result ) +
             ( ( dif === 0 ) || ( dif % 10 )     ? '' : result ) +
             ( ( dif10 >= 0 ) && ( dif10 < 10 )  ? result : '' );

    }

    var str = makeExpression( x, 3, 'Bizz! ') +
              makeExpression( x, 5, 'Buzz! ') +
              makeExpression( x, 7, 'Woof! ');

    return str.trim() || x;

  }

  function makePuzzleFunction ( func ) {

    var cache = [];

    return function ( param ) {

      if ( param !== undefined ) {
        
        if ( typeof param === 'number' ) {

          cache[ param ] = cache[ param ] || func( param );

          return cache[ param ];

        }

        throw new Error('Sorry, but I only can extract ' + func.name.charAt(0).toUpperCase() + func.name.substr(1) + ' of a Number');

      }

      return (function() {

        var arr = [];
        var i = 1;

        for ( ; i <= 100; ++i ) {

          cache[ i ] = cache[ i ] || func( i );
          arr[ i - 1 ] =  cache[ i ];
 
        }

        return arr;

      }());

    };

  }

  return {
  
    FizzBuzz : makePuzzleFunction( fizzBuzz ),

    Kafifa : makePuzzleFunction( kafifa ),

    BizzBuzzWoof : makePuzzleFunction( bizzBuzzWoof )

  };

}());