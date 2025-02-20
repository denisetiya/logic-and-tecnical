function findMiddleLetters(firstLetter, lastLetter) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    

    const firstIndex = alphabet.indexOf(firstLetter);
    const lastIndex = alphabet.indexOf(lastLetter);
    
    if (firstIndex > lastIndex) {
        [firstIndex, lastIndex] = [lastIndex, firstIndex]; 
    }
    
    const middleLetters = [];
    const middleLength = lastIndex - firstIndex + 1;

    if (middleLength % 2 === 1) {
        const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        middleLetters.push(alphabet[middleIndex]);
    } else {
        const startMiddle = Math.floor((firstIndex + lastIndex) / 2);
        const endMiddle = Math.ceil((firstIndex + lastIndex) / 2);
        
        for (let i = startMiddle; i <= endMiddle; i++) {
            middleLetters.push(alphabet[i]);
        }
    }
    
    return middleLetters.join('');
}

console.log(findMiddleLetters('Q', 'U')); 
console.log(findMiddleLetters('R', 'U')); 
console.log(findMiddleLetters('T', 'Z')); 
console.log(findMiddleLetters('Q', 'Z')); 
