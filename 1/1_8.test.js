const expect = require('chai').expect;
const {zeroMatrix} = require('./1_8');


describe('1.8 Zero Matrix', () => {
    it('should set zero to columns and rows', () => {
        // @formatter:off

        expect(zeroMatrix([[1,  2,  0],
                           [5,  6,  7],
                           [9,  10, 11],
                           [13, 14, 15]]))

            .to.be.deep.equal([[0,  0,   0],
                               [5,  6,   0],
                               [9,  10,  0],
                               [13, 14,  0]]);


        expect(zeroMatrix([[1,  2,  3],
                           [5,  6,  7],
                           [9,  10, 11],
                           [13, 14, 15]]))

            .to.be.deep.equal([[1,  2,   3],
                               [5,  6,   7],
                               [9,  10,  11],
                               [13, 14,  15]]);


        expect(zeroMatrix([[1,  2,  3],
                           [5,  0,  7],
                           [9,  10, 11],
                           [0, 14, 15]]))

            .to.be.deep.equal([[0,  0,   3],
                               [0,  0,   0],
                               [0,  0,  11],
                               [0, 0,  0]]);


        expect(zeroMatrix([[1,  2,  3],
                           [5,  0,  7],
                           [9,  10, 0],
                           [0, 14, 15]]))

            .to.be.deep.equal([[0, 0, 0],
                               [0, 0, 0],
                               [0, 0, 0],
                               [0, 0, 0]]);


        expect(zeroMatrix([[1,  0,  3,  4],
                           [5,  6,  7,  0],
                           [9,  10, 0, 12],
                           [0,  14, 15, 16]]))

            .to.be.deep.equal([[0, 0, 0, 0],
                               [0, 0, 0, 0],
                               [0, 0, 0, 0],
                               [0, 0, 0, 0]]);

        // @formatter:on
    });

    it('should return null for empty matrix', () => {
        expect(zeroMatrix()).to.be.equal(null);
        expect(zeroMatrix([])).to.be.equal(null);
    })
});