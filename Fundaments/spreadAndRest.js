function sum(x, y, z) {
  return x + y;
}

const string = "abcda";
const array = [1, 2, 3];
const obj = {
  firstName: "Bikash",
  middleName: "kumar",
  lastName: "singh",
};

const spread = { ...array };
// console.log(sum(...string));

const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
console.log(b);
console.log(a);
