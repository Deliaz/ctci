const expect = require('chai').expect;
const NStack = require('./3_1');


describe('3.1 N-Stacks in array', () => {
    it('should work for 3 stacks', () => {
        const stack = new NStack(3);

        expect(stack.isEmpty(0)).to.be.equal(true);
        expect(stack.isEmpty(1)).to.be.equal(true);
        expect(stack.isEmpty(2)).to.be.equal(true);

        // Fill stack #0
        stack.push(0, 11);
        stack.push(0, 12);
        stack.push(0, 13);

        // Fill stack #1
        stack.push(1, 21);
        stack.push(1, 22);
        stack.push(1, 23);

        // Fill stack #2
        stack.push(2, 31);
        stack.push(2, 32);
        stack.push(2, 33);

        // Check length after fill
        expect(stack.isEmpty(0)).to.be.equal(false);
        expect(stack.isEmpty(1)).to.be.equal(false);
        expect(stack.isEmpty(2)).to.be.equal(false);

        // Check pop
        expect(stack.pop(0)).to.be.equal(13);
        expect(stack.pop(1)).to.be.equal(23);
        expect(stack.pop(2)).to.be.equal(33);

        // Check peek
        expect(stack.peek(0)).to.be.equal(12);
        expect(stack.peek(1)).to.be.equal(22);
        expect(stack.peek(2)).to.be.equal(32);
    });
});