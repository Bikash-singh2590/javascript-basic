/*    
task--
API Student
1: 2s roll no
2: 2s name and age

*/

// executor
// promise produce
const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4, 5];
    resolve(rollNo);
    // reject("Error while Communicating");
  }, 2000);
});

const getBiodata = (indexData) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexData) => {
        let bioData = {
          name: "Bikash Kumar Singh",
          age: 26,
        };
        resolve(
          `My roll no is ${indexData}.My name is ${bioData.name} and I am ${bioData.age} year old.`
        );
      },
      2000,
      indexData
    );
  });
};

// promise consume
// 01
// pobj1
//   .then((rollNo) => {
//     console.log(rollNo);
//     getBiodata(rollNo[2]).then((args) => {
//       console.log(args);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 02 using async/await
async function getData() {
  let rollNo = await pobj1;
  console.log(rollNo);
  
  let bioDatas = await getBiodata(rollNo[2]);
  return bioDatas;
}

const getName = getData().then((myName) => {
  console.log(myName);
});
