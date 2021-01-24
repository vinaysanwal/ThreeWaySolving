//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
      Given an array nums of n integers and an integer target, 
      are there elements a, b, c,
      and d in nums such that a + b + c + d = target
       Ex:
       Input: nums : [1, 0, -1, 0, -2, 2] , target: 2 
       Output: [ [ -1, 0, 1, 2 ] ]
*/

//1 Way
// function fourSum(n, t) {
//   const sol = [];
//   n.sort((a, b) => a - b);
//   for (let f = 0; f < n.length - 3; f++) {
//     if (f > 0 && n[f] === n[f - 1]) continue;
//     for (let s = f + 1; s < n.length - 2; s++) {
//       if (s > f + 1 && n[s] === n[s - 1]) continue;

//       let left = s + 1;
//       let right = n.length - 1;

//       while (left < right) {
//         const sum = n[f] + n[s] + n[left] + n[right];

//         if (sum > t) right--;
//         else if (sum < t) left++;
//         else {
//           sol.push([n[f], n[s], n[left], n[right]]);
//           while (left < right && n[left] === n[left + 1]) left++;
//           while (left < right && n[right] === n[right - 1]) right--;

//           left++;
//           right--;
//         }
//       }
//     }
//   }
//   return sol;
// }

//2 way

// function fourSum(nums, target) {
//   this.res = {};

//   if (nums == null || nums.length < 4) {
//     return [];
//   }

//   nums.sort((a, b) => a - b);

//   let l = nums.length;

//   for (let i = 0; i < l; i++) {
//     for (let j = i + 1; j < l; j++) {
//       let sum = nums[i] + nums[j];

//       //creating a function twosum

//       twoSum(nums.slice(j + 1), target - sum, nums[i], nums[j]);
//     }
//   }

//   return Object.values(this.res);
// }

// function twoSum(nums, target, num1, num2) {
//   let set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     let key = target - nums[i];

//     if (set.has(key)) {
//       let vals = [num1, num2, key, nums[i]];
//       this.res["" + vals + ""] = vals;
//     }

//     set.add(nums[i]);
//   }
// }

//3 way

function fourSum(nums, target) {
  const r = [];
  nums.sort((a, b) => a - b);
  const isNot = (_arr) => {
    for (let i = 0; i < r.length; i++) {
      if (_arr.join("-") === r[i].join("-")) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (nums.slice(k + 1).includes(target - sum)) {
          const _arr = [nums[i], nums[j], nums[k], target - sum];
          if (isNot(_arr)) r.push(_arr);
        }
      }
    }
  }
  return r;
}

let nums = [1, 0, -1, 0, -2, 2];
let target = 2;
console.log(fourSum(nums, target));

target = 1;
console.log(fourSum(nums, target));

target = 3;
console.log(fourSum(nums, target));

/* Test case:
      1) 
         nums : [1, 0, -1, 0, -2, 2] , target: 2 = [ [ -1, 0, 1, 2 ] ]
      2)
         nums : [1, 0, -1, 0, -2, 2] , target: 1 = [ [ -2, 0, 1, 2 ], [ -1, 0, 0, 2 ] ]
      3)
         nums : [1, 0, -1, 0, -2, 2] , target: 3 = [ [ 0, 0, 1, 2 ] ]
 */
