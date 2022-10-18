/*
1.Closure is a function that references variable in the outer scope from its inner scope.

2.Lexical scope ,scope can be nested and the inner function can access the variable declared in its outer scope.

*/

// 01
function sayHello() {
  var name = "Bikash";
  function message() {
    // var name = "Kumar";
    console.log(`Hello ${name}`);
  }
  return message();
}
// sayHello();

// 02
function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
// let sayHi = greeting("Hi");
// console.log(sayHi("John")); // Hi John

// closures in a loop
// 03
for (let index = 1; index <= 3; index++) {
  console.log(index);

  setTimeout(function () {
    console.log(index);
    // console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
// The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure.
//  It remembers the value of i from the last iteration of the loop, which is 4.

// solution of eg.03---- i)let ii)IIFE(immediately invoked function expression)
// let keyword will create a new lexical scope in each iteration.beacause let is a block scope.
/*
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
*/

/*
// because an IIFE creates a new scope by declaring a function and immediately execute it.
for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " second(s):" + index);
    }, index * 1000);
  })(index);
}
*/

/* 
==>Summary
1.Lexical scoping describes how the JavaScript engine uses the location of the variable in the code 
to determine where that variable is available.

2.A closure is a combination of a function and its ability to remember variables in the outer scope.
*/
