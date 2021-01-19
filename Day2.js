//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
         Create a GradeScore function That will return 
         if 25 < score <= 30 , then grade = A.
         if 20 < score <= 25 , then grade = B.
         if 15 < score <= 20 , then grade = C.
         if 10 < score <= 15 , then grade = D.
         if 5 < score <= 10 , then grade = E.
         if 0 < score <= 5 , then grade = F.
*/

//1 way

// function getGrade(score) {
//   return "FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)];
// }

//2 Way

// function getGrade(score) {
//   return "FFEDCBA"[Math.ceil(score / 5.0)];
// }

//3 Way

function getGrade(score) {
  if (0 <= score && score <= 30) {
    return String.fromCharCode(70 - parseInt((score - 1) / 5));
  }
}

console.log(getGrade(5));
console.log(getGrade(30));
console.log(getGrade(15));
/* Test case:
     5:   F
     30:  A
     15:  D
  */
