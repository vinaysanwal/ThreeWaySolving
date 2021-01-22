//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
        Create a function which will return a count of all objects in
         an array .
*/

//1 way

// function getCount(objects) {
//   let n = 0;
//   for (let o of objects) {
//     n += o.x == o.y;
//   }
//   return n;
// }

//2 Way

// function getCount(objects) {
//   return objects.filter((item) => item.x === item.y).length;
// }

//3 Way

function getCount(objects) {
  let count = 0;
  objects.forEach((o) => {
    o.x === o.y ? count++ : null;
  });
  return count;
}

let obj = [1, 4, 3, 4];
console.log(getCount(obj));
obj = [1, 4];
console.log(getCount(obj));
obj = [1, 4, 3, 4, 7, 7];
console.log(getCount(obj));

/* Test case:
       [1,4,3,4] : 4
       [1,4] : 2
       [1,4,3,7,7] : 6
 */
