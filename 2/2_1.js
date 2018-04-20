const LinkedList = require('./LinkedList');

module.exports = {

    /**
     * Removing by copying only unique items to a new list.
     * O(n) time
     * O(n) space
     * @param list
     ** @returns {*}
     */
    removeDups(list) {
        if (!list) {
            return null;
        }

        let node = list;
        let newList = new LinkedList(node.data);
        const uniq = new Set([node.data]);

        while (node.next) {
            node = node.next;

            if (!uniq.has(node.data)) {
                newList.append(node.data);
                uniq.add(node.data);
            }
        }

        return newList;
    },


    /**
     * Runner technique
     * O(1) space
     * O(N^2) time
     * @param head
     * @returns {*}
     */
    removeDups2(head) {
        if (!head) {
            return null;
        }

        let current = head;

        while (current !== null) {
            let runner = current;

            while (runner && runner.next !== null) {
                if (runner.next.data === current.data) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }

            current = current.next;
        }

        return head;
    }
};