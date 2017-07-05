
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array) {
    if (array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1){
      return value;
    }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// https://www.youtube.com/watch?v=ylbjD5fHytI
// use slice to divide array
// use filter to find the different
// inside of that, use comparison to find it
// use concat to combine all of differents arrays to have only last array
