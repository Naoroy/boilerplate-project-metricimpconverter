/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

/* global suite, test */

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      assert.equal(convertHandler.getNum('32L'), 32);
      assert.equal(convertHandler.getNum('32lbs'), 32);
      assert.equal(convertHandler.getNum('212gal'), 212);
      done();
    });

    test('Decimal Input', function(done) {
      assert.equal(convertHandler.getNum('3.2lbs'), 3.2, '3.2lbs => 3.2');
      assert.equal(convertHandler.getNum('45.3lbs'), 45.3);
      done();
    });

    test('Fractional Input', function(done) {
      assert.equal(convertHandler.getNum('3/2lbs'), 3/2);
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {
      assert.equal(convertHandler.getNum('2.5/4lbs'), 2.5/4);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      assert.equal(convertHandler.getNum('3/lbs'), null);
      assert.equal(convertHandler.getNum('2/42/2lbs'), null);
      done();
    });
    
    test('No Numerical Input', function(done) {
      assert.equal(convertHandler.getNum(''), null);
      assert.equal(convertHandler.getNum('kg'), null);
      done();
    });
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(unit) {
        assert.equal(convertHandler.getUnit('24' + unit), unit);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('24aag'), null);
      assert.equal(convertHandler.getUnit('24kgs'), null);
      done();
    });
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(unit, i) {
        assert.equal(convertHandler.getReturnUnit(unit), expect[i]);
      });
      done();
    });
  });
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      assert.equal(1, 1);
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
      const input = [5, 'l'];
      const expected = 1.3208;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

    test('Mi to Km', function(done) {
      const input = [5, 'mi'];
      const expected = 8.0467;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

    test('Km to Mi', function(done) {
      const input = [5, 'km'];
      const expected = 3.1068;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function(done) {
      const input = [3, 'lbs'];
      const expected = 1.3607 ;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function(done) {
      const input = [3, 'kg'];
      const expected = 6.6138;

      assert.approximately(
        convertHandler.convert(input[0],input[1]),
        expected, 0.1); //0.1 tolerance
      done();
    });

  });

});
