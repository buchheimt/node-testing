const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {

    test('should add two numbers', () => {
      expect(utils.add(12, 13)).toBe(25);
    });
    
    test('result should be a number', () => {
      expect(typeof utils.add(12, 13)).toBe('number');
    });
  });
  
  describe('#asyncAdd', () => {

    test('should async add two numbers', done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum).toBe(7);
        done();
      });
    });
    
    test('should return a number', done => {
      utils.asyncAdd(4, 3, sum => {
        expect(typeof sum).toBe('number');
        done();
      });
    });
  });
  
  describe('#square', () => {

    test('should square a number', () => {
      expect(utils.square(4)).toBe(16);
    });
    
    test('result should be a number', () => {
      expect(typeof utils.square(4)).toBe('number');
    });
  });
  
  describe('#asyncSquare', () => {

    test('should async square a number', done => {
      utils.asyncSquare(4, square => {
        expect(square).toBe(16);
        done();
      });
    });
    
    test('result should be a number', done => {
      utils.asyncSquare(4, square => {
        expect(typeof square).toBe('number');
        done();
      });
    });
  });

  describe('#setName', () => {

    test('result should be an object', () => {
      expect(typeof utils.setname({}, 'Tyler Buchheim')).toBe('object');
    });
    
    test('should set first name', () => {
      expect(utils.setname({}, 'Tyler Buchheim').firstName).toBe('Tyler');
    });
    
    test('should set last name', () => {
      expect(utils.setname({}, 'Tyler Buchheim').lastName).toBe('Buchheim');
    });
  });
});

