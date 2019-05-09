'use strict'

l( "def SumAndProd = [+,*]" )
l( "SumAndProd(2,3)" )

let SumAndProd = compose(add,mul)
let result = SumAndProd(2,3) // -> [5,6]
l( result )

function compose (f1, f2) {
  let result = []
  return (a, b) => {
    return [f1(a, b), f2(a, b)]
  }
}

function add (a, b) {
  if (b === 0) return a

  return add(a ^ b, (a & b) << 1)
}

function mul (a, b) {
  if (b === 1) return a

  return add(a, mul(a, b - 1))
}


function l (...msg) {
  console.log.apply(console, msg)
}
