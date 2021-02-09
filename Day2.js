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

function getGrade(score) {
  //"FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)]

  // let x = typeof score;
  // x = parseInt(score);

  // console.log(typeof x);

  // let x = "FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)];
  // return x;

  x = "FEDCBA"[5];
  return x;

  // 0.8  F
  // 5.8  A
  // 2.8  D
}

console.log(getGrade("5"));
console.log(getGrade(30));
console.log(getGrade("15"));
/* Test case:
     5:   F
     30:  A
     15:  D
  */
