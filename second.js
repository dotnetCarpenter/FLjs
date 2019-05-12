'use strict'

const { trigram, middledot } = require('./constants')
let l = console.log

l( `def second ${trigram} s1 ${middledot} tl` )
l( "second:(2,3,4) -> 3" )

// main
let s1 = s(0)
let second = compose(s1, tl)
let result = second(2,3,4) // -> 3
l( ...result )

function compose (...f) {
  return (...args) => {
    return f.reduceRight((accu, f) => f(...accu), args) // f1(...f2(...args))
  }
}

/**
 * Returns a function that returns the ith element of a sequence
 * @param {number|string} ith index or key
 * @returns {function}
 */
function s (ith) {
  /**
   * @param {...any} seq
   * @returns {any}
   */
  return (...seq) => [seq[ith]]
}

/**
 * 
 * @param {any} _ ignored
 * @param  {...any} seq
 * @returns {[]any} seq
 */
function tl (_, ...seq) {
  return seq
}
