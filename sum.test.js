import jest from 'jest'
import sum from './sum.js'
import { describe } from 'yargs'
import { request } from 'http'

// sum.test.js
const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // this is the value expected by the test
});
