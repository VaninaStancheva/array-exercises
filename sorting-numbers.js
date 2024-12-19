function sortingNumbers(arrNumbers) {

    arrNumbers.sort((a, b) => a - b);
    const sortedArr = [];
    for (let i = 0; i < arrNumbers.length; i++) {
        sortedArr.push(arrNumbers[i]);
        let bigNum = arrNumbers.pop();
        if (arrNumbers.length > 1 ) {
            sortedArr.push(bigNum);
        }
    }
console.log(sortedArr);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);