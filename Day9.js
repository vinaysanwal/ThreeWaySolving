//Welcome To The Three Ways Series To solve a Problem::

/*Problem Statement:  
    A valid IP address consists of exactly four integers,
     each integer is between 0 and 255, separated by single dots 
     and cannot have leading zeros. 
    

      for Example :
        input = 25525511135   
        output: [ '255.255.11.135', -+'255.255.111.35' ]


*/

//1 Way

// function restoreIpAddress(s) {
//   const ret = [];
//   split(ret, [], s.slice(0, 1), s.slice(1));
//   split(ret, [], s.slice(0, 2), s.slice(2));
//   split(ret, [], s.slice(0, 3), s.slice(3));

//   return ret;
// }

// function split(ret, p, c, r) {
//   if (parseInt(c) > 255) return;

//   if (parseInt(c).toString() != c) return;

//   if (p.length == 3 && (r.length == 0 || !r)) {
//     ret.push(p.concat(c).join("."));
//     return;
//   }

//   if (p.length >= 3) return;
//   if (r.length == 0 || !r) return;

//   if (r.length >= 1) split(ret, p.concat(c), r.slice(0, 1), r.slice(1));
//   if (r.length >= 2) split(ret, p.concat(c), r.slice(0, 2), r.slice(2));
//   if (r.length >= 3) split(ret, p.concat(c), r.slice(0, 3), r.slice(3));
// }

//2 way

// function restoreIpAddress(s) {
//   const res = [];
//   dfs([], 0);

//   return res;

//   function dfs(prefix, idx) {
//     if (prefix.length === 4 && idx === s.length) {
//       res.push(prefix.join("."));
//       return;
//     }

//     if (prefix.length === 4 || idx === s.length) {
//       return;
//     }

//     for (let r = idx; r < s.length; r++) {
//       if (r !== idx && s[idx] === "0") return;

//       const num = parseInt(s.slice(idx, r + 1));

//       if (num > 255) {
//         return;
//       }

//       prefix.push(num);
//       dfs(prefix, r + 1);
//       prefix.pop();
//     }
//   }
// }

//3 way

function restoreIpAddress(s) {
  var map = [];

  function backTracking(s, n, r) {
    if (n < 4 && s.length == 0) return false;

    if (n == 4 && s.length == 0) {
      r = r.slice(0, r.length - 1);

      if (map.indexOf(r) != -1) return false;
      map.push(r);
      return true;
    }

    if (n >= 4 && s.length > 0) return false;

    let t = "";

    for (let i = 0; i < 3; i++) {
      t += s[i] || "";

      if (+t > 255 || (t.length > 1 && t[0] == "0")) return false;

      backTracking(s.slice(i + 1), n + 1, r + t + ".");
    }
  }

  backTracking(s, 0, "");
  return map;
}

let s = "25525511135";
console.log(restoreIpAddress(s));
s = "0000";
console.log(restoreIpAddress(s));
s = "1111";
console.log(restoreIpAddress(s));
s = "010010";
console.log(restoreIpAddress(s));

/* Test case:
 1: 
   input = 25525511135   output: [ '255.255.11.135', 
                                   '255.255.111.35' ]
 2: 
   input = 0000         output: [ '0.0.0.0' ]
 3: 
   input = 1111        output: [ '1.1.1.1' ]
 4: 
   input = 010010      output:  [ '0.10.0.10', '0.100.1.0' ]
*/
