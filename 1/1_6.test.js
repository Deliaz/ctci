const expect = require('chai').expect;
const {compress} = require('./1_6');


describe('1.6 String Compression', () => {
    it('should compress string', () => {
        expect(compress('aabcccccaaa')).to.be.equal('a2b1c5a3');
        expect(compress('aaaaa')).to.be.equal('a5');
        expect(compress('aabbczddffff')).to.be.equal('a2b2c1z1d2f4');
    });

    it('should not compress string', () => {
        expect(compress('abc')).to.be.equal('abc');
        expect(compress('aabbccfdx')).to.be.equal('aabbccfdx');
    });
});