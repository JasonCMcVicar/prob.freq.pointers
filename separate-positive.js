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
      //either way works here...
      //[nums[begin], nums[end]] = [nums[end], nums[begin]];
      [nums[end], nums[begin]] = [nums[begin], nums[end]];
    }
  }
  return nums;
}
