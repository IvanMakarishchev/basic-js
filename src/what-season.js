const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = {
    0 : 'winter',
    1 : 'winter',
    2 : 'spring',
    3 : 'spring',
    4 : 'spring',
    5 : 'summer',
    6 : 'summer',
    7 : 'summer',
    8 : 'autumn (fall)',
    9 : 'autumn (fall)',
    10 : 'autumn (fall)',
    11 : 'winter'
  }
  if (date instanceof Date && date != Date()) {
    return season[date.getMonth()];
  } else {
    if (date === null || date === undefined ) {
      return ('Unable to determine the time of year!');
    }
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
