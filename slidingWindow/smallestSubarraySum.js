/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 */

const smallest_subarray_with_given_sum = (S, arr) => {
  let minLen = Infinity
  let winStart = 0
  let sum = 0

  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    sum+=arr[winEnd]

    while(sum >= S) {
      minLen = Math.min(minLen, winEnd - winStart +1)
      sum-=arr[winStart]
      winStart++
    }
  }
  //if minLength not updated, then array is empty and return zero
  return minLen === Infinity? 0 : minLen
}

console.log(`s/b 2: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`s/b 1: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`s/b 3: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
