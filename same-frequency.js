"use strict";
// add whatever parameters you deem necessary & write docstring


/** this takes in a number and returns an object with digits in number mapped
 * to keys and frequency of numbers mapped to values. we return an object.
 */
function frequencyCounter(num) {

  const numToCount = {};
  const stringFromNumber = num.toString();

  for (let digit of stringFromNumber) {
    numToCount[digit] = (numToCount[digit] || 0) + 1;
  }

  return numToCount;

}

/** take in two numbers and determine if the exact same frequency of
 * digits appear in both parameters and return a Boolean
 */
function sameFrequency(num1, num2) {

  if (num1.toString().length !== num2.toString().length) {
    return false;
  }

  const numFreq1 = frequencyCounter(num1);
  const numFreq2 = frequencyCounter(num2);

  for (let key in numFreq1) {

    if (numFreq1[key] !== numFreq2[key]) {
      return false;
    }

  }
  return true;
}
