module.exports = {


    /*

    Matrix example (3x3):
    [[int, int, int],
     [int, int, int],
     [int, int, int],
     [int, int, int]]
     */

    rotateMatrix(mtx, clockWise = true) {
        if (!mtx || !mtx.length || mtx.length !== mtx[0].length) {
            return null;
        }

        if (mtx.length === 1) {
            return mtx;
        }

        const side = mtx.length; // n
        const last = side - 1;

        for (let i = 0; i < side / 2; i++) {
            for (let j = i; j < side - 1 - i; j++) {
                let temp = mtx[i][j];

                // ClockWise rotation
                if (clockWise) {
                    mtx[i][j] = mtx[last - j][i];
                    mtx[last - j][i] = mtx[last - i][last - j];
                    mtx[last - i][last - j] = mtx[j][last - i];
                    mtx[j][last - i] = temp;
                }
                // Counter ClockWise rotation
                else {
                    mtx[i][j] = mtx[j][last - i]; // 1 - 4
                    mtx[j][last - i] = mtx[last - i][last - j]; // 4 - 16
                    mtx[last - i][last - j] = mtx[last - j][i]; // 16 - 13
                    mtx[last - j][i] = temp; // 13 - 1
                }


            }
        }

        return mtx;
    }

};