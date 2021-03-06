'use strict';

function grouping_count(collection) {
  var group = collection.reduce(function (allEle, ele) {
    if (ele in allEle) {
      allEle[ele]++;
    } else {
      allEle[ele] = 1;
    }
    return allEle;
  }, {});
  return group;
}

module.exports = grouping_count;
