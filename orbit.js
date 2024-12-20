function generateOrbits (arr) {
    const rows = arr[0];
    const cols = arr[1];
    const starX = arr[2];
    const starY = arr[3];

    const matrix = Array.from({length: rows}, () => Array(cols).fill(0));

    matrix[starX][starY] = 1;

    let value = 2;

    while (true) {
        let added = false;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === value - 1) {
                    for (let dx = -1; dx <= 1; dx++) {
                        for (let dy = -1; dy <= 1; dy++) {
                            const x = i + dx;
                            const y = j + dy;

                            if (
                                x >= 0 && x < rows &&
                                y >= 0 && y < cols &&
                                matrix[x][y] === 0
                            ) {
                                matrix[x][y] = value;
                                added = true;
                            }
                        }
                    }
                }
            }
        }

        if (!added) break;
        value++;
    }
    console.log(matrix);
}
    generateOrbits ([4, 4, 0, 0]);
    generateOrbits ([5, 5, 2, 2])