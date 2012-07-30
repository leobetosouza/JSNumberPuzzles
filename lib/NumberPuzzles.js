/*
 * NumberPuzzles
 * https://github.com/leobetosouza/JSNumberPuzzles
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the WTF-PL license.
 */

module.exports = (function () {
  
  "use strict";

  function fizzBuzz( x ) {

    return ( ( x % 3 ) ? '' : 'Fizz' ) + ( ( x % 5 ) ? '' : 'Buzz' ) || x;

  }
  
  function kafifa( x ) {

    // Imprime Kafifa! para qualquer número multiplo de 7  ou terminado em 7

    return ( ( x % 7 ) && ( ( x - 7 ) % 10 ) ) ? x : 'Kafifa!';

  }

  function bizzBuzzWoof( x ) {

    function makeExpression ( x, base, result ) {

      // BizzBuzzWoof logic
      // Se @x é multiplo de @base, imprime @resulte
      // Se @x contem @base na unidade, também imprime @result
      // Se @x contem @base na dezena, também imprime @result
      // TODO: precisa funcionar para todas as casa decimais

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

    // remove o espaço no final

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