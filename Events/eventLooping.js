function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

// console.log("Start script...");
// task("Call an API");
// console.log("Done!");

// call stack  :- Javascript engine uses a CALL STACK to manage execution contexts(LIFO)
// wep api box :- that creates timer ,after time  expire it will move to the callback queue or task queue
// callback Queue box
// Event loop :- it take the funtion from callback queue when call stack is empty.
// call satck

// console.log("Start script...");

// setTimeout(() => {
//   task("Download a file.");
// }, 1000);

// console.log("Done!");

console.log("Start script...");

setTimeout(() => {
  task("Download a file.");
}, 0);

console.log("Done!");
