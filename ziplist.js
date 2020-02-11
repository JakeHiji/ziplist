
const testListA = ['a', 'b', 'c'];
const testListB = [1, 2, 3];

function zipList(list1, list2){
  const result = [];
  for ( let i = 0; i < list1.length; i++){
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(testListA, testListB));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testListA, testListB));