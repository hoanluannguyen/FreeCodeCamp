
function translatePigLatin(str) {

var vowels = ['a', 'i', 'e', 'o', 'u'],
result = str.split('');

// use , add multiple array without using multiple "var"

if (vowels.includes(str.charAt(0))) {
    return str += "way";
} else {
    for (var i = 0; i < str.length; i ++) {
        if (!vowels.includes(str[i])) {
            result.push(result.shift());
            //shift remove first item, push add last item , study again!
            // shift inside push to remove first item and add it in to last
        } else {
            result.push('ay');
            return result.join('');
        }
    }
}
}

console.log(translatePigLatin("california"));
