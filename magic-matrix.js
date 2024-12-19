function magicMatrix(matrix) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[0][j];
        }

        for (let i = 1; i < matrix.length; i++) {
            let rowSum = 0;
            for (let j = 0; j < matrix.length; j++) {
                rowSum += matrix[i][j];
            }
            if (rowSum !== sum) {
                return false
            }
        }

        for (let j = 0; j < matrix.length; j++) {
            let columnSum = 0;
            for (let i = 0; i < matrix.length; i++) {
                columnSum += matrix[i][j];
            }
            if (columnSum !== sum) {
                return false
            }
        }
        return true
}
console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))


console.log(magicMatrix([[11, 32, 45],
                    [21, 0, 1],
                    [21, 1, 1]]))