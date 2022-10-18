const a = { name: "Bikash" };
// const b = a;
// const b = Object.assign({}, a);
const b = { ...a };

b.name = "Viku";
console.log("b object===", b.name);
console.log("a object===", a.name);
