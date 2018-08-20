/**
 * Reverse singly linked list
 * @param list {LinkedList}
 * @returns {LinkedList|null}
 */
module.exports = function (list) {
    if (!list) {
        return null;
    }

    let node = list;
    let prev = null;

    while (node) {
        const save = node.next;
        node.next = prev;
        prev = node;
        node = save;
    }

    return prev;
};