//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
     Given an array of strings strs, group the anagrams together. 
     You can return the answer in any order.
       Ex:
       Input:  strs = ["eat","tea","tan","ate","nat","bat"] 
       Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

//1 way

// function groupAnagrams(strs) {
//   if (strs.length === 1) return [strs];

//   const sol = [[strs[0]]];

//   for (let i = 1; i < strs.length; i++) {
//     let j = 0;

//     while (j < sol.length) {
//       const word = sol[j][0];
//       const isAnagram = checkisAnagram(word, strs[i]);

//       if (isAnagram) {
//         sol[j].push(strs[i]);
//         break;
//       } else {
//         j++;
//       }
//     }
//     if (j === sol.length) sol.push([strs[i]]);
//   }

//   return sol;
// }

// const checkisAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const map = new Map();

//   for (let i of str1) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }

//   for (let letter of str2) {
//     if (map.get(letter)) map.set(letter, map.get(letter) - 1);
//     else return false;
//   }

//   return true;
// };

//2 way

// function groupAnagrams(strs) {
//   const m = new Map();

//   for (const s of strs) {
//     const keys = Array(26).fill(0);
//     for (const c of s) {
//       ++keys[c.charCodeAt(0) - 97];
//     }

//     const key = keys.join("#");
//     let val = [];
//     if (m.has(key)) {
//       val = m.get(key);
//     }

//     val.push(s);
//     m.set(key, val);
//   }

//   return Array.from(m.values());
// }

//3 way

function groupAnagrams(strs) {
  let state = [];
  for (let s of strs) {
    const sorted = s.split("").sort().join("");

    state[sorted] = state[sorted] ? [...state[sorted], s] : [s];
  }

  return Object.values(state);
}

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

strs = ["food", "doof", "tan", "ate", "nat"];
console.log(groupAnagrams(strs));

strs = ["cat", "tea", "man", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/* Test case:
      1) 
        strs = ["eat", "tea", "tan", "ate", "nat", "bat"] 
          :: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
      2)
        strs = ["food", "doof", "tan", "ate", "nat"];
        :: 
[ [ 'food', 'doof' ], [ 'tan', 'nat' ], [ 'ate' ] ]
      3)
        strs = ["cat", "tea", "man", "ate", "nat", "bat"];
        ::
        [ [ 'cat' ], [ 'tea', 'ate' ], [ 'man' ], [ 'nat' ], [ 'bat' ] ]
 */
