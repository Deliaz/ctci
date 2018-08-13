const Stack = require('./Stack');

class StackWithMin extends Stack {
    constructor() {
        super();
        this._minStack = new Stack();
    }


    push(value) {
        super.push(value);

        if (this._minStack.isEmpty() || value < this._minStack.peek()) {
            this._minStack.push(value);
        }
    }

    pop() {
        const value = super.pop();

        if (value <= this._minStack.peek()) {
            this._minStack.pop();
        }

        return value;
    }

    min() {
        return this._minStack.peek();
    }
}

module.exports = StackWithMin;