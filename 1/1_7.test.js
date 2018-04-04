const expect = require('chai').expect;
const {rotateMatrix} = require('./1_7');


describe('1.7 Matrix rotation', () => {
    it('should rotate matrix by 90deg (clockwise)', () => {
        // @formatter:off
        const result = rotateMatrix([[1, 2, 3, 4],
                                     [5, 6, 7, 8],
                                     [9, 10, 11, 12],
                                     [13, 14, 15, 16]]);

        expect(result).to.be.deep.equal([[13, 9, 5, 1],
                                         [14, 10, 6, 2],
                                         [15, 11, 7, 3],
                                         [16, 12, 8, 4]]);

        expect(rotateMatrix([[1,2],
                             [3,4]
                             ]))
            .to.be.deep.equal(
                            [[3,1],
                             [4,2]]);

        expect(rotateMatrix([[1,2,3],
                             [1,2,3],
                             [1,2,3]
                             ]))
            .to.be.deep.equal(
                            [[1,1,1],
                             [2,2,2],
                             [3,3,3]]);
        // @formatter:on
    });


    it('should rotate matrix by -90deg (counter clockwise)', () => {
        // @formatter:off
        const result = rotateMatrix([[1, 2, 3, 4],
                                     [5, 6, 7, 8],
                                     [9, 10, 11, 12],
                                     [13, 14, 15, 16]], false); // false => ccw

        expect(result).to.be.deep.equal([[4, 8, 12, 16],
                                         [3, 7, 11, 15],
                                         [2, 6, 10, 14],
                                         [1, 5, 9, 13]]);

        expect(rotateMatrix([[1,2],
                             [3,4]
                             ], false)) // ccw
            .to.be.deep.equal(
                            [[2,4],
                             [1,3]]);

        expect(rotateMatrix([[1,2,3],
                             [1,2,3],
                             [1,2,3]
                             ], false)) // ccw
            .to.be.deep.equal(
                            [[3,3,3],
                             [2,2,2],
                             [1,1,1]]);
        // @formatter:on
    });

    it('should return same matrix after two rotations: +90deg -90deg', () => {
        // @formatter:off
        let result = rotateMatrix([[1, 2, 3, 4],
                                     [5, 6, 7, 8],
                                     [9, 10, 11, 12],
                                     [13, 14, 15, 16]]); //cw

        result = rotateMatrix(result, false); // ccw

        expect(result).to.be.deep.equal([[1, 2, 3, 4],
                                         [5, 6, 7, 8],
                                         [9, 10, 11, 12],
                                         [13, 14, 15, 16]]);
        // @formatter:on
    });
});