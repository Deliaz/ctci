const LinkedList = require('./LinkedList');

module.exports = {

    /**
     * Partition
     */
    partition(node, x) {
        if (!node || typeof x !== 'number') {
            return null;
        }

        let lower = null;
        let higher = null;

        while (node !== null) {
            if (node.data < x) {
                if (!lower) {
                    lower = new LinkedList(node.data);
                } else {
                    lower.append(node.data);
                }
            } else {
                if (!higher) {
                    higher = new LinkedList(node.data);
                } else {
                    higher.append(node.data);
                }
            }

            node = node.next;
        }

        const returnNode = lower;
        while (lower.next !== null) {
            lower = lower.next;
        }

        lower.next = higher;

        return returnNode;
    }
};

