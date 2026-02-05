function getArrayParams(...arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = arr.reduce((acc, item) => {
    acc += item
    return acc
  },0)
  const avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))


function summElementsWorker(...arr) {
  if (arr.length === 0) return 0
  return arr.reduce((acc, item) => acc += item, 0)
}

console.log(summElementsWorker())
console.log(summElementsWorker(10, 10, 11, 20, 10))

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0
  return Math.max(...arr) - Math.min(...arr)
}

console.log(differenceMaxMinWorker())
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10))

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0

  for(let i = 0; i < arr.length; i++) {
    if (arr.length === 0) return 0
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else { sumOddElement += arr[i] }          
  }  
  return sumEvenElement - sumOddElement
}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17))
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0
  let sumEvenElement = 0
  let countEvenElement = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement += 1
    }
  }
  return sumEvenElement / countEvenElement
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity

  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
    maxWorkerResult = result
    }
  }   
  return maxWorkerResult
}

console.log(makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], summElementsWorker)); 
console.log(makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], differenceMaxMinWorker)); 
console.log(makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], differenceEvenOddWorker)); 
console.log(makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], averageEvenElementsWorker)); 
