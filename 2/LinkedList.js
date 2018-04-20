/**
 * Singly Linked List
 */
class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    append(data) {
        const newNode = new LinkedList(data);
        let end = this;

        while (end.next) {
            end = end.next;
        }

        end.next = newNode;
    }
}

module.exports = LinkedList;