const {runner} = require("../runner");
/**
 * Time complexity O(logN)
 * Space complexity O(1)
 *
 * @param array
 * @param searchValue
 * @returns {boolean}
 */
const binarySearch = (array, searchValue) => {
  let left = 0;
  let right = array.length - 1;
  while(left <= right) {
    const middleValue = Math.ceil((left + right) / 2);
    if(array[middleValue] === searchValue) {
      return true;
    }
    if(array[middleValue] > searchValue) {
      right = middleValue - 1;
    } else if(array[middleValue] < searchValue) {
      left = middleValue + 1;
    }
  }

  return false;
}

runner(binarySearch);