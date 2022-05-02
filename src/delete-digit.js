const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxDigit = 0;
  let tempString = [];
  for (let i = 0; i < (n+'').split('').length; i++) {
    tempString = (n+'').split('');
    tempString.splice(i, 1);
    if (+(tempString.join('')) > maxDigit) {
      maxDigit = +(tempString.join(''));
    }
    tempString = [];
  }
  return maxDigit;
}

deleteDigit(1001);

module.exports = {
  deleteDigit
};
