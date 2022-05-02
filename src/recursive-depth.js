const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor () {
    this.depth = 1;
    this.tempDepth = 1;
  }
  calculateDepth(arr) {
    if (arr instanceof Array && !arr.length) {
      (this.tempDepth > this.depth) && (this.depth = this.tempDepth);
      this.tempDepth = 1;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array){
        this.tempDepth++;
        this.calculateDepth(arr[i]);
      } else if (i === arr.length-1) {
        (this.tempDepth > this.depth) && (this.depth = this.tempDepth);
        this.tempDepth = 1;
      }
    }
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};
