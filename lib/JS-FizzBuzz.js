/*
 * JS-FizzBuzz
 * https://github.com/leobetosouza/JS-FizzBuzz
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the MIT license.
 */

exports.FizzBuzz = function( param ) {

  var _FizzBuzz = function ( x ) {
    var isMultiplo = function ( x, multiplicador ) {
      return x % multiplicador === 0;
    };

    var peso = 1;


    if ( isMultiplo( x, 3 ) ) {
      peso += 3;
    }
    
    if ( isMultiplo( x, 5 ) ) {
      peso += 5;
    }
    
    switch ( peso ) {

      case 1: return x;

      case 4: return 'Fizz';

      case 6: return 'Buzz';

      case 9: return 'FizzBuzz';

    }
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
