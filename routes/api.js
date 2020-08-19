/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

//var expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  const convertHandler = new ConvertHandler();

  app.route('/api/convert/')
    .get(function (req, res){
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);

      if (!initNum && !initUnit) res.status(400)
        .json({error: 'Invalid number and unit'});
      if (!initUnit) res.status(400).json({error: 'Invalid unit'});

      if (!initNum) res.status(400).json({error: 'Invalid number'});

      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      let result = { initNum, initUnit, returnNum, returnUnit};
      result.string = convertHandler.spellOutUnit(result);
      res.json(result);
    });
};
