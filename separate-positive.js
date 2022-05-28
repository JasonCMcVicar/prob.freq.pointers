"use strict";
/** take an array of numbers and mutate it by placing positive numbers to the right and
 * negative numbers to the left. return the array;
 */
function separatePositive(nums) {

  let begin = 0;
  let end = nums.length - 1;

  while (begin < end) {
    if (nums[begin] > 0) {
      begin++;
    } else if (nums[end] < 0) {
      end--;
    } else {
      [nums[begin], nums[end]] = [nums[end], nums[begin]];
      //[nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }
  return nums;
}
