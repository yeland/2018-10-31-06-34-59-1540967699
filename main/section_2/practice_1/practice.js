function count_same_elements(collection) {
  var same_object = grouping_count(collection);
  var arr = new Array();
  for(let ele in same_object){
    let single = new Object();
    single.key = ele;
    single.count = same_object[ele];
    arr.push(single);
  }
  return arr;
  //在这里写入代码
}
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
  //在这里写入代码
}
module.exports = count_same_elements;
