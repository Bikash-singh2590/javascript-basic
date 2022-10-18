let radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

// console.log(calculate(radius, area));

// Higher-order functions are functions which take another function as argument or return a function from it known as HOF
const Person = {
  play: (name) => {
    return `Hey ${name} is playing`;
  },
  dance: (name) => {
    return `${name} can dance`;
  },
  walk: (name) => {
    return `I am sure ${name} can walk `;
  },
};

console.log(Person.play("Chibueze"));
console.log(Person.dance("Chibueze"));
console.log(Person.walk("Chibueze"));
// First-class functions are functions that are treated as variables. They can also be parsed into other functions as arguments.
/*
First-class functions are JavaScript functions that can behave like variables.

They can also be parsed as arguments to higher-order functions.
*/
