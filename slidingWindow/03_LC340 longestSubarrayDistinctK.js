const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here
  //declare maxLen, winStart, hash
  //put occurances of letters in hash
  //loop through object.keys while k > 2
  //decrement current char, if val is 0, then delete
  //determine maxLen and then return
  const hash = {}
  let maxLen = 0
  let left = 0

  for (let right = 0; right < str.length; right++) {
    let char = str[right]
    hash[char] ? hash[char]++ : hash[char] = 1

    if (Object.keys(hash).length > k) {
      hash[str[left]] -= 1
      if (hash[str[left]] === 0) {
        delete hash[str[left]]
      }
     left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen;
};


console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);

/*Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".*/

const func = (str, K) => {
  //declare start, length, hashmap, maxLen
  //build hashmap
    //conditional checks if curr char value is > K, if so it decrements value
      //update maxLen
      //if value is 0, then key is deleted from hashmap
      //advance start pointer
    //return maxLen
    let hash = {}, start = 0, len = 0

    for (let end = 0; end < str.length; end++) {
      let char = str[end]
      hash[char] ? hash[char]++ : hash[char] = 1

      //can also use if conditional because it's a max problem and we need to increment end as well which expands the window
      while (Object.keys(hash).length > K) {
        let leftChar = str[start]
        //decrements (kinda removes) occurance of that character from hashmap
        hash[leftChar]--
        if(hash[leftChar] === 0){
          delete hash[leftChar]
        }
        start++
      }
      len = Math.max(len, end - start + 1)
    }

    return len
}

console.log('03: 4 ', func(String="araaci", K=2))
console.log('03: 2 ', func(String="araaci", K=1))

