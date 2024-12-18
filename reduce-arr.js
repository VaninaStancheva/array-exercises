function reduceArr(arr) {
    const arrReduced = [];
    arrReduced.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] < arr[i]) {
            arrReduced.push(arr[i]);
        } 
    }
console.log(arrReduced);
}
reduceArr([1, 3, 8, 4, 10, 12, 3, 2, 24])