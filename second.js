'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def second ${trigram} s1 ${middledot} tl` )
l( "second:(2,3,4)" )

// main
let s1 = s(0)
let second = compose(s1, tl)
let result = second(2,3,4) // -> 3
l( result )

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}

function s (ith) {
  return (...seq) => seq[ith]
}

function tl (_, ...seq) {
  return seq
}
