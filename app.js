let arr1 = [1 ,3, 6, 9]
let arr2 = [1 ,2, 8]

function quickSort(arr) {
  if(arr.length <= 1) return arr
  
  let pivot = arr.shift()
  const greater = []
  const less = []
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i])
  }
  return quickSort(less) + [pivot] + quickSort(greater)
}

const mergedArr = quickSort([...arr1, ...arr2])

const isEven = mergedArr.length%2==0
const singleIndx = Math.floor(mergedArr.length/2)

const middle = isEven ? {m1: singleIndx-1, m2: singleIndx} : singleIndx

const median = isEven ? mergedArr[middle.m1] + mergedArr[middle.m2] /2 : mergedArr[middle]

// driver code
console.log("median.",median);
