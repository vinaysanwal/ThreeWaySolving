//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
Given an array of citations (each citation is a non-negative integer) of a
 researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h
 if h of his/her N papers have at least h citations each, and the other N − h 
 papers have no more than h citations each."
*/

//1 way

// function hIndex(citations) {
//   citations.sort((a, b) => b - a);

//   let h = 0;

//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] >= i + 1) h = i + 1;
//     else break;
//   }
//   return h;
// }

//2 way

// function hIndex(citations) {
//   let len = citations.length;
//   let result = 0;
//   if (!citations || len === 0) return result;

//   citations.sort((a, b) => b - a);
//   citations.forEach((x, i) => {
//     if (x >= i + 1 && (i < len - 1 ? citations[i + 1] <= i + 1 : true))
//       result = i + 1 > result ? i + 1 : result;
//   });
//   return result;
// }

//3 way

function hIndex(citations) {
  const N = citations.length;
  let bucket = Array.from({ length: N + 1 }).map((n) => 0);
  citations.forEach((n) => {
    bucket[Math.min(n, N)]++;
  });

  let count = 0;
  for (let h = N; h >= 0; h--) {
    count += bucket[h];
    if (count >= h) return h;
  }
}

let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));

citations = [2, 1, 6, 7, 5, 9, 10, 9];
console.log(hIndex(citations));

citations = [4, 0, 3];
console.log(hIndex(citations));

/* Test Cases 
Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.

Input: citations = [2, 1, 6, 7, 5, 9, 10, 9]
Output: 5


Input: citations = [4,0,3]
Output: 2

*/
