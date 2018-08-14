const Stack = require('./Stack');

class StackOfStacks extends Stack {
    constructor(limit) {
        super();

        this._limit = limit;
        this._currentLength = 0;
        this._stack = [new Stack()];
    }


    push(value) {
        if (this._currentLength >= this._limit || !this._stack.length) {
            const newStack = new Stack();
            newStack.push(value);
            this._stack.push(newStack);
            this._currentLength = 1;
        } else {
            super.peek().push(value);
            this._currentLength += 1;
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this._stack[this._stack.length - 1].pop();
            if (this._currentLength > 1) {
                this._currentLength -= 1;
            } else {
                this._stack.pop();
                this._currentLength = this._limit;
            }
            return value;
        }
    }

    peek() {
        return this._stack[this._stack.length - 1].peek();
    }


    popAt(idx) {
        if (idx < 0 || idx + 1 > this._stack.length) {
            throw new Error('no such stack');
        }

        if (idx + 1 === this._stack.length) {
            return this.pop();
        }

        const value = this._stack[idx].pop();

        const remainValues = [];
        while (this._stack.length) {
            const val = this.pop();
            if (val) {
                remainValues.push(val);
            }
        }

        remainValues.reverse().forEach(item => this.push(item));

        return value;
    }

}

module.exports = StackOfStacks;