const expect = require('chai').expect;
const StackWithMin = require('./3_2');


describe('3.2 Min Stack', () => {
    it('should return min value from stack', () => {
        const stack = new StackWithMin();

        stack.push(10);
        expect(stack.min()).to.be.equal(10);

        stack.push(9);
        stack.push(8);
        stack.push(7);
        expect(stack.min()).to.be.equal(7);

        stack.push(6);
        stack.push(5);
        expect(stack.pop()).to.be.equal(5);
        expect(stack.min()).to.be.equal(6);

        expect(stack.pop()).to.be.equal(6);
        expect(stack.peek()).to.be.equal(7);
        expect(stack.min()).to.be.equal(7);
    });

    it('should keep min value', () => {
        const stack = new StackWithMin();

        stack.push(10);
        stack.push(3); // min
        stack.push(9);
        stack.push(8);
        stack.push(7);

        expect(stack.min()).to.be.equal(3);
        expect(stack.pop()).to.be.equal(7);
        expect(stack.pop()).to.be.equal(8);
        expect(stack.min()).to.be.equal(3);
    });
});