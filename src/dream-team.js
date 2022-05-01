const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';
  if (members instanceof Array) {
    members.forEach(el => {
      if (isNaN(el) && el){
        for (let i = 0; i < el.length; i++) {
          if (el[i].match(/[A-Za-z]/g) && !(el instanceof Array)) {
            teamName += el[i].toUpperCase();
            break;
          }
        }
      }
    })
    return teamName.split('').sort().join('');
  } else {
    return false;    
  }
}

module.exports = {
  createDreamTeam
};
