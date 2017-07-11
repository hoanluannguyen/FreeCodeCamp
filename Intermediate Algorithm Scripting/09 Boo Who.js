
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

//we can do simplier way:
//return bool --- true || bool false;

//another way:
//return typeof bool === 'boolean';

//typeof method give us type of valus (string, object, number ...)
//google it to learn more information

console.log(booWho(null));
