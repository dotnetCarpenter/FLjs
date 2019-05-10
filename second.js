'use strict'

let l = console.log

l( "def second = s1 \u00b7 tl" )

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
