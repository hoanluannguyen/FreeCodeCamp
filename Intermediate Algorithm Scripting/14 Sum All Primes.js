
function sumPrimes(num) {
  var range = [];
  for (var i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      range.push(i);
    }
  }
  return range.reduce(function(a, b) {
    return a + b;
  });
}
// dont put everything in only function
// break it up to several funcion, easier to debug and use next time

function isPrimeNumber(num) {
  for (var y = 2; y < num; y++) {
    if (num % y === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);
