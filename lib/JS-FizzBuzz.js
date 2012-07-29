/*
 * JS-FizzBuzz
 * https://github.com/leobetosouza/JS-FizzBuzz
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the MIT license.
 */

exports.FizzBuzz = function( param ) {

  function _FizzBuzz( x ) {

    return ( ( x % 3 ) ? '' : 'Fizz' ) + ( ( x % 5 ) ? '' : 'Buzz' ) || x;

  }

  if ( param !== undefined ) {
    
    if ( typeof param === 'number' ) {

      return _FizzBuzz( param );

    }

    return;

  }

  return (function(){

    var arr = [];
    var i = 1;

    for ( ; i <= 100; ++i ) {
      arr[ i - 1 ] =  _FizzBuzz( i );
    }

    return arr;

  }());
  

};