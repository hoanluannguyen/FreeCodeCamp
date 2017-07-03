function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  //define min number in array
  var max = Math.max(arr[0], arr[1]);
  //define max number in array
  var range = [];

  for (var i = min ; i <= max ; i++) {
    range.push(i);
  }
  //list all the numbers from min to max, from left to right

  return range.reduce(function(a,b) {
    return a + b;
  });
}

sumAll([1, 10]);
