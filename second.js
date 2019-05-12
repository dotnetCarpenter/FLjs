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
 * Selects the ith element of a sequence
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
 * Returns all but the first element of a sequence
 * @param {any} _ ignored element
 * @param  {...any} seq Sequence of elements
 * @returns {[]any} All arguments but the first element
 */
function tl (_, ...seq) {
  return seq
}
