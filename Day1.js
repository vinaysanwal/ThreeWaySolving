//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
            Implement a function named factorial
            that has one parameter: an integer, n . 
            It must return the value of n!  (i.e., n factorial).
*/

//1 way
function factorial(n) {
  //using while loop
  let fac = 1;
  while (n > 1) {
    fac *= n;
    n -= 1;
  }
  return fac;
}

//2 Way

function factorial(n) {
  // using loops and recursion
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}

//3 Way

function factorial(n) {
  //using conditional & recursion
  return n > 1 ? n * factorial(n - 1) : 1;
}

//Test Cases
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));

/* Test case:
   4:   24
   5:   120
   10:  3628800
*/
