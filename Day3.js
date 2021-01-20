//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
         Create a function That will return 
        if string is [aeiou] return A
        if string is [bcdfg] return B
        if string is [hjklm] return c
        else return D
*/

//1 way

// function getLetter(s) {
//   let letter;

//   switch (true) {
//     case "aeiou".includes(s[0]):
//       letter = "A";
//       break;
//     case "bcdfg".includes(s[0]):
//       letter = "B";
//       break;
//     case "hjklm".includes(s[0]):
//       letter = "C";
//       break;
//     case "znpqrstvwxy".includes(s[0]):
//       letter = "D";
//       break;
//   }
//   return letter;
// }

//2 Way

// function getLetter(s) {
//   let letter;
//   letter = "aeiou".includes(s[0])
//     ? "A"
//     : "bcdfg".includes(s[0])
//     ? "B"
//     : "hjklm".includes(s[0])
//     ? "C"
//     : "znpqrstvwxy".includes(s[0])
//     ? "D"
//     : null;

//   return letter;
// }

//3 Way

function getLetter(s) {
  return "DABC"[Number.parseInt("aeioubcdfghjklm".indexOf(s[0]) / 5 + 1)];
}

console.log(getLetter("aeiou"));
console.log(getLetter("bcdfg"));
console.log(getLetter("hjklm"));
/* Test case:
       aeiou:  A
       bcdfg:  B
       hjklm:  C
    */
