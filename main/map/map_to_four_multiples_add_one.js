'use strict';
var map_to_four_multiples_add_one = function(collection){
  var b = collection.map(function (item) {
    return (item * 4 + 1);
  })
  return b;
};

module.exports = map_to_four_multiples_add_one;
