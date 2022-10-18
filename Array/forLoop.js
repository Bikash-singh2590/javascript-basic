let array = [0, 1, 2, 5, 2, 3, 4, 6];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}

function findSecondMax(arr) {
  let max = 0;
  let secondMax;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

function findOccurrence(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

function uniqueArray(arr) {
  let uniq = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniq.includes(arr[i])) {
      continue;
    } else {
      uniq.push(arr[i]);
    }
  }
  return uniq;
}

// let array = [,1, 2, 3, 2, 2, 4, 6];
let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    console.log("1st", inputArr[i]);
    for (let j = 0; j < len; j++) {
      console.log("2nd", inputArr[j]);
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

let array1 = [1, 5, 3, 7, 4, 9, 2];
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
