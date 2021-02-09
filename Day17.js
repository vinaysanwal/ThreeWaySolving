//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
All DNA is composed of a series of nucleotides abbreviated as 'A', 'C',
 'G', and 'T', 
for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to 
identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings)
 that occur more than once in a DNA molecule.
*/

//1 way

// function findRepeatedDnaSequences(s) {
//   var l = {};
//   var set = new Set();

//   for (let i = 0; i < s.length - 9; i++) {
//     let c = s.slice(i, i + 10);

//     if (l[c] == undefined) {
//       l[c] = 1;
//     } else {
//       set.add(c);
//     }
//   }

//   return Array.from(set);
// }

//2 way

// function findRepeatedDnaSequences(s) {
//   let seen = new Set();

//   let out = new Set();

//   if (s.length > 10) {
//     for (let i = 0; i <= s.length - 10; i++) {
//       let c = s.substring(i, i + 10);

//       seen.has(c) ? out.add(c) : seen.add(c);
//     }
//   }

//   return [...out];
// }

//3 way

function findRepeatedDnaSequences(s) {
  let map = new Map(),
    result = new Set();

  let chars = { A: 4, C: 5, G: 6, T: 7 };

  let t = 0,
    i = 0,
    n = s.length;

  while (i < n) {
    t = ((t << 3) | chars[s[i++]]) & 0x3fffffff;

    map.has(t) ? result.add(s.slice(i - 10, i)) : map.set(t, 0);
  }

  return [...result];
}

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s));

s = "AAAAAAAAAAAAA";
console.log(findRepeatedDnaSequences(s));

/* Test cases
Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/
