'use strict'

const { trigram } = require('./constants')
let l = console.log

l( `def SumAndProd ${trigram} [+,*]` )
l( "SumAndProd:(2,3)" )

// main
let SumAndProd = construction(add,mul)
let result = SumAndProd(2,3) // -> [5,6]
l( result )

function construction (f1, f2) {
  return (a, b) => {
    return [f1(a, b), f2(a, b)]
  }
}

function add (a, b) {
  if (b === 0) return a

  return add(a ^ b, (a & b) << 1)
}

function mul (a, b) {
  if (b === 1) return a

  return add(a, mul(a, b - 1))
}

