function productArray(arr) {
    const n = arr.length;

    const output = new Array(n).fill(1);
    
    const totalProduct = arr.reduce((acc, curr) => acc * curr, 1);
    
    for (let i = 0; i < n; i++) {
        output[i] = totalProduct / arr[i];
    }
    
    return output;
}


console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));