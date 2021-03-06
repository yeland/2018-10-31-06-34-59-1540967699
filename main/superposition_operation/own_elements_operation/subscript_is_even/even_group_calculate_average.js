'use strict';
var even_group_calculate_average = function (collection) {
  var even = choose_even(choose_index_even(collection));
  if (!even.length) {
    return [0];
  } else {
    return calculate_average(even);
  }
};
function choose_even(collection) {
  return collection.filter(function (element) {
    return element % 2 == 0;
  });
}
function choose_index_even(collection) {
  return collection.filter(function (element, index, self) {
    return index % 2;
  });
}
function calculate_average(collection) {
  var group_array = group(collection);
  return group_array.map(function (element) {
    return compute_average(element);
  })
}
function group(collection) {
  var one = choose_length(collection, 10);
  var two = choose_length(collection, 100);
  var three = choose_length(collection, 1000);
  var array = [];
  if (one.length) {
    array.push(one);
  }
  if (two.length) {
    array.push(two);
  }
  if (three.length) {
    array.push(three);
  }
  return array;
}
function choose_length(collection, number) {
  return collection.filter(function (element) {
    return element < number && element > number / 10;
  });
}
function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle + ele;
  });
  return Math.round(sum / collection.length);
}

module.exports = even_group_calculate_average;
