/*
 * JS-FizzBuzz
 * https://github.com/leobetosouza/JS-FizzBuzz
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the MIT license.
 */

exports.FizzBuzz = function( param ) {

  var _FizzBuzz = function ( x ) {

    var fizzBuzz = '';


    if ( x % 3 === 0 ) {
      fizzBuzz += 'Fizz';
    }
    
    if ( x % 5 === 0 ) {
      fizzBuzz += 'Buzz';
    }
    
    return ( fizzBuzz === '' ) ? x : fizzBuzz;
  };

  if ( param !== undefined ) {
    
    if ( typeof param === 'number' ) {

      return _FizzBuzz( param );

    } else {

      return;

    }

  }

  return (function(){
    var arr = [];
    var i = 0;

    for ( ; i < 100; ++i ) {
      arr[ i ] = _FizzBuzz( i + 1 );
    }

    return arr;

  }());
  

};
