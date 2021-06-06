/*Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].*/

const func = (arr, k) => {
  //declare sum & maxSum variable
  //for loop to accumulate sum of elements
  //once sum is of k elements, then subtract first num out of sum and move start pointer

  let sum = 0, maxSum = 0, start = 0

  for(let end = 0; end < arr.length; end++) {
    sum+=arr[end]

    if(end >= k - 1) {
      maxSum = Math.max(sum, maxSum)
      sum-=arr[start]
      start++
    }

  }
  return maxSum

}
console.log('01_s/b 9', func([2, 1, 5, 1, 3, 2], k=3))


