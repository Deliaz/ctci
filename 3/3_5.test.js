const expect = require('chai').expect;
const Stack = require('./Stack');
const sortStack = require('./3_5');

describe('3.5 Sort Stack', () => {
    it('should sort the stack', () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(6);
        stack.push(3);
        stack.push(7);
        stack.push(2);
        stack.push(4);
        stack.push(1);

        sortStack(stack);

        expect(stack._stack).to.be.deep.equal([7, 6, 5, 4, 3, 2, 1]);
    });

    it('should sort the stack with one element', () => {
        const stack = new Stack();
        stack.push(1);

        sortStack(stack);
        expect(stack._stack).to.be.deep.equal([1]);
    });

    it('should return null for wrong args', () => {
        expect(sortStack()).to.be.equal(null);
        expect(sortStack(new Stack())).to.be.equal(null);
    });
});