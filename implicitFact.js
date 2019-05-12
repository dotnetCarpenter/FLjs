'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def fact ${trigram} * ${middledot} intsto` )
l( "fact:5 -> 120" )

// main
let fact = compose(mul, intsto)
let result = fact() // -> 120
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

function intsto (to) {
  let ret = []
  
  while (to > 0) 
    ret.unshift(to--)
  
  return ret
}
