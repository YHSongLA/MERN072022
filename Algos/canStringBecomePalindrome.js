/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"  

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
  // edge case if str is empty return false
  if (str.length === 0) {
    return false
  }
  // create a variable to to keep count of odd numbers
  let oddNum = 0
  // create a const variable for frequency table
  const freq = {}
  // iterate through the str
  for (let char of str) {
    // if freq at character exists increment freq at character
    if (freq[char]) {
      freq[char]++
    }
    // otherwise create new freq at character and set it 1
    else {
      freq[char] = 1
    }
    // if check freq at character is odd increment oddNum
    if (freq[char] % 2 !== 0) {
      oddNum++
    }
    // otherwise decrement oddNum
    else {
      oddNum--
    }
  }
  // if oddNum is greater than one return false, otherwise return true
  return oddNum > 1 ? false : true
}
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))