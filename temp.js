const { match } = require("assert");
const Promise = require("bluebird");

const fetchItemData = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 1) {
        reject(new Error("Network Error!"));
      } else {
        resolve({
          id,
          name: `Item ${id}`,
          legs: Math.floor(Math.random() * 5),
        });
      }
    }, Math.random() * 1000 + 500);
  });

const arr = Array.from(Array(100), (i, k) => k);
const test = async () => {
  const items = await Promise.map(
    arr,
    (id) => {
      console.log("start", id);
      return fetchItemData(id);
    },
    {
      concurrency: 10,
    }
  );
  console.log(items);
  // const items = [];
  // for (let id of arr) {
  //   console.log("start", id);
  //   items.push(fetchItemData(id));
  // }
  // console.log(await Promise.all(items));
};

test();

// const fetchItemData = (id, callback) => {
//   setTimeout(() => {
//     callback(null, {
//       id,
//       name: `Item ${id}`,
//       legs: Math.floor(Math.random() * 5),
//     });
//   }, Math.random() * 1000 + 500);
// };

// // const countTotalLegs = (arr, callback) => {
// //   // TODO:
// //   const items = [];
// //   let done = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     fetchItemData(i, (err, item) => {
// //       done++;
// //       items.push(item);
// //       if (done >= arr.length) {
// //         callback(
// //           err,
// //           items.reduce((prev, curr) => prev + curr.legs, 0)
// //         );
// //       }
// //     });
// //   }
// // };

// const each = (arr, handler, callback) => {
//   const items = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     handler(i, (err, item) => {
//       count++;
//       items[i] = item;
//       if (count >= arr.length) {
//         callback(err, items);
//       }
//     });
//   }
// };

// const eachLimit = (arr, limit, handler, callback) => {
//   console.log("start...");
//   const items = [];
//   let count = 0;
//   let temp = 0;
//   let complete = 0;

//   function reExcute() {
//     while (temp < limit) {
//       let currentIndex = count;
//       if (currentIndex >= arr.length) {
//         break;
//       }
//       temp++;
//       handler(count, (err, item) => {
//         // console.log(temp);
//         items[currentIndex] = item;
//         complete++;
//         temp--;
//         if (complete >= arr.length) {
//           callback(err, items);
//         } else {
//           reExcute();
//         }
//       });
//       count++;
//     }
//   }
//   reExcute();
// };

// const arr = Array.from(Array(100), (i, k) => k);
// eachLimit(
//   arr,
//   10,
//   (id, cb) => {
//     console.log("start", id);
//     fetchItemData(id, cb);
//   },
//   (err, items) => {
//     console.log(items);
//   }
// );

// // each(
// //   arr,
// //   (id, cb) => fetchItemData(id, cb),
// //   (err, items) => {
// //     console.log(items);
// //   }
// // );
