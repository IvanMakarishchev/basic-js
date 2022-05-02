const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let transArray = [];
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++){
      arrElement = +arr[i]
      if (typeof arrElement === 'number' && !isNaN(arrElement)) {
        transArray.push(arrElement);
      } else {
        if (i > 0 && typeof +arr[i-1] === 'number' && !isNaN(arrElement)){
          switch (arr[i]) {
            case '--discard-next':
              i < arr.length-2 && i++;
              break;
            case '--discard-prev':
              i > 0 && transArray.length > 0 && transArray.pop();
              break;
            case '--double-next':
              i < arr.length-1 && transArray.push(+arr[i+1]*2);
              i++;
              break;
            case '--double-prev':
              (i > 0 && transArray.length > 0) ? transArray[i-1]*=2 : ''
              break;
            case NaN:
              break;
          }
        }
      }
    }
    return transArray;
  } else {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  
}


module.exports = {
  transform
};
