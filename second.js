'use strict'



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
