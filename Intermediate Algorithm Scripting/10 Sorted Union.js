
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var result = [];
  args.reduce(function(a,b) {
      return a.concat(b);
  }).forEach(function(item) {
     if (result.indexOf(item) < 0) {
         result.push(item);
     }
 });
 return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
