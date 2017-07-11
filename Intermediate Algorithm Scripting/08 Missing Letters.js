
function fearNotLetter(str) {
  var numbers = str.split('').map(function(letter) {
    return letter.charCodeAt();
  });
//use "map" method to take array and create new arrayeverytime
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i+1] - numbers[i] > 1) {
      return String.fromCharCode(numbers[i] + 1);
    }
  }
return undefined;
}
console.log(fearNotLetter("abce"));


// [45, 46, 47, 50]
