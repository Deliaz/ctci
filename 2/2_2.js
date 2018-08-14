module.exports = {

    /**
     * Collect node to stack and get the Kth to the last
     * O(n) space and time
     * @param node
     * @param k
     * @returns {*}
     */
    find(node, k) {
        if (!node) {
            return null;
        }
        const stack = [];

        while (node !== null) {
            stack.push(node);
            node = node.next;
        }

        let kth;
        if (k && k !== 1) { // if not zero
            while (k--) {
                kth = stack.pop();
            }
        } else {
            kth = stack[stack.length - 1]; // last element
        }

        return kth;
    },


    /**
     * Iterative way with two pointers
     * @param node
     * @param k
     * @returns {number|null}
     */
    find2(node, k) {
        if (!node) {
            return null;
        }

        let p1 = node;
        let p2 = node;

        for (let i = 0; i < k; i++) {
            p1 = p1.next;
            if (p1 === null) {
                return null;
            }
        }

        while (p1 !== null) {
            p1 = p1.next;

            if (p2.next !== null) { // in case if k equals to zero
                p2 = p2.next;
            }

        }

        return p2;
    }
};

