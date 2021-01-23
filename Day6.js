//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
       Write the Function that will take a string and
       make this conversion given a number of rows:
       Ex:
       Input: s = "PAYPALISHIRING", numRows = 3
       Output: "PAHNAPLSIIGYIR"
*/

// 1way

// function convert(s, numRows) {
//   if (numRows === 1) return s;
//   const matrix = [];
//   for (let i = 0; i < numRows; i++) {
//     matrix[i] = [];
//   }
//   for (let i = 0, j = 0, dir = 1; i < s.length; i++, j += dir) {
//     matrix[j].push(s.charAt(i));
//     if (j === 0) dir = 1;
//     if (j === numRows - 1) dir = -1;
//   }
//   return matrix.reduce((res, row) => res + row.join(""), "");
// }

//2 way

// function convert(s, numRows) {
//   if (numRows === 1) {
//     return s;
//   }
//   const N = s.length;
//   const arr = [...Array(numRows)].map((r) => []);

//   for (let i = 0; i < N; i++) {
//     const pos = i % (2 * numRows - 2);
//     const ii = pos < numRows ? pos : 2 * numRows - 2 - pos;
//     arr[ii].push(s[i]);
//   }
//   return arr.map((r) => r.join("")).join("");
// }

// 3 way

function convert(s, numRows) {
  const zigzag = [...new Array(numRows).keys()];

  zigzag.push(...zigzag.slice(1, -1).reverse());

  const rows = new Array(numRows).fill("");
  [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
  return rows.join("");
}

let s = "PAYPALISHIRING";
let numRows = 5;
console.log(convert(s, numRows));

numRows = 4;
console.log(convert(s, numRows));

numRows = 7;
console.log(convert(s, numRows));

/* Test case:
      1) 
         s = "PAYPALISHIRING" , numRows= 5 = PHASIYIRPLIGAN
      2)
         s = "PAYPALISHIRING" , numRows= 4 = PINALSIGYAHRPI
      3)
         s = "PAYPALISHIRING" , numRows= 7 = PNAIGYRPIAHLSI
 */
