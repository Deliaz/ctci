const expect = require('chai').expect;
const {palindromePermutation} = require('./1_4');


describe('1.4 Palindrome Permutation', () => {
    it('should be true', () => {
        expect(palindromePermutation('Tact Coa')).to.be.true
        expect(palindromePermutation('abc bac')).to.be.true
        expect(palindromePermutation('abc bacz')).to.be.true
    });

    it('should be false', () => {
        expect(palindromePermutation('abcdef')).to.be.false
        expect(palindromePermutation('abcf bacz')).to.be.false
    });
});