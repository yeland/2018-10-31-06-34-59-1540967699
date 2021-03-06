'use strict';

function spilt_to_zero(number, interval) {
  var collection = [];
  let i = number;
  do {
    collection.push(i);
    i = Math.round((i - interval) * 10) / 10;
  } while (i > 0)
  collection.push(i);
  return collection;
}

module.exports = spilt_to_zero;
