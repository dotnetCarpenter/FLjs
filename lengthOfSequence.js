'use strict'

const { smalltilde, middledot, alpha } = require('./constants')
let l = console.log

l( `+ ${middledot} ${alpha}:${smalltilde}1` )
l( `(+ ${middledot} ${alpha}:${smalltilde}1):(a,b,c) -> 3` )

// main
let lengthOfSeq = compose(add, (...a) => a.map(_ => 1))
let result = lengthOfSeq('a','b','c') // -> 3
l( result )

function add (a, b, ...n) {
  l('add', a, b, n)
  if (b == null) return a

  return add(a + b, ...n)
}

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}
