
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


var srcKeys = Object.keys(source);
return collection.filter(function(obj) {
    //"collection" give the value of "key"
    //for example, Object.keys(collection[0]) give the first object
    //{ first: "Romeo", last: "Montague" }
    //of the whatIsInAName array
    //it will show all the key of that Object. FIRST & LAST
    return srcKeys.every(function(key) {
        //"every" return to true/false value
        //if every item in array pass the test, it return true,
        //if just 1 item in array isn't pass, it return false,
        return obj.hasOwnProperty(key) && obj[key] === source [key];
    });
});

  // Only change code above this line
 //return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
