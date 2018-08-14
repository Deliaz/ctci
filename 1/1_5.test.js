const expect = require('chai').expect;
const {oneAway} = require('./1_5');


describe('1.5 One Away', () => {
    it('should return true', () => {
        expect(oneAway('pale', 'ple')).to.be.true;
        expect(oneAway('ple', 'pale')).to.be.true;
        expect(oneAway('pales', 'pale')).to.be.true;
        expect(oneAway('pale', 'bale')).to.be.true;
        expect(oneAway('paaaa', 'paaak')).to.be.true;
    });

    it('should return false', () => {
        expect(oneAway('pale', 'bake')).to.be.false;
        expect(oneAway('pale', 'pa')).to.be.false;
        expect(oneAway('paaaa', 'pa')).to.be.false;
    });
});