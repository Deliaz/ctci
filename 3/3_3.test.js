const expect = require('chai').expect;
const StackOfStacks = require('./3_3');


describe('3.3 Stack of Stacks', () => {
    it('should act like a usual stack', () => {
        const stack = new StackOfStacks(2);

        // [ [1,2], [4,3], [5,6], [7,8], [9] ]
        for (let i = 1; i < 10; i++) {
            stack.push(i);
        }

        expect(stack.pop()).to.be.equal(9);
        expect(stack.peek()).to.be.equal(8);
        expect(stack.pop()).to.be.equal(8);
        expect(stack.pop()).to.be.equal(7);
        expect(stack.peek()).to.be.equal(6);

        // Check stack length after pop
        expect(stack._stack.length).to.be.equal(3);
    });

    it('should support "popAt" method', () => {
        const stack = new StackOfStacks(3);

        // -----------------------------
        // [ [1,2,3], [4,5,6], [7,8,9] ]
        // -----------------------------
        //      0        1        2

        for (let i = 1; i < 10; i++) {
            stack.push(i);
        }

        expect(stack.popAt(1)).to.be.equal(6);
        // Should have another pop after move
        expect(stack.popAt(1)).to.be.equal(7);


        expect(stack.popAt(2)).to.be.equal(9); // Remove last value from 3rd (index: 2) stack
        expect(stack._stack.length).to.be.equal(2)
    });

    it('should throw error for method "popAt" if index doesn\'t exist', () => {
        const stack = new StackOfStacks(3);

        // -----------------------------
        // [ [1,2,3], [4,5,6], [7,8,9] ]
        // -----------------------------
        //      0        1        2

        for (let i = 1; i < 10; i++) {
            stack.push(i);
        }

        expect(stack.popAt.bind(stack, 3)).to.throw();
    });
});