//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
        Create a function where an array nums of n number.The function 
        must find and return the second largest number in nums.
*/

//1 way

// function getSecondLargest(nums) {
//   let largest = Math.max(...nums);
//   let secondLargest = 0;
//   for (let num of nums) {
//     if (num > secondLargest && num != largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }

//2 Way
// function getSecondLargest(nums) {
//   let sortedSmallest;
//   if (Array.isArray(nums)) {
//     sortedSmallest = nums
//       .sort((a, b) => b - a)
//       .filter((item, i, arr) => arr.indexOf(item) === i);
//   }

//   return sortedSmallest[1];
// }

//3 Way

function getSecondLargest(nums) {
  const max = Math.max(...nums);
  return Math.max(...nums.filter((x) => x !== max));
}

let num = [2, 4, 6, 7, 7];
console.log(getSecondLargest(num));
num = [3, 5, 8, 7, 8];
console.log(getSecondLargest(num));
num = [4, 4, 5, 7, 9];
console.log(getSecondLargest(num));

/* Test case:
         [2 , 4 , 6 , 7, 7]:  6
         [3 , 5 , 8 , 7, 8]:  7
         [4 , 4 , 5 , 7, 9]:  7
      */
