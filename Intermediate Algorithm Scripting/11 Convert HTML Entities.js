function convertHTML(str) {
    var entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&apos;',
    };
    return str.split('').map(function(char) {
        return entities[char] || char;
    }).join('');
    }

convertHTML("Dolce & Gabbana");
