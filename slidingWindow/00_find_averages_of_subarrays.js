/*Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Output: [2.2, 2.8, 2.4, 3.6, 2.8]*/

//declare start pointer to track window
//declare sum, array for result
//iterate through arr and calculate sum
//push average for k elements into       array
//update window -> remove 1st elem from sum and then advance start pointer

const find_averages_of_subarrays=(k, arr) => {
  let start = 0,
      sum = 0,
      result = []

  for (let end = 0; end < arr.length; end++) {
    sum+=arr[end]

    if (end >= k - 1) {
    result.push(sum/k)
    sum-=arr[start]
    start++
  }
  }


  return result
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);


