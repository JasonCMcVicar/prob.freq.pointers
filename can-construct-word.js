"use strict";
/** we will take two strings and return a Boolean whether or not
 * first string can be made with only the letters in the second string
 * with no duplication of second string characters
 */
// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  if (letters.length < word.length) {
    return false;
  }
  const lettersToCount = {};

  for (let letter of letters) {
    // if (letter in lettersToCount) {
    //   lettersToCount[letter]++;
    // } else {
    //   lettersToCount[letter] = 1;
    // }
    lettersToCount[letter] = (lettersToCount[letter] || 0) + 1;
  }
  console.log(lettersToCount);

  for (let char of word) {
    if (char in lettersToCount) {
      if (lettersToCount[char] > 0) {
        lettersToCount[char]--;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
canConstructWord('aabb', 'bcabad');
