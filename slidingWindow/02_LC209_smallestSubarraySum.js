/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
*/

const func = (arr, S) => {
  //declare start, minLen
  //iterate through array summing numbers
    //use a while loop to update window once sum is >= 7
      //remove start element and move start pointer
    //return maxlen or 0 if minLen is still infinity

  let start = 0, minLen = Infinity, sum = 0

  for(let end = 0; end < arr.length; end++) {
    sum+=arr[end]

    while(sum >= S) {
      minLen = Math.min(minLen, end - start + 1)
      sum-=arr[start]
      start++
    }
  }
  return minLen === Infinity? 0 : minLen
}


console.log('02: answer s/b 2',func([2, 1, 5, 2, 3, 2], S=7))



