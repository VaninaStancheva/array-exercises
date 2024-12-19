function diagonalAttack(arrM) {
    const matrix = arrM.map(row => row.split(' ').map(Number));

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        const diagonalSum = mainDiagonalSum;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && j !== matrix.length - 1 - i) {
                    matrix[i][j] = diagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));

}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])