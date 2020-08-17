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
    const result = input.match(/gal|L|lbs|kg|mi|km/);
    console.log(result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const result = initUnit;
    return result;
  };

  this.spellOutUnit = function(unit) {
    const result = unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    //const galToL = 3.78541;
    //const lbsToKg = 0.453592;
    //const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
};
