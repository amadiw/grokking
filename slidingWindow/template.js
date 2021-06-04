const find_averages_of_subarrays = (K, arr)=> {
  /* declare winStart to track beg of window
  for loop to sum elements
  conditional checks to see if we summed k elements
  if so then, we push the average into the array
  remove beg elem for sliding window
  advance pointer of beg sliding window
   */
  const result = []
  let winStart = 0,
  sum = 0.0

  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    sum+=arr[winEnd]

    if (winEnd >= K - 1) {
      result.push(sum/K)
      sum-=arr[winStart]
      winStart+=1
    }
  }


  return result
}
const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Result [2.2,2.8,2.4,3.6,2.8]: ${result}`);
