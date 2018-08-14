const expect = require('chai').expect;

const {isUnique1, isUnique2, isUnique3} = require('./1_1');

const UNIQUE_CASES = [
    'abcdef1',
    'Abcadef'
];

const NOT_UNIQUE_CASES = [
    'b  cad',
    'ClhebclaC'
];

describe('1.1 Is Unique', () => {
    it('should return true for string with unique characters', () => {
        UNIQUE_CASES.forEach(str => {
            expect(isUnique1(str)).to.be.true;
            expect(isUnique2(str)).to.be.true;
            expect(isUnique3(str)).to.be.true;

            // Cover branches
            expect(isUnique1('')).to.be.true;
        });
    });

    it('should return false for string with non-unique characters', () => {
        NOT_UNIQUE_CASES.forEach(str => {
            expect(isUnique1(str)).to.be.false;
            expect(isUnique2(str)).to.be.false;
            expect(isUnique3(str)).to.be.false;
        });
    });
});