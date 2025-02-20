
function alternateCase(str) {
    return str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}


console.log(alternateCase('ABC'));
console.log(alternateCase('abc'));
console.log(alternateCase('Hello World'));