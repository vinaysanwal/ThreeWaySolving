//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
There are n gas stations along a circular route, where the amount of gas 
at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i]
of gas to travel from the ith station to its next (i + 1)th station
. You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas 
station's index if you can travel around the circuit once in the
 clockwise direction, otherwise return -1.
 If there exists a solution, it is guaranteed to be unique
*/

//1 way

// function canCompleteCircuit(gas, cost) {
//   for (let i = 0; i < gas.length; i++) {
//     const res = canComplte(gas, cost, i);

//     if (res[1]) {
//       return i;
//     }
//     i = res[0];
//   }

//   return -1;
// }

// function canComplte(gas, cost, idx) {
//   let curr = 0;
//   for (let i = 0; i < gas.length; i++) {
//     curr = curr + gas[(idx + i) % gas.length] - cost[(idx + i) % cost.length];
//     if (curr < 0) {
//       return [idx + i, false];
//     }
//   }

//   return [0, true];
// }

//2 way

// function canCompleteCircuit(gas, cost) {
//   if (gas.reduce((a, b) => a + b, 0) - cost.reduce((a, b) => a + b, 0) < 0)
//     return -1;

//   let tank = 0;
//   let startpos = 0;

//   for (let i = 0; i < gas.length; i++) {
//     tank += gas[i] - cost[i];

//     if (tank < 0) {
//       startpos = i + 1;
//       tank = 0;
//     }
//   }

//   return startpos;
// }

//3 way

function canCompleteCircuit(gas, cost) {
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const consume = gas[i] - cost[i];
    tank += consume;

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }

    total += consume;
  }

  return total < 0 ? -1 : start;
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));

gas = [2, 3, 4];
cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost));

/*Test Case 
        1)
        Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
        Output: 3
        Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

       2)
        Input: gas = [2,3,4], cost = [3,4,3]
        Output: -1
       Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.


*/
