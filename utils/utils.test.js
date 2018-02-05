const utils = require('./utils');

test('should add two numbers', () => {
  expect(utils.add(12, 13)).toBe(25);
});

test('result should be a number', () => {
  expect(typeof utils.add(12, 13)).toBe('number');
});

test('should square a number', () => {
  expect(utils.square(4)).toBe(16);
});

test('result should be a number', () => {
  expect(typeof utils.square(4)).toBe('number');
});

test('should be an object', () => {
  expect(typeof utils.setname({}, 'Tyler Buchheim')).toBe('object');
});

test('should set first name', () => {
  expect(utils.setname({}, 'Tyler Buchheim').firstName).toBe('Tyler');
});

test('should set last name', () => {
  expect(utils.setname({}, 'Tyler Buchheim').lastName).toBe('Buchheim');
});