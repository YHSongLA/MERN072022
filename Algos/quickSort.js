/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) { 
    // FIND THE MIDDLE INDEX
    let pivotIndex = Math.floor((left + right)/2)
    let pivotValue = nums[pivotIndex]

    let tempPivotIndex = right
    // SWAP THE PIVOT VALUE WITH THE RIGHT BOUND
    let temp = nums[pivotIndex]
    nums[pivotIndex] = nums[right]
    numd[right] = temp
    right--
    while (true) {
        while (nums[left] < pivotValue) {
            // START MOVING YOUR LEFT POINT RIGHT UNTIL WE SEE A VALUE GREATER THAN THE PIVOT VALUE
            left++
        }
        while (nums[right] > pivotValue) {
            // START MOVING YOUR RIGHT POINTER LEFT UNTIL WE SEE A VALUE LESS THAN THE PIVOT VALUE
            right--
        }
        // ONCE THE LEFT AND THE RIGHT POINTERS HAVE CROSSED, SWAP THE PIVOT WITH THE LEFT POINTER
        if (left >= right) {
            let temp = nums[tempPivotIndex]
            nums[tempPivotIndex] = nums[left]
            nums[left] = temp
            // RETURN THE INDEX WHERE THE PIVOT ENDED UP
            return left;
        }
        // SWAP THE LEFT AND RIGHT POINTER
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp;
        // THEN MOVE THE LEFT AND RIGHT POINTER
        left++
        right--
    }
}

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
 function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex);
        quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
}