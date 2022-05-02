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
  let isDiscarded = 0;
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++){
      transArray.push(arr[i]);
      if (typeof transArray[transArray.length-1] === 'string') {
        switch (transArray[transArray.length-1]) {
          case '--discard-next':
            transArray.pop();
            isDiscarded = 1;
            i++;
            break;
          case '--discard-prev':
            transArray.pop();
            if (!isDiscarded) {
              transArray[transArray.length-1] && transArray.pop();
            } else {
              isDiscarded = 0;
            }
            break;
          case '--double-next':
            transArray.pop();
            arr[i+1] && transArray.push(arr[i+1]);
            break;
          case '--double-prev':
            transArray.pop();
            if (!isDiscarded) {
              transArray[transArray.length-1] && transArray.push(transArray[transArray.length-1]);
            } else {
              isDiscarded = 0;
            }            
            break;
          case NaN:
            transArray.pop();
            break;
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
