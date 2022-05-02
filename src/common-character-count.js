const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  for (let i = 0; i < s1Array.length; i++) {
    if (s2Array.indexOf(s1Array[i]) >= 0) {
      s2Array.splice(s2Array.indexOf(s1Array[i]), 1);
      s1Array.splice(i, 1);
      i--;
      count++;
    }
  }
  return count;
};

module.exports = {
  getCommonCharacterCount
};
