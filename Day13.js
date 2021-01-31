//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
You are given an array prices where prices[i] is the price of a given stock
 on the ith day.
You want to maximize your profit by choosing a single day to buy one stock
 and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0
*/

//1 way

// function maxProfit(prices) {
//   let minprice = 2 ** 31;
//   let maxProfit = 0;

//   for (i = 0; i < prices.length; i++) {
//     if (prices[i] < minprice) minprice = prices[i];
//     else if (prices[i] - minprice > maxProfit) maxProfit = prices[i] - minprice;
//   }

//   return maxProfit;
// }

//2 way

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   prices.forEach((price, idx) => {
//     if (price < minPrice) minPrice = price;

//     const profit = price - minPrice;

//     if (profit > maxProfit) maxProfit = profit;
//   });

//   return maxProfit;
// }

//3 way

function maxProfit(prices) {
  let mini = prices[0];
  let maxProf = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i])
      maxProf = Math.max(maxProf, prices[i] - mini);
    else mini = Math.min(mini, prices[i]);
  }

  return maxProf;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

prices = [7, 5, 2, 3, 1, 2];
console.log(maxProfit(prices));

/*Test Case 
 Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/
