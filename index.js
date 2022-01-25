function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true;
      }
      else{
        continue;
      }
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Initialize the outer loop, which will keep track of the number we're comparing to
    Initialize the inner loop to iterate through the rest of the array
      Checks if the sum of the first and second number equals to the target number
      If true, then it will retuen true
      If false, it will continue iterating
  If the entire array has been iterated through w/o returning true,
  then it will return false
*/

/*
  Add written explanation of your solution here
  I use a nested loop to keep track of the first number we're comparing to, and compare it
  to the rest of the array by iterating with the inner loop
  'i' is the index of the number we're comparing to the rest of the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
