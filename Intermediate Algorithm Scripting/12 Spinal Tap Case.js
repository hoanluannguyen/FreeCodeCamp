
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  //betwwen '$1 $2' is the space, if we put any character between them,
  // for example "..." the result will be "this...is...Spinal...case"
  return str.replace(/\s|_/g, '-'); 
  // "|" mean or
  // "s" mean space?
  // "g" mean global
  // study again expression
}

spinalCase('This Is Spinal Tap');
