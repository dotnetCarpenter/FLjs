'use strict'

const { trigram, middledot } = require('./constants')

let l = console.log

l( `def second ${trigram} s1 ${middledot} tl` )
l( "second:(2,3,4)" )

let second = compose(s1, tl)
let result = second(2,3,4)
l( result )

function compose (f1, f2) {
  return (a, b) => {
    return [f1(a, b), f2(a, b)]
  }
}

function s1(s1, ...seq) {
  return s1
}

function tl (_, ...seq) {
  return seq
}
