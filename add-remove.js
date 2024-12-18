function addRemove (array) {

    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            numbers.push(i+1);
        } else if (array[i] === 'remove') {
            numbers.pop();
        }
    }

    if (numbers.length === 0) {
        console.log('Empty array');
    } else {
        console.log(numbers.join('\n'));
    }
}
addRemove(['remove', 'remove']);
addRemove(['add', 'add', 'remove', 'add', 'add']);