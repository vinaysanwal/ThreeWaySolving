//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the 
number is. When your friend makes a guess, you provide a hint with the
 following info:

The number of "bulls", which are digits in the guess that are in the 
correct position.
The number of "cows", which are digits in the guess that are in your
 secret number but are located in the wrong position. Specifically, 
 the non-bull digits in the guess that could be rearranged such that
  they become bulls.
Given the secret number secret and your friend's guess guess, return
 the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and
 y is the number of cows. Note that both secret and guess may contain
  duplicate digits.
*/

//1 way
// function getHint(secret, guess) {
//   let i = 0,
//     bull = 0,
//     cow = 0,
//     secMap = new Map(),
//     gusMap = new Map();

//   while (i < secret.length) {
//     if (secret[i] == guess[i]) {
//       bull++;
//     } else {
//       let s = secMap.get(secret[i]) ? secMap.get(secret[i]) + 1 : 1;
//       let g = gusMap.get(guess[i]) ? gusMap.get(guess[i]) + 1 : 1;

//       secMap.set(secret[i], s);
//       gusMap.set(guess[i], g);
//     }
//     i++;
//   }

//   for (let [key, value] of gusMap) {
//     let g = secMap.get(key) || 0;
//     cow += Math.min(g, value);
//   }

//   return `${bull}A${cow}B`;
// }

//2 way

// function getHint(secret, guess) {
//   let guessArr = new Array(10).fill(0);
//   let secretArr = new Array(10).fill(0);
//   let bull = 0;
//   let cow = 0;

//   getBulls();
//   getCows();
//   cow = cow - bull;

//   return `${bull}A${cow}B`;

//   function getBulls() {
//     for (let i = 0; i < secret.length; i++) {
//       secretArr[Number(secret[i])]++;
//       guessArr[Number(guess[i])]++;
//       if (secret[i] === guess[i]) {
//         bull++;
//       }
//     }
//   }

//   function getCows() {
//     for (let i = 0; i < 10; i++) {
//       cow += Math.min(Number(guessArr[i]), Number(secretArr[1]));
//     }
//   }
// }

// 3 way

function getHint(secret, guess) {
  let bull = 0;
  let cow = 0;

  const map = {};

  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);

    if (s === g) {
      bull++;
    } else {
      if (map[s] < 0) cow++;
      if (map[g] > 0) cow++;

      map[s] = parseInt(map[s] || "0") + 1;
      map[g] = parseInt(map[g] || "0") - 1;
    }
  }

  return `${bull}A${cow}B`;
}

let secret = "1807";
let guess = "7810";
console.log(getHint(secret, guess));

secret = "1123";
guess = "0111";
console.log(getHint(secret, guess));

secret = "1";
guess = "0";
console.log(getHint(secret, guess));

secret = "1";
guess = "1";
console.log(getHint(secret, guess));

/* Test cases
Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
Example 3:

Input: secret = "1", guess = "0"
Output: "0A0B"
Example 4:

Input: secret = "1", guess = "1"
Output: "1A0B"
*/
