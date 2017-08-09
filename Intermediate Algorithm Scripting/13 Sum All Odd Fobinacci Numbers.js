//study more about sequence

Array.prototype.last = function() {
  return this[this.length-1];
};

Array.prototype.secondToLast = function() {
  return this[this.length-2];
};

function sumFibs(num) {
  var sequence = [1,1];

  while (sequence.secondToLast() + sequence.last() <= num) {
    // while loop take the secondToLast number and last number
    // and add it in, like 1+1 = 2, so they add 2 to the sequence
    sequence.push(sequence.secondToLast() + sequence.last());
  }

  return sequence.filter(function(num) {
    return num % 2!== 0;
  }).reduce(function(a,b) {
    return a + b;
  });
}

sumFibs(4);
