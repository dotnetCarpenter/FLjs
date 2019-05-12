'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def fact ${trigram} ~0 -> ~1;id * (fact ${middledot} sub1)` )
l( "fact:5" )

let fact = 

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}

function construction (...f) {
  return (...args) => f.map(f => f(...args))
}
