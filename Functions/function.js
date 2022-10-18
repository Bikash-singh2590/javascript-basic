// regular function

// arrow function

// anonymous funtion

// Immediately Invoked Function Expression(IIFE)

// first class funtion

// higher order function

// function Expression

// callback function

// Normal funtion with closure concept,lexical scope ,scope chain
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// arraw function
const mul1 = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

console.log(mul1(1)(2)(3));
