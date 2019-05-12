'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def fact ${trigram} id = ~0 -> ~1;id * (fact ${middledot} sub1)` )
l( "fact:5 -> 120" )

// main
let _fact
let fact = x => x === 0 ? [1] : mul(x, _fact(x))
_fact = compose(fact, sub1) // fact:5 -> fact:4 -> etc.

let result = fact(5)
l( ...result )

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}

function mul (...numbers) {
  if (numbers.length === 0) return [1]

  return [numbers.reduce((accu, n) => accu * n)]
}

function sub1 (x) {
  return [x - 1]
}
