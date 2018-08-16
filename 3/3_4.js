const Stack = require('./Stack');

class QueueViaStacks {
    constructor() {
        this.inputStack = new Stack();
        this.reverseStack = new Stack();
    }

    add(task) {
        this.inputStack.push(task);
    }

    _reverse() {
        if (this.reverseStack.isEmpty()) {
            while (!this.inputStack.isEmpty()) {
                this.reverseStack.push(this.inputStack.pop());
            }
        }
    }

    remove() {
        this._reverse();
        return this.reverseStack.pop();
    }

    peek() {
        this._reverse();
        return this.reverseStack.peek();
    }

    isEmpty() {
        return this.inputStack.isEmpty() && this.reverseStack.isEmpty();
    }
}

module.exports = QueueViaStacks;