/* Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */

const func = (arr, k) => {
  //since we're only concerned with 1s, we don't need a hashmap, we can just calc maxRepeat in a primative data type - number
  //determine if we've reached an invalid window where the 0s to replace is greater than k
  //check if leftVal is a 1, and if so, remove the occurance from the maxRepeat variable by decrementing
  //advance start pointer
  //reassign maxLen
  //return maxLen
  let maxLen = 0,
    maxRepeat = 0,
    start = 0,
    end;

  for (end = 0; end < arr.length; end++) {
    if(arr[end] === 1){

      maxRepeat += arr[end];
    }

    // let winSize = end - start + 1
    if ((end - start + 1 - maxRepeat) > k) {
      if (arr[start] === 1) {
        maxRepeat--;
      }
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

console.log(
  "s/b 6: ",
  func((Array = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]), (k = 2))
);
