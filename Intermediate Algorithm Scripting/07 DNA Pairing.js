function pairElement(str) {
  var pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
  // 4 keys with 4 element
  return str.split('').map(function(item) {
    return [item, pairs[item]];
    // taking out the string and splitting it up to arrays
    // using bracket notation
    // using dot not work:   pairs.item   because there are no key in this object called item
    // so it will give "null" value
  });
}


console.log(pairElement("GCG"));
