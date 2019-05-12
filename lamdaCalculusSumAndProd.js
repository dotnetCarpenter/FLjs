'use strict'

const { trigram, lambda } = require('./constants')
let l = console.log

l( `def SumAndProd ${trigram} ${lambda}(x,y).(x + y, x * y)` )
l( 'SumAndProd(2,3) -> [5,6]' )

// main
let SumAndProd = (x,y) => [x + y, x * y]
let result = SumAndProd(2,3) // -> [5,6]
l( result )

/* 
  SumAndProd in ES3:
  var SumAndProd = function(x, y) { return [x + y, x * y] }
*/
