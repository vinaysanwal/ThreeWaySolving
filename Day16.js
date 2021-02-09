//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of moneystashed, the only constraint 
 stopping you from robbing each of themis that adjacent houses have 
 security system connected and it will automatically contact the 
 police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money
 of each house, determine the maximum amount of money you can rob 
 tonight without alerting the police.
*/

//1way
function rob(nums) {
  const val = function (start, obj) {
    if (start >= nums.length) {
      return 0;
    } else {
      let max = 0;

      for (let i = start; i < nums.length; i++) {
        let c = nums[i];
        if (!(i + 2 in obj)) {
          obj[i + 2] = val(i + 2, obj);
        }

        max = max > c + obj[i + 2] ? max : c + obj[i + 2];
      }

      return max;
    }
  };

  return val(0, {});
}
//2way

function rob(nums) {
  if (nums.length == 0) return 0;

  let dp = [...Array(nums.length)].map((x) => 0),
    size = nums.length;
  (dp[size] = 0), (dp[size - 1] = nums[size - 1]);

  for (let i = size - 2; i >= 0; i--) {
    dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
  }

  return dp[0];
}

//3way

function rob(nums) {
  return nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [
    0,
    0,
  ])[1];
}

let nums = [1, 2, 3, 1];
console.log(rob(nums));

nums = [2, 7, 9, 3, 1];
console.log(rob(nums));

/* Test cases
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/
