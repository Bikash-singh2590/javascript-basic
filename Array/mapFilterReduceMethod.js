const users = [
  { firstName: "Bikash", lastName: "Singh", age: 26 },
  { firstName: "viku", lastName: "kumar", age: 30 },
  { firstName: "ram", lastName: "kumar", age: 45 },
  { firstName: "mohan", lastName: "kumar", age: 45 },
];

// oocrrence of age
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// expected o/p:["Bikash","viku"]
// using map/filter
const output1 = users
  .filter((item) => item.age < 40)
  .map((val) => val.firstName);
// console.log(output1);

// using reduce
const output2 = users.reduce((acc, curr) => {
  if (curr.age < 40) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output2);
