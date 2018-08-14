/**
 * Stack class
 */
class Stack {
    /**
     * @constructor
     */
    constructor() {
        this._stack = [];
    }

    /**
     * Ejects last element
     * @returns {*}
     */
    pop() {
        return this._stack.pop();
    }

    /**
     * Adds new element
     * @param value
     */
    push(value) {
        this._stack.push(value);
    }


    /**
     * Returns last element without ejecting
     * @returns {*}
     */
    peek() {
        return this._stack[this._stack.length - 1];
    }


    /**
     * Return true if stack is empty, otherwise returns false
     * @returns {boolean}
     */
    isEmpty() {
        return this._stack.length === 0;
    }
}

module.exports = Stack;