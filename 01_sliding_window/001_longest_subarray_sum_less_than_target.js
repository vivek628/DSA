/*Given an array arr of positive integers and 
an integer target, find the maximum length of 
a contiguous subarray whose sum is less than target. 
Also return that subarray.*/

function longest_subarr(arr, target) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxlength = 0;
  let startindex = 0;
  while (right < arr.length) {
    sum = sum + arr[right];

    while (sum >= target) {
      sum = sum - arr[left];
      left = left + 1;
    }

    let currentmax = right - left + 1;
    if (currentmax > maxlength) {
      maxlength = currentmax;
      startindex = left;
    }
    right = right + 1;
  }

  return arr.slice(startindex, startindex + maxlength);
}

let arr = [2, 1, 5, 1, 3, 2];
let target = 8;

console.log(longest_subarr(arr, target));

/*
Time: O(n)
Space: O(k)
 */
