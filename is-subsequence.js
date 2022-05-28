"use strict";
// add whatever parameters you deem necessary & write docstring

/** we take in two strings and return a boolean if the first string
 * can be found in its exact order within the second string
 */
function isSubsequence(subWord, word) {

  let subPointer = 0;
  let wordPointer = 0;

  while (subPointer !== subWord.length){

    if (wordPointer === word.length) {
      return false;
    }

    if (subWord[subPointer] === word[wordPointer]) {
      subPointer++;
      wordPointer++;
    } else {
      wordPointer++;
    }

  }

  return true;
}
