/*jshint node:true, undef:true, unused:true, indent:2 */

var sliced = require('sliced');

module.exports = swallower;

function swallower(msg, callback) {
  'use strict';
  
  if (typeof msg !== 'string' && typeof callback !== 'function') {
    throw new Error('Wrong usage of node-swallow.');
  }
  
  return function (err) {
    if (err) {
      err.message_ = err.message;
      err.message = msg;
      throw err;
    }
    
    callback.apply(callback, sliced(arguments, 1));
  };
}
