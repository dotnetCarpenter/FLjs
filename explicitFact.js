'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def fact ${trigram} id = ~0 -> ~1;id * (fact ${middledot} sub1)` )
l( "fact:5 -> 120" )

// main
// let conditional = f => id(x => x === 0 ? 1 : f)
// let fact = id(x => x === 0 ? 1 : construction(mul, compose(fact, sub1))(x))
// let _fact
// let fact = y => y === 0 ? [1] : _fact(y)
// _fact = compose(mul, compose(fact, sub1))
// process.exit(0)

let _fact
let id = y => y === 0 && 1
let fact = x => id(x) || mul(x, _fact(x))
_fact = compose(fact, sub1) // fact:5 -> fact:4

let result = fact(5)
l( ...result )

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}

function construction (...f) {
  return (...args) => f.map(f => f(...args))
}

// function id (f) {
//   return (...args) => f(...args)
// }

function mul (...numbers) {
  if (numbers.length === 0) return [1]

  return [numbers.reduce((accu, n) => accu * n)]
}

function sub1 (x) {
  return [x - 1]
}
