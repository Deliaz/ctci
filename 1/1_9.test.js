const expect = require('chai').expect;
const {isRotation} = require('./1_9');


describe('1.9 String Rotation', () => {
    it('should return true', () => {
        expect(isRotation('waterbottle', 'erbottlewat')).to.be.true;
        expect(isRotation('abcdef', 'defabc')).to.be.true;
    });

    it('should return false', () => {
        expect(isRotation('waterbottle', 'abcde')).to.be.false;
        expect(isRotation('abc', 'edca')).to.be.false;
    });
});