module.exports = {

    /*
    Matrix example (3x3):
    [[int, int, int],
     [int, int, int],
     [int, int, int],
     [int, int, int]]
     */

    /**
     * Set column and row to zeroes if an element is equal to zero
     * @param mtx
     * @returns {*}
     */
    zeroMatrix(mtx) {
        if (!mtx || !mtx.length) {
            return null;
        }

        const zI = [];
        const zJ = [];

        for (let i = 0; i < mtx.length; i++) {
            for (let j = 0; j < mtx[i].length; j++) {
                if (mtx[i][j] === 0) {
                    zI.push(i);
                    zJ.push(j);
                }
            }
        }

        zI.forEach(i => {
            for (let j = 0; j < mtx[i].length; j++) {
                mtx[i][j] = 0
            }
        });

        zJ.forEach(j => {
            for (let i = 0; i < mtx.length; i++) {
                mtx[i][j] = 0
            }
        });


        return mtx;
    }
};