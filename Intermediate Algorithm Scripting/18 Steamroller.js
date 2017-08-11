
function steamrollArray(arr) {
  return arr.reduce(function(acc, next) {
    if (Array.isArray(next)) {
      return steamrollArray(acc.concat(next));
    } else {
      return acc.concat(next);
    }
  }, [] );
  // "[]" add more argument
}

steamrollArray([1, [2], [3, [[4]]]]);


//other way:
function steamrollArray(arr) {
  return arr.reduce(function(acc, next) {
    return acc.concat(Array.isArray(next) ? steamrollArray(next) : next);
// if Array.isArray(next) is true, return the follow
    }, [] );
  }
steamrollArray([1, [2], [3, [[4]]]]);
