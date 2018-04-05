module.exports = {

    /*
    Matrix example (3x3):
    [[int, int, int],
     [int, int, int],
     [int, int, int],
     [int, int, int]]
     */

    /**
     * Rotation in place, by indexes
     * @param mtx
     * @param clockWise
     * @returns {*}
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
                    mtx[i][j] = mtx[j][last - i];
                    mtx[j][last - i] = mtx[last - i][last - j];
                    mtx[last - i][last - j] = mtx[last - j][i];
                    mtx[last - j][i] = temp;
                }


            }
        }

        return mtx;
    },


    /**
     * Rotation into a new matrix, by array operations
     * @param mtx
     * @param clockWise
     * @returns {*}
     */
    rotateMatrix2(mtx, clockWise = true) {
        const out = [];

        if (!mtx || !mtx.length || mtx.length !== mtx[0].length) {
            return null;
        }

        if (mtx.length === 1) {
            return mtx;
        }

        const side = mtx.length; // n

        for (let i = 0; i < side; i++) {
            const row = [];
            for (let j = 0; j < side; j++) {
                if (clockWise) {
                    row.unshift(mtx[j][i]);
                } else {
                    row.push(mtx[j][i]);
                }

            }

            if (clockWise) {
                out.push(row);
            } else {
                out.unshift(row);
            }
        }
        return out;
    }
};