const LinkedList = require('./LinkedList');

module.exports = {

    /**
     * Removing by copying only unique items to a new list
     * @param list
     * @returns {*}
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
    }
};