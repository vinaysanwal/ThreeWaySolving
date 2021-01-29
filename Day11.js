//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
A robot is located at the top-left corner of a m x n grid 
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid 
How many possible unique paths are there?

Example::

  input:
     m = 3 n =7
     output = 28
*/

//1 way
// function uniquePaths(m, n) {
//   const matrix = Array.from({ length: n + 1 }).map(() =>
//     Array.from({ length: m + 1 }).fill(0)
//   );

//   matrix[0][0] = 1;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       const up = matrix[i - 1][j];
//       const left = matrix[i][j - 1];
//       const diagonal = matrix[i - 1][j - 1];

//       matrix[i][j] = Math.max(up + left, up + diagonal, left + diagonal);
//     }
//   }

//   return matrix[n][m];
// }

//2 way

// function uniquePaths(m, n) {
//   const res = [];
//   for (let i = 0; i < n; i++) {
//     res.push([...new Array(m).fill(1)]);
//   }

//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < m; j++) {
//       res[i][j] = res[i - 1][j] + res[i][j - 1];
//     }
//   }

//   return res[n - 1][m - 1];
// }

//3 way

function uniquePaths(m, n) {
  const res = Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[j] = res[j - 1] + res[j];
    }
  }
  return res[n - 1];
}

let m = 3;
let n = 7;
console.log(uniquePaths(m, n));

m = 3;
n = 2;
console.log(uniquePaths(m, n));

m = 7;
n = 3;
console.log(uniquePaths(m, n));

m = 3;
n = 3;
console.log(uniquePaths(m, n));

/* Test case:
     1)
     input:
     m = 3 n =7
     output = 28

    2)
     input:
     m = 3 n = 2
     output = 3

    3)
     input:
     m = 7 n = 3
     output = 28

    4)
     input:
     m = 3 n = 3
     output = 6


*/
