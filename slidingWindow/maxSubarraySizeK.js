/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3]. */


//Time: O(n)
//Space: O(1)
const maxSubarraySizeK =(k, arr) => {
/*
declare sum,maxSum = 0
calculate total sum with for loop
conditional for when winEnd hits k index
use math.max to determine max sum
remove first elem from window and advance start pointer
*/
let sum = 0, maxSum = 0, winStart = 0

for (let winEnd = 0; winEnd < arr.length; winEnd++) {
  sum+=arr[winEnd]

  if(winEnd >= k-1) {
    maxSum = Math.max(sum, maxSum)
    sum-=arr[winStart]
    winStart++
  }
}
  return maxSum
}

console.log(`s/b 9: ${maxSubarraySizeK(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`s/b 7: ${maxSubarraySizeK(2, [2, 3, 4, 1, 5])}`);
