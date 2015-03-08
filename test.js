/*!
 * right-align <https://github.com/jonschlinkert/right-align>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var rightAlign = require('./');

var fixture = [
  'Lorem ipsum dolor sit amet,',
  'consectetur adipiscing',
  'elit, sed do eiusmod tempor incididunt',
  'ut labore et dolore',
  'magna aliqua. Ut enim ad minim',
  'veniam, quis'
];

var expected = [
  '           Lorem ipsum dolor sit amet,',
  '                consectetur adipiscing',
  'elit, sed do eiusmod tempor incididunt',
  '                   ut labore et dolore',
  '        magna aliqua. Ut enim ad minim',
  '                          veniam, quis'
];

describe('rightAlign', function () {
  it('should right align the strings in an array of strings:', function () {
    rightAlign(fixture).should.eql(expected);
  });

  it('should right align the lines in a string:', function () {
    rightAlign(fixture.join('\n')).should.eql(expected.join('\n'));
  });
});
