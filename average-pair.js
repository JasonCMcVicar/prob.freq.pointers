"use strict";

/** Return true/false if targetAvg can be made with 2 nums in array nums */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length-1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) return true;
    else if (avg > targetAvg) right--;
    else left++;
  }
  return false;
}

