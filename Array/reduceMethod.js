const arr = [1, 2, 6, 7, 3, 9, 10];

// max number in the array
const result = arr.reduce((previousVal, currVal, currIndex) => {
  if (currVal > previousVal) {
    previousVal = currVal;
  }
  return previousVal;
},0);

console.log(result);
