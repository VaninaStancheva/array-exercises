function printElements(arr, step) {
    const newArr = [];
    for (let i = 0; i < arr.length; i = i + step) {
        let element = arr[i];
        newArr.push(element);
    }
    console.log(newArr);

}
printElements(['5', '20', '31', '4', '20'], 2 )