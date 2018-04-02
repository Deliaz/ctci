const expect = require('chai').expect;
const {checkPermutation} = require('./1_2');


describe('1.2 Check Permutation', () => {
    it('should return true', () => {
        expect(checkPermutation('abc', 'bac')).to.be.true;
        expect(checkPermutation('afmcfb', 'ffacbm')).to.be.true;
    });

    it('should return false', () => {
        expect(checkPermutation('abcdef', 'bcdef')).to.be.false;
        expect(checkPermutation('xyza', 'xyzw')).to.be.false;
    });
});