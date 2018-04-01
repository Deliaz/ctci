const expect = require('chai').expect;
const {URLify1, URLify2} = require('./1_3');


describe('1.3 URLify', () => {
    it('should encode space character to %20', () => {
        expect(URLify1('Mr John Smith ')).to.be.equal('Mr%20John%20Smith');
        expect(URLify2('Mr John Smith ')).to.be.equal('Mr%20John%20Smith');

        expect(URLify2('nospace')).to.be.equal('nospace');
        expect(URLify2('nospace')).to.be.equal('nospace');

        expect(URLify2('a  a')).to.be.equal('a%20%20a');
        expect(URLify2('a  a')).to.be.equal('a%20%20a');
    });
});