/*
*
*
*       Complete the handler logic below
*
*
*/

module.exports = function ConvertHandler() {

  this.getNum = function(input) {
    const m = input.match(/[^a-z]/gi);
    if(!m) return null;
    if(m.includes('/')) {
      const fraction = m.join('').split('/').filter(x => x != '');
      if(fraction.length != 2) return null;

      return fraction.reduce((a, b) => Number(a) / Number(b));
    }

    return Number(m.join(''));
  };

  this.getUnit = function(input) {
    const result = input.match(/(gal|lbs|l|kg|mi|km)$/gi);
    return result? result[0]: null;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    const units = {
      gal: 'l',
      lbs: 'kg',
      mi: 'km'
    };

    for (let prop in units) {
      if(prop == initUnit) result = units[prop];
      else if(units[prop] == initUnit) result = prop
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    const result = unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const miToKm = 1.60934;
    const lbsToKg = 0.453592;
    
    switch(initUnit) {
    case 'gal': 
      result = initNum * galToL;
      break;
    case 'l':
      result = initNum / galToL;
      break;
    case 'mi':
      result = initNum * miToKm;
      break;
    case 'km':
      result = initNum / miToKm;
      break;
    case 'lbs':
      result = initNum * lbsToKg;
      break;
    case 'kg':
      result = initNum / lbsToKg;
      break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
};
