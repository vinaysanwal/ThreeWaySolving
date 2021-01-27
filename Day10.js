//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
 Given an m x n board and a word, find if the word exists in the grid.
 The word can be constructed from letters of sequentially adjacent cells, 
 where "adjacent" cells are horizontally or vertically neighboring. 
 The same letter cell may not be used more than once.
    
      for Example :
       Input: board = 
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        word = "ABCCED"
       Output: true
*/

//1 way

// function wordExist(board, word) {
//   const neighbors = [
//     [0, -1],
//     [-1, 0],
//     [0, 1],
//     [1, 0],
//   ];

//   const find = (idx, x, y) => {
//     if (idx === word.length) {
//       return true;
//     }

//     if (!board[x] || word[idx] !== board[x][y]) {
//       return false;
//     }

//     board[x][y] = "*";
//     for (const [a, b] of neighbors) {
//       if (find(idx + 1, x + a, y + b)) {
//         return true;
//       }
//     }

//     board[x][y] = word[idx];
//     return false;
//   };

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (find(0, i, j)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

//2 way

// function wordExist(board, word) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === word[0]) {
//         let temp = helper(board, i, j, word, 0);

//         if (temp) {
//           return true;
//         }
//       }
//     }
//   }

//   return false;
// }

// const helper = function (board, i, j, word, wordcnt) {
//   if (
//     i < 0 ||
//     i >= board.length ||
//     j < 0 ||
//     j >= board[i].length ||
//     board[i][j] !== word[wordcnt]
//   ) {
//     return false;
//   }

//   board[i][j] = "-";

//   if (wordcnt === word.length - 1) {
//     return true;
//   }

//   let cnt = wordcnt + 1;

//   if (
//     helper(board, i + 1, j, word, cnt) ||
//     helper(board, i - 1, j, word, cnt) ||
//     helper(board, i, j + 1, word, cnt) ||
//     helper(board, i, j - 1, word, cnt)
//   ) {
//     return true;
//   } else {
//     board[i][j] = word[wordcnt];
//     return false;
//   }
// };

//3 way

function wordExist(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (check(i, j, 0)) return true;
      }
    }
  }
  return false;

  function check(i, j, s) {
    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[i].length ||
      board[i][j] !== word[s]
    ) {
      return false;
    }
    board[i][j] = "#";
    const newPos = s + 1;
    if (newPos === word.length) return true;
    if (
      check(i + 1, j, newPos) ||
      check(i - 1, j, newPos) ||
      check(i, j + 1, newPos) ||
      check(i, j - 1, newPos)
    ) {
      return true;
    } else {
      board[i][j] = word[s];
      return false;
    }
  }
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";
console.log(wordExist(board, word));

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
word = "SEE";
console.log(wordExist(board, word));

(board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]),
  (word = "ABCB");
console.log(wordExist(board, word));

/* Test case:
 1: 
    Input: board = 
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        word = "ABCCED"
       Output: true
 2: 
   board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
   word = "SEE"
   Output: true
 3: 
   Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
   word = "ABCB"
   Output: false
*/
