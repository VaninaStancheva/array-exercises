function printArray (arrayInput, delimiter) {
    const splitArray = arrayInput.join(`${delimiter}`);
    console.log(splitArray);
}
printArray(['One',

    'Two',

    'Three',

    'Four',

    'Five'], '-')