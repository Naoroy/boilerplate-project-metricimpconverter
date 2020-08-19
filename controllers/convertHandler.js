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
    if(!m) return 1;
    if(m.includes('/')) {
      const fraction = m.join('').split('/').filter(x => x != '');
      if(fraction.length != 2) return null;

      return fraction.reduce((a, b) => Number(a) / Number(b));
    }

    return Number(m.join(''));
  };

  this.getUnit = function(input) {
    const result = input.match(/(lbs|l|gal|kg|mi|km)$/gi);
    return result? result[0]: null;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    const units = {
      gal: 'L',
      lbs: 'kg',
      mi: 'km'
    };

    for (let prop in units) {
      if(prop == initUnit) result = units[prop];
      else if(units[prop].toLowerCase() == initUnit.toLowerCase()) result = prop;
    }

    return result;
  };

  this.spellOutUnit = function(data) {
    const init = `${data.initNum}${data.initUnit}`;
    const result = `${data.returnNum}${data.returnUnit}`;
    return `${init} converts to ${result}`;
  };

  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const miToKm = 1.60934;
    const lbsToKg = 0.45359;

    switch(initUnit.toLowerCase()) {
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
    let result = { initNum, initUnit, returnNum, returnUnit };

    console.log(result.toString());
    return result;
  };
};
