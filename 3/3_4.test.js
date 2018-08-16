const expect = require('chai').expect;
const QueueViaStacks = require('./3_4');


describe('3.4 Queue Via Stacks', () => {
    it('', () => {
        const queue = new QueueViaStacks();

        expect(queue.isEmpty()).to.be.true;

        queue.add('1');
        queue.add('2');
        queue.add('3');

        expect(queue.peek()).to.be.equal('1');
        expect(queue.remove()).to.be.equal('1');

        expect(queue.peek()).to.be.equal('2');
        expect(queue.remove()).to.be.equal('2');

        expect(queue.isEmpty()).to.be.false;
        expect(queue.remove()).to.be.equal('3');

        expect(queue.isEmpty()).to.be.true;
    });

    it('', () => {
        const queue = new QueueViaStacks();

        queue.add('1');
        queue.add('2');

        expect(queue.remove()).to.be.equal('1');

        queue.add('3');
        expect(queue.remove()).to.be.equal('2');
        expect(queue.remove()).to.be.equal('3');
    });
});