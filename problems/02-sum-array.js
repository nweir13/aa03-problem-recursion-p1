/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:


***********************************************************************/

function sumArray(arr) {
  // Your code here
  //base case
  if(!arr.length) return 0;

  //recursive step
  let shifty = arr.shift();
  //console.log(shifty)


  // recursive step
  return sumArray(arr) + shifty;
}




console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
