'use strict'

console.log(intsto(2))
console.log(intsto(-2))
console.log(intsto(1))
console.log(intsto(-1))
console.log(intsto(0))

function intsto (to) {
  let ret = []
  return to > 0 ? posIntsto(to, ret) : negIntsto(to, ret)
}

function posIntsto(to, ret) { 
  while (to > 0) 
    ret.unshift(to--)
  
  return ret
}

function negIntsto(to, ret) {
  while (to < 0) 
    ret.unshift(to++)
  
  return ret
}
