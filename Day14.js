//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, /. Each operand may be an integer or another
 expression.
Note:
Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression
 would always evaluate to a result
 and there won't be any divide by zero operation.
*/

//1 way

// function evalRPN(tokens) {
//   const ops = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => ~~(a / b),
//   };

//   const stack = [];

//   for (let n of tokens) {
//     if (ops[n] != null) {
//       const b = stack.pop();
//       const a = stack.pop();

//       stack.push(ops[n](a, b));
//     } else {
//       stack.push(Number(n));
//     }
//   }

//   return stack[0];
// }

//2 way

// function evalRPN(tokens) {
//   const stack = [];

//   tokens.forEach((token) => {
//     switch (token) {
//       case "+":
//         stack.push(stack.pop() + stack.pop());
//         break;
//       case "-":
//         stack.push(-stack.pop() + stack.pop());
//         break;
//       case "*":
//         stack.push(stack.pop() * stack.pop());
//         break;
//       case "/":
//         stack.push(Math.trunc(1 / stack.pop()) * stack.pop());
//         break;
//       default:
//         stack.push(Number(token));
//         break;
//     }
//   });

//   return stack[0] || 0;
// }

//3 way

function evalRPN(tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    stack.push(
      isNaN(tokens[i])
        ? Math.trunc(eval(stack.splice(-2).join(" " + tokens[i] + " ")))
        : tokens[i]
    );
  }

  return stack[0];
}

let tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));

tokens = ["4", "13", "5", "/", "+"];
console.log(evalRPN(tokens));

tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));

/* Test cases
Example 1:

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/
