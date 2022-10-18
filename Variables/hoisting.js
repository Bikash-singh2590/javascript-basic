/*
1. JavaScript hoisting occurs during the creation phase of the execution context 
   
2.The JavaScript engine hoists the variables declared using the let keyword,
but for let/const its allocate the memory  in seperate space not in the global object and we can't access 
the  variable till the variable initialized ,till that time been variable is in the temporal dead zone,
temporal dead zone :-
is the time since when the let/const variable hoisted and till initialize some value to that variable that time b/w that is 
known as "Temporal dead zone"

3.The JavaScript engine doesn’t hoist the function expressions and arrow functions. 
*/

// console.log(a);
// console.log(b);
// c();

// var a = 10;
// let b = 100;

// function c() {
//   var x = 1000;
//   console.log(x);
// }

function func() {
  let a = "Geeks";
  if (true) {
    let a = "GeeksforGeeks"; // New value assigned

    console.log(a);
  }

  console.log(a);
}
func();
