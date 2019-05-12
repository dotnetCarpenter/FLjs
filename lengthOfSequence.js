'use strict'

const { smalltilde } = require('./constants')
let l = console.log

l( `+ ο α:${smalltilde}1` )
l( `(+ ο α:${smalltilde}1):(a,b,c) -> 3` )

// main
let lengthOfSeq = ο(add, α(constant(1)))
let result = lengthOfSeq('a','b','c') // -> 3
l( result )

function constant (c) {
  return () => c
}

function α (f) {
  return (...seq) => seq.map(f)
}

function add (a, b, ...n) {
  if (b == null) return a

  return add(a + b, ...n)
}

function ο (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}
