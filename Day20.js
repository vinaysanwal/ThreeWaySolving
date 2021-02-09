//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:

You are playing the following Nim Game with your friend:
Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones
 from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win 
the game assuming both you and your friend play optimally, otherwise return 
false.

*/

//1 way
// const memo = { 0: false, 1: true, 2: true, 3: true, 4: false };

// function canWinNim(n) {
//   if (memo[n] === undefined) {
//     meno[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1);
//   }

//   return memo[n];
// }

//2 way

// function canWinNim(n) {
//   var dp = new Array(n);
//   dp[0] = true;
//   dp[1] = true;
//   dp[2] = true;
//   dp[3] = false;

//   for (var i = 4; i < n; ++i) {
//     dp[i] = !dp[i - 1] || !dp[i - 2] || !dp[i - 3];
//   }

//   return dp[n - 1];
// }

//3 way

function canWinNim(n) {
  if (n === 0) return 0;
  if (n % 4 === 0) return false;

  return true;
}

n = 4;
console.log(canWinNim(n));

n = 1;
console.log(canWinNim(n));

n = 2;
console.log(canWinNim(n));

/* Test Cases 
Example 1:

Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
Example 2:

Input: n = 1
Output: true
Example 3:

Input: n = 2
Output: true


*/
