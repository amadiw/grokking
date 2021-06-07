/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb". */

const func = (str, k) => {
//declare start, maxLength, hashmap
//determine if current window has repeating characters

let hash = {}, start = 0, maxLen = 0, maxReapeatLetterCount = 0

for(let end = 0; end < str.length; end++) {
  let char = str[end]
  hash[char] ? hash[char]++ : hash[char] = 1

  maxReapeatLetterCount = Math.max(maxReapeatLetterCount, hash[char])

  //check to see if current window size less repeatiting characters (remaining characters) > k
  if((end - start + 1 - maxReapeatLetterCount) > k) {
    console.log('end-start +1:', end - start + 1 )
    console.log('maxRepeat: ',maxReapeatLetterCount)
    let leftChar = str[start]
    hash[leftChar]--
    start++
  }
  maxLen = Math.max(maxLen, end - start +1)
}


  return maxLen
}

console.log(func(String="aabccbb", k=2))
