function reverseWords(str) {
    const words = str.split(' ');

    const reversedWords = words.map(word => {
        const reversedWord = word.split('').reverse().join('');
        return reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1).toLowerCase();
    });

    return reversedWords.join(' ');
}

console.log(reverseWords('I am A Great human')); 
