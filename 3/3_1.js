/**
 * NStack class
 * Allow to keep N-stacks in one array
 */
class NStack {

    /**
     * @constructor
     * @param n {Integer} Number os stacks
     */
    constructor(n) {
        this._stack = [];
        this._length = Array.from({length: n}, () => 0);
        this._n = n;
    }


    /**
     * Returns next index for new item in a stack
     * @param stackId {Integer} Stack ID identifier
     * @returns {*}
     * @private
     */
    _getNewIndex(stackId) {
        return this._length[stackId] * this._n + stackId;
    }

    /**
     * Returns index of last item in a stack
     * @param stackId {Integer} Stack ID identifier
     * @returns {*}
     * @private
     */
    _getLastIndex(stackId) {
        return (this._length[stackId] - 1) * this._n + stackId;
    }


    /**
     * Ejects last element from a stack
     * @param stackId {Integer} Stack ID identifier
     * @returns {*}
     */
    pop(stackId) {
        if (this._length[stackId]) {
            const index = this._getLastIndex(stackId);
            const val = this._stack[index];

            this._stack[index] = undefined;
            this._length[stackId] -= 1;

            return val;
        }
    }

    /**
     * Adds new item to a stack
     * @param stackId {Integer} Stack ID identifier
     * @param value {*}
     */
    push(stackId, value) {
        const index = this._getNewIndex(stackId);
        this._stack[index] = value;
        this._length[stackId] += 1;
    }

    /**
     * Returns last element from stack without ejecting
     * @param stackId {Integer} Stack ID identifier
     * @returns {*}
     */
    peek(stackId) {
        if (this._length[stackId]) {
            const index = this._getLastIndex(stackId);
            return this._stack[index];
        }
    }

    /**
     * Return true if stack is empty, otherwise returns false
     * @param stackId {Integer} Stack ID identifier
     * @returns {boolean}
     */
    isEmpty(stackId) {
        return this._length[stackId] === 0;
    }
}

module.exports = NStack;