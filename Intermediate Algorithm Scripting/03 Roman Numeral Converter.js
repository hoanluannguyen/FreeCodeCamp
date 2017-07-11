function convertToRoman(num){
var romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

var result = '';

for (var key in romans) {
  if (num >= romans[key]) {
    result += key.repeat(Math.trunc(num / romans[key]));
    //Math.trunc do ground out the odd number,
    num -= romans[key] * Math.trunc(num / romans[key]);
  }
}

return result;
}
convertToRoman(36);

//https://www.youtube.com/watch?v=OHIeCYZWVuQ&t=331s
