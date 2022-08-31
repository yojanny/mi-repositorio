'use strict';

const sum = require('./sum');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');

const validOperations = ['sum', 'sub', 'mul', 'div'];

module.exports = {
  sum, // sum: sum
  sub: sub,
  mul: mul,
  div: div,
  operacionesValidas: validOperations,
};
