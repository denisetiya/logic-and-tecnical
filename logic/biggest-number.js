function maxRedigit(num) {

    if (typeof num !== 'number' || num < 100 || num > 999 || !Number.isInteger(num)) {
      return null;
    }
    
    const sortedDigits = num.toString().split('').sort((a, b) => b.localeCompare(a)).join('');
    
    return parseInt(sortedDigits, 10);
}


  
console.log(maxRedigit(123));
console.log(maxRedigit(231));
console.log(maxRedigit(321));


console.log(maxRedigit(-1));
console.log(maxRedigit(0));
console.log(maxRedigit(10));
console.log(maxRedigit(1000));