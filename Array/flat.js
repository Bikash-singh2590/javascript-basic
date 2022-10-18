let arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];
let arr3 = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];

// ========================Flatten Array================================
/*  flat an array with flat() method and without that  ?*/

// #WITH flat()
let arr1 = [1, 2, [3, [4, 5, 6], 7], 8];
// console.log(arr3.flat(Infinity));

// flat() method also deals with array holes(i.e. empty array elements)
let arr2 = [1, , 3, 4, 5];
// console.log(arr2.flat());

// #without
let flatArray1 = [].concat.apply([], arr);
let flatArray2 = [].concat(...arr);

let flatArray3 = arr.reduce((acc, curVal) => {
  return acc.concat(curVal);
}, []);

// console.log(flatArray3);

// ======================CONCAT ARRAY=========================
/* merge two array or more using inbuilt and without inbuilt ?*/
let array1 = ["a", "b", "c"];
let array2 = ["c", "c", "d", "e"];

// #with concat()
console.log(array1.concat(array2));

// #without
function concatArray(arr1, arr2) {
  let finalArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (finalArr.indexOf(arr1[i]) == -1) finalArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (finalArr.indexOf(arr2[i]) == -1) finalArr.push(arr2[i]);
  }
  return finalArr;
}

const output = concatArray(array1, array2);
// console.log(output);
