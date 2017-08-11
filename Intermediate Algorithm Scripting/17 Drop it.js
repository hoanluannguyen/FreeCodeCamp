
function dropElements(arr, func) {
  while(!func(arr[0])) {
  // "!" turn true to false and opposite
    arr.shift();
  }
  return arr;
}
//while loop is perfect when we dont know how many time it loop thru something
//as long it false, the loop will remove first item

dropElements([1, 2, 3], function(n) {return n < 3; });
