/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:


***********************************************************************/


function sumToN(n) {
  // Your code here 
  
// base case 1
if(n === 0) return 0;
// base case 2
if(n < 0) return null;

//recursive call and step
return sumToN(n - 1) + n;
}


console.log(sumToN(5)); // returns 15
console.log(sumToN(1))  // returns 1
console.log(sumToN(9)) // returns 45
console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
