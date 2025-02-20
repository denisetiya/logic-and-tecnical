function nearestFibonacci(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);

    let fibs = [0, 1];
    while (fibs[fibs.length - 1] < totalSum) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }

    let nearestFib = fibs.reduce((prev, curr) => {
        return Math.abs(curr - totalSum) < Math.abs(prev - totalSum) ? curr : prev;
    });

    return Math.abs(nearestFib - totalSum);
}

const arr = [15, 1, 3];
console.log(nearestFibonacci(arr));  
