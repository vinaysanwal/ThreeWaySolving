//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
Given an m x n 2d grid map of '1's (land) and '0's (water), return the
 number of islands.
An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.
*/

//1way
// function numIslands(grid) {
//   let count = 0;

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (grid[row][col] === "1") {
//         count++;
//         helper(grid, row, col);
//       }
//     }
//   }

//   function helper(grid, row, col) {
//     if (
//       row < 0 ||
//       row >= grid.length ||
//       col < 0 ||
//       col >= grid[0].length ||
//       grid[row][col] === "0"
//     ) {
//       return;
//     }

//     grid[row][col] = "0";
//     helper(grid, row - 1, col);
//     helper(grid, row + 1, col);
//     helper(grid, row, col - 1);
//     helper(grid, row, col + 1);
//   }

//   return count;
// }

//2 way

// function numIslands(gird) {
//   function refresh(r, c) {
//     grid[r][c] = 0;

//     if (r > 0 && grid[r - 1][c] === "1") refresh(r - 1, c);

//     if (r < grid.length - 1 && grid[r + 1][c] === "1") refresh(r + 1, c);

//     if (c > 0 && grid[r][c - 1] === "1") refresh(r, c - 1);

//     if (c < grid[0].length - 1 && grid[r][c + 1] === "1") refresh(r, c + 1);
//   }

//   var count = 0;

//   grid.forEach((row, rowIndex) => {
//     row.forEach((item, colIndex) => {
//       if (item === "1") {
//         refresh(rowIndex, colIndex);
//         count += 1;
//       }
//     });
//   });

//   return count;
// }

//3 way

function numIslands(grid) {
  let res = 0;

  const run = (j, i) => {
    if (
      j >= 0 &&
      i >= 0 &&
      j < grid.length &&
      i < grid[0].length &&
      grid[j][i] === "1"
    ) {
      grid[j][i] = "0";

      run(j + 1, i);
      run(j - 1, i);
      run(j, i + 1);
      run(j, i - 1);
    }
  };

  grid.forEach((col, j) => {
    col.forEach((e, i) => {
      if (e === "1") {
        res++;
        run(j, i);
      }
    });
  });

  return res;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));

/* Test cases
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
