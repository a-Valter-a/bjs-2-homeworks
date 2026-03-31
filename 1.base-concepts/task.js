"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    const discriminant = b ** 2 - 4 * a * c

    if(discriminant < 0) {
      return arr
    }

    else if(discriminant === 0) {
      const root = -b / (2 * a)
      arr.push(root)
      return arr
    }

    else if (discriminant > 0) {
      const sqrtD = Math.sqrt(discriminant)
      const root1 = (-b + sqrtD) / (2 * a)
      const root2 = (-b - sqrtD) / (2 * a)
      arr.push(root1, root2)
      return arr
    } 
  
}
console.log(solveEquation(1, -3, 2))
console.log(solveEquation(1, 1, 1))


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12
  const bodyCredit = amount - contribution
  const monthlyPayment = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1))) 
  const creditAllSum = monthlyPayment * countMonths
  return Number(creditAllSum.toFixed(2))
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
console.log(calculateTotalMortgage(10, 0, 20000, 24))
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
console.log(calculateTotalMortgage(10, 20000, 20000, 2))
console.log(calculateTotalMortgage(10, 0, 10000, 36))
console.log(calculateTotalMortgage(15, 0, 10000, 36))




