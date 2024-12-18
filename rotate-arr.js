function rotateArr (arr, number) {

    for (let i = 0; i < number; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr);
}
rotateArr([1, 2, 3, 4, 5], 2);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15)